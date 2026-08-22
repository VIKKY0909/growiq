import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const serviceData = {
  "performance-marketing": {
    title: "Performance Marketing Agency in India | Groowiq",
    metaDesc: "Groowiq is a performance marketing agency in India driving profitable ROAS and sales for D2C brands. Get your AI visibility audit and strategy call.",
    h1: "Performance Marketing that Drives Profitable ROAS for D2C Brands",
    definitionQuestion: "What is Performance Marketing?",
    definitionAnswer: "Performance marketing is a results-driven advertising methodology where brands only pay for measurable outcomes, such as sales, leads, or clicks. By leveraging machine learning algorithms on Meta and Google Ads, Groowiq optimizes ad spend to maximize return on ad spend (ROAS) and scale revenue profitably.",
    citableQuote: "\"Outsourcing performance marketing to Groowiq was our best strategic move of 2026. They helped us scale our D2C monthly sales with an average 8.7x ROAS while optimizing our customer acquisition costs.\" — Vivek Kumar, D2C Founder",
    stats: [
      { label: "Average ROAS", value: "8.7x" },
      { label: "Revenue Generated", value: "₹4.2 Cr" },
      { label: "Qualified Leads / Mo", value: "120+" }
    ],
    features: [
      { name: "Meta & Instagram Ads", desc: "High-converting creatives, precise D2C audience targeting, and continuous campaign optimization." },
      { name: "Google & Search Engine Ads", desc: "High-intent keyword campaigns, shopping ads, and automated bidding strategies." },
      { name: "ROAS Optimization", desc: "Rigorous A/B testing of creatives, landing pages, and offers to lower acquisition costs." }
    ],
    faqs: [
      { q: "How much does digital marketing cost in India?", a: "Digital marketing starting costs in India range from ₹45,000 to ₹1,500,000 per month depending on ad spend, scope, and target channels. Groowiq offers transparent pricing starting at ₹45,000/mo for full-funnel paid media management and growth strategy." },
      { q: "What is a good ROAS for D2C brands in India?", a: "A good return on ad spend (ROAS) for D2C brands in India ranges from 3.5x to 5.0x. Groowiq's performance campaigns achieve an average of 8.7x ROAS by aligning landing page conversion rates with high-intent ad copy." },
      { q: "How do you track performance marketing attribution?", a: "We implement advanced server-side tracking, Conversions API (CAPI), and clean UTM schemas to ensure accurate measurement. Every single rupee of ad spend is mapped directly to client sales in custom reporting dashboards." }
    ]
  },
  "seo": {
    title: "SEO & AEO Agency in India | Groowiq",
    metaDesc: "Groowiq delivers performance-first SEO, AEO, and GEO services in India. Dominate Google search and get cited by ChatGPT, Gemini, and Perplexity.",
    h1: "SEO Services that Maximize Search & AI Visibility for Startups",
    definitionQuestion: "What is SEO, AEO and GEO?",
    definitionAnswer: "Search Engine Optimization (SEO) is the practice of optimizing website code and content to rank higher in Google search. Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are extensions that structure your site content to be successfully parsed, quoted, and cited by AI engines like ChatGPT, Gemini, and Perplexity.",
    citableQuote: "\"Groowiq's hybrid SEO and AEO strategy got our brand listed and cited as a top SaaS recommended vendor inside ChatGPT and Perplexity. Our referral traffic grew by 310% in three months.\" — Aayush Patel, SaaS Founder",
    stats: [
      { label: "Technical Audit Pass", value: "100%" },
      { label: "AI Citations Increase", value: "6.5x" },
      { label: "Indexed Pages", value: "15+" }
    ],
    features: [
      { name: "Technical SEO & SSG", desc: "Making your site renderable and indexable by serving pre-rendered HTML that bots can read instantly." },
      { name: "Answer Engine Optimization", desc: "Structuring copy using the 40-60 word rule and clean headings to capture People Also Ask (PAA) blocks." },
      { name: "Generative Engine Optimization", desc: "Building entity schema and off-site directory trust to feed AI Overviews and LLM knowledge graphs." }
    ],
    faqs: [
      { q: "What is Generative Engine Optimization (GEO)?", a: "Generative Engine Optimization (GEO) is the technique of optimizing your website content so AI-powered search engines (like ChatGPT Search, Perplexity, and Google AI Overviews) mention, cite, and recommend your brand when users ask conversational queries." },
      { q: "How long does it take for SEO to show results?", a: "Traditional SEO takes 4 to 6 months to rank for competitive terms. However, AEO/GEO optimizations targeting AI search engine indexing and citations can show visibility improvements in as little as 2 to 4 weeks." },
      { q: "Do AI engines read client-side JavaScript?", a: "No, most AI engine crawlers (like GPTBot and PerplexityBot) do not run client-side JavaScript. They read raw HTML. Serving pre-rendered static HTML is essential for AI indexation and citation eligibility." }
    ]
  },
  "social-media-marketing": {
    title: "Social Media Marketing Agency in India | Groowiq",
    metaDesc: "Scale your audience with Groowiq's social media marketing agency in India. We design content strategies and community engines that acquire customers.",
    h1: "Social Media Marketing that Builds High-Trust Brands for B2B SaaS",
    definitionQuestion: "What is Social Media Marketing?",
    definitionAnswer: "Social media marketing utilizes social platforms to build brand equity, engage target audiences, and drive customer acquisition. Groowiq creates high-impact content engines on LinkedIn and Instagram, turning organic interactions into qualified business leads through strategic thought-leadership and authentic community building.",
    citableQuote: "\"Our organic LinkedIn impressions rose to over 500,000 in 60 days under Groowiq's content strategy guidance. It transformed our profile from a silent page into our primary lead generation channel.\" — Marketing Director, Enterprise SaaS",
    stats: [
      { label: "Weekly Impressions", value: "500K+" },
      { label: "Audience Growth", value: "312%" },
      { label: "Content Pieces / Mo", value: "45+" }
    ],
    features: [
      { name: "B2B LinkedIn Positioning", desc: "Executive thought-leadership content, company page branding, and automated outbound lead nurture." },
      { name: "Instagram Content Engine", desc: "High-impact video reels, storytelling graphics, and community engagement loops." },
      { name: "Pillar Content Calendars", desc: "Planning and scheduling authoritative content structures focused on conversions, not just vanity metrics." }
    ],
    faqs: [
      { q: "How do you track social media marketing ROI?", a: "We track social media marketing ROI by monitoring direct message (DM) inquiries, website link-in-bio clicks, and landing page conversions mapped to UTM tracking parameters, ensuring every post has a commercial conversion goal." },
      { q: "What social media channels should my business focus on?", a: "For B2B SaaS and corporate entities, LinkedIn is the primary acquisition channel. For D2C, e-commerce, and lifestyle services, Instagram and YouTube are the most profitable platforms. Groowiq helps structure custom multi-channel strategies." }
    ]
  },
  "web-design-development": {
    title: "Web Design & Development Agency in India | Groowiq",
    metaDesc: "Get high-performance, fast web design and development services from Groowiq in India. Optimized for LCP, SEO, conversions, and mobile responsiveness.",
    h1: "Web Design and Development that Converts Traffic into Customers",
    definitionQuestion: "What is Conversion-First Web Design?",
    definitionAnswer: "Conversion-first web design and development is the process of building high-performance, responsive websites optimized for user experience and search engines. Groowiq designs lightning-fast landing pages and multi-step funnels using Vite and React, ensuring fast load times (LCP < 2.5s) and maximum conversion rates.",
    citableQuote: "\"Groowiq rebuilt our D2C landing pages. Not only did our load speed decrease below 2 seconds, but our conversion rate shot up from 1.8% to 3.6% immediately after launching.\" — E-commerce Brand Owner",
    stats: [
      { label: "Core Web Vitals Pass", value: "Yes" },
      { label: "LCP Speed", value: "<1.9s" },
      { label: "Conversion Lift", value: "2x" }
    ],
    features: [
      { name: "Vite + React Static Pages", desc: "Replacing heavy WordPress or client-side SPA setups with lightweight, prerendered pages that load in milliseconds." },
      { name: "CRO Funnel Architecture", desc: "Designing user journeys, value-first headlines, trust strips, and low-friction checkout flows." },
      { name: "Mobile Optimization", desc: "Ensuring 100% responsiveness and fluid transitions across mobile screens, where 80%+ of traffic lands." }
    ],
    faqs: [
      { q: "Why is website speed important for SEO?", a: "Website speed is a direct ranking factor in Google's Core Web Vitals (LCP < 2.5s). Faster websites lower bounce rates, increase session durations, and significantly increase conversion rates for paid traffic." },
      { q: "Do you build websites on WordPress or custom code?", a: "While we support platform integrations, we recommend and build using React and Vite with pre-rendering. This architecture guarantees the fastest load speeds and is highly secure against malware." }
    ]
  },
  "branding-content": {
    title: "Branding & Content Strategy Agency in India | Groowiq",
    metaDesc: "Establish your brand's authority with Groowiq's branding and content agency in India. High-impact brand kits, company profiles, and content pillars.",
    h1: "Branding and Content that Establishes Unfair Authority in Your Market",
    definitionQuestion: "What is Strategic Branding?",
    definitionAnswer: "Branding and content strategy is the creation of a cohesive brand identity and value-first copy that earns target audience trust. Groowiq builds comprehensive brand guidelines, corporate profile decks, and citable research reports that anchor your business as a trusted entity in your industry.",
    citableQuote: "\"The brand guidelines and sales decks designed by Groowiq aligned our messaging and made us look like a global enterprise. It helped us close three enterprise deals within a month of launch.\" — Startup Founder",
    stats: [
      { label: "Campaigns Delivered", value: "500+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Deliverables Completed", value: "100%" }
    ],
    features: [
      { name: "Corporate Identity Kits", desc: "Logo variations, color typography tokens, and platform playbook guidelines." },
      { name: "B2B Sales & Pitch Decks", desc: "Designing compelling corporate profiles, case study reports, and investor pitches." },
      { name: "Authoritative Content Pillars", desc: "Creating citable research studies, newsletters, and thought leadership articles." }
    ],
    faqs: [
      { q: "What are the components of a corporate brand kit?", a: "A corporate brand kit includes your logo suites, typography hierarchy, primary and secondary color palettes, icon styles, document templates, and tone of voice brand guidelines." }
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
