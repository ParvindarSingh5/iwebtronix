import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = ['Services', 'About', 'Technologies', 'Industries', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — enlarged */}
          <a href="#home" className="flex-shrink-0">
            <Logo size="md" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-slate-600 hover:text-brand-500 font-medium text-sm transition-colors"
              >
                {l}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm py-2.5">Get a Quote</a>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-brand-50"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <div className="md:hidden bg-white rounded-2xl shadow-lg mb-4 p-4 border border-slate-100">
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block px-3 py-3 text-slate-700 hover:text-brand-500 font-medium border-b border-slate-50 last:border-0"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a href="#contact" className="btn-primary block text-center mt-3 text-sm">Get a Quote</a>
          </div>
        )}
      </div>
    </header>
  )
}
