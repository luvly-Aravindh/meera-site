import React from 'react';

const Help = () => {
    return (
        <section className="w-full bg-[#e9e1da] py-10 lg:py-20 px-6">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center">
      <h2 className="text-[34px] sm:text-[40px] font-semibold text-[#222] font-NickySans">
        The Professional Growth Challenges
      </h2>

      <p className="text-[30px] text-[#FC7900] font-elmessiri mt-1 font-elmessiri">
        I Help You Overcome
      </p>

      <div className="h-[1px] bg-[#d6cec7] mt-8 w-full"></div>
    </div>

    {/* Columns */}
    <div className="grid md:grid-cols-2 gap-14 mt-10 lg:mt-16">

      {/* Individuals */}
      <div>
        <h3 className="text-[28px] font-semibold text-[#111] mb-8 font-nickySans">
          For Individuals
        </h3>

        <ul className="space-y-6">

          {[
            "Feeling invisible despite strong performance",
            "Low confidence or executive presence",
            "Self-doubt and limiting beliefs",
            "Struggling with influence and decision-making",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-[#d8d0c9] font-nickySans"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f47b20] text-white text-xs mt-1 font-nickySans">
                ✓
              </span>

              <p className="text-black text-[16px] sm:text-xl leading-relaxed font-nickySans">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Teams */}
      <div>
       <h3 className="text-[25px] lg:text-[28px] font-semibold text-[#111] mb-8 font-nickySans whitespace-nowrap mtext-left">
  For Teams & Organizations
</h3>

        <ul className="space-y-6">

          {[
            "Managers who struggle to inspire or lead",
            "Poor collaboration and communication gaps",
            "High-potential leaders not stepping up",
            "Training that doesn’t translate into real change",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-[#d8d0c9] font-NickySans"
            >
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f47b20] text-white text-xs mt-1 font-NickySans">
                ✓
              </span>

              <p className="text-black text-[16px] sm:text-xl leading-relaxed font-NickySans">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

    </div>

    {/* Bottom Text */}
    <p className="text-center text-[#3f3a36] mt-16 text-[26px] text-center font-elmessiri">
      This is where real leadership transformation begins.
    </p>

  </div>
</section>
    );
};

export default Help;