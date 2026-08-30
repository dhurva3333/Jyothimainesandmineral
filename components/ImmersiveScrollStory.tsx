'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState, type RefObject } from 'react'
import * as THREE from 'three'

const chapters = [
  { eyebrow: '01 / MATERIAL', title: 'Vermiculite is a layered mineral.', text: 'Its natural laminar structure is the visual signature of the material. The scene stays close to the real flaky character instead of turning the mineral into a generic blob.' },
  { eyebrow: '02 / STRUCTURE', title: 'Layers create volume and space.', text: 'Scroll changes the camera relationship and gently separates the layers, giving a physical sense of thickness, openness and expanded form.' },
  { eyebrow: '03 / MATERIAL BEHAVIOUR', title: 'Structure becomes useful.', text: 'The visual story then moves back to the practical properties that matter to horticultural and industrial buyers.' },
]

const palette = ['#66513c', '#806346', '#9b7952', '#b18b60', '#c5a678', '#8d6b49']

function flakeShape(seed: number) {
  const shape = new THREE.Shape()
  const points = 8
  for (let j = 0; j < points; j += 1) {
    const a = (j / points) * Math.PI * 2
    const wobble = 1 + ((((seed * 13 + j * 7) % 11) / 11) - 0.5) * 0.22
    const r = (0.55 + ((seed + j) % 5) * 0.09) * wobble
    const x = Math.cos(a) * r
    const y = Math.sin(a) * r * (0.58 + ((seed + j) % 3) * 0.07)
    if (j === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  return shape
}

function LayeredFlake({ seed, spread, reducedMotion }: { seed: number; spread: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null)
  const angle = seed * 2.399
  const base = 0.72 + (seed % 5) * 0.11

  useFrame((state) => {
    if (!ref.current || reducedMotion) return
    const t = state.clock.elapsedTime
    ref.current.rotation.z = Math.sin(t * 0.22 + seed) * 0.028
    ref.current.rotation.y += 0.00055
  })

  return (
    <group
      ref={ref}
      position={[Math.cos(angle) * (base + spread), ((seed % 5) - 2) * 0.07, Math.sin(angle) * (base + spread)]}
      rotation={[0.18 + (seed % 4) * 0.07, angle * 0.18, seed * 0.12]}
      scale={0.72 + (seed % 4) * 0.07}
    >
      {Array.from({ length: 4 }, (_, layer) => {
        const depth = layer * 0.07
        const lean = (layer - 1.5) * 0.055
        return (
          <mesh key={layer} position={[lean, depth * 0.42, depth]} rotation={[0, 0, layer * 0.012]}>
            <extrudeGeometry args={[flakeShape(seed + layer * 31), { depth: 0.035, bevelEnabled: true, bevelSegments: 1, bevelSize: 0.014, bevelThickness: 0.01, curveSegments: 3 }]} />
            <meshStandardMaterial color={palette[(seed + layer) % palette.length]} roughness={0.86} metalness={0.01} />
          </mesh>
        )
      })}
    </group>
  )
}

function MaterialWorld({ progress, reducedMotion }: { progress: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null)

  useFrame(() => {
    if (!ref.current || reducedMotion) return
    const targetY = progress * Math.PI * 0.68
    const targetX = 0.1 + progress * 0.18
    ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.045
    ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.035
    const scale = 0.96 + progress * 0.12
    ref.current.scale.lerp(new THREE.Vector3(scale, scale * 0.94, scale), 0.035)
  })

  const spread = THREE.MathUtils.smoothstep(progress, 0.18, 0.72) * 1.28
  return <group ref={ref}>{Array.from({ length: 10 }, (_, i) => <LayeredFlake key={i} seed={i} spread={spread} reducedMotion={reducedMotion} />)}</group>
}

function useNearViewport(ref: RefObject<HTMLElement | null>) {
  const [near, setNear] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNear(true)
        observer.disconnect()
      }
    }, { rootMargin: '500px 0px' })
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])
  return near
}

export default function ImmersiveScrollStory() {
  const section = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const near = useNearViewport(section)

  useEffect(() => {
    setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    const el = section.current
    if (!el) return
    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const travel = Math.max(el.offsetHeight - window.innerHeight, 1)
      const value = THREE.MathUtils.clamp(-rect.top / travel, 0, 1)
      setProgress(value)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const active = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2

  return (
    <section ref={section} className="immersive-story" aria-label="Interactive vermiculite material story">
      <div className="immersive-sticky">
        <div className="immersive-canvas">
          {near ? (
            <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0.15, 4.9], fov: 36 }} gl={{ antialias: true, powerPreference: 'high-performance', alpha: false }} frameloop="always" fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} onCreated={({ gl }) => { gl.toneMapping = THREE.ACESFilmicToneMapping; gl.toneMappingExposure = 1.05 }}>
              <color attach="background" args={['#17120e']} />
              <ambientLight intensity={1.1} />
              <directionalLight position={[4, 5, 5]} intensity={2.8} />
              <directionalLight position={[-4, 2, 2]} intensity={1.3} />
              <MaterialWorld progress={progress} reducedMotion={reducedMotion} />
            </Canvas>
          ) : <div className="three-fallback three-loading">Material scene loading…</div>}
          <div className="immersive-vignette" />
          <div className="immersive-scroll-label">SCROLL TO EXPLORE <span>↓</span></div>
        </div>
        <div className="immersive-copy">
          {chapters.map((chapter, index) => <article key={chapter.eyebrow} className={`immersive-chapter ${active === index ? 'is-active' : ''}`}><p>{chapter.eyebrow}</p><h2>{chapter.title}</h2><span>{chapter.text}</span></article>)}
        </div>
        <div className="immersive-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
      </div>
    </section>
  )
}
