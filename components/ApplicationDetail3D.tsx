'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const COLORS = ['#6E4A2E', '#8D6035', '#A9793F', '#C29A58', '#D0B678', '#8A6B4A']

function Flake({ i, active }: { i: number; active: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const a = (i / 18) * Math.PI * 2
  const radius = 0.35 + (i % 5) * 0.2
  const scale = 0.34 + ((i * 7) % 5) * 0.045
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y += 0.001 + (i % 3) * 0.00035
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.45 + i) * 0.08
  })
  return (
    <mesh ref={ref} position={[Math.cos(a) * radius, Math.sin(i * 1.37) * 0.35, Math.sin(a) * radius]} rotation={[0.15 + i * 0.07, a, i * 0.31]} scale={[scale * (1 + active * 0.015), 0.055, scale * 0.58]}>
      <sphereGeometry args={[0.72, 14, 8]} />
      <meshStandardMaterial color={COLORS[(i + active) % COLORS.length]} roughness={0.86} metalness={0.04} />
    </mesh>
  )
}

function Scene({ active }: { active: number }) {
  return <>
    <ambientLight intensity={1.15} />
    <directionalLight position={[4, 5, 4]} intensity={2.7} />
    <directionalLight position={[-4, 1, 2]} intensity={1.1} />
    <pointLight position={[0, 1, 3]} intensity={0.55} color="#D0A85C" />
    <Float speed={0.55} rotationIntensity={0.16} floatIntensity={0.16}>
      <group rotation={[0.18, -0.28, 0]}>{Array.from({ length: 18 }, (_, i) => <Flake key={i} i={i} active={active} />)}</group>
    </Float>
    <OrbitControls enablePan={false} minDistance={3.2} maxDistance={6.5} autoRotate autoRotateSpeed={0.28} />
  </>
}

export default function ApplicationDetail3D({ active = 0, label }: { active?: number; label: string }) {
  return <div className="detail-3d" aria-label={`Interactive vermiculite model for ${label}`}>
    <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0.2, 4.6], fov: 34 }} gl={{ antialias: true, powerPreference: 'default' }}>
      <Scene active={active} />
    </Canvas>
    <div className="detail-3d-overlay"><span>INTERACTIVE 3D MATERIAL</span><b>{label}</b><small>Drag · rotate · inspect</small></div>
  </div>
}
