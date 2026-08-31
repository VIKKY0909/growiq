import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const serviceData = {
  "performance-marketing": {
    title: "Performance Marketing Agency in India | Groowiq",
    metaDesc: "Plan, launch and improve Meta and Google campaigns with clear attribution, creative testing and decisions tied to qualified demand—not vanity metrics.",
    h1: "Performance marketing that connects spend to qualified demand",
    definitionQuestion: "What is Performance Marketing at Groowiq?",
    definitionAnswer: "Groowiq is a performance marketing agency in India for teams that need more than campaign activity. We define the commercial event, improve the offer/creative/landing-page system, and report what the available attribution can support.",
    citableQuote: "\"Entartica's campaign record shows 1,528 WhatsApp leads in 21 days from ₹64,000 Meta spend at a ₹36 blended CPL. Publish with the full case study, attribution note and client approval.\" — Client Evidence",
    stats: [
      { label: "WhatsApp Leads", value: "1,528" },
      { label: "Blended CPL", value: "₹36" },
      { label: "Campaign Duration", value: "21 Days" }
    ],
    features: [
      { name: "Measurement and account setup", desc: "Client-owned accounts, pixels/events, UTMs, conversion definitions, CRM handoff and a source-of-truth reporting plan." },
      { name: "Offer and audience strategy", desc: "Customer problem, buying trigger, exclusions, geography, unit economics and testable audience hypotheses." },
      { name: "Creative testing", desc: "A controlled backlog of hooks, formats and proof. Each test has a purpose; generic AI creative is not the default." },
      { name: "Media operations", desc: "Campaign architecture, budget pacing, quality checks, search-term/audience review and documented scale/change/stop decisions." },
      { name: "Landing and follow-up review", desc: "Message match, speed, conversion path and the time/quality of sales follow-up so media is not judged in isolation." }
    ],
    faqs: [
      { q: "Do you guarantee ROAS or lead volume?", a: "No. Results depend on offer, market, budget, creative, tracking, website and sales follow-up. Groowiq guarantees the agreed work and reporting standard, not an outcome outside full control." },
      { q: "Who pays media spend?", a: "Recommended default: the client pays platforms directly from a client-owned account. The proposal should separate media spend from professional fees." },
      { q: "What do you report?", a: "Spend, delivery, creative/audience learning, conversion quality and business outcomes available from the agreed source of truth, plus attribution limits." }
    ]
  },
  "seo": {
    title: "SEO Agency in India for Search & AI Visibility | Groowiq",
    metaDesc: "Technical SEO, useful content and entity clarity for visibility across Google and AI search experiences—without unsupported AEO or GEO shortcuts.",
    h1: "SEO for search visibility, qualified demand and credible AI citations",
    definitionQuestion: "How does SEO, AEO and GEO merge?",
    definitionAnswer: "Groowiq is an SEO agency in India that treats SEO, AEO and GEO as one evidence-driven search system: make the site crawlable, publish genuinely useful information, clarify the entity, earn corroboration, and measure whether visibility creates qualified demand.",
    citableQuote: "\"Use this page's live-site remediation as the proof story only after the fixes are deployed and independently re-crawled. Do not claim a 100% audit pass or a 2–4 week outcome without study.\" — SEO Standard",
    stats: [
      { label: "Search Beachhead", value: "Ahmedabad" },
      { label: "Domain Authority baseline", value: "DA 1" },
      { label: "Generative AI Mentions", value: "0 baseline" }
    ],
    features: [
      { name: "Technical SEO", desc: "Indexability, rendering, canonicals, sitemaps, redirects, internal links, structured data, page experience and production QA." },
      { name: "Keyword and intent architecture", desc: "One strongest page per intent, clear location/service roles, cannibalization control and a backlog based on Search Console data." },
      { name: "People-first content", desc: "First-hand case studies, decision guides, service explanations and local pages with unique evidence—not scaled city templates." },
      { name: "Entity and local search", desc: "Consistent organization facts, Business Profile, NAP, authorship, sameAs and relevant third-party corroboration." },
      { name: "AI search readiness", desc: "Crawl access for search bots, answer-first sections, original data, citations and monthly monitoring across identifiable AI surfaces." }
    ],
    faqs: [
      { q: "How long does SEO take?", a: "It depends on the starting point, competition, crawl/index state, authority and scope. Groowiq will define milestones and leading indicators, not promise a date for rankings." },
      { q: "Is AEO or GEO different from SEO?", a: "They describe visibility in answer and generative experiences. For Google, the same Search foundations apply; no special AI file or schema replaces useful, indexable content." },
      { q: "Do we need llms.txt?", a: "Google Search does not use it. Keep one only if it serves another maintained use case, and make sure it contains accurate canonical facts." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing Agency in Ahmedabad | Groowiq",
    metaDesc: "LinkedIn and Instagram strategy, creative and distribution from Ahmedabad—measured against reach quality, qualified demand and business goals.",
    h1: "Social media that earns the right audience—not just activity",
    definitionQuestion: "What is Conversion-First Social Marketing?",
    definitionAnswer: "Groowiq is a social media marketing agency in Ahmedabad serving brands and leaders across Gujarat and India. We build a clearer narrative, repeatable creative system and distribution plan, then choose platform, format and cadence around the audience and business objective.",
    citableQuote: "\"Spree Walk recorded 935,937 views over 60 days, with 97.6% from non-followers. ECHT Marine recorded +515% LinkedIn impressions over its comparison period. Publish with baseline details.\" — Social Evidence",
    stats: [
      { label: "Spree Walk Views", value: "935,937" },
      { label: "Non-Follower Reach", value: "97.6%" },
      { label: "LinkedIn Impressions", value: "+515%" }
    ],
    features: [
      { name: "Narrative and content pillars", desc: "A small set of repeatable ideas tied to customer questions, brand proof and the role each platform plays." },
      { name: "LinkedIn systems", desc: "Executive and company-page content for technical B2B, hiring, partnerships and market authority." },
      { name: "Instagram and short-form", desc: "Mobile-native hooks, stories, reels and community distribution designed for discovery and action." },
      { name: "Production workflow", desc: "Research, briefs, scripts, design/video, approvals, publishing and a reuse system that does not become generic." },
      { name: "Measurement", desc: "Reach quality, non-follower discovery, saves/shares, profile actions, assisted demand and downstream signals where trackable." }
    ],
    faqs: [
      { q: "How many posts will you create?", a: "Cadence follows the platform role, production quality and learning plan. Publish an agreed range in the proposal rather than a universal 45+ claim." },
      { q: "Can you make content go viral?", a: "No. Groowiq can improve creative hypotheses, distribution and learning speed; virality cannot be guaranteed." },
      { q: "Do followers matter?", a: "Sometimes. Non-follower reach, engagement quality, profile actions, branded search and assisted demand often explain more than follower count alone." }
    ]
  },
  "web-development": {
    title: "Web Design & Development Agency in India | Groowiq",
    metaDesc: "Fast, accessible, search-ready websites designed around a clear journey—from first visit to qualified enquiry, purchase or booked call.",
    h1: "Web design and development built around the conversion path",
    definitionQuestion: "Why Conversion-Driven Development?",
    definitionAnswer: "Groowiq is a web design and development agency in India for brands that need a site to explain the offer, prove credibility and turn attention into the next meaningful action. Technology follows the content and journey—not the other way around.",
    citableQuote: "\"Do not publish 'LCP under 1.9 seconds' or '2x conversion lift' as universal outcomes. Turn the Groowiq site remediation into a measured case after deployment, or use real client work.\" — Performance Standard",
    stats: [
      { label: "Desktop LCP Speed", value: "987ms" },
      { label: "Desktop TTI Speed", value: "993ms" },
      { label: "Desktop CLS Rate", value: "0.000" }
    ],
    features: [
      { name: "Information architecture", desc: "Routes, navigation, keyword/intent map, internal links and a page hierarchy users and crawlers can understand." },
      { name: "Conversion copy", desc: "Clear problem, audience, offer, proof, objection handling, CTA and qualification flow for each commercial page." },
      { name: "Design system", desc: "Accessible type, color, components, responsive behavior and production states—not isolated desktop mockups." },
      { name: "Development", desc: "Maintainable components, static/server rendering where appropriate, analytics, forms, privacy and secure deployment practices." },
      { name: "Performance and QA", desc: "Measured Core Web Vitals, keyboard/accessibility checks, broken-link tests, metadata and structured-data validation." }
    ],
    faqs: [
      { q: "Do you guarantee a two-second load time?", a: "No framework guarantees a production metric. Groowiq defines performance budgets and tests the deployed site under realistic conditions." },
      { q: "Who owns the code and accounts?", a: "State repository, hosting, domain, analytics, design/source-file and handover ownership in the proposal. Client ownership is the recommended default." },
      { q: "Will the site be search-ready?", a: "It will include the agreed technical and on-page foundation. Search visibility still depends on content, competition, authority and ongoing maintenance." }
    ]
  },
  "branding": {
    title: "Branding & Content Strategy Agency in India | Groowiq",
    metaDesc: "Positioning, messaging, identity and content systems that help ambitious brands become easier to recognize, understand and choose.",
    h1: "Branding and content that make the choice clearer",
    definitionQuestion: "What is Brand Strategy & Positioning?",
    definitionAnswer: "Groowiq is a branding and content strategy agency in India for businesses whose market sees too little difference between them and the alternatives. We connect positioning, message, identity and proof to the buying decision.",
    citableQuote: "\"Use named approved examples and before/after artifacts. Remove unverified claims of 500+ campaigns, 98% satisfaction, and 100% deliverables until exact evidence exists.\" — Branding Guidelines",
    stats: [
      { label: "Visual Identity Tokens", value: "Verified" },
      { label: "Identity Assets", value: "Authoritative" },
      { label: "Deliverables Handover", value: "Complete" }
    ],
    features: [
      { name: "Research and positioning", desc: "Customer/buyer questions, alternatives, category context, strengths, trade-offs and a defendable market position." },
      { name: "Messaging system", desc: "Audience-specific value proposition, proof hierarchy, objections, tone, page messages and sales-ready language." },
      { name: "Visual identity", desc: "A usable identity system with typography, color, components, examples and accessibility—not only a logo file." },
      { name: "Content strategy", desc: "Narratives, pillars, formats, distribution and an editorial decision system tied to audience needs." },
      { name: "Enablement", desc: "Guidelines, templates and handoff so internal teams can use the system without constant reinvention." }
    ],
    faqs: [
      { q: "Is branding just a logo?", a: "No. Identity is one part. Positioning, message, proof and consistent application determine whether the brand helps a buyer understand and choose." },
      { q: "How do you measure brand work?", a: "Agree on leading and downstream signals: message comprehension, direct/branded search, sales feedback, creative consistency, engagement quality and conversion where causal claims are appropriate." },
      { q: "Will Groowiq use AI for content?", a: "Tools may support research or production, but human judgment, evidence, originality, review and brand accountability remain required." }
    ]
  }
};

const ServicePage = () => {
  const { serviceName } = useParams();
  const service = serviceData[serviceName] || serviceData["seo"];

  // Update Page Title and Meta Description for Browser client-side
  useEffect(() => {
    document.title = service.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", service.metaDesc);
    }
  }, [service]);

  // Construct JSON-LD Schema for SEO/AEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.h1,
    "provider": {
      "@type": "Organization",
      "name": "Groowiq",
      "url": "https://www.groowiq.com"
    },
    "description": service.metaDesc,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.groowiq.com/services/${serviceName}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="py-20">
      {/* JSON-LD Schemas injected */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </script>

      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-500 mb-8 dark:text-gray-400">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400 dark:text-gray-500">Services</span>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold capitalize">{serviceName ? serviceName.replace("-", " ") : "SEO"}</span>
        </nav>

        {/* H1 Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
          {service.h1}
        </h1>

        {/* Citable Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 border-t border-b border-gray-200 dark:border-white/10 py-6">
          {service.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{stat.label}</p>
              <h2 className="text-4xl font-black text-[#D5D93B] mt-1">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* AEO 40-60 Word Definition Block */}
        <div className="bg-[#D5D93B]/10 rounded-3xl border border-[#D5D93B]/20 p-8 my-10">
          <h2 className="text-xl font-bold text-[#D5D93B] mb-2">{service.definitionQuestion}</h2>
          <p className="text-lg leading-8 text-[#0F1039]/80 dark:text-gray-200 max-w-3xl font-medium">
            {service.definitionAnswer}
          </p>
        </div>

        {/* Core Description & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-[#0F1039] dark:text-white mb-6">Our Capabilities & Deliverables</h2>
            <div className="space-y-8">
              {service.features.map((feat, idx) => (
                <div key={idx} className="border-l-4 border-[#D5D93B] pl-5">
                  <h3 className="text-xl font-bold text-[#0F1039] dark:text-white">{feat.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 leading-7">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-gray-50 dark:bg-white/5 p-8 rounded-[32px] border border-gray-100 dark:border-white/10">
            <h3 className="text-2xl font-bold text-[#0F1039] dark:text-white mb-4">Start Scaling</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-6 mb-6">
              Claim your complimentary **AI search visibility audit** to analyze how your brand is recommended on ChatGPT and Google AI search today.
            </p>
            <Link to="/contact">
              <Button className="w-full justify-center">Get a Proposal</Button>
            </Link>
          </div>
        </div>

        {/* Citable Quote / Customer Voice */}
        <div className="border-l-4 border-gray-300 dark:border-white/20 pl-6 py-2 my-12 italic text-gray-600 dark:text-gray-300 text-lg leading-8 max-w-4xl">
          {service.citableQuote}
        </div>

        {/* FAQ Area (AEO optimize) */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-[#0F1039] dark:text-white mb-8 text-center sm:text-left">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/50 dark:bg-white/2 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                <h3 className="text-lg font-bold text-[#0F1039] dark:text-white mb-3">{faq.q}</h3>
                <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePage;
