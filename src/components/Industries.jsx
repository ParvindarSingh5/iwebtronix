const industries = [
  { icon: '🍽️', name: 'Fine Dining Restaurants', desc: 'Table reservations, course timing, sommelier notes.' },
  { icon: '🍔', name: 'QSR & Fast Food', desc: 'High-speed billing, kitchen displays, drive-thru.' },
  { icon: '☕', name: 'Cafés & Bakeries', desc: 'Loyalty programs, subscription coffee, menu engineering.' },
  { icon: '🏨', name: 'Hotels & Banquets', desc: 'Event bookings, banquet billing, room-service integration.' },
  { icon: '🛵', name: 'Cloud Kitchens', desc: 'Multi-brand ordering, Zomato/Swiggy sync, delivery routing.' },
  { icon: '🍺', name: 'Bars & Pubs', desc: 'Bar tabs, table orders, happy hour automation.' },
  { icon: '🏪', name: 'Retail & FMCG', desc: 'Inventory, barcode billing, multi-store management.' },
  { icon: '🚀', name: 'Startups', desc: 'MVP development, tech consulting, scale-ready architecture.' },
]

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-brand-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="pill">Industries We Serve</span>
          <h2 className="section-title mt-5">
            Deep Expertise in <span className="text-brand-500">F&amp;B</span> & Beyond
          </h2>
          <p className="section-sub">
            12+ years building software that matches how real businesses actually operate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map(ind => (
            <div key={ind.name} className="card card-hover text-center">
              <div className="text-4xl mb-3">{ind.icon}</div>
              <div className="font-bold text-ink-900 text-sm">{ind.name}</div>
              <div className="text-ink-500 text-xs mt-2 leading-relaxed">{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
