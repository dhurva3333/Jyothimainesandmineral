import './globals.css'
import './reference-overrides.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jyothi Mines & Minerals | Vermiculite',
  description: 'Exfoliated vermiculite from Proddatur, Andhra Pradesh for horticulture, agriculture, industry and construction.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Jyothi Mines & Minerals', description: 'Vermiculite. Material with Purpose.', type: 'website' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
