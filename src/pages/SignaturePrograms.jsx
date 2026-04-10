import { useState } from 'react'
import stageImage from '../assets/coach.jpg'
import leftCardBg from '../assets/sm.jpg'
import rightCardBg from '../assets/sm-2.png'
import groupImage from '../assets/right.jpg'
import arrow from '../assets/arrow.png'
import Reality from '../Reality'
import New from '../compoents/New'
import leadershipImage from '../assets/image-1.JPG'
import bgImg from "../assets/bgimage.JPG";
import mainimage from "../assets/main.jpg";
import newArrowImage from '../assets/down-right-arrow 5.png';
import mainimage1 from "../assets/media.jpg";

const individualJourneys = [
  {
    title: 'Rise',
    subtitle: 'The Phoenix',
    description:
      'For professionals with 5-10 years of experience ready to build confidence, visibility, and leadership foundations.',
  },
  {
    title: 'Shine',
    subtitle: 'The Lighthouse',
    description:
      'For leaders with 8-15 years of experience looking to strengthen influence, executive presence, and strategic thinking.',
  },
  {
    title: 'Thrive',
    subtitle: 'The Crown',
    description:
      'A high-impact 1:1 coaching experience for leaders stepping into senior roles or redefining their leadership identity.',
  },
]


const work = [
  "End-to-End Leadership Journey Design",
  "Leadership Capability Framework Development",
  "L&D Consulting, Advisory & Corporate Empanelment"
];
const topics = [
  "Emotionally Intelligent Leadership at Work",
  "Mindset Shift for Sustainable Performance",
  "Building a Culture of Ownership & Accountability",
  "Resilient Leadership & Change Readiness",
  "High-Performance Teams & Collaboration",
];

const programs = [
  "Manager-as-Coach Capability Program",
  "Hi-Potential Leadership Acceleration Program",
  "Women Leaders: Visibility & Influence Journey",
  "First-Time Manager to Confident Leader",
  "Leadership Transition Coaching Program",
];

const leadershipPrograms = [
  "Executive Communication & Presence Mastery",
  "Influence without Authority",
  "Collaboration & Stakeholder Effectiveness",
  "Leading with Confidence & Gravitas",
  "High-Impact Business Communication"
];

const workshopTopics = [
  'Career Acceleration',
  'Workplace Visibility',
  'Emotional Intelligence',
  'Executive Presence & Influence',
  'Resilience & Growth Mindset',
]

const coachingTopics = [
  'Career Transition & Role Expansion',
  'Confidence & Executive Presence',
  'Leadership Identity & Visibility',
  'Decision-Making & Clarity',
  'Women Leaders Growth Coaching',
]

const orgPrograms = [
  {
    title: 'Leadership & Power Skills Programs',
    items: [
      'Executive Communication & Presence Mastery',
      'Influence without Authority',
      'Collaboration & Stakeholder Effectiveness',
      'Leading with Confidence & Gravitas',
      'High-Impact Business Communication',
    ],
  },
  {
    title: 'Coaching & Mentoring Engagements',
    items: [
      'Manager-as-Coach Capability Program',
      'Hi-Potential Leadership Acceleration Program',
      'Women Leaders: Visibility & Influence Journey',
      'First-Time Manager to Confident Leader',
      'Leadership Transition Coaching Program',
    ],
  },
  {
    title: 'Culture & Capability Building Interventions',
    items: [
      'Emotionally Intelligent Leadership at Work',
      'Mindset Shift for Sustainable Performance',
      'Building a Culture of Ownership & Accountability',
      'Resilient Leadership & Change Readiness',
      'High-Performance Teams & Collaboration',
    ],
  },
]

const consultingTopics = [
  'End-to-End Leadership Journey Design',
  'Assessment Centers & Development Centers',
  'L&D Consulting, Advisory & Corporate Empanelment',
]
const chipClass =
  'rounded-full border border-[#E9CFA7] bg-white px-4 py-2 text-sm md:text-base text-[#543116]'

function TopicGrid({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((item) => (
        <span key={item} className={chipClass}>
          {item}
        </span>
      ))}
    </div>
  )
}

function ArrowList({ items, arrowImg, textColor = 'text-[#1A1A1A]' }) {
  return (
    <ul className="mt-6 border-t border-[#D8D2C9]">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-4 border-b border-[#D8D2C9] py-4">
          <span className="relative block h-6 w-8 shrink-0">
            <span className="absolute right-0 top-0">
              <img
                src={arrowImg || arrow}
                alt="line"
                className="h-6 w-6"
              />
            </span>
          </span>
          <span className={`${textColor} text-[18px] lg:text-[22px] font-NickySans`}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function JourneySideCard({ journey, isActive, onClick, imageSrc, imageFit = 'cover', align = 'left' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative min-h-[220px] w-full overflow-hidden bg-[#F47A0B] text-left ${isActive ? 'ring-2 ring-[#F47A0B]' : ''}`}
    >
   
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full  transition-opacity max-w-[100rem] ${imageFit === 'contain' ? 'h-full object-contain' : 'object-cover'}`}
      />
      <div className="absolute bottom-7 left-7 z-10">
        <p className="font-elmessiri text-[44px] leading-none text-white">{journey.title}</p>
        <p className="mt-1 text-sm uppercase tracking-[0.12em] text-white">{journey.subtitle}</p>
      </div>
    </button>
  )
}

export default function SignaturePrograms() {
  const [activeTab, setActiveTab] = useState('individuals')
  const [activeJourney, setActiveJourney] = useState(1)
  const selectedJourney = individualJourneys[activeJourney]
  const leftJourneyIndex = (activeJourney + individualJourneys.length - 1) % individualJourneys.length
  const rightJourneyIndex = (activeJourney + 1) % individualJourneys.length

  return (
    <main className="bg-gradient-to-b from-[#F4F4F4] via-[#FFFDF9] to-[#FDF3E2] text-[#3A2615]">
      <section className="mx-auto max-w-[90rem] px-4 sm:px-8 lg:px-12 py-12 md:py-16 text-center lg:text-left">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center">
            <p className="inline-flex items-center justify-center gap-3 text-sm tracking-[0.18em] uppercase text-[#FC7900] font-semibold">
              <span className="h-px w-8 bg-[#D96F12]" aria-hidden="true" />
              Signature Programs
            </p>

            <h1 className="mt-6 leading-[1.09]">
              <span className="block text-[30px] sm:text-[56px] lg:text-[64px] font-extrabold text-black font-onest mb-2 sm:mb-0">
                Choose the Journey
              </span>

              <span className="block text-[30px] sm:text-[56px] lg:text-[64px] font-extrabold text-black font-onest">
                that{" "}
                <span className="font-elmessiri font-normal text-[#FC7900]">
                  Matches Your Stage
                </span>
              </span>
            </h1>
          </div>

          <p className="max-w-2xl sm:text-xl text-base leading-relaxed text-[#000]">
            Designed to support growth at every stage - from building confidence to
            leading with influence. Available virtually and in person.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-[95rem] px-2 sm:px-8 lg:px-0 pb-6">

        {/* TAB HEADER */}
        <div className="border-b max-w-[95rem]">
          <div className="mx-auto max-w-[90rem] flex flex-wrap gap-8">
            <button
              type="button"
              onClick={() => setActiveTab('individuals')}
              className={`pb-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${activeTab === 'individuals'
                ? 'border-b-2 border-[#F47A0B] text-[#F47A0B]'
                : 'text-[#7C7368] hover:text-[#5D5246]'
                }`}
            >
              For Individuals
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('organizations')}
              className={`pb-3 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${activeTab === 'organizations'
                ? 'border-b-2 border-[#F47A0B] text-[#F47A0B]'
                : 'text-[#7C7368] hover:text-[#5D5246]'
                }`}
            >
              For Organizations
            </button>
          </div>
        </div>


        {activeTab === 'individuals' ? (
          <div className="mt-8">

            <div className="grid overflow-hidden lg:grid-cols-3">
              <JourneySideCard
                journey={individualJourneys[leftJourneyIndex]}
                isActive={false}
                onClick={() => setActiveJourney(leftJourneyIndex)}
                imageSrc={leftCardBg}
                align="left"
              />

              <article className="bg-[#F47A0B] px-8 py-10 text-white md:px-12 md:py-12 text-center lg:text-left">
                <h3 className="font-elmessiri text-[56px] leading-none">
                  {selectedJourney.title}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#FFE5CB]">
                  {selectedJourney.subtitle}
                </p>

                <p className="mt-8 max-w-md text-lg md:text-2xl leading-relaxed">
                  {selectedJourney.description}
                </p>
              </article>

              <JourneySideCard
                journey={individualJourneys[rightJourneyIndex]}
                isActive={false}
                onClick={() => setActiveJourney(rightJourneyIndex)}
                imageSrc={rightCardBg}
                imageFit="contain"
                align="right"
              />
            </div>


            <div className="overflow-hidden">

              {/* SECTION 1 */}
              <div className="grid lg:grid-cols-2 items-center">

                <article className="px-2 py-12 md:px-16 md:py-16">

                  <h3 className="text-2xl md:text-3xl font-semibold text-[#111111]">
                    Workshops & Masterclasses
                  </h3>

                  <p className="mt-4 text-[16px] md:text-xl text-black">
                    Focused sessions designed for immediate, practical breakthroughs.
                  </p>

                  <div className="mt-8">
                    <ArrowList items={workshopTopics} />
                  </div>

                </article>

                <div className="h-[360px] md:h-auto">
                  <img
                    src={groupImage}
                    alt="Workshop collaboration"
                    className="h-full w-full object-cover"
                  />
                </div>

              </div>


              {/* SECTION 2 */}
              <div className="grid lg:grid-cols-2 items-center">

                <div className="order-2 lg:order-1 h-[360px] md:h-[480px]">
                  <img
                    src={stageImage}
                    alt="Leadership coaching event"
                    className="h-full w-full object-cover"
                  />
                </div>

                <article className="order-1 lg:order-2 px-2 py-12 md:px-16 md:py-16">

                  <h3 className="text-3xl md:text-4xl font-semibold text-[#111111]">
                    1:1 Coaching
                  </h3>

                  <h3 className="mt-4 text-sm md:text-xl text-black">
                    Personalised leadership & career coaching designed around your goals.
                  </h3>

                  <div className="mt-8">
                    <ArrowList items={coachingTopics} />
                  </div>

                  <div className="flex justify-center lg:justify-start">
                  <a
  href="https://tidycal.com/meeragrover/book-your-call-with-meera"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 bg-[#F47A0B] px-6 py-3 text-xs font-semibold tracking-wider text-white uppercase hover:bg-[#e06c05] transition font-NickySans">
    Start Your Leadership Journey
  </button>
</a>
                  </div>

                </article>

              </div>

              <Reality />
              <div className="min-h-[400px] bg-[#fff] flex items-center justify-center px-5 font-['Inter',sans-serif]">
                {/* Glass card */}
                <div className="max-w-[920px] w-full bg-[#fff] backdrop-blur-xl border border-white/5 px-2 py-12 md:px-14 md:py-0 flex flex-col items-center justify-center text-center">

                  {/* Headline */}
                  <h1 className="font-NickySans text-[#111111] text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.7] tracking-tight mb-6 max-w-[1000px] font-nicky">
                    You Deserve More Than Just Getting By
                  </h1>

                  {/* Description */}
                  <p className="text-[#7b6d63] text-lg sm:text-xl leading-relaxed mb-12 max-w-auto font-nickySans">
                    You don’t have to keep questioning what’s next. There is a way to grow
                    where you are or move confidently toward where you truly belong.
                    <br />
                    This is your moment to lead with clarity, confidence, and executive presence.
                  </p>

                  {/* CTA button */}
                 <a
  href="https://tidycal.com/meeragrover/book-your-call-with-meera"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="font-nickySans bg-[#f47a0b] text-white font-semibold text-base sm:text-lg uppercase tracking-widest py-5 px-12 shadow-lg hover:scale-105 hover:shadow-orange-600 transition-transform duration-200">
    LET'S DO THIS
  </button>
</a>

                </div>

              </div>

              <New />

            </div>

          </div>

        ) : (

          <>
            {/* First Grid */}
            <div className="grid lg:grid-cols-2 items-center mb-1">
              <article className="px-0 py-12 md:px-16 md:py-16">
                <h3 className="text-[26px] md:text-[30px] font-semibold text-[#111111] leading-[48px] font-nickySans text-center lg:text-left">
                  Leadership & <br className="hidden sm:block" /> Power Skills Programs
                </h3>

                <div className="mt-8 font-nickySans">
                  <ArrowList items={leadershipPrograms} />
                </div>
              </article>

              <div className="h-[360px] md:h-[480px]">
                <img
                  src={leadershipImage}
                  alt="Leadership training discussion"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Section with background image */}
            <section
              className="relative max-w-[95rem] mx-auto bg-cover bg-center py-16 lg:py-24  "
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="absolute inset-0 bg-black/70"></div>

              <div className="relative max-w-[88rem] mx-auto px-6">
                <div className="max-w-xl text-white">
                  <h2 className="text-[26px] md:text-5xl font-semibold mb-10 leading-tight font-nickySans text-center lg:text-left">
                    Coaching & <br /> Mentoring Engagements
                  </h2>

                  <div className="space-y-6 font-nickySans ">
                    {programs.map((item, index) => (
                      <div key={index}>
                        <div className="flex items-center gap-4">
                          <img src={arrow} alt="arrow" className="w-5 h-5" />
                          <p className="text-[20px] md:text-2xl ">{item}</p>
                        </div>
                        <div className="border-b border-white/30 mt-4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Last Grid */}
            <div className="grid lg:grid-cols-2 items-center bg-[#FF7200] mb-4">
              <div className="order-2 lg:order-1 h-[360px] md:h-[480px] lg:h-[600px]">
                <img
                  src={mainimage}
                  alt="Leadership coaching event"
                  className="h-full w-full object-cover"
                />
              </div>

              <article className="order-1 lg:order-2 px-8 py-12 md:px-16 md:py-16 text-white/90 font-nickySans ">
                <h3 className="text-2xl md:text-4xl font-semibold text-white/90 text-center lg:text-left">
                  Culture & Capability Building Interventions
                </h3>

                <div className="mt-8 text-white/80 font-nickySans">
                  <ArrowList items={topics} arrowImg={newArrowImage} textColor='text-white/90' />
                </div>
              </article>
            </div>



            <div className="grid lg:grid-cols-2 items-center ">
              <div className="order-2 lg:order-1 h-[360px] md:h-[480px] lg:h-[600px]">
                <img
                  src={mainimage1}
                  alt="Leadership coaching event"
                  className="h-full w-full object-cover"
                />
              </div>

              <article className="order-1 lg:order-2 px-2 py-12 md:px-16 md:py-16 font-nickySans ">
                <h3 className="text-3xl md:text-4xl font-semibold text-center lg:text-left ">
                  Culture & Capability Building Interventions
                </h3>

                <div className="mt-8 text-white/80 font-nickySans">
                  <ArrowList items={work} />
                </div>
              </article>
            </div>
            <div className="mt-10 ">
              <Reality />
            </div>
            <div className="min-h-[400px] bg-[#fff] flex items-center justify-center px-5 font-['Inter',sans-serif]">
              {/* Glass card */}
              <div className="max-w-[920px] w-full bg-[#fff] backdrop-blur-xl border border-white/5 px-8 py-12 md:px-14 md:py-0 flex flex-col items-center justify-center text-center">

                {/* Headline */}
                <h1 className="font-NickySans text-[#111111] text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.5] tracking-tight mb-6 max-w-[1000px] font-nicky">
                  You Deserve More Than Just Getting By
                </h1>

                {/* Description */}
                <p className="text-[#7b6d63] text-lg sm:text-base leading-relaxed mb-12 max-w-[620px] font-nickySans">
                  You don’t have to keep questioning what’s next. There is a way to grow
                  where you are or move confidently toward where you truly belong.
                  <br />
                  This is your moment to lead with clarity, confidence, and executive presence.
                </p>

                {/* CTA button */}

               <a
  href="https://tidycal.com/meeragrover/book-your-call-with-meera"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="mt-8 bg-[#f47b20] hover:bg-[#df6f1b] text-white uppercase tracking-[0.12em] text-[13px] px-10 py-4 transition">
    LET'S DO THIS
  </button>
</a>

              </div>

            </div>

            <New />
          </>




        )
        }




      </section>


    </main>
  )
}
