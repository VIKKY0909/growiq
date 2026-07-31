import { motion } from "framer-motion";

const blob = {
  duration: 22,
  repeat: Infinity,
  repeatType: "mirror",
  ease: "easeInOut",
};

const ServicesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Top Left Aurora */}
      <motion.div
        animate={{
          x: [-40, 40],
          y: [-20, 30],
          scale: [1, 1.15],
        }}
        transition={blob}
        className="absolute  -top-32 -left-32  md:-top-40 md:-left-40  h-[280px] w-[280px]  md:h-[500px] md:w-[500px]  rounded-full  bg-[#D5D93B]/25  dark:bg-[#D5D93B]/12  blur-[100px]  md:blur-[140px]"
      />

      {/* Bottom Right Aurora */}
      <motion.div
        animate={{
          x: [40, -30],
          y: [30, -20],
          scale: [1.05, 0.95],
        }}
        transition={{
          ...blob,
          duration: 26,
        }}
        className="
          absolute
          -bottom-36 -right-32
          md:-bottom-48 md:-right-40
          h-[320px] w-[320px]
          md:h-[600px] md:w-[600px]
          rounded-full
          bg-[#0F1039]/18
          dark:bg-[#0F1039]/22
          blur-[110px]
          md:blur-[170px]
        "
      />

      {/* Yellow Center Glow */}
      <motion.div
        animate={{
          scale: [0.95, 1.1, 0.95],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[220px] w-[220px]
          md:h-[380px] md:w-[380px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#D5D93B]/18
          dark:bg-[#D5D93B]/10
          blur-[90px]
          md:blur-[120px]
        "
      />

      {/* Navy Secondary Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/3
          left-1/3
          h-[180px] w-[180px]
          md:h-[300px] md:w-[300px]
          rounded-full
          bg-[#0F1039]/12
          dark:bg-[#0F1039]/20
          blur-[90px]
          md:blur-[130px]
        "
      />

      {/* Floating Glass Orb */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          x: [-15, 20, -15],
          rotate: [0, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="
          absolute
          top-20
          right-[10%]
          md:right-[18%]
          h-16 w-16
          md:h-24 md:w-24
          rounded-full
          bg-white/50
          dark:bg-white/5
          border
          border-white/60
          dark:border-white/10
          backdrop-blur-3xl
          shadow-[0_0_60px_rgba(213,217,59,0.22)]
        "
      />

      {/* Floating Yellow Orb */}
      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [15, -15, 15],
          rotate: [180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-16
          left-[8%]
          md:left-[15%]
          h-14 w-14
          md:h-20 md:w-20
          rounded-full
          bg-[#D5D93B]/25
          dark:bg-[#D5D93B]/18
          border
          border-[#D5D93B]/40
          backdrop-blur-3xl
          shadow-[0_0_60px_rgba(213,217,59,0.28)]
        "
      />

    </div>
  );
};

export default ServicesBackground;