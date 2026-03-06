import React from "react";
import groupImage from "../assets/g-1.png";

const GREEN = "#6DB54A";

export default function LeadershipTrust() {
  return (
    <section className="w-full bg-white py-10 lg:py-24">
      <div className="max-w-[90rem] mx-auto px-6 lg:px-10">
        {/* Heading block centered like ref */}
        <header className="text-center">
          <h2 className="text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-tight text-neutral-900">
            Why Hundreds of Leaders Trust Me to Rewrite Their
          </h2>
          <p
            className="mt-1 italic font-brewfine text-[34px] sm:text-[40px] lg:text-[46px] leading-tight"
            style={{ color: "#70A636"}}
          >
            Life and Career Trajectory
          </p>
        </header>

        {/* 2-col content like the screenshot */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0 items-start">
     {/* LEFT: Image */}
<div className="order-1 flex items-stretch">
  <img
    src={groupImage}
    alt="Leaders group"
    className="w-full max-w-[580px] lg:w-fit lg:h-full rounded-[12px] object-cover shadow-sm h-full"
    loading="lazy"
  />
</div>


          {/* RIGHT: Copy */}
          <div className="order-2 md:pl-2">
            <div className="text-[15px] sm:text-[20px] leading-[1.75] text-neutral-700 font-gantari">
              <p>
                Over the last two decades, I’ve trained and coached <br className="hidden sm:block"/> hundreds of ambitious
                professionals and witnessed <br className="hidden sm:block"/> one powerful truth: when you learn to lead with<br className="hidden sm:block"/>
                presence, clarity, and authenticity, the recognition and <br className="hidden sm:block"/>opportunities you
                deserve start flowing toward you.
              </p>

              <p className="mt-5">
                I don’t believe in one-size-fits-all leadership advice.<br className="hidden sm:block"/> My approach blends{" "}
                <strong>NLP</strong>, neuroscience, and<br className="hidden sm:block"/> leadership psychology designed for deep,
                human <br className="hidden sm:block"/>transformation, not quick fixes.
              </p>
            </div>

            <h3 className="mt-6 text-[16px] sm:text-[20px] font-extrabold text-neutral-900">
              I’ll help you:
            </h3>

            {/* Bullets like the mock (small dots, tidy spacing) */}
            <ul className="mt-3 list-disc list-outside pl-5 text-[15px] sm:text-[20px] leading-[1.7] text-neutral-800 space-y-2">
              <li>Strengthen strategic leadership and executive presence</li>
              <li>Apply emotional intelligence and resilience to lead under pressure</li>
              <li>Navigate conflict, communication, and team dynamics with composure</li>
              <li>Master strategic thinking, decision-making, and influence without burnout</li>
            </ul>

            <p className="mt-4 text-[15px] sm:text-[20px] text-neutral-700">And much more…</p>
            <p className="mt-4 text-[15px] sm:text-[20px] text-neutral-700">Whether you’re aiming to rise within your organization or pivot toward something bigger, we’ll work together to unlock the leader you already are.</p>

            {/* CTA like screenshot: solid black, no shine. Light hover only. */}
            <div className="mt-6 flex justify-center sm:justify-start">

    <button
  onClick={() => {
    setTimeout(() => {
      document
        .getElementById("your-program")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }}
  className="group relative overflow-hidden
             inline-flex items-center justify-center
             rounded-md px-8 sm:px-10 py-4 sm:py-5
             text-sm sm:text-[20px] font-bold tracking-[0.3px]
             bg-[#000] text-[#fff]
             border border-[#f5f5f5]
             shadow-[0_6px_0_#ea7c22]
             transition-all duration-500 ease-out
             hover:scale-105 hover:-translate-y-1
             hover:shadow-[0_12px_20px_rgba(234,124,34,0.5)]
             active:translate-y-[2px] active:shadow-[0_4px_0_#ea7c22]
             max-w-[320px] sm:max-w-[480px] text-center"
>
  {/* Button Text */}
  <span className="relative z-10">
    Let’s Build Your Leadership Blueprint
  </span>

  {/* Shine Sweep */}
  <span
    className="absolute top-0 -left-[60%] w-[50%] h-full
               bg-[#ea7c22]/40
               transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]
               [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
               group-hover:left-[130%] group-hover:opacity-0"
  />

  {/* Subtle Overlay */}
  <span
    className="absolute inset-0 bg-[#ea7c22]/10
               opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  />
</button>
</div>

            <p className="mt-6 text-[15px] lg:text-[20px] text-center lg:text-start">Join the 500+ leaders who’ve stepped into their power.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
