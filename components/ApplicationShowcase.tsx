'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

const COLORS = ['#5b4532', '#765535', '#916b43', '#ad8658', '#c2a274', '#d1b98e']

function flakeShape(seed: number) {
  const shape = new THREE.Shape()
  const n = 9
  for (let j = 0; j < n; j += 1) {
    const a = (j / n) * Math.PI * 2
    const wobble = 0.84 + (((seed * 17 + j * 9) % 23) / 23) * 0.28
    const r = (0.48 + ((seed + j) % 5) * 0.075) * wobble
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * (0.48 + ((seed + j) % 3) * 0.06)
    if (j === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

function RealFlake({ index, scale = 1 }: { index: number; scale?: number }) {
  return <group scale={scale} position={[Math.cos(index * 2.399) * (0.28 + (index % 4) * 0.2), Math.sin(index * 1.7) * 0.24, Math.sin(index * 2.399) * (0.28 + (index % 4) * 0.2)]} rotation={[0.28, index * 0.2, index * 0.13]}>{Array.from({ length: 3 }, (_, layer) => <mesh key={layer} position={[(layer - 1) * 0.055, layer * 0.035, layer * 0.02]} rotation={[0, 0, layer * 0.014]}><extrudeGeometry args={[flakeShape(index + layer * 17), { depth: 0.032, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.013, bevelThickness: 0.009, curveSegments: 3 }]} /><meshStandardMaterial color={COLORS[(index + layer) % COLORS.length]} roughness={0.88} metalness={0.01} /></mesh>)}</group>
}

function HorticultureScene() { return <group>{Array.from({ length: 9 }, (_, i) => <RealFlake key={i} index={i} scale={0.42} />)}<mesh position={[0, -0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}><cylinderGeometry args={[1.25, 1.05, 0.14, 40]} /><meshStandardMaterial color="#49392a" roughness={1} /></mesh></group> }
function ConstructionScene() { return <group>{Array.from({ length: 8 }, (_, i) => <RealFlake key={i} index={i} scale={0.34} />)}<mesh position={[0, 0, 0]} scale={[1.35, 0.42, 0.9]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="#a99782" roughness={0.9} /></mesh></group> }
function PanelScene() { return <group>{Array.from({ length: 8 }, (_, i) => <RealFlake key={i} index={i} scale={0.27} />)}{[-0.72, 0, 0.72].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.55, 1.35, 0.09]} /><meshStandardMaterial color="#9f8669" roughness={0.82} /></mesh>)}</group> }
function FrictionScene() { return <group>{Array.from({ length: 10 }, (_, i) => <RealFlake key={i} index={i} scale={0.18} />)}<mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.05, 0.28, 18, 44]} /><meshStandardMaterial color="#282522" roughness={0.72} /></mesh><mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.66, 0.66, 0.18, 44]} /><meshStandardMaterial color="#403a33" roughness={0.76} /></mesh></group> }

function ApplicationWorld({ index, reducedMotion }: { index: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current || reducedMotion) return
    const t = state.clock.elapsedTime
    ref.current.rotation.y += (t * 0.035 + index * 0.22 - ref.current.rotation.y) * 0.025
    ref.current.rotation.x += (Math.sin(t * 0.2) * 0.025 - ref.current.rotation.x) * 0.035
  })
  const scene = index === 0 ? <HorticultureScene /> : index === 2 ? <ConstructionScene /> : index === 3 || index === 4 || index === 6 ? <PanelScene /> : index === 5 ? <FrictionScene /> : <group>{Array.from({ length: 10 }, (_, i) => <RealFlake key={i} index={i} scale={0.25} />)}</group>
  return <group ref={ref}>{scene}</group>
}

function useNearViewport(ref: RefObject<HTMLElement | null>) {
  const [near, setNear] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true)
        observer.disconnect()
      }
    }, { rootMargin: '500px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
  return near
}

export default function ApplicationShowcase({ applications }: { applications: ApplicationDetail[] }) {
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const stage = useRef<HTMLDivElement>(null)
  const near = useNearViewport(stage)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-application-card]'))
    if (!nodes.length) return
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) {
        const index = Number((visible.target as HTMLElement).dataset.applicationIndex)
        if (Number.isFinite(index)) setActive(index)
      }
    }, { threshold: [0.25, 0.55, 0.8], rootMargin: '-18% 0px -18% 0px' })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [applications.length])

  const app = applications[active]

  return <div className="application-showcase-v3">
    <div className="application-stage-v3" ref={stage}>
      {near ? <Canvas dpr={[1, 1.3]} camera={{ position: [0, 0.15, 4.4], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }} frameloop="always" fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} onCreated={({ gl }) => { gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05 }}>
        <color attach="background" args={['#17120e']} />
        <ambientLight intensity={1.15} />
        <directionalLight position={[4, 5, 5]} intensity={2.6} />
        <directionalLight position={[-4, 2, 1]} intensity={1.2} />
        <ApplicationWorld index={active} reducedMotion={reducedMotion} />
      </Canvas> : <div className="three-fallback three-loading">Application scene loading…</div>}
      <div className="application-stage-label-v3" key={app.id}><span>{String(active + 1).padStart(2, '0')}</span><b>{app.eyebrow}</b><strong>{app.title}</strong><small>Interactive application visual</small></div>
    </div>

    <div className="application-scroll-rail" aria-label="Applications">
      {applications.map((item, index) => <article className={`application-card-v3 ${index === active ? 'is-active' : ''}`} data-application-card data-application-index={index} key={item.id}>
        <div className="application-card-v3-top"><span>{String(index + 1).padStart(2, '0')}</span><button type="button" onClick={() => setActive(index)} aria-label={`Show ${item.title} in 3D`}>{item.title}<i>↗</i></button></div>
        <p>{item.short}</p>
        <div className="application-card-actions"><Link className="button primary" href={`/applications/${item.id}`}>Full explanation</Link><Link className="button ghost" href={`/sizes?application=${item.id}`}>Sizes & enquire</Link></div>
      </article>)}
    </div>
  </div>
}
