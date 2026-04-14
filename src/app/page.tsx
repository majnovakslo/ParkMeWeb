'use client'

import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Technology from '@/components/Technology'
import Features from '@/components/Features'
import BusinessModel from '@/components/BusinessModel'
import Partnership from '@/components/Partnership'
import ROICalculator from '@/components/ROICalculator'
import AboutUs from '@/components/AboutUs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Technology />
      <Features />
      <BusinessModel />
      <Partnership />
      <ROICalculator />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  )
}
