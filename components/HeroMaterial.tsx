'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function Flake({ i }: { i: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const a = (i / 14) * Math.PI * 2
  const r = 0.45 + (i % 3) * 0.24
  useFrame((s) => {
    if (!ref.current) return
    ref.current.rotation.z += 0.0015 + i * 0.00008
    ref.current.position.y += Math.sin(s.clock.elapsedTime * 0.65 + i) * 0.0008
  })
  return <mesh ref={ref} position={[Math.cos(a) * r, Math.sin(i * 1.7) * 0.22, Math.sin(a) * r]} rotation={[0.15 + i * .09, a, i * .2]} scale={[0.48 + (i % 4) * .08, 0.055, 0.25 + (i % 3) * .05]}>
    <sphereGeometry args={[0.62, 18, 10]} />
    <meshStandardMaterial color={i % 3 === 0 ? '#c5d1ad' : i % 3 === 1 ? '#8d9b78' : '#aab99a'} roughness={0.88} metalness={0.02} />
  </mesh>
}

function Scene() {
  return <>
    <ambientLight intensity={1.15} />
    <directionalLight position={[4, 5, 4]} intensity={2.6} />
    <directionalLight position={[-4, 1, 2]} intensity={1.2} />
    <Float speed={0.65} rotationIntensity={0.18} floatIntensity={0.2}>
      <group rotation={[0.2, -0.35, 0]}>{Array.from({ length: 14 }, (_, i) => <Flake key={i} i={i} />)}</group>
    </Float>
    <OrbitControls enablePan={false} minDistance={3.1} maxDistance={6.5} autoRotate autoRotateSpeed={0.32} />
  </>
}

export default function HeroMaterial() {
  return <div className="hero-scene" aria-label="Interactive 3D vermiculite flake visualization">
    <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0.35, 4.2], fov: 34 }} gl={{ antialias: true, powerPreference: 'default' }}>
      <Scene />
    </Canvas>
    <div className="hero-art-label"><span>01</span><b>VERMICULITE<br />MATERIAL STUDY</b></div>
    <div className="hero-art-caption">DRAG · ROTATE · INSPECT</div>
  </div>
}
