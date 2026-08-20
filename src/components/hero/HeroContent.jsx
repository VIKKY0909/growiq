import { motion } from "framer-motion";
// import HeroButtons from "./HeroButtons";

import AnimatedButton from "../CTA/AnimatedButton";
// import { useState } from "react";
// import LeadModal from "../CTA/LeadModel";

import { useTheme } from "../../context/ThemeContext";


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const lines = [
  "We Build",
  "Brands",
  "That People",
  "Can't Ignore.",
  
];

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


const HeroContent = ({setOpen}) => {
  // const [open, setOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10"
    >
      <motion.div
        variants={item}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className={`inline-flex items-center rounded-full border px-5 py-2 text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(213,217,59,0.15)] transition-all duration-300
          ${
            darkMode
              ? "border-[#D5D93B]/30 bg-[#D5D93B]/10 text-[#D5D93B]"
              : "border-[#0F1039]/15 bg-[#0F1039]/5 text-[#0F1039]"
          }
        `}
      >
        ✨ AI Powered Growth Marketing Studio
      </motion.div>

      <motion.div variants={container} className="mt-6 sm:mt-8">
        {lines.map((line, index) => (
          <motion.h1
            key={line}
            variants={item}
            className={`text-[32px] sm:text-5xl md:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[1.05]`}
          >
            {index === 1 ? (
          <motion.span
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              color: "#D5D93B",
              textShadow: "0 0 12px rgba(213, 217, 59, 0.4)",
            }}
          >
            {line}
          </motion.span>
            ) : (
              <span
                className={
                  darkMode ? "text-white" : "text-[#0F1039]"
                }
              >
                {line}
              </span>
            )}
          </motion.h1>
        ))}
      </motion.div>

      {/* Paragraph */}

      <motion.p
        variants={item}
        className={`mt-6 sm:mt-8 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 ${
          darkMode
            ? "text-gray-300"
            : "text-[#0F1039]/70"
        }`}
      >
        AI-powered branding, performance marketing, content,
        websites, and growth systems built for ambitious brands.
      </motion.p>

      {/* Button */}

      <motion.div
        variants={item}
        className="mt-8 sm:mt-10"
      >
        <AnimatedButton
          onClick={() => setOpen(true)}
        />

      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

