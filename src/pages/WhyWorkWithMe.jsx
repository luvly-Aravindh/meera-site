const individualChallenges = [
  'Feeling invisible despite strong performance',
  'Low confidence or executive presence',
  'Self-doubt and limiting beliefs',
  'Struggling with influence and decision-making',
]

const orgChallenges = [
  'Managers who struggle to inspire or lead',
  'Poor collaboration and communication gaps',
  'High-potential leaders not stepping up',
  "Training that doesn't translate into real change",
]

const frameworkItems = [
  'NLP Coaching for mindset and behavioral shifts',
  'Transactional Analysis and Behavioral Psychology',
  'ICF-aligned Coaching Frameworks',
  'Psychometric and evidence-based tools',
  '70:20:10 applied learning model',
]

const transformationSteps = [
  'Diagnostic and context setting',
  'Custom learning design',
  'Experiential learning',
  'Coaching-led facilitation',
  'Application and reinforcement',
  'Measurable impact tracking',
]
const GREEN = '#6DB54A'

const chipClass =
  'inline-flex items-center rounded-full border border-[#E9CAA2] bg-white px-4 py-2 text-sm md:text-base text-[#5A361B]'

function ChipGroup({ items }) {
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

export default function WhyWorkWithMe() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8EE] via-[#FFFCF8] to-[#FDEFD9] text-[#3E2816]">
      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="rounded-3xl border border-[#E4C18D] bg-white p-6 md:p-10 shadow-[0_24px_55px_-30px_rgba(208,104,23,0.5)]">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-[#B35A15]">
            Why Work With Me
          </p>
          <h1 className="leading-tight mt-3">
            <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
              Why Do Ambitious Professionals Choose
            </span>
            <span
              className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
              style={{ color: GREEN }}
            >
              My Leadership Development Programs?
            </span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-[#5F3A1E] max-w-5xl">
            With 21+ years in global L&D leadership and 1,200+ senior leaders coached, I have worked with
            professionals across Hapag-Lloyd, Frost & Sullivan, Godrej, and HCL.
          </p>
          <p className="mt-3 text-base md:text-lg text-[#5F3A1E] max-w-5xl">
            As an ICF certified coach, International NLP Master Practitioner, and specialist in behavioral
            psychology, I combine executive leadership coaching with real business context.
          </p>
          <p className="mt-3 text-base md:text-lg text-[#5F3A1E] max-w-5xl">
            This is not generic coaching. It is structured, personalised, and built to create visible growth in
            performance, presence, and influence.
          </p>
          <p className="mt-3 text-base md:text-lg text-[#5F3A1E] max-w-5xl">
            When mindset, communication, and leadership identity align, growth becomes inevitable.
          </p>
          <p className="mt-3 text-base md:text-lg text-[#5F3A1E] max-w-5xl">
            Whether you are growing within your organization or preparing for your next step, we unlock the leader
            you are ready to become.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#"
              className="inline-flex rounded-full bg-[#E97C23] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#D46D19]"
            >
              Build Your Leadership Blueprint
            </a>
            <p className="text-sm md:text-base text-[#70482B]">
              Join leaders who are already transforming how they show up and lead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 pb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-[#8D4712]">
          The Professional Growth Challenges I Help You Overcome
        </h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-[#E8CAA1] bg-[#FFF6EA] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#A14F10]">For Individuals</h3>
            <ChipGroup items={individualChallenges} />
          </article>

          <article className="rounded-3xl border border-[#E8CAA1] bg-white p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-[#A14F10]">For Teams & Organizations</h3>
            <ChipGroup items={orgChallenges} />
          </article>
        </div>

        <p className="mt-6 text-lg md:text-xl font-medium text-[#6A3F1F]">
          This is where real leadership transformation begins.
        </p>
      </section>

      <section className="mx-auto max-w-[95rem] px-4 sm:px-8 lg:px-12 py-8">
        <div className="rounded-3xl border border-[#E4C18D] bg-white p-6 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8D4712]">My Approach</h2>
          <p className="mt-4 text-base md:text-lg text-[#5C381F] max-w-5xl">
            My work combines leadership & career coaching with psychology and proven frameworks to create measurable
            growth in performance, presence, and decision-making.
          </p>
          <p className="mt-2 text-base md:text-lg text-[#5C381F] max-w-5xl">
            This is not a theory. It is designed for real-world leadership challenges.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-[#F0D9B8] bg-[#FFF9F1] p-5">
              <h3 className="text-lg md:text-2xl font-semibold text-[#9A4D12]">The Framework Behind the Work</h3>
              <p className="mt-2 text-[#5A371F]">
                I integrate globally recognised methods to deliver executive leadership coaching that drives lasting
                change:
              </p>
              <ChipGroup items={frameworkItems} />
            </article>

            <article className="rounded-2xl border border-[#F0D9B8] bg-[#FFF9F1] p-5">
              <h3 className="text-lg md:text-2xl font-semibold text-[#9A4D12]">How Performance Transformation Happens</h3>
              <p className="mt-2 text-[#5A371F]">
                Every engagement is structured to create visible, sustainable results.
              </p>
              <ul className="mt-4 space-y-2">
                {transformationSteps.map((step) => (
                  <li key={step} className="text-sm md:text-base text-[#5A371F]">
                    {step}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}
