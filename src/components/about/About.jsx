import Container from "../common/Container";
import AboutVisual from "./AboutVisual";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Particles — static, no JS animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-[#D5D93B]/40 animate-pulse" />
        <div className="absolute bottom-20 left-1/2 h-2 w-2 rounded-full bg-[#D5D93B]/40 animate-pulse" />
      </div>

      {/* Left Glow — static */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#D5D93B]/10 blur-[120px]" />

      {/* Right Glow — static */}
      <div className="absolute bottom-0 -right-40 h-96 w-96 rounded-full bg-cyan-500/5 blur-[160px]" />

      {/* Grid Background */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.30]
          dark:opacity-[0.06]
          bg-[linear-gradient(to_right,#D5D93B_1px,transparent_1px),linear-gradient(to_bottom,#D5D93B_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />

      {/* Static accent blobs — removed Infinity animations */}
      <div className="absolute top-32 right-10 h-28 w-28 rounded-full bg-[#D5D93B]/10 blur-3xl -z-10" />
      <div className="absolute bottom-24 left-20 h-20 w-20 rounded-full bg-cyan-500/10 blur-3xl -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          <AboutVisual />
          <AboutContent />
        </div>
      </Container>
    </section>
  );
};

export default About;