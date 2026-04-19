const industries = [
  { icon: '🍽️', name: 'Restaurant & Hospitality', desc: 'Custom POS, CRM & HR systems. Reduced errors by 40% for PT Queens Tandoor.' },
  { icon: '✈️', name: 'Travel', desc: 'Booking engines, itinerary tools, and travel management platforms.' },
  { icon: '🛍️', name: 'Retail & E-commerce', desc: 'Full-stack e-commerce with inventory, payments, and analytics.' },
  { icon: '🏭', name: 'Manufacturing', desc: 'ERP and workflow automation to cut operating costs by 20%.' },
  { icon: '💰', name: 'Finance', desc: 'Secure fintech apps, reporting dashboards and compliance tools.' },
  { icon: '🏥', name: 'Healthcare & Pharma', desc: 'Patient portals, appointment systems and HIPAA-ready solutions.' },
  { icon: '🚀', name: 'Startups', desc: 'MVP development, tech consulting and rapid iteration for early-stage ventures.' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Industries</span>
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-sub">Deep domain knowledge across verticals means faster delivery and better outcomes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map(ind => (
            <div key={ind.name} className="card">
              <div className="text-3xl mb-3">{ind.icon}</div>
              <div className="font-bold text-slate-800 text-sm">{ind.name}</div>
              <div className="text-slate-500 text-xs mt-1.5 leading-relaxed">{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
