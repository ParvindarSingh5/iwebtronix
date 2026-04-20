export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-brand-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="pill">About iWebtronix</span>
            <h2 className="section-title mt-5 text-left">
              We Design Your <span className="text-brand-500">Business</span>,<br/>
              Not Just Software.
            </h2>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed">
              Based in Vadodara, iWebtronix has spent <strong className="text-ink-800">12+ years</strong> building
              custom software that matches how businesses actually run. Our sweet spot:
              <strong className="text-ink-800"> restaurants & F&amp;B</strong> — but we also serve startups, retailers,
              and enterprises who need tech that just works.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ['🎯 Industry Focus', 'Deep F&B knowledge — not generic software.'],
                ['⚡ Fast Delivery', 'Agile sprints, transparent progress.'],
                ['🛠️ Full Ownership', 'Design, build, deploy, maintain.'],
                ['🤝 Long-term Partner', 'Post-launch support & growth.'],
              ].map(([t, d]) => (
                <div key={t} className="card">
                  <div className="font-bold text-ink-900 text-sm">{t}</div>
                  <div className="text-xs text-ink-500 mt-1.5 leading-relaxed">{d}</div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary">Let's Talk</a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-400/10 border border-ink-100">
              <h3 className="text-lg font-bold text-ink-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-brand-400 text-white flex items-center justify-center text-sm">📐</span>
                Our 4-Step Process
              </h3>
              <ol className="space-y-5">
                {[
                  ['Discovery', 'Understand your business, users, pain points.'],
                  ['Strategy & Planning', 'Scope, roadmap, milestones, pricing.'],
                  ['Implementation', 'Build, test, iterate with daily updates.'],
                  ['Evaluation & Optimisation', 'Launch, measure, improve, maintain.'],
                ].map(([step, desc], i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-500 text-white font-bold flex items-center justify-center text-sm flex-shrink-0 shadow-md shadow-brand-400/30">
                      {i + 1}
                    </span>
                    <div>
                      <div className="font-bold text-ink-900">{step}</div>
                      <div className="text-sm text-ink-500 mt-0.5">{desc}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
