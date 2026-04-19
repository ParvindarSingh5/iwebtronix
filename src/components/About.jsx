const team = [
  {
    name: 'Parvindar Singh',
    role: 'Technical Director',
    exp: '12+ years in software engineering and product delivery',
    avatar: 'PS',
  },
  {
    name: 'Abhishek Patel',
    role: 'Managing Director',
    exp: 'Finance, Operations, Tech & Marketing leadership',
    avatar: 'AP',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-100 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Who We Are</span>
          <h2 className="section-title">Built on Expertise. Driven by Results.</h2>
          <p className="section-sub">
            iWebtronix is a globally oriented IT services firm with deep cross-industry experience,
            delivering transparent, agile, and expert-led solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-5">
            {[
              ['Agile & Scalable Delivery', 'We adapt quickly and ship quality products on schedule.'],
              ['Transparent Communication', 'Real-time updates and clear ownership throughout every project.'],
              ['Cross-Industry Expertise', 'From hospitality to healthcare — we understand your domain.'],
              ['Global Delivery, Local Insight', '9+ years managing 15+ member teams across time zones.'],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3.5 h-3.5 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">{title}</div>
                  <div className="text-slate-500 text-sm mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Our Process</h3>
            <ol className="space-y-5">
              {['Discovery', 'Strategy & Planning', 'Implementation', 'Evaluation & Optimisation'].map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="w-9 h-9 rounded-xl bg-brand-500 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-medium text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Leadership */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-800">Leadership Team</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {team.map(m => (
            <div key={m.name} className="card text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                {m.avatar}
              </div>
              <div className="font-bold text-slate-800">{m.name}</div>
              <div className="text-brand-500 text-sm font-semibold mt-1">{m.role}</div>
              <div className="text-slate-500 text-sm mt-2">{m.exp}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
