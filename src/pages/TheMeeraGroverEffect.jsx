import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import ladyOne from '../assets/lady-1.png'
import manOne from '../assets/man-1.png'
import manTwo from '../assets/man-2.png'

const reviews = [
  {
    text: 'My buying experience is so nice, and received me very politely. Riding experience is also very good. Very good performance. I never experienced such a kind of performance. Very good service.',
    name: 'Karan',
    time: '1 week ago',
    avatar: manOne,
  },
  {
    text: 'I love my e-bike and the customer service is excellent. They respond in a timely manner with loads of information about e-bikes, accessories and maintenance information.',
    name: 'Catherine',
    time: '10 days ago',
    avatar: ladyOne,
  },
  {
    text: 'Visited to EO store. Product quality, particularly welds, looked very premium. My wife and I took a small test ride in the parking lot area and we were fully satisfied.',
    name: 'Peter',
    time: '2 weeks ago',
    avatar: manTwo,
  },
  {
    text: 'The consultation was practical and clear. I walked away with direction, stronger confidence, and immediate actions that improved my leadership communication.',
    name: 'Anita',
    time: '3 weeks ago',
    avatar: ladyOne,
  },
]
const GREEN = '#6DB54A'

function Stars() {
  return <p className="text-[#00B67A] tracking-[0.2em] text-lg">*****</p>
}

export default function TheMeeraGroverEffect() {
  const sliderRef = useRef(null)

  const scrollByCard = (direction) => {
    if (!sliderRef.current) return
    const amount = 360
    sliderRef.current.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <main className="bg-gradient-to-b from-[#FFF7EC] via-[#FFFFFF] to-[#F6F0E2] text-[#171717]">
      <section className="mx-auto max-w-6xl  px-4 sm:px-8 lg:px-12 pt-10 md:pt-14 pb-6">
        <div className="rounded-3xl border border-[#E9CFA8] bg-gradient-to-r from-[#FFF2DE] via-white to-[#F6E7CF] p-7 md:p-10 shadow-[0_24px_50px_-30px_rgba(222,130,52,0.45)]">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-[#B45E17] text-center">
            The Meera Grover Effect
          </p>
          <h2 className="leading-tight mt-3 text-center">
            <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
              From Attendees to Confident Leaders,
            </span>
            <span
              className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
              style={{ color: GREEN }}
            >
              see how the "Meera effect" worked for aspiring leaders.
            </span>
          </h2>
  <div className="mt-6 md:mt-10 flex flex-col items-center md:items-center space-y-4">
         <button
  onClick={() => {
    setTimeout(() => {
      document
        .getElementById("your-program")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }}
  className="group relative overflow-hidden
             inline-flex items-center justify-center
             rounded-md px-8 sm:px-10 py-4 sm:py-5
             text-sm sm:text-[20px] font-bold tracking-[0.3px]
             bg-[#000] text-[#fff]
             border border-[#f5f5f5]
             shadow-[0_6px_0_#ea7c22]
             transition-all duration-500 ease-out
             hover:scale-105 hover:-translate-y-1
             hover:shadow-[0_12px_20px_rgba(234,124,34,0.5)]
             active:translate-y-[2px] active:shadow-[0_4px_0_#ea7c22]
             max-w-[320px] sm:max-w-full text-center"
>
  {/* Button Text */}
  <span className="relative z-10">
            Your story of transformation starts here.
  </span>

  {/* Shine Sweep */}
  <span
    className="absolute top-0 -left-[60%] w-[50%] h-full
               bg-[#ea7c22]/40
               transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)]
               [clip-path:polygon(0%_0%,55%_0%,100%_100%,25%_100%)]
               group-hover:left-[130%] group-hover:opacity-0"
  />

  {/* Subtle Overlay */}
  <span
    className="absolute inset-0 bg-[#ea7c22]/10
               opacity-0 group-hover:opacity-100
               transition-opacity duration-500"
  />
</button>



          </div>
                 
        </div>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 py-10 md:py-14">
        <div className="text-center">
          <h1 className="leading-tight">
            <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
              Read the reviews,
            </span>
            <span
              className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
              style={{ color: GREEN }}
            >
              sign up with confidence.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-4xl text-base md:text-xl text-neutral-700">
            Real experiences from professionals who&apos;ve strengthened their leadership skills, confidence,
            and career direction through leadership coaching with me.
          </p>

          <p className="mt-6 text-lg md:text-2xl font-semibold text-[#3A3A3A]">
            The 89+ programs | 3000+ hours | 90% satisfaction
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[280px_1fr] items-start">
          <aside className="lg:pt-8">
            <Quote className="h-14 w-14 text-[#9A9A9A]" strokeWidth={2.5} />
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-5xl font-medium leading-tight">
              What our customers are saying
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => scrollByCard(-1)}
                className="rounded-full border border-neutral-400 p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="h-[2px] w-24 bg-neutral-400" />
              <button
                type="button"
                aria-label="Next review"
                onClick={() => scrollByCard(1)}
                className="rounded-full border border-neutral-400 p-2 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </aside>

          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <article
                key={`${review.name}-${review.time}`}
                className="min-w-[330px] max-w-[330px] rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-sm"
              >
                <p className="text-[1.05rem] leading-8 text-[#252525] min-h-[240px]">{review.text}</p>
                <Stars />

                <div className="mt-5 flex items-center gap-3">
                  <img src={review.avatar} alt={review.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="text-xl font-medium">{review.name}</p>
                    <p className="text-sm text-neutral-500">{review.time}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
