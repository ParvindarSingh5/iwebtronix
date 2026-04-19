export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-blue-50 pt-20">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100 rounded-full opacity-40 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <span className="inline-block bg-brand-100 text-brand-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          12+ Years of IT Excellence
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight">
          Transforming Ideas into{' '}
          <span className="text-brand-500">Digital Reality</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
          iWebtronix delivers custom software, web & mobile apps, ERP/CRM systems, and IT consulting
          that drive measurable growth for businesses worldwide.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#services" className="btn-primary text-base px-8 py-4">Explore Services</a>
          <a href="#contact" className="btn-outline text-base px-8 py-4">Talk to an Expert</a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: '50+', label: 'Projects Delivered' },
            { n: '12+', label: 'Years Experience' },
            { n: '15+', label: 'Team Members' },
            { n: '98%', label: 'Client Satisfaction' },
          ].map(s => (
            <div key={s.label} className="card text-center">
              <div className="text-3xl font-extrabold text-brand-500">{s.n}</div>
              <div className="text-sm text-slate-500 mt-1 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
