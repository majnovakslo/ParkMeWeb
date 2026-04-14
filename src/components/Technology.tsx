'use client'

import { Cpu, Radio, Battery, Cloud, Lock, Gauge } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Technology = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techSpecs = [
    {
      icon: Cpu,
      title: 'IoT Senzorji',
      description: 'Ultra-nizka poraba energije, magnetni in ultrazvočni senzorji',
      specs: ['Visoka natančnost', 'IP68 vodotesnost', 'Dolga življenjska doba'],
    },
    {
      icon: Radio,
      title: 'Brezžična Komunikacija',
      description: 'LoRaWAN & NB-IoT za zanesljivo povezavo',
      specs: ['Do 15km doseg', 'Nizka latenca < 1s', 'Redundantna omrežja'],
    },
    {
      icon: Cloud,
      title: 'Cloud Platforma',
      description: 'Skalabilna infrastruktura z AI analitiko',
      specs: ['AWS/Azure hosting', 'Real-time processing', '99.9% uptime'],
    },
    {
      icon: Lock,
      title: 'Varnost',
      description: 'Najvišji standardi varnosti podatkov',
      specs: ['AES-256 enkripcija', 'GDPR compliance', 'ISO 27001'],
    },
    {
      icon: Battery,
      title: 'Energijska Učinkovitost',
      description: 'Sončni paneli in baterijski sistem',
      specs: ['Nizka poraba energije', '2-letne baterije', 'Menjave krite v pogodbi'],
    },
    {
      icon: Gauge,
      title: 'Zmogljivost',
      description: 'Skalabilna arhitektura',
      specs: ['Skalabilnost', 'Hitra odzivnost', 'Zanesljivost'],
    },
  ]

  return (
    <section id="technology" className="py-20 bg-parkme-dark text-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-green/20 text-parkme-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TEHNOLOGIJA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Najnaprednejša <span className="text-parkme-green">IoT Tehnologija</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Naši senzorji in platforma uporabljajo najnovejše tehnologije za zanesljivo in učinkovito delovanje
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {techSpecs.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-parkme-green hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-parkme-green/20 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="text-parkme-green" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-400 mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-parkme-green rounded-full"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-8 text-center">Arhitektura Sistema</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-500">
                  <span className="text-3xl">🅿️</span>
                </div>
                <h4 className="font-bold mb-2">Senzorji</h4>
                <p className="text-sm text-gray-400">IoT senzorji na parkirnih mestih</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-parkme-green text-4xl">→</div>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-parkme-green/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-parkme-green">
                  <Cloud size={32} className="text-parkme-green" />
                </div>
                <h4 className="font-bold mb-2">Cloud</h4>
                <p className="text-sm text-gray-400">Obdelava in analitika podatkov</p>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-parkme-green text-4xl">→</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center bg-gray-800 rounded-lg p-4">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-bold mb-1">Mobilne Aplikacije</h4>
                <p className="text-xs text-gray-400">iOS & Android</p>
              </div>

              <div className="text-center bg-gray-800 rounded-lg p-4">
                <div className="text-3xl mb-2">💻</div>
                <h4 className="font-bold mb-1">Web Portal</h4>
                <p className="text-xs text-gray-400">Upravljanje</p>
              </div>

              <div className="text-center bg-gray-800 rounded-lg p-4">
                <div className="text-3xl mb-2">📊</div>
                <h4 className="font-bold mb-1">API</h4>
                <p className="text-xs text-gray-400">Integracije</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Certificirani in v skladu s standardi:</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-gray-800 px-6 py-3 rounded-lg">CE</div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg">FCC</div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg">ISO 27001</div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg">GDPR</div>
              <div className="bg-gray-800 px-6 py-3 rounded-lg">ISO 9001</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
