import React from "react";

const cards = Array.from({ length: 12 }).map(() => ({
  tag: "EXECUTIVE PRESENCE",
  title: "Why Competence Alone Won't Get You Promoted",
  description:
    "Being brilliant at your job is necessary - but it's not sufficient. Here's the visibility gap that's holding you back.",
}));

function InsightCard({ tag, title, description }) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-[#dcd5cf] bg-[#FDF5EF]">
      <div className="h-[150px] sm:h-[165px] lg:h-[180px] bg-[#edd4af]" />

      <div className="px-6 py-5 sm:px-7 sm:py-6 bg-[#f3f1ef]">
        <p className="font-nicky uppercase tracking-[0.14em] text-[11px] font-bold text-[#FC7900]">
          {tag}
        </p>

        <h3 className="mt-2 font-elmessiri text-[#242321] font-semibold text-[20px] leading-[1.28]">
          {title}
        </h3>

        <p className="mt-3 font-nicky text-[#7e746c] text-[14px] leading-[1.56]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function New() {
  return (
    <section className="w-full bg-[#FDF5EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <header className="text-center">
          <p className="font-nickySans uppercase tracking-[0.16em] text-[12px] font-medium text-[#f5811f]">
            IDEAS & INSIGHTS
          </p>

          <h2 className="mt-3 font-nickySans text-[44px] sm:text-[54px] lg:text-[62px] leading-[1.06] text-[#232220] font-semibold">
            Inspire Your{" "}
            <span className="text-[#f5811f] font-elmessiri font-normal">
              Next Move
            </span>
          </h2>
        </header>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <InsightCard
              key={idx}
              tag={card.tag}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}