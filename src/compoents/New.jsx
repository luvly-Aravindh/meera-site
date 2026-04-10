import React from "react";
import { Link } from "react-router-dom";

import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";

const cards = [
  {
    tag: "NEW BEGINNING",
    title: "A New Beginning Rooted in Courage and Gratitude",
    description:
      "Stepping away from the corporate world to follow a deeper calling rooted in faith, courage, and vision.",
    image: blog1,
    slug: "new-beginning-rooted-in-courage-and-gratitude",
  },
  {
    tag: "CAREER TRANSITION",
    title: "Stepping Into Purpose After Two Decades of Corporate Growth",
    description:
      "From corporate leadership to purpose-driven coaching - a journey shaped by clarity, courage, and gratitude.",
    image: blog2,
    slug: "stepping-into-purpose-after-two-decades-of-corporate-growth",
  },
  {
    tag: "PERSONAL GROWTH",
    title: "From Experience to Evolution",
    description:
      "Some experiences stay beyond the moment - reshaping perspective, identity, and long-term impact.",
    image: blog3,
    slug: "from-experience-to-evolution",
  },
];

function InsightCard({ tag, title, description, image, slug }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e5ded8] bg-white shadow-sm hover:shadow-xl transition-all duration-300">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] sm:h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] tracking-widest font-semibold text-[#f5811f] uppercase rounded-full">
          {tag}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6 bg-[#fdfaf7]">
        <h3 className="font-elmessiri text-[20px] sm:text-[22px] text-[#000] font-semibold leading-snug">
          {title}
        </h3>

        <p className="mt-3 text-[#000] text-base leading-relaxed">
          {description}
        </p>

        {/* CTA */}
        <Link
          to={`/blogs/${slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[#f5811f] font-semibold text-base group-hover:gap-3 transition-all"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}

export default function New() {
  return (
    <section className="w-full bg-[#FDF5EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

        {/* HEADING */}
        <header className="text-center max-w-2xl mx-auto">
          <p className="uppercase tracking-[0.18em] text-[12px] font-medium text-[#f5811f]">
            Ideas & Insights
          </p>

          <h2 className="mt-4 text-[34px] sm:text-[46px] lg:text-[58px] leading-tight font-semibold text-[#232220]">
            Inspire Your{" "}
            <span className="text-[#f5811f] font-elmessiri font-normal">
              Next Move
            </span>
          </h2>
        </header>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <InsightCard key={idx} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}