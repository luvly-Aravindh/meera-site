import { useEffect, useRef, useState } from "react";

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function MeeraGroverStats() {
  return (
    <section className="bg-[#FC7900] py-20 text-white text-center">
      <h2 className="text-[26px] md:text-[30px] font-elmessiri mb-12">
        The Meera Grover Effect
      </h2>

      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 border border-white/40">

        {/* Box 1 */}
        <div className="py-10 border-b md:border-b-0 md:border-r border-white/40">
          <p className="text-[40px] font-semibold">
            <Counter end={89} suffix="+" />
          </p>
          <p className="text-[12px] sm:text-lg tracking-[0.15em] uppercase mt-2">
            Programs Delivered
          </p>
        </div>

        {/* Box 2 */}
        <div className="py-10 border-b md:border-b-0 md:border-r border-white/40">
          <p className="text-[40px] font-semibold">
            <Counter end={3000} suffix="+" />
          </p>
          <p className="text-[12px] sm:text-lg tracking-[0.15em] uppercase mt-2">
            Coaching Hours
          </p>
        </div>

        {/* Box 3 */}
        <div className="py-10">
          <p className="text-[40px] font-semibold">
            <Counter end={90} suffix="%" />
          </p>
          <p className="text-[12px] sm:text-lg tracking-[0.15em] uppercase mt-2">
            Satisfaction Rate
          </p>
        </div>

      </div>
    </section>
  );
}