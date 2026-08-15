'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, AlertCircle, Info } from 'lucide-react'

const ROICalculator = () => {
  const [parkingSpots, setParkingSpots] = useState(100)
  const [avgPrice, setAvgPrice] = useState(2)
  const [currentOccupancy, setCurrentOccupancy] = useState(60)
  const [dailyFines, setDailyFines] = useState(10)
  const [avgTripsPerDay, setAvgTripsPerDay] = useState(200)
  const avgFineAmount = 30 // Average parking fine in Slovenia

  // ═══════════════════════════════════════════════════════════════
  // FORMULE TEMELJIJO NA CASE STUDY: SFpark (San Francisco, 2011-2014)
  // Vir: SFMTA SFpark Pilot Project Evaluation (2014)
  // ═══════════════════════════════════════════════════════════════

  // ── 1. METER REVENUE: +21% Compliance (SFpark dokazano) ──
  // SFpark je dosegel +21% plačil parkirnine (monetizacija prej neplačanih sej)
  const currentParkingRevenue = parkingSpots * avgPrice * 8 * 365 * (currentOccupancy / 100)
  const complianceMultiplier = 1.21 // SFpark: +21% compliance
  const improvedParkingRevenue = currentParkingRevenue * complianceMultiplier
  const additionalMeterRevenue = improvedParkingRevenue - currentParkingRevenue

  // ── 2. OCCUPANCY: Cilj 60% → 80% (SFpark dokazano) ──
  // SFpark je dosegel target zasedenosti 60-80%, zmanjšal kroženje za 50%
  const targetOccupancy = Math.min(currentOccupancy * 1.33, 85) // +33% improvement, capped at 85%
  const occupancyGain = targetOccupancy - currentOccupancy
  const additionalOccupancyRevenue = parkingSpots * avgPrice * 8 * 365 * (occupancyGain / 100)

  // ── 3. PATROL EFFICIENCY: +20% Citations/Hr (SFpark dokazano) ──
  // Pametno usmerjanje redarjev z real-time senzorji → +20% kazni na uro
  // Dodatno: več zasedenih mest = šibko več kršitev (weak correlation 0.3)
  const patrolEfficiencyGain = 0.20 // SFpark: +20% citations per hour
  const occupancyBoost = (occupancyGain / 100) * 0.3 // Weak correlation: more cars → slightly more violations
  const totalFineMultiplier = 1 + patrolEfficiencyGain + occupancyBoost
  const currentFineRevenue = dailyFines * avgFineAmount * 365
  const improvedFineRevenue = dailyFines * totalFineMultiplier * avgFineAmount * 365
  const additionalFineRevenue = improvedFineRevenue - currentFineRevenue

  // ── 4. LABOR SAVINGS: 20-30% Reduction (SFpark dokazano) ──
  // Eliminacija ročnega štetja in preverjanja kovancev/plačil
  // Ocena: 1 FTE redar = ~€28,000/leto, prihranek 25% časa
  const estimatedEnforcementStaff = Math.max(1, Math.round(parkingSpots / 150)) // ~1 redar na 150 mest
  const annualLaborCostPerStaff = 28000 // €/leto bruto (Slovenija)
  const laborSavingsPercent = 0.25 // Sredina 20-30% razpona
  const laborSavings = estimatedEnforcementStaff * annualLaborCostPerStaff * laborSavingsPercent

  // ── 5. TIME SAVINGS: -5 min per trip (SFpark: -30% iskanja) ──
  // SFpark je zmanjšal čas iskanja za 30% (~5 min prihranek)
  // Monetizacija: prihranjen čas × urna plača (€14.35/h = povprečna SI)
  const hourlyWage = 14.35 // €/h - povprečna bruto urna plača Slovenija
  const timeSavedMinutes = 5 // SFpark: -5 min per trip
  const timeSavingsValue = avgTripsPerDay * (timeSavedMinutes / 60) * hourlyWage * 365

  // ── 6. CO₂ SAVINGS: -30% Emissions (SFpark dokazano) ──
  // SFpark: -30% greenhouse gas emissions v pilotnih območjih
  // Izračun: manj kroženja = manj goriva = manj CO₂
  // ~0.15 kg CO₂/min mestne vožnje, prihranek 5 min/trip
  const co2PerMinute = 0.15 // kg CO₂/min
  const co2SavedKg = avgTripsPerDay * timeSavedMinutes * co2PerMinute * 365
  const carbonPrice = 70 // €/tona - EU ETS povprečna cena
  const co2MonetaryValue = (co2SavedKg / 1000) * carbonPrice

  // ── 7. TOTAL ──
  const totalDirectRevenue = additionalMeterRevenue + additionalOccupancyRevenue + additionalFineRevenue
  const totalSavings = laborSavings + timeSavingsValue + co2MonetaryValue
  const totalBenefit = totalDirectRevenue + totalSavings

  // Investment costs
  const monthlyInvestment = parkingSpots * 24 // €15 per sensor per month (OPEX model)
  const annualInvestment = monthlyInvestment * 12
  const netProfit = totalBenefit - annualInvestment - 150*parkingSpots
  const roiMonths = totalBenefit > 0 ? annualInvestment / (totalBenefit / 12) : 0

  return (
    <section id="roi" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-parkme-dark mb-4">
            ROI Kalkulator
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ocenite potencialne koristi ParkMe sistema za vašo lokacijo
          </p>
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto flex items-start gap-3">
            <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
            <p className="text-sm text-blue-800 text-left">
              <strong>Opomba:</strong> Kalkulator prikazuje ocenjene vrednosti na osnovi povprečnih tržnih podatkov. 
              Dejanski rezultati so odvisni od lokacije, obstoječe infrastrukture, uporabe in drugih dejavnikov. 
              Vse številke so približne ocene za ilustracijo potenciala.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="text-parkme-green" size={28} />
              <h3 className="text-2xl font-bold text-parkme-dark">Vnesi Podatke</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-parkme-dark mb-3">
                  Število parkirnih mest: <span className="text-parkme-green">{parkingSpots}</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="500"
                  value={parkingSpots}
                  onChange={(e) => setParkingSpots(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-parkme-green"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10</span>
                  <span>500</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-parkme-dark mb-3">
                  Povprečna cena parkirnine/uro: <span className="text-parkme-green">€{avgPrice}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-parkme-green"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>€1</span>
                  <span>€5</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-parkme-dark mb-3">
                  Trenutna zasedenost: <span className="text-parkme-green">{currentOccupancy}%</span>
                </label>
                <input
                  type="range"
                  min="30"
                  max="90"
                  value={currentOccupancy}
                  onChange={(e) => setCurrentOccupancy(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-parkme-green"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>30%</span>
                  <span>90%</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-parkme-dark mb-3">
                  Povprečno št. kazni/dan: <span className="text-parkme-green">{dailyFines}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={dailyFines}
                  onChange={(e) => setDailyFines(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-parkme-green"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>0</span>
                  <span>50</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-parkme-dark mb-3">
                  Povprečno št. parkirnih obiskov/dan: <span className="text-parkme-green">{avgTripsPerDay}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="10"
                  value={avgTripsPerDay}
                  onChange={(e) => setAvgTripsPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-parkme-green"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>50</span>
                  <span>1.000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {/* Direct Revenue */}
            <div className="bg-gradient-to-br from-parkme-green to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign size={24} />
                <h3 className="font-semibold">Dodatni Letni Prihodki</h3>
              </div>
              <div className="text-4xl font-bold">€{totalDirectRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</div>
              <div className="text-sm opacity-90 mt-3 space-y-1">
                <p>→ +21% plačila (compliance): €{additionalMeterRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ Večja zasedenost ({currentOccupancy}% → {Math.round(targetOccupancy)}%): €{additionalOccupancyRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ +20% učinkovitost kazni: €{additionalFineRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>

            {/* Savings */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={24} />
                <h3 className="font-semibold">Letni Prihranki</h3>
              </div>
              <div className="text-4xl font-bold">€{totalSavings.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</div>
              <div className="text-sm opacity-90 mt-3 space-y-1">
                <p>→ Delo (20-30% manj ročnega dela): €{laborSavings.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ Čas voznikov (-5 min/obisk): €{timeSavingsValue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ CO₂ prihranek ({(co2SavedKg / 1000).toFixed(1)}t × €{carbonPrice}/t): €{co2MonetaryValue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>

            {/* Net Profit */}
            <div className="bg-gradient-to-br from-parkme-blue to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign size={24} />
                <h3 className="font-semibold">Skupna Korist vs. Investicija</h3>
              </div>
              <div className="text-4xl font-bold">€{totalBenefit.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</div>
              <div className="text-sm opacity-90 mt-3 space-y-1">
                <p>Investicija (OPEX): €{annualInvestment.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}/leto</p>
                <p>Čisti dobiček: <span className="font-bold text-yellow-300">€{netProfit.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}/leto</span></p>
                <p>ROI v: <span className="font-bold text-yellow-300">{roiMonths.toFixed(1)} mesecih</span></p>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🌱</span>
                <h3 className="font-semibold">Okoljski Vpliv (SFpark: -30% emisij)</h3>
              </div>
              <div className="text-4xl font-bold">{(co2SavedKg / 1000).toFixed(1)} ton CO₂</div>
              <p className="text-sm opacity-90 mt-2">
                Letni prihranek • {avgTripsPerDay} obiskov × 5 min × 0.15 kg/min × 365 dni
              </p>
            </div>

            {/* SFpark Reference Table */}
            <div className="bg-gray-100 rounded-xl p-6 border-2 border-parkme-green">
              <h4 className="font-semibold text-parkme-dark mb-3 flex items-center gap-2">
                <Info size={18} className="text-parkme-green" />
                Metodologija – Dokazano s SFpark (San Francisco)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="py-2 pr-3 text-gray-600 font-semibold">Kategorija</th>
                      <th className="py-2 pr-3 text-gray-600 font-semibold">Metrika</th>
                      <th className="py-2 text-gray-600 font-semibold">Monetizacija</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-3 font-medium">Prihodki parkirnine</td>
                      <td className="py-2 pr-3 text-parkme-green font-semibold">+21% compliance</td>
                      <td className="py-2">Monetizacija prej neplačanih sej</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-3 font-medium">Učinkovitost patrolj</td>
                      <td className="py-2 pr-3 text-parkme-green font-semibold">+20% kazni/uro</td>
                      <td className="py-2">Real-time senzorji za usmerjanje</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-3 font-medium">Prihranek dela</td>
                      <td className="py-2 pr-3 text-parkme-green font-semibold">20–30% manj</td>
                      <td className="py-2">Eliminacija ročnega štetja</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 pr-3 font-medium">Prihranek časa</td>
                      <td className="py-2 pr-3 text-parkme-green font-semibold">-5 min/obisk</td>
                      <td className="py-2">Obiskov × 5 min × €{hourlyWage}/h</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-3 font-medium">CO₂ prihranek</td>
                      <td className="py-2 pr-3 text-parkme-green font-semibold">-30% emisij</td>
                      <td className="py-2">Tone × €{carbonPrice} EU ETS cena</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Source disclaimer */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-xs text-yellow-800">
                <strong>Vir:</strong> Izračuni temeljijo na rezultatih projekta <strong>SFpark</strong> (San Francisco, 2011-2014), 
                ki ga je izvedla SFMTA s financiranjem Federal Highway Administration. 
                Ključni podatki: +21% compliance, 60→80% zasedenost, -50% kroženje, +20% citations/hr, 
                -30% emisij CO₂, 20-30% prihranek dela, $35M skupni dohodek v 3 letih.
                Urna plača €{hourlyWage} temelji na SI povprečju, CO₂ cena €{carbonPrice}/t na EU ETS.
                Dejanske številke lahko variirajo. Kontaktirajte nas za specifično analizo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ROICalculator
