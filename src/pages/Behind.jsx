import React from 'react'
import arrowIcon from '../assets/arrow.png'
import heroImage from "../assets/IMG_5610.JPG";

const Behind = () => {
  return (
    <section className="bg-white/90 py-4 lg:py-20">
  <div className="max-w-full px-6 lg:px-0">

    {/* Top Row */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">

      {/* Left Title */}
      <div>
        <h2 className="text-[50px] font-semibold text-[#111] lg:pl-16">
          My <span className="text-[#F47A0B]">approach</span>
        </h2>
      </div>

      {/* Right Description */}
      <div className="text-[#6f655f] text-[20px] leading-relaxed max-w-4xl font-NickySans">
        <p className='font-NickySans'>
          My work combines leadership & career coaching with psychology and
          proven frameworks to create measurable growth in performance,
          presence, and decision-making.
        </p>

        <p className="mt-3 font-NickySans">
          This isn’t a theory. It’s designed for real-world leadership challenges.
        </p>
      </div>

    </div>


    {/* Bottom Content */}
    <div className="grid lg:grid-cols-2 gap-16 mt-16 items-center">

      {/* Framework Left */}
      <div className="ml-0 lg:ml-14">

  <h3 className="text-[22px] lg:text-[45px] font-semibold text-[#111] leading-snug font-NickySans text-center lg:text-left">
  The Framework Behind <br className="hidden lg:block" /> the Work
</h3>

  <p className="text-[#7a6f67] mt-5 text-[17px] max-w-[480px] font-NickySans">
    I integrate globally recognised methods to deliver executive
    leadership coaching that drives lasting change:
  </p>

  {/* List */}
  <ul className="mt-10 divide-y divide-[#d9d2cc] max-w-[520px] font-NickSans">

    {[
      "NLP Coaching for mindset and behavioral shifts",
      "Transactional Analysis and Behavioral Psychology",
      "ICF-aligned Coaching Frameworks",
      "Psychometric and evidence-based tools",
      "70:20:10 applied learning model"
    ].map((item, index) => (
      <li key={index} className="flex items-center gap-5 py-6">

        {/* Arrow Image */}
        <img
          src={arrowIcon}
          alt="arrow"
          className="w-5 h-5"
        />

        
        <span className="text-[#111] text-[18px] lg:text-[21px] leading-relaxed font-NickySans ">
          {item}
        </span>

      </li>
    ))}

  </ul>

</div>


      {/* Image Right */}
      <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src={heroImage}
              alt="Meera speaking on stage to an audience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

    </div>

  </div>

  
</section>


  )
}

export default Behind