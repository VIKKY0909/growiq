import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    client: "Heritage Ayurveda",
    industry: "D2C Packaged Goods / Health",
    result: "₹4.2 Cr Revenue Generated in 6 Months",
    stats: [
      { label: "ROAS Scaled", value: "8.7x" },
      { label: "CPA Reduced", value: "32%" },
      { label: "Sales Growth", value: "240%" }
    ],
    summary: "Heritage Ayurveda partnered with Groowiq to scale their online customer acquisition. By migrating their Shopify theme to custom React/Vite storefront landing pages and running high-frequency creative tests on Meta Ads, we drove massive volume while maintaining profitability.",
    challenge: "High customer acquisition costs (CAC) and layout shift loading speeds (>4s) that eroded ad conversion rates.",
    strategy: "Developed a lightweight custom checkout funnel, implemented structured local schema, and structured a product-bundling offer that increased average order value (AOV) from ₹1,200 to ₹2,800."
  },
  {
    client: "Zenith SaaS Suite",
    industry: "B2B Tech / Software",
    result: "310% Rise in AI Search Engine Referrals",
    stats: [
      { label: "AI Citations", value: "+650%" },
      { label: "Demo Bookings", value: "+180%" },
      { label: "Organic Queries", value: "400+" }
    ],
    summary: "Zenith SaaS wanted to be recommended when customers asked ChatGPT or Perplexity for the 'best task management tools for Indian developers'. Groowiq audited their AI indexing, placed entity references in trusted lists, and structured citable data reports.",
    challenge: "Zero brand visibility in LLM search queries despite high domain authority (DA) for traditional keywords.",
    strategy: "Implemented GEO schema markup, published clean /llms.txt and /pricing.md files, and ran targeted digital-PR citations that established Zenith as an entity in the tech market."
  }
];

const WorkPage = () => {
  useEffect(() => {
    document.title = "D2C & B2B Case Studies | Groowiq Growth Portfolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Read verified case studies from Groowiq. See how we scaled a D2C health brand to ₹4.2 Cr revenue at 8.7x ROAS and helped a tech startup lift AI citations by 6.5x."
      );
    }
  }, []);

  return (
    <div className="py-20">
      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-500 mb-8 dark:text-gray-400">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold">Case Studies</span>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Our Proof</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Real Metrics. Profitable Outcomes.
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            We don't sell clicks or impressions. We sell collected revenue, qualified leads, and brand authority. Read how we help our partners win.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[40px] p-8 sm:p-12 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#D5D93B]">{study.industry}</span>
                  <h3 className="text-3xl font-black text-[#0F1039] dark:text-white mt-1">{study.client}</h3>
                </div>
                <h4 className="text-lg font-bold text-[#D5D93B] bg-[#D5D93B]/10 px-5 py-2 rounded-full">{study.result}</h4>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-b border-gray-100 dark:border-white/10 py-6 my-8">
                {study.stats.map((stat, sIdx) => (
                  <div key={sIdx}>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
                    <h3 className="text-3xl font-black text-[#0F1039] dark:text-white mt-1">{stat.value}</h3>
                  </div>
                ))}
              </div>

              {/* Description blocks */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-sm sm:text-base leading-7">
                <div className="lg:col-span-6">
                  <h4 className="font-bold text-[#0F1039] dark:text-white mb-2">The Challenge</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.challenge}</p>
                </div>
                <div className="lg:col-span-6">
                  <h4 className="font-bold text-[#0F1039] dark:text-white mb-2">The Strategy</h4>
                  <p className="text-gray-600 dark:text-gray-300">{study.strategy}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-6">{study.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WorkPage;
