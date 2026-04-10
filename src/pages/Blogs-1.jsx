import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

function InsightCard({ slug, tag, title, description, image }) {
  return (
    <article className="group overflow-hidden rounded-[10px] border border-[#dcd5cf] bg-[#FDF5EF] transition duration-300 hover:shadow-xl">
      <div className="h-auto overflow-hidden">
        <Link to={`/blogs/${slug}`} aria-label={`Read ${title}`}>
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className="bg-[#f3f1ef] px-6 py-5 sm:px-7 sm:py-6">
        <p className="font-nicky text-[11px] font-bold uppercase tracking-[0.14em] text-[#FC7900]">
          {tag}
        </p>

        <h3 className="mt-2 font-elmessiri text-[20px] font-semibold leading-[1.3] text-[#242321] transition group-hover:text-[#f5811f]">
          {title}
        </h3>

        <p className="mt-3 font-nicky text-[14px] leading-[1.56] text-[#7e746c]">
          {description}
        </p>

        <div className="mt-4">
          <Link
            to={`/blogs/${slug}`}
            className="text-sm font-semibold text-[#f5811f]"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function New() {
  return (
    <section className="w-full bg-[#FDF5EF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <header className="text-center">
          <p className="font-nickySans text-[12px] font-medium uppercase tracking-[0.16em] text-[#f5811f]">
            IDEAS & INSIGHTS
          </p>

          <h2 className="mt-3 font-nickySans text-[44px] font-semibold leading-[1.06] text-[#232220] sm:text-[54px] lg:text-[62px]">
            Inspire Your{" "}
            <span className="font-elmessiri font-normal text-[#f5811f]">
              Next Move
            </span>
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((card) => (
            <InsightCard key={card.slug} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
