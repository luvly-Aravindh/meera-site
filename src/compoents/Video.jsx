import React, { useMemo, useState } from "react";
import logo from "../assets/logo.png";
import maleShot from "../assets/man-1.png";
import femaleShot from "../assets/lady-1.png";
import meeraCutout from "../assets/meera-portraitt.png";
import quoteImage from "../assets/quote.png";

function ReelCard({ videoId, fallbackImage, className = "" }) {
  return (
    <article className={`w-[300px] max-w-full sm:w-[265px] lg:w-[286px] rounded-[3px] overflow-hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] ${className}`}>
      <div className="h-[92px] bg-white border-b border-[#ece7e2] flex items-center justify-center">
        <img src={logo} alt="Meera Grover" className="h-[56px] w-auto object-contain" />
      </div>

      <div className="h-[240px] sm:h-[260px] lg:h-[300px] bg-[#efefef]">
        <iframe
          src={`https://fast.wistia.net/embed/iframe/${videoId}?autoPlay=true&muted=true&controlsVisibleOnLoad=false&playbar=false&smallPlayButton=false&volumeControl=false&fullscreenButton=false`}
          title="Client video testimonial"
          allow="autoplay; fullscreen"
          className="h-full w-full"
        />
        <img
          src={fallbackImage}
          alt=""
          aria-hidden
          className="hidden"
        />
      </div>

      <div className="relative bg-[#f5811f] h-[130px] px-4 pt-3 overflow-hidden">
        <p className="font-onest text-white uppercase tracking-[0.08em] text-[11px]">Building</p>
        <p className="font-onest font-black text-black text-[48px] leading-[0.9] uppercase">Leaders</p>
        <p className="font-onest text-white text-[10px] tracking-[0.55em] uppercase mt-1">Who Drive</p>
        <p className="font-onest font-black text-[#f5b06f] text-[56px] leading-[0.86] uppercase">Change</p>

        <img
          src={meeraCutout}
          alt=""
          aria-hidden
          className="absolute bottom-0 right-[-20px] h-[102px] w-auto object-contain"
        />
      </div>
    </article>
  );
}

export default function Video() {
  const videos = useMemo(
    () => [
      { id: "ntw29dozvp", fallback: maleShot },
      { id: "n9flji9ocm", fallback: femaleShot },
      { id: "tgq7ffhkh9", fallback: maleShot },
      { id: "s2pi81d3fk", fallback: femaleShot },
    ],
    []
  );

  const [startIndex, setStartIndex] = useState(0);
  const moveNext = () => {
    setStartIndex((prev) => (prev + 1) % videos.length);
  };

  const movePrev = () => {
    setStartIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const visibleVideos = [videos[startIndex], videos[(startIndex + 1) % videos.length]];

  return (
    <section className="w-full bg-[#f3f1ef] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_585px] gap-10 lg:gap-2 items-start">
          <div className="max-w-7xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[2px] w-8 bg-[#f5811f]" />
              <p className="font-nicky font-bold uppercase tracking-[0.16em] text-[12px] text-[#f5811f]">
                Why Work With Me
              </p>
            </div>

            <h2 className="mt-6 text-[#111] font-semibold text-[40px] sm:text-[62px] lg:text-[60px] leading-[1.02]">
              <span className="block font-nicky ">You're Not Here</span>
              <span className="block font-nicky">
                to <span className="text-[#f5811f] font-elmessiri font-normal">Blend In</span>
              </span>
            </h2>

            <div className="mt-6 text-black text-[120px] leading-[0.8] font-black font-onest flex justify-start lg:justify-start">
  <img 
    src={quoteImage} 
    alt="Quote"
    className="w-[40px] sm:w-[60px] lg:w-auto"
  />
</div>

            <p className="mt-4 font-onest text-[#7a7068] text-[18px]">You're here to lead.</p>

            <div className="mt-4 space-y-4 max-w-[560px] mx-auto lg:mx-0">
              <p className="font-onest text-[#7a7068] text-[16px] leading-[1.75]">
                Through leadership &amp; career coaching and executive leadership coaching, I help
                ambitious professionals build executive presence, communicate with clarity, and create a
                strong brand &amp; identity that gets noticed.
              </p>
              <p className="font-onest text-[#7a7068] text-[16px] leading-[1.75]">
                If you feel overlooked despite delivering results, it's not a capability gap, it's a
                visibility and positioning gap.
              </p>
              <p className="font-onest text-[#7a7068] text-[16px] leading-[1.75]">
                It's time to step forward, own your leadership, and create impact on your terms.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                document.getElementById("your-program")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-9 inline-flex items-center justify-center bg-[#f5811f] hover:bg-[#e47416] text-white font-nicky uppercase tracking-[0.11em] text-[13px] px-8 py-4 transition-colors duration-200 mx-auto lg:mx-0 font-bold"
            >
              Claim Your Leadership
            </button>
          </div>

          <div className="lg:pt-1">
            <div className="flex items-start justify-center lg:justify-end gap-5 sm:gap-10">
              {visibleVideos.map((video, idx) => (
                <ReelCard
                  key={`${video.id}-${idx}`}
                  videoId={video.id}
                  fallbackImage={video.fallback}
                  className={idx === 1 ? "hidden sm:block" : ""}
                />
              ))}
            </div>

            <div className="mt-6 flex justify-center lg:justify-start gap-8 text-[#8d847d] text-[30px] leading-none pl-0 lg:pl-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="hover:text-[#6f665f] transition-colors"
                onClick={movePrev}
              >
                ←
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="hover:text-[#6f665f] transition-colors"
                onClick={moveNext}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
