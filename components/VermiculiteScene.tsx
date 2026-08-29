'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Flake({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const seed = useMemo(() => ({
    p: new THREE.Vector3(
      (Math.random() - 0.5) * 3.2,
      (Math.random() - 0.5) * 2.8,
      (Math.random() - 0.5) * 2
    ),
    r: new THREE.Euler(Math.random() * 2, Math.random() * 2, Math.random() * 2),
    s: 0.45 + Math.random() * 0.8
  }), [])

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * (0.08 + index * 0.004)
    ref.current.rotation.y += delta * (0.11 + index * 0.003)
  })

  return (
    <mesh ref={ref} position={seed.p} rotation={seed.r} scale={seed.s}>
      <icosahedronGeometry args={[0.7, 1]} />
      <meshStandardMaterial color="#a8b18f" roughness={0.78} metalness={0.02} />
    </mesh>
  )
}

function SceneContent() {
  const flakes = useMemo(() => Array.from({ length: 18 }, (_, i) => i), [])

  return (
    <>
      <ambientLight intensity={1.7} />
      <directionalLight position={[4, 5, 6]} intensity={3.2} />
      <directionalLight position={[-4, -2, 3]} intensity={1.2} />
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.25}>
        <group>
          {flakes.map((i) => <Flake key={i} index={i} />)}
        </group>
      </Float>
    </>
  )
}

function SceneFallback() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        display: 'grid',
        placeItems: 'center',
        pointerEvents: 'none'
      }}
    >
      <div
        style={{
          width: '42%',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 35% 30%, #dce4c9, #87936f 55%, #4d5741)',
          boxShadow: '0 25px 70px rgba(62,72,48,.22)'
        }}
      />
    </div>
  )
}

export default function VermiculiteScene() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <SceneFallback />
      <Canvas
        dpr={[1, 1.25]}
        camera={{ position: [0, 0, 8], fov: 38 }}
        gl={{ antialias: true, powerPreference: 'default' }}
        fallback={<SceneFallback />}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}
