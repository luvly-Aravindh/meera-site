// LeadershipTransformation.jsx
import React, { useRef, useEffect, useState } from "react";
import leadershipImg from "../assets/g-2.png";

const GREEN = "#6DB54A";

export default function LeadershipTransformation() {
  const bullets = [
    "Build strategic, emotionally intelligent leadership pipelines through NLP-based coaching",
    "Strengthen manager effectiveness, team synergy, and communication across levels",
    "Develop influential leadership, decision-making, and executive gravitas in mid and senior managers",
    "Foster inclusive, resilient, and innovation-driven cultures that elevate performance and collaboration",
  ];

  const rightRef = useRef(null);
  const [rightHeight, setRightHeight] = useState("auto");

  useEffect(() => {
    if (rightRef.current) {
      setRightHeight(`${rightRef.current.offsetHeight}px`);
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* soft background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#F7FAF8] to-white"
      />

      <div className="max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-10 py-2 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* RIGHT on desktop, FIRST on mobile */}
          <div
            className="lg:col-span-6 order-1 lg:order-2 lg:pl-4"
            style={{ height: rightHeight }}
          >
            <div className="relative h-full">
              <img
                src={leadershipImg}
                alt="Leadership transformation"
                className="w-full h-full max-w-[680px] rounded-[14px] object-cover shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
                loading="lazy"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -z-10 -top-6 -right-6 h-56 w-56 rounded-full blur-3xl opacity-25"
                style={{
                  background:
                    "radial-gradient(50% 50% at 50% 50%, #6DB54A 0%, rgba(109,181,74,0) 70%)",
                }}
              />
            </div>
          </div>

          {/* LEFT on desktop, SECOND on mobile */}
          <div className="lg:col-span-6 order-2 lg:order-1" ref={rightRef}>
            <h2 className="text-[30px] sm:text-[36px] lg:text-[40px] font-extrabold leading-tight text-neutral-900 text-center lg:text-left">
              Leadership <br className="hidden sm:block" /> Transformation for
            </h2>
            <p
              className="mt-1 italic font-brewfine leading-tight
                         text-[34px] sm:text-[42px] lg:text-[46px]"
              style={{ color: "#69B53C" }}
            >
              Teams & Organizations
            </p>

            <p className="mt-6 lg:mt-4 text-[15px] sm:text-[20px] text-neutral-700">
              Because the strongest organizations grow from the inside out.
            </p>

            <div className="mt-5 lg:mt-2 space-y-4 text-neutral-700">
              <p className="text-[15px] sm:text-[20px] leading-relaxed">
                Beyond individual coaching and training, I partner with
                forward-thinking companies to help their leaders, managers, and
                teams build the clarity, confidence, and emotional intelligence
                required to thrive in today’s workplace.
              </p>
              <p className="text-[15px] sm:text-[20px] leading-relaxed">
                My corporate programs integrate NLP-based coaching, experiential
                learning, and proven frameworks that drive real behavioral
                change.
              </p>
            </div>

            <h3 className="mt-7 lg:mt-2 text-[15px] sm:text-[20px] font-extrabold text-neutral-900">
              I work with organizations to:
            </h3>
            <ul className="mt-3 list-disc list-outside pl-5 space-y-3 text-neutral-800">
              {bullets.map((b, i) => (
                <li key={i} className="text-[15px] sm:text-[20px] leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>

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
                           rounded-md px-6 sm:px-2 py-4 sm:py-5
                           text-sm sm:text-[19px] font-bold tracking-[0.3px]
                           bg-[#000] text-white
                           shadow-[0_6px_0_#ea7c22]
                           transition-all duration-500 ease-out
                           hover:scale-105 hover:-translate-y-1
                           hover:shadow-[0_12px_20px_rgba(234,124,34,0.5)]
                           active:translate-y-[2px] active:shadow-[0_4px_0_#ea7c22]
                           max-w-[380px] sm:max-w-[760px] text-center"
              >
                <span className="relative z-10">
                  Let’s Bring Leadership Transformation to Your Organization
                </span>

                <span
                  className="absolute top-0 -left-[60%] w-[50%] h-full
                             bg-[#ea7c22]/40
                             transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                             [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
                             group-hover:left-[130%] group-hover:opacity-0"
                />

                <span
                  className="absolute inset-0 bg-[#ea7c22]/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />
              </button>

              <p className="mt-4 text-[14px] sm:text-[19px] text-black max-w-xl">
                Book a consultation to discuss customized speaking sessions,
                workshops, or leadership interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
