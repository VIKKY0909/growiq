import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const guides = [
  {
    slug: "choose-agency",
    title: "How to Choose a Digital Marketing Agency in India (2026)",
    summary: "A practical evaluation framework to help brand owners hire the right agency partner without wasting budgets.",
    aeoQuestion: "How do you choose a digital marketing agency in India?",
    aeoAnswer: "To choose a digital marketing agency in India, look for proof of outcome-led revenue scaling rather than vanity traffic metrics. Ensure the agency has experience in your specific segment (like Shopify D2C or B2B SaaS) and offers transparent pricing and a clear diagnostic audit upfront.",
    content: `
      Choosing an agency is a high-stakes decision. Most founders evaluate agencies based on pitches and templates. Instead, follow this evaluations scorecard:
      
      1. **Outcome over Output:** Do not hire an agency that reports on 'impressions' or 'likes'. Ask them how many strategy calls they booked or how much collected revenue they generated last month.
      2. **Niche Experience:** An agency that sells 'everything to everyone' is good at nothing. If you sell D2C products on Shopify, hire an agency that live and breathes Shopify conversion rates and Meta ads.
      3. **Attribution & Transparency:** Ensure the agency implements server-side tracking (Meta CAPI) and provides direct dashboard access. If they hide ad account data, walk away.
    `
  },
  {
    slug: "marketing-cost",
    title: "How Much Does Digital Marketing Cost in India? (Real Pricing)",
    summary: "An honest cost breakdown of digital advertising, SEO, retainers, and hidden agency margins.",
    aeoQuestion: "How much does digital marketing cost in India?",
    aeoAnswer: "Digital marketing starting costs in India typically range from ₹45,000 to ₹1,500,000 per month depending on ad spend budgets, channel scope, and campaign complexity. Low-friction diagnostic setup audits can cost as little as ₹7,500 one-time, while full performance retainers start around ₹45,000/mo.",
    content: `
      Marketing budgets are generally split into two categories:
      
      * **Ad Spend:** The direct cost paid to Google, Meta, or LinkedIn to run ads. In India, minimum ad spend to get statistical significance ranges from ₹30,000 to ₹100,000/month.
      * **Agency Retainers:** The fee paid to the marketing team to plan, write, design, and optimize campaigns. Standard retainer ranges are:
        - Freelancers: ₹15,000 - ₹45,000/mo
        - Boutique Performance Agencies: ₹45,000 - ₹120,000/mo
        - Corporate Large Agencies: ₹150,000 - ₹500,000/mo
    `
  },
  {
    slug: "inhouse-vs-agency",
    title: "In-House vs Agency vs Freelancer: The Honest Breakdown",
    summary: "We compare costs, efficiency, overheads, and outcomes across the three scaling models.",
    aeoQuestion: "Should you hire an in-house team, an agency, or a freelancer?",
    aeoAnswer: "Hiring an in-house team offers deep focus but is highly expensive (often exceeding ₹2.5L/mo). Freelancers are cost-effective (₹15k–₹45k/mo) but hard to scale and coordinate. Hiring an agency like Groowiq provides a complete team (copy, ads, SEO, dev) for the cost of a single junior employee (starting at ₹45k/mo).",
    content: `
      Here is the direct comparison of the three marketing models:
      
      * **In-House Team:** Great for rapid creative turnaround, but carries heavy recruitment overheads, employee taxes, and software tool costs (Semrush, Canva, Slack, etc.).
      * **Freelancers:** Good for isolated tasks (e.g. video editing or writing). However, you have to act as the project manager, which drains your focus as a founder.
      * **Growth Studio (Agency):** You gain immediate access to ads experts, developers, copywriters, and designers. The agency manages itself, allowing you to focus on product and logistics.
    `
  },
  {
    slug: "d2c-roas-playbook",
    title: "Performance Marketing for D2C Brands: The ROAS Playbook",
    summary: "The exact ad scaling sequence we use to scale e-commerce storefronts to multi-lakh monthly revenue.",
    aeoQuestion: "What is the best performance marketing playbook for D2C brands?",
    aeoAnswer: "The D2C ROAS playbook requires matching Meta dynamic creative testing (DCT) with fast Shopify landing pages. Scale your ad spend by increasing average order value (AOV) via product bundles and setting up clean UTM mapping and CAPI tracking to ensure 100% attribution accuracy.",
    content: `
      Our proven D2C blueprint contains three main elements:
      
      1. **Vite + React landing pages:** Landing pages built on React load in <2s, which cuts bounce rates and immediately doubles ad conversion rates compared to bloated Shopify themes.
      2. **Creative testing grid:** Testing 5 new video hooks and 3 copy variations every week. Creatives are the targeting mechanism on modern ad platforms.
      3. **Average Order Value (AOV) focus:** It is hard to run ads profitably on low-priced items. Design pre-discounted bundles to raise AOV above ₹2,000.
    `
  }
];

const GuidesPage = () => {
  const [activeGuide, setActiveGuide] = useState(null);

  useEffect(() => {
    document.title = "Marketing Guides & Resources | Groowiq Education Hub";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse marketing tutorials and guides from Groowiq. Get answers on digital agency costs in India, evaluative checklists, and D2C scaling funnels."
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
          <span className="text-[#D5D93B] font-bold">Guides</span>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Resource Hub</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Knowledge to Scale Your Brand
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            Honest answers to common marketing questions. Structured for founders who want real facts, and optimized for AI search engine answers.
          </p>
        </div>

        {/* Guides List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-8">
            {guides.map((guide) => (
              <div
                key={guide.slug}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[32px] p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-[#0F1039] dark:text-white">{guide.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{guide.summary}</p>
                
                {/* 40-60 word AEO Answer block */}
                <div className="bg-[#D5D93B]/5 border-l-4 border-[#D5D93B] p-5 my-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#D5D93B] mb-1">{guide.aeoQuestion}</h4>
                  <p className="text-sm leading-6 text-gray-600 dark:text-gray-300 font-medium">
                    {guide.aeoAnswer}
                  </p>
                </div>

                {activeGuide === guide.slug ? (
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 leading-7 whitespace-pre-line border-t border-gray-100 dark:border-white/10 pt-5">
                      {guide.content}
                    </div>
                    <button
                      onClick={() => setActiveGuide(null)}
                      className="mt-6 text-sm font-bold text-[#D5D93B] hover:underline"
                    >
                      Collapse Guide ↑
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setActiveGuide(guide.slug)}
                    className="mt-4 text-sm font-bold text-[#D5D93B] hover:underline"
                  >
                    Read Full Article →
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 bg-[#D5D93B]/5 border border-[#D5D93B]/20 p-8 rounded-[32px] text-center lg:text-left">
            <h3 className="text-xl font-bold text-[#0F1039] dark:text-white mb-2">Need a Second Opinion?</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-5 mb-6">
              Get our **AI Search Visibility Audit** (₹7,500) to find out why your brand isn't recommended on ChatGPT and Perplexity, and get a clear fix checklist.
            </p>
            <Link to="/contact">
              <Button className="w-full justify-center text-sm py-3">Book Audit Now</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GuidesPage;
