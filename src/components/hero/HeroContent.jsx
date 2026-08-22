import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

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

const HeroContent = ({ setOpen }) => {
  const { darkMode } = useTheme();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center lg:text-left"
    >
      {/* Badge */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.2 }}
        className={`inline-flex items-center rounded-full border px-5 py-2 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(213,217,59,0.15)] transition-all duration-300
          ${
            darkMode
              ? "border-[#D5D93B]/30 bg-[#D5D93B]/10 text-[#D5D93B]"
              : "border-[#0F1039]/15 bg-[#0F1039]/5 text-[#0F1039]"
          }
        `}
      >
        ✨ AI Powered Growth Marketing Studio
      </motion.div>

      {/* H1 Headline */}
      <motion.div variants={container} className="mt-6 sm:mt-8">
        <motion.h1
          variants={item}
          className={`text-4xl sm:text-6xl md:text-7xl font-black leading-[1.1] ${
            darkMode ? "text-white" : "text-[#0F1039]"
          }`}
        >
          We build{" "}
          <span
            style={{
              color: "#D5D93B",
              textShadow: "0 0 12px rgba(213, 217, 59, 0.4)",
            }}
          >
            brands
          </span>{" "}
          that people can't ignore.
        </motion.h1>
      </motion.div>

      {/* Sub-headline */}
      <motion.p
        variants={item}
        className={`mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 ${
          darkMode ? "text-gray-300" : "text-[#0F1039]/70"
        }`}
      >
        India's AI-powered growth marketing agency — performance ads, creator-led content, brand identity and websites that convert, under one roof.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={item}
        className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4"
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-full bg-[#D5D93B] text-[#0F1039] px-8 py-4 text-sm sm:text-base font-extrabold hover:scale-105 hover:shadow-[0_0_30px_rgba(214,235,41,.4)] transition-all duration-300"
        >
          Get a free strategy call
        </button>

        <a
          href="https://wa.me/918511822796"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/10 px-8 py-4 text-sm sm:text-base font-semibold text-[#0F1039] dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
        >
          Chat on WhatsApp
        </a>
      </motion.div>

      {/* Trust Strip */}
      <motion.div
        variants={item}
        className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold tracking-wide text-gray-500 dark:text-gray-400"
      >
        <span>10× ROAS (representative)</span>
        <span className="text-gray-300 dark:text-white/10">•</span>
        <span>100+ qualified leads/mo</span>
        <span className="text-gray-300 dark:text-white/10">•</span>
        <span>7.8M+ views (Entartica)</span>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
