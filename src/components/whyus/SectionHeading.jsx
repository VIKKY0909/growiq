import { motion } from "framer-motion";

const SectionHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >
      {/* Badge */}
      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-[#D5D93B]/30
          bg-[#D5D93B]/10
          px-5
          py-2
          text-sm
          font-semibold
          uppercase
          tracking-[0.28em]
          text-[#D5D93B]
        "
      >
        The GROOWIQ Advantage
      </span>

      {/* Heading */}
      <h2
        className="
          mt-8
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-black
          leading-tight
          text-[#0F1039]
          dark:text-white
        "
      >
        A Growth Partner,
        <br />
        <span
          className="
            text-[#D5D93B]
            drop-shadow-[0_0_20px_rgba(213,217,59,.35)]
          "
        >
          Not Just Another Agency
        </span>
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-9
          text-[#0F1039]/70
          dark:text-gray-300
        "
      >
        We replace disconnected agencies with one unified team that combines
        branding, AI, marketing and technology to help businesses grow faster,
        smarter and with measurable results.
      </p>
    </motion.div>
  );
};

export default SectionHeading;