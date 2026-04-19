import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-brand-50 text-brand-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Get in Touch</span>
          <h2 className="section-title">Let's Build Something Exceptional</h2>
          <p className="section-sub">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: '📧', label: 'Email', val: 'hello@iwebtronix.com' },
              { icon: '🌐', label: 'Website', val: 'www.iwebtronix.com' },
              { icon: '📍', label: 'Global Delivery', val: 'Remote-first with local insight' },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="w-11 h-11 bg-brand-50 rounded-xl flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">{c.label}</div>
                  <div className="text-slate-700 font-medium mt-0.5">{c.val}</div>
                </div>
              </div>
            ))}

            <div className="bg-brand-50 rounded-2xl p-6 mt-8">
              <div className="font-bold text-slate-800 mb-2">Why iWebtronix?</div>
              <ul className="space-y-2 text-sm text-slate-600">
                {['12+ years of real-world experience', 'Fixed, milestone & retainer engagements', 'Agile delivery with transparent reporting', 'Post-launch support & maintenance'].map(i => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-brand-500 font-bold">✓</span> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div className="card text-center py-12">
              <div className="text-5xl mb-4">🎉</div>
              <div className="text-xl font-bold text-slate-800">Message Received!</div>
              <div className="text-slate-500 mt-2">We'll be in touch within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={submit} className="card space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Name</label>
                  <input name="name" required value={form.name} onChange={handle}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
                    placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Email</label>
                  <input name="email" type="email" required value={form.email} onChange={handle}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
                    placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Service</label>
                <select name="service" value={form.service} onChange={handle}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 bg-white">
                  <option value="">Select a service…</option>
                  {['Digital Transformation', 'Product Engineering', 'IT Consulting', 'Enterprise Solutions', 'Mobile Development', 'SEO & Marketing'].map(s => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={handle}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-300 resize-none"
                  placeholder="Tell us about your project…" />
              </div>
              <button type="submit" className="btn-primary w-full text-sm">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
