import React, { useEffect } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Groowiq | Growth Marketing Agency in Ahmedabad";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Meet Groowiq, an Ahmedabad-based growth marketing agency serving Gujarat and India with focused strategy, transparent execution and verified proof."
      );
    }
  }, []);

  return (
    <div className="py-20 bg-[#0F1039] text-white min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#D5D93B]/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px]" />

      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-400 mb-8">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold">About</span>
        </nav>

        {/* H1 Headline */}
        <div className="mb-16 max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D5D93B] mb-3">WHO WE ARE</p>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            Groowiq is built for growth decisions you can defend
          </h1>
          <p className="text-lg text-gray-300 leading-8 mt-6">
            Groowiq is a growth marketing agency based in Ahmedabad, Gujarat. We help startups, D2C brands, local businesses and technical B2B teams clarify the growth problem, choose the right channel mix and measure what happens next.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12 max-w-3xl">
          <div>
            <h2 className="text-2xl font-black text-white mb-3">Why Groowiq exists</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              Marketing becomes expensive when strategy, creative, media, data and web are disconnected—or when reports celebrate reach while sales sees no qualified demand. Groowiq connects the system, then assigns focused specialists to the few areas that matter now.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">How we make decisions</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              We define the commercial target and baseline, identify the constraint, agree on ownership and measurement, then test with an explicit scale/change/stop rule. Client-owned accounts and transparent reporting are defaults.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">Where our strongest evidence comes from</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              Supplied proof spans tourism lead generation, retail social reach, B2B LinkedIn visibility and a zero-baseline digital launch. Each result needs its period, measurement note and client approval.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">What we will not claim</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              We do not guarantee rankings, ROAS or viral reach. We do not hide attribution limits, sell every channel to every client, or present an unsupported percentage as proof. If the evidence is incomplete, we say so.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">Groowiq spelling and brand searches</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              The official brand name is Groowiq. Some people type Groowiqq or Groow IQ; those searches should resolve here without changing the name used across the website, profiles and structured data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">Talk to the people doing the work</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              Our specialists hold real roles with first-person expertise and review responsibilities. We provide direct access to the team managing your campaigns, without account-manager layers or stock portraits.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <Link to="/contact">
            <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-6 py-4 rounded-full text-sm">
              See Verified Work
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
