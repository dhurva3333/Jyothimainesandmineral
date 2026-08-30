'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const VERMICULITE_COLORS = ['#403126', '#5A402B', '#765534', '#947047', '#AF8551', '#C19B63', '#D0B47E']

function makeFlakeShape(seed: number) {
  const shape = new THREE.Shape()
  const points = 10
  for (let i = 0; i < points; i += 1) {
    const angle = (i / points) * Math.PI * 2
    const wobble = 0.8 + (((seed * 19 + i * 11) % 29) / 29) * 0.38
    const radius = 0.72 * wobble
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius * (0.42 + ((seed + i) % 3) * 0.08)
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

function Scene() {
  const group = useRef<THREE.Group>(null)
  const flakes = useMemo(() => Array.from({ length: 12 }, (_, i) => {
    const geometry = new THREE.ExtrudeGeometry(makeFlakeShape(i + 1), { depth: 0.045 + (i % 3) * 0.012, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.018, bevelThickness: 0.012, curveSegments: 2 })
    geometry.center()
    const angle = (i / 12) * Math.PI * 2
    return {
      geometry,
      position: [Math.cos(angle) * (0.2 + (i % 5) * 0.22), Math.sin(i * 1.91) * 0.28, Math.sin(angle) * (0.2 + (i % 5) * 0.22)] as [number, number, number],
      rotation: [0.18 + i * 0.11, angle * 0.7, i * 0.37] as [number, number, number],
      scale: 0.5 + (i % 4) * 0.1,
      color: VERMICULITE_COLORS[i % VERMICULITE_COLORS.length],
    }
  }), [])

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y += 0.0009
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.018 + 0.1
  })

  return <>
    <ambientLight intensity={0.75} />
    <directionalLight position={[4, 6, 5]} intensity={2.8} />
    <directionalLight position={[-4, 1, 3]} intensity={1.15} color="#D4AE70" />
    <pointLight position={[0, 2, 3]} intensity={0.5} color="#E1C18A" />
    <group ref={group} rotation={[0.22, -0.28, 0]}>
      {flakes.map((flake, i) => <mesh key={i} geometry={flake.geometry} position={flake.position} rotation={flake.rotation} scale={flake.scale}><meshStandardMaterial color={flake.color} roughness={0.94} metalness={0.04} /></mesh>)}
    </group>
  </>
}

export default function HeroMaterial() {
  return <div className="hero-scene" aria-label="Interactive 3D visualization of natural vermiculite flakes">
    <Canvas fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} dpr={[1, 1.25]} camera={{ position: [0, 0.3, 4.4], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }}><Scene /></Canvas>
    <div className="hero-art-label"><span>01</span><b>VERMICULITE<br />NATURAL FLAKE STUDY</b></div>
    <div className="hero-art-caption">3D MATERIAL VIEW</div>
  </div>
}
