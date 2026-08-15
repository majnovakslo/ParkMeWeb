'use client'

import { TrendingUp, Users, DollarSign, Target } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const BusinessModel = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const revenueStreams = [
    {
      icon: DollarSign,
      title: 'Najem Opreme',
      description: 'Mesečna naročnina za senzorje in programsko opremo',
      pricing: 'Od 15€/senzor/mesec',
    },
    {
      icon: TrendingUp,
      title: 'Provizije od Plačil',
      description: 'Odstotek od vsake transakcije preko aplikacije',
      pricing: '2-5% od transakcije',
    },
    {
      icon: Users,
      title: 'Premium Funkcionalnosti',
      description: 'Napredna analitika in poročila za partnerje',
      pricing: 'Od 200€/mesec',
    },
    {
      icon: Target,
      title: 'Oglaševanje',
      description: 'Ciljano oglaševanje v aplikaciji uporabnikom',
      pricing: 'Po dogovoru',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              POSLOVNI MODEL
            </span>
            <h2 className="section-title">
              <span className="gradient-text">Raznolik</span> Model Prihodkov
            </h2>
            <p className="section-subtitle">
              Kombinacija mesečnih naročnin, provizij in premium storitev zagotavlja stabilen tok prihodkov
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {revenueStreams.map((stream, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-parkme-gray to-white rounded-xl p-6 border-2 border-transparent hover:border-parkme-green transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-parkme-blue to-parkme-green rounded-lg flex items-center justify-center mb-4">
                  <stream.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-parkme-dark">{stream.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{stream.description}</p>
                <div className="bg-parkme-green/10 text-parkme-green font-bold py-2 px-4 rounded-lg text-center">
                  {stream.pricing}
                </div>
              </div>
            ))}
          </div>

          {/* Market Opportunity */}
          <div className="bg-gradient-to-r from-parkme-blue to-purple-600 rounded-2xl p-8 md:p-12 text-white mb-16">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2 text-yellow-300">🇸🇮</div>
                <div className="text-lg opacity-90">Slovenski trg parkiranja</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-yellow-300">📈</div>
                <div className="text-lg opacity-90">Rastjoča digitalizacija</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2 text-yellow-300">🌍</div>
                <div className="text-lg opacity-90">Regionalna ekspanzija</div>
              </div>
            </div>
          </div>

          {/* Growth Strategy */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-parkme-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-parkme-dark">Trenutna Faza: Razvoj</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  <span>Razvoj IoT senzorjev in platforme</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  <span>Razvoj mobilnih aplikacij</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  <span>Iskanje prvih pilotnih partnerjev</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 text-xl">⚡</span>
                  <span>Integracija s plačilnimi sistemi</span>
                </li>
              </ul>
            </div>

            <div className="bg-parkme-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-parkme-dark">Naslednje Faze: Rast</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <span>Pilotni projekti v Ljubljani</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <span>Razširitev na druga slovenska mesta</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <span>Trgovski centri in zasebna parkirišča</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 text-xl">→</span>
                  <span>Regionalna ekspanzija</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusinessModel
