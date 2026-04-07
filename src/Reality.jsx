import React from "react";
import deskBg from "../src/assets/bg-image-1.png";

export default function RealityCheck() {
  const items = [
    {
      text:
        "61% of IT professionals say they feel stuck in their current roles, and most don’t know how to break through.",
      source: "LINKEDIN WORKPLACE REPORT",
    },
    {
      text:
        "Over 50% of mid-career professionals report struggling with low confidence and visibility.",
      source: "HARVARD BUSINESS REVIEW",
    },
    {
      text:
        "Women who receive leadership coaching are 3x more likely to be promoted within a year.",
      source: "INTERNATIONAL COACHING FEDERATION",
    },
  ];

  return (
   <section className="relative w-full mt-10">
  {/* Background */}
  <div className="relative  w-full">
    <img
      src={deskBg}
      alt="Audience background"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* overlay */}
    <div className="absolute inset-0 bg-black/20" />

    {/* Content */}
    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center py-20">
      
      {/* Heading */}
      <h2 className="text-white text-center font-bold text-[28px] md:text-[44px] leading-tight font-nickySans">
        A Quick Reality Check for{" "}
        <span className="text-[#F47A0B] font-elmessiri">THE AMBITIOUS</span>
      </h2>

      {/* Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f3f3] p-8 flex flex-col justify-between min-h-[180px]"
          >
            <p className="text-gray-700 text-[15px] leading-relaxed">
              {item.text}
            </p>

            <span className="mt-6 text-[12px] font-semibold text-[#FF7200] tracking-wider uppercase">
              {item.source}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
}