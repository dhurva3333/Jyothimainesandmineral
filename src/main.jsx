import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, AudioLines, Check, ChevronDown, Gift, Heart, Moon, Music2, Sparkles, Star, Volume2, VolumeX, WandSparkles, X } from 'lucide-react'
import './style.css'

const stars = Array.from({ length: 54 }, (_, i) => ({ left: (i * 37 + 11) % 100, top: (i * 61 + 7) % 100, delay: (i % 9) * -.7, size: i % 7 === 0 ? 3 : 1.6 }))
const notes = ['You make ordinary moments feel like little stories.', 'Your laugh deserves its own constellation.', 'May this year be soft where it needs to be, and wonderfully chaotic where it counts.']

function Mascot({ waving = false }) {
  return <svg className={`mascot ${waving ? 'wave' : ''}`} viewBox="0 0 220 230" role="img" aria-label="A tiny star companion">
    <ellipse cx="110" cy="211" rx="61" ry="10" fill="#100d22" opacity=".22"/>
    <path d="M111 20 C119 36 132 43 149 44 C135 54 130 68 132 85 C119 75 103 75 89 85 C93 67 86 54 72 44 C91 43 103 36 111 20Z" fill="#ffd78e" stroke="#fff1c9" strokeWidth="3"/>
    <path d="M110 65 C151 65 178 101 172 147 C167 188 143 202 110 202 C77 202 52 184 48 147 C42 103 69 65 110 65Z" fill="#f6a9bb" stroke="#ffe1e7" strokeWidth="4"/>
    <path d="M67 111 Q110 81 153 111" fill="none" stroke="#ffd1dc" strokeWidth="7" strokeLinecap="round" opacity=".7"/>
    <ellipse cx="91" cy="139" rx="5" ry="8" fill="#39243c"/><ellipse cx="130" cy="139" rx="5" ry="8" fill="#39243c"/>
    <path d="M101 156 Q110 165 120 156" fill="none" stroke="#8c435e" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="77" cy="153" rx="10" ry="5" fill="#ff829f" opacity=".7"/><ellipse cx="144" cy="153" rx="10" ry="5" fill="#ff829f" opacity=".7"/>
    <path d="M53 139 Q28 127 27 107 Q46 109 59 126" fill="#f6a9bb" stroke="#ffe1e7" strokeWidth="4"/>
    <path d="M165 135 Q192 119 193 97 Q174 101 160 122" fill="#f6a9bb" stroke="#ffe1e7" strokeWidth="4"/>
    <path d="M79 192 Q67 209 58 209 M142 192 Q153 209 164 209" stroke="#ffe1e7" strokeWidth="8" strokeLinecap="round"/>
    <path d="M37 75 l5 12 12 4 -12 4 -5 12 -4 -12 -12 -4 12 -4Z" fill="#ffe5a8"/>
    <path d="M184 58 l4 9 9 4 -9 4 -4 9 -4 -9 -9 -4 9 -4Z" fill="#ffe5a8"/>
    <circle cx="166" cy="181" r="5" fill="#fff0bd"/>
  </svg>
}

function App() {
  const [chapter, setChapter] = useState(0)
  const [letterOpen, setLetterOpen] = useState(false)
  const [soundOn, setSoundOn] = useState(false)
  const [sparkles, setSparkles] = useState(false)
  const [wish, setWish] = useState('')
  const audioRef = useRef(null)
  const [cakeLit, setCakeLit] = useState(false)

  useEffect(() => {
    document.body.dataset.chapter = String(chapter)
    return () => { if (audioRef.current) { audioRef.current.osc.stop(); audioRef.current.ctx.close() } }
  }, [chapter])

  const toggleSound = () => {
    if (soundOn) {
      if (audioRef.current) { audioRef.current.osc.stop(); audioRef.current.ctx.close(); audioRef.current = null }
      setSoundOn(false); return
    }
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      const master = ctx.createGain(); master.gain.value = 0.035; master.connect(ctx.destination)
      const osc = ctx.createOscillator(); const low = ctx.createOscillator()
      const g1 = ctx.createGain(); const g2 = ctx.createGain()
      osc.type = 'sine'; osc.frequency.value = 261.63; low.type = 'sine'; low.frequency.value = 130.81
      g1.gain.value = .55; g2.gain.value = .22; osc.connect(g1).connect(master); low.connect(g2).connect(master)
      osc.start(); low.start(); audioRef.current = { ctx, osc, low }
      setSoundOn(true)
    } catch { setSoundOn(false) }
  }

  const next = () => { setChapter(v => Math.min(v + 1, 3)); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const restart = () => { setChapter(0); setLetterOpen(false); setCakeLit(false); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  const burst = () => { setSparkles(true); window.setTimeout(() => setSparkles(false), 1500) }

  return <main className="universe">
    <div className="sky-grain" />
    <div className="stars" aria-hidden="true">{stars.map((s, i) => <i key={i} style={{ left: s.left+'%', top: s.top+'%', animationDelay: s.delay+'s', width: s.size, height: s.size }} />)}</div>
    <div className="nebula nebula-one"/><div className="nebula nebula-two"/>
    <header className="topbar">
      <a className="wordmark" href="#" onClick={e => {e.preventDefault(); restart()}}><span className="brand-star">✦</span> a little universe</a>
      <div className="top-actions">
        <span className="chapter-count">0{chapter + 1} <i>/ 04</i></span>
        <button className={`sound-toggle ${soundOn ? 'active' : ''}`} onClick={toggleSound} aria-label={soundOn ? 'Turn ambient sound off' : 'Turn ambient sound on'} title={soundOn ? 'Sound on' : 'Ambient sound off'}>{soundOn ? <Volume2 size={16}/> : <VolumeX size={16}/>}<span>{soundOn ? 'Sound on' : 'Sound off'}</span></button>
      </div>
    </header>

    {chapter === 0 && <section className="chapter hero" key="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line"/> A VERY IMPORTANT TRANSMISSION <span className="eyebrow-line"/></div>
        <p className="pretitle">Somewhere in the universe…</p>
        <h1>There’s a little<br/><em>magic</em> with your name on it.</h1>
        <p className="hero-sub">And, surprisingly, it has absolutely nothing to do with being productive today.</p>
        <button className="primary-button" onClick={next}>I’m listening <ArrowRight size={17}/></button>
        <p className="microcopy">Psst… this tiny universe was made for one person.</p>
      </div>
      <div className="hero-art">
        <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
        <div className="moon"><span/></div>
        <div className="floating-star fs-one">✦</div><div className="floating-star fs-two">✧</div><div className="floating-star fs-three">✦</div>
        <div className="planet planet-one"/><div className="planet planet-two"/>
        <div className="mascot-wrap"><Mascot waving/></div>
        <div className="speech-bubble">psst… Pilli! <span>♡</span></div>
        <div className="art-caption">your personal tiny guardian ✧</div>
      </div>
      <div className="scroll-hint"><span>SCROLL TO EXPLORE</span><ChevronDown size={15}/></div>
    </section>}

    {chapter === 1 && <section className="chapter reveal" key="reveal">
      <div className="chapter-tag"><Sparkles size={14}/> A NOTE FROM THE STARS</div>
      <div className="reveal-layout">
        <div className="reveal-art"><div className="halo"/><div className="floating-envelope"><div className="envelope-flap"/><Heart size={30} fill="currentColor"/></div><div className="orbit-label">DELIVERED WITH A LITTLE EXTRA DRAMA</div></div>
        <div className="reveal-copy">
          <p className="pretitle">Dear Pilli,</p>
          <h2>Today, the universe<br/>is being a little <em>extra.</em></h2>
          <p>It paused its endless spinning for a moment. The stars got together. The moon put on its good side. Even the clouds showed up on time.</p>
          <p>All because someone wonderfully one-of-a-kind is celebrating another trip around the sun.</p>
          <button className="primary-button" onClick={next}>Okay, dramatic universe <ArrowRight size={17}/></button>
        </div>
      </div>
    </section>}

    {chapter === 2 && <section className="chapter little-things" key="little">
      <div className="chapter-tag"><WandSparkles size={14}/> THE OFFICIAL PILLI FILES</div>
      <h2>A few things the stars<br/>have <em>noticed.</em></h2>
      <p className="section-intro">Classified information. Handle with a smile.</p>
      <div className="cards">
        <article className="note-card card-pink"><span className="card-index">01 / FACT</span><div className="card-icon">☁️</div><h3>Professional busy person</h3><p>May be unavailable, might reply later, probably has 37 things happening at once. A rare and fascinating species.</p><span className="card-foot">STATUS: STILL ADORABLE</span></article>
        <article className="note-card card-blue"><span className="card-index">02 / FACT</span><div className="card-icon">✨</div><h3>Accidental sunshine</h3><p>Has a way of making a regular day feel less regular. Pretends not to notice. We noticed.</p><span className="card-foot">STATUS: UNDENIABLE</span></article>
        <article className="note-card card-gold"><span className="card-index">03 / FACT</span><div className="card-icon">🪄</div><h3>Chaos, but make it cute</h3><p>A little unpredictable, a little dramatic, and very much the original. No replacement model available.</p><span className="card-foot">STATUS: ONE OF ONE</span></article>
      </div>
      <div className="truth-strip"><span>✦</span> Jokes aside, the world is a nicer place with you in it. <span>✦</span></div>
      <button className="primary-button" onClick={next}>One last little thing <ArrowRight size={17}/></button>
    </section>}

    {chapter === 3 && <section className="chapter finale" key="finale">
      <div className="finale-glow"/>
      <div className="chapter-tag"><Star size={14}/> THE MOST IMPORTANT PART</div>
      <div className="finale-content">
        <p className="pretitle">Make a wish, Pilli.</p>
        <h2>Happy Birthday,<br/><em>you lovely human.</em></h2>
        <div className={`cake-scene ${cakeLit ? 'lit' : ''}`}>
          <div className="cake-sparkle sp-a">✦</div><div className="cake-sparkle sp-b">✧</div>
          <div className="candle"><span className="flame"/></div>
          <div className="cake-top"/><div className="cake-middle"/><div className="cake-bottom"/>
          <div className="cake-plate"/>
        </div>
        <button className="wish-button" onClick={() => {setCakeLit(true); burst()}}>{cakeLit ? <><Check size={17}/> Wish sent to the universe</> : <>Make a wish & blow a kiss <Sparkles size={17}/></>}</button>
        <button className="letter-link" onClick={() => setLetterOpen(true)}>There’s a little letter for you <ArrowRight size={15}/></button>
      </div>
      <div className="finale-foot"><span>MADE OF STARDUST & A LITTLE MISCHIEF</span><button onClick={restart}>Take the little journey again ↗</button></div>
    </section>}

    {sparkles && <div className="confetti" aria-hidden="true">{Array.from({length:32},(_,i)=><i key={i} style={{left:(i*31)%100+'%',animationDelay:(i%8)*.05+'s',transform:`rotate(${i*37}deg)`}}>{['✦','✧','♡','·'][i%4]}</i>)}</div>}
    {letterOpen && <div className="letter-backdrop" role="presentation" onClick={() => setLetterOpen(false)}>
      <article className="letter-modal" role="dialog" aria-modal="true" aria-labelledby="letter-title" onClick={e => e.stopPropagation()}>
        <button className="close-letter" onClick={() => setLetterOpen(false)} aria-label="Close letter"><X size={19}/></button>
        <div className="letter-stamp">FOR PILLI · WITH LOVE</div>
        <div className="letter-spark">✦</div>
        <p className="pretitle">A tiny letter, just for you</p>
        <h2 id="letter-title">Dear Pilli,</h2>
        <p>I hope this new year of your life brings you the kind of happiness that sneaks up on you and stays. The kind of laughter that makes your cheeks hurt, the kind of people who make you feel understood, and the courage to go after every little and big thing you dream about.</p>
        <p>Keep being your funny, slightly chaotic, wonderfully you self. Don't let the busy days steal your sparkle. You deserve good surprises, peaceful moments, loud laughter, and all the beautiful things you don't even know to wish for yet.</p>
        <p>And yes, you are still a certified favourite little headache. That title is non-transferable. 😌</p>
        <p className="letter-signoff">Have the loveliest birthday. ♡</p>
        <div className="letter-bottom">A LITTLE UNIVERSE, MADE ESPECIALLY FOR YOU ✧</div>
      </article>
    </div>}
    <footer className="site-footer">A LITTLE UNIVERSE, MADE ESPECIALLY FOR <span>PILLI</span> <i>✦</i></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>)