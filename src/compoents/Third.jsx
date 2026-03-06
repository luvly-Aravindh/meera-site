// LeadingBoldly.jsx
import React from "react";
import portrait from "../assets/meera-portraitt.png";

const GREEN = "#6DB54A";

export default function LeadingBoldly() {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 flex flex-col items-center">
      {/* Soft background accents */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#f5fbf6] to-white" />

      {/* Heading */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="leading-tight">
          <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
            Living small isn’t your destiny,
          </span>
          <span
            className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
            style={{ color: GREEN }}
          >
            Leading boldly is.
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="max-w-[90rem] mx-auto mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 md:items-stretch gap-y-10">
        {/* LEFT: Image fills full height of right content */}
        <div className="flex justify-center items-stretch px-6 md:px-0">
          <img
            src={portrait}
            alt="Meera Grover"
            className="w-fit h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </div>

        {/* RIGHT: Copy + CTA */}
        <div className="flex flex-col justify-center px-6 md:px-10 lg:px-14 mt-2 lg:mt-0">
          <div className="space-y-4 text-[17px] sm:text-[20px] leading-relaxed text-neutral-700 font-gantari">
            <p>
              And deep down, <b>you already know that.</b>
              <br className="hidden sm:block" />
              Despite what the corporate world (and maybe your inner critic) has told
              you, you can and absolutely should have a career that fills you with
              purpose, pride, and powerful impact.
            </p>
            <p className="mt-0">
              For some, a paycheck and a title are enough. But not for you. You’re{" "}
              <b>too ambitious</b>, too intelligent, and too aware to keep showing up
              to work, which leaves you feeling stuck, invisible, or unfulfilled.
            </p>
            <p className="font-medium text-neutral-800 mt-0">
              Let’s check in for a moment. Do any of these feel familiar?
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-neutral-500 leading-[1.4]">
              <li>You question your credibility, even when you’re praised</li>
              <li>You’re in a leadership role but still feel overlooked or unheard</li>
              <li>Your work feels safe, but not satisfying</li>
              <li>You’re exhausted from doing everything “right” but still feeling behind</li>
              <li>You keep asking, “Is this all there is?”</li>
            </ul>
            <p>Was that a quiet <b>yes, yes, yes</b> in your head?</p>
            <p>
              Take a breath. You’re not broken. You’re not{" "}
              <b>yet leading in alignment,</b> and that’s exactly what I help
              professionals like you do.
            </p>
            <p>
              You’re not here to settle. You’re here to{" "}
              <b>lead with clarity, confidence,</b> and courage, and you don’t have to
              do it alone.
            </p>
            <p>Yep, it’s possible. And I’ll show you how.</p>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-10 flex flex-col items-center md:items-start space-y-4">
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
             max-w-[320px] sm:max-w-[380px] text-center"
>
  {/* Button Text */}
  <span className="relative z-10">
    No More Shrinking, I’m In
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



            <p className="text-[15px] sm:text-[20px] text-black font-gantari text-center md:text-left pt-0 lg:pt-[16px]">
              Join hundreds of women who’ve stepped into their power.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
