import React from 'react';
import heroImage from "../assets/social.jpg";

const WhyWorkWithMe = () => {
  return (
    <section className="w-full bg-[#efefef]">
  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh]">

    {/* LEFT CONTENT */}
    <div className="bg-[#f1f1f1] px-8 sm:px-12 lg:px-16 py-14 flex items-center">
  <div className="max-w-[560px] mx-auto lg:mx-0 text-center lg:text-left">

    {/* TOP LABEL */}
    <div className="flex items-center justify-center lg:justify-start gap-3">
      <span className="h-[2px] w-10 bg-[#f47b20]" />
      <p className="text-[12px] tracking-[0.18em] uppercase text-[#f47b20] font-semibold">
        Why do ambitious professionals choose
      </p>
    </div>

    {/* HEADING */}
    <h1 className="mt-6 leading-[1.05] text-[42px] sm:text-[56px] font-semibold text-[#111]">
      My{" "}
      <span className="text-[#f47b20] font-elmessiri font-normal">
        Leadership Development Programs?
      </span>
    </h1>

    {/* PARAGRAPHS */}
    <div className="mt-7 space-y-5 text-[16px] leading-[1.8] text-[#6a6059]">
      <p>
        With 21+ years in global L&D leadership and 1,200+ senior leaders
        coached, I’ve worked with professionals across Hapag-Lloyd, Frost &
        Sullivan, Godrej, and HCL.
      </p>

      <p>
        As an ICF certified coach, International NLP Master Practitioner,
        and specialist in behavioral psychology, I combine executive
        leadership coaching with real business context. This isn’t generic
        coaching. It’s structured, personalised, and built to create visible
        growth in performance, presence, and influence.
      </p>

      <p>
        When mindset, communication, and leadership identity align, growth
        becomes inevitable.
      </p>

      <p>
        Whether you're growing within your organization or preparing for
        your next step, we unlock the leader you’re ready to become.
      </p>
    </div>

    {/* CTA BUTTON */}
    <button className="mt-8 bg-[#f47b20] hover:bg-[#df6f1b] text-white uppercase tracking-[0.12em] text-[13px] px-10 py-4 transition">
      Build Your Leadership Blueprint
    </button>

    {/* BOTTOM TAGLINE */}
    <p className="mt-12 text-[#444] text-[16px]">
      Join leaders who are already transforming how they show up and lead.
    </p>

  </div>
</div>

    {/* RIGHT IMAGE */}
    <div className="relative min-h-[420px] lg:min-h-full">
      <img
        src={heroImage}
        alt="Meera speaking on stage to an audience"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>

  </div>
</section>
  );
};

export default WhyWorkWithMe;