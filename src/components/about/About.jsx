import Container from "../common/Container";
import AboutVisual from "./AboutVisual";
import AboutContent from "./AboutContent";
import {motion} from "framer-motion"
const About = () => {
  return (
    <section
  id="about"
  className="relative overflow-hidden py-24 lg:py-32"
>

  {/* Background Particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-[#D5D93B]/40 animate-pulse" />

    <div className="absolute top-1/3 right-16 h-3 w-3 rounded-full bg-[#D5D93B]/30 animate-ping" />

    <div className="absolute bottom-20 left-1/2 h-2 w-2 rounded-full bg-[#D5D93B]/40 animate-pulse" />
  </div>

  {/* Left Glow */}
  <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#D5D93B]/10 blur-[120px]" />

  {/* Right Glow */}
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
  <motion.div
  animate={{
    y: [-30, 30, -30],
    x: [-15, 15, -15],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    absolute
    top-32
    right-10
    h-28
    w-28
    rounded-full
    bg-[#D5D93B]/10
    blur-3xl
    -z-10
  "
/>

<motion.div
  animate={{
    y: [25, -25, 25],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
  }}
  className="
    absolute
    bottom-24
    left-20
    h-20
    w-20
    rounded-full
    bg-cyan-500/10
    blur-3xl
    -z-10
  "
/>

  

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