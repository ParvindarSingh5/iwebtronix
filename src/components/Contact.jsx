import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async e => {
    e.preventDefault()
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...form,
      }).toString(),
    })
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-ink-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-400/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-brand-400/10 text-brand-300 text-sm font-semibold px-4 py-1.5 rounded-full border border-brand-400/20">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"/>
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-5 tracking-tight">
            Let's Build Something <span className="text-brand-400">Amazing</span>
          </h2>
          <p className="text-lg text-ink-300 mt-4 max-w-2xl mx-auto">
            Tell us about your project — we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>),
                label: 'Email',
                val: 'iwebtronix@gmail.com',
                href: 'mailto:iwebtronix@gmail.com',
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>),
                label: 'Office Address',
                val: '204, Park Paradise, Ring Rd, Vadsar, Kalali, Vadodara, Gujarat - 390012',
              },
              {
                icon: (<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z"/><path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18"/></svg>),
                label: 'Website',
                val: 'www.iwebtronix.com',
                href: 'https://www.iwebtronix.com',
              },
            ].map(c => (
              <a key={c.label} href={c.href || '#'} className="flex items-start gap-4 p-5 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors group">
                <div className="w-11 h-11 bg-brand-400/20 text-brand-300 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-400 group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold text-ink-400 uppercase tracking-wide">{c.label}</div>
                  <div className="text-white font-medium mt-1 text-sm leading-relaxed">{c.val}</div>
                </div>
              </a>
            ))}

            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
              <div className="text-xs font-semibold text-ink-400 uppercase tracking-wide mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { name: 'Instagram', href: 'https://instagram.com/iwebtronix',
                    svg: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.508.5.9 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>) },
                  { name: 'Facebook', href: 'https://facebook.com/iwebtronix',
                    svg: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>) },
                  { name: 'YouTube', href: 'https://youtube.com/@iwebtronix',
                    svg: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
                ].map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                     aria-label={s.name}
                     className="w-11 h-11 bg-white/10 hover:bg-brand-400 text-white rounded-xl flex items-center justify-center transition-colors">
                    {s.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="bg-white rounded-3xl p-10 text-center text-ink-800">
              <div className="text-6xl mb-4">🎉</div>
              <div className="text-2xl font-extrabold">Message Received!</div>
              <div className="text-ink-500 mt-2">We'll reply within 24 hours.</div>
            </div>
          ) : (
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} className="bg-white rounded-3xl p-8 space-y-4 text-ink-700 shadow-2xl">
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handle}
                    className="w-full border border-ink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">Phone</label>
                  <input name="phone" value={form.phone} onChange={handle}
                    className="w-full border border-ink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                    placeholder="+91 ..." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">Email *</label>
                <input name="email" type="email" required value={form.email} onChange={handle}
                  className="w-full border border-ink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent"
                  placeholder="you@company.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">Service Interested In</label>
                <select name="service" value={form.service} onChange={handle}
                  className="w-full border border-ink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 bg-white">
                  <option value="">Select a service…</option>
                  {['Billing & POS Software', 'CRM Software', 'Sales Management', 'HR & Payroll', 'Digital Marketing', 'Mobile / Web App', 'Other'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">Project Details</label>
                <textarea name="message" rows={4} value={form.message} onChange={handle}
                  className="w-full border border-ink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
                  placeholder="Tell us what you're looking to build…" />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Enquiry
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
