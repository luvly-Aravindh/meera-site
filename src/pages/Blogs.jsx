import thumb1 from '../assets/thumb1.png'
import thumb2 from '../assets/thumb2.png'
import thumb3 from '../assets/thumb3.png'

const posts = [
  {
    title: 'How to Build Executive Presence Without Changing Who You Are',
    excerpt:
      'A practical guide to showing up with confidence, clarity, and credibility in high-stakes conversations.',
    image: thumb1,
    tag: 'Leadership Presence',
    date: 'March 2026',
  },
  {
    title: 'From High Performer to Influential Leader: The Shift That Matters',
    excerpt:
      'Why technical excellence alone is not enough, and what to focus on to earn trust and influence.',
    image: thumb2,
    tag: 'Career Growth',
    date: 'February 2026',
  },
  {
    title: 'Decision-Making Under Pressure: A Framework for Modern Leaders',
    excerpt:
      'Use this simple framework to make better decisions faster, even when stakes are high and information is incomplete.',
    image: thumb3,
    tag: 'Leadership Mindset',
    date: 'January 2026',
  },
]
const GREEN = '#6DB54A'

export default function Blogs() {
  return (
    <main className="bg-gradient-to-b from-[#FFF8EE] via-white to-[#F6F0E2] text-[#2A1A10]">
      <section className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="rounded-3xl border border-[#E8CCA5] bg-gradient-to-r from-[#FFF2DE] via-white to-[#F7E6CC] p-7 md:p-10">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-[#B05B16] text-center">Blogs</p>
          <h1 className="leading-tight mt-3 text-center">
            <span className="block text-[30px] sm:text-4xl tracking-normal lg:text-[42px] font-extrabold text-neutral-900 font-onest pb-0 lg:pb-6">
              Ideas to Inspire
            </span>
            <span
              className="block text-3xl sm:text-3xl lg:text-[56px] font-normal italic font-brewfine mt-4 lg:mt-0"
              style={{ color: GREEN }}
            >
              Your Next Move
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#5E3C24] text-center">
            Insights for professionals who want to lead with more clarity, confidence, and impact.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-[#EAD3B4] bg-white shadow-[0_18px_40px_-30px_rgba(204,119,41,0.45)]"
            >
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs md:text-sm text-[#8A5A37]">
                  <span className="rounded-full bg-[#FCE6C8] px-3 py-1 font-medium">{post.tag}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-[#2B1C13]">{post.title}</h2>
                <p className="mt-3 text-[#65432A]">{post.excerpt}</p>
                <a
                  href="#"
                  className="mt-5 inline-flex rounded-full bg-[#E97C23] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#D46F1A] transition-colors"
                >
                  Read Article
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
