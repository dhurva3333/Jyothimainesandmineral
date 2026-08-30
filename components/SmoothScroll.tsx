'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Native scrolling is intentionally kept as the baseline. It avoids fighting
    // browser scroll, sticky sections and Three.js while remaining fast on mobile.
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  }, [])
  return null
}
