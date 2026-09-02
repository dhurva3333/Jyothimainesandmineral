"use client";
import dynamic from "next/dynamic";
import type { ParticleGrade } from "@/types/domain";
const ParticleSizeVisualizer = dynamic(() => import("@/components/3d/particle-size-visualizer").then((m)=>m.ParticleSizeVisualizer), { ssr:false, loading:()=> <div className="aspect-square w-full animate-pulse rounded-sm bg-ink-soft" aria-hidden="true"/> });
export function ParticleSizeVisualizerLoader({ grade }: { grade: ParticleGrade }) { if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return <div className="flex aspect-square w-full items-center justify-center rounded-sm bg-ink text-sm text-text-dark-mute">{grade} grade — motion reduced</div>; return <ParticleSizeVisualizer grade={grade}/>; }
