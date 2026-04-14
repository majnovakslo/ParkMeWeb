'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Smartphone, TrendingUp } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse-slow"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold">🇸🇮 Slovenski Startup | Ljubljanski Univerzitetni Inkubator</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Prihodnost <br />
              <span className="text-yellow-300">Pametnega</span> <br />
              Parkiranja
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              IoT senzorji, ki revolucionirajo način upravljanja parkirnih mest. 
              Realnočasovno spremljanje, pametna rezervacija in brezstična plačila z Urbano.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-1">⚡</div>
                <div className="text-sm text-blue-100">Hitro iskanje mesta</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-1">🌱</div>
                <div className="text-sm text-blue-100">Zmanjšanje CO₂</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-1">📍</div>
                <div className="text-sm text-blue-100">Pametna rezervacija</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#partnership" className="btn-primary inline-flex items-center justify-center gap-2">
                Postanite Partner
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-parkme-blue inline-flex items-center justify-center gap-2">
                Kontaktirajte nas
              </a>
            </div>
          </div>

          {/* Right Content - Features Preview */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-parkme-dark mb-6">Kompleksna Rešitev</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-parkme-blue/10 rounded-lg flex items-center justify-center group-hover:bg-parkme-blue group-hover:scale-110 transition-all">
                      <MapPin className="text-parkme-blue group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">IoT Senzorji</h4>
                      <p className="text-gray-600">Natančno zaznavanje zasedenih in prostih mest v realnem času</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-parkme-green/10 rounded-lg flex items-center justify-center group-hover:bg-parkme-green group-hover:scale-110 transition-all">
                      <Smartphone className="text-parkme-green group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Mobilna Aplikacija</h4>
                      <p className="text-gray-600">Iskanje, rezervacija in plačilo z Urbano kartico</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-500 group-hover:scale-110 transition-all">
                      <TrendingUp className="text-yellow-600 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Redarska Aplikacija</h4>
                      <p className="text-gray-600">Avtomatizirano spremljanje neplačanih parkirnin</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-parkme-green text-white rounded-xl shadow-xl p-4 animate-float">
                <div className="text-2xl font-bold">IoT</div>
                <div className="text-sm">Tehnologija</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-yellow-500 text-white rounded-xl shadow-xl p-4 animate-float delay-500">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Delovanje</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
