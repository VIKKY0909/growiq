import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import WhyUs from "../components/whyus/WhyUs";
import Process from "../components/process/Process";
import Testimonials from "../components/testimonials/Testimonials";
import ClientLogos from "../components/clientsLogo/ClientLogos";
import Contact from "../components/contact/Contact";

const HomePage = ({ open, setOpen }) => {
  return (
    <>
      <Hero open={open} setOpen={setOpen} />
      <About />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
      <ClientLogos />
      <Contact setOpen={setOpen} />
    </>
  );
};

export default HomePage;
