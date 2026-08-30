'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import Link from 'next/link'
import type { ApplicationDetail } from '../lib/applicationData'

const COLORS=['#6a5038','#876746','#a47d50','#c09a67','#d1b584']

function flakeShape(seed:number){
  const s=new THREE.Shape(); const n=8
  for(let j=0;j<n;j++){const a=j/n*Math.PI*2;const r=(.48+((seed+j)%5)*.08)*(1+Math.sin(seed+j)*.05);const x=Math.cos(a)*r;const y=Math.sin(a)*r*.58;j?s.lineTo(x,y):s.moveTo(x,y)}
  s.closePath(); return s
}

function RealFlake({index,scale=1}:{index:number;scale?:number}){
  const group=useRef<THREE.Group>(null); const a=index*2.399
  useFrame((state)=>{if(!group.current)return;group.current.rotation.z=Math.sin(state.clock.elapsedTime*.3+index)*.035;group.current.rotation.y+=.0012})
  return <group ref={group} scale={scale} position={[Math.cos(a)*(.35+(index%4)*.18),Math.sin(index*1.7)*.28,Math.sin(a)*(.35+(index%4)*.18)]} rotation={[.3,index*.2,index*.13]}>
    {Array.from({length:6},(_,layer)=><mesh key={layer} position={[(layer-2.5)*.045,layer*.035,layer*.018]} rotation={[0,0,layer*.014]}>
      <extrudeGeometry args={[flakeShape(index+layer*17),{depth:.032,bevelEnabled:true,bevelSegments:2,bevelSize:.015,bevelThickness:.01,curveSegments:3}]}/>
      <meshStandardMaterial color={COLORS[(index+layer)%COLORS.length]} roughness={.84}/>
    </mesh>)}
  </group>
}

function HorticultureScene(){return <group>{Array.from({length:13},(_,i)=><RealFlake key={i} index={i} scale={.42}/>) }<mesh position={[0,-.75,0]} rotation={[-Math.PI/2,0,0]}><cylinderGeometry args={[1.3,1.05,.16,64]}/><meshStandardMaterial color="#493b2d" roughness={1}/></mesh>{Array.from({length:8},(_,i)=><mesh key={`r${i}`} position={[(i-3.5)*.18,-.18,Math.sin(i)*.18]} rotation={[0,(i-4)*.16,.15]}><cylinderGeometry args={[.012,.025,.85,8]}/><meshStandardMaterial color="#8b6b4d"/></mesh>)}</group>}

function ConstructionScene(){return <group>{Array.from({length:9},(_,i)=><RealFlake key={i} index={i} scale={.34}/>)}<mesh position={[0,0,0]} scale={[1.35,.42,.9]}><boxGeometry args={[1,1,1]}/><meshStandardMaterial color="#a99782" roughness={.88}/></mesh>{[-.65,0,.65].map((x)=><mesh key={x} position={[x,.48,0]} rotation={[0,0,.12]}><boxGeometry args={[.48,.035,1.5]}/><meshStandardMaterial color="#d2c1a9" roughness={.9}/></mesh>)}</group>}

function PanelScene(){return <group>{Array.from({length:11},(_,i)=><RealFlake key={i} index={i} scale={.28}/>) }{[-.72,0,.72].map((x)=><mesh key={x} position={[x,0,0]}><boxGeometry args={[.55,1.35,.09]}/><meshStandardMaterial color="#9f8669" roughness={.78}/></mesh>)}</group>}

function FrictionScene(){return <group>{Array.from({length:18},(_,i)=><RealFlake key={i} index={i} scale={.18}/>) }<mesh rotation={[Math.PI/2,0,0]} position={[0,0,0]}><torusGeometry args={[1.05,.28,24,64]}/><meshStandardMaterial color="#282522" roughness={.68}/></mesh><mesh position={[0,.02,0]}><cylinderGeometry args={[.66,.66,.18,64]}/><meshStandardMaterial color="#403a33" roughness={.72}/></mesh></group>}

function ApplicationWorld({index}:{index:number}){
  const ref=useRef<THREE.Group>(null)
  useFrame((state)=>{if(!ref.current)return;ref.current.rotation.y+=(state.clock.elapsedTime*.06+index*.18-ref.current.rotation.y)*.025;ref.current.rotation.x+=(Math.sin(state.clock.elapsedTime*.25)*.04-ref.current.rotation.x)*.04})
  const scene=index===0?<HorticultureScene/>:index===2?<ConstructionScene/>:index===3||index===4||index===6?<PanelScene/>:index===5?<FrictionScene/>:<group>{Array.from({length:18},(_,i)=><RealFlake key={i} index={i} scale={.26}/>)}</group>
  return <group ref={ref}><Float speed={.45} rotationIntensity={.06} floatIntensity={.08}>{scene}</Float></group>
}

export default function ApplicationShowcase({applications}:{applications:ApplicationDetail[]}){
  const [active,setActive]=useState(0); const app=applications[active]
  return <div className="application-showcase">
    <div className="application-stage">
      <Canvas fallback={<div className="three-fallback">3D preview is unavailable on this device.</div>} dpr={[1,1.8]} camera={{position:[0,.15,4.4],fov:34}} gl={{antialias:true,powerPreference:'high-performance'}} onCreated={({gl})=>{gl.toneMapping=THREE.ACESFilmicToneMapping;gl.toneMappingExposure=1.05}}>
        <color attach="background" args={['#15100c']}/><ambientLight intensity={1.05}/><directionalLight position={[4,5,5]} intensity={3.2}/><directionalLight position={[-4,2,1]} intensity={1.5}/><ApplicationWorld index={active}/><OrbitControls enableZoom={false} enablePan={false} autoRotate={false}/>
      </Canvas>
      <div className="application-stage-label"><span>{String(active+1).padStart(2,'0')}</span><b>{app.eyebrow}</b><strong>{app.title}</strong><small>Interactive material environment · drag to inspect</small></div>
    </div>
    <div className="application-list">{applications.map((item,index)=><article className={`application-card ${index===active?'is-active':''}`} key={item.id} onMouseEnter={()=>setActive(index)}>
      <button className="application-select" type="button" onClick={()=>setActive(index)} aria-label={`Show ${item.title} in 3D`}><span>{String(index+1).padStart(2,'0')}</span><b>{item.title}</b><i>↗</i></button>
      <p>{item.short}</p>
      <div className="application-card-actions"><Link className="button primary" href={`/applications/${item.id}`}>Full explanation</Link><Link className="button ghost" href={`/sizes?application=${item.id}`}>Sizes & enquire</Link></div>
    </article>)}</div>
  </div>
}