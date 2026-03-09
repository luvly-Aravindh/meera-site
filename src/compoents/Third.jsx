import React from "react";
import centerImage from "../assets/Group-1.png";

export default function Third() {
  return (
    <section className="bg-[#000] text-white py-4 px-6 mt-0">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-[12px] tracking-[0.25em] text-[#F59E0B] uppercase mt-20">
          Backed by Experience
        </p>

        <h2 className="mt-4 text-[44px] sm:text-[60px] leading-[1.1] font-semibold text-[#F5F5F5]">
          Proven by{" "}
          <span className="text-[#F59E0B] font-elmessiri font-normal">
            Credentials.
          </span>
        </h2>

        <p className="mt-6 text-[#B8B3AD] max-w-3xl mx-auto text-[16px] sm:text-[18px] leading-[1.7]">
          As an executive presence coach, my work blends psychology and real-world leadership
          experience to deliver leadership development training that drives lasting change.
        </p>

        <div className="mt-16 flex justify-center">
          <div className=" bg-black">
            <img
              src={centerImage}
              alt="Speaker"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center bg-[#F59E0B] hover:bg-[#D88907] text-black font-nicky uppercase tracking-[0.12em] text-[12px] px-8 py-4 transition-colors duration-200"
        >
          Step Into Your Power
        </button>

        <p className="text-[#F59E0B] mt-14 text-[28px] sm:text-[36px] font-elmessiri leading-tight max-w-4xl mx-auto">
          15+ national and international certifications supporting leadership transformation
        </p>

      </div>
    </section>
  );
}