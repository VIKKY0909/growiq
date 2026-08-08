import { motion } from "framer-motion";

const VsDivider = () => {
  return (
    <div className="relative hidden lg:flex items-center justify-center">

      <div
        className="
          absolute
          h-[420px]
          w-px
          bg-gradient-to-b
          from-transparent
          via-[#D5D93B]/30
          to-transparent
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          boxShadow: [
            "0 0 0px rgba(213,217,59,0)",
            "0 0 30px rgba(213,217,59,.45)",
            "0 0 0px rgba(213,217,59,0)"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5
        }}
        className="
          relative
          z-10
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#D5D93B]/40
          bg-[#0F1039]
          text-[#D5D93B]
          font-bold
        "
      >
        VS
      </motion.div>

    </div>
  );
};

export default VsDivider;