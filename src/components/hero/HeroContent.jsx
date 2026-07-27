import { motion } from "framer-motion";
import HeroButtons from "./HeroButtons";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const lines = [
  "We Build",
  "Brands",
  "That People",
  "Can't Ignore.",
  
];

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

const HeroContent = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="relative z-10"
    >
      {/* Badge */}
    <motion.div
  variants={item}
  animate={{
    scale: [1, 1.03, 1],
    boxShadow: [
      "0 0 0px rgba(213,217,59,0)",
      "0 0 35px rgba(213,217,59,.7)",
      "0 0 0px rgba(213,217,59,0)",
    ],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  whileHover={{
    scale: 1.08,
  }}
  className="
    inline-flex
    items-center
    rounded-full
    border
    px-5
    py-2
    text-sm
    font-medium
    backdrop-blur-md

    bg-[#D5D93B]/10
    border-[#D5D93B]/30
    text-[#D5D93B]

    dark:bg-[#D5D93B]/10
    dark:border-[#D5D93B]/30
    dark:text-[#D5D93B]
  "
>
  ✨ AI Powered Growth Marketing Studio
</motion.div>

      {/* Heading */}
      {/* <motion.h1
        variants={item}
        className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05]"
      >
        <span className="block">We Build</span>

        <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Brands That
        </span>

        <span className="block">People Can't</span>

        <span className="block text-[#D5D93B]">
          Ignore.
        </span>
      </motion.h1> */}

      <motion.div
  variants={container}
  className="mt-8"
>
  {lines.map((line, index) => (
    <motion.h1
      key={line}
      variants={item}
      className={`
        text-5xl
        md:text-6xl
        xl:text-7xl
        font-black
        leading-[1.05]

        ${
          index === 1
            ? "bg-gradient-to-r from-[#D5D93B] via-yellow-300 to-[#D5D93B] bg-clip-text text-transparent"
            : "text-black dark:text-white"
        }
      `}
    >
      {line}
    </motion.h1>
  ))}
</motion.div>
      

      {/* Paragraph */}
      <motion.p
        variants={item}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
      >
        AI-powered branding, performance marketing, content,
        websites, and growth systems built for ambitious brands.
      </motion.p>

      {/* Buttons */}
      <motion.div variants={item}>
        <HeroButtons />
      </motion.div>

      {/* Scroll Text */}
      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.8,
          duration: .8,
        }}
        className="mt-12 flex items-center gap-3 text-sm tracking-[6px] uppercase text-gray-400"
      >
        Scroll

        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-4 rounded-full border border-gray-500 flex justify-center"
        >
          <div className="mt-1 h-2 w-2 rounded-full bg-[#D5D93B]" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;