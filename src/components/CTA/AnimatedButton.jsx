import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AnimatedButton = ({ onClick, children = "Start Your Growth" }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -4,
        boxShadow: "0 20px 45px rgba(213,217,59,.45)",
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="group relative overflow-hidden rounded-full bg-[#D5D93B] px-7 py-4 mt-4 font-bold cursor-pointer text-[#050816] shadow-lg transition-all duration-300"
    >
      {/* Animated Shine */}
      <motion.span
        animate={{
          x: ["-150%", "250%"],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 left-0 w-12 rotate-12 bg-white/40 blur-md"
      />

      <span className="relative flex items-center gap-3">
         {children}

        <motion.span
          className="flex"
          whileHover={{
            x: 5,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.span>
      </span>
    </motion.button>
  );
};

export default AnimatedButton;