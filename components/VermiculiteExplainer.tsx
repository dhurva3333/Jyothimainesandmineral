'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'

const LAYER_COLORS = ['#4A3424', '#6B4A2E', '#8A6238', '#A77A43', '#C39A5C', '#B9874B']

function makeLayer(seed: number) {
  const shape = new THREE.Shape()
  const points = 11
  for (let i = 0; i < points; i += 1) {
    const a = (i / points) * Math.PI * 2
    const wobble = 0.84 + (((seed * 17 + i * 7) % 23) / 23) * 0.3
    const r = 0.88 * wobble
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * (0.48 + ((seed + i) % 2) * 0.08)
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  const geometry = new THREE.ExtrudeGeometry(shape, { depth: 0.055, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.018, bevelThickness: 0.01 })
  geometry.center()
  return geometry
}

function Scene() {
  const group = useRef<THREE.Group>(null)
  const layers = useMemo(() => LAYER_COLORS.map((color, index) => ({ color, geometry: makeLayer(index + 1), y: -0.38 + index * 0.22, scale: 1 - index * 0.015 })), [])
  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y += 0.0011
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.018
  })
  return <><ambientLight intensity={0.75} /><directionalLight position={[4, 5, 5]} intensity={2.5} /><directionalLight position={[-4, -1, 3]} intensity={1.1} color="#D4AE70" /><group ref={group} rotation={[0.34, -0.2, 0]}>{layers.map((layer) => <mesh key={layer.y} geometry={layer.geometry} position={[0, layer.y, 0]} scale={layer.scale}><meshStandardMaterial color={layer.color} roughness={0.94} metalness={0.04} /></mesh>)}</group></>
}

function useNearViewport(ref: RefObject<HTMLDivElement | null>) {
  const [near, setNear] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true)
        observer.disconnect()
      }
    }, { rootMargin: '400px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
  return near
}

export default function VermiculiteExplainer() {
  const root = useRef<HTMLDivElement>(null)
  const near = useNearViewport(root)
  return <div ref={root} className="three-explainer" aria-label="Interactive three-dimensional model based on vermiculite's natural layered flake morphology">{near ? <Canvas fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} dpr={[1, 1.25]} camera={{ position: [0, 0.2, 5.6], fov: 34 }} gl={{ antialias: true, powerPreference: 'high-performance' }}><Scene /></Canvas> : <div className="three-fallback three-loading">Material explanation loading…</div>}<div className="three-caption"><span>NATURAL MORPHOLOGY STUDY</span><b>Layered flakes · interlayer structure</b><small>Interactive 3D explanation</small></div></div>
}
