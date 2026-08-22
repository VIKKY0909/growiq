import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../data/navigation.js";

const NavLinks = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // 'services' or 'industries'
  const navRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleToggle = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  const handleKeyDownToggle = (event, id) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleToggle(id);
    }
  };

  return (
    <nav ref={navRef} className="relative z-50">
      <ul className="flex items-center gap-8">
        {navLinks.map((item) => (
          <li key={item.id} className="relative py-2">
            {item.isDropdown ? (
              <div>
                <button
                  type="button"
                  onClick={() => handleToggle(item.id)}
                  onKeyDown={(e) => handleKeyDownToggle(e, item.id)}
                  aria-expanded={openDropdown === item.id}
                  aria-haspopup="true"
                  aria-controls={`dropdown-${item.id}`}
                  className="cursor-pointer text-[15px] font-semibold text-[#0F1039] dark:text-white hover:text-[#D5D93B] transition-all duration-300 flex items-center gap-1 focus:outline-none"
                >
                  {item.title}
                  <span
                    className={`text-[10px] opacity-70 transition-transform duration-300 ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {/* Dropdown menu */}
                <div
                  id={`dropdown-${item.id}`}
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white dark:bg-[#0F1039] border border-gray-200 dark:border-white/10 p-3 shadow-xl transition-all duration-300 ${
                    openDropdown === item.id
                      ? "opacity-100 visible translate-y-0 scale-100 pointer-events-auto"
                      : "opacity-0 invisible -translate-y-2 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="space-y-1.5">
                    {item.dropdownItems.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2.5 text-[13px] font-medium text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#D5D93B] transition-all duration-200"
                        >
                          {sub.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                to={item.path}
                className="text-[15px] font-semibold text-[#0F1039] dark:text-white hover:text-[#D5D93B] transition-all duration-300"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;