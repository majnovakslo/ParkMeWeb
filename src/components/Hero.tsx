'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, MapPin, Smartphone, TrendingUp } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -left-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:52px_52px] opacity-20"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className={`text-white transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="surface mb-6 inline-flex items-center rounded-full px-4 py-2">
              <span className="text-sm font-semibold">🇸🇮 Slovenski Startup | Ljubljanski Univerzitetni Inkubator</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Prihodnost
              <br />
              <span className="text-cyan-200">Pametnega</span>
              <br />
              Parkiranja
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-100/95 md:text-2xl">
              Enotna platforma za IoT senzorje, upravljanje parkirišč in mobilno rezervacijo z realnočasovnimi podatki.
            </p>

            <div className="mb-10 grid grid-cols-3 gap-3 text-sm">
              <div className="surface rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-cyan-200">&lt; 1 s</div>
                <div className="text-slate-100/80">Osvežitev podatkov</div>
              </div>
              <div className="surface rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-cyan-200">24/7</div>
                <div className="text-slate-100/80">Delovanje sistema</div>
              </div>
              <div className="surface rounded-xl p-3 text-center">
                <div className="text-2xl font-bold text-cyan-200">+21%</div>
                <div className="text-slate-100/80">Višji compliance*</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#partnership" className="btn-primary">
                Postanite Partner
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn-outline border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white">
                Kontaktirajte nas
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              <div className="rounded-3xl border border-white/25 bg-white/95 p-8 shadow-2xl shadow-slate-900/35">
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Kompleksna rešitev v eni platformi</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-parkme-blue/10 transition-all group-hover:scale-105 group-hover:bg-parkme-blue">
                      <MapPin className="text-parkme-blue group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">IoT Senzorji</h4>
                      <p className="text-gray-600">Natančno zaznavanje zasedenih in prostih mest v realnem času.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-parkme-green/10 transition-all group-hover:scale-105 group-hover:bg-parkme-green">
                      <Smartphone className="text-parkme-green group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Mobilna Aplikacija</h4>
                      <p className="text-gray-600">Iskanje, rezervacija in digitalna plačila v nekaj klikih.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10 transition-all group-hover:scale-105 group-hover:bg-violet-500">
                      <TrendingUp className="text-violet-600 group-hover:text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Analitika za Upravljavce</h4>
                      <p className="text-gray-600">Jasni KPI-ji in predlogi za izboljšanje izkoriščenosti.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-7 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-700">*Metodologija ROI je podprta z javno dostopnimi študijami.</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 rounded-xl bg-emerald-500 p-4 text-white shadow-xl animate-float">
                <div className="text-2xl font-bold">IoT</div>
                <div className="text-sm">Tehnologija</div>
              </div>

              <div className="absolute -top-6 -right-6 rounded-xl bg-cyan-500 p-4 text-white shadow-xl animate-float delay-500">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Delovanje</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
