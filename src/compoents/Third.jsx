import React from "react";
import centerImage from "../assets/Group-1.png";
import Mobimage from "../assets/mob-meera.png";

const mobileCredentialColumns = [
  [
    "ICF Certified Coach (ACC, PCC)",
    "International NLP Master Practitioner",
    "Transactional Analysis (TA)",
    "Emotional Intelligence (EI)",
    "FLDP Certified - KPMG",
  ],
  [
    "Certified L&D Manager (CLDM)",
    "CELTA Certified",
    "Kirkpatrick Certified - Bronze",
    "Predictive Index (PI)",
    "Landmark Forum Alumni and JWMI Leadership",
  ],
];

function MobileCredentialCard({ label }) {
  return (
    <div className="mx-auto w-full max-w-[290px] border border-[#34302A] bg-[#201C18] px-7 py-6 text-left">
      <div className="flex min-h-[74px] items-center gap-6">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF7A00]" aria-hidden="true" />
        <p className="max-w-[180px] text-[17px] font-normal leading-[1.45] text-[#D2CDC6]">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function Third() {
  return (
    <section className="mt-0 bg-[#000] px-6 py-4 text-white">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mt-20 text-base uppercase tracking-[0.25em] text-[#F59E0B]">
          Backed by Experience
        </p>

        <h2 className="mt-4 text-[44px] font-semibold leading-[1.1] text-[#F5F5F5] sm:text-[60px]">
          Proven by{" "}
          <span className="font-elmessiri font-normal text-[#F59E0B]">
            Credentials.
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-[16px] leading-[1.7] text-white sm:text-xl">
          As an executive presence coach, my work blends psychology and real-world leadership
          experience to deliver leadership development training that drives lasting change.
        </p>

        <div className="mt-16 hidden justify-center md:flex">
          <div className="bg-black">
            <img
              src={centerImage}
              alt="Speaker"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

<div className="mt-12 md:hidden px-4">
  {/* Cards */}
<div className="grid grid-cols-1 gap-4">
  {mobileCredentialColumns.map((column, columnIndex) => (
    <div key={`column-${columnIndex}`} className="flex flex-col gap-4">
      {column.map((item, index) => (
        <div
          key={item}
className={`
  bg-[#34322E] w-full
  text-white text-center text-base font-medium
  px-4 py-5 rounded-2xl
  border border-[#34322E]
  leading-snug
  min-h-[80px] flex items-center justify-center
  ${index % 2 !== 0 ? "ml-0" : ""}
`}
        >
          {item}
        </div>
      ))}
    </div>
  ))}
</div>

  {/* Image */}
  <div className="mt-10 flex justify-center">
    <img
      src={Mobimage}
      alt="Meera portrait"
      className="w-full max-w-[260px] object-contain"
    />
  </div>
</div>

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center bg-[#F59E0B] px-8 py-4 font-nicky text-[12px] font-bold uppercase tracking-[0.12em] text-black transition-colors duration-200 hover:bg-[#D88907]"
        >
          Step Into Your Power
        </button>

        <p className="mx-auto mb-14 mt-14 max-w-4xl text-[28px] leading-tight text-[#F59E0B] sm:text-[25px] font-elmessiri">
          15+ national and international certifications supporting leadership transformation
        </p>
      </div>
    </section>
  );
}
