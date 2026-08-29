const applications = [
  ['01','Horticulture & Nursery','Seed starting, propagation, potting mixes and professional growing media.','Fine / Medium / Coarse'],
  ['02','Lightweight Construction','Lightweight concrete, screeds, mortars and plaster formulations.','Grade matched to formulation'],
  ['03','Fire Protection','A mineral component for fire-protection boards and spray-applied systems.','Application qualification required'],
  ['04','Thermal Insulation','Loose-fill and high-temperature insulating formulations.','Coarse / Fine'],
  ['05','Friction Materials','Fine exfoliated vermiculite for selected brake and friction formulations.','Industrial fine grade'],
  ['06','Refractory & Foundry','Insulating refractory mixes and selected molten-metal applications.','Application-specific'],
  ['07','Protective Packaging','Lightweight cushioning and absorbent packing for fragile industrial goods.','Coarse grade'],
  ['08','Agricultural Inputs','Growing-media and selected agricultural formulations.','Application-specific'],
]

const specs = [
  ['Raw feed size','~0.5–1 mm to ~4–7 mm','As previously supplied; final product PSD is grade-specific'],
  ['Processing','Drying · Crushing · Milling · Screening · Magnetic separation · Thermal expansion','Physical processing + exfoliation'],
  ['Reported capacity','~10 tonnes/day · ~300 tonnes/month','Historical operating figure supplied by Jyothi'],
  ['Packaging','12.5 kg · 15 kg · larger industrial bags','Customer/grade dependent'],
]

export default function Home() {
  return <main>
    <header className="nav"><a className="brand" href="#top"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></a><nav><a href="#material">Material</a><a href="#applications">Applications</a><a href="#capability">Capability</a><a href="#contact" className="nav-cta">Request a specification</a></nav></header>

    <section id="top" className="hero">
      <div className="hero-copy"><p className="eyebrow">PROCESSED MINERAL MATERIALS · INDIA</p><h1>Vermiculite,<br/><em>engineered for use.</em></h1><p className="lead">Processed and exfoliated vermiculite supplied by application, grade and specification — from growing media to industrial formulations.</p><div className="actions"><a className="button primary" href="#applications">Explore applications <span>↗</span></a><a className="button ghost" href="#contact">Talk to our team</a></div><div className="trust"><span>01</span> Application-led supply <i/> <span>02</span> Grade-based processing <i/> <span>03</span> B2B enquiries</div></div>
      <div className="hero-art"><div className="orb orb-a"/><div className="orb orb-b"/><div className="flake f1"/><div className="flake f2"/><div className="flake f3"/><div className="core"><small>EXFOLIATED</small><strong>VERMICULITE</strong><span>lightweight · porous · mineral</span></div></div>
    </section>

    <section id="material" className="intro"><div><p className="eyebrow">THE MATERIAL</p><h2>A layered mineral transformed by heat.</h2></div><div className="intro-text"><p>Vermiculite is a hydrated layered silicate mineral. On heating, its interlayer water drives exfoliation, producing a lightweight, porous material with useful water-holding, thermal and insulating characteristics.</p><p>Jyothi focuses on processing, grading and supplying the material for defined commercial applications — without turning unsupported research claims into product claims.</p></div></section>

    <section id="applications" className="applications"><div className="section-head"><div><p className="eyebrow">WHERE IT FITS</p><h2>One mineral.<br/><span>Multiple industries.</span></h2></div><p>We organize supply around the customer's formulation or process — not around a generic bag of vermiculite.</p></div><div className="app-grid">{applications.map(([n,title,desc,grade])=><article className="app-card" key={n}><div className="num">{n}</div><h3>{title}</h3><p>{desc}</p><small>{grade}</small><span className="arrow">↗</span></article>)}</div></section>

    <section id="capability" className="capability"><div className="cap-copy"><p className="eyebrow">PROCESS & CAPABILITY</p><h2>From mineral feed<br/>to controlled grade.</h2><p>Our reported production route combines drying, size reduction, screening, grading, magnetic separation and thermal expansion, followed by cooling and packing.</p><div className="process"><span>RAW</span><b>→</b><span>SIZE</span><b>→</b><span>SEPARATE</span><b>→</b><span>EXPAND</span><b>→</b><span>GRADE</span></div></div><div className="stats"><div><strong>~10</strong><span>tonnes / day<br/>reported capacity</span></div><div><strong>~300</strong><span>tonnes / month<br/>reported capacity</span></div><div><strong>0.5–7</strong><span>mm<br/>reported raw range</span></div></div></section>

    <section className="grades"><div className="grade-visual"><div className="ring r1"/><div className="ring r2"/><div className="grade-dot d1"/><div className="grade-dot d2"/><div className="grade-dot d3"/><div className="grade-label">GRADE<br/><b>BY USE</b></div></div><div><p className="eyebrow">GRADE, NOT GUESSWORK</p><h2>Match particle size to the job.</h2><p>Industry applications use different exfoliated grades. We can discuss fine, medium and coarse requirements, then qualify the finished material against the customer's specification.</p><div className="spec-list">{specs.map(([a,b,c])=><div key={a}><b>{a}</b><span>{b}</span><small>{c}</small></div>)}</div></div></section>

    <section className="evidence"><p className="eyebrow">TECHNICAL DISCIPLINE</p><h2>Claims backed by evidence.<br/><em>Specifications backed by testing.</em></h2><p>Our research separates established commercial applications from experimental or unverified uses. Current batch data, particle-size consistency and application testing should determine the final product specification.</p><div className="evidence-row"><span>01 <b>Evidence-led claims</b></span><span>02 <b>Batch-specific CoA</b></span><span>03 <b>Application qualification</b></span></div></section>

    <section id="contact" className="contact"><div><p className="eyebrow">START A CONVERSATION</p><h2>Tell us what<br/>you need.</h2><p>Share your application, particle-size requirement and approximate volume. We will help map it to a suitable vermiculite grade and qualification path.</p></div><div className="contact-box"><a href="mailto:info@jyothiminesandminerals.com" className="contact-link">info@jyothiminesandminerals.com ↗</a><div className="contact-note">For industrial enquiries, include your required PSD, bulk density, packaging and monthly quantity if known.</div></div></section>

    <footer><div className="brand"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></div><span>Processed mineral materials · Vermiculite</span><span>© 2026 Jyothi Mines & Minerals</span></footer>
  </main>
}