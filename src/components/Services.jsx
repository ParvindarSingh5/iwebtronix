const services = [
  {
    icon: '🚀',
    title: 'Digital Transformation',
    desc: 'ERP, CRM, automation, SEO, and Google Ads to modernise your operations and accelerate growth.',
  },
  {
    icon: '💻',
    title: 'Product Engineering',
    desc: 'Custom web & mobile apps (native/hybrid), built with scalable architecture and clean code.',
  },
  {
    icon: '🤝',
    title: 'IT Consulting & Teams',
    desc: 'CTO-as-a-service, project management, and dedicated team extension for your business.',
  },
  {
    icon: '🏢',
    title: 'Enterprise Solutions',
    desc: 'HRMS, Legal, POS, and Accounting systems tailored to your business workflows.',
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    desc: 'iOS, Android and cross-platform apps with exceptional UX and performance.',
  },
  {
    icon: '📈',
    title: 'SEO & Digital Marketing',
    desc: 'Data-driven campaigns — proven to boost traffic by 45 % and reduce acquisition costs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">What We Do</span>
          <h2 className="section-title">Services Built for Impact</h2>
          <p className="section-sub">From strategy to execution, we cover every stage of your digital journey.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="card group hover:border-brand-200">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-brand-500 transition-colors">{s.title}</h3>
              <p className="text-slate-500 mt-2 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
