import star from "../assets/stars.png";

const reviews = [
    {
        text: "The most useful coaching I’ve had in 11 years your tips boosted my confidence and senior feedback immediately.",
        name: "ASHWINI SHAILESH",
        role: "Associate Director - Operations",
    },
    {
        text: "Realistic, pragmatic, and empowering left with a clear, actionable priority plan.",
        name: "ANJANA VENKATARAMAN",
        role: "Senior Research Analyst, Frost & Sullivan",
    },
    {
        text: "Structured, precise guidance that mapped my intrinsic and extrinsic challenges into a clear improvement plan.",
        name: "VINDHYA SURESH PRASAD",
        role: "Senior Consultant & Analyst",
    },
];

export default function ReviewsSection() {
    return (
        <section className="bg-[#F4EFEA] py-16 md:py-20">
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Heading */}
                <div className="mb-12 text-center md:text-left">

  <h2 className="text-[34px] md:text-[42px] font-medium text-[#2B2B2B] font-NickySans leading-tight">
    Read the reviews
  </h2>

  <h3 className="text-[32px] md:text-[38px] text-[#FC7900] font-elmessiri leading-tight">
    Sign up with confidence
  </h3>

  <p className="text-[#7E6E61] text-[15px] md:text-[16px] mt-4 max-w-[620px] mx-auto md:mx-0 font-NickySans">
    Real experiences from professionals who've strengthened their leadership
    skills, confidence, and career direction through leadership coaching
    with me.
  </p>

</div>

                {/* Review Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm border border-[#E8E2DC] flex flex-col h-full"
                        >
                            <p className="text-[#3D3D3D] text-[14px] leading-relaxed">
                                "{review.text}"
                            </p>

                            {/* Stars */}
                            <div className="flex gap-1 mt-4">
                                <img src={star} alt="star" className="w-20" />
                            </div>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-auto pt-5">
                                <div className="w-9 h-9 bg-[#EFEAE6] rounded-full"></div>

                                <div>
                                    <p className="text-[13px] font-semibold text-[#2B2B2B]">
                                        {review.name}
                                    </p>

                                    <p className="text-[12px] text-[#8A8179]">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}