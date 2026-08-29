'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

const COLORS = ['#6f4a2d','#956337','#b17d42','#c69b5d','#d5bb86']

function ApplicationObject({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * (0.1 + index * 0.008)
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + index) * 0.06
  })
  const count = 13 + (index % 5)
  return <Float speed={0.7} rotationIntensity={0.14} floatIntensity={0.16}><group ref={ref}>{Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2
    const radius = 0.45 + (i % 4) * 0.18
    const s = 0.22 + ((i * 3) % 5) * 0.035
    return <mesh key={i} position={[Math.cos(a) * radius, Math.sin(i * 1.61) * 0.28, Math.sin(a) * radius]} rotation={[0.2 + i * 0.1, a, i * 0.27]} scale={[s, 0.045 + (i % 3) * 0.01, s * 0.58]}><sphereGeometry args={[0.72, 14, 8]} /><meshStandardMaterial color={COLORS[(i + index) % COLORS.length]} roughness={0.9} metalness={0.03} /></mesh>
  })}</group></Float>
}

export default function ApplicationShowcase({ applications }: { applications: ApplicationDetail[] }) {
  const [active, setActive] = useState(0)
  const app = applications[active]
  return <div className="application-showcase">
    <div className="application-stage"><Canvas dpr={[1, 1.35]} camera={{ position: [0, 0, 3.9], fov: 38 }} gl={{ antialias: true, powerPreference: 'default' }}><ambientLight intensity={1.15} /><directionalLight position={[3, 4, 4]} intensity={2.3} /><directionalLight position={[-3, -2, 1]} intensity={0.8} /><ApplicationObject index={active} /></Canvas><div className="application-stage-label"><span>{String(active + 1).padStart(2, '0')}</span><b>{app.eyebrow}</b><strong>{app.title}</strong><small>Interactive vermiculite material study</small></div></div>
    <div className="application-list">{applications.map((item, index) => <article className={`application-card ${index === active ? 'is-active' : ''}`} key={item.id} onMouseEnter={() => setActive(index)}><button className="application-select" type="button" onClick={() => setActive(index)} aria-label={`Show ${item.title} in 3D`}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.title}</b><i>↗</i></button><p>{item.short}</p><div className="application-card-actions"><Link className="button primary" href={`/applications/${item.id}`}>Full explanation</Link><Link className="button ghost" href={`/sizes?application=${item.id}`}>Sizes & enquire</Link></div></article>)}</div>
  </div>
}
