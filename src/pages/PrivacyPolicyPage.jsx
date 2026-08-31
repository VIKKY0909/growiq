import React, { useEffect } from "react";
import Container from "../components/common/Container";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Groowiq";
  }, []);

  return (
    <div className="py-20 bg-[#0F1039] text-white min-h-screen">
      <Container>
        <h1 className="text-4xl font-black mb-6">Privacy Policy</h1>
        <p className="text-sm text-gray-300 leading-6 max-w-2xl mb-4">
          At Groowiq, we respect your privacy. We use the details submitted in the contact form solely to respond to your digital growth briefs and consult on marketing bottlenecks. We do not sell or share your data with unauthorized third parties.
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPolicyPage;
