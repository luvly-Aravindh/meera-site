import React from "react";
/* replace with your real path & file (svg/png/webp) */
import mgLogo from "../src/assets/footer.png";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function MGFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1b1b1b] text-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 text-center">
        {/* MG mark (image) + brand text */}
        <div>
          <img
            src={mgLogo}
            alt="MG - Meera Grover"
            className="mx-auto h-12 sm:h-14 w-auto"
            loading="lazy"
            decoding="async"
          />
          
        </div>

        {/* Links line */}
        <nav className="mt-6 text-[11px] sm:text-[16px] uppercase tracking-[0.3em] text-white/75">
          <a href="#" className="hover:text-white font-gantari">Meera Grover</a>
          <span className="mx-2 text-white/40">|</span>
          <a href="#career-results" className="hover:text-white font-gantari">Career Results</a>
          <span className="mx-2 text-white/40">|</span><br className="block sm:hidden"/>
          <a href="#terms" className="hover:text-white font-gantari">Terms of Service</a>

          
        </nav>

        {/* Copyright */}
        <div className="mt-3 text-[12px] lg:text-[16px] text-white/60">
          © {year}. All Rights Reserved.
        </div>

        <div className="mt-8 flex gap-6 items-center justify-center">
                    <a
                      href="https://www.instagram.com/meeragrover_official?igsh=M25mcHp3eW01MzVh"
                      className="text-white hover:text-[#ea7c22] transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/meeragrover?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      className="text-white hover:text-[#ea7c22] transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="w-6 h-6" />
                    </a>
                  </div>
      </div>
    </footer>
  );
}
