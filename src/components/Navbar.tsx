'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Domov', href: '#hero' },
    { name: 'Rešitev', href: '#solution' },
    { name: 'Tehnologija', href: '#technology' },
    { name: 'Partnerstvo', href: '#partnership' },
    { name: 'ROI', href: '#roi' },
    { name: 'Viri', href: '#sources' },
    { name: 'O nas', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-md shadow-slate-200/70 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-parkme-blue to-parkme-green transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Park<span className="text-parkme-green">Me</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold tracking-wide transition-colors hover:text-parkme-green ${
                  isScrolled ? 'text-slate-700' : 'text-slate-100/95'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className={`${isScrolled ? 'btn-secondary' : 'btn-outline border-white/70 bg-white/10 text-white hover:bg-white/20 hover:text-white'} !px-4 !py-2 text-sm`}>
              Povpraševanje
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Zapri meni' : 'Odpri meni'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden rounded-b-2xl border border-slate-200/90 border-t-0 bg-white/95 shadow-lg backdrop-blur-lg">
            <div className="space-y-1 p-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-parkme-green"
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="btn-secondary mt-2 w-full">
                Povpraševanje
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
