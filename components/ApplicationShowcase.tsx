'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

function ApplicationObject({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * (0.12 + index * 0.012)
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35 + index) * 0.08
  })
  const count = 7 + (index % 4)
  return (
    <Float speed={0.8 + index * 0.04} rotationIntensity={0.12} floatIntensity={0.18}>
      <group ref={ref}>
        {Array.from({ length: count }, (_, i) => {
          const a = (i / count) * Math.PI * 2
          const radius = 0.65 + (i % 2) * 0.18
          return <mesh key={i} position={[Math.cos(a) * radius, Math.sin(a * 1.7) * 0.18, Math.sin(a) * radius]} rotation={[a * 0.5, a, a * 0.3]} scale={[0.46, 0.09, 0.22]}>
            <icosahedronGeometry args={[0.65, 1]} />
            <meshStandardMaterial color={i % 2 ? '#b4c296' : '#89966f'} roughness={0.8} metalness={0.02} />
          </mesh>
        })}
      </group>
    </Float>
  )
}

function ApplicationVisual({ index }: { index: number }) {
  return <Canvas dpr={[1, 1.4]} camera={{ position: [0, 0, 3.7], fov: 38 }} gl={{ antialias: true, powerPreference: 'default' }}>
    <ambientLight intensity={1.15} />
    <directionalLight position={[3, 4, 4]} intensity={2.3} />
    <directionalLight position={[-3, -2, 1]} intensity={0.8} />
    <ApplicationObject index={index} />
  </Canvas>
}

export default function ApplicationShowcase({ applications }: { applications: ApplicationDetail[] }) {
  return (
    <div className="application-showcase">
      {applications.map((app, index) => (
        <article className="application-card" key={app.id}>
          <div className="application-visual"><ApplicationVisual index={index} /><span>{String(index + 1).padStart(2, '0')}</span></div>
          <div className="application-card-copy">
            <p className="eyebrow">{app.eyebrow}</p>
            <h3>{app.title}</h3>
            <p>{app.short}</p>
            <div className="application-card-actions">
              <Link className="button primary" href={`/applications/${app.id}`}>Full explanation</Link>
              <Link className="button ghost" href={`/applications/${app.id}/sizes`}>Sizes & enquire</Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
