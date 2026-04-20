import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#home" className="flex-shrink-0 flex items-center">
            <Logo className="h-14 md:h-16 w-auto" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <a key={l.label} href={l.href}
                 className="text-ink-600 hover:text-brand-500 font-medium text-sm transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary !px-6 !py-2.5 text-sm">Get a Quote</a>
          </nav>

          <button
            className="lg:hidden p-2 rounded-lg text-ink-700 hover:bg-brand-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mb-4 p-4 border border-ink-100">
            {links.map(l => (
              <a key={l.label} href={l.href}
                 className="block px-3 py-3 text-ink-700 hover:text-brand-500 font-medium border-b border-ink-50 last:border-0"
                 onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary block text-center mt-3" onClick={() => setOpen(false)}>Get a Quote</a>
          </div>
        )}
      </div>
    </header>
  )
}
