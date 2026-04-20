import Logo from './Logo'

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/iwebtronix',
    svg: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.508.5.9 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.9-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/></svg>) },
  { name: 'Facebook', href: 'https://facebook.com/iwebtronix',
    svg: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>) },
  { name: 'YouTube', href: 'https://youtube.com/@iwebtronix',
    svg: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>) },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-ink-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Logo className="h-14 w-auto mb-5" />
            <p className="text-sm leading-relaxed text-ink-500 max-w-sm">
              Custom software for restaurants &amp; growing businesses — POS, CRM, HR,
              sales tools and digital marketing that deliver measurable results.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                   aria-label={s.name}
                   className="w-9 h-9 bg-ink-50 hover:bg-brand-400 text-ink-600 hover:text-white rounded-lg flex items-center justify-center transition-colors">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="font-bold text-ink-900 mb-4 text-sm uppercase tracking-wide">Services</div>
            <ul className="space-y-2.5 text-sm text-ink-500">
              {['Billing & POS', 'CRM Software', 'HR & Payroll', 'Sales Management', 'Digital Marketing'].map(s => (
                <li key={s}><a href="#services" className="hover:text-brand-500 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-bold text-ink-900 mb-4 text-sm uppercase tracking-wide">Contact</div>
            <ul className="space-y-2.5 text-sm text-ink-500">
              <li>
                <a href="mailto:info@iwebtronix.com" className="hover:text-brand-500 transition-colors">
                  info@iwebtronix.com
                </a>
              </li>
              <li className="leading-relaxed">
                204, Park Paradise, Ring Rd, Vadsar,<br/>Kalali, Vadodara, Gujarat — 390012
              </li>
              <li>
                <a href="https://www.iwebtronix.com" className="hover:text-brand-500 transition-colors">
                  www.iwebtronix.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <div>© {new Date().getFullYear()} iWebtronix. All rights reserved.</div>
          <div>We Design Your Business.</div>
        </div>
      </div>
    </footer>
  )
}
