'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)

const chapters=[
  {id:'material',eyebrow:'01 / MATERIAL',title:'Vermiculite is a layered mineral.',text:'Its natural laminar structure is the visual signature of the material. Here the camera stays close enough to reveal the stacked, flaky character rather than showing a generic sphere.'},
  {id:'structure',eyebrow:'02 / STRUCTURE',title:'Layers create volume and space.',text:'Scroll separates the layers and changes the camera angle, giving a physical sense of thickness, porosity and expanded form.'},
  {id:'utility',eyebrow:'03 / MATERIAL BEHAVIOUR',title:'Structure becomes useful.',text:'The experience then moves from mineral-scale detail toward the properties that matter to horticultural and industrial buyers.'}
]

const palette=['#66513c','#806346','#9b7952','#b18b60','#c5a678','#8d6b49']

function flakeShape(seed:number){
  const s=new THREE.Shape();
  const points=8;
  for(let j=0;j<points;j++){
    const a=(j/points)*Math.PI*2;
    const wobble=1+(((seed*13+j*7)%11)/11-.5)*.22;
    const r=(.55+((seed+j)%5)*.09)*wobble;
    const x=Math.cos(a)*r;
    const y=Math.sin(a)*r*(.58+((seed+j)%3)*.07);
    j===0?s.moveTo(x,y):s.lineTo(x,y)
  }
  s.closePath();
  return s
}

function LayeredFlake({seed,spread}:{seed:number;spread:number}){
  const ref=useRef<THREE.Group>(null)
  const base=0.8+(seed%7)*0.11
  const angle=seed*2.399
  useFrame((state)=>{
    if(!ref.current)return
    const t=state.clock.elapsedTime
    ref.current.rotation.z=Math.sin(t*.18+seed)*.035
    ref.current.rotation.y+=.0008
    ref.current.position.y=Math.sin(t*.25+seed)*.018
  })
  return <group ref={ref} position={[Math.cos(angle)*(base+spread),((seed%5)-2)*.08,Math.sin(angle)*(base+spread)]} rotation={[.2+(seed%4)*.08,angle*.18,seed*.12]} scale={.72+(seed%4)*.08}>
    {Array.from({length:7},(_,layer)=>{
      const depth=layer*.055
      const lean=(layer-3)*.045
      return <mesh key={layer} position={[lean,depth*.45,depth]} rotation={[0,0,layer*.012]}>
        <extrudeGeometry args={[flakeShape(seed+layer*31),{depth:.035,bevelEnabled:true,bevelSegments:2,bevelSize:.018,bevelThickness:.012,curveSegments:3}]}/>
        <meshStandardMaterial color={palette[(seed+layer)%palette.length]} roughness={.82} metalness={.02}/>
      </mesh>
    })}
  </group>
}

function MaterialWorld({progress}:{progress:number}){
  const group=useRef<THREE.Group>(null)
  useFrame(()=>{
    if(!group.current)return
    const targetY=progress*Math.PI*.85
    const targetX=.12+progress*.22
    group.current.rotation.y+=(targetY-group.current.rotation.y)*.055
    group.current.rotation.x+=(targetX-group.current.rotation.x)*.045
    const scale=1.02+progress*.18
    group.current.scale.lerp(new THREE.Vector3(scale,scale*.92,scale),.045)
  })
  const spread=THREE.MathUtils.smoothstep(progress,.2,.72)*1.65
  return <group ref={group}>{Array.from({length:24},(_,i)=><LayeredFlake key={i} seed={i} spread={spread}/>)}</group>
}

export default function ImmersiveScrollStory(){
  const section=useRef<HTMLElement>(null)
  const [progress,setProgress]=useState(0)
  const last=useRef(-1)

  useLayoutEffect(()=>{
    const el=section.current
    if(!el)return
    const ctx=gsap.context(()=>{
      const proxy={value:0}
      gsap.to(proxy,{value:1,ease:'none',scrollTrigger:{trigger:el,start:'top top',end:'+=260%',pin:true,scrub:1.15,anticipatePin:1,invalidateOnRefresh:true,onUpdate:(self)=>{const p=Number(self.progress.toFixed(4));if(Math.abs(p-last.current)>.002){last.current=p;setProgress(p)}}}})
    },el)
    const refresh=()=>ScrollTrigger.refresh()
    const timer=window.setTimeout(refresh,250)
    window.addEventListener('load',refresh)
    return()=>{window.clearTimeout(timer);window.removeEventListener('load',refresh);ctx.revert()}
  },[])

  const active=progress<.34?0:progress<.68?1:2
  return <section ref={section} className="immersive-story" aria-label="Interactive vermiculite material story">
    <div className="immersive-canvas">
      <Canvas dpr={[1,2]} camera={{position:[0,.15,4.9],fov:36}} gl={{antialias:true,powerPreference:'high-performance',alpha:false}} onCreated={({gl})=>{gl.toneMapping=THREE.ACESFilmicToneMapping;gl.toneMappingExposure=1.08}}>
        <color attach="background" args={['#16110d']}/>
        <ambientLight intensity={1.05}/><directionalLight position={[4,5,5]} intensity={3.4}/><directionalLight position={[-4,2,2]} intensity={1.8}/>
        <Environment preset="studio" />
        <Float speed={.45} rotationIntensity={.04} floatIntensity={.08}><MaterialWorld progress={progress}/></Float>
      </Canvas>
      <div className="immersive-vignette"/>
      <div className="immersive-scroll-label">SCROLL TO EXPLORE <span>↓</span></div>
    </div>
    <div className="immersive-copy">{chapters.map((c,i)=><article key={c.id} className={`immersive-chapter ${active===i?'is-active':''}`}><p>{c.eyebrow}</p><h2>{c.title}</h2><span>{c.text}</span></article>)}</div>
    <div className="immersive-progress"><span style={{transform:`scaleX(${progress})`}}/></div>
  </section>
}
