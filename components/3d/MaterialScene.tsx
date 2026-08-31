"use client"
import dynamic from 'next/dynamic'
import { Suspense, useMemo } from 'react'
const Canvas=dynamic(()=>import('@react-three/fiber').then(m=>m.Canvas),{ssr:false})
const Float=dynamic(()=>import('@react-three/drei').then(m=>m.Float),{ssr:false})
const OrbitControls=dynamic(()=>import('@react-three/drei').then(m=>m.OrbitControls),{ssr:false})
function Flakes(){const flakes=useMemo(()=>Array.from({length:18},(_,i)=>({y:(i-9)*.13,x:Math.sin(i*1.7)*.15,z:Math.cos(i*1.2)*.12,r:(i%5-2)*.08,s:1-(i%4)*.08})),[]);return <group rotation={[.18,-.35,.05]}>{flakes.map((f,i)=><mesh key={i} position={[f.x,f.y,f.z]} rotation={[f.r,i*.12,f.r*2]} scale={[1.8*f.s,.12*f.s,1.1*f.s]}><icosahedronGeometry args={[.45,1]}/><meshStandardMaterial color="#a98a5a" roughness={.72} metalness={.08}/></mesh>)}</group>}
export function MaterialScene({label='Interactive material visualization'}:{label?:string}){return <div className="scene-shell" aria-label={label}><Suspense fallback={<div className="scene-fallback">Material visualization</div>}><Canvas camera={{position:[3.2,1.8,4.4],fov:38}} dpr={[1,1.5]}><ambientLight intensity={1.6}/><directionalLight position={[3,4,2]} intensity={3}/><Float speed={.8} rotationIntensity={.15} floatIntensity={.2}><Flakes/></Float><OrbitControls enablePan={false} minDistance={3.5} maxDistance={6} autoRotate autoRotateSpeed={.4}/></Canvas></Suspense></div>}
