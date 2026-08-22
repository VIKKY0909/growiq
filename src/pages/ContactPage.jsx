import React, { useEffect } from "react";
import Container from "../components/common/Container";
import Contact from "../components/contact/Contact";
import { Link } from "react-router-dom";

const ContactPage = ({ setOpen }) => {
  useEffect(() => {
    document.title = "Contact Groowiq | Book Your Free Digital Strategy Call";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Book a free strategy consultation call with Groowiq. Speak with India's performance marketing, brand funnel, and SEO/AEO growth specialists."
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
          <span className="text-[#D5D93B] font-bold">Contact</span>
        </nav>

        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D5D93B] mb-3">Get in Touch</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-[#0F1039] dark:text-white max-w-4xl">
            Book Your Free Strategy Consultation Call
          </h1>
          <p className="mt-4 text-base text-gray-500 dark:text-gray-400 max-w-2xl leading-7">
            Have questions about AI audits, ad scaling, or branding sprints? Book a 30-minute diagnostic session with us. No obligations, no pushy sales pitches.
          </p>
        </div>

        {/* Contact Component */}
        <div className="-mt-16">
          <Contact setOpen={setOpen} />
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
