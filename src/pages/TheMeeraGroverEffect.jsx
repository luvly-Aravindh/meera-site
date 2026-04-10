import React from "react";
import Step from "../pages/Step"
import Testmonial from "../pages/Testmonial"
import Counter from "../pages/Counter"
import New from '../compoents/New'

export default function TheMeeraGroverEffect() {
  return (
    <section className="bg-[#F3F1EF] pt-16 pb-0">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col items-center gap-4 text-center">
        
        {/* Left Content */}
       <div className="flex flex-col items-center text-center">
  <p className="flex items-center justify-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#FC7900] font-semibold font-NickySans">
    <span className="w-8 h-[1px] bg-[#FC7900]"></span>
    Signature Programs
  </p>

  <h2 className="mt-6 leading-tight">
    <span className="block text-[35px] md:text-[56px] font-bold text-black font-NickySans whitespace-nowrap md:whitespace-normal">
      The Meera Grover     <span className=" text-[42px] md:text-[56px] font-normal text-[#FC7900] font-elmessiri">
      Effect
    </span>
    </span>


  </h2>
	</div>

        <div className="w-full max-w-5xl">
          <script src="https://fast.wistia.com/player.js" async></script>
          <script
            src="https://fast.wistia.com/embed/2oabfwm5p4.js"
            async
            type="module"
          ></script>
          <style>
            {`wistia-player[media-id='2oabfwm5p4']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/2oabfwm5p4/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}
          </style>
          <wistia-player media-id="2oabfwm5p4" aspect="1.7777777777777777"></wistia-player>
        </div>
	
	        {/* Right Content */}
        <div className="flex flex-col items-center text-center">
          <p className="text-[16px] sm:text-xl text-[#000] leading-relaxed max-w-full font-NickySans">
            From Attendees to Confident Leaders, see how the “Meera effect”
            worked for aspiring leaders.
          </p>

          <button className="mt-6 bg-[#FC7900] text-white text-[12px] sm:text-base tracking-[0.15em] uppercase px-8 py-4 font-semibold font-NickySans">
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
