import { getSiteContent } from '../lib/site'
import VermiculiteSceneClient from '../components/VermiculiteSceneClient'

export const revalidate = 3600

const nav = [
  ['About', '/about'],
  ['Vermiculite', '/vermiculite'],
  ['Applications', '/applications'],
  ['Products', '/products'],
  ['Technical', '/technical'],
  ['Resources', '/resources'],
  ['Contact', '/contact'],
]

function WhatsApp({ number, message = 'Hello Jyothi Mines & Minerals, I am interested in vermiculite. Please share the suitable grade, specifications, availability and quotation.' }: { number?: string; message?: string }) {
  if (!number) return <a className="button button-outline" href="/contact">Contact Jyothi</a>
  const clean = number.replace(/[^0-9]/g, '')
  return <a className="button button-dark" href={`https://wa.me/${clean}?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer">Talk to us ↗</a>
}

export default async function Home() {
  const { applications, grades, whatsapp } = await getSiteContent()
  const featuredApplications = applications.slice(0, 6)

  return <main className="home-v2">
    <header className="site-nav" id="top">
      <a className="brand-lockup" href="/" aria-label="Jyothi Mines & Minerals home">
        <span className="brand-mark">J</span>
        <span><strong>JYOTHI</strong><small>MINES & MINERALS</small></span>
      </a>
      <nav aria-label="Primary navigation">
        {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a className="nav-cta" href="#applications">Find an application</a>
      </nav>
    </header>

    <section className="hero-v2-new">
      <div className="hero-v2-copy">
        <p className="kicker">JYOTHI MINES & MINERALS / INDIA</p>
        <h1>Vermiculite,<br /><span>engineered by nature.</span></h1>
        <p className="hero-deck">A layered mineral that opens into a lightweight, porous material. We help you start with the application, then work backwards to the material requirement.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#applications">Explore applications ↓</a>
          <WhatsApp number={whatsapp.number} />
        </div>
        <div className="hero-meta"><span>01 / MATERIAL</span><span>02 / PERFORMANCE</span><span>03 / APPLICATION</span></div>
      </div>
      <div className="hero-v2-art">
        <div className="hero-art-label"><span>01</span><b>EXFOLIATED<br />VERMICULITE</b></div>
        <div className="hero-scene"><VermiculiteSceneClient /></div>
        <div className="hero-art-caption">Layered silicate → heat → expanded structure</div>
      </div>
    </section>

    <section className="proof-bar" aria-label="Material characteristics">
      <div><small>01</small><strong>Layered mineral</strong><span>Natural laminar structure</span></div>
      <div><small>02</small><strong>Exfoliable</strong><span>Rapid expansion when heated</span></div>
      <div><small>03</small><strong>Lightweight</strong><span>Porous expanded particles</span></div>
      <div><small>04</small><strong>Application-led</strong><span>Grade depends on the job</span></div>
    </section>

    <section className="transformation-v2">
      <div className="section-index">02 / MATERIAL BEHAVIOUR</div>
      <div className="transformation-copy">
        <p className="kicker">FROM LAYERS TO STRUCTURE</p>
        <h2>Heat opens<br /><em>the mineral.</em></h2>
        <p>Vermiculite is a hydrated, laminar silicate mineral. When heated, interlayer water drives expansion and opens the structure into lightweight, porous particles.</p>
        <a className="underlink" href="/vermiculite">Understand the material →</a>
      </div>
      <div className="layer-visual" aria-label="Conceptual illustration of vermiculite exfoliation">
        <div className="layer-stack raw"><span>RAW LAYERS</span>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>
        <div className="heat-arrow"><span>HEAT</span><b>→</b></div>
        <div className="layer-stack expanded"><span>EXPANDED</span>{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div>
      </div>
    </section>

    <section className="applications-v2-new" id="applications">
      <div className="applications-heading">
        <div><p className="kicker">03 / APPLICATIONS</p><h2>One material.<br /><span>many jobs.</span></h2></div>
        <p>Different applications ask for different particle sizes and physical characteristics. Explore the job first; qualify the grade second.</p>
      </div>
      <div className="application-grid-v2">
        {featuredApplications.map((app: any, index: number) => <a className="application-card-v2" href={`/applications#${app.id}`} key={app.id}>
          <div className="card-top"><span>0{index + 1}</span><span>APPLICATION</span></div>
          <div className="card-icon" aria-hidden="true"><i /><i /><i /></div>
          <h3>{app.title}</h3>
          <p>{app.short || app.description || 'Explore the material considerations for this application.'}</p>
          <span className="card-link">Explore application ↗</span>
        </a>)}
      </div>
      <a className="all-applications" href="/applications">View all applications <span>→</span></a>
    </section>

    <section className="selection-v2">
      <div className="selection-visual">
        <div className="particle-field">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i } as React.CSSProperties} />)}</div>
        <div className="selection-scale"><span>FINE</span><span>MEDIUM</span><span>COARSE</span></div>
      </div>
      <div className="selection-copy">
        <p className="kicker">04 / MATERIAL SELECTION</p>
        <h2>There is no<br /><em>universal grade.</em></h2>
        <p>Particle size and physical characteristics affect how vermiculite behaves. The correct material is the one that fits the process and performance requirement—not simply the largest or smallest particle.</p>
        <div className="grade-lines">{grades.slice(0, 4).map((g: any) => <div key={g.name}><strong>{g.name}</strong><span>{g.description}</span></div>)}</div>
        <a className="underlink" href="/products">See product information →</a>
      </div>
    </section>

    <section className="evidence-v2">
      <div><p className="kicker">05 / TECHNICAL EVIDENCE</p><h2>Claims should<br /><em>survive scrutiny.</em></h2><p>We separate general vermiculite science from Jyothi-specific product information. Verified technical data, documents and qualifications belong to the technical record—not the marketing copy.</p></div>
      <div className="evidence-list">
        <a href="/technical"><span>TECHNICAL DATA</span><strong>Verified information <b>↗</b></strong></a>
        <a href="/resources"><span>DOCUMENTS</span><strong>Resources & references <b>↗</b></strong></a>
        <a href="/contact"><span>SPECIFICATION</span><strong>Discuss your requirement <b>↗</b></strong></a>
      </div>
    </section>

    <section className="cta-v2-new">
      <div><p className="kicker">06 / START A CONVERSATION</p><h2>Tell us the job.<br /><em>Let's specify the material.</em></h2></div>
      <div className="cta-side"><p>Application, particle size if known, approximate quantity and delivery location are enough to begin.</p><WhatsApp number={whatsapp.number} message="Hello Jyothi Mines & Minerals, I am interested in your vermiculite. Application: [application]. Required grade/particle size: [if known]. Quantity: [quantity]. Delivery location: [location]. Please share suitable material, specifications and quotation." /></div>
    </section>

    <footer className="footer-v2"><div className="brand-lockup"><span className="brand-mark">J</span><span><strong>JYOTHI</strong><small>MINES & MINERALS</small></span></div><span>Vermiculite · Application-led supply</span><span>© {new Date().getFullYear()} Jyothi Mines & Minerals</span></footer>
  </main>
}
