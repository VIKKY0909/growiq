
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const {darkMode} = useTheme()
  const logo = darkMode ? "/logo/logo.png" : "/logo/logo2.png"

  const navigation = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Why Us", href: "#why-us" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Process", href: "#process" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/groowiq/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[17px] w-[17px]"
        >
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2 2 0 1 0 5.25 7a2 2 0 0 0 0-4ZM20.44 13.42c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.86 1.09-3.35 1.86V8.5H9.41V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.71 1.86 3.05V20h3.37l.28-6.58Z" />
        </svg>
      ),
    },

    {
      name: "Instagram",
      href: "https://www.instagram.com/groowiq?igsh=MTd3NTRmc2xkcG82dg==",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-[18px] w-[18px]"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },

    {
      name: "X",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-[17px] w-[17px]"
        >
          <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.4L6.47 22H3.36l7.24-8.28L3 2h6.4l4.42 5.83L18.9 2Zm-1.1 17.75h1.73L8.48 4.12H6.62L17.8 19.75Z" />
        </svg>
      ),
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden

        border-t
        border-[#0F1039]/[0.10]

        bg-white
        text-[#0F1039]

        transition-colors
        duration-500

        dark:border-white/[0.08]
        dark:bg-[#0F1039]
        dark:text-white
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-[#D5D93B]/[0.055]

          blur-[120px]

          dark:bg-[#D5D93B]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0

          h-[350px]
          w-[350px]

          rounded-full

          bg-[#5b5ce2]/[0.035]

          blur-[120px]

          dark:bg-[#5b5ce2]/[0.055]
        "
      />

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-7xl

          px-5
          py-14

          sm:px-6
          sm:py-16

          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-12

            md:grid-cols-[1.5fr_1fr_1fr]

            lg:gap-16
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-md">
            {/* LOGO */}

           <a
  href="#home"
  aria-label="Groowiq Home"
  className="
    inline-flex
    items-center
    transition-transform
    duration-300
    hover:scale-[1.03]
  "
>
  <img
    src={logo}
    alt="Groowiq"
    className="
      h-14
      w-auto
      max-w-[230px]
      object-contain

      sm:h-16
      sm:max-w-[250px]

      lg:h-20
      lg:max-w-[280px]
    "
  />
</a>

            {/* BRAND LABEL */}

            <p
              className="
                mt-1.5

                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]

                text-[#0F1039]/40

                dark:text-white/35
              "
            >
              AI-powered growth partner
            </p>

            {/* DESCRIPTION */}

            <p
              className="
                mt-6
                max-w-sm

                text-sm
                font-medium
                leading-6

                text-[#0F1039]/60

                dark:text-white/55

                sm:text-[15px]
                sm:leading-7
              "
            >
              We build brands that people can't ignore. An AI-powered
              growth and branding partner built for ambitious companies.
            </p>

            {/* BRAND STATEMENT */}

            <div
              className="
                mt-7

                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <span
                className="
                  h-[2px]
                  w-8
                  shrink-0

                  rounded-full

                  bg-[#D5D93B]
                "
              />

              <span
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]

                  text-[#0F1039]/35

                  dark:text-white/30
                "
              >
                Strategy × Creativity × Growth
              </span>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2
              gap-8
            "
          >
            {navigation.map((group) => (
              <div key={group.title}>
                <p
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.28em]

                    text-[#8F9415]

                    dark:text-[#D5D93B]
                  "
                >
                  {group.title}
                </p>

                <div
                  className="
                    mt-5

                    flex
                    flex-col
                    gap-3.5
                  "
                >
                  {group.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="
                        group/link

                        flex
                        w-fit
                        items-center
                        gap-1.5

                        text-[13px]
                        font-semibold

                        text-[#0F1039]/60

                        transition-all
                        duration-300

                        hover:translate-x-1
                        hover:text-[#8F9415]

                        dark:text-white/55

                        dark:hover:text-[#D5D93B]
                      "
                    >
                      {link.label}

                      <ArrowUpRight
                        size={12}
                        className="
                          -translate-x-1

                          opacity-0

                          transition-all
                          duration-300

                          group-hover/link:translate-x-0
                          group-hover/link:opacity-100
                        "
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* =================================================
              CONNECT
          ================================================= */}

          <div className="md:justify-self-end">
            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.28em]

                text-[#8F9415]

                dark:text-[#D5D93B]
              "
            >
              Connect
            </p>

            {/* SOCIAL ICONS */}

            <div
              className="
                mt-5

                flex
                items-center
                gap-3
              "
            >
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target= {social.href !== "#" ? "_blank" : undefined}
                  rel= {social.href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={social.name}
                  title={social.name}
                  whileHover={{
                    y: -4,
                    scale: 1.06,
                  }}
                  whileTap={{
                    scale: 0.94,
                  }}
                  transition={{
                    duration: 0.2,
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
                    border-[#0F1039]/[0.12]

                    bg-[#0F1039]/[0.025]

                    text-[#0F1039]/60

                    shadow-[0_8px_25px_rgba(15,16,57,0.04)]

                    transition-all
                    duration-300

                    hover:border-[#D5D93B]/70
                    hover:bg-[#D5D93B]/10
                    hover:text-[#8F9415]
                    hover:shadow-[0_10px_30px_rgba(213,217,59,0.15)]

                    dark:border-white/[0.10]
                    dark:bg-white/[0.035]
                    dark:text-white/60
                    dark:shadow-none

                    dark:hover:border-[#D5D93B]/55
                    dark:hover:bg-[#D5D93B]/10
                    dark:hover:text-[#D5D93B]
                  "
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* BACK TO TOP */}

            <button
              type="button"
              onClick={scrollToTop}
              className="
                group/top

                mt-7

                flex
                items-center
                gap-3

                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]

                text-[#0F1039]/50

                transition-colors
                duration-300

                hover:text-[#8F9415]

                dark:text-white/45

                dark:hover:text-[#D5D93B]
              "
            >
              <span>Back to top</span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#0F1039]/[0.12]

                  bg-[#0F1039]/[0.025]

                  transition-all
                  duration-300

                  group-hover/top:-translate-y-1
                  group-hover/top:border-[#D5D93B]/60
                  group-hover/top:bg-[#D5D93B]/10

                  dark:border-white/[0.10]
                  dark:bg-white/[0.035]

                  dark:group-hover/top:border-[#D5D93B]/50
                  dark:group-hover/top:bg-[#D5D93B]/10
                "
              >
                <ArrowUp size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            my-10
            h-px
            w-full

            bg-[#0F1039]/[0.08]

            dark:bg-white/[0.08]

            sm:my-12
          "
        />

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5

            text-center

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:text-left
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-[10px]
              font-medium

              text-[#0F1039]/40

              dark:text-white/35
            "
          >
            © {new Date().getFullYear()} GROOWIQ. All rights reserved.
          </p>

          {/* LEGAL */}

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center

              gap-x-6
              gap-y-3

              sm:justify-end
            "
          >
            <Link
              to="/privacy-policy"
              className="
                text-[10px]
                font-semibold

                text-[#0F1039]/40

                transition-colors
                duration-300

                hover:text-[#8F9415]

                dark:text-white/35

                dark:hover:text-[#D5D93B]
              "
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="
                text-[10px]
                font-semibold

                text-[#0F1039]/40

                transition-colors
                duration-300

                hover:text-[#8F9415]

                dark:text-white/35

                dark:hover:text-[#D5D93B]
              "
            >
              Terms of Service
            </Link>

            <Link
              to="/contact"
              className="
                text-[10px]
                font-semibold

                text-[#0F1039]/40

                transition-colors
                duration-300

                hover:text-[#8F9415]

                dark:text-white/35

                dark:hover:text-[#D5D93B]
              "
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;