import React from "react";
import bgDesktop from "../assets/black.jpg";
import bgMobile from "../assets/black-mob.jpg";

export default function Hero() {
  return (
    <section
      className="
        relative w-full font-sans
        min-h-[160svh]
        sm:min-h-[110svh]
        lg:min-h-[85svh]
      "
    >
      {/* ===== Background ===== */}
      <picture>
        <source srcSet={bgMobile} media="(max-width: 767px)" />
        <img
          src={bgDesktop}
          alt="Leadership coaching banner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* Overlay */}
      <div className="absolute inset-0" />

      {/* ===== Content ===== */}
      <div
        className="
          relative z-[2]
          max-w-[105rem] mx-auto
          px-3 sm:px-10 lg:px-12
          py-10 sm:py-16 lg:py-16
          grid grid-cols-1 md:grid-cols-2
          gap-8 sm:gap-10 lg:gap-16
          items-start md:items-center
        "
      >
        {/* LEFT TEXT */}
        <div className="text-white md:pr-10 break-words">
          <h1 className="text-[23px] sm:text-[36px] lg:text-[40px] text-[#353535] font-extrabold leading-snug text-center md:text-left">
            <span className="block">Executive Leadership Coaching</span>
            <span className="block">to Build Influence, Presence,</span>
            <span className="block">and <span
              className="
                font-normal italic font-brewfine text-[#353535]
                text-[25px] sm:text-[40px] lg:text-[40px]
                leading-[1.1] tracking-[0.5px]
              "
            >
Impact            </span></span>
            
          </h1>

          <p className="mt-5 text-[15px] sm:text-[20px] leading-relaxed text-[#353535] max-w-[700px] mx-auto md:mx-0 text-center md:text-left font-gantari">
           Ready to be seen, heard, and unstoppable in your leadership? I help ambitious leaders rise through leadership & career coaching, strengthening confidence, influence, and a clear brand & identity. 
          </p>

          <p className="mt-5 text-[15px] sm:text-[20px] leading-relaxed text-[#353535] max-w-[700px] mx-auto md:mx-0 text-center md:text-left font-gantari">
           With 21+ years across global organizations, I help you go from overlooked to undeniable.

          </p>

          {/* Button */}
          <div className="mt-8 flex flex-col items-center md:items-start">
            <button
              type="button"
              onClick={() => {
                setTimeout(() => {
                  document
                    .getElementById("your-program")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="
                group relative overflow-hidden
                inline-flex items-center justify-center
                rounded-md px-6 sm:px-10 py-4 sm:py-5
                text-sm sm:text-[20px] font-bold
                bg-white text-[#212D38]
                border border-[#f5f5f5]
                shadow-[0_6px_0_#ea7c22]
                transition-all duration-500
                hover:scale-105 hover:-translate-y-1
                active:translate-y-[2px]
                max-w-full text-center
              "
            >
              <span className="relative z-10">
             Step Into Your Power
              </span>

              <span
                className="
                  absolute top-0 -left-[60%] w-[50%] h-full
                  bg-[#ea7c22]/40
                  transition-all duration-[1000ms]
                  [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                  group-hover:left-[130%] group-hover:opacity-0
                "
              />

              <span
                className="
                  absolute inset-0 bg-[#ea7c22]/10
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                "
              />
            </button>

            <p className="mt-4 lg:mt-6 text-base text-[#353535] text-center md:text-left font-gantari">
1,200+ senior leaders coached | 7,500+ professionals trained globally | 21+ years in global L&D leadership            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative flex items-center justify-center md:justify-end" />
      </div>
    </section>
  );
}
