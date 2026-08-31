'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

const COLORS = ['#5b432e', '#765535', '#916b43', '#ad8658', '#c2a274', '#d1b98e']

function flake(seed: number) {
  const shape = new THREE.Shape()
  const n = 9
  for (let i = 0; i < n; i += 1) {
    const a = (i / n) * Math.PI * 2
    const r = (0.45 + ((seed + i) % 5) * 0.07) * (0.86 + (((seed * 13 + i * 7) % 17) / 17) * 0.25)
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * 0.5
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return new THREE.ExtrudeGeometry(shape, { depth: 0.045, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.012, bevelThickness: 0.009, curveSegments: 2 })
}

function ApplicationWorld({ active }: { active: number }) {
  const group = useRef<THREE.Group>(null)
  const geometry = useMemo(() => Array.from({ length: 12 }, (_, i) => flake(i + 1)), [])
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y += 0.0012
    group.current.rotation.x += ((active * 0.08) - group.current.rotation.x) * 0.02
    group.current.position.x += (((active - 1.5) * 0.08) - group.current.position.x) * 0.02
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.025
  })
  return <group ref={group}>
    {geometry.map((g, i) => {
      const a = (i / geometry.length) * Math.PI * 2
      const r = 0.5 + (i % 4) * 0.16
      return <mesh key={i} geometry={g} position={[Math.cos(a) * r, Math.sin(i * 1.6) * 0.25, Math.sin(a) * r]} rotation={[0.2 + i * 0.07, a, i * 0.22]} scale={0.38 + (i % 4) * 0.05}>
        <meshStandardMaterial color={COLORS[(i + active) % COLORS.length]} roughness={0.9} metalness={0.01} />
      </mesh>
    })}
  </group>
}

export default function ReferenceApplications3D({ applications }: { applications: ApplicationDetail[] }) {
  const [active, setActive] = useState(0)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reference-app]'))
    if (!nodes.length) return
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(Number((visible.target as HTMLElement).dataset.referenceIndex || 0))
    }, { threshold: [0.45, 0.7], rootMargin: '-10% 0px -10% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return <div ref={root} className="reference-apps-3d">
    <div className="reference-apps-world">
      <Canvas dpr={[1, 1.2]} camera={{ position: [0, 0.2, 4.8], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }} fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>}>
        <color attach="background" args={['#11100f']} />
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 5, 5]} intensity={2.6} />
        <directionalLight position={[-4, 2, 2]} intensity={1.1} color="#d2a866" />
        <ApplicationWorld active={active} />
      </Canvas>
      <div className="reference-apps-world-label"><span>{String(active + 1).padStart(2, '0')}</span><b>{applications[active]?.eyebrow}</b><strong>{applications[active]?.title}</strong></div>
    </div>
    <div className="reference-apps-cards">
      {applications.slice(0, 4).map((app, index) => <article data-reference-app data-reference-index={index} key={app.id} className={`reference-app-card ${index === active ? 'is-active' : ''}`}>
        <div className={`reference-app-photo reference-app-photo-${index + 1}`} aria-hidden="true"><span>{index === 0 ? '↗' : index === 1 ? '✦' : index === 2 ? '◇' : '◉'}</span></div>
        <strong>{app.title}</strong>
        <p>{app.short}</p>
        <Link href={`/applications/${app.id}`} aria-label={`Open ${app.title}`}>↗</Link>
      </article>)}
    </div>
    <div className="reference-apps-dots">{applications.slice(0, 4).map((app, i) => <button key={app.id} className={i === active ? 'is-active' : ''} onClick={() => document.querySelector(`[data-reference-index="${i}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })} aria-label={`Show ${app.title}`} />)}</div>
  </div>
}
