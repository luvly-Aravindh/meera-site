import mainImage from "../assets/IMG_5500.JPG";
import arrowIcon from "../assets/arrow.png";

export default function PerformanceSection() {
  const items = [
    "Diagnostic and context setting",
    "Custom learning design",
    "Experiential learning",
    "Coaching-led facilitation",
    "Application and reinforcement",
    "Measurable impact tracking",
  ];

  return (
    <section className="bg-[#F5F1ED] py-16">
      <div className="max-w-full px-6 lg:px-0 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Image */}
        <div className="h-[480px] md:h-[520px] lg:h-[600px] order-2 lg:order-1">
          <img
            src={mainImage}
            alt="Speaker"
            className="w-full h-full object-cover rounded-md transform scale-x-[-1]"
          />
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-[26px] lg:text-[45px] font-semibold text-gray-900 leading-snug font-NickySans ">
            How Performance <br /> Transformation Happens
          </h2>

          <p className="text-gray-500 mt-3 text-base font-NickySans ">
            Every engagement is structured to create visible, sustainable results.
          </p>

          <div className="mt-8 space-y-5">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b border-gray-200 pb-4 font-NickySans"
              >
                <img src={arrowIcon} alt="arrow" className="w-4 h-4" />
                <p className="text-gray-700 font-NickySans text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
