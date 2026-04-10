import star from "../assets/stars.png";
import Profile1 from "../assets/profile-1.png";
import Profile2 from "../assets/profile-2.png";
import Profile3 from "../assets/profile-3.png";

const reviews = [
  {
    text: "The most useful coaching I’ve had in 11 years. Your tips boosted my confidence and senior feedback immediately.",
    name: "ASHWINI SHAILESH",
    role: "Associate Director - Operations",
    image: Profile1,
  },
  {
    text: "Realistic, pragmatic, and empowering. I left with a clear, actionable priority plan.",
    name: "ANJANA VENKATARAMAN",
    role: "Senior Research Analyst, Frost & Sullivan",
    image: Profile2,
  },
  {
    text: "Structured, precise guidance that mapped my intrinsic and extrinsic challenges into a clear improvement plan.",
    name: "VINDHYA SURESH PRASAD",
    role: "Senior Consultant & Analyst",
    image: Profile3,
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-[#F4EFEA] py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-NickySans text-[34px] font-medium leading-tight text-[#2B2B2B] md:text-[42px]">
            Read the reviews
          </h2>

          <h3 className="font-elmessiri text-[32px] leading-tight text-[#FC7900] md:text-[38px]">
            Sign up with confidence
          </h3>

          <p className="mx-auto mt-4 max-w-[700px] font-NickySans text-[15px] text-[#000] md:mx-0 md:text-xl">
            Real experiences from professionals who've strengthened their leadership
            skills, confidence, and career direction through leadership coaching
            with me.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-xl border border-[#E8E2DC] bg-white p-6 shadow-sm"
            >
              <p className="text-[14px] leading-relaxed text-[#3D3D3D] sm:text-lg">
                "{review.text}"
              </p>

              <div className="mt-4 flex gap-1">
                <img src={star} alt="star" className="w-28" />
              </div>

              <div className="mt-auto flex items-center gap-3 pt-5">
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-[#EFEAE6]"></div>
                )}

                <div>
                  <p className="text-[13px] font-semibold text-[#2B2B2B] sm:text-xl">
                    {review.name}
                  </p>

                  <p className="text-[12px] text-[#8A8179] sm:text-base">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
