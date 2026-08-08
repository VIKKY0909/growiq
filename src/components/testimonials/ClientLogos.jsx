import { motion } from "framer-motion";
import { clientLogos } from "../../data/testimonialsData";

const ClientLogos = () => {
  // Duplicate logos for seamless infinite marquee
  const logos = [...clientLogos, ...clientLogos];

  return (
    <section
      className="
        relative
        overflow-hidden

        border-t
        border-[#0F1039]/[0.10]

        bg-white

        py-12

        transition-colors
        duration-500

        dark:border-white/[0.08]
        dark:bg-[#0F1039]

        sm:py-14
        lg:py-16
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
          top-1/2

          h-[260px]
          w-[600px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#D5D93B]/[0.06]

          blur-[100px]

          dark:bg-[#D5D93B]/[0.04]
        "
      />

      {/* =========================================
          HEADER
      ========================================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-5
          text-center

          sm:px-6
          lg:px-8
        "
      >
        {/* Eyebrow */}

        <div
          className="
            inline-flex
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

              bg-[#D5D93B]

              shadow-[0_0_10px_rgba(213,217,59,.65)]
            "
          />

          <span
            className="
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]

              text-[#8F9415]

              dark:text-[#D5D93B]

              sm:text-[10px]
            "
          >
            Our growing network
          </span>
        </div>

        {/* Heading */}

        <h3
          className="
            mx-auto
            mt-3
            max-w-2xl

            text-2xl
            font-black
            leading-tight
            tracking-[-0.025em]

            text-[#0F1039]

            sm:text-3xl
            lg:text-4xl

            dark:text-white
          "
        >
          Trusted by brands
          <span
            className="
              text-[#8F9415]
              dark:text-[#D5D93B]
            "
          >
            {" "}
            we’ve helped grow.
          </span>
        </h3>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-3
            max-w-lg

            text-xs
            leading-5

            text-[#0F1039]/55

            sm:text-sm
            sm:leading-6

            dark:text-white/45
          "
        >
          From ambitious startups to growing businesses,
          we build partnerships that move brands forward.
        </p>
      </div>

      {/* =========================================
          LOGO MARQUEE
      ========================================= */}

      <div
        className="
          relative
          z-10

          mt-9

          overflow-hidden

          sm:mt-11
          lg:mt-12
        "
      >
        {/* =====================================
            LEFT FADE
        ===================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full

            w-16

            bg-gradient-to-r
            from-white
            to-transparent

            dark:from-[#0F1039]

            sm:w-24
            lg:w-40
          "
        />

        {/* =====================================
            RIGHT FADE
        ===================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            z-20
            h-full

            w-16

            bg-gradient-to-l
            from-white
            to-transparent

            dark:from-[#0F1039]

            sm:w-24
            lg:w-40
          "
        />

        {/* =====================================
            MOVING TRACK
        ===================================== */}

        <motion.div
          className="
            flex
            w-max
            items-center

            gap-4

            px-2

            sm:gap-5
            lg:gap-6
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 24,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {logos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="
                group/logo

                relative

                flex
                h-[82px]
                w-[150px]

                shrink-0

                items-center
                justify-center

                overflow-hidden

                rounded-2xl

                border
                border-[#0F1039]/[0.14]

                bg-white

                px-5
                py-4

                shadow-[0_8px_30px_rgba(15,16,57,0.08)]

                transition-all
                duration-500

                hover:-translate-y-1

                hover:border-[#D5D93B]/80

                hover:bg-[#D5D93B]/[0.035]

                hover:shadow-[0_12px_40px_rgba(15,16,57,0.12)]

                dark:border-white/[0.10]
                dark:bg-white/[0.045]
                dark:shadow-none

                dark:hover:border-[#D5D93B]/50

                dark:hover:bg-white/[0.07]

                dark:hover:shadow-[0_12px_40px_rgba(213,217,59,0.08)]

                sm:h-[92px]
                sm:w-[175px]

                lg:h-[100px]
                lg:w-[190px]
              "
            >
              {/* =================================
                  HOVER GLOW
              ================================= */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  rounded-2xl

                  bg-[radial-gradient(circle_at_center,rgba(213,217,59,.14),transparent_65%)]

                  opacity-0

                  transition-all
                  duration-500

                  group-hover/logo:scale-105
                  group-hover/logo:opacity-100
                "
              />

              {/* =================================
                  TOP ACCENT
              ================================= */}

              <span
                className="
                  pointer-events-none

                  absolute
                  left-1/2
                  top-0

                  h-[2px]
                  w-0

                  -translate-x-1/2

                  rounded-full

                  bg-[#D5D93B]

                  opacity-0

                  transition-all
                  duration-500

                  group-hover/logo:w-12
                  group-hover/logo:opacity-100
                "
              />

              {/* =================================
                  LOGO
              ================================= */}

              <img
                src={client.image}
                alt={`${client.name} logo`}
                loading="lazy"
                className="
                  relative
                  z-10

                  max-h-[42px]
                  max-w-[115px]

                  object-contain

                  opacity-75

                  grayscale

                  transition-all
                  duration-500

                  group-hover/logo:scale-105
                  group-hover/logo:opacity-100
                  group-hover/logo:grayscale-0

                  dark:opacity-65
                  dark:brightness-110

                  sm:max-h-[48px]
                  sm:max-w-[135px]

                  lg:max-h-[52px]
                  lg:max-w-[145px]
                "
              />

              {/* =================================
                  BOTTOM HOVER INDICATOR
              ================================= */}

              <span
                className="
                  pointer-events-none

                  absolute
                  bottom-2
                  left-1/2

                  h-0.5
                  w-0

                  -translate-x-1/2

                  rounded-full

                  bg-[#D5D93B]

                  transition-all
                  duration-500

                  group-hover/logo:w-8
                "
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =========================================
          BOTTOM BRAND LINE
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
        <span
          className="
            h-px
            w-8

            bg-[#0F1039]/[0.12]

            dark:bg-white/10
          "
        />

        <span
          className="
            text-[8px]
            font-bold
            uppercase
            tracking-[0.25em]

            text-[#0F1039]/35

            dark:text-white/25
          "
        >
          Built on partnerships
        </span>

        <span
          className="
            h-px
            w-8

            bg-[#0F1039]/[0.12]

            dark:bg-white/10
          "
        />
      </div>
    </section>
  );
};

export default ClientLogos;