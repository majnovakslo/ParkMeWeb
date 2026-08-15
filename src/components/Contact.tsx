'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    parkingSpots: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Use native form validation before building mailto
    const form = e.currentTarget as HTMLFormElement
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const subject = `Povpraševanje ParkMe - ${formData.company || formData.name}`

    const body = [
      `Ime: ${formData.name}`,
      `Email: ${formData.email}`,
      `Podjetje: ${formData.company || '-'}`,
      `Telefon: ${formData.phone || '-'}`,
      `Število parkirnih mest: ${formData.parkingSpots || '-'}`,
      '',
      'Sporočilo:',
      formData.message,
    ].join('\n')

    const mailtoUrl =
      `mailto:parkme.slo@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`

    // Open user's mail client with prefilled message
    window.location.href = mailtoUrl

    // show temporary submitted state (visual feedback)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-parkme-green/10 text-parkme-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
            KONTAKT
          </span>
          <h2 className="section-title">
            Stopite v <span className="gradient-text">Stik</span> z Nami
          </h2>
          <p className="section-subtitle">
            Radi bomo odgovorili na vsa vaša vprašanja in skupaj našli najboljšo rešitev za vaše potrebe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-parkme-dark">Kontaktni Podatki</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-parkme-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-parkme-green" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:parkme.slo@gmail.com" className="text-parkme-blue hover:underline">
                    parkme.slo@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-parkme-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-parkme-blue" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telefon</div>
                  <div className="space-y-1">
                    <div>
                      <a href="tel:+386040145459" className="text-parkme-blue hover:underline">
                        Maj: 068 641 803
                      </a>
                    </div>
                    <div>
                      <a href="tel:+386068641803" className="text-parkme-blue hover:underline">
                        Domen: 040 145 459
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
                <div>
                  <div className="font-semibold mb-1">Lokacija</div>
                  <div className="text-gray-600">
                    Ljubljanski univerzitetni inkubator<br />
                    Ljubljana, Slovenija
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-2xl bg-gradient-to-br from-parkme-blue to-parkme-green p-6 text-white shadow-lg shadow-parkme-blue/20">
              <h4 className="font-bold text-xl mb-4">Hitri Odzivni Čas</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Email</span>
                  <span className="font-bold">{"< 24h"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Telefonski klic</span>
                  <span className="font-bold">Isti dan</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Osebni sestanek</span>
                  <span className="font-bold">V 1 tednu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/70">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-semibold mb-2 text-parkme-dark">
                    Ime in Priimek *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green"
                    placeholder="Janez Novak"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-semibold mb-2 text-parkme-dark">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green"
                    placeholder="janez@podjetje.si"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block font-semibold mb-2 text-parkme-dark">
                      Podjetje / Organizacija
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green"
                      placeholder="MOL"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block font-semibold mb-2 text-parkme-dark">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green"
                      placeholder="040 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="parkingSpots" className="block font-semibold mb-2 text-parkme-dark">
                    Število Parkirnih Mest
                  </label>
                  <select
                    id="parkingSpots"
                    name="parkingSpots"
                    value={formData.parkingSpots}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green"
                  >
                    <option value="">Izberite...</option>
                    <option value="1-50">1-50</option>
                    <option value="51-100">51-100</option>
                    <option value="101-200">101-200</option>
                    <option value="201-500">201-500</option>
                    <option value="500+">Več kot 500</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-semibold mb-2 text-parkme-dark">
                    Sporočilo *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-parkme-green resize-none"
                    placeholder="Zanima me več informacij o vaši rešitvi..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  Pošlji Sporočilo
                  <Send size={20} />
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Obvezna polja
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-parkme-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-parkme-green" size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-parkme-dark">Hvala za vaše sporočilo!</h3>
                <p className="text-gray-600 mb-6">
                  Prejeli smo vaše povpraševanje in se vam bomo odzvali v najkrajšem možnem času.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-parkme-blue hover:underline font-semibold"
                >
                  Pošlji novo sporočilo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
