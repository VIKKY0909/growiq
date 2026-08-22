import React, { useEffect } from "react";
import Container from "../components/common/Container";
import AboutVisual from "../components/about/AboutVisual";
import AboutContent from "../components/about/AboutContent";
import { Link } from "react-router-dom";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Groowiq | Performance & Growth Marketing Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about Groowiq, a performance-first digital marketing agency in India. We design AI-optimized branding, SEO, search visibility, paid ads, and growth funnels."
      );
    }
  }, []);

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#D5D93B]/10 blur-[120px]" />
      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px]" />

      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-500 mb-8 dark:text-gray-400">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold">About Us</span>
        </nav>

        {/* H1 Headline */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Our Identity & Mission</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Outcome-Led Growth Partner Built for Ambitious Brands
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <AboutVisual />
          <AboutContent />
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
