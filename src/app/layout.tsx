import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ParkMe - Pametno Parkiranje za Slovenijo',
  description: 'ParkMe je slovensko startup podjetje, ki razvija inovativne pametne parkirne senzorje in aplikacije za učinkovito upravljanje parkirnih mest v realnem času.',
  keywords: 'parkiranje, pametni senzorji, Ljubljana, Urbana, parkirna mesta, IoT, smart parking',
  authors: [{ name: 'ParkMe' }],
  openGraph: {
    title: 'ParkMe - Pametno Parkiranje za Slovenijo',
    description: 'Inovativna rešitev za upravljanje parkirnih mest z IoT senzorji',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sl" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
