import React from "react";
import deskBg from "../src/assets/bg-image-1.png";

export default function RealityCheck() {
  const items = [
    {
      text:
        "61% of IT professionals say they feel stuck in their current roles, and most don’t know how to break through.",
      source: "LinkedIn Workplace Report",
    },
    {
      text:
        "Over 50% of mid-career professionals report struggling with low confidence and visibility, despite delivering results.",
      source: "Harvard Business Review",
    },
    {
      text:
        "Women who receive leadership coaching are 3x more likely to be promoted within a year.",
      source: "International Coaching Federation",
    },
  ];

  return (
    <section className="relative w-full">
      {/* Background */}
      <div className="relative overflow-hidden md:h-[780px]">
        <img
          src={deskBg}
          alt="Office desk background"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        {/* dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/45" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16 flex flex-col items-center md:h-full md:justify-center">
          {/* Title */}
          <h2 className="text-center font-extrabold uppercase text-white tracking-wide text-[26px] md:text-[46px] font-onest leading-tight">
            A Quick Reality Check for the Ambitious
          </h2>

          {/* Cards */}
          <div className="mt-10 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <article
                key={i}
                className="bg-white/95 backdrop-blur-sm p-6 sm:p-7 rounded-md border border-neutral-200 shadow-[0_10px_24px_rgba(0,0,0,0.10)] flex flex-col h-full min-h-[220px]"
              >
                <p className="text-[16px] sm:text-[20px] leading-relaxed text-neutral-900 font-gantari flex-1">
                  “{it.text}”
                </p>
                <p className="mt-0 lg:mt-5 text-[15px] sm:text-[16px] lg:text-[17px] text-neutral-900 font-semibold text-center lg:text-left">
                  {it.source}
                </p>
              </article>
            ))}
          </div>

          {/* CTA space if needed */}
          {/* <div className="mt-10">
            <button className="px-8 py-3 bg-white text-neutral-900 rounded-md font-semibold shadow">
              Book your breakthrough call
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
