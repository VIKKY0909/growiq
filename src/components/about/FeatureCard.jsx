import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 3
      }}
      transition={{ duration: 0.3 }}
      className="
        group
        rounded-2xl
        border
        border-[#D5D93B]/10
        bg-white
        dark:bg-[#0F1039]
        p-6
        shadow-lg
        backdrop-blur-xl
        will-change-transform
        transition-all
        duration-300
        hover:border-[#D5D93B]/40
        hover:shadow-[0_20px_45px_rgba(213,217,59,.15)]
      "
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D5D93B]/10 text-[#D5D93B] transition-transform duration-300 group-hover:rotate-6">
          <Icon size={24} />
        </div>

        <h3 className="text-lg font-bold text-[#0F1039] dark:text-white">
          {title}
        </h3>
      </div>

      <p className="mt-4 leading-7 text-[#0F1039]/70 dark:text-gray-300">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;