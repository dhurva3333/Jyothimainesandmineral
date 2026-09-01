'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState, useSyncExternalStore, type RefObject } from 'react'
import Link from 'next/link'
import * as THREE from 'three'

const chapters = [
  { eyebrow: '01 / MATERIAL', title: 'Naturally layered.', text: 'Vermiculite is a naturally occurring mineral with a distinctive laminar structure. The visual treatment stays close to the real flaky material rather than using a generic 3D blob.' },
  { eyebrow: '02 / STRUCTURE', title: 'Layers create volume and space.', text: 'As you scroll, the layered form opens up. The camera moves with the material so thickness, spacing and expanded structure become something you can see rather than just read about.' },
  { eyebrow: '03 / MATERIAL BEHAVIOUR', title: 'Structure becomes useful.', text: 'The visual story returns to the practical characteristics buyers care about: lightweight structure, porosity, moisture interaction and thermal behaviour.' },
]

const palette = ['#4b3525', '#64462d', '#7d5836', '#987047', '#b18757', '#c6a878', '#d4bc91']
const reducedMotionQuery = '(prefers-reduced-motion: reduce)'

function subscribeReducedMotion(onStoreChange: () => void) {
  const media = window.matchMedia(reducedMotionQuery)
  media.addEventListener('change', onStoreChange)
  return () => media.removeEventListener('change', onStoreChange)
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches
}

function getReducedMotionServerSnapshot() {
  return false
}

function makeFlake(seed: number, scale = 1) {
  const shape = new THREE.Shape()
  const points = 12
  for (let i = 0; i < points; i += 1) {
    const angle = (i / points) * Math.PI * 2
    const wobble = 0.82 + (((seed * 17 + i * 11) % 31) / 31) * 0.36
    const radius = 0.92 * wobble * scale
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius * (0.34 + ((seed + i) % 4) * 0.055)
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return new THREE.ExtrudeGeometry(shape, { depth: 0.06, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.018, bevelThickness: 0.012, curveSegments: 3 })
}

function MaterialObject({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null)
  const geometries = useMemo(() => Array.from({ length: 9 }, (_, i) => makeFlake(i + 1, 1 - (i % 3) * 0.06)), [])

  useFrame((state) => {
    if (!group.current) return
    const phase = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2
    const targetY = reducedMotion ? 0 : state.clock.elapsedTime * 0.035 + progress * 0.7
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.025
    group.current.rotation.x += ((0.22 + progress * 0.18) - group.current.rotation.x) * 0.035
    const targetScale = phase === 0 ? 1.08 : phase === 1 ? 1.18 : 1.02
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale * 0.94, targetScale), 0.035)
    group.current.position.x += ((phase === 0 ? 0.8 : phase === 1 ? 0 : -0.25) - group.current.position.x) * 0.035
    group.current.position.y += ((phase === 0 ? -0.05 : 0.02) - group.current.position.y) * 0.035
  })

  return <group ref={group} rotation={[0.22, -0.25, 0]}>
    {geometries.map((geometry, i) => {
      const angle = i * 2.399
      const base = (i % 3) * 0.07
      const layer = Math.sin(i * 1.7) * 0.05
      const separation = progress < 0.34 ? i * 0.018 : progress < 0.68 ? (i - 4) * 0.12 : Math.sin(i * 1.9 + progress * 4) * 0.22
      return <mesh key={i} geometry={geometry} position={[Math.cos(angle) * base, separation + layer, Math.sin(angle) * base]} rotation={[0.06 + i * 0.03, angle * 0.18, i * 0.16]} scale={0.62 + (i % 4) * 0.07}>
        <meshStandardMaterial color={palette[i % palette.length]} roughness={0.92} metalness={0.015} />
      </mesh>
    })}
  </group>
}

function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = node.getBoundingClientRect()
      const travel = Math.max(node.offsetHeight - window.innerHeight, 1)
      const next = THREE.MathUtils.clamp(-rect.top / travel, 0, 1)
      setProgress((current) => Math.abs(current - next) > 0.002 ? next : current)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [ref])
  return progress
}

export default function MaterialScrollStory() {
  const section = useRef<HTMLElement>(null)
  const progress = useScrollProgress(section)
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotionSnapshot, getReducedMotionServerSnapshot)
  const active = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2

  return <section ref={section} className="material-scroll-story" id="vermiculite" aria-label="Vermiculite interactive material explanation">
    <div className="material-scroll-sticky">
      <div className={`material-scroll-stage scene-${active}`}>
        <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0.1, 5.4], fov: 35 }} gl={{ antialias: true, powerPreference: 'high-performance' }} frameloop="always" fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} onCreated={({ gl }) => { gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05 }}>
          <color attach="background" args={[active === 0 ? '#eee8df' : '#17120e']} />
          <ambientLight intensity={active === 0 ? 1.15 : 1.05} />
          <directionalLight position={[4, 5, 5]} intensity={2.7} />
          <directionalLight position={[-4, 2, 2]} intensity={1.2} color="#d5ae72" />
          <MaterialObject progress={progress} reducedMotion={reducedMotion} />
        </Canvas>
        <div className="material-scroll-vignette" />
        <div className="material-scroll-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
      </div>
      <div className="material-scroll-copy">
        {chapters.map((chapter, index) => <article key={chapter.eyebrow} className={`material-scroll-chapter ${active === index ? 'is-active' : ''} ${index === 0 ? 'chapter-first' : ''}`}>
          <p>{chapter.eyebrow}</p>
          <h2>{chapter.title}</h2>
          <span>{chapter.text}</span>
          {index === 0 && <Link className="dark-button" href="/vermiculite">Explore the Material <b>→</b></Link>}
        </article>)}
      </div>
      <div className="material-scroll-label">SCROLL TO EXPLORE <span>↓</span></div>
    </div>
  </section>
}
