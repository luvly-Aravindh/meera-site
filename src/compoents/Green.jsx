import React from "react";


export default function CtaSection() {
  return (
    <section className="w-full bg-[#76B042] py-10 sm:py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        {/* Headline */}
        <h2 className="text-[20px] sm:text-[24px] font-onest tracking-wider uppercase leading-relaxed">
          I STAND FIRM IN THE BELIEF THAT YOU SHOULDN’T HAVE TO SPEND
          <br className="hidden sm:block" />
          THIS MUCH TIME WONDERING ‘WHAT ELSE?’
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-[13px] sm:text-[20px]  font-gantari leading-relaxed">
         There is another way. You can grow where you are or go where you deserve to be.
          <br />
          Let’s unlock that clarity together.
        </p>

        {/* CTA Button */}
      <div className="mt-8">


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
             shadow-[0_6px_0_#ea7c22]
             transition-all duration-500 ease-out
             hover:scale-105 hover:-translate-y-1
             hover:shadow-[0_12px_20px_rgba(234,124,34,0.5)]
             active:translate-y-[2px] active:shadow-[0_4px_0_#ea7c22]
             max-w-[320px] sm:max-w-[380px] text-center"
>
  {/* Button Text */}
  <span className="relative z-10">
    Let’s Do This
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
  <p className="pt-4 lg:pt-6 text-[14px] lg:text-[20px]">The next step in your leadership journey starts here.</p>
</div>


        {/* Social Icons */}
        
      </div>
    </section>
  );
}
