// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// const navItems = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "services",
//     title: "Services",
//   },
//   {
//     id: "why-us",
//     title: "Why Us",
//   },
//   {
//     id: "process",
//     title: "Process",
//   },
//   {
//     id: "testimonials",
//     title: "Testimonials",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },
// ];

// const MobileMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleNavigation = (id) => {
//     setIsOpen(false);

//     setTimeout(() => {
//       const section = document.getElementById(id);

//       if (section) {
//         section.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }, 100);
//   };

//   return (
//     <>
//       {/* =========================================
//           MOBILE MENU BUTTON
//       ========================================= */}

//       <button
//         type="button"
//         aria-label={isOpen ? "Close menu" : "Open menu"}
//         aria-expanded={isOpen}
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="
//           relative
//           z-[100]
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-full

//           border
//           border-[#0F1039]/10

//           bg-white/80
//           text-[#0F1039]

//           shadow-[0_8px_25px_rgba(15,16,57,0.08)]

//           backdrop-blur-xl

//           transition-all
//           duration-300

//           hover:border-[#D5D93B]/60
//           hover:bg-[#D5D93B]/10

//           dark:border-white/10
//           dark:bg-[#11133f]/80
//           dark:text-white
//           dark:hover:border-[#D5D93B]/50
//           dark:hover:bg-[#D5D93B]/10

//           lg:hidden
//         "
//       >
//         <AnimatePresence mode="wait" initial={false}>
//           {isOpen ? (
//             <motion.div
//               key="close"
//               initial={{
//                 opacity: 0,
//                 rotate: -90,
//                 scale: 0.7,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: 90,
//                 scale: 0.7,
//               }}
//               transition={{
//                 duration: 0.2,
//               }}
//             >
//               <X size={22} strokeWidth={2} />
//             </motion.div>
//           ) : (
//             <motion.div
//               key="menu"
//               initial={{
//                 opacity: 0,
//                 rotate: 90,
//                 scale: 0.7,
//               }}
//               animate={{
//                 opacity: 1,
//                 rotate: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 rotate: -90,
//                 scale: 0.7,
//               }}
//               transition={{
//                 duration: 0.2,
//               }}
//             >
//               <Menu size={22} strokeWidth={2} />
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </button>

//       {/* =========================================
//           MOBILE MENU OVERLAY + DRAWER
//       ========================================= */}

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Overlay */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.25 }}
//               onClick={() => setIsOpen(false)}
//               className="
//                 fixed
//                 inset-0
//                 z-[80]

//                 bg-[#0F1039]/30
//                 backdrop-blur-sm

//                 dark:bg-black/50
//               "
//             />

//             {/* Menu Panel */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -20,
//                 scale: 0.98,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: -20,
//                 scale: 0.98,
//               }}
//               transition={{
//                 duration: 0.3,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 fixed
//                 left-4
//                 right-4
//                 top-[78px]
//                 z-[90]

//                 overflow-hidden
//                 rounded-[24px]

//                 border
//                 border-[#0F1039]/10

//                 bg-white/95

//                 p-3

//                 shadow-[0_25px_80px_rgba(15,16,57,0.18)]

//                 backdrop-blur-2xl

//                 dark:border-white/10
//                 dark:bg-[#11133f]/95
//                 dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]

//                 sm:left-6
//                 sm:right-6
//                 sm:top-[86px]

//                 lg:hidden
//               "
//             >
//               {/* Menu Header */}

//               <div
//                 className="
//                   mb-2
//                   flex
//                   items-center
//                   justify-between
//                   px-3
//                   py-2
//                 "
//               >
//                 <div>
//                   <p
//                     className="
//                       text-[9px]
//                       font-bold
//                       uppercase
//                       tracking-[0.25em]
//                       text-[#8F9415]

//                       dark:text-[#D5D93B]
//                     "
//                   >
//                     Navigation
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-xs
//                       text-[#0F1039]/40

//                       dark:text-white/40
//                     "
//                   >
//                     Explore Groowiq
//                   </p>
//                 </div>

//                 <span
//                   className="
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#D5D93B]
//                     shadow-[0_0_12px_rgba(213,217,59,.8)]
//                   "
//                 />
//               </div>

//               {/* Navigation Items */}

//               <nav className="space-y-1">
//                 {navItems.map((item, index) => (
//                   <motion.button
//                     key={item.id}
//                     type="button"
//                     onClick={() => handleNavigation(item.id)}
//                     initial={{
//                       opacity: 0,
//                       x: -12,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     transition={{
//                       duration: 0.25,
//                       delay: index * 0.04,
//                     }}
//                     className="
//                       group
//                       flex
//                       w-full
//                       items-center
//                       justify-between
//                       rounded-xl

//                       px-4
//                       py-3.5

//                       text-left

//                       transition-all
//                       duration-300

//                       hover:bg-[#D5D93B]/10

//                       dark:hover:bg-white/[0.06]
//                     "
//                   >
//                     <span
//                       className="
//                         text-sm
//                         font-semibold

//                         text-[#0F1039]/80

//                         transition-colors
//                         duration-300

//                         group-hover:text-[#8F9415]

//                         dark:text-white/80
//                         dark:group-hover:text-[#D5D93B]
//                       "
//                     >
//                       {item.title}
//                     </span>

//                     <span
//                       className="
//                         h-1.5
//                         w-1.5
//                         rounded-full

//                         bg-[#0F1039]/15

//                         transition-all
//                         duration-300

//                         group-hover:bg-[#D5D93B]
//                         group-hover:scale-125

//                         dark:bg-white/15
//                       "
//                     />
//                   </motion.button>
//                 ))}
//               </nav>

//               {/* CTA */}

//               <div
//                 className="
//                   mt-3
//                   border-t
//                   border-[#0F1039]/10
//                   pt-3

//                   dark:border-white/10
//                 "
//               >
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setIsOpen(false);

//                     setTimeout(() => {
//                       const section =
//                         document.getElementById("contact");

//                       if (section) {
//                         section.scrollIntoView({
//                           behavior: "smooth",
//                           block: "start",
//                         });
//                       }
//                     }, 100);
//                   }}
//                   className="
//                     flex
//                     w-full
//                     items-center
//                     justify-center
//                     gap-2

//                     rounded-xl

//                     bg-[#D5D93B]

//                     px-5
//                     py-3.5

//                     text-sm
//                     font-bold
//                     text-[#0F1039]

//                     shadow-[0_10px_30px_rgba(213,217,59,0.20)]

//                     transition-all
//                     duration-300

//                     hover:-translate-y-0.5
//                     hover:shadow-[0_15px_35px_rgba(213,217,59,0.30)]
//                   "
//                 >
//                   Let's Grow

//                   <span className="text-base">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default MobileMenu;



import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "why-us",
    title: "Why Us",
  },
  {
    id: "process",
    title: "Process",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const MobileMenu = ({ onGrow }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  const handleGrow = () => {
    // Close mobile menu
    setMenuOpen(false);

    // Open existing LeadModal from Navbar/App
    if (onGrow) {
      setTimeout(() => {
        onGrow();
      }, 150);
    }
  };

  return (
    <>
      {/* =========================================
          MOBILE MENU BUTTON
      ========================================= */}

      <button
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
        className="
          relative
          z-[100]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full

          border
          border-[#0F1039]/10

          bg-white/90
          text-[#0F1039]

          shadow-[0_8px_25px_rgba(15,16,57,0.08)]

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-[#D5D93B]/60
          hover:bg-[#D5D93B]/10

          dark:border-white/10
          dark:bg-[#11133f]/90
          dark:text-white

          dark:hover:border-[#D5D93B]/50
          dark:hover:bg-[#D5D93B]/10

          lg:hidden
        "
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.div
              key="close"
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-[80]

                bg-[#0F1039]/25
                backdrop-blur-sm

                dark:bg-black/50
              "
            />

            {/* Menu Panel */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                left-4
                right-4
                top-[78px]

                z-[90]

                overflow-hidden
                rounded-[24px]

                border
                border-[#0F1039]/10

                bg-white/95

                p-3

                shadow-[0_25px_80px_rgba(15,16,57,0.18)]

                backdrop-blur-2xl

                dark:border-white/10
                dark:bg-[#11133f]/95
                dark:shadow-[0_30px_80px_rgba(0,0,0,0.45)]

                sm:left-6
                sm:right-6
                sm:top-[84px]

                lg:hidden
              "
            >
              {/* Header */}

              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-between
                  px-3
                  py-2
                "
              >
                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.25em]

                      text-[#8F9415]

                      dark:text-[#D5D93B]
                    "
                  >
                    Navigation
                  </p>

                  <p
                    className="
                      mt-1
                      text-xs

                      text-[#0F1039]/40

                      dark:text-white/40
                    "
                  >
                    Explore Groowiq
                  </p>
                </div>

                <span
                  className="
                    h-2
                    w-2
                    rounded-full

                    bg-[#D5D93B]

                    shadow-[0_0_12px_rgba(213,217,59,.8)]
                  "
                />
              </div>

              {/* Navigation */}

              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavigation(item.id)}
                    initial={{
                      opacity: 0,
                      x: -12,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                    }}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between

                      rounded-xl

                      px-4
                      py-3.5

                      text-left

                      transition-all
                      duration-300

                      hover:bg-[#D5D93B]/10

                      dark:hover:bg-white/[0.06]
                    "
                  >
                    <span
                      className="
                        text-sm
                        font-semibold

                        text-[#0F1039]/80

                        transition-colors
                        duration-300

                        group-hover:text-[#8F9415]

                        dark:text-white/80
                        dark:group-hover:text-[#D5D93B]
                      "
                    >
                      {item.title}
                    </span>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full

                        bg-[#0F1039]/15

                        transition-all
                        duration-300

                        group-hover:scale-125
                        group-hover:bg-[#D5D93B]

                        dark:bg-white/15
                      "
                    />
                  </motion.button>
                ))}
              </nav>

              {/* =========================================
                  LET'S GROW
              ========================================= */}

              <div
                className="
                  mt-3
                  border-t
                  border-[#0F1039]/10
                  pt-3

                  dark:border-white/10
                "
              >
                <button
                  type="button"
                  onClick={handleGrow}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    bg-[#D5D93B]

                    px-5
                    py-3.5

                    text-sm
                    font-bold
                    text-[#0F1039]

                    shadow-[0_10px_30px_rgba(213,217,59,0.20)]

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:shadow-[0_15px_35px_rgba(213,217,59,0.30)]
                  "
                >
                  Let's Grow

                  <span className="text-base">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;