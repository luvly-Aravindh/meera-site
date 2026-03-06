import React from "react";

import toi from "../assets/time.png";
import jionews from "../assets/jio.png";
import enamor from "../assets/enamor.png";
import avon from "../assets/avon.png";
import godrej from "../assets/godrej.png";
import hcl from "../assets/hcl.png";
import frost from "../assets/frost-sullivan.png";
import icici from "../assets/icici.png";
import Amp from "../assets/Amp.png";
import cnb from "../assets/Aoi.png";
import citi from"../assets/citi.png";

const logos = [
  { src: toi, alt: "The Times of India" },
  { src: jionews, alt: "JioNews" },
  { src: enamor, alt: "Enamor" },
  { src: avon, alt: "AVON" },
  { src: godrej, alt: "Godrej" },
  { src: hcl, alt: "HCL" },
  { src: frost, alt: "Frost & Sullivan" },
  { src: icici, alt: "ICICI Prudential" },
  { src: Amp, alt: "ICICI Prudential" },
  { src: cnb, alt: "ICICI Prudential" },
  { src: citi, alt: "ICICI Prudential" },
];

const FeaturedOn = () => {
  return (
    <section className="bg-[#fdf5ef] pt-14 pb-10 lg:pb-24 overflow-hidden">
      <div className="max-w-full mx-auto text-center">
        {/* Title */}
        <h2 className="text-[20px] md:text-3xl font-semibold text-gray-900 mb-10">
         Trusted By Professional From
        </h2>

        {/* Infinite Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll space-x-12">
            {/* Loop logos twice for seamless scroll */}
            {logos.concat(logos).map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-24 md:h-10 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;
