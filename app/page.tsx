import dynamic from 'next/dynamic'
import { getSiteContent } from '../lib/site'

const VermiculiteScene = dynamic(() => import('../components/VermiculiteScene'), { ssr: false })
export const revalidate = 3600

const nav = [['About','/about'],['Vermiculite','/vermiculite'],['Applications','/applications'],['Products','/products'],['Technical','/technical'],['Resources','/resources'],['Contact','/contact']]

function WhatsApp({ number, message = 'Hello Jyothi Mines & Minerals, I am interested in vermiculite. Please share the suitable grade, specifications, availability and quotation.' }: { number?: string; message?: string }) {
  if (!number) return <a className="button ghost" href="/contact">Contact Jyothi</a>
  const clean = number.replace(/[^0-9]/g, '')
  return <a className="button primary" href={`https://wa.me/${clean}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Talk on WhatsApp ↗</a>
}

export default async function Home() {
  const { site, applications, grades, whatsapp } = await getSiteContent()
  return <main>
    <header className="nav" id="top">
      <a className="brand" href="/" aria-label="Jyothi Mines & Minerals home"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></a>
      <nav aria-label="Primary navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}<WhatsApp number={whatsapp.number} message="Hello Jyothi Mines & Minerals, I would like to discuss your vermiculite products." /></nav>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">JYOTHI MINES & MINERALS · INDIA</p>
        <h1>VERMICULITE.<br/><em>Engineered by nature.</em></h1>
        <p className="lead">{site.tagline}</p>
        <div className="actions"><a className="button primary" href="/vermiculite">Understand vermiculite ↗</a><WhatsApp number={whatsapp.number} /></div>
        <div className="trust"><span>LIGHTWEIGHT</span><i/> <span>POROUS</span><i/> <span>THERMAL</span><i/> <span>VERSATILE</span></div>
      </div>
      <div className="hero-art"><div className="scene-shell"><div className="scene-fallback" aria-hidden="true"><span>V</span></div><VermiculiteScene /></div><div className="float-chip chip-one">EXFOLIATED MINERAL</div><div className="float-chip chip-two">POROUS STRUCTURE</div><div className="float-chip chip-three">APPLICATION-LED</div></div>
    </section>

    <section className="instant"><div><p className="eyebrow">IN ONE SENTENCE</p><h2>A naturally occurring layered mineral that becomes remarkably lightweight when exfoliated.</h2></div><div className="property-strip">{site.properties.map((p: string) => <span key={p}>{p}</span>)}</div></section>

    <section className="material"><div><p className="eyebrow">THE MATERIAL</p><h2>Why vermiculite?</h2></div><div className="material-copy"><p>Vermiculite is a hydrated, laminar silicate mineral related structurally to mica. Its interlayer water enables rapid expansion when heated, opening the structure into lightweight exfoliated particles.</p><p>That structure is why the material appears across very different industries—from growing media and propagation to lightweight construction, insulation and selected industrial formulations.</p><a className="text-link" href="/vermiculite">Explore the material science →</a></div></section>

    <section className="applications"><div className="section-head"><div><p className="eyebrow">WHERE IT WORKS</p><h2>One mineral.<br/><span>Many jobs.</span></h2></div><p>Documented commercial application areas are shown below. Final suitability depends on grade, specification and customer qualification.</p></div><div className="app-grid">{applications.map((app: any, i: number) => <a className="app-card" href={`/applications#${app.id}`} key={app.id}><span className="num">{String(i + 1).padStart(2,'0')}</span><h3>{app.title}</h3><p>{app.short}</p><span className="app-fit">{app.fit}</span><span className="arrow">↗</span></a>)}</div></section>

    <section className="grades"><div className="grade-visual"><div className="orb"><span>GRADE</span><b>BY USE</b></div><i/><i/><i/></div><div><p className="eyebrow">GRADES</p><h2>Particle size changes the job.</h2><p>There is no universal “best” vermiculite grade. The relevant particle size and physical characteristics depend on the application and the customer's specification.</p><div className="grade-list">{grades.map((g: any) => <div key={g.name}><b>{g.name}</b><span>{g.description}</span></div>)}</div><a className="text-link" href="/products">View product approach →</a></div></section>

    <section className="credibility"><p className="eyebrow">TECHNICAL DISCIPLINE</p><h2>Useful information.<br/><em>No invented specifications.</em></h2><p>General vermiculite science is separated from Jyothi-specific product data. Official grades, laboratory values, certifications and application qualifications are published only when verified.</p><div className="cred-grid"><div><b>01</b><span>Evidence-led application information</span></div><div><b>02</b><span>Application-specific grade discussion</span></div><div><b>03</b><span>Technical documents when verified</span></div></div></section>

    <section className="cta"><div><p className="eyebrow">B2B ENQUIRY</p><h2>Tell us the application.<br/>We’ll discuss the material.</h2></div><div><p>Share the application, required particle size, approximate quantity and delivery location if known.</p><WhatsApp number={whatsapp.number} message="Hello Jyothi Mines & Minerals, I am interested in your vermiculite. Application: [application]. Required grade/particle size: [if known]. Quantity: [quantity]. Please share suitable material, specifications and quotation." /></div></section>

    <footer><div className="brand"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></div><span>Vermiculite · Application-led supply</span><span>© {new Date().getFullYear()} Jyothi Mines & Minerals</span></footer>
  </main>
}
