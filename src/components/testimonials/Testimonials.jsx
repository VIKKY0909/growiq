
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// import Footer from "./Footer"

import TestimonialCard from "./TestimonialCard";
import { testimonialsData } from "../../data/testimonialsData";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================
     AUTO SLIDE
  ========================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === testimonialsData.length - 1 ? 0 : current + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    
    <section
      id="testimonials"
      className="
        relative
        scroll-mt-28
        overflow-hidden

        bg-[#F7F8F3]
        text-[#0F1039]

        py-16
        sm:py-20
        lg:py-24

        transition-colors
        duration-500

        dark:bg-[#0F1039]
        dark:text-white
      "
    >
      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0

          h-[350px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-[#D5D93B]/10

          blur-[120px]

          dark:bg-[#D5D93B]/5
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0

          h-[300px]
          w-[300px]

          rounded-full

          bg-[#5b5ce2]/5

          blur-[120px]

          dark:bg-[#5b5ce2]/10
        "
      />

      {/* =========================================
          HEADING
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-10
          max-w-4xl
          px-5
          text-center

          sm:mb-12
          sm:px-6
        "
      >
        {/* Small Label */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            text-[9px]
            font-bold
            uppercase
            tracking-[0.3em]

            text-[#989c1d]

            dark:text-[#D5D93B]

            sm:text-[10px]
          "
        >
          Client Stories
        </motion.p>

        {/* Main Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mt-3

            text-[34px]
            font-black
            leading-[1.05]
            tracking-[-0.03em]

            text-[#0F1039]

            sm:text-5xl
            lg:text-6xl

            dark:text-white
          "
        >
          Results worth{" "}
          <span className="text-[#A5A91D] dark:text-[#D5D93B]">
            talking about.
          </span>
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-4
            max-w-xl

            text-[13px]
            leading-6

            text-[#0F1039]/55

            sm:text-sm
            sm:leading-6

            dark:text-white/50
          "
        >
          Real partnerships. Real growth. A closer look at what
          happens when strategy meets execution.
        </motion.p>
      </div>

      {/* =========================================
          SLIDER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-6xl

          px-4

          sm:px-6
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTestimonial.id}
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              x: -60,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TestimonialCard testimonial={activeTestimonial} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =========================================
          SLIDER CONTROLS
      ========================================= */}

      <div
        className="
          relative
          z-10

          mt-7

          flex
          items-center
          justify-center
          gap-2
        "
      >
        {testimonialsData.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
            className="
              relative
              h-1.5
              overflow-hidden
              rounded-full

              bg-[#0F1039]/10

              transition-all
              duration-500

              dark:bg-white/15
            "
          >
            <span
              className={`
                block
                h-full
                rounded-full
                transition-all
                duration-500

                ${
                  activeIndex === index
                    ? "w-10 bg-[#A5A91D] dark:bg-[#D5D93B]"
                    : "w-3 bg-[#0F1039]/20 dark:bg-white/20"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* =========================================
          COUNTER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mt-3
          text-center
        "
      >
        <span
          className="
            text-[9px]
            font-semibold
            tracking-[0.2em]

            text-[#0F1039]/25

            dark:text-white/25
          "
        >
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(testimonialsData.length).padStart(2, "0")}
        </span>
      </div>
      {/* <ClientLogos/> */}
      
    </section>
    
  );
};

export default Testimonials;