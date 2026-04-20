const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
      </svg>
    ),
    title: 'Billing & POS Software',
    desc: 'Complete restaurant POS with table management, split billing, KOT printing, inventory and GST-compliant invoicing.',
    features: ['Table Management', 'KOT Printing', 'Split Bills', 'GST Invoices'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/>
      </svg>
    ),
    title: 'CRM Software',
    desc: 'Customer relationship platform with loyalty programs, guest history, preferences tracking and automated re-engagement.',
    features: ['Loyalty Points', 'Guest Profiles', 'SMS/WhatsApp', 'Reviews Hub'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/>
      </svg>
    ),
    title: 'Sales Management',
    desc: 'End-to-end sales tracking, lead funnel, quotes, follow-ups, commission tracking and performance analytics.',
    features: ['Lead Funnel', 'Pipeline View', 'Commission', 'Analytics'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
      </svg>
    ),
    title: 'HR & Payroll Software',
    desc: 'Complete HRMS — attendance, shift scheduling, leave management, payroll automation and employee self-service.',
    features: ['Attendance', 'Payroll', 'Leaves', 'Shift Roster'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"/>
      </svg>
    ),
    title: 'Digital Marketing',
    desc: 'SEO, Google Ads, Meta Ads, social media management and content — data-driven campaigns that convert.',
    features: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/>
      </svg>
    ),
    title: 'Mobile & Web Apps',
    desc: 'Custom web portals and mobile apps — ordering, delivery, reservations and staff apps built with React & Node.',
    features: ['iOS & Android', 'Web Portals', 'Real-time', 'Cloud Sync'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="pill">What We Build</span>
          <h2 className="section-title mt-5">
            Software That Runs Your <span className="text-brand-500">Entire Business</span>
          </h2>
          <p className="section-sub">
            Purpose-built solutions for restaurants and growing companies — from the front counter to the back office.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="card card-hover group">
              <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-500 flex items-center justify-center mb-5 group-hover:bg-brand-400 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="text-ink-500 mt-2 text-sm leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {s.features.map(f => (
                  <span key={f} className="text-xs bg-ink-50 text-ink-600 px-2.5 py-1 rounded-md font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
