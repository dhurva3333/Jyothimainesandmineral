'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'

export default function SmoothScroll(){
  useEffect(()=>{
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false })
    let raf = 0
    const tick = (time:number) => { lenis.raf(time); raf = requestAnimationFrame(tick) }
    raf = requestAnimationFrame(tick)
    const onResize = () => gsap.ticker.wake()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); lenis.destroy() }
  },[])
  return null
}
