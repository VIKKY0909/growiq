import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const industryData = {
  "ecommerce-d2c": {
    title: "D2C E-Commerce Growth Marketing Agency | Groowiq",
    metaDesc: "Scale your e-commerce revenue profitably. Groowiq connects creative testing, paid distribution, and landing experiences around contribution margins.",
    h1: "D2C growth marketing built around contribution—not platform ROAS alone",
    definitionQuestion: "What is D2C Growth Marketing at Groowiq?",
    definitionAnswer: "Groowiq helps D2C and e-commerce teams connect creative, paid distribution, landing experience and measurement. The plan begins with unit economics, inventory, offer, repeat purchase and operational capacity, because an attractive platform return can still hide an unprofitable customer.",
    stats: [
      { label: "Focus Metric", value: "Contribution Margin" },
      { label: "Channel Focus", value: "Creative Testing" },
      { label: "Infrastructure", value: "Client-Owned" }
    ],
    features: [
      { name: "Unit Economics & Funnel Review", desc: "We examine contribution margin, blended acquisition cost, repeat purchase window and reconciliation with actual orders." },
      { name: "Creative Testing & Operations", desc: "Structured video and image hook tests with disciplined media operations and stop/scale rules." },
      { name: "Landing & Merchandising Path", desc: "High-speed conversion landing pages and product offer messaging designed to lift average order value." }
    ],
    faqs: [
      { q: "What do you examine before scaling D2C ad spend?", a: "We examine contribution margin, blended acquisition cost, new versus returning customers, creative fatigue, product/offer fit, landing-page conversion, and shipping/payment friction." },
      { q: "Who owns the D2C ad accounts?", a: "All ad accounts, pixels, and analytics assets remain 100% owned by the client. Groowiq operates via delegated business manager access." }
    ]
  },
  "startups-saas": {
    title: "SaaS & Tech Startup Growth Marketing Agency | Groowiq",
    metaDesc: "Go-to-market strategies and client acquisition for tech startups. Groowiq builds AI visibility search systems and LinkedIn organic content funnels.",
    h1: "Go-to-market and demand generation for SaaS & tech startups",
    definitionQuestion: "How do Startups Build Search & AI Visibility?",
    definitionAnswer: "Startups build search visibility by clarifying their ICP, publishing useful original documentation, and establishing entity credibility across Google and AI search systems like ChatGPT and Perplexity.",
    stats: [
      { label: "GTM Approach", value: "ICP First" },
      { label: "Primary Channels", value: "SEO & LinkedIn" },
      { label: "Attribution", value: "Pipeline Tied" }
    ],
    features: [
      { name: "ICP & Offer Positioning", desc: "Translating technical product capabilities into clear buyer value propositions that address complex buying committees." },
      { name: "Executive & B2B LinkedIn Systems", desc: "Transforming founder and company profiles into authoritative lead-nurturing engines through organic thought leadership." },
      { name: "Search & Answer Engine Optimization", desc: "Structuring crawlable, pre-rendered documentation and technical content to capture high-intent buyers." }
    ],
    faqs: [
      { q: "How do AI buying assistants recommend products?", a: "AI buying assistants parse the web looking for authoritative product documentation, citable case studies, and third-party listings. We build pre-rendered content and place entity listings to establish citation eligibility." }
    ]
  },
  "enterprise": {
    title: "Enterprise Digital Marketing Agency India | Groowiq",
    metaDesc: "Scalable performance and programmatic search solutions for enterprise brands. High-performance technical SEO, sitemaps, and conversion architectures.",
    h1: "Programmatic search and conversion systems for enterprise brands",
    definitionQuestion: "What is Enterprise Technical SEO?",
    definitionAnswer: "Enterprise SEO is the systematic technical and architectural optimization of large-scale web properties, ensuring crawl efficiency, structured data consistency, and robust multi-market discovery.",
    stats: [
      { label: "Architecture", value: "Prerendered SSG" },
      { label: "Governance", value: "Full Compliance" },
      { label: "Data Quality", value: "Source of Truth" }
    ],
    features: [
      { name: "Technical Architecture & Crawlability", desc: "Eliminating script bloat, rendering deep site hierarchies, and managing canonical/sitemap structures at scale." },
      { name: "Structured Data & Knowledge Graph", desc: "Deploying valid Organization, Service, and Breadcrumb schemas aligned directly with visible web copy." },
      { name: "Multi-Stakeholder Governance", desc: "Strict adherence to enterprise data security, change control, and brand guidelines." }
    ],
    faqs: [
      { q: "How do you handle enterprise crawl efficiency?", a: "We eliminate client-side JavaScript rendering bottlenecks through static pre-rendering, streamlined DOM hierarchies, and clean internal linking structures." }
    ]
  },
  "local-business": {
    title: "Local Business SEO & Customer Acquisition Agency | Groowiq",
    metaDesc: "Dominate search locally. Groowiq helps local premium businesses connect discovery on Google to qualified phone and form enquiries.",
    h1: "Local marketing that connects discovery to a qualified enquiry",
    definitionQuestion: "Why is Local Search Critical for Premium Businesses?",
    definitionAnswer: "Groowiq helps local premium businesses improve how they are found, evaluated and contacted across Google, their website and paid channels. The work connects Business Profile accuracy, service/location pages, reviews, call/form tracking and follow-up capacity.",
    stats: [
      { label: "Core Foundation", value: "GBP & NAP" },
      { label: "Tracking", value: "Calls & Forms" },
      { label: "Service Area", value: "Verified" }
    ],
    features: [
      { name: "Google Business Profile & NAP Consistency", desc: "Auditing listings, maintaining exact Name/Address/Phone alignment across trusted directories, and managing categories." },
      { name: "Service & Location Content", desc: "Building unique, evidence-rich location assets rather than thin, cloned doorway pages." },
      { name: "Call & Form Conversion Tracking", desc: "Measuring show-up rates, booking velocity, and lead quality to evaluate true customer acquisition." }
    ],
    faqs: [
      { q: "What factors influence local ranking?", a: "Google describes local results through relevance, distance and prominence. Complete business information, reviews and photos can help, but no single review count or NAP tactic guarantees a top position." },
      { q: "What does Groowiq measure for local clients?", a: "We measure profile interactions, calls, direction requests, form submissions, qualified enquiries, booking rates, and lead source capacity." }
    ]
  }
};

const IndustriesPage = () => {
  const { industryName } = useParams();
  const industry = industryData[industryName] || industryData["ecommerce-d2c"];

  // Update Page Title and Meta Description for Browser client-side
  useEffect(() => {
    document.title = industry.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", industry.metaDesc);
    }
  }, [industry]);

  // Construct JSON-LD Schema for SEO/AEO/GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.h1,
    "provider": {
      "@type": "Organization",
      "name": "Groowiq",
      "url": "https://www.groowiq.com"
    },
    "description": industry.metaDesc,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.groowiq.com/industries/${industryName}`
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map((faq) => ({
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
          <span className="text-gray-400 dark:text-gray-500">Industries</span>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold capitalize">{industryName ? industryName.replace("-", " ") : "D2C"}</span>
        </nav>

        {/* H1 Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
          {industry.h1}
        </h1>

        {/* Citable Stats Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10 border-t border-b border-gray-200 dark:border-white/10 py-6">
          {industry.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">{stat.label}</p>
              <h2 className="text-4xl font-black text-[#D5D93B] mt-1">{stat.value}</h2>
            </div>
          ))}
        </div>

        {/* AEO 40-60 Word Definition Block */}
        <div className="bg-[#D5D93B]/10 rounded-3xl border border-[#D5D93B]/20 p-8 my-10">
          <h2 className="text-xl font-bold text-[#D5D93B] mb-2">{industry.definitionQuestion}</h2>
          <p className="text-lg leading-8 text-[#0F1039]/80 dark:text-gray-200 max-w-3xl font-medium">
            {industry.definitionAnswer}
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12 items-start">
          <div className="lg:col-span-8">
            <h2 className="text-3xl font-bold text-[#0F1039] dark:text-white mb-6">Our Custom Growth Playbooks</h2>
            <div className="space-y-8">
              {industry.features.map((feat, idx) => (
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
              Establish a warm customer acquisition pipeline with our diagnostic growth audits. See where you are cited by AI buying tools today.
            </p>
            <Link to="/contact">
              <Button className="w-full justify-center">Get a Proposal</Button>
            </Link>
          </div>
        </div>

        {/* FAQ Area (AEO optimize) */}
        <div className="my-16">
          <h2 className="text-3xl font-bold text-[#0F1039] dark:text-white mb-8 text-center sm:text-left">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.faqs.map((faq, idx) => (
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

export default IndustriesPage;
