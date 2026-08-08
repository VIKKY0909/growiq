import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimelineCard = ({ step, index }) => {
  const Icon = step.icon;

  const isLeft = index % 2 === 0;

  // Track the complete timeline item
  const cardRef = useRef(null);

  const isActive = useInView(cardRef, {
    amount: 0.35,
    once: false,
  });

  return (
    <div
      ref={cardRef}
      className="
        relative
        w-full
        min-w-0
        lg:grid
        lg:grid-cols-[minmax(0,1fr)_80px_minmax(0,1fr)]
        lg:items-center
        lg:gap-8
      "
    >
      {/* =====================================================
          MOBILE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          w-full
          min-w-0
          items-start
          gap-4
          lg:hidden
        "
      >
        {/* Mobile Number */}

        <motion.div
          animate={{
            scale: isActive ? 1.12 : 1,
            boxShadow: isActive
              ? "0 0 30px rgba(213,217,59,.65)"
              : "0 0 18px rgba(213,217,59,.30)",
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D5D93B]/50
            bg-[#0F1039]
            text-sm
            font-bold
            text-[#D5D93B]
          "
        >
          {step.number}

          {/* Active Pulse */}

          {isActive && (
            <motion.span
              initial={{
                scale: 0.8,
                opacity: 0.7,
              }}
              animate={{
                scale: 1.6,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                border
                border-[#D5D93B]/60
              "
            />
          )}
        </motion.div>

        {/* Mobile Card */}

        <div
          className="
            group
            relative
            w-full
            min-w-0
            overflow-hidden
            rounded-[24px]

            border
            border-slate-200
            bg-white/70

            p-6

            shadow-[0_15px_40px_rgba(15,16,57,0.06)]

            backdrop-blur-2xl

            transition-all
            duration-500

            dark:border-white/10
            dark:bg-white/5
            dark:shadow-none

            hover:border-[#D5D93B]/50
            hover:shadow-[0_0_45px_rgba(213,217,59,.18)]
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
              bg-[radial-gradient(circle_at_top_left,rgba(213,217,59,.15),transparent_60%)]
            "
          />

          {/* Light Sweep */}

          <div
            className="
              pointer-events-none
              absolute
              -left-full
              top-0
              h-full
              w-[50%]
              rotate-12
              bg-gradient-to-r
              from-transparent
              via-white/20
              to-transparent
              transition-all
              duration-[1200ms]
              group-hover:left-[170%]
            "
          />

          <div className="relative z-10">

            {/* Header */}

            <div className="flex items-center gap-4">

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: 360,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#D5D93B]/15
                  text-[#D5D93B]
                  shadow-[0_0_25px_rgba(213,217,59,.12)]
                "
              >
                <Icon size={22} />
              </motion.div>

              {/* Title */}

              <div className="min-w-0">

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#D5D93B]
                  "
                >
                  {step.label}
                </p>

                <h3
                  className="
                    mt-1
                    text-xl
                    font-bold
                    leading-tight
                    text-[#0F1039]
                    dark:text-white
                  "
                >
                  {step.title}
                </h3>

              </div>
            </div>

            {/* Description */}

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-[#0F1039]/70
                dark:text-gray-300
              "
            >
              {step.description}
            </p>

            {/* Tags */}

            <div className="mt-5 flex flex-wrap gap-2">

              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-[#D5D93B]/20
                    bg-[#D5D93B]/10
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    text-[#D5D93B]
                  "
                >
                  {tag}
                </span>
              ))}

            </div>

          </div>
        </div>
      </motion.div>

      {/* =====================================================
          DESKTOP LEFT
      ===================================================== */}

      <div
        className={`
          hidden
          min-w-0
          lg:block
          ${isLeft ? "" : "invisible"}
        `}
      >
        {isLeft && (
          <DesktopCard
            step={step}
            direction="left"
            isActive={isActive}
          />
        )}
      </div>

      {/* =====================================================
          DESKTOP CENTER NUMBER
      ===================================================== */}

      <div
        className="
          relative
          z-20
          hidden
          w-full
          justify-center
          lg:flex
        "
      >
        <motion.div
          initial={{
            scale: 0.7,
            opacity: 0,
          }}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          animate={{
            scale: isActive ? 1.15 : 1,
            boxShadow: isActive
              ? "0 0 35px rgba(213,217,59,.70)"
              : "0 0 20px rgba(213,217,59,.35)",
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            relative
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#D5D93B]/50
            bg-[#0F1039]
            text-sm
            font-bold
            text-[#D5D93B]
          "
        >
          {step.number}

          {/* Active Pulse */}

          {isActive && (
            <motion.span
              initial={{
                scale: 0.8,
                opacity: 0.7,
              }}
              animate={{
                scale: 1.6,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-full
                border
                border-[#D5D93B]/60
              "
            />
          )}
        </motion.div>
      </div>

      {/* =====================================================
          DESKTOP RIGHT
      ===================================================== */}

      <div
        className={`
          hidden
          min-w-0
          lg:block
          ${!isLeft ? "" : "invisible"}
        `}
      >
        {!isLeft && (
          <DesktopCard
            step={step}
            direction="right"
            isActive={isActive}
          />
        )}
      </div>
    </div>
  );
};


/* =========================================================
   DESKTOP CARD
========================================================= */

const DesktopCard = ({ step, direction, isActive }) => {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      animate={{
        y: isActive ? -4 : 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        w-full
        min-w-0
        overflow-hidden
        rounded-[28px]

        border
        border-slate-200
        bg-white/70

        p-8

        shadow-[0_15px_40px_rgba(15,16,57,0.06)]

        backdrop-blur-2xl

        transition-all
        duration-500

        dark:border-white/10
        dark:bg-white/5
        dark:shadow-none

        hover:border-[#D5D93B]/50
        hover:shadow-[0_0_60px_rgba(213,217,59,.18)]
      "
    >
      {/* Active Card Glow */}

      <motion.div
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(213,217,59,.12),transparent_65%)]
        "
      />

      {/* Hover Glow */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_left,rgba(213,217,59,.15),transparent_60%)]
        "
      />

      {/* Light Sweep */}

      <div
        className="
          pointer-events-none
          absolute
          -left-full
          top-0
          h-full
          w-[45%]
          rotate-12
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-all
          duration-[1200ms]
          group-hover:left-[170%]
        "
      />

      <div className="relative z-10">

        {/* Header */}

        <div className="flex items-center gap-4">

          <motion.div
            whileHover={{
              rotate: 360,
              scale: 1.08,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-[#D5D93B]/15
              text-[#D5D93B]
              shadow-[0_0_25px_rgba(213,217,59,.12)]
            "
          >
            <Icon size={24} />
          </motion.div>

          <div className="min-w-0">

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-[#D5D93B]
              "
            >
              {step.label}
            </p>

            <h3
              className="
                mt-1
                text-3xl
                font-bold
                leading-tight
                text-[#0F1039]
                dark:text-white
              "
            >
              {step.title}
            </h3>

          </div>
        </div>

        {/* Description */}

        <p
          className="
            mt-6
            leading-8
            text-[#0F1039]/70
            dark:text-gray-300
          "
        >
          {step.description}
        </p>

        {/* Tags */}

        <div className="mt-6 flex flex-wrap gap-3">

          {step.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#D5D93B]/20
                bg-[#D5D93B]/10
                px-4
                py-2
                text-xs
                font-medium
                text-[#D5D93B]
              "
            >
              {tag}
            </span>
          ))}

        </div>

      </div>
    </motion.div>
  );
};

export default TimelineCard;