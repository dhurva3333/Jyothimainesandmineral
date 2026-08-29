'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useMemo, useState } from 'react'
import * as THREE from 'three'
import { applicationDetails } from '../lib/applicationData'

const SIZES = [
  { id: 'fine', label: 'Fine', range: '≈ 0.5–1 mm', note: 'Smaller particles; often considered for propagation, fine blends and selected formulations.' },
  { id: 'medium', label: 'Medium', range: 'Confirm PSD', note: 'A middle particle distribution where the application needs a balance of structure, handling and porosity.' },
  { id: 'coarse', label: 'Coarse', range: '≈ 4–7 mm', note: 'Larger particles; often considered for loose-fill, larger media blends and selected protective uses.' },
]

function SizeScene({ size }: { size: number }) {
  const count = size === 0 ? 18 : size === 1 ? 15 : 12
  return <>
    <ambientLight intensity={1.1} />
    <directionalLight position={[4, 5, 4]} intensity={2.6} />
    <directionalLight position={[-4, 1, 2]} intensity={1.1} />
    <Float speed={0.55} rotationIntensity={0.18} floatIntensity={0.15}>
      <group>
        {Array.from({ length: count }, (_, i) => {
          const a = (i / count) * Math.PI * 2
          const r = 0.45 + (i % 4) * 0.19
          const s = size === 0 ? 0.25 + (i % 5) * 0.035 : size === 1 ? 0.34 + (i % 4) * 0.045 : 0.46 + (i % 3) * 0.06
          return <mesh key={i} position={[Math.cos(a) * r, Math.sin(i * 1.7) * 0.3, Math.sin(a) * r]} rotation={[0.2 + i * 0.09, a, i * 0.3]} scale={[s, 0.045 + size * 0.012, s * 0.58]}>
            <sphereGeometry args={[0.72, 16, 8]} />
            <meshStandardMaterial color={['#765034', '#A8783F', '#C39A59'][size]} roughness={0.9} metalness={0.03} />
          </mesh>
        })}
      </group>
    </Float>
    <OrbitControls enablePan={false} minDistance={3.1} maxDistance={6} autoRotate autoRotateSpeed={0.25} />
  </>
}

export default function SizeExplorer() {
  const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null
  const initialApp = params?.get('application') || ''
  const [sizeIndex, setSizeIndex] = useState(0)
  const [appId, setAppId] = useState(initialApp)
  const [plantUse, setPlantUse] = useState('')
  const size = SIZES[sizeIndex]
  const app = applicationDetails.find((item) => item.id === appId)
  const message = `Hello Jyothi Mines & Minerals, I need vermiculite for ${app?.title || 'my application'}. I am considering ${size.label} (${size.range})${plantUse ? ` for ${plantUse}` : ''}. Please confirm the suitable available particle size, grade, specification, packaging, availability and quotation.`
  const whatsapp = `https://wa.me/919963639482?text=${encodeURIComponent(message)}`
  const horticulture = appId === 'horticulture'
  const plantGuidance = useMemo(() => ({
    'seed-germination': 'Fine material is generally the starting point for seed trays and seed covering. Confirm the required PSD for the crop and growing system.',
    'seedlings': 'Fine to medium material may be considered depending on cell size and the rest of the growing-media blend.',
    'cuttings': 'Fine to medium material may be considered for rooting systems; the complete propagation mix determines the final choice.',
    'containers': 'Medium to coarse material may be considered when a larger growing-media structure and aeration are desired.',
  } as Record<string, string>), [])

  return <section className="size-explorer">
    <div className="size-stage">
      <Canvas dpr={[1, 1.35]} camera={{ position: [0, 0.15, 4.5], fov: 35 }} gl={{ antialias: true, powerPreference: 'default' }}>
        <SizeScene size={sizeIndex} />
      </Canvas>
      <div className="size-stage-copy"><span>INTERACTIVE MATERIAL STUDY</span><strong>{size.label}</strong><small>{size.range} · drag to inspect</small></div>
    </div>
    <div className="size-panel">
      <p className="kicker">ONE SIZE & ENQUIRY PAGE</p>
      <h2>Choose the<br /><em>material</em>.</h2>
      <p className="size-intro">Explore all size directions here. Select a size to inspect it in 3D, then enquire with the exact context you need.</p>
      <label className="size-field">APPLICATION<select value={appId} onChange={(e) => setAppId(e.target.value)}><option value="">Select application</option>{applicationDetails.map((item) => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
      {horticulture && <label className="size-field">PLANT / GROWING USE<select value={plantUse} onChange={(e) => setPlantUse(e.target.value)}><option value="">Select growing use</option><option value="seed-germination">Seed germination / seed covering</option><option value="seedlings">Seedlings / small-cell propagation</option><option value="cuttings">Rooting cuttings / propagation</option><option value="containers">Containers / larger growing-media blends</option></select></label>}
      <div className="size-tabs">{SIZES.map((item, i) => <button key={item.id} type="button" className={i === sizeIndex ? 'is-active' : ''} onClick={() => setSizeIndex(i)}><span>{String(i + 1).padStart(2, '0')}</span><b>{item.label}</b><small>{item.range}</small></button>)}</div>
      <div className="size-detail"><span>SELECTED DIRECTION</span><h3>{size.range}</h3><p>{plantUse ? plantGuidance[plantUse] : size.note}</p></div>
      <div className="size-actions"><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire this size ↗</a><a className="button button-outline" href="#all-sizes">Compare sizes ↓</a></div>
      <p className="size-disclaimer">The range shown is a project reference, not a verified live catalogue. Jyothi should confirm the exact particle-size distribution, grade and availability before ordering.</p>
    </div>
    <div className="size-all" id="all-sizes"><div><p className="kicker">ALL SIZE DIRECTIONS</p><h3>One place to compare.</h3></div><div className="size-all-grid">{SIZES.map((item, i) => <button key={item.id} type="button" onClick={() => { setSizeIndex(i); document.querySelector('.size-explorer')?.scrollIntoView({ behavior: 'smooth' }) }}><span>0{i + 1}</span><strong>{item.label}</strong><b>{item.range}</b><small>{item.note}</small><i>Inspect in 3D ↗</i></button>)}</div></div>
  </section>
}
