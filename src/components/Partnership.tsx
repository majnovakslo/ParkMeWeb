'use client'

import { Building, ShoppingCart, GraduationCap, Hotel, TrendingUp } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Partnership = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const partnerTypes = [
    {
      icon: Building,
      title: 'Občine in Mestna Parkirišča',
      benefits: [
        'Povečanje prihodkov 15-40%*',
        'Avtomatizirano spremljanje',
        'Zmanjšanje operativnih stroškov',
        'Boljša izkoriščenost',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Trgovski Centri',
      benefits: [
        'Boljša izkušnja kupcev',
        'Daljši čas bivanja',
        'Analitika obiskov',
        'Konkurenčna prednost',
      ],
    },
    {
      icon: Hotel,
      title: 'Hoteli in Letališča',
      benefits: [
        'Premium storitev za goste',
        'Rezervacije v naprej',
        'Integracija z booking sistemi',
        'Dodaten prihodek',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Univerze in Kampusi',
      benefits: [
        'Upravljanje študentskih parkirišč',
        'Prioriteta za zaposlene',
        'Zmanjšanje gneče',
        'Zelena mobilnost',
      ],
    },
  ]

  const partnershipModels = [
    {
      title: 'CAPEX Model',
      description: 'Enkratni nakup opreme',
      features: [
        'Lastništvo opreme',
        'Življenjska licenca SW',
        'Vzdrževanje vključeno',
        'ROI običajno v 18-24 mesecih',
      ],
      price: 'Cena po ponudbi',
      badge: '',
    },
    {
      title: 'OPEX Model',
      description: 'Mesečna naročnina',
      features: [
        'Brez začetne investicije',
        'Vključeno vse',
        'Fleksibilna skalabilnost',
        'ROI takoj',
      ],
      price: 'Cena po ponudbi',
      badge: 'NAJBOLJ PRILJUBLJENO',
    },
    {
      title: 'Revenue Share',
      description: 'Delitev prihodkov',
      features: [
        'Brez stroškov naprej',
        'Plačilo po uspehu',
        'Dogovor o deležu',
        'Maksimalna motivacija',
      ],
      price: 'Delitev prihodkov',
      badge: 'START-FRIENDLY',
    },
  ]

  return (
    <section id="partnership" className="py-20 bg-gradient-to-b from-parkme-gray to-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-green/10 text-parkme-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              PARTNERSTVO
            </span>
            <h2 className="section-title">
              Pridružite se <span className="gradient-text">Revoluciji</span> Parkiranja
            </h2>
            <p className="section-subtitle">
              Ponujamo fleksibilne modele sodelovanja, prilagojene vašim potrebam in ciljem
            </p>
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnerTypes.map((partner, index) => (
              <div
                key={index}
                className="card text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-parkme-blue to-parkme-green rounded-lg flex items-center justify-center mx-auto mb-4">
                  <partner.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-4 text-parkme-dark">{partner.title}</h3>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-parkme-green">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Partnership Models */}
          <h3 className="text-3xl font-bold text-center mb-8 text-parkme-dark">Modeli Sodelovanja</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {partnershipModels.map((model, index) => (
              <div
                key={index}
                className={`card relative ${model.badge ? 'border-2 border-parkme-green shadow-xl' : ''}`}
              >
                {model.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-parkme-green text-white px-4 py-1 rounded-full text-xs font-bold">
                    {model.badge}
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-2 text-parkme-dark">{model.title}</h4>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="text-3xl font-bold text-parkme-green mb-6">{model.price}</div>
                <ul className="space-y-3 mb-6">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-parkme-green">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="btn-outline w-full block text-center">
                  Povprašaj
                </a>
              </div>
            ))}
          </div>

          {/* Why Partner With Us */}
          <div className="bg-gradient-to-r from-parkme-blue to-parkme-green rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Zakaj sodelovati z nami?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <TrendingUp size={48} className="mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Dokazana Tehnologija</h4>
                <p className="opacity-90">Slovenski startup z uspešnimi pilotnimi projekti</p>
              </div>
              <div className="text-center">
                <Building size={48} className="mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Dolgoročno Partnerstvo</h4>
                <p className="opacity-90">Ne prodajamo samo opreme, gradimo skupne uspehe</p>
              </div>
              <div className="text-center">
                <Hotel size={48} className="mx-auto mb-4" />
                <h4 className="font-bold text-xl mb-2">Lokalna Podpora</h4>
                <p className="opacity-90">24/7 tehnična podpora v slovenskem jeziku</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partnership
