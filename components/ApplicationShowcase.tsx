'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

const COLORS = ['#6a5038', '#876746', '#a47d50', '#c09a67', '#d1b584']

function flakeShape(seed: number) {
  const shape = new THREE.Shape()
  const n = 8
  for (let j = 0; j < n; j += 1) {
    const a = (j / n) * Math.PI * 2
    const r = (0.48 + ((seed + j) % 5) * 0.08) * (1 + Math.sin(seed + j) * 0.05)
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * 0.58
    if (j === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

function RealFlake({ index, scale = 1 }: { index: number; scale?: number }) {
  const group = useRef<THREE.Group>(null)
  const angle = index * 2.399
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.24 + index) * 0.022
    group.current.rotation.y += 0.0007
  })
  return <group ref={group} scale={scale} position={[Math.cos(angle) * (0.3 + (index % 4) * 0.2), Math.sin(index * 1.7) * 0.22, Math.sin(angle) * (0.3 + (index % 4) * 0.2)]} rotation={[0.28, index * 0.2, index * 0.13]}>{Array.from({ length: 3 }, (_, layer) => <mesh key={layer} position={[(layer - 1) * 0.055, layer * 0.035, layer * 0.02]} rotation={[0, 0, layer * 0.014]}><extrudeGeometry args={[flakeShape(index + layer * 17), { depth: 0.032, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.013, bevelThickness: 0.009, curveSegments: 3 }]} /><meshStandardMaterial color={COLORS[(index + layer) % COLORS.length]} roughness={0.86} /></mesh>)}</group>
}

function HorticultureScene() { return <group>{Array.from({ length: 8 }, (_, i) => <RealFlake key={i} index={i} scale={0.42} />)}<mesh position={[0, -0.72, 0]} rotation={[-Math.PI / 2, 0, 0]}><cylinderGeometry args={[1.25, 1.05, 0.14, 48]} /><meshStandardMaterial color="#493b2d" roughness={1} /></mesh></group> }
function ConstructionScene() { return <group>{Array.from({ length: 7 }, (_, i) => <RealFlake key={i} index={i} scale={0.34} />)}<mesh position={[0, 0, 0]} scale={[1.35, 0.42, 0.9]}><boxGeometry args={[1, 1, 1]} /><meshStandardMaterial color="#a99782" roughness={0.9} /></mesh></group> }
function PanelScene() { return <group>{Array.from({ length: 8 }, (_, i) => <RealFlake key={i} index={i} scale={0.27} />)}{[-0.72, 0, 0.72].map((x) => <mesh key={x} position={[x, 0, 0]}><boxGeometry args={[0.55, 1.35, 0.09]} /><meshStandardMaterial color="#9f8669" roughness={0.8} /></mesh>)}</group> }
function FrictionScene() { return <group>{Array.from({ length: 10 }, (_, i) => <RealFlake key={i} index={i} scale={0.18} />)}<mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.05, 0.28, 20, 48]} /><meshStandardMaterial color="#282522" roughness={0.7} /></mesh><mesh position={[0, 0.02, 0]}><cylinderGeometry args={[0.66, 0.66, 0.18, 48]} /><meshStandardMaterial color="#403a33" roughness={0.74} /></mesh></group> }

function ApplicationWorld({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame((state) => {
    if (!ref.current) return
    const target = state.clock.elapsedTime * 0.035 + index * 0.22
    ref.current.rotation.y += (target - ref.current.rotation.y) * 0.025
    ref.current.rotation.x += (Math.sin(state.clock.elapsedTime * 0.2) * 0.025 - ref.current.rotation.x) * 0.035
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
    }, { rootMargin: '450px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
  return near
}

export default function ApplicationShowcase({ applications }: { applications: ApplicationDetail[] }) {
  const [active, setActive] = useState(0)
  const app = applications[active]
  const stage = useRef<HTMLDivElement>(null)
  const near = useNearViewport(stage)

  return <div className="application-showcase">
    <div className="application-stage" ref={stage}>
      {near ? <Canvas key={app.id} dpr={[1, 1.35]} camera={{ position: [0, 0.15, 4.4], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }} fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} onCreated={({ gl }) => { gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05 }}>
        <color attach="background" args={['#17120e']} />
        <ambientLight intensity={1.05} />
        <directionalLight position={[4, 5, 5]} intensity={2.6} />
        <directionalLight position={[-4, 2, 1]} intensity={1.2} />
        <ApplicationWorld index={active} />
      </Canvas> : <div className="three-fallback three-loading">Application scene loading…</div>}
      <div className="application-stage-label"><span>{String(active + 1).padStart(2, '0')}</span><b>{app.eyebrow}</b><strong>{app.title}</strong><small>Interactive application visual</small></div>
    </div>
    <div className="application-list">{applications.map((item, index) => <article className={`application-card ${index === active ? 'is-active' : ''}`} key={item.id}>
      <button className="application-select" type="button" onClick={() => setActive(index)} aria-label={`Show ${item.title} in 3D`}><span>{String(index + 1).padStart(2, '0')}</span><b>{item.title}</b><i>↗</i></button>
      <p>{item.short}</p>
      <div className="application-card-actions"><Link className="button primary" href={`/applications/${item.id}`}>Full explanation</Link><Link className="button ghost" href={`/sizes?application=${item.id}`}>Sizes & enquire</Link></div>
    </article>)}</div>
  </div>
}
