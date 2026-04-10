import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Signature Programs", to: "/signature-programs" },
  { label: "Why Work With Me", to: "/why-work-with-me" },
  { label: "MG Effect", to: "/meera-grover-effect" },
  { label: "Blog", to: "/blogs" },
];

export default function HeaderStrip() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#f3f1ef] border-b border-[#d8d1cc] sticky top-0 z-50">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        {/* Top Row */}
        <div className="flex items-center justify-between py-3 md:py-4">
          
          {/* LOGO */}
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src={logo}
              alt="Meera Grover Logo"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-[12px] lg:text-lg uppercase tracking-[0.08em] font-medium transition ${
                    isActive
                      ? "text-[#4f443f]"
                      : "text-black hover:text-[#4f443f]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 border border-[#cfc5be] rounded"
          >
            <span
              className={`block w-5 h-[2px] bg-[#776760] transition-all ${
                isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#776760] my-[5px] transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[#776760] transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[300px] pb-4" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-2 border-t border-[#e5dfda]">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[13px] uppercase tracking-[0.08em] font-medium ${
                    isActive
                      ? "text-[#4f443f]"
                      : "text-[#776760]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}