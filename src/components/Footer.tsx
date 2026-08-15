'use client'

import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(16,185,129,0.2),transparent_35%)]" />
      <div className="container-custom relative z-10 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="relative">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-parkme-blue to-parkme-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold">
                Park<span className="text-parkme-green">Me</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pametna parkirna rešitev za Slovenijo. Realnočasovno spremljanje, rezervacija in plačila.
            </p>
          </div>

          <div className="relative">
            <h4 className="font-bold mb-4">Povezave</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#solution" className="hover:text-parkme-green transition-colors">
                  Rešitev
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-parkme-green transition-colors">
                  Tehnologija
                </a>
              </li>
              <li>
                <a href="#partnership" className="hover:text-parkme-green transition-colors">
                  Partnerstvo
                </a>
              </li>
              <li>
                <a href="#roi" className="hover:text-parkme-green transition-colors">
                  ROI Kalkulator
                </a>
              </li>
              <li>
                <a href="#sources" className="hover:text-parkme-green transition-colors">
                  Viri in Reference
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-parkme-green transition-colors">
                  O Nas
                </a>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-parkme-green" />
                <a href="mailto:parkme.slo@gmail.com" className="hover:text-parkme-green transition-colors">
                  parkme.slo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-parkme-green" />
                <div>
                  <div>Domen: 040 145 459</div>
                  <div>Maj: 068 641 803</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-parkme-green" />
                <span>Ljubljana, Slovenija</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="font-bold mb-4">Novice</h4>
            <p className="text-gray-400 text-sm mb-4">
              Prijavite se na naše novice in bodite na tekočem z našim napredkom.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Vaš email"
                className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-parkme-green"
              />
              <button className="rounded-lg bg-parkme-green px-4 py-2 transition-colors hover:bg-green-600">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © {currentYear} ParkMe. Vse pravice pridržane. | Ljubljanski univerzitetni inkubator
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-parkme-green transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-parkme-green transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-parkme-green transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-parkme-green transition-colors">
              Politika zasebnosti
            </a>
            <a href="#" className="hover:text-parkme-green transition-colors">
              Pogoji uporabe
            </a>
            <a href="#" className="hover:text-parkme-green transition-colors">
              Piškotki
            </a>
            <a href="#" className="hover:text-parkme-green transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
