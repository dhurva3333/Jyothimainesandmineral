import React,{useEffect,useRef,useState}from'react';
import{createRoot}from'react-dom/client';
import{ArrowLeft,ArrowRight,Volume2,VolumeX,Heart,Music2,Home,Sparkles,Camera,Star}from'lucide-react';
import'./style.css';

const chapters=[
 {label:'Welcome',title:'A little universe',kicker:'A SMALL SURPRISE FOR YOU',sub:'Made with a little stardust, a lot of thought, and one very special name.',button:'Enter your birthday world'},
 {label:'Hello',title:'Hi, Dhanusha!',kicker:'YOUR DAY, YOUR LITTLE WORLD',sub:'Today, the stars are taking a moment to celebrate you. I hope this tiny journey makes you smile.',button:'Let’s wander'},
 {label:'Our moments',title:'Little things, lovely memories',kicker:'THE MOMENTS THAT MAKE A FRIENDSHIP',sub:'The everyday conversations, random topics, unexpected laughs, and the little things that make talking feel easy.',button:'One more chapter'},
 {label:'A little teasing',title:'Our very serious investigations',kicker:'A TINY DOSE OF FRIENDLY CHAOS',sub:'You have a whole investigation team dedicated to my crush. I, in return, have been appointed head of the height-jokes department. And somehow I also got cast as your big-brother lookalike. What a career.',button:'Okay, enough teasing'},
 {label:'The real you',title:'What I appreciate about you',kicker:'NO JOKES FOR A MOMENT',sub:'Dhanusha, I genuinely appreciate how easy it is to talk with you. You bring your own warmth and humour into ordinary days. I like that we can be silly, talk about random things, and still have real conversations. I’m glad we became friends.',button:'A birthday wish'},
 {label:'Birthday',title:'Happy Birthday, Dhanusha!',kicker:'THIS MOMENT IS ALL YOURS',sub:'Make a wish. May the year ahead bring you peaceful days, exciting opportunities, good health, confidence, and people who make you feel valued.',button:'Open your letter'},
 {label:'A letter',title:'Dear Dhanusha…',kicker:'A FEW WORDS FROM YOUR FRIEND',sub:'Happy Birthday, Dhanusha! I’m really glad we became friends and that our conversations have become part of the day. I hope you keep finding reasons to laugh, things to look forward to, and people who appreciate the person you are.\n\nThank you for the random talks, the crush investigations, the height jokes, and the big-brother comparisons that somehow became part of our friendship lore. Those little things make this friendship ours.\n\nI hope we make many more memories, support each other through the busy days, and keep being able to talk about absolutely anything. You deserve a year full of good things.\n\nHave the loveliest birthday. ♡',button:'One last little thought'},
 {label:'The next chapter',title:'More memories, Dhanusha?',kicker:'A FRIENDSHIP THAT CAN KEEP GROWING',sub:'I really like the friendship we have. I’d love for it to grow even closer, naturally, with more conversations, laughter, trust, and memories. No pressure or big promises — just happy to have you in my life.',button:'Send a little smile'}
];
function Butterfly({className='',delay=0}){return <span className={'butterfly '+className} style={{animationDelay:delay+'s'}} aria-hidden="true"><i/><b/><em/></span>}
function App(){
 const [page,setPage]=useState(0),[sound,setSound]=useState(false),[wish,setWish]=useState(false),[smile,setSmile]=useState(false);
 const audio=useRef(null);
 const go=n=>{setPage(Math.max(0,Math.min(chapters.length-1,n)));window.scrollTo({top:0,behavior:'smooth'})};
 const toggleSound=()=>{
  if(sound){if(audio.current){audio.current.osc.stop();audio.current.ctx.close();audio.current=null}setSound(false);return}
  try{const ctx=new(window.AudioContext||window.webkitAudioContext)();const master=ctx.createGain();master.gain.value=.018;master.connect(ctx.destination);const osc=ctx.createOscillator();const gain=ctx.createGain();osc.type='sine';osc.frequency.value=174.61;gain.gain.value=.55;osc.connect(gain).connect(master);osc.start();audio.current={ctx,osc};setSound(true)}catch{}
 };
 useEffect(()=>()=>{if(audio.current){audio.current.osc.stop();audio.current.ctx.close()}},[]);
 const c=chapters[page];
 return <main className={'world scene-'+page}>
  <div className="sky"/><div className="stars">{Array.from({length:48},(_,i)=><i key={i} style={{left:(i*37%100)+'%',top:(i*61%100)+'%',animationDelay:(i%8)*-.6+'s'}}/>)}</div>
  <div className="cloud cloud-a"/><div className="cloud cloud-b"/><div className="garden garden-left">✿ ✾ ❀</div><div className="garden garden-right">❀ ✿ ✾</div>
  <Butterfly className="bf-one" delay={0}/><Butterfly className="bf-two" delay={1.3}/><Butterfly className="bf-three" delay={2.1}/>
  <header className="header"><button className="brand" onClick={()=>go(0)}>✦ a little universe</button><div className="head-right"><span>{String(page+1).padStart(2,'0')} / 08</span><button className="sound" onClick={toggleSound} aria-label={sound?'Turn sound off':'Turn sound on'}>{sound?<Volume2/>:<VolumeX/>}<small>{sound?'Sound on':'Sound off'}</small></button></div></header>
  <div className="progress"><i style={{width:((page+1)/chapters.length*100)+'%'}}/></div>
  <section className={'content '+(page===0?'opening':'')}>
   <div className="eyebrow"><span/> {c.kicker} <span/></div>
   {page===0?<><div className="moon">☾</div><h1 className="hero-name">Dhanusha<span>…</span></h1><h2>Someone made a tiny universe<br/>just for <em>you.</em> ♡</h2><p>{c.sub}</p></>:<><div className="chapter-icon">{['✦','♡','✿','🦋','☁','🎂','✉','♡'][page]}</div><h1>{c.title}</h1><p className="message">{c.sub}</p></>}
   {page===2&&<div className="photo-placeholders"><div><Camera/><b>Our favourite moments</b><small>Photo space · coming soon</small></div><div><Heart/><b>Little memories</b><small>We can add your photos later</small></div></div>}
   {page===3&&<div className="joke-chips"><span>Crush detective 👀</span><span>Height department 📏</span><span>“You look like my brother” 😭</span></div>}
   {page===4&&<div className="warm-notes"><span>♡ Easy conversations</span><span>✧ Random laughs</span><span>☁ A friend I’m glad to know</span></div>}
   {page===5&&<div className={'cake '+(wish?'wish-made':'')}><div className="flames">🕯️ 🕯️ 🕯️</div><div className="icing"/><div className="tier top"/><div className="tier bottom"/><div className="plate"/></div>}
   {page===5&&<button className="secondary" onClick={()=>setWish(true)}>{wish?'Your wish is on its way ✨':'Make a wish, Dhanusha'} <Sparkles/></button>}
   {page===6&&<article className="letter-card"><div className="letter-stamp">FOR DHANUSHA · WITH WARMTH</div><div className="letter-text">{c.sub.split('\n\n').map((x,i)=><p key={i}>{x}</p>)}</div><div className="signoff">— Your friend ♡</div></article>}
   {page===7&&<div className="friendship-mark"><Heart fill="currentColor"/><span>More trust</span><span>More laughter</span><span>More memories</span></div>}
   {page===7&&<button className="secondary" onClick={()=>setSmile(true)}>{smile?'A smile sent back to you ♡':'Send a little smile'} <Heart/></button>}
   {page!==5&&page!==6&&page!==7&&<button className="primary" onClick={()=>go(page+1)}>{c.button} <ArrowRight/></button>}
   {page===6&&<button className="primary" onClick={()=>go(7)}>{c.button} <ArrowRight/></button>}
   {page===7&&<button className="text-link" onClick={()=>go(0)}><Home/> Replay the journey</button>}
  </section>
  <nav className="journey-nav" aria-label="Birthday journey navigation">
   <button className="nav-arrow" disabled={page===0} onClick={()=>go(page-1)}><ArrowLeft/><span>Back</span></button>
   <div className="nav-center"><div className="dots">{chapters.map((x,i)=><button key={x.label} className={i===page?'active':''} aria-label={'Go to '+x.label} onClick={()=>go(i)}/>)}</div><small>{c.label}</small></div>
   <button className="nav-arrow next" disabled={page===7} onClick={()=>go(page+1)}><span>Next</span><ArrowRight/></button>
  </nav>
  <footer>MADE WITH A LITTLE STARDUST FOR <b>DHANUSHA</b> ✦</footer>
 </main>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
