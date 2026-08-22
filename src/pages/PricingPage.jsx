import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const packages = [
  {
    code: "T0",
    name: "AI Visibility Audit",
    price: "₹7,500",
    payment: "100% Upfront",
    delivery: "48 Hours",
    description: "Find out where your brand is invisible. Complete audit of AI search visibility across Perplexity, Gemini, ChatGPT, and Google AI Overviews.",
    features: [
      "AI Search Engine Audit",
      "Visibility Gap Analysis",
      "Entity Mapping Check",
      "Copywriting Fix Checklist",
      "Competitor Citation Benchmark"
    ]
  },
  {
    code: "T1",
    name: "30-Day Launch Sprint",
    price: "₹35,000",
    payment: "50% Advance / 50% Delivery",
    delivery: "3 Weeks",
    description: "Launch your brand presence with clean, high-performance assets optimized for direct customer acquisition.",
    features: [
      "Brand Kit Lite (Logos, Style)",
      "High-Performance Landing Page",
      "30-Day Content Pillars Grid",
      "Meta Ads Account Set Up",
      "Initial Creative Copy Draft"
    ]
  },
  {
    code: "T2",
    name: "Growth Retainer",
    price: "₹45,000/mo",
    payment: "Monthly Upfront (3-mo min)",
    delivery: "Ongoing Management",
    description: "Active, dedicated optimization targeting ROAS, traditional Google rankings, and AI citations.",
    features: [
      "Meta & Google Ads Management",
      "Traditional SEO + AEO/GEO",
      "Instagram/LinkedIn Content",
      "Weekly KPI Dashboard Log",
      "Funnel & CRO Testing"
    ]
  },
  {
    code: "T3",
    name: "Corporate Brand Build",
    price: "₹75,000",
    payment: "50% Advance / 50% Delivery",
    delivery: "4-5 Weeks",
    description: "Full-scale identity design and custom corporate web development for established enterprises.",
    features: [
      "Comprehensive Style Guide",
      "Multi-Page custom React Site",
      "Launch Campaign Strategy",
      "Sales / Case Study Decks",
      "Entity Knowledge Graph Schema"
    ]
  }
];

const PricingPage = () => {
  useEffect(() => {
    document.title = "Digital Marketing Pricing & Packages in India | Groowiq";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "View transparent digital marketing package prices at Groowiq India. Pricing starting at ₹7,500 for AI search audits and ₹45,000/mo for full growth retainers."
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
          <span className="text-[#D5D93B] font-bold">Pricing</span>
        </nav>

        {/* Header */}
        <div className="mb-16 text-center sm:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Transparent Rates</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Growth Packages Built for Indian Founders
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            No opaque quotes, no vanity metrics. Select the package that matches your operational sequence, or start with a low-friction diagnostic audit today.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.code}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-sm hover:border-[#D5D93B]/50 transition-all duration-300"
            >
              <div>
                <span className="text-xs font-black text-[#D5D93B] bg-[#D5D93B]/10 px-3 py-1 rounded-full">{pkg.code}</span>
                <h3 className="text-2xl font-bold text-[#0F1039] dark:text-white mt-4">{pkg.name}</h3>
                <p className="text-xs text-gray-400 mt-1 uppercase font-bold tracking-wider">{pkg.delivery}</p>
                <h2 className="text-3xl font-black text-[#D5D93B] mt-5">{pkg.price}</h2>
                <p className="text-[11px] text-gray-400 mt-1 italic font-medium">{pkg.payment}</p>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-6 leading-6">{pkg.description}</p>
                
                <div className="border-t border-gray-100 dark:border-white/10 my-6" />
                
                <ul className="space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-[#D5D93B]">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="w-full justify-center text-sm py-3">Book Strategy Call</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="my-20 overflow-x-auto">
          <h2 className="text-3xl font-bold text-[#0F1039] dark:text-white mb-8 text-center sm:text-left">Feature Comparison</h2>
          <table className="w-full text-left border-collapse border border-gray-200 dark:border-white/10">
            <thead>
              <tr className="bg-gray-50 dark:bg-white/5 text-sm font-bold text-gray-600 dark:text-gray-300">
                <th className="p-4 border border-gray-200 dark:border-white/10">Feature</th>
                <th className="p-4 border border-gray-200 dark:border-white/10 text-center">T0: AI Audit</th>
                <th className="p-4 border border-gray-200 dark:border-white/10 text-center">T1: 30-Day Launch</th>
                <th className="p-4 border border-gray-200 dark:border-white/10 text-center">T2: Retainer</th>
                <th className="p-4 border border-gray-200 dark:border-white/10 text-center">T3: Corporate</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600 dark:text-gray-300">
              <tr>
                <td className="p-4 border border-gray-200 dark:border-white/10 font-medium">AI Engine Search Check</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 dark:border-white/10 font-medium">Landing Page Funnel</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 dark:border-white/10 font-medium">Meta & Google Ads Run</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">Setup Only</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">Launch Only</td>
              </tr>
              <tr>
                <td className="p-4 border border-gray-200 dark:border-white/10 font-medium">Monthly SEO/AEO retainer</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-[#D5D93B] font-bold">✓</td>
                <td className="p-4 border border-gray-200 dark:border-white/10 text-center text-gray-400">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
