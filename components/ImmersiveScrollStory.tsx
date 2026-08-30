'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const chapters = [
  { id: 'material', eyebrow: '01 / MATERIAL', title: 'A mineral built in layers.', text: 'Vermiculite has a distinctive laminar structure. Scroll to move through the material story.' },
  { id: 'structure', eyebrow: '02 / STRUCTURE', title: 'Layers become space.', text: 'The visual language shifts from compact sheets to separated, book-like exfoliated layers.' },
  { id: 'applications', eyebrow: '03 / APPLICATIONS', title: 'Structure creates utility.', text: 'From horticulture to selected industrial applications, the material is evaluated by the job it needs to perform.' },
]

function Flake({ i, expanded }: { i: number; expanded: number }) {
  const ref = useRef<THREE.Mesh>(null)
  const a = i * 2.399
  const base = .5 + (i % 9) * .16
  const spread = expanded * (0.4 + (i % 5) * .13)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.z += Math.sin(state.clock.elapsedTime * .4 + i) * .0008
    ref.current.position.y += Math.sin(state.clock.elapsedTime * .55 + i) * .00015
  })
  return <mesh ref={ref} position={[Math.cos(a) * (base + spread), Math.sin(a * 1.7) * (.35 + expanded * .12), Math.sin(a) * (base + spread)]} rotation={[a * .27, a, i * .19]} scale={[.42 + (i % 3) * .1, .055 + (i % 2) * .018, .23 + (i % 4) * .04]}><sphereGeometry args={[1, 10, 6]} /><meshStandardMaterial color={['#65452d','#855b35','#a57440','#c49a58','#8e6846'][i % 5]} roughness={.94} metalness={.015} /></mesh>
}

function MaterialWorld({ progress }: { progress: number }) {
  const group = useRef<THREE.Group>(null)
  const expanded = THREE.MathUtils.smoothstep(progress, .18, .72) * 1.8
  const targetRotation = progress * Math.PI * .65
  useFrame(() => {
    if (!group.current) return
    group.current.rotation.y += (targetRotation - group.current.rotation.y) * .045
    group.current.rotation.x += (progress * .18 - group.current.rotation.x) * .04
    const s = 1 + progress * .18
    group.current.scale.lerp(new THREE.Vector3(s, 1 + progress * .08, s), .04)
  })
  return <group ref={group}>{Array.from({ length: 52 }, (_, i) => <Flake key={i} i={i} expanded={expanded} />)}</group>
}

export default function ImmersiveScrollStory() {
  const [progress, setProgress] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const update = () => { const el = ref.current; if (!el) return; const rect = el.getBoundingClientRect(); const travel = Math.max(1, rect.height - window.innerHeight); setProgress(THREE.MathUtils.clamp(-rect.top / travel, 0, 1)) }
    update(); window.addEventListener('scroll', update, { passive: true }); window.addEventListener('resize', update)
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])
  const active = progress < .34 ? 0 : progress < .68 ? 1 : 2
  return <section ref={ref} className="immersive-story" aria-label="Interactive vermiculite material story">
    <div className="immersive-canvas"><Canvas dpr={[1, 1.5]} camera={{ position: [0, .15, 4.7], fov: 38 }} gl={{ antialias: true, powerPreference: 'high-performance' }}><color attach="background" args={['#17130f']} /><ambientLight intensity={1.3} /><directionalLight position={[4, 5, 4]} intensity={3} /><directionalLight position={[-4, 2, 1]} intensity={1.2} /><Environment preset="studio" /><Float speed={.7} rotationIntensity={.08} floatIntensity={.15}><MaterialWorld progress={progress} /></Float><OrbitControls enableZoom={false} enablePan={false} autoRotate={false} /></Canvas><div className="immersive-vignette" /></div>
    <div className="immersive-copy">{chapters.map((chapter, i) => <article key={chapter.id} className={`immersive-chapter ${active === i ? 'is-active' : ''}`}><p>{chapter.eyebrow}</p><h2>{chapter.title}</h2><span>{chapter.text}</span></article>)}</div>
    <div className="immersive-progress"><span style={{ transform: `scaleX(${progress})` }} /></div>
  </section>
}
