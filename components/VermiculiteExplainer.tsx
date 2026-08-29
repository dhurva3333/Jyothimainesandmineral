'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function Layer({ y, scale, opacity }: { y: number; scale: number; opacity: number }) {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.28 + y) * 0.035
  })
  return (
    <mesh ref={ref} position={[0, y, 0]} scale={scale}>
      <cylinderGeometry args={[1.45, 1.55, 0.055, 32]} />
      <meshStandardMaterial color="#b8c69a" roughness={0.72} metalness={0.02} transparent opacity={opacity} />
    </mesh>
  )
}

function Water({ y }: { y: number }) {
  const points = useMemo(() => Array.from({ length: 10 }, (_, i) => [Math.cos(i * 2.1) * 1.05, y, Math.sin(i * 2.1) * 1.05] as [number, number, number]), [y])
  return <group>{points.map((p, i) => <mesh key={i} position={p}><sphereGeometry args={[0.055, 10, 10]} /><meshStandardMaterial color="#d7efc0" emissive="#9fca76" emissiveIntensity={0.5} /></mesh>)}</group>
}

function Scene() {
  return (
    <>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 5]} intensity={2.4} />
      <directionalLight position={[-4, -1, 2]} intensity={1.1} />
      <Float speed={0.7} rotationIntensity={0.08} floatIntensity={0.12}>
        <group rotation={[0.35, -0.2, 0]}>
          <Layer y={-0.42} scale={1.02} opacity={0.92} />
          <Water y={-0.27} />
          <Layer y={-0.2} scale={0.98} opacity={0.88} />
          <Water y={-0.04} />
          <Layer y={0.04} scale={1.03} opacity={0.92} />
          <Water y={0.20} />
          <Layer y={0.28} scale={0.96} opacity={0.88} />
          <Layer y={0.50} scale={1.00} opacity={0.9} />
        </group>
      </Float>
      <OrbitControls enablePan={false} minDistance={4.2} maxDistance={7.5} autoRotate autoRotateSpeed={0.45} />
    </>
  )
}

export default function VermiculiteExplainer() {
  return (
    <div className="three-explainer" aria-label="Interactive three-dimensional visualization of vermiculite's layered structure">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.2, 5.6], fov: 34 }} gl={{ antialias: true, powerPreference: 'default' }}>
        <Scene />
      </Canvas>
      <div className="three-caption"><span>INTERACTIVE MATERIAL MODEL</span><b>Layered structure · interlayer water</b><small>Drag to inspect</small></div>
    </div>
  )
}
