"use client";
import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import type { ParticleGrade } from "@/types/domain";
const GRADE_COUNTS: Record<ParticleGrade, number> = { fine:60, medium:30, coarse:14 };
const GRADE_SIZE: Record<ParticleGrade, number> = { fine:0.06, medium:0.14, coarse:0.26 };
function FlakeField({ grade }: { grade: ParticleGrade }) { const count=GRADE_COUNTS[grade]; const size=GRADE_SIZE[grade]; const positions=useMemo(()=>Array.from({length:count},()=>[(Math.random()-0.5)*2.4,(Math.random()-0.5)*2.4,(Math.random()-0.5)*2.4] as const),[count]); return <group>{positions.map((p,i)=><mesh key={i} position={p} rotation={[Math.random(),Math.random(),Math.random()]}><boxGeometry args={[size,size*0.25,size]}/><meshStandardMaterial color="#C9A05C" roughness={0.5} metalness={0.15}/></mesh>)}</group>; }
export function ParticleSizeVisualizer({ grade }: { grade: ParticleGrade }) { return <div className="aspect-square w-full overflow-hidden rounded-sm bg-ink" role="img" aria-label={`3D visualization of ${grade} grade vermiculite particle density`}><Canvas camera={{position:[0,0,3.2],fov:45}} dpr={[1,1.5]}><ambientLight intensity={0.6}/><directionalLight position={[3,3,3]} intensity={1.1}/><Suspense fallback={null}><FlakeField grade={grade}/></Suspense><OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2}/></Canvas></div>; }
