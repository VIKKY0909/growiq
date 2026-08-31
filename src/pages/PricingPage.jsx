import React, { useEffect } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const PricingPage = () => {
  useEffect(() => {
    document.title = "Digital Marketing Pricing in India | How Groowiq Scopes";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "See how Groowiq prices growth marketing work, what changes scope, what you own, and what to prepare for an accurate proposal."
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
          <span className="text-[#D5D93B] font-bold">Pricing</span>
        </nav>

        {/* H1 Headline */}
        <div className="mb-16 max-w-4xl">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D5D93B] mb-3">SCOPING & INVESTMENT</p>
          <h1 className="text-4xl sm:text-6xl font-black leading-tight text-white">
            Marketing pricing should follow the problem—not a generic package
          </h1>
          <p className="text-lg text-gray-300 leading-8 mt-6">
            Groowiq prices work after understanding the target, baseline, channel complexity, creative volume, data quality and internal capacity. Two brands asking for “SEO” or “paid ads” can require very different work. A useful proposal should explain the difference.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-12 max-w-3xl mb-16">
          <div>
            <h2 className="text-2xl font-black text-white mb-3">What changes the scope</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              Scope is shaped by the number of channels and markets, campaign or content volume, tracking and CRM readiness, website changes, creative production, stakeholder approvals, reporting cadence, compliance needs and the speed of the test plan.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">What every Groowiq proposal should include</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              A stated objective, baseline and assumptions; deliverables and exclusions; responsibilities; channel and account ownership; reporting source; meeting cadence; commercial terms; the first test; and the scale/change/stop decision rule.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">What you own</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              The client should retain ownership of core ad, analytics, website, CRM and platform accounts. Access can be granted and revoked. Source-file and creative handover terms are stated in the proposal so there is no surprise at the end of an engagement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-white mb-3">How to get an accurate quote</h2>
            <p className="text-sm sm:text-base text-gray-300 leading-7">
              Share the business target, average order or contract value, margins where relevant, sales cycle, current channel data, technology stack, creative constraints, geography, budget range and definition of a qualified outcome. If the data is incomplete, the first paid scope may be a diagnostic or measurement setup rather than a full campaign.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-white/10 pt-16 mb-16">
          <h2 className="text-3xl font-black text-white mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Does Groowiq publish fixed packages?</h3>
              <p className="text-sm text-gray-400 leading-6">
                Only if the inclusions, exclusions and fit criteria are commercially approved and kept consistent across the website. Until then, use a custom-scope model and remove conflicting public pricing tables.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Is media spend included in the fee?</h3>
              <p className="text-sm text-gray-400 leading-6">
                Media spend is paid directly by the client and is separate from Groowiq’s professional fee unless the proposal says otherwise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Do you charge a percentage of ad spend?</h3>
              <p className="text-sm text-gray-400 leading-6">
                We publish the actual model during scoping. If the fee changes with spend, we explain the operational reason, incentive alignment and any minimum or cap.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Can you guarantee a result?</h3>
              <p className="text-sm text-gray-400 leading-6">
                No. A proposal can guarantee agreed work, reporting and communication standards—not a search ranking, lead volume, ROAS or revenue outcome outside the agency’s full control.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="border-t border-white/10 pt-16 text-center max-w-3xl mx-auto">
          <Link to="/contact">
            <Button className="bg-[#D5D93B] text-[#0F1039] font-black px-8 py-4 rounded-full text-base">
              Request a scoped proposal
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default PricingPage;
