import { processData } from "../../data/processData";
import TimelineCard from "./TimelineCard";
import { motion, useScroll, useTransform } from "framer-motion";
import {useRef} from "react"

const Timeline = () => {


  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 30%"],
  });

  const scaleY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  
  return (
    <div
    ref={timelineRef}
      className="
        relative
        mx-auto
        mt-20
        w-full
        max-w-6xl
        lg:mt-24
      "
    >
      {/* ================= CENTER TIMELINE ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          hidden
          h-full
          w-[2px]
          -translate-x-1/2
          lg:block
        "
      >
        {/* Base Line */}
        <div
          className="
            h-full
            w-full
            bg-[#0F1039]/10
            dark:bg-white/10
          "
        />

        {/* Animated Progress */}
        {/* <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 2.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-0
            top-0
            w-full
            rounded-full
            bg-gradient-to-b
            from-[#D5D93B]
            via-[#D5D93B]
            to-[#0F1039]
            shadow-[0_0_18px_rgba(213,217,59,.55)]
          "
        /> */}
        <motion.div
  style={{ scaleY }}
  className="
    absolute
    left-0
    top-0
    h-full
    w-full
    origin-top
    rounded-full
    bg-gradient-to-b
    from-[#D5D93B]
    via-[#D5D93B]
    to-[#0F1039]
    shadow-[0_0_18px_rgba(213,217,59,.55)]
  "
/>
      </div>

      {/* ================= TIMELINE ITEMS ================= */}

      <div className="space-y-20 lg:space-y-24">
        {processData.map((step, index) => (
          <TimelineCard
            key={step.number}
            step={step}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;