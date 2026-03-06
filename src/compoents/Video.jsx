import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import BgImage from "../assets/video-bg.png";

export default function VideoWall() {
  const wistiaIds = [
    "ntw29dozvp",
    "n9flji9ocm",
    "tgq7ffhkh9",
    "s2pi81d3fk",
    "vea0u80jj6",
    "ewq9q3uom2",
  ];

  const [selectedVideo, setSelectedVideo] = useState(null);
  const swiperRef = useRef(null);

  // ✅ Load Wistia Script Once
  useEffect(() => {
    if (!document.querySelector('script[src="https://fast.wistia.com/assets/external/E-v1.js"]')) {
      const s = document.createElement("script");
      s.src = "https://fast.wistia.com/assets/external/E-v1.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // ✅ Function to close popup
  const closePopup = () => setSelectedVideo(null);

  return (
    <section
      className="relative w-full py-16 lg:py-20 px-6 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <h2 className="text-[30px] md:text-5xl font-extrabold text-gray-900">
            See What’s Possible When You
          </h2>
          <span className="block text-[#ef7b1a] font-brewfine italic text-[34px] sm:text-[42px] lg:text-[48px]">
            Step Into Your Power
          </span>
          <p className="text-gray-600 mt-3 text-[20px] font-gantari mb-0 lg:mb-20">
            Your story of transformation starts here.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ el: ".custom-pagination", clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-6xl mx-auto pb-14"
        >
          {wistiaIds.map((id) => (
            <SwiperSlide key={id}>
              <div
                className="relative w-full h-[530px] sm:h-[420px] lg:h-[560px] overflow-hidden rounded-2xl shadow-lg bg-black cursor-pointer"
                onClick={() => setSelectedVideo(id)}
              >
                <div
                  className={`wistia_embed wistia_async_${id}`}
                  style={{ height: "100%", width: "100%", pointerEvents: "none" }}
                ></div>

                {/* Overlay Play Icon */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/60 transition">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 sm:w-10 sm:h-10 text-black"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination flex justify-center gap-2 py-4 rounded-t-lg w-fit mx-auto px-4 mt-4" />

        {/* CTA Button */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-4">
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
            <span className="relative z-10">Explore What’s Possible For You</span>
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

          <p className="text-[15px] sm:text-[20px] text-neutral-700 font-gantari text-center max-w-md pt-0 lg:pt-[10px]">
            Your story of transformation starts here.
          </p>
        </div>
      </div>

      {/* ✅ Video Popup Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={closePopup}
        >
          <div
            className="relative bg-black w-[90%] max-w-6xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://fast.wistia.net/embed/iframe/${selectedVideo}?autoPlay=true`}
              title="Wistia Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            ></iframe>

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Pagination Bullet Styles */}
      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background: #ccc;
          opacity: 0.5;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #ef7b1a;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
