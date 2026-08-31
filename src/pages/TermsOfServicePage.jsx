import React, { useEffect } from "react";
import Container from "../components/common/Container";

const TermsOfServicePage = () => {
  useEffect(() => {
    document.title = "Terms of Service | Groowiq";
  }, []);

  return (
    <div className="py-20 bg-[#0F1039] text-white min-h-screen">
      <Container>
        <h1 className="text-4xl font-black mb-6">Terms of Service</h1>
        <p className="text-sm text-gray-300 leading-6 max-w-2xl mb-4">
          By accessing and using groowiq.com, you agree to comply with our terms of service. All account-ownership access, deliverables, and service scope exclusions are defined in your specific signed business proposal documents.
        </p>
      </Container>
    </div>
  );
};

export default TermsOfServicePage;
