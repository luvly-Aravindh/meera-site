import React from "react";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#FC7900]">
          Blog
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#242321]">
          Blog not found
        </h1>
        <Link
          to="/blogs"
          className="mt-8 inline-flex text-sm font-semibold text-[#f5811f]"
        >
          Back to Blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-[#FDF5EF] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          to="/blogs"
          className="inline-flex text-sm font-semibold uppercase tracking-[0.18em] text-[#FC7900]"
        >
          Back to Blogs
        </Link>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#FC7900]">
          {blog.tag}
        </p>

        <h1 className="mt-4 font-elmessiri text-4xl leading-tight text-[#242321] sm:text-5xl">
          {blog.title}
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-7 text-[#6f665f]">
          {blog.description}
        </p>

        <div className="mt-10 overflow-hidden rounded-[18px]">
          <img
            src={blog.image}
            alt={blog.title}
            className="h-[260px] w-full object-contain sm:w-[400px] sm:h-[400px]"
          />
        </div>

        <div className="mt-10 space-y-6 text-base leading-8 text-[#3b3734]">
          {blog.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
