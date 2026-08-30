'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

// Vermiculite is naturally platy and irregular, not spherical. The palette
// reflects documented raw vermiculite colors from dark brown through gold.
const VERMICULITE_COLORS = ['#403126', '#5A402B', '#765534', '#947047', '#AF8551', '#C19B63', '#D0B47E']

function makeFlakeShape(seed: number) {
  const shape = new THREE.Shape()
  const points = 12
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2
    const wobble = 0.78 + (((seed * 19 + i * 11) % 29) / 29) * 0.44
    const radius = 0.72 * wobble
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius * (0.42 + ((seed + i) % 3) * 0.08)
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

function Flake({ i }: { i: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const angle = (i / 18) * Math.PI * 2
  const radius = 0.18 + (i % 5) * 0.24
  const scale = 0.48 + (i % 4) * 0.12
  const geometry = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(makeFlakeShape(i + 1), {
      depth: 0.045 + (i % 3) * 0.016,
      bevelEnabled: true,
      bevelSegments: 2,
      bevelSize: 0.022,
      bevelThickness: 0.014,
      curveSegments: 2,
    })
    g.center()
    return g
  }, [i])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z += 0.0011 + (i % 3) * 0.00025
    ref.current.rotation.x += 0.00025
    ref.current.position.y += Math.sin(state.clock.elapsedTime * 0.42 + i) * 0.0005
  })

  return <mesh
    ref={ref}
    geometry={geometry}
    position={[Math.cos(angle) * radius, Math.sin(i * 1.91) * 0.34, Math.sin(angle) * radius]}
    rotation={[0.18 + i * 0.11, angle * 0.7, i * 0.37]}
    scale={scale}
  >
    <meshStandardMaterial color={VERMICULITE_COLORS[i % VERMICULITE_COLORS.length]} roughness={0.93} metalness={0.055} />
  </mesh>
}

function Scene() {
  return <>
    <ambientLight intensity={0.7} />
    <directionalLight position={[4, 6, 5]} intensity={2.8} />
    <directionalLight position={[-4, 1, 3]} intensity={1.2} color="#D4AE70" />
    <pointLight position={[0, 2, 3]} intensity={0.65} color="#E1C18A" />
    <Float speed={0.55} rotationIntensity={0.11} floatIntensity={0.14}>
      <group rotation={[0.22, -0.28, 0]}>
        {Array.from({ length: 18 }, (_, i) => <Flake key={i} i={i} />)}
      </group>
    </Float>
    <OrbitControls enablePan={false} minDistance={3.1} maxDistance={6.5} autoRotate autoRotateSpeed={0.24} />
  </>
}

export default function HeroMaterial() {
  return <div className="hero-scene" aria-label="Interactive 3D visualization of natural vermiculite flakes">
    <Canvas fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} dpr={[1, 1.35]} camera={{ position: [0, 0.3, 4.4], fov: 34 }} gl={{ antialias: true, powerPreference: 'default' }}>
      <Scene />
    </Canvas>
    <div className="hero-art-label"><span>01</span><b>VERMICULITE<br />NATURAL FLAKE STUDY</b></div>
    <div className="hero-art-caption">DRAG · ROTATE · INSPECT</div>
  </div>
}
