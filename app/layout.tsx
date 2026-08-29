import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jyothi Mines & Minerals | Exfoliated Vermiculite',
  description: 'Application-led exfoliated vermiculite supply for horticulture, construction, insulation, fire protection and selected industrial materials.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Jyothi Mines & Minerals', description: 'Exfoliated vermiculite, matched to the application.', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
