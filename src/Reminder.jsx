import React from "react";

export default function ReminderCTA() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-20 lg:py-14 text-center">
        {/* Heading */}
        <h3 className="text-neutral-900 font-extrabold uppercase tracking-wide
                       text-[26px] sm:text-[24px] font-onset">
          Here’s Your Reminder
        </h3>

        {/* Subheading */}
        <p className="mt-4 text-neutral-700 uppercase
                      lg:text-[16px] text-[16px] sm:text-[13px] tracking-[0.18em] font-onest">
          If you feel you deserve better in your career, it’s because you do.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
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
   Let’s Work Together
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


      </div>
    </section>
  );
}
