import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { ArrowRight, X } from "lucide-react";
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
    aeoAnswer: "We transformed standard corporate announcements into B2B industry commentary. By structuring technical manufacturing challenges and industry updates as narrative posts, ECHT Marine established high-trust executive positioning on LinkedIn.",
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

// Visual Showcase data representing existing portfolio pages
const featuredProjects = [
  {
    num: "01",
    id: "entartica-showcase",
    title: "Entartica",
    category: "Social Campaign",
    description: "Campaign creatives for a premium water experience brand.",
    image: "/images/portfolio/page_2.png",
    brief: "Develop high-converting visual assets and video frameworks to scale regional bookings across Raipur, Coimbatore, and central India.",
    approach: "Combined wide-angle drone shots of speedboats and water leisure with modern social overlays and clear CTA bands to capture immediate action.",
    selectedWork: ["/images/portfolio/page_2.png", "/images/portfolio/page_1.png", "/images/portfolio/page_7.png"]
  },
  {
    num: "02",
    id: "real-estate-showcase",
    title: "Watten House & Chuan Park",
    category: "Real Estate",
    description: "Property marketing and architectural layouts for premium developments.",
    image: "/images/portfolio/page_9.png",
    brief: "Establish high-trust digital assets and brochure structures to communicate prime opportunities andWatten House developments.",
    approach: "Structured clean, grid-based layouts focusing on high-resolution architectural mockups, clean typography, and core investment highlights.",
    selectedWork: ["/images/portfolio/page_9.png", "/images/portfolio/page_8.png", "/images/portfolio/page_10.png"]
  },
  {
    num: "03",
    id: "packaging-showcase",
    title: "Muthafuckin Pistachios",
    category: "Packaging",
    description: "Bold, premium packaging styling for consumer packaged goods.",
    image: "/images/portfolio/page_15.png",
    brief: "Design eye-catching packaging mockups for premium salted pistachios and Tan Lotion cosmetics that command retail shelf attention.",
    approach: "Balanced bold, high-contrast text block naming with sleek near-black layouts, highlighting the product visual at the lower grid section.",
    selectedWork: ["/images/portfolio/page_15.png"]
  },
  {
    num: "04",
    id: "web-showcase",
    title: "LA Lounge",
    category: "Website / Web Design",
    description: "Digital storefront and premium web layouts for architectural lighting studios.",
    image: "/images/portfolio/page_16.png",
    brief: "Rebuild custom lightning-fast React interfaces and digital bridal catalog experiences that load in under 2 seconds.",
    approach: "Created a minimalist, editorial layout with generous whitespace, high-fashion styling grids, and responsive design systems.",
    selectedWork: ["/images/portfolio/page_16.png", "/images/portfolio/page_17.png"]
  }
];

const archiveProjects = [
  ...featuredProjects,
  {
    num: "05",
    id: "bidx-showcase",
    title: "BidX Billboards",
    category: "Outdoor",
    description: "Realistic outdoor mockups and highway DSP display creatives.",
    image: "/images/portfolio/page_11.png",
    brief: "Produce bold, highly legible billboard creatives for digital-ads webinars and Amazon DSP strategy showcases.",
    approach: "Utilized high-contrast blue backgrounds, clear device graphics, and minimal large headlines optimized for 3-second readability.",
    selectedWork: ["/images/portfolio/page_11.png", "/images/portfolio/page_12.png"]
  },
  {
    num: "06",
    id: "cognible-showcase",
    title: "Cognible Tactics",
    category: "Print",
    description: "Verbal design manuals, brochures, and automotive distributor catalogs.",
    image: "/images/portfolio/page_14.png",
    brief: "Develop high-end layouts for Force Supreme catalogs, Rest API manuals, and corporate brochures.",
    approach: "Mapped clean informational grids with light editorial styling, clear diagram breakouts, and spacious text boxes.",
    selectedWork: ["/images/portfolio/page_14.png", "/images/portfolio/page_13.png"]
  },
  {
    num: "07",
    id: "curries-showcase",
    title: "Curries Holi",
    category: "Social",
    description: "Holi and happiness digital campaign designs for cloud kitchens.",
    image: "/images/portfolio/page_4.png",
    brief: "Create vibrant, highly shareable food-brand greeting templates and weekend shows listings.",
    approach: "Blended artistic culinary illustrations with friendly, curved script headings and high-saturation colors.",
    selectedWork: ["/images/portfolio/page_4.png", "/images/portfolio/page_3.png"]
  },
  {
    num: "08",
    id: "forte-showcase",
    title: "Forte Haircare",
    category: "Social",
    description: "D2C haircare ad creative concepts and oil-buildup campaigns.",
    image: "/images/portfolio/page_5.png",
    brief: "Design conversion-focused Instagram grids and D2C product-benefit mockups.",
    approach: "Combined bright blue product-benefit styling callouts with professional model photography for clean product positioning.",
    selectedWork: ["/images/portfolio/page_5.png", "/images/portfolio/page_7.png"]
  },
  {
    num: "09",
    id: "just-interiors-showcase",
    title: "Just Interiors",
    category: "Social",
    description: "Interior design quote layouts and high-end room visual grids.",
    image: "/images/portfolio/page_6.png",
    brief: "Produce elegant, architectural social assets to communicate luxurious design philosophy.",
    approach: "Emphasized large space visuals with sophisticated typography guidelines and a clean, centered text alignment.",
    selectedWork: ["/images/portfolio/page_6.png"]
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
            {featuredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedShowcase(project)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden rounded-[24px] aspect-[4/3] bg-[#121233] border border-white/5">
                    {/* Background Number */}
                    <div className="absolute top-4 left-6 text-7xl sm:text-8xl font-black text-white/5 select-none z-0">
                      {project.num}
                    </div>
                    {/* Visual */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] relative z-10"
                    />
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0D0D2B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-8">
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
              // Custom grids configuration to make masonry visual rhythm
              const isLarge = idx % 4 === 0 || idx === 5;
              const gridClass = isLarge
                ? "col-span-1 md:col-span-2 aspect-[16/10]"
                : "col-span-1 aspect-[3/4] md:aspect-[4/5]";

              return (
                <div
                  key={`${project.id}-archive`}
                  onClick={() => setSelectedShowcase(project)}
                  className={`group cursor-pointer flex flex-col justify-between ${gridClass}`}
                >
                  <div className="relative w-full h-full overflow-hidden rounded-[20px] bg-[#121233] border border-white/5">
                    {/* Background Number */}
                    <div className="absolute top-4 left-6 text-7xl font-black text-white/5 select-none z-0">
                      {project.num}
                    </div>
                    {/* Visual */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03] relative z-10"
                    />
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-[#0D0D2B]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-6">
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

                {/* Hero visual */}
                <div className="rounded-3xl overflow-hidden aspect-[16/9] mb-12 bg-[#0D0D2B] border border-white/5">
                  <img
                    src={selectedShowcase.image}
                    alt={selectedShowcase.title}
                    className="w-full h-full object-cover"
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
                      const isFull = idx === 0 || selectedShowcase.selectedWork.length === 1;
                      const sizeClass = isFull
                        ? "w-full rounded-2xl border border-white/5"
                        : "w-full rounded-2xl border border-white/5 aspect-square object-cover";

                      return (
                        <div key={idx} className="overflow-hidden bg-[#0D0D2B] rounded-3xl">
                          <img
                            src={assetPath}
                            alt={`${selectedShowcase.title} asset ${idx}`}
                            className={sizeClass}
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
