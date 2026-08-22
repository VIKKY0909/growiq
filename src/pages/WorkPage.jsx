import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Case Studies text data for SEO/AEO crawlers (route: /work/:slug)
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
    aeoAnswer: "We transformed standard corporate announcements into B2B B2B insights. By structuring expert commentary around marine manufacturing trends and manufacturing efficiency, ECHT Marine established high-trust executive positioning on LinkedIn.",
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
    aeoAnswer: "By templates of our high-performing Meta campaign structures and landing page architectures, we scaled campaigns across multiple regional hubs. This allowed market penetration with minimum setup latency and optimized local targeting.",
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

// Visual Showcase data representing existing portfolio pages
const featuredProjects = [
  {
    num: "01",
    id: "nagaon-beach-showcase",
    title: "South Nagaon Beach",
    category: "Social Campaign",
    description: "Premium landscape/portrait sea-themed posts.",
    image: "/images/portfolio/page_1.png",
    brief: "Develop high-end, premium social media creatives to establish brand presence for South Nagaon Beach.",
    approach: "Combined cinematic sea wave photography with luxury serif fonts, capturing both still and moving water concepts.",
    selectedWork: ["/images/portfolio/page_1.png", "/images/portfolio/page_2.png"]
  },
  {
    num: "02",
    id: "watten-house-showcase",
    title: "Watten House & Chuan Park",
    category: "Real Estate",
    description: "Property marketing and architectural campaigns.",
    image: "/images/portfolio/page_12.png",
    brief: "Design digital property flyers, brochure grids, and launch posters for premium residential developments.",
    approach: "Used minimal grid framing, large structural previews, and clean informational tables to highlight freehold properties.",
    selectedWork: ["/images/portfolio/page_12.png", "/images/portfolio/page_13.png", "/images/portfolio/page_14.png", "/images/portfolio/page_15.png", "/images/portfolio/page_16.png"]
  },
  {
    num: "03",
    id: "packaging-showcase",
    title: "Muthafuckin Pistachios",
    category: "Packaging",
    description: "Bold packaging layouts for salted pistachios & tan lotions.",
    image: "/images/portfolio/page_23.png",
    brief: "Create packaging boxes and pouch mockups that pop against standard shelf grids.",
    approach: "Balanced minimal text layout, large product visualization, and a deep-navy backdrop context.",
    selectedWork: ["/images/portfolio/page_23.png", "/images/portfolio/page_24.png"]
  },
  {
    num: "04",
    id: "web-showcase",
    title: "LA Lounge & Bessette Bridal",
    category: "Website / Web Design",
    description: "Digital bridal shops and architectural lighting storefronts.",
    image: "/images/portfolio/page_26.png",
    brief: "Design responsive, clean layout web pages optimized for fast load speed.",
    approach: "Implemented generous whitespace, sophisticated visual grids, and minimalist navigation structures.",
    selectedWork: ["/images/portfolio/page_25.png", "/images/portfolio/page_26.png", "/images/portfolio/page_27.png", "/images/portfolio/page_28.png"]
  }
];

const archiveProjects = [
  ...featuredProjects,
  {
    num: "05",
    id: "entartica-showcase",
    title: "Entartica Seaworld",
    category: "Social",
    description: "Water park booking banners and boat shows invites.",
    image: "/images/portfolio/page_3.png",
    brief: "Create conversion-oriented digital invites and ad creatives for water sports and resorts.",
    approach: "Merged vertical speedboat drone views with bright overlays and Cochin location maps.",
    selectedWork: ["/images/portfolio/page_3.png", "/images/portfolio/page_4.png"]
  },
  {
    num: "06",
    id: "hungrite-showcase",
    title: "Hungrite Shows",
    category: "Social",
    description: "Multi-city show lists and weekend scheduling grids.",
    image: "/images/portfolio/page_5.png",
    brief: "Design clear, highly legible weekend calendar schedules for cloud kitchens.",
    approach: "Paired custom cartoon graphics with high-contrast dates boxes and menu items.",
    selectedWork: ["/images/portfolio/page_5.png", "/images/portfolio/page_6.png", "/images/portfolio/page_7.png"]
  },
  {
    num: "07",
    id: "forte-showcase",
    title: "Forte Haircare",
    category: "Social",
    description: "D2C skincare benefits grids and Easter events cards.",
    image: "/images/portfolio/page_9.png",
    brief: "Create digital ad campaigns to showcase product value and holiday discounts.",
    approach: "Balanced clean product shots with blue-backed customer reviews and target pain-point lists.",
    selectedWork: ["/images/portfolio/page_8.png", "/images/portfolio/page_9.png"]
  },
  {
    num: "08",
    id: "bidx-showcase",
    title: "BidX Billboards",
    category: "Outdoor",
    description: "DSP webinar posters and highway billboard mockups.",
    image: "/images/portfolio/page_17.png",
    brief: "Design large-scale highway displays optimized for rapid reading speed.",
    approach: "Leveraged bold text, simple device framing, and clean vector shapes.",
    selectedWork: ["/images/portfolio/page_17.png", "/images/portfolio/page_18.png"]
  },
  {
    num: "09",
    id: "cognible-showcase",
    title: "Cognible Manuals",
    category: "Print",
    description: "API processes booklets and Force distributor grids.",
    image: "/images/portfolio/page_20.png",
    brief: "Design print catalogs and corporate product brochures.",
    approach: "Combined corporate blue tones with clean photo blocks and technical specification sheets.",
    selectedWork: ["/images/portfolio/page_19.png", "/images/portfolio/page_20.png", "/images/portfolio/page_21.png", "/images/portfolio/page_22.png"]
  }
];

// Mapping helper to category filters
const categoryMap = {
  All: "All",
  Social: "Social",
  "Real Estate": "Real Estate",
  Outdoor: "Outdoor",
  Print: "Print",
  Packaging: "Packaging",
  Web: "Website / Web Design"
};

const WorkPage = () => {
  const { slug } = useParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedShowcase, setSelectedShowcase] = useState(null);

  // Close showcase on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedShowcase(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // SEO / AEO Dynamic route mapping
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
      <div className="py-20 bg-[#0F1039] text-white min-h-screen">
        <script type="application/ld+json">
          {JSON.stringify(study.schema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqPageSchema)}
        </script>

        <Container>
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold tracking-wide text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/work" className="hover:text-[#D5D93B] transition-colors">Work</Link>
            <span className="mx-2">/</span>
            <span className="text-[#D5D93B] font-bold capitalize">{slug.replace(/-/g, " ")}</span>
          </nav>

          {/* H1 Headline */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white max-w-4xl">
            {study.h1}
          </h1>

          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mt-4">
            {study.serviceIndustry}
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-8 max-w-3xl">
            {study.intro}
          </p>

          {/* Results List */}
          <div className="my-10 bg-white/5 p-8 rounded-3xl border border-white/10">
            <h3 className="text-lg font-bold text-white mb-4">Results (Verbatim from client deck)</h3>
            <ul className="space-y-4">
              {study.metrics.map((metric, index) => (
                <li key={index} className="flex items-start gap-3 text-base text-gray-200">
                  <span className="text-[#D5D93B] font-bold">✓</span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AEO Answer Block */}
          <div className="my-12">
            <h2 className="text-2xl font-black text-white mb-3">{study.aeoTitle}</h2>
            <p className="text-base sm:text-lg leading-8 text-gray-200 bg-[#D5D93B]/10 border-l-4 border-[#D5D93B] p-6 rounded-r-2xl font-semibold">
              {study.aeoAnswer}
            </p>
          </div>

          {/* FAQ Block */}
          <div className="my-16 border-t border-white/10 pt-10">
            <h3 className="text-xl font-bold text-white mb-4">FAQ</h3>
            <div className="bg-white/2 p-6 rounded-2xl border border-white/5 max-w-3xl">
              <h4 className="font-bold text-white mb-2">{study.faq.q}</h4>
              <p className="text-sm text-gray-300 leading-6">{study.faq.a}</p>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  // Visual Creative Showcase overview page (route: /work)
  useEffect(() => {
    document.title = "Selected Creative Work | GROOWiq Portfolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse GROOWiq's premium design portfolio. Features social media campaigns, real estate, outdoor banners, packaging, and high-performance websites."
      );
    }
  }, []);

  const filteredArchive = archiveProjects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === categoryMap[activeCategory];
  });

  return (
    <div className="bg-[#0D0D2B] text-white min-h-screen py-20 transition-all duration-500">
      <Container>
        {/* Editorial Heading Section */}
        <div className="max-w-4xl mb-24">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#D5D93B] mb-4">OUR WORK</p>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-[1.05] mb-6">
            Selected work.
            <br />
            Built to get noticed.
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-semibold tracking-wide max-w-xl">
            Branding, campaigns, content and digital experiences created across industries.
          </p>
        </div>

        {/* =========================================
            FEATURED / SELECTED WORK SECTION
        ========================================= */}
        <div className="mb-28">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-10">SELECTED WORK</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedShowcase(project)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-[24px] bg-[#121233] border border-white/5 p-0">
                    {/* Background Number */}
                    <div className="absolute top-4 left-6 text-7xl sm:text-8xl font-black text-white/5 select-none z-0">
                      {project.num}
                    </div>
                    {/* Visual - Exact height auto to maintain true aspect ratio without cropping */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] relative z-10 block"
                    />
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0D0D2B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#D5D93B]">{project.category}</div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-black text-white">{project.title}</h3>
                          <p className="text-xs text-gray-400 mt-1">{project.description}</p>
                        </div>
                        <span className="text-[#D5D93B] text-xl font-bold">→</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-wider text-gray-500 mb-1">{project.category}</p>
                      <h3 className="text-2xl font-extrabold tracking-tight text-white">{project.title}</h3>
                    </div>
                    <span className="text-gray-600 group-hover:text-[#D5D93B] transition-colors text-lg">
                      {project.num} / 04
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            COMPLETE WORK ARCHIVE WITH FILTERS
        ========================================= */}
        <div id="archive" className="border-t border-white/10 pt-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500">COMPLETE ARCHIVE</h2>
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {Object.keys(categoryMap).map((catName) => (
                <button
                  key={catName}
                  type="button"
                  onClick={() => setActiveCategory(catName)}
                  className={`text-xs font-semibold px-4 py-2 rounded-full border transition-all duration-300 whitespace-nowrap focus:outline-none ${
                    activeCategory === catName
                      ? "border-[#D5D93B] text-[#D5D93B] bg-[#D5D93B]/5 font-black"
                      : "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                  }`}
                >
                  {catName}
                </button>
              ))}
            </div>
          </div>

          {/* Asymmetric / Editorial Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredArchive.map((project, idx) => {
              // Custom span settings to create asymmetric flow
              const isLarge = idx % 4 === 0 || idx === 5;
              const colSpan = isLarge ? "col-span-1 md:col-span-2" : "col-span-1";

              return (
                <div
                  key={`${project.id}-archive`}
                  onClick={() => setSelectedShowcase(project)}
                  className={`group cursor-pointer flex flex-col justify-between ${colSpan}`}
                >
                  <div className="relative w-full overflow-hidden rounded-[20px] bg-[#121233] border border-white/5 p-0">
                    {/* Background Number */}
                    <div className="absolute top-4 left-6 text-7xl font-black text-white/5 select-none z-0">
                      {project.num}
                    </div>
                    {/* Visual - Exact ratio maintained */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.03] relative z-10 block"
                    />
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0D0D2B]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D5D93B]">{project.category}</span>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-white">{project.title}</h4>
                          <p className="text-xs text-gray-400 mt-1">{project.description}</p>
                        </div>
                        <span className="text-[#D5D93B] font-bold">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* =========================================
          OPTION A: PREMIUM PROJECT SHOWCASE MODAL
      ========================================= */}
      <AnimatePresence>
        {selectedShowcase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#0D0D2B]/95 backdrop-blur-md p-4 sm:p-10"
          >
            <div className="max-w-6xl mx-auto bg-[#121233] rounded-[40px] border border-white/10 overflow-hidden relative shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedShowcase(null)}
                aria-label="Close case study"
                className="absolute top-6 right-6 z-[110] bg-[#0D0D2B] border border-white/10 rounded-full h-12 w-12 flex items-center justify-center text-white hover:text-[#D5D93B] hover:border-[#D5D93B]/50 transition-all focus:outline-none"
              >
                <X size={20} />
              </button>

              <div className="p-8 sm:p-16">
                {/* Header */}
                <div className="mb-10">
                  <div className="text-xs font-black text-[#D5D93B] uppercase tracking-widest mb-2">
                    {selectedShowcase.num} / {selectedShowcase.category}
                  </div>
                  <h2 className="text-3xl sm:text-5xl font-black text-white">{selectedShowcase.title}</h2>
                  <p className="text-xs text-gray-400 mt-2">Services: Creative Direction, Campaign Scaling, Asset Design</p>
                </div>

                {/* Hero visual - exact size, no padding/cropping space */}
                <div className="rounded-3xl overflow-hidden mb-12 bg-[#0D0D2B] border border-white/5 p-0">
                  <img
                    src={selectedShowcase.image}
                    alt={selectedShowcase.title}
                    className="w-full h-auto object-contain block"
                  />
                </div>

                {/* Brief & Approach */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm sm:text-base leading-7 mb-16">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">01 / THE BRIEF</h4>
                    <p className="text-gray-300">{selectedShowcase.brief}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">02 / APPROACH</h4>
                    <p className="text-gray-300">{selectedShowcase.approach}</p>
                  </div>
                </div>

                {/* Curated Layout / Selected work */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">03 / CREATIVE ASSETS</h4>
                  
                  <div className="space-y-10">
                    {selectedShowcase.selectedWork.map((assetPath, idx) => {
                      return (
                        <div key={idx} className="overflow-hidden bg-[#0D0D2B] rounded-3xl p-0 border border-white/5">
                          <img
                            src={assetPath}
                            alt={`${selectedShowcase.title} asset ${idx}`}
                            className="w-full h-auto object-contain block"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-white">Let's scale your brand's creatives.</h4>
                    <p className="text-xs text-gray-400 mt-1">Chat directly with our creative director on WhatsApp.</p>
                  </div>
                  <a
                    href="https://wa.me/918511822796"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-6 py-3.5 text-sm rounded-full">
                      Start Consultation
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WorkPage;
