'use client'

import { AlertCircle, Clock, TrendingDown, Users } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Problem = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const problems = [
    {
      icon: Clock,
      title: 'Izgubljen Čas',
      description: 'Povprečno vozniki porabijo 20 minut za iskanje parkirnega mesta v mestnih središčih',
      stat: '20 min',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: TrendingDown,
      title: 'Izgubljeni Prihodki',
      description: 'Lastniki parkirišč izgubijo do 40% potencialnih prihodkov zaradi neučinkovitega upravljanja',
      stat: '40%',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Users,
      title: 'Ročno Delo',
      description: 'Redarji porabijo ure za ročne obhode in preverjanje plačil',
      stat: '8h/dan',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: AlertCircle,
      title: 'Ni Podatkov',
      description: 'Pomanjkanje analitike in vpogleda v izkoriščenost parkirnih mest',
      stat: '0%',
      color: 'text-gray-500',
      bgColor: 'bg-gray-50',
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-parkme-gray">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              TRENUTNO STANJE
            </span>
            <h2 className="section-title">
              Izzivi <span className="gradient-text">Današnjega</span> Parkiranja
            </h2>
            <p className="section-subtitle">
              Tradicionalni sistemi parkiranja so neučinkoviti in povzročajo frustracije vsem deležnikom
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`card transform hover:-translate-y-2 transition-all duration-300 delay-${index * 100}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${problem.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <problem.icon className={problem.color} size={32} />
                </div>
                <div className={`text-4xl font-bold ${problem.color} mb-2`}>
                  {problem.stat}
                </div>
                <h3 className="text-xl font-bold mb-3 text-parkme-dark">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
          <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Iskanje parkirnega mesta povzroča <span className="text-yellow-300">nepotrebne emisije CO₂</span> in frustracije
            </h3>
            <p className="text-xl opacity-90">
              ParkMe omogoča iskanje prostega mesta brez kroženja po mestu
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
