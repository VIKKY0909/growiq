import { motion } from "framer-motion";
import { aboutCards } from "../../data/aboutData";
import FeatureCard from "./FeatureCard";
import AnimatedCounter from "./AnimatedCounter";


const container = {
  hidden: {},
  show: {
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
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutContent = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Badge */}

      <motion.div
        variants={item}
        className="inline-flex
        items-center
        rounded-full
        border
        border-[#D5D93B]/30
        bg-[#D5D93B]/10
        px-5
        py-2
        backdrop-blur-xl
      "
      >
        <span className="text-sm font-semibold tracking-wide text-[#D5D93B]">
          ABOUT GROOWIQ
        </span>
      </motion.div>

      {/* Heading */}

      <motion.h2
        variants={item}
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-[#0F1039]
          dark:text-white
          md:text-5xl
        "
      >
        Most agencies sell a menu.
        <br />

        <span className="bg-gradient-to-r from-[#D5D93B] via-[#d5d93b] to-[#B8C11F] bg-clip-text text-transparent inline-block">
            We start with the bottleneck.
        </span>

      </motion.h2>

      {/* Description */}

      <motion.p
        variants={item}
        className="
          mt-8
          text-lg
          leading-8
          text-[#0F1039]/70
          dark:text-gray-300
        "
      >
        You may need more traffic. You may also need a clearer offer, better creative, cleaner attribution, a faster website or a sales follow-up that stops leaking demand. Starting with every channel at once makes it harder to learn what is working.
      </motion.p>

      <motion.p
        variants={item}
        className="mt-5 text-lg leading-8 text-[#0F1039]/70 dark:text-gray-300"
      >
        Groowiq begins with the business target, current funnel and available evidence. We identify the constraint, agree on the metric that matters, and build the smallest credible plan to test it. If a channel is unlikely to help, we say so before it becomes a monthly line item.
      </motion.p>

      {/* Divider */}

      <motion.div
        variants={item}
        className=" mt-10 h-[2px] w-full bg-gradient-to-r from-[#0f1039] via-[#0f1039]/40 to-transparent dark:from-[#D5D93B] dark:via-[#D5D93B]/40 dark:to-transparent "

      />

      {/* Cards */}

      <motion.div
        variants={item}
        className="mt-10 grid gap-5"
      >
        {aboutCards.map((card) => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;