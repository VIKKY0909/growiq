import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const industryData = {
  "ecommerce-d2c": {
    title: "D2C E-Commerce Growth Marketing Agency | Groowiq",
    metaDesc: "Scale your e-commerce revenue profitably. Groowiq is a D2C growth marketing agency in India delivering Meta ads, SEO, and custom Shopify conversion funnels.",
    h1: "Performance Marketing and Funnel Scaling for D2C Brands",
    definitionQuestion: "What is D2C Growth Marketing?",
    definitionAnswer: "Direct-to-consumer (D2C) growth marketing focuses on acquiring and retaining customers online through optimized acquisition funnels and paid ad strategies. By aligning Meta creative testing with post-click conversion rate optimization (CRO) on Shopify storefronts, Groowiq scales sales profitably while lowering customer acquisition costs (CAC).",
    stats: [
      { label: "D2C Brand ROAS", value: "8.7x" },
      { label: "Sales Scaled", value: "₹4.2 Cr" },
      { label: "D2C Clients Scaled", value: "30+" }
    ],
    features: [
      { name: "Full-Funnel Paid Advertising", desc: "Meta, Google, and marketplace media buying targeting profitable acquisition and maximum retention." },
      { name: "Shopify Storefront CRO", desc: "Redesigning checkout pages, landing pages, and product pages to lift browser-to-buyer conversions." },
      { name: "Subscription & Retention Models", desc: "Email flows, SMS notifications, and loyalty systems to improve customer lifetime value (LTV)." }
    ],
    faqs: [
      { q: "What is the average customer acquisition cost (CAC) in Indian D2C?", a: "Average customer acquisition cost (CAC) in Indian D2C varies by category, ranging from ₹300 to ₹1,200. Groowiq helps brands optimize CAC by using citable authority content and optimized landing page funnels." },
      { q: "How do you scale D2C ads without losing efficiency?", a: "We scale D2C ads by setting up high-frequency creative testing systems, building custom landing pages to increase average order value (AOV), and leveraging machine learning bidding frameworks." }
    ]
  },
  "startups-saas": {
    title: "SaaS & Tech Startup Growth Marketing Agency | Groowiq",
    metaDesc: "Go-to-market strategies and client acquisition for tech startups. Groowiq builds AI visibility search systems and LinkedIn organic content funnels.",
    h1: "Go-To-Market and AI Visibility Audits for SaaS & Tech Startups",
    definitionQuestion: "How do Startups Build AI Search Visibility?",
    definitionAnswer: "Startups build AI search visibility by optimizing their content architecture for AEO/GEO indexing (traditional site schema and pre-rendered HTML) and securing references in third-party trusts. This ensures the startup is cited, recommended, and shortlisted by AI buying assistants on ChatGPT, Gemini, and Perplexity.",
    stats: [
      { label: "SaaS Leads Lift", value: "3.1x" },
      { label: "AI Citations Lift", value: "6.5x" },
      { label: "Warm Pipeline Scale", value: "₹1L+" }
    ],
    features: [
      { name: "GTM Funnel Design", desc: "Setting up product-led growth (PLG) setups, demos, free trial loops, and landing page funnels." },
      { name: "LinkedIn Executive Positioning", desc: "Transforming founder and executive profiles into direct client-acquisition engines through organic content." },
      { name: "AI Citation Optimization", desc: "In-depth auditing and strategy implementation to get your tech product recommended in AI search engines." }
    ],
    faqs: [
      { q: "How do SaaS buying assistants recommend products?", a: "AI buying assistants parse the web looking for authoritative product documentation, citable case studies, and third-party listings. We build pre-rendered content and place entity listings to make you the top recommendation." }
    ]
  },
  "enterprise": {
    title: "Enterprise Digital Marketing Agency India | Groowiq",
    metaDesc: "Scalable performance and programmatic search solutions for enterprise brands. High-DR technical SEO, sitemaps, and conversion architectures.",
    h1: "Programmatic Search and Conversion Systems for Enterprises",
    definitionQuestion: "What is Programmatic SEO for Enterprises?",
    definitionAnswer: "Programmatic SEO is the systematic creation of high-quality, database-driven landing pages designed to capture thousands of transactional long-tail keywords. For enterprise brands, Groowiq deploys clean URL routing architectures, sitemap indexing schemas, and high-performance server-side rendering to drive massive organic scale.",
    stats: [
      { label: "Programmatic Reach", value: "100K+" },
      { label: "Page Crawl Efficiency", value: "100%" },
      { label: "Indexed Keywords", value: "500+" }
    ],
    features: [
      { name: "High-DR SEO & Link Equity", desc: "Routing search engine authority to your highest-value product pages using clean internal breadcrumb routing." },
      { name: "Technical Crawl Optimization", desc: "Prerendering deep site pages and eliminating script bloat to ensure fast Core Web Vitals and zero indexation delay." },
      { name: "Enterprise Paid Search", desc: "Managing multi-channel search and display campaigns targeting high-value commercial accounts." }
    ],
    faqs: [
      { q: "What is programmatic landing page quality?", a: "Programmatic landing page quality requires serving unique local data, case studies, and distinct content for every target keyword variant to prevent search engine thin-content penalties." }
    ]
  },
  "local-business": {
    title: "Local Business SEO & Customer Acquisition Agency | Groowiq",
    metaDesc: "Dominate search locally. Groowiq builds Google Business Profile optimizations, local business schema, and localized Google ads for SMBs.",
    h1: "Local Search Optimization and Lead Generation for Premium SMBs",
    definitionQuestion: "Why is Local SEO critical for SMBs?",
    definitionAnswer: "Local SEO is the optimization of a business's online footprint to appear in geographic search queries. Because search engines localize 'near me' and service-based keywords to the user's immediate city, premium local businesses (clinics, studios, real estate) win clients fastest by optimizing Google Business Profiles and localized schema.",
    stats: [
      { label: "GBP Clicks Lift", value: "2.4x" },
      { label: "Local Review Target", value: "10/mo" },
      { label: "Citations Consistency", value: "100%" }
    ],
    features: [
      { name: "Google Business Profile Optimizations", desc: "Auditing listings, writing optimized descriptions, creating service checklists, and publishing weekly local posts." },
      { name: "Local business Schema & NAP", desc: "Setting up identical Name, Address, and Phone details across directories to boost search engine localization signals." },
      { name: "Localized Ads & Leads", desc: "Running targeted Google Search and Map campaigns that prompt immediate calls, direction requests, and inquiries." }
    ],
    faqs: [
      { q: "What is the single most important ranking factor for local businesses?", a: "The single most important local ranking factor is the quality and volume of Google Business Profile customer reviews, combined with absolute NAP (Name, Address, Phone) citation consistency across business directories." }
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
