'use client'

import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-parkme-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
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

          {/* Quick Links */}
          <div>
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
                <a href="#about" className="hover:text-parkme-green transition-colors">
                  O Nas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-parkme-green" />
                <a href="mailto:parkme@gmail.com" className="hover:text-parkme-green transition-colors">
                  parkme@gmail.com
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

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Novice</h4>
            <p className="text-gray-400 text-sm mb-4">
              Prijavite se na naše novice in bodite na tekočem z našim napredkom.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Vaš email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-parkme-green"
              />
              <button className="bg-parkme-green hover:bg-green-600 px-4 py-2 rounded-lg transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
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

        {/* Legal Links */}
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
