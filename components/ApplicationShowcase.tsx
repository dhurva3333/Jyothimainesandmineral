'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

function ApplicationObject({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * (0.12 + index * 0.01)
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.32 + index) * 0.07
  })
  const count = 7 + (index % 4)
  return <Float speed={0.75} rotationIntensity={0.12} floatIntensity={0.18}>
    <group ref={ref}>
      {Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2
        const radius = 0.68 + (i % 2) * 0.16
        return <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a * 1.7) * 0.18, Math.sin(a) * radius]} rotation={[a * 0.5, a, a * 0.3]} scale={[0.46, 0.09, 0.22]}>
          <icosahedronGeometry args={[0.65, 1]} />
          <meshStandardMaterial color={i % 2 ? '#b4c296' : '#89966f'} roughness={0.8} metalness={0.02} />
        </mesh>
      })}
    </group>
  </Float>
}

export default function ApplicationShowcase({ applications }: { applications: ApplicationDetail[] }) {
  const [active, setActive] = useState(0)
  const app = applications[active]
  return <div className="application-showcase">
    <div className="application-stage">
      <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0, 3.9], fov: 38 }} gl={{ antialias: true, powerPreference: 'default' }}>
        <ambientLight intensity={1.15} />
        <directionalLight position={[3, 4, 4]} intensity={2.3} />
        <directionalLight position={[-3, -2, 1]} intensity={0.8} />
        <ApplicationObject index={active} />
      </Canvas>
      <div className="application-stage-label"><span>{String(active + 1).padStart(2, '0')}</span><b>{app.eyebrow}</b><strong>{app.title}</strong><small>Interactive application material model</small></div>
    </div>
    <div className="application-list">
      {applications.map((item, index) => <article className={`application-card ${index === active ? 'is-active' : ''}`} key={item.id} onMouseEnter={() => setActive(index)}>
        <button className="application-select" type="button" onClick={() => setActive(index)} aria-label={`Show ${item.title} in 3D`}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.title}</b><i>↗</i></button>
        <p>{item.short}</p>
        <div className="application-card-actions"><Link className="button primary" href={`/applications/${item.id}`}>Full explanation</Link><Link className="button ghost" href={`/applications/${item.id}/sizes`}>Sizes & enquire</Link></div>
      </article>)}
    </div>
  </div>
}
