'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const LAYER_COLORS = ['#4A3424', '#6B4A2E', '#8A6238', '#A77A43', '#C39A5C', '#B9874B']

function makeLayer(seed: number) {
  const shape = new THREE.Shape()
  const points = 13
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2
    const wobble = 0.82 + (((seed * 17 + i * 7) % 23) / 23) * 0.34
    const r = 0.88 * wobble
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * (0.48 + ((seed + i) % 2) * 0.08)
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.055,
    bevelEnabled: true,
    bevelSegments: 2,
    bevelSize: 0.02,
    bevelThickness: 0.012,
  })
  geometry.center()
  return geometry
}

function Layer({ y, scale, color, seed }: { y: number; scale: number; color: string; seed: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const geometry = useMemo(() => makeLayer(seed), [seed])
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.22 + seed) * 0.018
  })
  return <mesh ref={ref} geometry={geometry} position={[0, y, 0]} scale={scale}>
    <meshStandardMaterial color={color} roughness={0.94} metalness={0.045} />
  </mesh>
}

function InterlayerParticles({ y }: { y: number }) {
  const points = useMemo(() => Array.from({ length: 9 }, (_, i) => [
    Math.cos(i * 2.35) * (0.58 + (i % 2) * 0.18),
    y,
    Math.sin(i * 2.35) * (0.58 + (i % 3) * 0.12),
  ] as [number, number, number]), [y])
  return <group>{points.map((p, i) => <mesh key={i} position={p}>
    <sphereGeometry args={[0.035 + (i % 3) * 0.01, 8, 8]} />
    <meshStandardMaterial color="#D7C6A6" emissive="#B78649" emissiveIntensity={0.18} roughness={0.7} />
  </mesh>)}</group>
}

function Scene() {
  return <>
    <ambientLight intensity={0.7} />
    <directionalLight position={[4, 5, 5]} intensity={2.5} />
    <directionalLight position={[-4, -1, 3]} intensity={1.1} color="#D4AE70" />
    <Float speed={0.55} rotationIntensity={0.07} floatIntensity={0.1}>
      <group rotation={[0.34, -0.2, 0]}>
        <Layer y={-0.44} scale={1.02} color={LAYER_COLORS[0]} seed={1} />
        <InterlayerParticles y={-0.31} />
        <Layer y={-0.22} scale={0.98} color={LAYER_COLORS[1]} seed={2} />
        <InterlayerParticles y={-0.09} />
        <Layer y={0.01} scale={1.04} color={LAYER_COLORS[2]} seed={3} />
        <InterlayerParticles y={0.15} />
        <Layer y={0.27} scale={0.97} color={LAYER_COLORS[3]} seed={4} />
        <Layer y={0.48} scale={1.00} color={LAYER_COLORS[4]} seed={5} />
        <Layer y={0.67} scale={0.93} color={LAYER_COLORS[5]} seed={6} />
      </group>
    </Float>
    <OrbitControls enablePan={false} minDistance={4.1} maxDistance={7.2} autoRotate autoRotateSpeed={0.3} />
  </>
}

export default function VermiculiteExplainer() {
  return <div className="three-explainer" aria-label="Interactive three-dimensional model based on vermiculite's natural layered flake morphology">
    <Canvas fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} dpr={[1, 1.5]} camera={{ position: [0, 0.2, 5.6], fov: 34 }} gl={{ antialias: true, powerPreference: 'default' }}>
      <Scene />
    </Canvas>
    <div className="three-caption"><span>NATURAL MORPHOLOGY STUDY</span><b>Irregular layered flakes · interlayer water</b><small>Drag to inspect</small></div>
  </div>
}
