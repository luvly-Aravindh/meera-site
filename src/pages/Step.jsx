import React, { useMemo, useRef, useEffect } from "react";

export default function PowerSection() {
  const sliderRef = useRef(null);

  const videos = useMemo(
    () => [
      { id: "ntw29dozvp" },
      { id: "n9flji9ocm" },
      { id: "tgq7ffhkh9" },
    ],
    []
  );

  // Auto slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let index = 0;

    const interval = setInterval(() => {
      if (window.innerWidth >= 768) return;

      index = (index + 1) % videos.length;

      slider.scrollTo({
        left: slider.clientWidth * index,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="bg-[#F3F1EF] py-4">
      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-[36px] md:text-[42px] font-semibold text-[#222] font-NickySans">
          See What’s Possible When You
        </h2>

        <h3 className="text-[36px] md:text-[42px] text-[#FC7900] font-elmessiri mt-2">
          Step Into Your Power
        </h3>

        <p className="text-[#7E6E61] text-sm mt-3 font-NickySans">
          Your story of transformation starts here.
        </p>

        {/* Video Slider */}
        <div
          ref={sliderRef}
          className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory mt-14"
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 md:w-auto snap-center px-2"
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${video.id}`}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-[420px]"
                  title={`video-${index}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-14 bg-[#FC7900] text-white text-[12px] tracking-[0.18em] uppercase px-10 py-4 font-semibold font-NickySans">
          Explore What’s Possible For You
        </button>

      </div>
    </section>
  );
}