'use client'

import { Award, Target, Users, Zap } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-blue/10 text-parkme-blue px-4 py-2 rounded-full text-sm font-semibold mb-4">
              O NAS
            </span>
            <h2 className="section-title">
              Startup v <span className="gradient-text">Zgodnji Fazi Razvoja</span>
            </h2>
            <p className="section-subtitle">
              ParkMe nastaja v Ljubljanskem univerzitetnem inkubatorju s ciljem revolucionirati način parkiranja
            </p>
          </div>

          {/* Story */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-parkme-blue to-parkme-green rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl font-bold mb-6">Naša Zgodba</h3>
              <p className="text-lg leading-relaxed mb-4 opacity-90">
                ParkMe je startup projekt, ki se razvija v inkubatorju Univerze v Ljubljani. 
                Ideja je nastala iz vsakodnevnih težav pri iskanju parkirnega mesta v mestu - 
                izgubljeni čas, nepotrebne emisije CO₂ in stres zaradi kroženja.
              </p>
              <p className="text-lg leading-relaxed mb-4 opacity-90">
                S timom mladih inženirjev razvijamo napredno IoT rešitev, ki bo povezala 
                fizične senzorje z inteligentno mobilno aplikacijo. Naš cilj je narediti 
                parkiranje enostavno, hitro in okolju prijazno.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                <strong>Projekt je trenutno v fazi razvoja prototipa in testiranja tehnologije.</strong> 
                {' '}Razvijamo senzorje, mobilne aplikacije in platformo za upravljanje. 
                Iščemo partnerje za prve pilotne projekte.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-parkme-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-parkme-green" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-parkme-dark">Inovativnost</h4>
              <p className="text-gray-600 text-sm">Uporaba najnovejših IoT tehnologij</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-parkme-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-parkme-blue" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-parkme-dark">Partnerstvo</h4>
              <p className="text-gray-600 text-sm">Dolgoročne povezave z strankami</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-yellow-600" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-parkme-dark">Ciljna Usmerjenost</h4>
              <p className="text-gray-600 text-sm">Fokus na merljive rezultate</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-green-600" size={32} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-parkme-dark">Odličnost</h4>
              <p className="text-gray-600 text-sm">Visoka kakovost produktov</p>
            </div>
          </div>

          {/* Team & Support */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-parkme-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-parkme-dark">🚀 Naša Ekipa</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sestavljamo jo strokovnjaki iz področij IoT, mobilnega razvoja, podatkovne analitike in poslovnega razvoja. 
                Vsi delimo strast do tehnologije in željo po reševanju realnih problemov.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold mb-2">Podpora Inkubatorja</div>
                <p className="text-sm text-gray-600">
                  Ljubljanski univerzitetni inkubator nam zagotavlja mentorstvo, mreženje in dostop do virov 
                  za hiter razvoj in rast.
                </p>
              </div>
            </div>

            <div className="bg-parkme-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-parkme-dark">🎯 Naša Vizija</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Naša vizija je postati vodilna pametna parkirna rešitev v Sloveniji in kasneje 
                razširiti delovanje na širšo regijo. Cilj je, da vsak voznik v mestu najde parkirno 
                mesto hitro in enostavno, s čimer zmanjšamo emisije in izboljšamo kakovost življenja v mestih.
              </p>
              <div className="bg-white rounded-lg p-4">
                <div className="font-semibold mb-2">Trenutno Iščemo:</div>
                <p className="text-sm text-gray-600">
                  Partnerje za pilotne projekte, investitorje za razvoj tehnologije, 
                  in sodelavce s področja IoT, mobilnega razvoja in poslovnega razvoja.
                </p>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="bg-gradient-to-br from-parkme-blue to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Razvojni Načrt</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="text-xl font-bold mb-2">Faza 1: Razvoj</h4>
                <p className="text-sm opacity-90">
                  Razvoj prototipov, testiranje tehnologije, razvoj aplikacij
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">Faza 2: Pilot</h4>
                <p className="text-sm opacity-90">
                  Prvi pilotni projekti v Ljubljani, zbiranje povratnih informacij
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-bold mb-2">Faza 3: Širitev</h4>
                <p className="text-sm opacity-90">
                  Razširitev na druga slovenska mesta, regionalna ekspanzija
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
