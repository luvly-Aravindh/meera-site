const individualJourneys = [
  {
    title: 'RISE - The Phoenix',
    description:
      'For professionals with 5-10 years of experience ready to build confidence, visibility, and leadership foundations.',
  },
  {
    title: 'SHINE - The Lighthouse',
    description:
      'For leaders with 8-15 years of experience looking to strengthen influence, executive presence, and strategic thinking.',
  },
  {
    title: 'THRIVE - The Crown',
    description:
      'A high-impact 1:1 coaching experience for leaders stepping into senior roles or redefining their leadership identity.',
  },
]

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
const GREEN = '#6DB54A'

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

export default function SignaturePrograms() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8EF] via-[#FFFDF9] to-[#FDF3E2] text-[#3A2615]">
      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="rounded-3xl border border-[#E5C79A] bg-white/95 p-6 md:p-10 shadow-[0_24px_50px_-30px_rgba(233,124,35,0.4)]">
          <p className="text-sm tracking-[0.2em] uppercase text-[#BC6419] font-semibold">Signature Programs</p>
          <h1 className="leading-tight mt-3">
            <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
              Choose the professional growth journey
            </span>
            <span
              className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
              style={{ color: GREEN }}
            >
              that matches your stage of growth.
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-4xl text-[#5F3A1E]">
            Designed to support growth at every stage, from building confidence to leading with influence.
            Available virtually and in person.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 pb-6">
        <h2 className="text-2xl md:text-4xl font-bold text-[#8D4712]">For Individuals</h2>

        <div className="mt-6 rounded-3xl border border-[#EACDA3] bg-[#FFF7EA] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-[#A14F10]">Structured Leadership Journeys</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {individualJourneys.map((journey) => (
              <article
                key={journey.title}
                className="rounded-2xl border border-[#F0D9B8] bg-white p-5 shadow-[0_18px_35px_-30px_rgba(161,79,16,0.75)]"
              >
                <h4 className="text-lg font-bold text-[#7A3D0D]">{journey.title}</h4>
                <p className="mt-2 text-sm md:text-base text-[#5A391E]">{journey.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#EACDA3] bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#A14F10]">Workshops & Masterclasses</h3>
            <p className="mt-2 text-[#5F3A1E]">
              Focused sessions designed for immediate, practical breakthroughs.
            </p>
            <TopicGrid items={workshopTopics} />
          </article>

          <article className="rounded-3xl border border-[#EACDA3] bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#A14F10]">1:1 Coaching</h3>
            <p className="mt-2 text-[#5F3A1E]">
              Personalised leadership & career coaching designed around your goals.
            </p>
            <TopicGrid items={coachingTopics} />
          </article>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-[#E97C23] px-6 py-3 text-white font-semibold hover:bg-[#D86C14] transition-colors"
          >
            Start Your Leadership Journey
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 pt-10 pb-6">
        <div className="rounded-3xl border border-[#E3C391] bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8D4712]">For Organizations (B2B Programs)</h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {orgPrograms.map((program) => (
              <article key={program.title} className="rounded-2xl border border-[#F0D9B8] bg-[#FFF9F1] p-5">
                <h3 className="text-lg md:text-xl font-semibold text-[#9A4D12]">{program.title}</h3>
                <ul className="mt-4 space-y-2">
                  {program.items.map((item) => (
                    <li key={item} className="text-sm md:text-base text-[#55351D]">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <article className="mt-6 rounded-2xl border border-[#F0D9B8] bg-[#FFF9F1] p-5">
            <h3 className="text-lg md:text-xl font-semibold text-[#9A4D12]">Consulting, Advisory & Empanelment</h3>
            <TopicGrid items={consultingTopics} />
          </article>

          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-[#E97C23] px-6 py-3 text-white font-semibold hover:bg-[#D86C14] transition-colors"
            >
              Start Your Leadership Journey
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="rounded-3xl border border-[#E2BF88] bg-gradient-to-r from-[#FFF5E6] to-[#FEE9C8] p-7 md:p-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#8D4712]">You Deserve More Than Just Getting By</h2>
          <p className="mt-4 max-w-4xl mx-auto text-base md:text-lg text-[#5C381F]">
            You do not have to keep questioning what is next. There is a way to grow where you are or move
            confidently toward where you truly belong. This is your moment to lead with clarity, confidence,
            and executive presence.
          </p>
          <a
            href="#"
            className="mt-7 inline-flex items-center rounded-full bg-[#C75F0F] px-7 py-3 text-white font-semibold hover:bg-[#AE520C] transition-colors"
          >
            Let&apos;s Do This
          </a>
        </div>
      </section>
    </main>
  )
}
