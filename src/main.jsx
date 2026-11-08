import React,{Suspense,useEffect,useRef,useState}from'react';
import{createRoot}from'react-dom/client';
import{Canvas}from'@react-three/fiber';
import{Float,Sparkles,ContactShadows}from'@react-three/drei';
import{motion as motion3d}from'framer-motion-3d';
import{AnimatePresence,motion}from'framer-motion';
import{ArrowRight,ArrowLeft,Heart,Expand,Volume2,VolumeX,Sparkles as SparkleIcon,RotateCcw}from'lucide-react';
import'./style.css';

const photos=[
 {src:'/Public/memories/file_000000005fe48208a306bbac5df9e54a.jpg',title:'A little garden moment',note:'A memory worth keeping'},
 {src:'/Public/memories/file_0000000015248208a7efb08a007dc5e2.jpg',title:'The group selfie',note:'A little chaos, a lot of smiles'},
 {src:'/Public/memories/file_000000001da88208bd819d69c2bd4e13.jpg',title:'A quiet moment',note:'The lovely in-between moments'},
 {src:'/Public/memories/file_00000000a86c82119c4afcac1bf9c6c0.jpg',title:'A sunny-day portrait',note:'A moment captured just right'},
 {src:'/Public/memories/file_000000008bf4820883b09966ad8f58ff.jpg',title:'One more for the album',note:'Because one photo is never enough'}
];
const ease=[.22,1,.36,1];
function startAmbientMusic(){
 const AudioCtx=window.AudioContext||window.webkitAudioContext;
 if(!AudioCtx)return null;
 const ctx=new AudioCtx();
 const master=ctx.createGain(); master.gain.value=.0001; master.connect(ctx.destination);
 const filter=ctx.createBiquadFilter(); filter.type='lowpass'; filter.frequency.value=720; filter.Q.value=.35; filter.connect(master);
 const notes=[146.83,220,293.66,369.99];
 const voices=notes.map((hz,i)=>{const o=ctx.createOscillator(),g=ctx.createGain();o.type=i===0?'triangle':'sine';o.frequency.value=hz;g.gain.value=[.15,.09,.055,.025][i];o.connect(g);g.connect(filter);o.start();return o;});
 const lfo=ctx.createOscillator(),depth=ctx.createGain();lfo.frequency.value=.09;depth.gain.value=260;lfo.connect(depth);depth.connect(filter.frequency);lfo.start();
 master.gain.setTargetAtTime(.075,ctx.currentTime,1.8);
 return {ctx,master,voices,lfo};
}
function stopAmbientMusic(audio){if(!audio)return;const {ctx,master,voices,lfo}=audio;master.gain.setTargetAtTime(.0001,ctx.currentTime,.35);setTimeout(()=>{voices.forEach(v=>v.stop());lfo.stop();ctx.close();},1500);}
function Wing({side='left',color='#e9b6d8',small=false}){
 return <motion3d.group position={[side==='left'?-.42:.42,small?-.3:.22,0]} animate={{rotateY:side==='left'?[0,.95,0]:[0,-.95,0],rotateZ:side==='left'?[.2,.42,.2]:[-.2,-.42,-.2]}} transition={{duration:.42,repeat:Infinity,repeatType:'mirror',ease:'easeInOut'}}>
  <mesh scale={small?[.34,.43,.07]:[.53,.67,.09]}><sphereGeometry args={[1,32,24]}/><meshPhysicalMaterial color={color} roughness={.28} metalness={.12} clearcoat={1} clearcoatRoughness={.15}/></mesh>
  <mesh position={[side==='left'?.08:-.08,-.42,.025]} scale={[.25,.31,.055]}><sphereGeometry args={[1,24,18]}/><meshPhysicalMaterial color={side==='left'?'#c9b7f4':'#f5c3cf'} roughness={.3} clearcoat={.8}/></mesh>
 </motion3d.group>
}
function ButterflyModel(){
 return <Float speed={1.25} rotationIntensity={.14} floatIntensity={.35}>
  <motion3d.group animate={{rotateY:[-.22,.22,-.22],rotateZ:[-.08,.08,-.08],y:[0,.14,0]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}}>
   <Wing side="left"/><Wing side="right"/>
   <Wing side="left" small/><Wing side="right" small/>
   <mesh position={[0,0,0.1]} scale={[.075,.56,.075]}><capsuleGeometry args={[.07,.65,8,16]}/><meshStandardMaterial color="#58436f" metalness={.3} roughness={.35}/></mesh>
   <mesh position={[-.055,.53,.1]} rotation={[0,0,-.25]}><cylinderGeometry args={[.012,.012,.35,8]}/><meshStandardMaterial color="#58436f"/></mesh>
   <mesh position={[.055,.53,.1]} rotation={[0,0,.25]}><cylinderGeometry args={[.012,.012,.35,8]}/><meshStandardMaterial color="#58436f"/></mesh>
  </motion3d.group>
 </Float>
}
function DreamScene(){
 return <div className="scene3d"><Canvas dpr={[1,1.5]} camera={{position:[0,0,5.2],fov:38}} gl={{alpha:true,antialias:true,powerPreference:'low-power'}}>
  <ambientLight intensity={1.1}/><directionalLight position={[3,4,5]} intensity={2.1} color="#fff0dc"/><pointLight position={[-3,-2,2]} intensity={1.6} color="#d8a6ff"/>
  <Suspense fallback={null}><ButterflyModel/><Float speed={.7} floatIntensity={.18}><mesh position={[1.35,-.8,-.8]} scale={.72}><icosahedronGeometry args={[1,2]}/><meshPhysicalMaterial color="#f3c8dc" roughness={.15} metalness={.12} transmission={.45} thickness={.7} clearcoat={1}/></mesh></Float><Sparkles count={46} scale={5.5} size={2.5} speed={.35} color="#fff0ce"/><ContactShadows position={[0,-1.55,0]} opacity={.22} scale={5} blur={2.5} far={4}/></Suspense>
 </Canvas></div>
}
function App(){
 const [screen,setScreen]=useState('intro'),[photoIndex,setPhotoIndex]=useState(0),[selected,setSelected]=useState(null),[wish,setWish]=useState(false),[sound,setSound]=useState(false);
 const audioRef=useRef(null);
 useEffect(()=>()=>stopAmbientMusic(audioRef.current),[]);
 const toggleMusic=()=>{if(sound){stopAmbientMusic(audioRef.current);audioRef.current=null;setSound(false);return;}try{audioRef.current=startAmbientMusic();if(audioRef.current){audioRef.current.ctx.resume();setSound(true);}}catch(e){console.error('Audio could not start',e);}};
 const nextPhoto=()=>{if(photoIndex<photos.length-1)setPhotoIndex(i=>i+1);else setScreen('album')};
 const openSurprise=()=>{setPhotoIndex(0);setScreen('reveal')};
 const closeModal=()=>setSelected(null);
 return <main className="birthday-app">
  <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
  <header className="topbar"><button className="wordmark" onClick={()=>{setScreen('intro');setPhotoIndex(0)}}>✦ a little universe</button><div className="top-right"><span>MADE FOR DHANUSHA</span><button className="quiet-icon" aria-label={sound?'Turn birthday music off':'Play soft birthday music'} title={sound?'Turn music off':'Play original ambient birthday music'} onClick={toggleMusic}>{sound?<Volume2 size={16}/>:<VolumeX size={16}/>}</button></div></header>
  <div className="tiny-progress"><i style={{width:screen==='intro'?'12%':screen==='reveal'?((photoIndex+1)/5*48+12)+'%':screen==='album'?'82%':'100%'}}/></div>
  <AnimatePresence mode="wait">
   {screen==='intro'&&<motion.section className="intro screen" key="intro" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20,scale:.98}} transition={{duration:.65,ease}}>
    <div className="intro-copy"><div className="eyebrow"><span/> A LITTLE SURPRISE, JUST FOR YOU</div><h1>Dhanusha<span className="name-comma">.</span></h1><p className="intro-line">Some people make ordinary days feel a little brighter.</p><p className="intro-small">Today, this little world is yours, Pilli. ♡</p><button className="cta" onClick={openSurprise}>Open your surprise <ArrowRight size={18}/></button><div className="hint">OPTIONAL ORIGINAL AMBIENT MUSIC · BEST EXPERIENCED FULL SCREEN</div></div>
    <DreamScene/><div className="orbit-label">a tiny universe <span>✦</span></div>
   </motion.section>}
   {screen==='reveal'&&<motion.section className="reveal screen" key="reveal" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-18}} transition={{duration:.5,ease}}>
    <div className="reveal-head"><div className="eyebrow"><span/> LITTLE MOMENTS, ONE BY ONE</div><div className="counter">0{photoIndex+1}<i>/</i>05</div></div>
    <div className="memory-stage">
     <div className="memory-glow"/>
     <AnimatePresence mode="wait"><motion.figure className="memory-photo" key={photos[photoIndex].src} initial={{opacity:0,scale:.82,rotate:photoIndex%2===0?-5:5,y:28}} animate={{opacity:1,scale:1,rotate:0,y:0}} exit={{opacity:0,scale:.9,rotate:photoIndex%2===0?4:-4,y:-24}} transition={{duration:.65,ease}}>
      <img src={photos[photoIndex].src} alt={photos[photoIndex].title} fetchPriority="high"/><figcaption><b>{photos[photoIndex].title}</b><span>{photos[photoIndex].note}</span></figcaption>
     </motion.figure></AnimatePresence>
     <div className="memory-side-note">A MEMORY<br/>TO KEEP <span>♡</span></div>
    </div>
    <div className="reveal-footer"><div className="photo-dots">{photos.map((p,i)=><i key={p.src} className={i<=photoIndex?'done':''}/>)}</div><button className="cta" onClick={nextPhoto}>{photoIndex===4?'Bring them together':'Next memory'} <ArrowRight size={18}/></button><button className="skip-link" onClick={()=>setScreen('album')}>See the album now</button></div>
   </motion.section>}
   {screen==='album'&&<motion.section className="album screen" key="album" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} transition={{duration:.55,ease}}>
    <div className="eyebrow"><span/> ALL THE LITTLE MOMENTS <span/></div><h2>Our little <em>album.</em></h2><p className="album-intro">Five moments. One lovely collection.</p>
    <div className="album-grid">{photos.map((p,i)=><motion.button className={'album-card album-card-'+i} key={p.src} onClick={()=>setSelected(i)} initial={{opacity:0,y:35,rotate:i%2?4:-4}} animate={{opacity:1,y:0,rotate:i%2?2:-2}} transition={{delay:i*.09,duration:.55,ease}} whileHover={{y:-9,rotate:0,scale:1.035}} whileTap={{scale:.97}}><img src={p.src} alt={p.title}/><span className="album-caption">{p.title}</span><span className="album-number">0{i+1}</span></motion.button>)}</div>
    <button className="cta album-cta" onClick={()=>setScreen('finale')}>A birthday wish for you <Heart size={17}/></button>
   </motion.section>}
   {screen==='finale'&&<motion.section className="finale screen" key="finale" initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:1.02}} transition={{duration:.7,ease}}>
    <div className="finale-orb"><DreamScene/></div><div className="eyebrow"><span/> THE DAY IS YOURS, DHANUSHA <span/></div><h2>Keep shining,<br/><em>Pilli.</em></h2><p className="finale-message">I’m genuinely glad we became friends. Thank you for the random talks, the laughter, and all the little moments that became our own. I hope this year brings you joy, confidence, good surprises, and people who make you feel appreciated.</p>
    <button className={'wish-button '+(wish?'wished':'')} onClick={()=>setWish(true)}>{wish?'A wish sent into the universe ✨':'Make a wish'} <SparkleIcon size={17}/></button>
    <div className="signature">Happy Birthday, Dhanusha <span>♡</span></div><button className="replay" onClick={()=>{setScreen('intro');setPhotoIndex(0);setWish(false)}}><RotateCcw size={14}/> Replay the surprise</button>
   </motion.section>}
  </AnimatePresence>
  <AnimatePresence>{selected!==null&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={closeModal}><motion.div className="lightbox-inner" initial={{scale:.88,y:20}} animate={{scale:1,y:0}} exit={{scale:.9}} onClick={e=>e.stopPropagation()}><button className="lightbox-close" onClick={closeModal}>×</button><img src={photos[selected].src} alt={photos[selected].title}/><div className="lightbox-caption">{photos[selected].title}</div></motion.div></motion.div>}</AnimatePresence>
  <footer className="site-footer">A SMALL CORNER OF THE UNIVERSE · MADE WITH CARE</footer>
 </main>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
