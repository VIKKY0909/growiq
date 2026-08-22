import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../data/navigation.js";

const MobileMenu = ({ onGrow }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setExpandedSection(null);
  };

  const handleGrow = () => {
    setMenuOpen(false);
    setExpandedSection(null);
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
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* =========================================
          MOBILE MENU PANEL
      ========================================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleLinkClick}
              className="fixed inset-0 z-[80] bg-[#0F1039]/25 backdrop-blur-sm dark:bg-black/50"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed
                left-4
                right-4
                top-[78px]
                z-[90]
                max-h-[80vh]
                overflow-y-auto
                rounded-[24px]
                border
                border-[#0F1039]/10
                bg-white/95
                p-4
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
              <div className="mb-4 flex items-center justify-between px-2">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8F9415] dark:text-[#D5D93B]">
                    Navigation
                  </p>
                  <p className="mt-1 text-xs text-[#0F1039]/40 dark:text-white/40">
                    Explore Groowiq
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-[#D5D93B] shadow-[0_0_12px_rgba(213,217,59,.8)]" />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-1">
                {navLinks.map((item, idx) => (
                  <div key={item.id}>
                    {item.isDropdown ? (
                      <div>
                        {/* Dropdown Toggle Header */}
                        <button
                          type="button"
                          onClick={() => toggleSection(item.id)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/[0.04]"
                        >
                          <span className="text-sm font-semibold text-[#0F1039] dark:text-white">
                            {item.title}
                          </span>
                          <span className={`text-xs transition-transform duration-200 ${expandedSection === item.id ? "rotate-180 text-[#D5D93B]" : "text-gray-400"}`}>
                            ▼
                          </span>
                        </button>

                        {/* Dropdown items */}
                        <AnimatePresence>
                          {expandedSection === item.id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50/50 dark:bg-white/[0.02] rounded-xl ml-2 mt-1"
                            >
                              <ul className="py-2 px-2 space-y-1">
                                {item.dropdownItems.map((sub, sIdx) => (
                                  <li key={sIdx}>
                                    <Link
                                      to={sub.path}
                                      onClick={handleLinkClick}
                                      className="block px-4 py-2.5 text-[13px] font-medium text-gray-600 dark:text-gray-300 hover:text-[#D5D93B]"
                                    >
                                      {sub.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className="block rounded-xl px-4 py-3 hover:bg-gray-50 dark:hover:bg-white/[0.04]"
                      >
                        <span className="text-sm font-semibold text-[#0F1039] dark:text-white">
                          {item.title}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Action Button */}
              <div className="mt-4 border-t border-[#0F1039]/10 pt-4 dark:border-white/10">
                <button
                  type="button"
                  onClick={handleGrow}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D5D93B] px-5 py-3.5 text-sm font-bold text-[#0F1039] shadow-[0_10px_30px_rgba(213,217,59,0.20)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(213,217,59,0.30)]"
                >
                  Let's Grow →
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