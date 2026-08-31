import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import LeadModal from "./components/CTA/LeadModel";
import { useTheme } from "./context/ThemeContext";

// Page Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import IndustriesPage from "./pages/IndustriesPage";
import GuidesPage from "./pages/GuidesPage";
import WorkPage from "./pages/WorkPage";
import LocationPage from "./pages/LocationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// URL Tracking & Query Parameter Cleanup helper
function UrlCleanup() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.search) {
      // Delay cleanup briefly to allow GA4/Meta Pixel tracking libraries to capture UTMs/referrers
      const timer = setTimeout(() => {
        try {
          const cleanUrl =
            window.location.origin +
            window.location.pathname +
            window.location.hash;
          window.history.replaceState(null, "", cleanUrl);
        } catch (e) {
          console.error("Failed to clean up query parameters:", e);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return null;
}

function App() {
  const { darkMode } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-[#0F1039] text-white" : "bg-white text-[#0F1039]"
      }`}
    >
      <ScrollToTop />
      <UrlCleanup />
      
      <Navbar open={open} setOpen={setOpen} />

      <main className="pt-32">
        <Routes>
          <Route path="/" element={<HomePage open={open} setOpen={setOpen} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage setOpen={setOpen} />} />
          <Route path="/services/:serviceName" element={<ServicePage />} />
          <Route path="/industries/:industryName" element={<IndustriesPage />} />
          <Route path="/locations/:locationName" element={<LocationPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="*" element={<HomePage open={open} setOpen={setOpen} />} />
        </Routes>
      </main>

      <Footer />
      
      <LeadModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default App;