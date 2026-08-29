import './v2.module.css'
import { getSiteContent } from '../lib/site'
import VermiculiteSceneClient from '../components/VermiculiteSceneClient'
import MaterialExplorer from '../components/MaterialExplorer'

export const revalidate = 3600

const nav = [['About','/about'],['Vermiculite','/vermiculite'],['Applications','/applications'],['Products','/products'],['Technical','/technical'],['Resources','/resources'],['Contact','/contact']]

function WhatsApp({ number, message = 'Hello Jyothi Mines & Minerals, I am interested in vermiculite. Please share the suitable grade, specifications, availability and quotation.' }: { number?: string; message?: string }) {
  if (!number) return <a className="button ghost" href="/contact">Contact Jyothi</a>
  const clean = number.replace(/[^0-9]/g, '')
  return <a className="button primary" href={`https://wa.me/${clean}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Talk on WhatsApp ↗</a>
}

export default async function Home() {
  const { applications, grades, whatsapp } = await getSiteContent()
  return <main>
    <header className="nav" id="top">
      <a className="brand" href="/" aria-label="Jyothi Mines & Minerals home"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></a>
      <nav aria-label="Primary navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<a className="button primary" href="#explore">Explore material</a></nav>
    </header>

    <section className="hero hero-v2">
      <div className="hero-copy">
        <p className="eyebrow">JYOTHI MINES & MINERALS · INDIA</p>
        <h1>VERMICULITE.<br/><em>See what it does.</em></h1>
        <p className="lead">A naturally occurring layered mineral that becomes lightweight, porous and versatile when exfoliated. Explore the material first, then find the application.</p>
        <div className="actions"><a className="button primary" href="#explore">Explore the material ↓</a><WhatsApp number={whatsapp.number} /></div>
        <div className="hero-sequence"><span>01 MATERIAL</span><i/><span>02 PROPERTIES</span><i/><span>03 APPLICATION</span></div>
      </div>
      <div className="hero-art hero-art-v2"><div className="scene-shell"><div className="scene-fallback" aria-hidden="true"><span>V</span></div><VermiculiteSceneClient /></div><div className="float-chip chip-one">LAYERED MINERAL</div><div className="float-chip chip-two">EXFOLIATED</div><div className="float-chip chip-three">APPLICATION-LED</div></div>
    </section>

    <section className="story-strip"><div className="story-step active"><b>01</b><span>See the mineral</span></div><div className="story-step"><b>02</b><span>Understand the structure</span></div><div className="story-step"><b>03</b><span>Match the application</span></div><div className="story-step"><b>04</b><span>Talk to Jyothi</span></div></section>

    <section className="science-stage">
      <div className="science-copy"><p className="eyebrow">THE MATERIAL, NOT THE FACTORY</p><h2>What changes when vermiculite is exfoliated?</h2><p>Vermiculite is a hydrated, laminar silicate mineral related structurally to mica. Interlayer water enables rapid expansion when heated, opening the structure into lightweight exfoliated particles.</p><div className="science-facts"><span>Layered structure</span><span>Low density after exfoliation</span><span>Porous structure</span><span>Moisture interaction</span></div></div>
      <div className="science-visual" aria-label="Conceptual vermiculite structure visualization"><div className="layer layer-a"/><div className="layer layer-b"/><div className="layer layer-c"/><div className="water-dots">• • • • •</div><span>INTERLAYER WATER</span></div>
    </section>

    <div id="explore"><MaterialExplorer applications={applications as any} /></div>

    <section className="applications applications-v2"><div className="section-head"><div><p className="eyebrow">APPLICATION UNIVERSE</p><h2>One mineral.<br/><span>Different jobs.</span></h2></div><p>Explore the documented application areas. A use shown here is not a claim that every Jyothi grade is qualified for that application.</p></div><div className="app-orbit"><div className="orbit-core">VERMICULITE</div>{applications.slice(0, 8).map((app: any, i: number) => <a className={`orbit-node orbit-${i + 1}`} href={`/applications#${app.id}`} key={app.id}><small>{String(i + 1).padStart(2, '0')}</small><strong>{app.title}</strong><span>Explore ↗</span></a>)}</div></section>

    <section className="grades grades-v2"><div className="grade-visual"><div className="orb"><span>GRADE</span><b>BY USE</b></div><i/><i/><i/></div><div><p className="eyebrow">MATERIAL SELECTION</p><h2>Particle size changes the job.</h2><p>There is no universal “best” vermiculite grade. Particle size and physical characteristics depend on the application and customer specification.</p><div className="grade-list">{grades.map((g: any) => <div key={g.name}><b>{g.name}</b><span>{g.description}</span></div>)}</div><a className="text-link" href="/products">Explore products →</a></div></section>

    <section className="proof-stage"><div><p className="eyebrow">TECHNICAL EVIDENCE</p><h2>Trust what can<br/><em>be verified.</em></h2><p>General vermiculite science is separated from Jyothi-specific product data. Official grades, laboratory values, certifications and application qualifications appear only when verified.</p></div><div className="proof-stack"><a href="/technical"><span>TECHNICAL DATA</span><b>View verified information ↗</b></a><a href="/resources"><span>DOCUMENT LIBRARY</span><b>Explore resources ↗</b></a><a href="/contact"><span>APPLICATION ENQUIRY</span><b>Discuss your requirement ↗</b></a></div></section>

    <section className="cta cta-v2"><div><p className="eyebrow">READY TO SPECIFY?</p><h2>Tell us the application.<br/>We'll discuss the material.</h2></div><div><p>Application, particle size if known, approximate quantity and delivery location are enough to start the conversation.</p><WhatsApp number={whatsapp.number} message="Hello Jyothi Mines & Minerals, I am interested in your vermiculite. Application: [application]. Required grade/particle size: [if known]. Quantity: [quantity]. Delivery location: [location]. Please share suitable material, specifications and quotation." /></div></section>

    <footer><div className="brand"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></div><span>Vermiculite · Application-led supply</span><span>© {new Date().getFullYear()} Jyothi Mines & Minerals</span></footer>
  </main>
}
