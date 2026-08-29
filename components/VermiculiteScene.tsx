'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Flake({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const seed = useMemo(() => {
    const angle = (index / 14) * Math.PI * 2
    const radius = 0.45 + (index % 4) * 0.48
    return {
      position: new THREE.Vector3(Math.cos(angle) * radius, (index % 5 - 2) * 0.38, Math.sin(angle) * radius * 0.55),
      rotation: new THREE.Euler((index % 3) * 0.35, angle, (index % 5 - 2) * 0.16),
      scale: 0.42 + (index % 5) * 0.13,
    }
  }, [index])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.z += delta * (0.035 + (index % 3) * 0.008)
    ref.current.rotation.y += delta * 0.018
  })

  return (
    <mesh ref={ref} position={seed.position} rotation={seed.rotation} scale={seed.scale}>
      <boxGeometry args={[1.8, 0.16, 1.05]} />
      <meshStandardMaterial color="#aab79a" roughness={0.92} metalness={0.01} />
    </mesh>
  )
}

function Core() {
  const ref = useRef<THREE.Group>(null)
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.035
    ref.current.rotation.x = Math.sin(Date.now() * 0.00035) * 0.035
  })
  return <group ref={ref}>
    {Array.from({ length: 14 }, (_, i) => <Flake key={i} index={i} />)}
  </group>
}

function SceneContent() {
  return <>
    <ambientLight intensity={1.8} />
    <directionalLight position={[4, 6, 5]} intensity={3.4} />
    <directionalLight position={[-5, 1, 3]} intensity={1.4} />
    <pointLight position={[0, 0, 3]} intensity={1.2} color="#e5edcf" />
    <Core />
  </>
}

function SceneFallback() {
  return <div aria-hidden="true" style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', pointerEvents: 'none' }}>
    <div style={{ width: '45%', height: '24%', borderRadius: '50%', background: 'linear-gradient(135deg,#dce5cd,#748265 55%,#3c4636)', transform: 'rotate(-14deg)', boxShadow: '30px 35px 70px rgba(30,38,27,.25)' }} />
  </div>
}

export default function VermiculiteScene() {
  return <div style={{ position: 'absolute', inset: 0 }}>
    <SceneFallback />
    <Canvas dpr={[1, 1.25]} camera={{ position: [0, 0, 8], fov: 36 }} gl={{ antialias: true, powerPreference: 'default' }} fallback={<SceneFallback />}>
      <SceneContent />
    </Canvas>
  </div>
}
