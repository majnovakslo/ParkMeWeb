'use client'

import { Smartphone, CreditCard, Bell, Map, Calendar, BarChart, Shield, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Map,
      title: 'Interaktivna Karta',
      description: 'Vizualizacija vseh parkirnih mest z barvnim kodiranjem (prosto/zasedeno)',
    },
    {
      icon: Calendar,
      title: 'Rezervacija',
      description: 'Rezervirajte parkirno mesto do 24 ur vnaprej',
    },
    {
      icon: CreditCard,
      title: 'Urbana Integracija',
      description: 'Plačilo z Urbano kartico, kreditno kartico ali PayPal',
    },
    {
      icon: Bell,
      title: 'Pametna Obvestila',
      description: 'Push obvestila za iztekanje časa, prosta mesta v bližini',
    },
    {
      icon: BarChart,
      title: 'Statistika',
      description: 'Vpogled v zgodovino parkiranj in porabo',
    },
    {
      icon: Shield,
      title: 'Redarska Aplikacija',
      description: 'Avtomatsko zaznavanje neplačanih parkirnin',
    },
    {
      icon: Zap,
      title: 'Hitro Iskanje',
      description: 'Najdite najbližje prosto mesto v nekaj sekundah',
    },
    {
      icon: Smartphone,
      title: 'Enostavna Uporaba',
      description: 'Intuitiven vmesnik, priljubljena mesta, zgodovina',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-parkme-gray to-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-blue/10 text-parkme-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FUNKCIONALNOSTI
            </span>
            <h2 className="section-title">
              Vse kar <span className="gradient-text">Potrebujete</span>
            </h2>
            <p className="section-subtitle">
              Celovit nabor funkcionalnosti za uporabnike, redarje in upravljavce parkirišč
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-parkme-green"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-parkme-blue to-parkme-green rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-parkme-dark group-hover:text-parkme-green transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile App Preview */}
          <div className="mt-20 bg-gradient-to-r from-parkme-blue to-parkme-green rounded-2xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">Mobilna Aplikacija</h3>
                <p className="text-xl mb-6 opacity-90">
                  V razvoju: intuitivna aplikacija za iOS in Android
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-3">
                    <span className="text-3xl">📱</span>
                    <div>
                      <div className="text-xs opacity-75">Kmalu na</div>
                      <div className="font-bold">App Store</div>
                    </div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-3">
                    <span className="text-3xl">🤖</span>
                    <div>
                      <div className="text-xs opacity-75">Kmalu na</div>
                      <div className="font-bold">Google Play</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-4">
                      <span className="font-semibold">🎯 Status</span>
                      <span className="text-2xl font-bold text-yellow-300">V razvoju</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-4">
                      <span className="font-semibold">� Faza</span>
                      <span className="text-2xl font-bold">Pilot</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/20 rounded-lg p-4">
                      <span className="font-semibold">� Launch</span>
                      <span className="text-2xl font-bold">2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
