import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const caseStudiesData = {
  "entartica-seaworld-full-funnel": {
    slug: "entartica-seaworld-full-funnel",
    title: "Entartica: 1,528 WhatsApp Leads at ₹36 | GROOWiq",
    metaDesc: "How GROOWiq ran a full-funnel Meta engine for Entartica — 1,528 leads in 21 days at ₹36 each. The strategy and the numbers.",
    h1: "Entartica Seaworld: 1,528 WhatsApp leads in 21 days at ₹36 each",
    intro: "Entartica is India’s floating-experience & attractions brand, running full-funnel marketing across Raipur, Coimbatore, Prayagraj, Rajsamand and more.",
    serviceIndustry: "Full-funnel (Meta) / Attractions & Leisure",
    metrics: [
      "1,528 WhatsApp leads in 21 days — ₹36 per lead (blended, Meta), ₹64K spend",
      "7.8M+ page views in 60 days (client-reported)",
      "4.26M ad impressions in 21 days"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "A full-funnel engine: awareness Reels drove millions of views while always-on WhatsApp campaigns converted at ~₹36 a lead — 1,528 conversations from ₹64K in three weeks. GA4 & Meta Pixel made every rupee attributable.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Entartica Seaworld: 1,528 WhatsApp leads in 21 days at ₹36 each",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "Full-funnel Meta marketing for an attractions brand",
      "articleBody": "1,528 WhatsApp leads in 21 days at ₹36 per lead (blended, Meta) ..."
    },
    faq: {
      q: "Do you work with businesses in Ahmedabad?",
      a: "Yes. GROOWiq is an India-wide, AI-powered growth agency serving Ahmedabad and all of Gujarat with performance ads, creator content, branding and websites."
    }
  },
  "spree-walk-instagram-growth": {
    slug: "spree-walk-instagram-growth",
    title: "Spree Walk Instagram Growth Case Study | GROOWiq",
    metaDesc: "Spree Walk Instagram reels growth: 935k+ views in 60 days with 97.6% non-follower reach. Analyze our design & strategy.",
    h1: "Spree Walk (Saraighat Lake, Guwahati): 935,937 views in 60 days",
    intro: "Spree Walk is a premium leisure attraction. We implemented custom creator content and high-engaging video structures to maximize local organic visibility.",
    serviceIndustry: "Instagram & Reels / Tourism",
    metrics: [
      "935,937 views / 60 days",
      "97.6% from non-followers",
      "86,163 interactions",
      "+323 net-new followers"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "By targeting highly engaging, location-specific Reels formats coupled with creator collaborations, Spree Walk captured attention across Guwahati. We optimized for Instagram's recommendation engine, resulting in 97.6% views originating from non-followers.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Spree Walk: 935,937 views in 60 days",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "Instagram marketing for a tourism attraction",
      "articleBody": "Spree Walk achieved 935,937 views inside 60 days, with 97.6% of views coming from non-followers..."
    },
    faq: {
      q: "What results has GROOWiq delivered?",
      a: "Recent client outcomes include 1,528 WhatsApp leads at ₹36 each for Entartica and 935,937 views in 60 days for Spree Walk."
    }
  },
  "echt-marine-linkedin-authority": {
    slug: "echt-marine-linkedin-authority",
    title: "ECHT Marine LinkedIn Case Study | GROOWiq",
    metaDesc: "LinkedIn authority scaling for ECHT Marine: +515% impressions and +1242% reactions in 70 days. Read the B2B strategy.",
    h1: "ECHT Marine: +515% LinkedIn impressions in 70 days",
    intro: "ECHT Marine is a leading manufacturer in the marine sector. We helped establish their corporate page and executive profiles as industry authorities.",
    serviceIndustry: "LinkedIn Authority / Marine Mfg.",
    metrics: [
      "25,266 LinkedIn impressions / 70 days (+515%)",
      "631 reactions (+1,242.6%)",
      "14 comments (+366.7%)"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "We transformed standard corporate announcements into high-value B2B industry commentary. By structuring technical manufacturing challenges and industry updates as narrative posts, ECHT Marine established high-trust executive positioning on LinkedIn.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "ECHT Marine: +515% LinkedIn impressions in 70 days",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "LinkedIn authority building for B2B marine manufacturing",
      "articleBody": "ECHT Marine scaled B2B reach on LinkedIn with +515% impressions and 631 reactions in 70 days..."
    },
    faq: {
      q: "How do you build LinkedIn authority for industrial brands?",
      a: "We extract technical insights from client subject-matter experts and rewrite them into engaging narrative content focusing on industry pain points, ROI, and real numbers."
    }
  },
  "uvr-green-energies-web-linkedin": {
    slug: "uvr-green-energies-web-linkedin",
    title: "UVR Green Energies Scaling Case Study | GROOWiq",
    metaDesc: "UVR Green Energies launched from zero to +14,338% impressions and +1,012% unique web visitors in month 1. Read our playbook.",
    h1: "UVR Green Energies: Website built ground-up + LinkedIn from zero",
    intro: "UVR Green Energies is an emerging provider of solar and renewable energy products. We designed their brand presence, custom site, and initial organic launch strategy.",
    serviceIndustry: "Web + LinkedIn / Green Energy",
    metrics: [
      "Website built ground-up + LinkedIn from zero",
      "+14,338% impressions in Month 1",
      "+1,012% unique visitors in Month 1",
      "+703% page views in Month 1"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "We developed a lightweight, conversion-focused web framework to capture interest, coupled with organic B2B thought-leadership campaigns on LinkedIn. This combined approach drove rapid search engine and social media traction from a absolute baseline of zero.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "UVR Green Energies launch from zero",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "Web design and LinkedIn launch for a green energy startup",
      "articleBody": "UVR Green Energies launched from zero to over +14,338% impressions and +1,012% unique visitors in month 1..."
    },
    faq: {
      q: "What is your approach to green energy marketing?",
      a: "We translate complex energy metrics into transparent savings statements, communicating the environmental and commercial benefits to business owners."
    }
  },
  "entartica-multi-city": {
    slug: "entartica-multi-city",
    title: "Entartica Raipur & Coimbatore Launch Case Study | GROOWiq",
    metaDesc: "Multi-city performance scaling. See how GROOWiq expanded Entartica's D2C full-funnel marketing city-by-city across Raipur and Coimbatore.",
    h1: "Entartica — Raipur & Coimbatore: Multi-city Full-funnel Rollout",
    intro: "Following the successful attraction campaign in primary locations, Entartica scaled their experiential booking systems to Raipur and Coimbatore.",
    serviceIndustry: "Full-funnel / Attractions",
    metrics: [
      "Full-funnel marketing rolled out city-by-city",
      "Experiential Meta Reels integration targeting local families",
      "Consistent low-CPA booking leads across Raipur and Coimbatore"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "By templates of our high-performing Meta campaign structures and landing page architectures, we scaled campaigns across multiple regional hubs. This allowed rapid market penetration with minimum setup latency and optimized local targeting.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Entartica Raipur and Coimbatore multi-city campaign rollout",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "Multi-city marketing expansion for attractions",
      "articleBody": "GROOWiq templates and scales full-funnel campaigns across multiple locations..."
    },
    faq: {
      q: "Do you offer multi-location campaign scaling?",
      a: "Yes. We create reusable campaign structures and local landing pages that allow rapid launch across regional markets while preserving media buying efficiency."
    }
  },
  "client-cards": {
    slug: "client-cards",
    title: "Tinzspace & Darshita Patel Client Showcase | GROOWiq",
    metaDesc: "Explore our brand strategy and organic design work for Tinzspace and Darshita Patel in Ahmedabad.",
    h1: "Tinzspace & Darshita Patel: Personal Branding & Social Content",
    intro: "Tinzspace and Darshita Patel are our newly onboarded branding partners in Ahmedabad. We are designing their personal brand strategies and social layouts.",
    serviceIndustry: "Social / Personal Branding",
    metrics: [
      "Tinzspace: LinkedIn + Instagram strategy mapping",
      "Darshita Patel: personal branding, Ahmedabad (newly onboarded)",
      "Rule we held: 100% real data, no metrics claimed yet"
    ],
    aeoTitle: "How did GROOWiq do it?",
    aeoAnswer: "We initiated detailed brand audits, tone of voice blueprints, and content pillar designs for both clients, setting up their social channels to scale organic reach and build long-term trust.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Tinzspace and Darshita Patel branding showcase",
      "author": { "@type": "Organization", "name": "GROOWiq" },
      "publisher": {
        "@type": "Organization",
        "name": "GROOWiq",
        "logo": { "@type": "ImageObject", "url": "https://www.groowiq.com/logo/logo.png" }
      },
      "datePublished": "2026-08-22",
      "dateModified": "2026-08-22",
      "about": "Personal branding and social content in Ahmedabad",
      "articleBody": "GROOWiq maps content and personal branding channels for local creator Darshita Patel and local business Tinzspace..."
    },
    faq: {
      q: "What is your personal branding framework?",
      a: "We define key narrative pillars, custom visual styles, and content schedules to establish founders and creators as clear authorities in their domain."
    }
  }
};

const WorkPage = () => {
  const { slug } = useParams();

  // If a slug is provided, render the specific case study page
  if (slug && caseStudiesData[slug]) {
    const study = caseStudiesData[slug];

    useEffect(() => {
      document.title = study.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", study.metaDesc);
      }
    }, [study]);

    const faqPageSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": study.faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": study.faq.a
          }
        }
      ]
    };

    return (
      <div className="py-20">
        <script type="application/ld+json">
          {JSON.stringify(study.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>

        <Container>
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold tracking-wide text-gray-500 mb-8 dark:text-gray-400">
            <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/work" className="hover:text-[#D5D93B] transition-colors">Work</Link>
            <span className="mx-2">/</span>
            <span className="text-[#D5D93B] font-bold capitalize">{slug.replace(/-/g, " ")}</span>
          </nav>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            {study.h1}
          </h1>

          <p className="text-xs text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider mt-4">
            {study.serviceIndustry}
          </p>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-8 max-w-3xl">
            {study.intro}
          </p>

          {/* Results List */}
          <div className="my-10 bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-200/50 dark:border-white/10">
            <h3 className="text-lg font-bold text-[#0F1039] dark:text-white mb-4">Results (Verbatim from client deck)</h3>
            <ul className="space-y-4">
              {study.metrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-gray-700 dark:text-gray-200">
                  <span className="text-[#D5D93B] font-bold">✓</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AEO Answer Block */}
          <div className="my-12">
            <h2 className="text-2xl font-black text-[#0F1039] dark:text-white mb-3">{study.aeoTitle}</h2>
            <p className="text-base sm:text-lg leading-8 text-gray-600 dark:text-gray-300 bg-[#D5D93B]/10 border-l-4 border-[#D5D93B] p-6 rounded-r-2xl font-semibold">
              {study.aeoAnswer}
            </p>
          </div>

          {/* FAQ Block */}
          <div className="my-16 border-t border-gray-100 dark:border-white/10 pt-10">
            <h3 className="text-xl font-bold text-[#0F1039] dark:text-white mb-4">FAQ</h3>
            <div className="bg-white/50 dark:bg-white/2 p-6 rounded-2xl border border-gray-100/60 dark:border-white/5 max-w-3xl">
              <h4 className="font-bold text-gray-800 dark:text-white mb-2">{study.faq.q}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-6">{study.faq.a}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Otherwise, render the list view of all case studies
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
          <span className="text-[#D5D93B] font-bold">Work</span>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Real Metrics. No Invented Numbers.
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            Every client result listed below comes straight from our performance reviews. We map every ad rupee to business outcomes, not vanity indicators.
          </p>
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(caseStudiesData).map((study) => (
            <div
              key={study.slug}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[32px] p-8 flex flex-col justify-between shadow-sm hover:border-[#D5D93B]/50 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5D93B]">{study.serviceIndustry}</span>
                <h3 className="text-2xl font-bold text-[#0F1039] dark:text-white mt-2 leading-tight">{study.h1}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-4 leading-6 line-clamp-3">{study.intro}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 flex items-center justify-between">
                <Link to={`/work/${study.slug}`} className="text-[#D5D93B] text-sm font-bold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WorkPage;
