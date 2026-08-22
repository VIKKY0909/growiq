import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../../data/navigation.js";

const NavLinks = () => {
  return (
    <nav className="relative z-50">
      <ul className="flex items-center gap-8">
        {navLinks.map((item) => (
          <li key={item.id} className="relative group py-2">
            {item.isDropdown ? (
              <div>
                <span className="cursor-pointer text-[15px] font-semibold text-[#0F1039] dark:text-white hover:text-[#D5D93B] transition-all duration-300 flex items-center gap-1">
                  {item.title}
                  <span className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform duration-300">▼</span>
                </span>
                
                {/* Dropdown menu */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white dark:bg-[#0F1039] border border-gray-200 dark:border-white/10 p-3 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                  <ul className="space-y-1.5">
                    {item.dropdownItems.map((sub, idx) => (
                      <li key={idx}>
                        <Link
                          to={sub.path}
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