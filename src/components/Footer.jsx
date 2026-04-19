import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo size="md" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm mt-3">
              Your digital innovation partner. From concept to launch — we build technology
              that drives real business outcomes.
            </p>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">Services</div>
            <ul className="space-y-2 text-sm">
              {['Digital Transformation', 'Product Engineering', 'IT Consulting', 'Enterprise Solutions'].map(s => (
                <li key={s}><a href="#services" className="hover:text-brand-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-white font-semibold mb-4 text-sm">Company</div>
            <ul className="space-y-2 text-sm">
              {['About Us', 'Industries', 'Technologies', 'Contact'].map(s => (
                <li key={s}><a href={`#${s.toLowerCase().replace(' ', '')}`} className="hover:text-brand-400 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div>© {new Date().getFullYear()} iWebtronix. All rights reserved.</div>
          <div>hello@iwebtronix.com · www.iwebtronix.com</div>
        </div>
      </div>
    </footer>
  )
}
