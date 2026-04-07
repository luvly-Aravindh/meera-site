import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import mgLogo from "./assets/footer.png";

export default function MGFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-r from-[#1f1f22] to-[#1a1a1d] text-[#8f8275]">
      <div className="mx-auto max-w-[1480px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <img
              src={mgLogo}
              alt="MG Meera Grover"
              className="h-14 sm:h-16 w-auto"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 font-gantari text-[15px] leading-[1.5] text-[#85786d]">
              Executive Leadership Coach · ICF Certified · 21+ Years Global Experience
            </p>
          </div>

          <div className="lg:text-right">
            <div className="flex items-center justify-start gap-3 lg:justify-end">
              <a
                href="https://www.instagram.com/meeragrover_official?igsh=M25mcHp3eW01MzVh"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#7d7064] text-[#8f8275] transition-colors duration-300 hover:text-[#f5811f] hover:border-[#f5811f]"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/meeragrover?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#7d7064] text-[#8f8275] transition-colors duration-300 hover:text-[#f5811f] hover:border-[#f5811f]"
              >
                <FaLinkedinIn className="h-4 w-4" />
              </a>
            </div>

          <nav className="mt-7 flex flex-col lg:flex-row gap-y-3 lg:gap-x-6 font-onest text-[15px] uppercase leading-none tracking-[0.02em] lg:justify-end">
  <Link to="/" className="transition-colors duration-300 hover:text-[#f5811f]">Home</Link>
  <Link to="/signature-programs" className="transition-colors duration-300 hover:text-[#f5811f]">Signature Programs</Link>
  <Link to="/why-work-with-me" className="transition-colors duration-300 hover:text-[#f5811f]">Why Work With Me</Link>
  <Link to="/meera-grover-effect" className="transition-colors duration-300 hover:text-[#f5811f]">MG Effect</Link>
  <Link to="/blogs" className="transition-colors duration-300 hover:text-[#f5811f]">Blog</Link>
</nav>

            <p className="mt-5 font-gantari text-[14px] text-[#84786d] text-center lg:text-right">
              &copy; {year}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
