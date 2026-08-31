import React, { useEffect, useState } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const guides = [
  {
    slug: "choose-agency",
    title: "How to Choose a Marketing Agency: 17 Questions and a Scorecard",
    summary: "A practical guide and evaluation template to assess agency competency, account ownership, and red flags.",
    aeoQuestion: "How do I choose the best digital marketing agency?",
    aeoAnswer: "To choose a digital marketing agency, evaluate their verified case evidence, baseline metrics, time periods, and contract terms. Avoid agencies claiming unverified 'best' or 'top' status. Ensure you maintain full ownership of all ad, analytics, and CRM accounts.",
    content: "Use our custom Groowiq evaluation template and account-ownership checklist before signing any contract. Ask about their first test parameters, reporting sources, and stop-loss rules."
  },
  {
    slug: "digital-marketing-cost-india",
    title: "Digital Marketing Agency Cost in India: What Changes the Quote",
    summary: "Learn how growth marketing agencies in India price their services, scope parameters, and media spend exclusions.",
    aeoQuestion: "What does a digital marketing agency cost in India?",
    aeoAnswer: "Digital marketing costs in India are shaped by channel complexity, creative volume, tracking readiness, and campaign scope. Avoid flat bait prices. Media spend should be paid directly to platforms from client-owned accounts, separate from professional fees.",
    content: "We outline three anonymized scope scenarios to demonstrate how scope changes affect agency quotes in India, keeping professional retainers transparent and performance-driven."
  },
  {
    slug: "monthly-marketing-report",
    title: "What a Marketing Agency Should Report Every Month",
    summary: "A walkthrough of the source-of-truth maps, business signals, and avoiding vanity reports.",
    aeoQuestion: "What should a marketing agency report every month?",
    aeoAnswer: "A marketing report must focus on qualified demand, customer acquisition cost (CAC), pipeline values, and attribution limits. Avoid vanity metrics like impressions or clicks without revenue context. Ensure all reports connect platform activity directly to business outcomes.",
    content: "We map out a clear source-of-truth reporting structure showing how to reconcile Google, Meta, and CRM platforms under a unified dashboard."
  },
  {
    slug: "seo-aeo-geo",
    title: "SEO vs AEO vs GEO: One Foundation, Different Surfaces",
    summary: "An overview of search engines, answer engines, and generative AI search visibility models.",
    aeoQuestion: "What is the difference between SEO, AEO, and GEO?",
    aeoAnswer: "SEO, AEO, and GEO are part of a single search visibility system. They optimize website crawlability, entity clarity, and useful original content. For Google and AI engines, solid technical search foundations drive organic recommendations, rather than special AI files.",
    content: "Generative engines like ChatGPT Search and Perplexity retrieve answers from the core web index. We look at the official platform myth checks and define the measurement model."
  },
  {
    slug: "ad-account-ownership",
    title: "Who Should Own Ad Accounts, Analytics, and Creative? (Access Matrix)",
    summary: "An access and handover matrix for B2B and D2C marketing buyers.",
    aeoQuestion: "Who owns the ad and analytics accounts?",
    aeoAnswer: "The client must always retain ownership of all core ad, analytics, website, CRM, and platform accounts. Access can be granted and revoked dynamically. Creative source-file and handover terms must be stated in the proposal to prevent vendor lock-in.",
    content: "We provide a comprehensive access matrix detailing owner permissions, developer access levels, and secure handovers."
  },
  {
    slug: "audit-lead-quality",
    title: "How to Audit Lead Quality Before Increasing Ad Spend",
    summary: "How to build a sales feedback loop and use qualification worksheets to scale ads profitably.",
    aeoQuestion: "How do you audit lead quality?",
    aeoAnswer: "To audit lead quality, set up a feedback loop between sales CRM and ad platforms. Check the cost per qualified lead (CPQL) instead of cost per lead (CPL). Ensure raw lead forms are verified before increasing budgets.",
    content: "Our worksheet details how to isolate contact form junk submissions and optimize ad sets targeting actual conversions."
  },
  {
    slug: "when-not-to-hire-full-service",
    title: "When Not to Hire a Full-Service Marketing Agency",
    summary: "A decision tree to help you choose between specialists, in-house hires, project scopes, or agencies.",
    aeoQuestion: "When should I hire a full-service agency?",
    aeoAnswer: "Do not hire a full-service agency if your primary growth bottleneck is single-channel (like technical SEO or packaging design). In those cases, choose a specialist or an in-house expert. Agencies are most effective when scaling cross-channel systems.",
    content: "This decision tree helps founders evaluate resource limits, operational capacity, and when to bring execution in-house."
  },
  {
    slug: "proposal-red-flags",
    title: "Marketing Agency Red Flags in Proposals and Contracts",
    summary: "Learn to identify real clauses, empty guarantees, and contract lock-ins.",
    aeoQuestion: "What are red flags in a marketing proposal?",
    aeoAnswer: "Major red flags include guarantees on rankings/ROAS, hidden agency markup on ad spend, refusal to transfer account ownership, and vague deliverables. Always review the test windows and exit clauses.",
    content: "We analyze real contract clauses to help buyers identify hidden risks, without naming or shaming specific competitors."
  },
  {
    slug: "measure-whatsapp-leads",
    title: "How Groowiq Measured 1,528 WhatsApp Leads",
    summary: "An attribution setup and reconciliation walkthrough based on the Entartica campaign.",
    aeoQuestion: "How do you track WhatsApp leads attribution?",
    aeoAnswer: "WhatsApp leads are tracked by matching custom URL triggers with Meta Ads Manager pixels and server-side events. We set up attribution rules, UTM tracking, and cross-channel reconciliations to verify click-to-chat leads.",
    content: "This case breakdown explains our measurement method, campaign budget allocations, and how we handle multi-city scaling."
  },
  {
    slug: "read-growth-claims",
    title: "How to Read a 14,338% Growth Claim from a Zero Baseline",
    summary: "A guide to denominator literacy and understanding organic growth calculations.",
    aeoQuestion: "How do you calculate percentage growth from zero?",
    aeoAnswer: "Percentage growth calculations from a zero baseline can look excessively large (like +14,338%). To evaluate actual performance, lead with absolute visitor counts and profile actions first, keeping the percentage secondary.",
    content: "We use our UVR green energy zero-baseline launch parameters to show how to read raw analytics reports without formatting bias."
  },
  {
    slug: "local-seo-gujarat",
    title: "Local SEO for Gujarat Businesses: Evidence Checklist",
    summary: "A Google Business Profile, NAP consistency, and review acquisition workflow.",
    aeoQuestion: "What is the best local SEO checklist for Gujarat?",
    aeoAnswer: "Local SEO in Gujarat requires a verified Google Business Profile, consistent name-address-phone (NAP) data, and real client reviews. Avoid neighbourhood keyword stuffing. Link profile citations directly to location-specific website assets.",
    content: "Follow our step-by-step workflow covering citation building, review response templates, and local schema validation."
  },
  {
    slug: "creative-testing-reels",
    title: "Creative Testing for Non-Follower Reach",
    summary: "A Reels testing taxonomy and failure log based on our Spree Walk campaign.",
    aeoQuestion: "How do you test short-form video creatives?",
    aeoAnswer: "Short-form video creative testing requires structuring specific video hook variants, visual layout formats, and organic distribution loops. Monitor non-follower reach metrics to identify winners and document failures.",
    content: "We present our creative testing taxonomy, including how to analyze retention graphs and when to apply paid amplification."
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
