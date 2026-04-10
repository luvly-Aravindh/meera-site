import React, { useEffect, useRef, useState } from "react";
import heroImage from "../assets/Hero.png";

export default function Hero() {
  const statsRef = useRef(null);
  const rafRef = useRef(null);
  const [counts, setCounts] = useState({
    leaders: 0,
    professionals: 0,
    years: 0,
  });

  useEffect(() => {
    const statsElement = statsRef.current;
    if (!statsElement) return;

    let hasAnimated = false;
    const duration = 1400;
    const targets = {
      leaders: 1200,
      professionals: 7500,
      years: 21,
    };

    const animateCounters = () => {
      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setCounts({
          leaders: Math.round(targets.leaders * eased),
          professionals: Math.round(targets.professionals * eased),
          years: Math.round(targets.years * eased),
        });

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateCounters();
          observer.unobserve(statsElement);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(statsElement);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#efefef]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">
        <div className="bg-[#f1f1f1] px-6 sm:px-10 lg:px-14 xl:px-16 py-10 sm:py-12 lg:py-14 flex items-center">
          <div className="w-full max-w-[590px] mx-auto text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="h-[2px] w-8 bg-[#f47b20]" />
              <p className="font-nicky text-[11px] sm:text-[13px] tracking-[0.16em] uppercase text-[#f47b20] font-semibold">
                Executive Leadership and Mindset Coaching
              </p>
            </div>

            <h1 className="mt-7 text-[#111111] leading-[1.02] font-semibold text-[44px] sm:text-[58px] lg:text-[64px]">
              <span className="block">Build Influence,</span>
              <span className="block text-[#f47b20] font-elmessiri font-normal mt-1">
                Presence,
              </span>
              <span className="block mt-0">and Impact</span>
            </h1>

            <p className="mt-7 text-black text-[17px] sm:text-lg leading-[1.8] max-w-[520px] mx-auto lg:mx-0 font-medium">
              Ready to be seen, heard, and unstoppable in your leadership? I
              help ambitious leaders rise through leadership &amp; career
              coaching, strengthening confidence, influence, and a clear brand
              &amp; identity. With 21+ years across global organizations, I
              help you go from overlooked to undeniable.
            </p>

            <a
  href="https://tidycal.com/meeragrover/book-your-call-with-meera"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 mx-auto lg:mx-0 inline-flex items-center justify-center bg-[#f47b20] hover:bg-[#df6f1b] text-white font-nicky uppercase tracking-[0.1em] text-[12px] sm:text-[13px] px-8 sm:px-10 py-4 transition-colors duration-200"
>
  Step Into Your Power
</a>

            <div
              ref={statsRef}
              className="mt-10 sm:mt-12 border-t border-[#ddd7d2] pt-8 grid grid-cols-3 gap-6 lg:gap-4 text-center lg:text-left"
            >
              <div>
                <p className="text-[#FC7900] text-[36px] leading-none font-elmessiri font-semibold">
                  {counts.leaders.toLocaleString()}+
                </p>
                <p className="mt-2 font-nicky text-[9px] sm:text-[12px] lg:text-[11px] tracking-[0.08em] uppercase text-[#000] font-semibold">
                  Senior Leaders Coached
                </p>
              </div>
              <div>
                <p className="text-[#FC7900] text-[36px] leading-none font-elmessiri   font-semibold ">
                  {counts.professionals.toLocaleString()}+
                </p>
                <p className="mt-2 font-nicky text-[9px] sm:text-[12px] lg:text-[11px] tracking-[0.08em] uppercase text-[#000] font-semibold">
                  Professionals Trained
                </p>
              </div>
              <div>
                <p className="text-[#FC7900] text-[36px] leading-none font-elmessiri   font-semibold">
                  {counts.years.toLocaleString()}+
                </p>
                <p className="mt-2 font-nicky text-[9px] sm:text-[12px] lg:text-[11px] tracking-[0.08em] uppercase text-[#000] font-semibold">
                  Years Global L&amp;D
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[48vh] lg:min-h-full">
          <img
            src={heroImage}
            alt="Meera speaking on stage to an audience"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
