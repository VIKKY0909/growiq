import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render with their corresponding SEO metadata
const routes = [
  {
    path: "/",
    title: "Growth Marketing Agency in India | Groowiq",
    description: "Groowiq is an Ahmedabad growth marketing agency for paid media, SEO, social, branding and conversion-led websites—measured against qualified demand.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Groowiq",
      "url": "https://www.groowiq.com",
      "logo": "https://www.groowiq.com/logo/logo.png",
      "sameAs": [
        "https://www.linkedin.com/company/groowiq"
      ]
    }
  },
  {
    path: "/about",
    title: "About Groowiq | Growth Marketing Agency in Ahmedabad",
    description: "Meet Groowiq, an Ahmedabad-based growth marketing agency serving Gujarat and India with focused strategy, transparent execution and verified proof."
  },
  {
    path: "/pricing",
    title: "Digital Marketing Pricing in India | How Groowiq Scopes",
    description: "See how Groowiq prices growth marketing work, what changes scope, what you own, and what to prepare for an accurate proposal."
  },
  {
    path: "/contact",
    title: "Contact Groowiq | Discuss Your Growth Bottleneck",
    description: "Tell Groowiq what is not moving, what you have tried and how success will be measured. Get a focused next-step recommendation—not a generic package pitch."
  },
  {
    path: "/guides",
    title: "Marketing Guides for Better Agency Decisions | Groowiq",
    description: "Practical guides on agency selection, paid media, SEO, social, attribution and marketing costs—built from real delivery decisions."
  },
  {
    path: "/locations/gujarat",
    title: "Digital Marketing Agency in Gujarat | Groowiq",
    description: "Groowiq is an Ahmedabad-based digital marketing agency for Gujarat businesses—paid media, SEO, social, branding and web with accountable reporting."
  },
  {
    path: "/locations/ahmedabad",
    title: "Digital Marketing Agency in Ahmedabad | Groowiq",
    description: "An Ahmedabad digital marketing agency for paid media, SEO, social, branding and conversion websites—scoped around your growth bottleneck."
  },
  {
    path: "/services/performance-marketing",
    title: "Performance Marketing Agency in India | Groowiq",
    description: "Plan, launch and improve Meta and Google campaigns with clear attribution, creative testing and decisions tied to qualified demand—not vanity metrics."
  },
  {
    path: "/services/seo",
    title: "SEO Agency in India for Search & AI Visibility | Groowiq",
    description: "Technical SEO, useful content and entity clarity for visibility across Google and AI search experiences—without unsupported AEO or GEO shortcuts."
  },
  {
    path: "/services/social-media-marketing",
    title: "Social Media Marketing Agency in Ahmedabad | Groowiq",
    description: "LinkedIn and Instagram strategy, creative and distribution from Ahmedabad—measured against reach quality, qualified demand and business goals."
  },
  {
    path: "/services/web-development",
    title: "Web Design & Development Agency in India | Groowiq",
    description: "Fast, accessible, search-ready websites designed around a clear journey—from first visit to qualified enquiry, purchase or booked call."
  },
  {
    path: "/services/branding",
    title: "Branding & Content Strategy Agency in India | Groowiq",
    description: "Positioning, messaging, identity and content systems that help ambitious brands become easier to recognize, understand and choose."
  },
  {
    path: "/work",
    title: "Groowiq Marketing Case Studies | Verified Growth Work",
    description: "See Groowiq case studies with stated baselines, time periods, methods and measurement notes across paid media, social, LinkedIn and brand launches."
  },
  {
    path: "/work/entartica-growth",
    title: "Entartica: 1,528 WhatsApp Leads in 21 Days | Groowiq",
    description: "In a 21-day Meta campaign, Entartica's record shows 1,528 WhatsApp leads from ₹64,000 spend at a ₹36 blended cost per lead."
  },
  {
    path: "/work/spree-walk-social-growth",
    title: "Spree Walk: Reaching Beyond Follower Base | Groowiq",
    description: "Spree Walk case study: 935,937 views in 60 days with 97.6% coming from non-followers. Read the content distribution strategy."
  },
  {
    path: "/work/echt-marine-linkedin",
    title: "ECHT Marine: Building B2B LinkedIn Visibility | Groowiq",
    description: "ECHT Marine case study: +515% increase in B2B LinkedIn impressions over 70 days. Read how we scaled B2B authority."
  },
  {
    path: "/work/uvr-digital-launch",
    title: "UVR: Launching Digital Visibility from Zero Baseline | Groowiq",
    description: "UVR case study: +14,338% impressions and +1,012% unique visitors in month one from a standing zero baseline."
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Groowiq",
    description: "Read the privacy policy of Groowiq. Learn how we handle your enquiry data."
  },
  {
    path: "/terms-of-service",
    title: "Terms of Service | Groowiq",
    description: "Read the terms of service of Groowiq for digital marketing engagements."
  },
  {
    path: "/industries/ecommerce-d2c",
    title: "D2C E-Commerce Growth Marketing Agency | Groowiq",
    description: "Scale your e-commerce revenue profitably. Groowiq is a D2C growth marketing agency in India delivering Meta ads, SEO, and custom Shopify conversion funnels."
  },
  {
    path: "/industries/startups-saas",
    title: "SaaS & Tech Startup Growth Marketing Agency | Groowiq",
    description: "Go-to-market strategies and client acquisition for tech startups. Groowiq builds AI visibility search systems and LinkedIn organic content funnels."
  },
  {
    path: "/industries/enterprise",
    title: "Enterprise Digital Marketing Agency India | Groowiq",
    description: "Scalable performance and programmatic search solutions for enterprise brands. High-DR technical SEO, sitemaps, and conversion architectures."
  },
  {
    path: "/industries/local-business",
    title: "Local Business SEO & Customer Acquisition Agency | Groowiq",
    description: "Dominate search locally. Groowiq builds Google Business Profile optimizations, local business schema, and localized Google ads for SMBs."
  }
];


async function prerender() {
  const toAbsolute = (p) => path.resolve(__dirname, p);

  // 1. Get the template index.html
  const template = fs.readFileSync(toAbsolute("dist/client/index.html"), "utf-8");

  // 2. Load the server entry render function
  const { render } = await import("./dist/server/entry-server.js");

  // 3. Pre-render each route
  for (const route of routes) {
    const url = route.path;
    const context = {};
    const { html: appHtml } = render(url, context);

    // Dynamic replacement in the HTML template
    let html = template
      .replace(`<!--app-html-->`, appHtml) // just in case template has placeholder comment
      .replace(`<div id="root"></div>`, `<div id="root">${appHtml}</div>`);

    // Inject dynamic page title
    if (route.title) {
      html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
    }

    // Inject dynamic meta description
    if (route.description) {
      const metaDescriptionTag = `<meta name="description" content="${route.description}" />`;
      if (html.includes('<meta name="viewport"')) {
        html = html.replace('<meta name="viewport"', `${metaDescriptionTag}\n    <meta name="viewport"`);
      } else {
        html = html.replace("</head>", `  ${metaDescriptionTag}\n  </head>`);
      }
    }

    // Inject dynamic canonical URL tag
    const canonicalUrl = "https://www.groowiq.com" + (url === "/" ? "/" : url);
    const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
    html = html.replace("</head>", `  ${canonicalTag}\n  </head>`);

    // Inject structured JSON-LD schema
    if (route.schema) {
      const schemaTag = `<script type="application/ld+json">${JSON.stringify(route.schema)}</script>`;
      html = html.replace("</head>", `  ${schemaTag}\n  </head>`);
    }

    // Determine output file path
    const folderPath = toAbsolute(`dist/client${url}`);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, "index.html");
    fs.writeFileSync(filePath, html);
    console.log(`✓ Pre-rendered: ${url} -> ${filePath}`);
  }

  // 4. Copy all files from dist/client to dist, then clean up client/server subfolders
  const clientDir = toAbsolute("dist/client");
  const serverDir = toAbsolute("dist/server");
  const distDir = toAbsolute("dist");

  // Move files recursively from dist/client to dist/
  function copyRecursive(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
      }
      fs.readdirSync(src).forEach((child) => {
        copyRecursive(path.join(src, child), path.join(dest, child));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  console.log("Rearranging output files...");
  fs.readdirSync(clientDir).forEach((file) => {
    copyRecursive(path.join(clientDir, file), path.join(distDir, file));
  });

  // Clean up
  console.log("Cleaning up temporary directories...");
  fs.rmSync(clientDir, { recursive: true, force: true });
  fs.rmSync(serverDir, { recursive: true, force: true });

  console.log("⚡ Static pre-rendering pipeline completed successfully!");
}

prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
