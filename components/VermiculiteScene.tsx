'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshTransmissionMaterial } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Flake({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const seed = useMemo(() => ({
    p: new THREE.Vector3((Math.random() - .5) * 3.2, (Math.random() - .5) * 2.8, (Math.random() - .5) * 2),
    r: new THREE.Euler(Math.random() * 2, Math.random() * 2, Math.random() * 2),
    s: .45 + Math.random() * .8
  }), [])
  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * (.08 + index * .004)
    ref.current.rotation.y += delta * (.11 + index * .003)
  })
  return <mesh ref={ref} position={seed.p} rotation={seed.r} scale={seed.s}>
    <icosahedronGeometry args={[.7, 1]} />
    <MeshTransmissionMaterial color="#a8b18f" roughness={.7} thickness={.25} transmission={.18} ior={1.3} />
  </mesh>
}

function SceneContent() {
  const flakes = useMemo(() => Array.from({ length: 18 }, (_, i) => i), [])
  return <>
    <ambientLight intensity={1.5} />
    <directionalLight position={[4, 5, 6]} intensity={4} />
    <Environment preset="forest" />
    <Float speed={1.2} rotationIntensity={.18} floatIntensity={.25}>
      <group>
        {flakes.map(i => <Flake key={i} index={i} />)}
      </group>
    </Float>
  </>
}

export default function VermiculiteScene() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 8], fov: 38 }} gl={{ antialias: true, powerPreference: 'high-performance' }}>
    <SceneContent />
  </Canvas>
}
