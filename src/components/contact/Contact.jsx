import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import contactVideo from "../../assets/contact-vd.mp4";

const ease = [0.22, 1, 0.36, 1];

const Contact = ({setOpen}) => {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        transition-colors
        duration-500

        dark:bg-[#0F1039]

        sm:py-16
        lg:py-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#D5D93B]/[0.07]
          blur-[120px]

          dark:bg-[#D5D93B]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#0F1039]/[0.045]
          blur-[130px]

          dark:bg-[#D5D93B]/[0.025]
        "
      />

      {/* Floating decorative circles */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[18%]
          h-2
          w-2
          rounded-full
          bg-[#D5D93B]
          shadow-[0_0_20px_rgba(213,217,59,.8)]
        "
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[8%]
          bottom-[18%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#D5D93B]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5

          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            INTRO
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease }}
          className="
            mb-9
            max-w-3xl

            sm:mb-11

            lg:mb-12
          "
        >
          {/* Eyebrow */}

          <div
            className="
              mb-4
              flex
              items-center
              gap-2
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                rounded-full
                bg-[#D5D93B]
                shadow-[0_0_14px_rgba(213,217,59,.75)]
              "
            />

            <span
              className="
                text-[10px]
                font-black
                uppercase
                tracking-[0.3em]
                text-[#8F9415]

                dark:text-[#D5D93B]
              "
            >
              Let's connect
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-[clamp(2.7rem,7vw,5.8rem)]
              font-black
              leading-[0.92]
              tracking-[-0.055em]
              text-[#0F1039]

              dark:text-white
            "
          >
            Have an idea?
            <br />

            <span
              className="
                text-[#8F9415]

                dark:text-[#D5D93B]
              "
            >
              Let's make it happen.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-[#0F1039]/50

              sm:text-base
              sm:leading-7

              dark:text-white/45
            "
          >
            Tell us what you're building, where you're going,
            and what you want to achieve. We'll figure out
            the next move together.
          </p>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            gap-5

            md:grid-cols-[0.9fr_1.1fr]
            md:gap-6

            lg:gap-7
          "
        >
          {/* =================================================
              LEFT CONTACT CARD
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.9,
              ease,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[30px]

              border
              border-[#0F1039]/[0.08]

              bg-[#F7F7F3]

              p-6

              shadow-[0_20px_70px_rgba(15,16,57,0.06)]

              transition-shadow
              duration-500

              hover:shadow-[0_30px_90px_rgba(15,16,57,0.10)]

              sm:p-8

              lg:p-9

              dark:border-white/[0.08]
              dark:bg-white/[0.035]
              dark:shadow-none
            "
          >
            {/* Card glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-64
                w-64
                rounded-full
                bg-[#D5D93B]/[0.10]
                blur-[90px]

                transition-all
                duration-700

                group-hover:bg-[#D5D93B]/[0.18]

                dark:bg-[#D5D93B]/[0.04]
                dark:group-hover:bg-[#D5D93B]/[0.08]
              "
            />

            {/* Decorative ring */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-70px]
                top-[-70px]
                h-44
                w-44
                rounded-full
                border
                border-[#D5D93B]/[0.12]
              "
            />

            {/* Header */}

            <div className="relative z-10">
              <div className="flex items-center gap-2">
                <Sparkles
                  size={14}
                  className="text-[#8F9415] dark:text-[#D5D93B]"
                />

                <span
                  className="
                    text-[10px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-[#8F9415]

                    dark:text-[#D5D93B]
                  "
                >
                  Contact us
                </span>
              </div>

              <h3
                className="
                  mt-5
                  max-w-md
                  text-3xl
                  font-black
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-[#0F1039]

                  sm:text-4xl

                  dark:text-white
                "
              >
                Let's start a
                <br />

                <span
                  className="
                    text-[#8F9415]

                    dark:text-[#D5D93B]
                  "
                >
                  conversation.
                </span>
              </h3>

              <p
                className="
                  mt-4
                  max-w-md
                  text-sm
                  leading-6
                  text-[#0F1039]/50

                  dark:text-white/40
                "
              >
                Whether you have a project in mind or simply
                want to explore what's possible, we'd love
                to hear from you.
              </p>
            </div>

            {/* =================================================
                CONTACT ITEMS
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-7
                space-y-3
              "
            >
              {/* EMAIL */}

              <motion.a
                href="mailto:sales.groowiq@gmail.com"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="
                  group/item
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-[#0F1039]/[0.07]

                  bg-white/75

                  p-3

                  transition-all
                  duration-300

                  hover:border-[#D5D93B]/50
                  hover:bg-white

                  dark:border-white/[0.06]
                  dark:bg-white/[0.025]
                  dark:hover:bg-white/[0.06]
                "
              >
                <motion.span
                  whileHover={{
                    rotate: -6,
                    scale: 1.05,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    bg-[#D5D93B]
                    text-[#0F1039]

                    shadow-[0_8px_25px_rgba(213,217,59,.22)]
                  "
                >
                  <Mail size={18} />
                </motion.span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#0F1039]/35

                      dark:text-white/30
                    "
                  >
                    Email
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      truncate
                      text-sm
                      font-bold
                      text-[#0F1039]

                      dark:text-white
                    "
                  >
                    sales.groowiq@gmail.com
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    ml-auto
                    shrink-0
                    text-[#0F1039]/25

                    transition-all
                    duration-300

                    group-hover/item:-translate-y-1
                    group-hover/item:translate-x-1
                    group-hover/item:text-[#8F9415]

                    dark:text-white/25
                    dark:group-hover/item:text-[#D5D93B]
                  "
                />
              </motion.a>

              {/* PHONE */}

              <motion.a
                href="tel:+918511822796"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="
                  group/item
                  flex
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-[#0F1039]/[0.07]

                  bg-white/75

                  p-3

                  transition-all
                  duration-300

                  hover:border-[#D5D93B]/50
                  hover:bg-white

                  dark:border-white/[0.06]
                  dark:bg-white/[0.025]
                  dark:hover:bg-white/[0.06]
                "
              >
                <motion.span
                  whileHover={{
                    rotate: 6,
                    scale: 1.05,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-[#0F1039]/[0.08]

                    text-[#0F1039]

                    transition-all
                    duration-300

                    group-hover/item:border-[#D5D93B]
                    group-hover/item:bg-[#D5D93B]

                    dark:border-white/[0.08]
                    dark:text-white
                  "
                >
                  <Phone size={18} />
                </motion.span>

                <span>
                  <span
                    className="
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#0F1039]/35

                      dark:text-white/30
                    "
                  >
                    Call us
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-sm
                      font-bold
                      text-[#0F1039]

                      dark:text-white
                    "
                  >
                    +91 8511822796
                  </span>
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    ml-auto
                    shrink-0
                    text-[#0F1039]/25

                    transition-all
                    duration-300

                    group-hover/item:-translate-y-1
                    group-hover/item:translate-x-1
                    group-hover/item:text-[#8F9415]

                    dark:text-white/25
                    dark:group-hover/item:text-[#D5D93B]
                  "
                />
              </motion.a>

              {/* LOCATION */}

              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.25 }}
                className="
                  group/item
                  flex
                  items-start
                  gap-4

                  rounded-2xl

                  border
                  border-[#0F1039]/[0.07]

                  bg-white/75

                  p-3

                  transition-all
                  duration-300

                  hover:border-[#D5D93B]/50
                  hover:bg-white

                  dark:border-white/[0.06]
                  dark:bg-white/[0.025]
                  dark:hover:bg-white/[0.06]
                "
              >
                <motion.span
                  whileHover={{
                    rotate: 6,
                    scale: 1.05,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-[#0F1039]/[0.08]

                    text-[#0F1039]

                    transition-all
                    duration-300

                    group-hover/item:border-[#D5D93B]
                    group-hover/item:bg-[#D5D93B]

                    dark:border-white/[0.08]
                    dark:text-white
                  "
                >
                  <MapPin size={18} />
                </motion.span>

                <span className="min-w-0">
                  <span
                    className="
                      block
                      text-[9px]
                      font-black
                      uppercase
                      tracking-[0.2em]
                      text-[#0F1039]/35

                      dark:text-white/30
                    "
                  >
                    Location
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-xs
                      font-bold
                      leading-5
                      text-[#0F1039]

                      sm:text-sm

                      dark:text-white
                    "
                  >
                    Dev Aashish Divine 2, Lambha-Vatva Canal Rd,
                    near Kalash 2, Vatva, Ahmedabad, Gujarat 382405
                  </span>
                </span>
              </motion.div>
            </div>

            {/* =================================================
                RESPONSE STATUS
            ================================================= */}

            <div
              className="
                relative
                z-10
                mt-6
                flex
                items-center
                gap-3

                border-t
                border-[#0F1039]/[0.08]

                pt-5

                dark:border-white/[0.08]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-[#D5D93B]
                  shadow-[0_0_8px_rgba(213,217,59,.8)]
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  text-[#0F1039]/40

                  dark:text-white/30
                "
              >
                We usually respond within one business day.
              </span>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT VIDEO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            whileHover={{
              y: -5,
            }}
            className="
              group
              relative
              min-h-[390px]
              overflow-hidden
              rounded-[30px]

              border
              border-[#0F1039]/[0.08]

              bg-[#0F1039]

              shadow-[0_20px_70px_rgba(15,16,57,0.10)]

              transition-shadow
              duration-500

              hover:shadow-[0_30px_90px_rgba(15,16,57,0.18)]

              sm:min-h-[470px]

              lg:min-h-full

              dark:border-white/[0.08]
            "
          >
            {/* VIDEO */}

            <video
              src={contactVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover

                opacity-90

                transition-transform
                duration-[1400ms]
                ease-out

                group-hover:scale-[1.06]
              "
            />

            {/* Cinematic overlay */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-b
                from-[#0F1039]/10
                via-[#0F1039]/10
                to-[#0F1039]/85
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0

                bg-gradient-to-r
                from-[#0F1039]/35
                via-transparent
                to-[#D5D93B]/[0.05]
              "
            />

            {/* Moving glow */}

            <motion.div
              animate={{
                x: [0, 80, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-[-80px]
                top-[-80px]
                h-56
                w-56
                rounded-full
                bg-[#D5D93B]/[0.16]
                blur-[80px]
              "
            />

            {/* Top badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="
                absolute
                left-5
                top-5

                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                bg-[#0F1039]/45

                px-3
                py-2

                backdrop-blur-md

                sm:left-6
                sm:top-6
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D5D93B]
                  shadow-[0_0_10px_rgba(213,217,59,.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-black
                  uppercase
                  tracking-[0.2em]
                  text-white/80
                "
              >
                Let's create
              </span>
            </motion.div>

            {/* Main video content */}

            <div
              className="
                absolute
                bottom-5
                left-5
                right-5

                sm:bottom-6
                sm:left-6
                sm:right-6
              "
            >
              <div
                className="
                  rounded-[24px]

                  border
                  border-white/15

                  bg-[#0F1039]/65

                  p-5

                  backdrop-blur-xl

                  sm:p-6
                "
              >
                <p
                  className="
                    text-[9px]
                    font-black
                    uppercase
                    tracking-[0.25em]
                    text-[#D5D93B]
                  "
                >
                  Your next move
                </p>

                <h3
                  className="
                    mt-2
                    max-w-lg
                    text-2xl
                    font-black
                    leading-[1]
                    tracking-[-0.035em]
                    text-white

                    sm:text-3xl
                    lg:text-4xl
                  "
                >
                  Don't just have
                  <span className="text-[#D5D93B]">
                    {" "}
                    an idea.
                  </span>
                  <br />
                  Make it happen.
                </h3>

                <p
                  className="
                    mt-3
                    max-w-md
                    text-xs
                    leading-5
                    text-white/55

                    sm:text-sm
                    sm:leading-6
                  "
                >
                  Great brands don't happen by accident.
                  Let's turn your vision into something
                  people remember.
                </p>

                {/* CTA */}

                <motion.button
  type="button"
  onClick={() => setOpen(true)}
  whileHover={{
    scale: 1.02,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className="
    mt-5
    flex
    w-full
    items-center
    justify-between

    rounded-xl

    bg-[#D5D93B]

    px-4
    py-3

    text-left
    text-sm
    font-black
    text-[#0F1039]

    transition-shadow
    duration-300

    hover:shadow-[0_10px_35px_rgba(213,217,59,.25)]
    cursor-pointer

    sm:px-5
    sm:py-3.5
  "
>
  <span>Let's grow together</span>

  <motion.span
    whileHover={{
      rotate: 45,
    }}
    className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-[#0F1039]/10
    "
  >
    <ArrowUpRight size={17} />
  </motion.span>
</motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM MICRO LINE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <span
            className="
              h-px
              w-10
              bg-[#0F1039]/10

              dark:bg-white/10
            "
          />

          <span
            className="
              text-[8px]
              font-black
              uppercase
              tracking-[0.28em]
              text-[#0F1039]/30

              dark:text-white/25
            "
          >
            No pressure · Just possibilities
          </span>

          <span
            className="
              h-px
              w-10
              bg-[#0F1039]/10

              dark:bg-white/10
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

    
          