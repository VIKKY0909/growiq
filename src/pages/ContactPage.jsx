import React, { useEffect } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const ContactPage = ({ setOpen }) => {
  useEffect(() => {
    document.title = "Contact Groowiq | Discuss Your Growth Bottleneck";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Tell Groowiq what is not moving, what you have tried and how success will be measured. Get a focused next-step recommendation—not a generic package pitch."
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
          <span className="text-[#D5D93B] font-bold">Contact</span>
        </nav>

        {/* H1 Headline */}
        <div className="mb-16 max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D5D93B] mb-3">GET IN TOUCH</p>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            Tell us what is not moving
          </h1>
          <p className="text-lg text-gray-300 leading-8 mt-6">
            Groowiq is a digital marketing agency based in Ahmedabad and serving Gujarat and clients across India. Share the business outcome, current numbers and what you have already tried. We will use the first conversation to identify the next decision—not to force a standard package.
          </p>
        </div>

        {/* Content sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">What to include</h2>
              <p className="text-sm text-gray-400 leading-6">
                Business and website; target market; current channel mix; the outcome you want; current baseline; definition of a qualified lead or sale; expected timeline; budget range; and the people involved in approval.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">What happens next</h2>
              <p className="text-sm text-gray-400 leading-6">
                1) We review the context. 2) If there is a plausible fit, we schedule a diagnostic call. 3) You receive a recommended next step, which may be a focused scope, a diagnostic, or a clear reason to wait. 4) No campaign launches until access, ownership, measurement and commercial terms are agreed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-2">Contact details</h2>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><strong>Email:</strong> sales.groowiq@gmail.com</li>
                <li><strong>Phone:</strong> +91 85118 22796</li>
                <li><strong>Location:</strong> Ahmedabad, Gujarat</li>
                <li><strong>Meetings:</strong> By appointment only</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-[32px] flex flex-col justify-between items-center text-center">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">Ready to resolve?</h3>
              <p className="text-sm text-gray-400 leading-6 mb-6">
                Click below to open the custom growth diagnostic form. Fill out the details, and we will analyze your search and ad bottlenecks.
              </p>
              <p className="text-xs text-gray-500 mb-8 italic">
                "We use these details to respond to your enquiry. Read our <Link to="/privacy-policy" className="underline hover:text-[#D5D93B]">Privacy Policy</Link>."
              </p>
            </div>
            <Button
              onClick={() => setOpen(true)}
              className="bg-[#D5D93B] text-[#0F1039] font-black px-8 py-4 rounded-full text-base w-full justify-center"
            >
              Send the growth brief
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
