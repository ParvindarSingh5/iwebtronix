export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-amber-50" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl translate-y-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <span className="pill animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            Restaurant Tech Experts
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-ink-900">
            We Design Your{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Business.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,5 T200,4" stroke="#fbab2b" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          <p className="mt-7 text-lg md:text-xl text-ink-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Custom software for <strong className="text-ink-800">restaurants &amp; growing businesses</strong> —
            POS billing, CRM, HR, sales tools and digital marketing that drive real growth.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn-primary">
              Start Your Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 pt-8 border-t border-ink-100">
            <div>
              <div className="text-3xl font-extrabold text-ink-900">50+</div>
              <div className="text-xs text-ink-500 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-ink-900">12+</div>
              <div className="text-xs text-ink-500 mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-ink-900">98%</div>
              <div className="text-xs text-ink-500 mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Illustration card */}
        <div className="relative hidden lg:block">
          <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-400/20 p-8 border border-ink-100">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-400"/>
              <span className="w-3 h-3 rounded-full bg-amber-400"/>
              <span className="w-3 h-3 rounded-full bg-green-400"/>
              <span className="ml-3 text-xs text-ink-400 font-mono">restaurant-dashboard.iwebtronix.com</span>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  {label: "Today's Sales", val: '₹ 84,250', color: 'from-brand-400 to-brand-500'},
                  {label: 'Orders', val: '147', color: 'from-emerald-400 to-teal-500'},
                  {label: 'Avg Ticket', val: '₹ 573', color: 'from-sky-400 to-indigo-500'},
                ].map(s => (
                  <div key={s.label} className={`bg-gradient-to-br ${s.color} rounded-xl p-3 text-white`}>
                    <div className="text-[10px] font-medium opacity-90">{s.label}</div>
                    <div className="text-lg font-bold mt-1">{s.val}</div>
                  </div>
                ))}
              </div>
              <div className="bg-ink-50 rounded-xl p-4">
                <div className="text-xs font-semibold text-ink-600 mb-3">Live Orders</div>
                {['Table 4 — Butter Chicken, Naan', 'Table 12 — Biryani x2', 'Takeaway #248 — Family Combo'].map((o, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-ink-100 last:border-0">
                    <span className="text-xs text-ink-700">{o}</span>
                    <span className="text-[10px] bg-brand-100 text-brand-700 px-2 py-0.5 rounded-full font-semibold">
                      {['NEW','PREP','READY'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-brand-400 text-white rounded-2xl px-4 py-3 shadow-xl animate-float">
            <div className="text-xs font-medium opacity-90">POS Revenue ↑</div>
            <div className="text-xl font-bold">+45%</div>
          </div>
        </div>
      </div>
    </section>
  )
}
