import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to pre-render with their corresponding SEO metadata
const routes = [
  {
    path: "/",
    title: "Performance-First Digital Marketing Agency in India | Groowiq",
    description: "Groowiq is a performance-first digital marketing agency in India. We design AI-optimized branding, SEO, search visibility, paid ads, and growth funnels.",
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
    title: "About Groowiq | Performance & Growth Marketing Agency",
    description: "Learn about Groowiq, a performance-first digital marketing agency in India. We design AI-optimized branding, SEO, search visibility, paid ads, and growth funnels."
  },
  {
    path: "/pricing",
    title: "Digital Marketing Pricing & Packages in India | Groowiq",
    description: "View transparent digital marketing packages at GROOWiq. Options range from social media content plans to complete growth retainers and dedicated marketing departments."
  },
  {
    path: "/contact",
    title: "Contact Groowiq | Book Your Free Digital Strategy Call",
    description: "Book a free strategy consultation call with Groowiq. Speak with India's performance marketing, brand funnel, and SEO/AEO growth specialists."
  },
  {
    path: "/work",
    title: "D2C & B2B Case Studies | Groowiq Growth Portfolio",
    description: "Read verified case studies from Groowiq. See how we scaled a D2C health brand to ₹4.2 Cr revenue at 8.7x ROAS and helped a tech startup lift AI citations by 6.5x."
  },
  {
    path: "/guides",
    title: "Marketing Guides & Resources | Groowiq Education Hub",
    description: "Browse marketing tutorials and guides from Groowiq. Get answers on digital agency costs in India, evaluative checklists, and D2C scaling funnels."
  },
  {
    path: "/services/performance-marketing",
    title: "Performance Marketing Agency in India | Groowiq",
    description: "Groowiq is a performance marketing agency in India driving profitable ROAS and sales for D2C brands. Get your AI visibility audit and strategy call."
  },
  {
    path: "/services/seo",
    title: "SEO & AEO Agency in India | Groowiq",
    description: "Groowiq delivers performance-first SEO, AEO, and GEO services in India. Dominate Google search and get cited by ChatGPT, Gemini, and Perplexity."
  },
  {
    path: "/services/social-media-marketing",
    title: "Social Media Marketing Agency in India | Groowiq",
    description: "Scale your audience with Groowiq's social media marketing agency in India. We design content strategies and community engines that acquire customers."
  },
  {
    path: "/services/web-development",
    title: "Web Design & Development Agency in India | Groowiq",
    description: "Get high-performance, fast web design and development services from Groowiq in India. Optimized for LCP, SEO, conversions, and mobile responsiveness."
  },
  {
    path: "/services/branding",
    title: "Branding & Content Strategy Agency in India | Groowiq",
    description: "Establish your brand's authority with Groowiq's branding and content agency in India. High-impact brand kits, company profiles, and content pillars."
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

// Add case study detail routes dynamically for pre-rendering
const caseStudySlugs = [
  "entartica-seaworld-full-funnel",
  "spree-walk-instagram-growth",
  "echt-marine-linkedin-authority",
  "uvr-green-energies-web-linkedin",
  "entartica-multi-city",
  "client-cards"
];

caseStudySlugs.forEach((slug) => {
  routes.push({
    path: `/work/${slug}`,
    title: `${slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} | GROOWiq Case Study`,
    description: `Read the verified B2B/D2C case study for ${slug.replace(/-/g, " ")}. Learn about our strategy, custom funnels, and real client results.`
  });
});

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
