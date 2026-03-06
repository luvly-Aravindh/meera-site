// TestimonialsSlider.jsx
import React, { useEffect, useRef, useState } from "react";

/* --- IMPORT AVATARS --- */
import anjanaAvatar from "../src/assets/lady-1.png";
import ashwiniAvatar from "../src/assets/man-2.png";
// import shrutiAvatar from "../src/assets/1212.png";
import koustavAvatar from "../src/assets/man-1.png";
import mugundhanAvatar from "../src/assets/man-3.png"; // replace if you have a real one

/* --- QUOTE IMAGE (green) --- */
import quoteGreen from "../src/assets/green.png"; // <-- your green quote image

/* --- CONFIG --- */
const GREEN = "#6DB54A";
const ORANGE = "#EF7B1A";
const AUTO_MS = 5000;

/* --- TESTIMONIALS DATA --- */
const TESTIMONIALS = [
  {
    name: "Anjana Venkataraman",
    title: "Manager, Strategic Initiatives - GEOTAB",
    avatar: anjanaAvatar,
    quote:
      "What I liked about Meera's session was the way she helped me set a list of top priorities and streamline them into smaller, actionable items. The entire session was packed with a realistic and pragmatic methodology, and I walked out feeling empowered and more goal-driven. Thanks Meera! We could make it a monthly or bi-monthly occurrence to ensure greater impact.",
  },
  {
    name: "Ashwini Shailesh",
    title: "Associate Director - Operations, Frost & Sullivan",
    avatar: ashwiniAvatar,
    quote:
      "Thanks so much, Meera, for your coaching session. It really motivated me to change my approach towards team networking. One-to-one session was conducted with real efficiency, and yet, in the short time frame, you managed to make us feel relaxed about airing problems and helping us arrive at possible solutions. The real benefit came when you managed to help us open up a discussion of what everyone was thinking. I can honestly say that putting your tips into practice made me feel more confident and helped me get more feedback on my work from seniors. It was the most useful and enlightening coaching session I have had in the last eleven years! So thanks once again.",
  },
  
  {
    name: "Koustav Chatterjee",
    title: "CEO - Kimmchi, a Kare AI Company",
    avatar: koustavAvatar,
    quote:
      "To say Meera's session is extremely helpful is an understatement. She makes you feel safe and comfortable from the get-go and lets you pay attention to what you really want and how you want to achieve that. She listens, takes notes, and provides ample opportunity to ensure that discussion is free flowing, yet structured and meaningful. Her scientific approach is effective and you will see positive results almost instantaneously. We chatted for 90 minutes on work-life balance and towards the end of the session, she made me inherently realize that, in order to prioritize work and social life with equal elan, you have to learn to say both YES and NO. Kudos to her! I am already signed in for the next session. Don't do it for free.",
  },
  {
    name: "Mugundhan Deenadayalan",
    title: "Research Manager - Frost & Sullivan",
    avatar: mugundhanAvatar,
    quote:
      "I took part in Meera's one-on-one coaching session which helped me get clarity and control over professional as well as personal aspects. With her professionalism in coaching and mentoring, she offers new perspectives to explore and approaches issues from different standpoints which prove to be helpful. Give it a try.",
  },
];

/* --- COMPONENT --- */
export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    start();
    return stop;
  }, [index]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTO_MS);
  };

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <section className="w-full" style={{ backgroundColor: ORANGE }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-10 pb-10 lg:pb-20">
        {/* optional rating header */}
        <div className="mb-10 text-center">
          
        </div>

        {/* slider */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 font-gantari">
                <div className="mx-auto max-w-5xl px-4">
                  <article
                    className="
                      bg-white rounded-[12px]
                      shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                      px-6 sm:px-10 lg:px-14 py-8 sm:py-12
                      flex flex-col
                      /* === Equal height per breakpoint === */
                      h-[480px] sm:h-[380px] lg:h-[400px]
                    "
                  >
                    {/* quote image */}
                    <img
                      src={quoteGreen}
                      alt=""
                      className="w-8 h-8 sm:w-9 sm:h-9 mb-3 select-none"
                      draggable="false"
                    />

                    {/* quote text (clamped so card height stays equal) */}
                    <p
                      className="
                        italic text-[15px] sm:text-[17px] leading-relaxed text-neutral-800
                        flex-1 clamp-8
                      "
                    >
                      {t.quote}
                    </p>

                    {/* author */}
                    <div className="mt-3 flex items-center gap-4">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-12 w-12 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-neutral-900 text-[15px] sm:text-[16px]">
                          {t.name}
                        </div>
                        <div className="text-[13px] sm:text-[14px] text-neutral-600">
                          {t.title}
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </div>

          {/* dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="h-2.5 w-2.5 rounded-full transition-all"
                style={{
                  backgroundColor: i === index ? GREEN : "#FFFFFF",
                  boxShadow:
                    i === index
                      ? "0 0 0 3px rgba(109,181,74,0.3)"
                      : "0 0 0 1px rgba(255,255,255,0.5)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* line clamp utility so all cards keep same height */}
      <style>{`
        .clamp-8 {
          display: -webkit-box;
          -webkit-line-clamp: 8;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 640px) {
          .clamp-8 { -webkit-line-clamp: 7; }
        }
        @media (min-width: 1024px) {
          .clamp-8 { -webkit-line-clamp: 6; }
        }
      `}</style>
    </section>
  );
}
