'use client'

import { BookOpen, ExternalLink } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Sources = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const sources = [
    {
      title: 'SFpark Pilot Project Evaluation (SFMTA, 2014)',
      description: 'Uradna evalvacija pilotnega projekta SFpark v San Franciscu (2011-2014), financiran s strani Federal Highway Administration',
      findings: [
        '+21% compliance (plačila parkirnine)',
        'Zasedenost dosegla cilj 60-80%',
        '-50% čas kroženja za iskanje mesta',
        '+20% kazni na uro s smart routing',
        '-30% emisij CO₂ v pilotnih območjih',
        '20-30% prihranek pri ročnem delu',
        '$35M skupni dohodek v 3 letih',
        'Javni prevoz +2.3% hitrejši',
      ],
      url: 'https://www.sfmta.com/getting-around/drive-park/demand-responsive-pricing/sfpark-evaluation',
      category: 'Case Study',
    },
    {
      title: 'MarketsandMarkets - Parking Management Market Report',
      description: 'Analiza globalnega trga upravljanja parkirišč',
      findings: [
        '"40% of traffic caused by parking search"',
        'Market size: USD 7.22B → 12.41B (2025-2030)',
        'Smart parking adoption growth',
      ],
      url: 'https://www.marketsandmarkets.com/Market-Reports/parking-management-market-201005394.html',
      category: 'Tržna raziskava',
    },
    {
      title: 'EU Transport & Environment Data',
      description: 'Evropska komisija - podatki o emisijah CO₂ in EU ETS cena ogljika',
      findings: [
        'Povprečje osebnih vozil: ~120g CO₂/km',
        'Mestna vožnja: ~20 km/h → ~0.15 kg CO₂/min',
        'EU ETS cena ogljika: ~€70/tono',
      ],
      url: 'https://ec.europa.eu/transport',
      category: 'Okoljski podatki',
    },
  ]

  return (
    <section id="sources" className="py-20 bg-white">
      <div className="container-custom">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block bg-parkme-green/10 text-parkme-green px-4 py-2 rounded-full text-sm font-semibold mb-4">
              VIRI IN REFERENCE
            </span>
            <h2 className="section-title">
              Raziskave in <span className="gradient-text">Podatkovne Osnove</span>
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              Naše ocene temeljijo na dokazanih rezultatih projekta <strong>SFpark</strong> (San Francisco, 2011-2014), 
              enem najpomembnejših smart parking pilotov na svetu, ter globalnih tržnih raziskavah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sources.map((source, index) => (
              <div
                key={index}
                className="card hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-parkme-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="text-parkme-green" size={24} />
                  </div>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-semibold mb-2">
                      {source.category}
                    </span>
                    <h3 className="font-bold text-parkme-dark text-lg leading-tight">
                      {source.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {source.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">Ključne ugotovitve:</p>
                  <ul className="space-y-2">
                    {source.findings.map((finding, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-parkme-green mt-1">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-parkme-green hover:text-parkme-dark transition-colors text-sm font-semibold"
                >
                  Obišči vir
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer about local data */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h4 className="font-bold text-parkme-dark mb-3 flex items-center gap-2">
              <span className="text-2xl">ℹ️</span>
              Opomba o lokalnih podatkih
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Specifični podatki o parkiranju v Ljubljani (npr. učinkovitost redarjev, zasedenost parkirišč, število kazni) 
              niso javno dostopni. Za natančno analizo smo v stiku z <strong>Ljubljanska parkirišča in tržnice (LPT)</strong> 
              ter <strong>Mestno občino Ljubljana (MOL)</strong>. Prikazane ocene temeljijo na globalnih raziskavah podobnih 
              mest in so konservativne. Za podrobnejšo, lokalno specifično analizo, nas kontaktirajte.
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">LPT:</span>
                <a href="mailto:info@lpt.si" className="text-parkme-green hover:underline">info@lpt.si</a>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">01 300 12 00</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">MOL:</span>
                <a href="mailto:glavna.pisarna@ljubljana.si" className="text-parkme-green hover:underline">glavna.pisarna@ljubljana.si</a>
                <span className="text-gray-400">|</span>
                <span className="text-gray-600">01 306 10 00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sources
