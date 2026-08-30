import './globals.css'
import type { Metadata } from 'next'
import SmoothScroll from '../components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Jyothi Mines & Minerals | Vermiculite',
  description: 'Application-led vermiculite information and B2B supply from Jyothi Mines & Minerals.',
  robots: { index: true, follow: true },
  openGraph: { title: 'Jyothi Mines & Minerals', description: 'Vermiculite, explained clearly and supplied application-first.', type: 'website' }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SmoothScroll />{children}</body></html>
}
