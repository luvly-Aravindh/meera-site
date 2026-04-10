import React, { useMemo, useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PowerSection() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const playersRef = useRef([]);

  const [activePlayer, setActivePlayer] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  const videos = useMemo(
    () => [
      { id: "ntw29dozvp" },
      { id: "n9flji9ocm" },
      { id: "tgq7ffhkh9" },
      { id: "xxnaerdqz1" },
      { id: "wky53ff7t1" },
    ],
    []
  );

  const loopVideos = [...videos, ...videos];

  // Load Wistia
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Players
  useEffect(() => {
    window._wq = window._wq || [];

    loopVideos.forEach((video, index) => {
      window._wq.push({
        id: video.id,
        options: { muted: true },
        onReady: (player) => {
          playersRef.current[index] = player;

          player.bind("play", () => {
            if (activePlayer && activePlayer !== player) {
              try {
                activePlayer.pause();
              } catch {}
            }
            setActivePlayer(player);
          });

          player.bind("pause", () => {
            setTimeout(() => {
              if (activePlayer === player) setActivePlayer(null);
            }, 200);
          });

          player.bind("end", () => {
            if (activePlayer === player) setActivePlayer(null);
          });
        },
      });
    });
  }, [loopVideos, activePlayer]);

  // Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = slider.scrollLeft;
    const speed = 0.5;

    const step = () => {
      scrollAmount += speed;
      slider.scrollLeft = scrollAmount;

      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
        slider.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    const shouldPause =
      activePlayer !== null || isHovering || isManualScroll;

    if (!shouldPause) {
      animationRef.current = requestAnimationFrame(step);
    }

    return () => cancelAnimationFrame(animationRef.current);
  }, [activePlayer, isHovering, isManualScroll]);

  // Scroll buttons
  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsManualScroll(true);

    slider.scrollBy({
      left: -slider.offsetWidth,
      behavior: "smooth",
    });

    setTimeout(() => setIsManualScroll(false), 1000);
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsManualScroll(true);

    slider.scrollBy({
      left: slider.offsetWidth,
      behavior: "smooth",
    });

    setTimeout(() => setIsManualScroll(false), 1000);
  };

  return (
    <section className="bg-[#F3F1EF] py-10">
      <div className="max-w-[1300px] mx-auto px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[22px] sm:text-[42px] font-semibold text-[#222]">
            See What’s Possible When You
          </h2>

          <h3 className="text-[22px] sm:text-[42px] text-[#FC7900] mt-2">
            Step Into Your Power
          </h3>

          <p className="text-sm md:text-lg mt-3">
            Your story of transformation starts here.
          </p>
        </div>

        {/* Slider + Arrows Row */}
        <div className="flex items-center mt-10 gap-4">

          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex items-center justify-center bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-hidden flex-1"
          >
            {loopVideos.map((video, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 px-2 flex-shrink-0"
              >
                <div
                  className="rounded-xl overflow-hidden shadow-lg"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  onTouchStart={() => setIsHovering(true)}
                  onTouchEnd={() =>
                    setTimeout(() => setIsHovering(false), 1500)
                  }
                >
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${video.id}?mute=1&playerInstance=${index}`}
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    className="w-full h-[300px] md:h-[420px]"
                    title={`video-${index}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="hidden md:flex items-center justify-center bg-white shadow-md rounded-full p-3 hover:scale-110 transition"
          >
            <ChevronRight size={26} />
          </button>
        </div>

        {/* Mobile Arrows */}
        <div className="flex justify-center gap-6 mt-6 md:hidden">
          <button
            onClick={scrollLeft}
            className="bg-white shadow-md rounded-full p-3"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="bg-white shadow-md rounded-full p-3"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="mt-12 bg-[#FC7900] text-white px-8 py-4 uppercase text-xs sm:text-base tracking-widest">
            Explore What’s Possible For You
          </button>
        </div>
      </div>
    </section>
  );
}