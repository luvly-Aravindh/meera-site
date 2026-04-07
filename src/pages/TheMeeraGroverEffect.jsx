import React from "react";
import Step from "../pages/Step"
import Testmonial from "../pages/Testmonial"
import Counter from "../pages/Counter"
import New from '../compoents/New'

export default function TheMeeraGroverEffect() {
  return (
    <section className="bg-[#F3F1EF] py-16">
      <div className="max-w-[1300px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
       <div className="text-center lg:text-left">
  <p className="flex items-center justify-center lg:justify-start gap-3 text-[12px] tracking-[0.2em] uppercase text-[#FC7900] font-semibold font-NickySans">
    <span className="w-8 h-[1px] bg-[#FC7900]"></span>
    Signature Programs
  </p>

  <h2 className="mt-6 leading-tight">
    <span className="block text-[42px] md:text-[56px] font-bold text-black font-NickySans whitespace-nowrap md:whitespace-normal">
      The Meera Grover
    </span>

    <span className="block text-[42px] md:text-[56px] font-normal text-[#FC7900] font-elmessiri">
      Effect
    </span>
  </h2>
</div>

        {/* Right Content */}
        <div className="lg:pl-12">
          <p className="text-[16px] text-[#7E6E61] leading-relaxed max-w-[620px] font-NickySans">
            From Attendees to Confident Leaders, see how the “Meera effect”
            worked for aspiring leaders.
          </p>

          <button className="mt-6 bg-[#FC7900] text-white text-[12px] tracking-[0.15em] uppercase px-8 py-4 font-semibold font-NickySans">
            YOUR STORY OF TRANSFORMATION STARTS HERE
          </button>
        </div>

      </div>
<hr
  style={{
    height: "1px",
    border: "none",
    background: "linear-gradient(to right, transparent, #d9d4cf, transparent)",
    margin: "40px 0",
  }}
/>
        <Step/>
      <Testmonial />
      <Counter/>
      <New/>
    </section>
  



  );
}