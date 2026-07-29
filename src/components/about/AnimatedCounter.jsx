import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const AnimatedCounter = ({ end, suffix = "", label }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, end, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, end]);

  return (
    <div className="text-center">
      <motion.h3
        className="text-3xl font-black text-[#D5D93B]"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.h3>

      <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
        {label}
      </p>
    </div>
  );
};

export default AnimatedCounter;