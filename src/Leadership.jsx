import React from "react";

export default function LeadershipCTA() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 sm:py-0 lg:pb-12">
        {/* Headline */}
        <h2
  className="mx-auto max-w-6xl text-center font-extrabold text-black leading-tight
             text-[26px] lg:text-[40px] font-onest"
>
  Have you ever imagined knowing exactly what to say in high-stakes
  meetings without{" "}
  <span className="text-[30px] lg:text-[40px] text-[#ef7b1a] italic font-brewfine font-bold">
    overthinking
  </span>{" "}
  every word?
</h2>


        {/* Small gray copy (3 lines) */}
        <div
  className="mt-6 text-center text-neutral-700 leading-relaxed
             text-[20px] sm:text-[20px] font-gantari"
>
  <p>Leadership isn’t about being perfect.</p>
  <p>It’s about being clear, consistent, and deeply connected to your power.</p>
  <p>If you’ve been waiting for someone to hand you the playbook… this is it.</p>

  <b className="block mt-0 lg:mt-6 text-neutral-900 font-gantari ">
    Get the mindset, tools, and structure you need to lead boldly and authentically.
  </b>
</div>


        {/* Sub-headline */}
        

        {/* CTA */}
        

<div className="mt-0 lg:mt-8 flex justify-center md:justify-center">
  <div className="relative mt-8 md:mt-2 text-center">

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
      Unlock Your Leadership Blueprint

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

  <p className="mt-0 lg:mt-4 text-[14px] lg:text-[20px] text-neutral-700 pt-4">
    Step into the next level of your leadership journey.
  </p>
</div>


</div>

      </div>
    </section>
  );
}
