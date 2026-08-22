import { easeOut, motion } from "framer-motion";

const ServicesHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120, scale: .96 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .5 }}
      transition={{ duration: 1, ease: easeOut }}
      className="mx-auto max-w-4xl text-center"
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
        inline-flex
        rounded-full
        border
        border-[#D5D93B]/30
        bg-[#D5D93B]/10
        px-5
        py-2
        text-sm
        font-semibold
        tracking-[0.25em]
        uppercase
        text-[#D5D93B]
      "
      >
        Core Expertise
      </motion.span>

      <h2
        className="
        mt-8
        text-4xl
        md:text-6xl
        font-black
        leading-tight
        text-[#0F1039]
        dark:text-white
      "
      >
        Solutions That
        <span className="text-[#D5D93B]">
          {" "}
          Fuel Growth
        </span>
      </h2>

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
        We deliver AI-powered branding, marketing and digital growth
        solutions that help startups and businesses scale faster,
        generate measurable ROI and build unforgettable brands.
      </p>
    </motion.div>
  );
};

export default ServicesHeading;