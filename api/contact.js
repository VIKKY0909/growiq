import crypto from "crypto";

// In-memory rate limiting map for warm containers
const rateLimitMap = new Map();

// Allowed origins
const ALLOWED_ORIGINS = new Set([
  "https://groowiq.com",
  "https://www.groowiq.com"
]);

// Clean rateLimitMap periodically to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000).unref(); // Run every 5 minutes and don't block event loop

export default async function handler(req, res) {
  // Set Cache-Control header first
  res.setHeader("Cache-Control", "no-store, max-age=0, must-revalidate");

  // 1. Request Boundary Checks
  // Method POST only
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Content-Type application/json only
  const contentType = req.headers["content-type"] || "";
  if (!contentType.includes("application/json")) {
    return res.status(415).json({ error: "Unsupported Media Type" });
  }

  // Cap Content-Length at 16 KB (16384 bytes)
  const contentLength = parseInt(req.headers["content-length"] || "0", 10);
  if (contentLength > 16384) {
    return res.status(413).json({ error: "Payload Too Large" });
  }

  // Origin verification
  const origin = req.headers["origin"] || "";
  const isLocalhost = process.env.NODE_ENV === "development" || origin.includes("localhost") || origin.includes("127.0.0.1");
  if (origin && !ALLOWED_ORIGINS.has(origin) && !isLocalhost) {
    return res.status(403).json({ error: "Forbidden: Origin Not Allowed" });
  }

  // Set CORS headers for allowed origins
  if (origin && (ALLOWED_ORIGINS.has(origin) || isLocalhost)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }

  // Fetch client IP for rate limiting
  const ip = req.headers["x-real-ip"] || req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "127.0.0.1";

  // 2. Throttling / Rate Limiting
  const now = Date.now();
  const minuteKey = `burst:${ip}`;
  const hourKey = `sustained:${ip}`;

  // Burst limit check (3 requests per minute)
  const burstRecord = rateLimitMap.get(minuteKey) || { count: 0, resetTime: now + 60000 };
  if (now > burstRecord.resetTime) {
    burstRecord.count = 0;
    burstRecord.resetTime = now + 60000;
  }
  burstRecord.count += 1;
  rateLimitMap.set(minuteKey, burstRecord);

  if (burstRecord.count > 3) {
    return res.status(429).json({ error: "Too Many Requests: Burst limit exceeded." });
  }

  // Sustained limit check (10 requests per hour)
  const sustainedRecord = rateLimitMap.get(hourKey) || { count: 0, resetTime: now + 3600000 };
  if (now > sustainedRecord.resetTime) {
    sustainedRecord.count = 0;
    sustainedRecord.resetTime = now + 3600000;
  }
  sustainedRecord.count += 1;
  rateLimitMap.set(hourKey, sustainedRecord);

  if (sustainedRecord.count > 10) {
    return res.status(429).json({ error: "Too Many Requests: Hour limit exceeded." });
  }

  try {
    const { name, email, phone, service, project, turnstileToken, idempotencyKey } = req.body || {};

    // 3. Schema & Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 80) {
      return res.status(400).json({ error: "Invalid name (must be 2-80 chars)." });
    }

    if (!email || typeof email !== "string" || email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    // Phone normalization (keep only digits and leading +)
    const normalizedPhone = (phone || "").toString().replace(/[^\d+]/g, "");
    if (normalizedPhone.length < 8 || normalizedPhone.length > 15) {
      return res.status(400).json({ error: "Invalid phone number (must be 8-15 digits)." });
    }

    // Service enum check
    const allowedServices = ["seo", "performance-marketing", "social-media-marketing", "web-development", "branding"];
    if (!service || typeof service !== "string" || !allowedServices.includes(service)) {
      return res.status(400).json({ error: "Invalid service selected." });
    }

    // Project (optional text, max 2000 chars)
    const cleanProject = (project || "").toString();
    if (cleanProject.length > 2000) {
      return res.status(400).json({ error: "Project description exceeds 2000 characters limit." });
    }

    // Turnstile token check
    if (!turnstileToken || typeof turnstileToken !== "string") {
      return res.status(400).json({ error: "Missing Turnstile verification token." });
    }

    // 4. Bot Protection (Turnstile Siteverify)
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || "1x0000000000000000000000000000000AA"; // Test key fallback
    const siteverifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
        remoteip: ip
      })
    });

    const verifyData = await siteverifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: "Bot verification failed." });
    }

    // Verify expected hostname to prevent token reuse on other domains
    const expectedHostnames = ["groowiq.com", "www.groowiq.com"];
    if (verifyData.hostname && !expectedHostnames.includes(verifyData.hostname) && !isLocalhost) {
      return res.status(400).json({ error: "Bot verification domain mismatch." });
    }

    // 5. Spreadsheet Formula Injection Prevention
    // Prepend single quote (') to neutralize strings starting with =, +, -, @, tab, or CR
    const sanitizeFormula = (str) => {
      const val = (str || "").toString().trim();
      if (/^[=\+\-@\t\r]/.test(val)) {
        return `'${val}`;
      }
      return val;
    };

    const sanitizedPayload = {
      name: sanitizeFormula(name),
      email: sanitizeFormula(email).toLowerCase(),
      phone: sanitizeFormula(normalizedPhone),
      service: sanitizeFormula(service),
      project: sanitizeFormula(cleanProject),
      timestamp: new Date().toISOString()
    };

    // 6. Private Data Write (Secure Server-to-Server Bridge)
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;
    const backendSecret = process.env.BACKEND_SECRET_KEY || "test-secret-key-12345";

    if (!googleScriptUrl) {
      // If not configured, run in dry-run mode for development/testing
      console.warn("GOOGLE_SCRIPT_URL not configured. Running in dry-run mode.");
      return res.status(200).json({
        success: true,
        requestId: crypto.randomUUID(),
        message: "Dry-run submission successful (Google Script URL missing)."
      });
    }

    // Send payload to Google Sheets Web App with validation token
    const forwardRes = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-backend-secret": backendSecret
      },
      body: JSON.stringify({
        ...sanitizedPayload,
        secretToken: backendSecret
      })
    });

    if (!forwardRes.ok) {
      throw new Error(`Google Script returned status code ${forwardRes.status}`);
    }

    const forwardData = await forwardRes.json();
    if (!forwardData.success) {
      throw new Error(forwardData.message || "Google Script write failed");
    }

    // 7. Success response (random request ID, generic message, no PII logged)
    const requestId = crypto.randomUUID();
    return res.status(200).json({
      success: true,
      requestId
    });

  } catch (err) {
    // Log generic error message without stack trace to client
    console.error("Submission error:", err.message);
    return res.status(500).json({ error: "An internal server error occurred." });
  }
}
