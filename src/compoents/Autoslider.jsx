import React from "react";

const GREEN = "#6DB54A";
const ORANGE = "#EF7B1A";
const BLACK = "#181818";

const PROGRAMS = [
  {
    color: GREEN,
    title: "The Curriculum - For Individual Growth",
    desc: "Three powerful journeys designed for ambitious professionals at every stage of leadership.",
    points: [
      {
        title: "Rise: The Phoenix (5-10 yrs exp)",
        text: "Build clarity, confidence and direction for your next leap.",
      },
      {
        title: "Shine: The Lighthouse (8-15 yrs exp)",
        text: "Lead with presence, influence and authentic impact.",
      },
      {
        title: "Thrive: The Crown (1-on-1 Coaching)",
        text: "Step into strategic visibility and executive level leadership.",
      },
    ],
    cta: "Start Your Growth Journey",
    href: "https://tidycal.com/meeragrover/the-curriculum",
  },
  {
    color: ORANGE,
    title: "Organizational Engagements - For Teams and Institutions",
    desc: "Transform your people and culture through NLP driven, experiential learning for corporates, universities and organizations.",
    points: [
      {
        title: "Leadership and Mindset Workshops",
        text: "Interactive sessions that build clarity, empathy and collaboration.",
      },
      {
        title: "Growth Retreats",
        text: "Immersive experiences for teams to reset, realign and recharge.",
      },
      {
        title: "Custom Engagements",
        text: "Tailored programs for corporates, educational institutions and communities to foster collective growth.",
      },
    ],
    cta: "Invite Meera to Collaborate",
    href: "https://tidycal.com/meeragrover/organizational-engagements",
  },
  {
    color: BLACK,
    title: "NLP Coaching - Personal and Professional Transformation",
    desc: "1-on-1 coaching using NLP to unlock clarity, confidence and emotional mastery.",
    points: [
      {
        title: "NLP Coaching",
        text: "Reprogram thoughts, strengthen communication and self belief.",
      },
      {
        title: "Leadership Growth",
        text: "Accelerate your professional journey with focus, presence and impact.",
      },
      {
        title: "Mindset Mastery",
        text: "Break inner barriers and cultivate calm conviction to thrive in every area of life.",
      },
    ],
    cta: "Book Your Coaching Session",
    href: "https://tidycal.com/meeragrover/nlp-coaching",
    invert: true,
  },
];

export default function SignatureProgramsSection() {
  return (
    <section id="your-program" className="w-full bg-white">
      <div className="mx-auto max-w-[85rem] px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6">
          <div className="leading-none text-center lg:text-left">
            <span
              className="block font-brewfine italic text-[40px] sm:text-[48px] lg:text-[64px]"
              style={{ color: "#6EBE45" }}
            >
              Signature
            </span>
            <span className="block text-neutral-900 font-extrabold text-[34px] sm:text-[40px] lg:text-[56px]">
              Programs
            </span>
          </div>

          {/* Right Section - Box */}
          <div className="bg-[#F6F7F8] rounded-md px-6 sm:px-8 py-6 sm:py-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] max-w-3xl w-full text-center lg:text-left">
            <h3 className="text-neutral-900 font-extrabold text-[16px] sm:text-[20px] tracking-wide uppercase">
              Get Your Program
            </h3>
            <p className="mt-3 text-[14px] sm:text-[16px] lg:text-[20px] leading-relaxed text-neutral-700 font-gantari">
              Meera Grover offers individual, team and organizational journeys
              to help you build powerful, self led leadership, delivered
              virtually or in person.
            </p>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <ProgramTile key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramTile({ color, title, desc, points = [], cta, href, invert = false }) {
  return (
    <article
      className="rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col min-h-[420px]"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col h-full px-5 sm:px-6 lg:px-7 py-8 text-white gap-2">
        {/* Title */}
        <div className="flex items-center justify-center lg:justify-start">
          <h3 className="text-[20px] sm:text-[20px] lg:text-[23px] font-bold leading-snug text-center lg:text-center">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-2 text-[14px] sm:text-[18px] font-gantari text-white/90 text-center lg:text-center">
          {desc}
        </p>

        {/* Points */}
        <ul className="mt-5 space-y-4">
          {points.map((pt, i) => (
            <li key={i} className="text-center lg:text-center">
              <p className="font-semibold text-[15px] sm:text-[18px]">{pt.title}</p>
              <p className="text-white/90 text-[13px] sm:text-[17px] mt-1 leading-relaxed">
                {pt.text}
              </p>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-auto flex justify-center lg:justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden
              inline-flex items-center justify-center
              rounded-md px-6 sm:px-8 py-3 sm:py-4
              text-[13px] sm:text-[15px] lg:text-[16px] font-bold tracking-[0.3px]
              transition-all duration-500 ease-out
              hover:scale-105 hover:-translate-y-1
              hover:shadow-[0_12px_20px_rgba(234,124,34,0.5)]
              active:translate-y-[2px]
              transform-gpu shadow-[0_6px_0_rgba(0,0,0,0.2)]
              ${invert
                ? "bg-white text-neutral-900 shadow-[0_6px_0_rgba(0,0,0,0.2)]"
                : "bg-[#212D38] text-white shadow-[0_6px_0_#ea7c22]"
              }`}
            style={{
              transformStyle: "preserve-3d",
              perspective: "800px",
            }}
          >
            {/* Button Text */}
            <span className="relative z-10">{cta}</span>

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
          </a>
        </div>
      </div>
    </article>
  );
}
