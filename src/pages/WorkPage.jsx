import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/common/Container";
import Button from "../components/common/Button";

const caseStudies = {
  "entartica-growth": {
    title: "Entartica: 1,528 WhatsApp Leads in 21 Days | Groowiq",
    metaDesc: "In a 21-day Meta campaign, Entartica's record shows 1,528 WhatsApp leads from ₹64,000 spend at a ₹36 blended cost per lead.",
    h1: "Entartica: 1,528 WhatsApp leads in 21 days",
    startingPoint: "Campaign targets, seasonality, offer, lead definition, and prior customer acquisition metrics established the baseline before launch. We avoided treating every WhatsApp conversation as qualified.",
    whatChanged: "Documented the target audience, custom creative directions, optimized WhatsApp conversion funnel, and real-time bid adjustments. Rejection of unviable location parameters helped focus media spend.",
    result: "1,528 WhatsApp leads generated over 21 days from a total spend of ₹64,000, resulting in a ₹36 blended cost per lead. An additional client-reported 7.8M+ page views occurred over a 60-day period.",
    interpretation: "Platform counts and raw lead metrics do not automatically equate to unique users or final bookings. Safe attribution modeling is used to reconcile raw clicks with downstream bookings.",
    evidencePanel: "Source: Meta Ads Manager / Spend: ₹64,000 / Period: Aug 1-21, 2026 / Client Approved."
  },
  "spree-walk-social-growth": {
    title: "Spree Walk: Reaching Beyond Follower Base | Groowiq",
    metaDesc: "Spree Walk case study: 935,937 views in 60 days with 97.6% coming from non-followers. Read the content distribution strategy.",
    h1: "Spree Walk: reaching beyond the follower base",
    startingPoint: "Mapped initial organic follower baseline, historic 60-day view counts, local audience interest metrics, and specific content capability targets for Saraighat Lake, Guwahati.",
    whatChanged: "Developed local creator content pillars, video hook formulas, optimal publishing schedule, and collaborative Reels structures. Monitored shares and profile actions to select high-performing follow-ups.",
    result: "935,937 views achieved in 60 days with 97.6% of views originating from non-followers. Campaign recorded 86,163 organic interactions and +323 net-new followers.",
    interpretation: "Organic video impressions do not equal sales or unique reach. We emphasize downstream profile engagement, message actions, and local footfall surveys to measure actual value.",
    evidencePanel: "Source: Instagram Insights / Period: Jun-Jul 2026 / Client Approved."
  },
  "echt-marine-linkedin": {
    title: "ECHT Marine: Building B2B LinkedIn Visibility | Groowiq",
    metaDesc: "ECHT Marine case study: +515% increase in B2B LinkedIn impressions over 70 days. Read how we scaled B2B authority.",
    h1: "ECHT Marine: building technical B2B visibility on LinkedIn",
    startingPoint: "Established baseline impressions, B2B posting cadence, corporate positioning objectives, and target decision-maker profiles for ECHT Marine before scaling authority.",
    whatChanged: "Transformed complex industrial manufacturing processes into engaging narrative commentary. Mapped employee participation protocols and executive authority content blocks.",
    result: "+515% increase in B2B LinkedIn impressions over the 70-day campaign period. Generated 631 positive reactions, 14 comments, and 4 reposts.",
    interpretation: "LinkedIn impressions indicate visibility and distribution rather than qualified pipeline. We correlate visibility gains with direct sales team feedback and inbound dealer inquiries.",
    evidencePanel: "Source: LinkedIn Page Analytics / Period: Jun-Aug 2026 / Client Approved."
  },
  "uvr-digital-launch": {
    title: "UVR: Launching Digital Visibility from Zero Baseline | Groowiq",
    metaDesc: "UVR case study: +14,338% impressions and +1,012% unique visitors in month one from a standing zero baseline.",
    h1: "UVR: launching digital visibility from a zero baseline",
    startingPoint: "Initiated marketing setup from a complete zero baseline (no existing website, no active tracking, no search presence, and zero social profiles).",
    whatChanged: "Shipped a custom search-ready React website, established local entity listings, built core landing paths, and set up Gen-AI optimization structures.",
    result: "+14,338% impressions, +1,012% unique visitors, and +703% page views achieved in month one of the digital launch.",
    interpretation: "Percentage changes from zero baseline can look inflated. We report absolute visitor counts and focus on generating qualified commercial enquiries over vanity traffic metrics.",
    evidencePanel: "Source: Vercel Analytics & Google Search Console / Period: Month 1 / Client Approved."
  }
};

const WorkPage = () => {
  const { slug } = useParams();

  // If a specific case study route /work/:slug is requested
  if (slug && caseStudies[slug]) {
    const cs = caseStudies[slug];

    useEffect(() => {
      document.title = cs.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", cs.metaDesc);
      }
    }, [cs]);

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": cs.h1,
      "description": cs.metaDesc,
      "provider": {
        "@type": "Organization",
        "name": "Groowiq"
      }
    };

    return (
      <div className="py-20 bg-[#0D0D2B] text-white min-h-screen">
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>

        <Container>
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold tracking-wide text-gray-400 mb-8">
            <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/work" className="hover:text-[#D5D93B] transition-colors">Work</Link>
            <span className="mx-2">/</span>
            <span className="text-[#D5D93B] font-bold capitalize">{slug.replace("-", " ")}</span>
          </nav>

          {/* H1 */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight text-white max-w-4xl mb-10">
            {cs.h1}
          </h1>

          <div className="space-y-12 max-w-3xl">
            {/* Starting Point */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">01 / The Starting Point</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-7">{cs.startingPoint}</p>
            </div>

            {/* What Groowiq Changed */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">02 / What Groowiq Changed</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-7">{cs.whatChanged}</p>
            </div>

            {/* Documented Result */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <h2 className="text-xs font-black uppercase tracking-wider text-[#D5D93B] mb-3">03 / The Documented Result</h2>
              <p className="text-sm sm:text-base text-gray-200 leading-7 font-semibold">{cs.result}</p>
            </div>

            {/* How to Interpret */}
            <div>
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-3">04 / How to Interpret the Result</h2>
              <p className="text-sm sm:text-base text-gray-300 leading-7">{cs.interpretation}</p>
            </div>

            {/* Evidence Panel */}
            <div className="border-t border-white/10 pt-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-gray-500 mb-2">Evidence & Source Verification</h2>
              <p className="text-xs text-gray-400 italic">{cs.evidencePanel}</p>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10 text-center sm:text-left max-w-3xl">
            <h3 className="text-xl font-bold text-white mb-2">Have a similar constraint?</h3>
            <p className="text-sm text-gray-400 mb-6">
              Share the baseline, target and source of truth. Groowiq will explain whether the method is relevant to your context before proposing work.
            </p>
            <Link to="/contact">
              <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-6 py-3 rounded-full">
                Discuss Your Bottleneck
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  // Work Index page (/work)
  useEffect(() => {
    document.title = "Groowiq Marketing Case Studies | Verified Growth Work";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "See Groowiq case studies with stated baselines, time periods, methods and measurement notes across paid media, social, LinkedIn and brand launches."
      );
    }
  }, []);

  return (
    <div className="bg-[#0D0D2B] text-white min-h-screen py-20">
      <Container>
        {/* Editorial Heading */}
        <div className="max-w-4xl mb-20">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#D5D93B] mb-4">OUR WORK</p>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight mb-6">
            Growth work with the context left in
          </h1>
          <p className="text-sm sm:text-base text-gray-400 font-semibold tracking-wide max-w-xl">
            Groowiq case studies show the starting point, constraint, work, time period, measurement method and outcome. We do not present a percentage without its baseline or a platform metric as revenue.
          </p>
        </div>

        {/* Featured Work Grid */}
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-10">FEATURED WORK</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case 1: Entartica */}
            <div className="bg-white/2 border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Performance Marketing Case Study</p>
                <h3 className="text-2xl font-black text-white mb-3">Entartica — 1,528 WhatsApp leads in 21 days</h3>
                <p className="text-sm text-gray-400 leading-6 mb-6">
                  Paid-media demand generation for an attractions/tourism business. ₹64,000 Meta spend; ₹36 blended cost per lead. Read the attribution and lead-quality notes before comparing the result.
                </p>
              </div>
              <Link to="/work/entartica-growth">
                <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-5 py-2.5 rounded-full text-xs">
                  Read Case Study
                </Button>
              </Link>
            </div>

            {/* Case 2: Spree Walk */}
            <div className="bg-white/2 border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Social Media Case Study</p>
                <h3 className="text-2xl font-black text-white mb-3">Spree Walk — 935,937 views in 60 days</h3>
                <p className="text-sm text-gray-400 leading-6 mb-6">
                  A social creative and distribution system that reached beyond the existing audience; 97.6% of views came from non-followers.
                </p>
              </div>
              <Link to="/work/spree-walk-social-growth">
                <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-5 py-2.5 rounded-full text-xs">
                  Read Case Study
                </Button>
              </Link>
            </div>

            {/* Case 3: ECHT Marine */}
            <div className="bg-white/2 border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">B2B LinkedIn Case Study</p>
                <h3 className="text-2xl font-black text-white mb-3">ECHT Marine — +515% LinkedIn impressions</h3>
                <p className="text-sm text-gray-400 leading-6 mb-6">
                  A technical B2B visibility program with the comparison period and content system disclosed in the full study.
                </p>
              </div>
              <Link to="/work/echt-marine-linkedin">
                <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-5 py-2.5 rounded-full text-xs">
                  Read Case Study
                </Button>
              </Link>
            </div>

            {/* Case 4: UVR */}
            <div className="bg-white/2 border border-white/5 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Brand Launch Case Study</p>
                <h3 className="text-2xl font-black text-white mb-3">UVR — a digital launch from a zero baseline</h3>
                <p className="text-sm text-gray-400 leading-6 mb-6">
                  Month-one visibility growth with the zero baseline stated prominently: +14,338% impressions, +1,012% unique visitors and +703% page views.
                </p>
              </div>
              <Link to="/work/uvr-digital-launch">
                <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-5 py-2.5 rounded-full text-xs">
                  Read Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* How to Read Results */}
        <div className="border-t border-white/10 pt-16 max-w-3xl">
          <h2 className="text-2xl font-black text-white mb-4">How to read these results</h2>
          <p className="text-sm text-gray-300 leading-7 mb-8">
            Every business, offer, budget, market and baseline is different. A case study shows that a method produced a documented result in one context. It is evidence of capability—not a promise that another engagement will produce the same number.
          </p>
          <Link to="/contact">
            <span className="text-[#D5D93B] font-bold hover:underline cursor-pointer">
              Discuss a similar growth problem →
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default WorkPage;
