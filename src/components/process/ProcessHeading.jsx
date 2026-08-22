import { motion } from "framer-motion";

const ProcessHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        mx-auto
        mb-20
        max-w-4xl
        text-center
        lg:mb-24
      "
    >
      {/* ================= BADGE ================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="inline-flex"
      >
        <span
          className="
            relative
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#D5D93B]/30
            bg-[#D5D93B]/10
            px-5
            py-2.5
            text-xs
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#D5D93B]
            shadow-[0_0_25px_rgba(213,217,59,0.08)]
          "
        >
          {/* Small indicator */}
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#D5D93B]
              shadow-[0_0_10px_rgba(213,217,59,0.8)]
            "
          />

          Our Process
        </span>
      </motion.div>

      {/* ================= HEADING ================= */}

      <h2
        className="
          mt-8
          text-4xl
          font-black
          leading-[1.05]
          tracking-[-0.03em]
          text-[#0F1039]
          md:text-5xl
          lg:text-6xl
          dark:text-white
        "
      >
        From Strategy
        <br />

        <span
          className="
            relative
            inline-block
            text-[#D5D93B]
          "
        >
          to Scalable Growth

          {/* subtle underline */}
          <span
            className="
              absolute
              -bottom-2
              left-1/2
              h-[2px]
              w-2/3
              -translate-x-1/2
              rounded-full
              bg-[#D5D93B]/40
            "
          />
        </span>
      </h2>

      {/* ================= DESCRIPTION ================= */}

      <p
        className="
          mx-auto
          mt-9
          max-w-3xl
          text-base
          leading-8
          text-[#0F1039]/65
          md:text-lg
          md:leading-9
          dark:text-gray-300
        "
      >
        Our proven five-step framework combines strategy, creativity,
        technology and AI to build scalable digital experiences that
        generate measurable business growth.
      </p>

      {/* ================= BOTTOM ACCENT ================= */}

      <div
        className="
          mx-auto
          mt-10
          h-px
          w-24
          bg-gradient-to-r
          from-transparent
          via-[#D5D93B]/60
          to-transparent
        "
      />
    </motion.div>
  );
};

export default ProcessHeading;