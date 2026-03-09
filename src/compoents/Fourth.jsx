import React from "react";
import logo from "../assets/logo.png";
import maleShot from "../assets/man-1.png";
import femaleShot from "../assets/lady-1.png";
import meeraCutout from "../assets/meera-portraitt.png";

function ReelCard({ image }) {
  return (
    <article className="w-[245px] sm:w-[265px] lg:w-[286px] rounded-[3px] overflow-hidden bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="h-[92px] bg-white border-b border-[#ece7e2] flex items-center justify-center">
        <img src={logo} alt="Meera Grover" className="h-[56px] w-auto object-contain" />
      </div>

      <div className="h-[240px] sm:h-[260px] lg:h-[300px] bg-[#efefef]">
        <img src={image} alt="Client video testimonial" className="h-full w-full object-cover" />
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

export default function Fourth() {
  return (
    <section className="w-full bg-[#f3f1ef] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-10 lg:gap-14 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#f5811f]" />
              <p className="font-nicky uppercase tracking-[0.16em] text-[12px] text-[#f5811f]">
                Why Work With Me
              </p>
            </div>

            <h2 className="mt-6 text-[#111] font-semibold text-[45px] sm:text-[62px] lg:text-[62px] leading-[1.02]">
              <span className="block">You're Not Here</span>
              <span className="block">to <span className="text-[#f5811f] font-elmessiri font-normal">Blend In</span></span>
            </h2>

            <div className="mt-6 text-black text-[120px] leading-[0.8] font-black font-onest">“</div>

            <p className="mt-2 font-onest text-[#7a7068] text-[18px]">You're here to lead.</p>

            <div className="mt-8 space-y-4 max-w-[560px]">
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
              className="mt-9 inline-flex items-center justify-center bg-[#f5811f] hover:bg-[#e47416] text-white font-nicky uppercase tracking-[0.11em] text-[13px] px-8 py-4 transition-colors duration-200"
            >
              Claim Your Leadership
            </button>
          </div>

          <div>
            <div className="flex items-start justify-center lg:justify-end gap-4 sm:gap-6">
              <ReelCard image={maleShot} />
              <ReelCard image={femaleShot} />
            </div>

            <div className="mt-7 flex justify-center lg:justify-start gap-8 text-[#8d847d] text-[30px] leading-none pl-0 lg:pl-4">
              <button type="button" aria-label="Previous testimonial" className="hover:text-[#6f665f] transition-colors">←</button>
              <button type="button" aria-label="Next testimonial" className="hover:text-[#6f665f] transition-colors">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
