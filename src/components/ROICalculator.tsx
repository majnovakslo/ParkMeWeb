'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, AlertCircle } from 'lucide-react'

const ROICalculator = () => {
  const [parkingSpots, setParkingSpots] = useState(100)
  const [avgPrice, setAvgPrice] = useState(2)
  const [currentOccupancy, setCurrentOccupancy] = useState(60)
  const [dailyFines, setDailyFines] = useState(10)
  const avgFineAmount = 40 // Average parking fine in Slovenia

  // Calculations with ParkMe benefits
  // 1. Increased occupancy due to easier parking spot discovery
  const improvedOccupancy = Math.min(currentOccupancy + 15, 90) // Up to 15% improvement, max 90%
  
  // 2. Revenue from parking
  const currentParkingRevenue = parkingSpots * avgPrice * 8 * 365 * (currentOccupancy / 100)
  const improvedParkingRevenue = parkingSpots * avgPrice * 8 * 365 * (improvedOccupancy / 100)
  const additionalParkingRevenue = improvedParkingRevenue - currentParkingRevenue
  
  // 3. Revenue from fines (with smart enforcement routing)
  const currentFineRevenue = dailyFines * avgFineAmount * 365
  const improvedFineRevenue = dailyFines * 1.3 * avgFineAmount * 365 // 30% increase due to better routing
  const additionalFineRevenue = improvedFineRevenue - currentFineRevenue
  
  // 4. Revenue from reservations (2% of spots reserved daily at 20% premium)
  const reservationRevenue = parkingSpots * 0.02 * avgPrice * 1.2 * 365
  
  // 5. Total additional revenue
  const totalAdditionalRevenue = additionalParkingRevenue + additionalFineRevenue + reservationRevenue
  
  // 6. CO2 reduction (average 4 minutes saved per parking search, 0.15 kg CO2/min)
  const co2Saved = parkingSpots * (currentOccupancy / 100) * 4 * 0.15 * 365 // kg per year
  
  // Investment costs
  const monthlyInvestment = parkingSpots * 15 // €15 per sensor per month (OPEX model)
  const annualInvestment = monthlyInvestment * 12
  const netProfit = totalAdditionalRevenue - annualInvestment
  const roiMonths = annualInvestment / (totalAdditionalRevenue / 12)

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
              Kalkulator prikazuje ocenjene vrednosti. Dejanski rezultati so odvisni od lokacije, uporabe in drugih dejavnikov.
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
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-parkme-green to-green-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign size={24} />
                <h3 className="font-semibold">Skupni Dodatni Letni Prihodki</h3>
              </div>
              <div className="text-4xl font-bold">€{totalAdditionalRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</div>
              <div className="text-sm opacity-90 mt-3 space-y-1">
                <p>→ Parkiranje: €{additionalParkingRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ Kazni: €{additionalFineRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
                <p>→ Rezervacije: €{reservationRevenue.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-parkme-blue to-blue-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={24} />
                <h3 className="font-semibold">Čisti Letni Dobiček</h3>
              </div>
              <div className="text-4xl font-bold">€{netProfit.toLocaleString('sl-SI', { maximumFractionDigits: 0 })}</div>
              <p className="text-sm opacity-90 mt-2">
                ROI v: <span className="font-bold text-yellow-300">{roiMonths.toFixed(1)} mesecih</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">🌱</span>
                <h3 className="font-semibold">Okoljski Vpliv</h3>
              </div>
              <div className="text-4xl font-bold">{(co2Saved / 1000).toFixed(1)} ton CO₂</div>
              <p className="text-sm opacity-90 mt-2">Prihranek letno zaradi krajšega iskanja mest</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 border-2 border-parkme-green">
              <h4 className="font-semibold text-parkme-dark mb-3">Ključne Koristi Sistema:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-parkme-green">✓</span>
                  <span>Povečanje zasedenosti iz {currentOccupancy}% na {improvedOccupancy}%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-parkme-green">✓</span>
                  <span>Učinkovitejše usmerjanje redarjev (+30% kazni)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-parkme-green">✓</span>
                  <span>Prihodki iz rezervacij parkirnih mest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-parkme-green">✓</span>
                  <span>Zmanjšanje prometa in emisij CO₂</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-parkme-green">✓</span>
                  <span>Podatki v realnem času za optimizacijo</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-xs text-yellow-800">
                <strong>Opomba:</strong> Vrednosti so ocenjene na podlagi povprečnih tržnih podatkov in lahko variirajo glede na specifične pogoje lokacije.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ROICalculator
