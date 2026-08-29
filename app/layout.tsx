import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jyothi Mines & Minerals | Exfoliated Vermiculite',
  description: 'Processed and exfoliated vermiculite for horticulture, construction, insulation, fire protection and industrial applications.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}