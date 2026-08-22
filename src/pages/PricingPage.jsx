import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

const packages = [
  {
    code: "01",
    name: "Social Media",
    tagline: "Consistent content. Stronger presence.",
    ctaText: "Custom quote · Get pricing on WhatsApp",
    features: [
      "Content Posting",
      "Post & Reel Scheduling",
      "Captions & Hashtags",
      "Content Calendar Management",
      "Regular Instagram Posting",
      "Basic Page Management",
      "Monthly Posting Report"
    ],
    bestFor: "Businesses that already have content but need consistent social media management."
  },
  {
    code: "02",
    name: "Brand Growth",
    tagline: "We don't just post. We build your brand.",
    ctaText: "Custom quote · Get pricing on WhatsApp",
    isPopular: true,
    features: [
      "8 Premium Static / Carousel Creatives",
      "4 Professionally Edited Reels",
      "Instagram Management",
      "Facebook Management",
      "Content Strategy",
      "Monthly Content Calendar",
      "Captions & Copywriting",
      "Hashtag & Keyword Research",
      "Posting & Scheduling",
      "Basic Community Management",
      "Competitor Research",
      "Monthly Performance Report",
      "1 Monthly Strategy Call"
    ],
    bestFor: "Brands that want professional content, consistency and stronger digital positioning."
  },
  {
    code: "03",
    name: "Growth 360",
    tagline: "From content to customers.",
    ctaText: "Custom quote · Get pricing on WhatsApp",
    features: [
      "12 Premium Static / Carousel Creatives",
      "8 Professionally Edited Reels",
      "Instagram + Facebook Management",
      "LinkedIn Management",
      "Complete Content Strategy",
      "Meta Ads Management",
      "Google Ads Management",
      "Lead Generation Strategy",
      "Campaign Planning",
      "Funnel Strategy",
      "Landing Page & Conversion Recommendations",
      "Basic SEO",
      "Competitor Analysis",
      "Monthly Campaign Optimization",
      "Detailed Performance Reporting",
      "Monthly Growth Strategy Call",
      "Priority Support"
    ],
    bestFor: "Businesses that want marketing to actively generate leads and growth — not just engagement. (Ad spend is separate.)"
  },
  {
    code: "04",
    name: "Marketing Department",
    tagline: "Your outsourced marketing team.",
    ctaText: "Custom quote · Get pricing on WhatsApp",
    features: [
      "16 Premium Static / Carousel Creatives",
      "12 Professionally Edited Reels",
      "Instagram / Facebook / LinkedIn Management",
      "Complete Content & Brand Strategy",
      "Meta / Google / LinkedIn Ads Management",
      "SEO Strategy & Execution",
      "Lead Generation Campaigns",
      "Full-Funnel Marketing Strategy",
      "Landing Page & Conversion Strategy",
      "Email Marketing",
      "Campaign Ideation & Execution",
      "Competitor & Market Research",
      "Conversion Optimization",
      "Monthly Growth Plan",
      "Advanced Analytics & Reporting",
      "2 Growth Strategy Calls / Month",
      "Priority Support"
    ],
    bestFor: "Businesses that need an experienced marketing team without hiring separate experts internally. (Ad spend & third-party costs are separate.)"
  }
];

const pricingFaqs = [
  {
    q: "How is GROOWiq's pricing structured?",
    a: "Plans are tailored to scope across four packages — from consistent social media to a full outsourced marketing department. Share your goals for a custom quote."
  },
  {
    q: "Is ad spend included?",
    a: "No — advertising/media spend and third-party costs are separate unless stated."
  },
  {
    q: "Do you work with Ahmedabad / Gujarat businesses?",
    a: "Yes — GROOWiq serves Ahmedabad, Gujarat and clients across India."
  }
];

const PricingPage = () => {
  useEffect(() => {
    document.title = "Digital Marketing Packages & Pricing | GROOWiq";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "View digital marketing packages at GROOWiq. Options range from social media content plans to complete growth retainers and dedicated marketing departments."
      );
    }
  }, []);

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pricingFaqs.map((faq) => ({
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
      <script type="application/ld+json">
        {JSON.stringify(faqPageSchema)}
      </script>

      <Container>
        {/* Breadcrumbs */}
        <nav className="text-sm font-semibold tracking-wide text-gray-500 mb-8 dark:text-gray-400">
          <Link to="/" className="hover:text-[#D5D93B] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#D5D93B] font-bold">Pricing</span>
        </nav>

        {/* Header */}
        <div className="mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Transparent Structure</p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Flexible Growth Packages Tailored to Scope
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            Select the growth package that matches your operational goals. Request custom scope adjustments or download our current rate card directly via WhatsApp.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.code}
              className={`bg-white dark:bg-[#11133f] border rounded-[32px] p-8 flex flex-col justify-between shadow-sm transition-all duration-300 relative ${
                pkg.isPopular
                  ? "border-[#D5D93B] shadow-[0_10px_30px_rgba(213,217,59,0.05)]"
                  : "border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D5D93B] text-[#0F1039] text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider">
                  Most Popular
                </span>
              )}
              <div>
                <span className="text-xs font-black text-[#D5D93B] bg-[#D5D93B]/10 px-3 py-1 rounded-full">
                  Package {pkg.code}
                </span>
                <h3 className="text-2xl font-bold text-[#0F1039] dark:text-white mt-4">{pkg.name}</h3>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 mt-1">{pkg.tagline}</p>
                
                <div className="mt-5 bg-gray-50 dark:bg-white/5 p-4 rounded-2xl border border-gray-100 dark:border-white/5">
                  <p className="text-xs font-bold text-[#D5D93B]">{pkg.ctaText}</p>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-5 leading-5 italic">
                  {pkg.bestFor}
                </p>

                <div className="border-t border-gray-100 dark:border-white/10 my-6" />

                <ul className="space-y-3">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-tight">
                      <span className="text-[#D5D93B] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href="https://wa.me/918511822796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full justify-center text-xs py-3 bg-[#D5D93B] text-[#0F1039] font-bold">
                    Get Custom Quote
                  </Button>
                </a>
                <Link to="/contact" className="block w-full">
                  <Button className="w-full justify-center text-xs py-3 border border-gray-200 dark:border-white/10 bg-transparent text-[#0F1039] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 font-semibold">
                    Book Free Strategy Call
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-xs text-gray-400 dark:text-gray-500 leading-5 text-center max-w-4xl mx-auto">
          * Advertising/media spend, influencer fees, production shoots, website hosting, third-party software and other external costs are not included unless specifically mentioned.
        </div>

        {/* FAQ Section */}
        <div className="my-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F1039] dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {pricingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 sm:p-8 rounded-[24px]"
              >
                <h3 className="text-lg font-bold text-[#0F1039] dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
