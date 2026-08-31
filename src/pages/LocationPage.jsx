import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const locationData = {
  gujarat: {
    title: "Digital Marketing Agency in Gujarat | Groowiq",
    metaDesc: "Groowiq is an Ahmedabad-based digital marketing agency for Gujarat businesses—paid media, SEO, social, branding and web with accountable reporting.",
    h1: "Digital marketing agency in Gujarat built around measurable growth",
    intro: "Groowiq is an Ahmedabad-based digital marketing agency serving businesses across Gujarat. We turn marketing activity into evidence teams can use: qualified enquiries, pipeline, sales, search visibility and stronger brand demand. If you searched for a marketing agency in Gujarat, this page explains the same local service in the language buyers use most.",
    ctaText: "Discuss your Gujarat growth plan",
    modelTitle: "A Gujarat marketing agency that starts with the business model",
    modelDesc: "A D2C brand, tourism operator, manufacturer and local premium service should not receive the same channel plan. We examine sales cycle, margins, geography, buying triggers, existing demand and measurement before recommending a channel. That makes the work narrower at the start and easier to judge.",
    servicesTitle: "Services for Gujarat businesses",
    services: [
      {
        name: "Paid media and lead generation",
        desc: "Meta and Google campaigns built with explicit audience, offer, creative and attribution assumptions. We separate raw leads from qualified demand and review what happens after the enquiry."
      },
      {
        name: "SEO and local search",
        desc: "Technical SEO, service and location content, Google Business Profile support, citation consistency and review workflows—without cloned city pages or guaranteed positions."
      },
      {
        name: "Social and founder visibility",
        desc: "LinkedIn and Instagram systems suited to the buyer: technical education for B2B, discovery-led creative for consumer brands, and credible executive narratives for complex sales."
      },
      {
        name: "Brand and website systems",
        desc: "Positioning, messaging, identity and conversion-led website work that gives traffic a clear next step and gives the sales team a consistent story."
      }
    ],
    workTitle: "Relevant work from Gujarat-focused growth problems",
    workDesc: "We base our execution on verified proof. No standalone percentages without a clear baseline, time period, and platform parameters.",
    cases: [
      { title: "Entartica", desc: "1,528 WhatsApp leads in 21 days at ₹36 blended cost per lead from ₹64,000 spend.", path: "/work/entartica-growth" },
      { title: "Spree Walk", desc: "935,937 views in 60 days with 97.6% coming from non-followers.", path: "/work/spree-walk-social-growth" },
      { title: "ECHT Marine", desc: "+515% LinkedIn impressions over the agreed comparison period.", path: "/work/echt-marine-linkedin" },
      { title: "UVR", desc: "+14,338% impressions, +1,012% unique visitors, and +703% page views from zero baseline.", path: "/work/uvr-digital-launch" }
    ],
    engagementTitle: "How the engagement works",
    engagementDesc: "1) A diagnostic call defines the target, current funnel and data. 2) Groowiq provides a focused scope, responsibilities, assumptions and measurement plan. 3) The team launches the first test and reviews signal quality. 4) Work scales, changes or stops according to agreed evidence. Core accounts remain client-owned.",
    choosingTitle: "Choosing a digital marketing agency in Gujarat",
    choosingDesc: "Ask every shortlisted agency to show relevant proof, explain what it would not recommend, name the source of truth for reporting, state who owns the accounts, and define what happens if the first assumption is wrong. Location matters for context and collaboration; proof and operating discipline matter more than an unsupported “best agency” label.",
    faqs: [
      {
        q: "Is Groowiq based in Gujarat?",
        a: "Yes. Groowiq is based in Ahmedabad and serves businesses across Gujarat and India. We provide physical consultations by appointment and configure service-area parameters accurately."
      },
      {
        q: "Can Groowiq work with teams outside Ahmedabad?",
        a: "Yes. Strategy, production, reporting and review can be handled remotely, with in-person work agreed when the project and location require it."
      },
      {
        q: "What should we prepare for the first call?",
        a: "Bring the business target, current channel data, sales-cycle context, offer, budget constraints and the definition of a qualified enquiry or sale."
      }
    ],
    finalCtaTitle: "Need a digital marketing agency in Gujarat that will show its work?",
    finalCtaDesc: "Share the bottleneck, the numbers you trust and what has already been tried. Groowiq will recommend the next test and explain why."
  },
  ahmedabad: {
    title: "Digital Marketing Agency in Ahmedabad | Groowiq",
    metaDesc: "An Ahmedabad digital marketing agency for paid media, SEO, social, branding and conversion websites—scoped around your growth bottleneck.",
    h1: "Ahmedabad digital marketing agency for measurable growth",
    intro: "Groowiq is an Ahmedabad-based digital marketing agency for businesses that want a clearer link between strategy, execution and business outcomes. We diagnose the weak point first, then build a focused plan across paid media, SEO, social, brand or web.",
    ctaText: "Book an Ahmedabad growth diagnostic",
    modelTitle: "Local context without local-SEO theatre",
    modelDesc: "Being in Ahmedabad can make workshops, production and market context easier. It does not replace evidence. Groowiq’s local page therefore shows the real service area, meeting options, team, relevant work and one consistent NAP—not a list of neighbourhood keywords or copied city paragraphs.",
    servicesTitle: "What Ahmedabad businesses can hire Groowiq for",
    services: [
      {
        name: "Performance campaigns",
        desc: "D2C paid advertising across Meta and Google, focusing on contribution margin and qualified client inquiries."
      },
      {
        name: "SEO and local search",
        desc: "Rankings driven by solid technical optimization, clean schema, and answer engine (AEO) visibility models."
      },
      {
        name: "LinkedIn and Instagram growth",
        desc: "Reputable thought leadership scaling and short-form video creative structures targeting verified local audiences."
      },
      {
        name: "Web design and development",
        desc: "Conversion-optimized pages developed on lightweight React architectures, ensuring low friction and fast load times."
      }
    ],
    workTitle: "A transparent first 30 days",
    workDesc: "Week one aligns on outcome, baseline, access and tracking. Week two turns the biggest assumption into a plan and creative/technical backlog. Weeks three and four launch, validate data quality and decide what to scale, change or stop. The exact sequence changes by engagement; the reporting standard does not.",
    cases: [
      { title: "Entartica", desc: "1,528 WhatsApp leads in 21 days at ₹36 blended cost per lead from ₹64,000 spend.", path: "/work/entartica-growth" },
      { title: "Spree Walk", desc: "935,937 views in 60 days with 97.6% coming from non-followers.", path: "/work/spree-walk-social-growth" },
      { title: "ECHT Marine", desc: "+515% LinkedIn impressions over the agreed comparison period.", path: "/work/echt-marine-linkedin" },
      { title: "UVR", desc: "+14,338% impressions, +1,012% unique visitors, and +703% page views from zero baseline.", path: "/work/uvr-digital-launch" }
    ],
    engagementTitle: "Visit, remote or hybrid",
    engagementDesc: "Meetings are available by appointment at our office location or virtually. We configure Groowiq as a service-area business for local searches, ensuring absolute NAP consistency across the web and major business directories.",
    choosingTitle: "Questions Ahmedabad buyers ask",
    choosingDesc: "Ask every shortlisted agency to show relevant proof, explain what it would not recommend, name the source of truth for reporting, state who owns the accounts, and define what happens if the first assumption is wrong. Location matters for context; proof matters more than a 'best agency' tag.",
    faqs: [
      {
        q: "How do I choose the best digital marketing agency in Ahmedabad?",
        a: "Start with the primary need. Compare relevant case evidence, measurement, account ownership, the proposed first test, contract terms and who will do the work. “Best” is not a verifiable category without a defined problem."
      },
      {
        q: "Does Groowiq offer in-person meetings?",
        a: "Meetings are available by appointment. We coordinate with local clients at pre-arranged locations or via remote sessions depending on context."
      },
      {
        q: "Does Groowiq guarantee leads or rankings?",
        a: "No. Groowiq defines the assumption, investment, measurement and decision rules, then reports what the evidence supports. We avoid empty guarantees."
      }
    ],
    finalCtaTitle: "Bring the numbers you trust.",
    finalCtaDesc: "Tell us what is not moving, what has been tried and what a qualified outcome means. We will map the most useful next step."
  }
};

const LocationPage = () => {
  const { locationName } = useParams();
  const data = locationData[locationName] || locationData["gujarat"];

  // Update Page Title and Meta Description for browser
  useEffect(() => {
    document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", data.metaDesc);
    }
  }, [data]);

  // Construct JSON-LD LocalBusiness Schema for local optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Groowiq",
    "image": "https://www.groowiq.com/logo/logo.png",
    "telephone": "+918511822796",
    "email": "sales.groowiq@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "url": `https://www.groowiq.com/locations/${locationName || "gujarat"}`
  };

  return (
    <div className="py-20 bg-[#0F1039] text-white min-h-screen">
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-400 mb-8">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-500">Locations</span>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold capitalize">{locationName || "Gujarat"}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl sm:text-6xl font-black leading-tight text-white max-w-4xl mb-6">
          {data.h1}
        </h1>

        <p className="text-lg text-gray-300 leading-8 max-w-3xl mb-8">
          {data.intro}
        </p>

        <Link to="/contact">
          <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-6 py-4 rounded-full mb-16">
            {data.ctaText}
          </Button>
        </Link>

        {/* Model Section */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">{data.modelTitle}</h2>
          <p className="text-sm sm:text-base text-gray-300 leading-7 max-w-3xl">
            {data.modelDesc}
          </p>
        </div>

        {/* Services / Capabilities Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-10">{data.servicesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.services.map((srv, idx) => (
              <div key={idx} className="border-l-4 border-[#D5D93B] pl-6 py-2">
                <h3 className="text-xl font-bold text-white mb-2">{srv.name}</h3>
                <p className="text-sm text-gray-400 leading-6">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Work */}
        <div className="mb-20">
          <h2 className="text-3xl font-black text-white mb-4">{data.workTitle}</h2>
          <p className="text-sm text-gray-400 max-w-2xl mb-10">{data.workDesc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.cases.map((cs, idx) => (
              <div key={idx} className="bg-white/2 border border-white/5 p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{cs.title}</h3>
                  <p className="text-xs text-gray-400 leading-5 mb-4">{cs.desc}</p>
                </div>
                <Link to={cs.path} className="text-[#D5D93B] text-xs font-bold hover:underline">
                  Read Case Study →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement & Choosing Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-black text-white mb-4">{data.engagementTitle}</h2>
            <p className="text-sm text-gray-300 leading-6">{data.engagementDesc}</p>
          </div>
          <div>
            <h2 className="text-2xl font-black text-white mb-4">{data.choosingTitle}</h2>
            <p className="text-sm text-gray-300 leading-6">{data.choosingDesc}</p>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20 border-t border-white/10 pt-16">
          <h2 className="text-3xl font-black text-white mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white/2 border border-white/5 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 leading-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-white/10 pt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">{data.finalCtaTitle}</h2>
          <p className="text-sm text-gray-300 leading-6 mb-8">
            {data.finalCtaDesc}
          </p>
          <Link to="/contact">
            <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-8 py-4 rounded-full text-base">
              Discuss Your Growth Bottleneck
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default LocationPage;
