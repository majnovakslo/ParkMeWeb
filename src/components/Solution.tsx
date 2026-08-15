'use client'

import { CheckCircle, Zap, Shield, BarChart } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Solution = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const benefits = [
    {
      icon: Zap,
      title: 'Takojšnja Vidnost',
      description: 'Realnočasoven prikaz vseh prostih in zasedenih parkirnih mest',
    },
    {
      icon: CheckCircle,
      title: 'Pametna Rezervacija',
      description: 'Uporabniki lahko rezervirajo parkirno mesto vnaprej',
    },
    {
      icon: Shield,
      title: 'Varno Plačilo',
      description: 'Integracija z Urbano kartico in digitalna plačila',
    },
    {
      icon: BarChart,
      title: 'Napredna Analitika',
      description: 'Podrobni vpogledi in statistika izkoriščenosti',
    },
  ]

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-green/10 text-parkme-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              NAŠA REŠITEV
            </span>
            <h2 className="section-title">
              Celovit <span className="gradient-text">Pametni Sistem</span> Parkiranja
            </h2>
            <p className="section-subtitle">
              Združujemo IoT tehnologijo, mobilne aplikacije in napredno analitiko za optimalno upravljanje parkirnih površin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-parkme-blue to-parkme-green rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Sistem ParkMe v Akciji</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">IoT Senzorji</div>
                      <div className="text-sm opacity-75">Zaznavanje v realnem času</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center animate-pulse delay-200">
                      <Zap size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Realnočasovno Spremljanje</div>
                      <div className="text-sm opacity-75">&lt; 1s zakasnitev podatkov</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse delay-400">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">Varna Plačila</div>
                      <div className="text-sm opacity-75">PCI DSS certifikacija</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-3xl font-bold text-yellow-300">Alta</div>
                    <div className="text-xs">Natančnost</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-xs">Delovanje</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-3xl font-bold text-yellow-300">Dolga</div>
                    <div className="text-xs">Življ. Doba</div>
                  </div>
                </div>
              </div>

              {/* Floating indicator */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-parkme-dark rounded-xl shadow-xl p-4 animate-float">
                <div className="text-2xl font-bold">⚡ IoT</div>
                <div className="text-sm font-semibold">Powered</div>
              </div>
            </div>

            {/* Right - Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-parkme-gray hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-x-2"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-parkme-blue to-parkme-green rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-parkme-dark">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Three Platforms */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3 text-parkme-dark">Aplikacija za Uporabnike</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Prikaz prostih mest
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Rezervacija vnaprej
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Plačilo z Urbano
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Zgodovina parkiranj
                </li>
              </ul>
            </div>

            <div className="card text-center border-2 border-parkme-green">
              <div className="inline-block bg-parkme-green text-white text-xs px-3 py-1 rounded-full mb-2">
                NAJBOLJ INOVATIVNO
              </div>
              <div className="text-5xl mb-4">👮</div>
              <h3 className="text-xl font-bold mb-3 text-parkme-dark">Aplikacija za Redarje</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Avtomatsko zaznavanje neplačil
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  GPS navigacija do kršitev
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Digitalno izdajanje kazni
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Poročila v realnem času
                </li>
              </ul>
            </div>

            <div className="card text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3 text-parkme-dark">Portal za Partnerje</h3>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Napredna analitika
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Prihodki v realnem času
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Upravljanje cen
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-parkme-green" />
                  Poročila in izvozi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
