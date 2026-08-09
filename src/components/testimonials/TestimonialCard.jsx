
import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const TestimonialCard = ({ testimonial }) => {
  /* =====================================================
      COUNT UP ANIMATION
  ===================================================== */

const highlightValue = testimonial.highlight?.value || "";

const numericMatch = highlightValue.match(/[\d.]+/);

const numericPart = numericMatch
  ? parseFloat(numericMatch[0])
  : null;

const suffix = numericMatch
  ? highlightValue.replace(numericMatch[0], "")
  : "";

const isNumericHighlight =
  numericPart !== null && !Number.isNaN(numericPart);

const [count, setCount] = useState(
  isNumericHighlight ? 0 : highlightValue
);

useEffect(() => {
  if (!isNumericHighlight) {
    setCount(highlightValue);
    return;
  }

  setCount(0);

  const duration = 1200;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime;

    const progress = Math.min(
      elapsed / duration,
      1
    );

    const easedProgress =
      1 - Math.pow(1 - progress, 3);

    const currentValue =
      numericPart < 10
        ? Number(
            (numericPart * easedProgress).toFixed(1)
          )
        : Math.floor(
            numericPart * easedProgress
          );

    setCount(currentValue);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      setCount(numericPart);
    }
  };

  requestAnimationFrame(animate);
}, [
  testimonial.id,
  highlightValue,
  numericPart,
  isNumericHighlight,
]);

  return (
    <article
      className="
        group
        relative
        mx-auto
        w-full
        max-w-6xl
        overflow-hidden
        rounded-[24px]
        sm:rounded-[28px]

        border
        border-[#0F1039]/[0.08]
        bg-white/90

        shadow-[0_25px_80px_rgba(15,16,57,0.08)]

        transition-all
        duration-500

        hover:border-[#D5D93B]/40
        hover:shadow-[0_30px_100px_rgba(213,217,59,0.12)]

        dark:border-white/10
        dark:bg-[#11133f]/90
        dark:shadow-[0_30px_100px_rgba(0,0,0,0.25)]
        dark:hover:border-[#D5D93B]/30
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-[280px]
          w-[280px]
          -translate-y-1/2
          rounded-full
          bg-[#D5D93B]/[0.08]
          blur-[100px]

          dark:bg-[#D5D93B]/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[280px]
          w-[280px]
          rounded-full
          bg-[#5b5ce2]/[0.05]
          blur-[100px]

          dark:bg-[#5b5ce2]/[0.10]
        "
      />

      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div
        className="
          relative
          z-10
          grid
          lg:grid-cols-[40%_60%]
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            min-h-[280px]
            overflow-hidden

            sm:min-h-[340px]

            lg:min-h-[500px]
          "
        >
          {/* Image */}

          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={`${testimonial.name} testimonial`}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                transition-transform
                duration-[1200ms]
                ease-out

                group-hover:scale-[1.04]
              "
            />
          ) : (
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center

                bg-slate-100
                text-5xl
                font-black
                text-[#A5A91D]

                dark:bg-[#0F1039]
                dark:text-[#D5D93B]
              "
            >
              {testimonial.name?.charAt(0)}
            </div>
          )}

          {/* Image Overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-t
              from-black/55
              via-black/5
              to-transparent

              lg:bg-gradient-to-r
              lg:from-transparent
              lg:via-transparent
              lg:to-white/10

              dark:lg:to-[#11133f]/70
            "
          />

          {/* Client Story Badge */}

          <div
            className="
              absolute
              bottom-4
              left-4

              flex
              items-center
              gap-2

              rounded-full
              border
              border-white/20
              bg-black/20

              px-3
              py-1.5

              backdrop-blur-md
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D5D93B]
                shadow-[0_0_10px_rgba(213,217,59,.8)]
              "
            />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-white/90
              "
            >
              Client Story
            </span>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-col
            justify-center

            px-5
            py-7

            sm:px-8
            sm:py-9

            md:px-10
            md:py-10

            lg:px-10
            xl:px-12
            lg:py-11
          "
        >
          {/* =================================================
              TOP ROW
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* Stars */}

            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill="currentColor"
                  className="
                    text-[#A5A91D]
                    sm:h-[15px]
                    sm:w-[15px]

                    dark:text-[#D5D93B]
                  "
                />
              ))}
            </div>

            {/* Quote Icon */}

            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full

                border
                border-[#A5A91D]/20

                bg-[#A5A91D]/10

                text-[#8F9415]

                sm:h-10
                sm:w-10

                dark:border-[#D5D93B]/20
                dark:bg-[#D5D93B]/10
                dark:text-[#D5D93B]
              "
            >
              <Quote size={17} />
            </div>
          </div>

          {/* =================================================
              LABEL
          ================================================= */}

          <p
            className="
              mt-5

              text-[9px]
              font-bold
              uppercase
              tracking-[0.25em]

              text-[#8F9415]

              dark:text-[#D5D93B]
            "
          >
            What our partners say
          </p>

          {/* =================================================
              PREMIUM TESTIMONIAL QUOTE
          ================================================= */}

          <div className="relative mt-5">
            {/* Decorative Quote */}

            <div
              className="
                pointer-events-none
                absolute
                -left-2
                -top-7

                text-[72px]
                font-serif
                leading-none

                text-[#A5A91D]/10

                dark:text-[#D5D93B]/10

                sm:text-[88px]
              "
            >
              “
            </div>

            <motion.h2
              key={testimonial.id}
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10

                max-w-2xl

                text-[25px]
                font-black
                leading-[1.18]
                tracking-[-0.025em]

                text-[#0F1039]

                sm:text-[32px]
                sm:leading-[1.15]

                lg:text-[38px]
                xl:text-[42px]

                dark:text-white
              "
            >
              {testimonial.quote}
            </motion.h2>
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            key={`${testimonial.id}-description`}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            className="
              mt-5
              max-w-xl

              text-[13px]
              font-medium
              leading-6

              text-[#0F1039]/60

              sm:text-sm
              sm:leading-6

              dark:text-white/65
            "
          >
            {testimonial.description}
          </motion.p>

          {/* =================================================
              PREMIUM RESULT
          ================================================= */}

          <motion.div
            key={`${testimonial.id}-result`}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="
              mt-6

              flex
              items-center
              gap-4

              rounded-2xl

              border
              border-[#0F1039]/[0.07]

              bg-[#0F1039]/[0.025]

              px-4
              py-3.5

              sm:px-5
              sm:py-4

              dark:border-white/[0.08]
              dark:bg-white/[0.035]
            "
          >
            {/* =============================================
                ANIMATED METRIC
            ============================================= */}

            <div
              className="
                relative
                shrink-0
                pl-4
              "
            >
              {/* Accent Line */}

              <span
                className="
                  absolute
                  left-0
                  top-0
                  h-full
                  w-[3px]
                  rounded-full

                  bg-[#A5A91D]

                  dark:bg-[#D5D93B]
                "
              />

              {/* Animated Number */}

             <motion.p
  key={`${testimonial.id}-metric`}
  initial={{
    opacity: 0,
    scale: 0.8,
  }}
  animate={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    whitespace-nowrap
    text-[28px]
    font-black
    leading-none
    tracking-[-0.04em]
    text-[#8F9415]
    sm:text-[32px]
    dark:text-[#D5D93B]
  "
>
  {isNumericHighlight ? (
    <>
      {count}
      {suffix}
    </>
  ) : (
    highlightValue
  )}
</motion.p>

              {/* Metric Label */}

              <p
                className="
                  mt-1.5

                  whitespace-nowrap

                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.16em]

                  text-[#0F1039]/50

                  dark:text-white/55
                "
              >
                {testimonial.highlight.label}
              </p>
            </div>

            {/* =============================================
                RESULT DESCRIPTION
            ============================================= */}

            {testimonial.result && (
              <div
                className="
                  min-w-0
                  flex-1

                  border-l
                  border-[#0F1039]/10

                  pl-4

                  sm:pl-5

                  dark:border-white/10
                "
              >
                <p
                  className="
                    max-w-lg

                    text-[11px]
                    font-medium
                    leading-[1.55]

                    text-[#0F1039]/65

                    sm:text-[13px]
                    sm:leading-6

                    dark:text-white/70
                  "
                >
                  {testimonial.result}
                </p>
              </div>
            )}
          </motion.div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div
            className="
              my-5
              h-px
              w-full

              bg-gradient-to-r
              from-slate-200
              via-slate-100
              to-transparent

              dark:from-white/10
              dark:via-white/5
              dark:to-transparent
            "
          />

          {/* =================================================
              CLIENT IDENTITY
          ================================================= */}

          <div
            className="
              flex
              items-end
              justify-between
              gap-5
            "
          >
            {/* Client Details */}

            <div className="min-w-0">
              {/* Name */}

              <motion.h3
                key={`${testimonial.id}-name`}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  truncate

                  text-xl
                  font-black
                  leading-tight
                  tracking-[-0.02em]

                  text-[#0F1039]

                  sm:text-2xl
                  lg:text-[28px]

                  dark:text-white
                "
              >
                {testimonial.name}
              </motion.h3>

              {/* Role + Company */}

              <div
                className="
                  mt-2.5

                  flex
                  flex-wrap
                  items-center
                  gap-x-2.5
                  gap-y-1
                "
              >
                {/* Role */}

                <span
                  className="
                    text-sm
                    font-semibold
                    leading-none

                    text-[#0F1039]/60

                    sm:text-[15px]

                    dark:text-white/60
                  "
                >
                  {testimonial.role}
                </span>

                {/* Accent */}

                {testimonial.company && (
                  <>
                    <span
                      className="
                        h-1
                        w-1
                        shrink-0
                        rounded-full

                        bg-[#A5A91D]

                        dark:bg-[#D5D93B]
                      "
                    />

                    {/* Company */}

                    <span
                      className="
                        text-sm
                        font-bold
                        leading-none

                        text-[#8F9415]

                        sm:text-[15px]

                        dark:text-[#D5D93B]
                      "
                    >
                      {testimonial.company}
                    </span>
                  </>
                )}
              </div>

              {/* Small Identity Line */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    h-px
                    w-7

                    bg-[#A5A91D]

                    dark:bg-[#D5D93B]
                  "
                />

                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.24em]

                    text-[#0F1039]/35

                    dark:text-white/30
                  "
                >
                  Growth Partner
                </span>
              </div>
            </div>

            {/* Arrow */}

            <motion.div
              whileHover={{
                rotate: 45,
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-[#0F1039]/10

                bg-[#0F1039]/[0.03]

                text-[#8F9415]

                transition-colors
                duration-300

                hover:border-[#D5D93B]/40
                hover:bg-[#D5D93B]/10

                dark:border-white/10
                dark:bg-white/[0.03]
                dark:text-[#D5D93B]
              "
            >
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
              />
            </motion.div>
          </div>

          {/* =================================================
              BRAND LINE
          ================================================= */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full

                bg-[#A5A91D]

                shadow-[0_0_10px_rgba(213,217,59,.7)]
                dark: bg-[#D5D93B]
                "
                />
                <span
                className="
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#0F1039]/35
                dark: text-white/30
                "
                >
                    Growth powered by Grooiq
                </span>
                </div>
                </div>
                </div>
                </article>
  );
}

export default TestimonialCard