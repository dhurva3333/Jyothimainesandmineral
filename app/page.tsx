import { getSiteContent } from '../lib/site'

export const revalidate = 60

export default async function Home() {
  const { site, contact, applications, capability } = await getSiteContent()
  return <main>
    <header className="nav">
      <a className="brand" href="#top" aria-label="Jyothi Mines & Minerals home"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></a>
      <nav aria-label="Primary navigation"><a href="#material">Material</a><a href="#applications">Applications</a><a href="#grades">Grades</a><a href="#contact" className="nav-cta">Request a specification</a></nav>
    </header>

    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">PROCESSED MINERAL MATERIALS · INDIA</p>
        <h1>Vermiculite.<br/><em>See it. Get it.</em></h1>
        <p className="lead">{site.tagline} {site.description}</p>
        <div className="actions"><a className="button primary" href="#applications">See where it is used <span>↗</span></a><a className="button ghost" href="#contact">Talk to our team</a></div>
        <div className="trust"><span>01</span> Understand in seconds <i/><span>02</span> Explore by industry <i/><span>03</span> Request a grade</div>
      </div>
      <div className="hero-art" aria-label="Abstract three-dimensional vermiculite visualization">
        <div className="scene"><div className="mineral"><i/><i/><i/><i/><i/><i/><b>VERMICULITE</b></div></div>
        <div className="float-chip chip-one">LIGHTWEIGHT</div><div className="float-chip chip-two">POROUS</div><div className="float-chip chip-three">MINERAL</div>
      </div>
    </section>

    <section id="material" className="intro">
      <div><p className="eyebrow">THE MATERIAL</p><h2>A layered mineral that expands into a lightweight, porous material.</h2></div>
      <div className="intro-text"><p>Vermiculite is a hydrated layered silicate mineral. When exfoliated, its structure opens into lightweight particles with useful water-holding, thermal and insulating characteristics.</p><p>The simplest way to understand it: <strong>one mineral, many jobs.</strong> The right grade depends on what you are trying to make.</p></div>
    </section>

    <section id="applications" className="applications">
      <div className="section-head"><div><p className="eyebrow">WHERE IT IS USED</p><h2>One mineral.<br/><span>Many industries.</span></h2></div><p>Explore real commercial application areas. Final suitability depends on grade, specification and customer qualification.</p></div>
      <div className="app-grid">{applications.map((app, index) => <article className="app-card" key={app.id}><div className="num">{String(index + 1).padStart(2, '0')}</div><h3>{app.title}</h3><p>{app.short}</p><div className="app-meta"><span>{app.fit}</span><small>{app.grades}</small></div><span className="arrow">↗</span></article>)}</div>
    </section>

    <section id="grades" className="grades">
      <div className="grade-visual" aria-hidden="true"><div className="grade-orbit orbit-a"/><div className="grade-orbit orbit-b"/><div className="grade-orbit orbit-c"/><div className="grade-core"><span>GRADE</span><b>BY USE</b></div><i className="grade-node node-a"/><i className="grade-node node-b"/><i className="grade-node node-c"/></div>
      <div><p className="eyebrow">APPLICATION-MATCHED SUPPLY</p><h2>Particle size matters.</h2><p>Different industries need different exfoliated grades. We discuss the application first, then match particle size and physical characteristics to the customer's specification.</p><div className="grade-cards"><div><b>FINE</b><span>Horticulture · friction · selected formulations</span></div><div><b>MEDIUM</b><span>Growing media · construction mixes · insulation</span></div><div><b>COARSE</b><span>Loose-fill · packaging · selected industrial uses</span></div></div></div>
    </section>

    <section className="capability">
      <div><p className="eyebrow">SUPPLY CAPABILITY</p><h2>Built for B2B<br/>requirements.</h2><p>We can discuss grade, packaging and volume requirements for commercial and industrial buyers. Manufacturing details are intentionally not published.</p></div>
      <div className="stats"><div><strong>{capability.capacity_day}</strong><span>reported daily capacity</span></div><div><strong>{capability.capacity_month}</strong><span>reported monthly capacity</span></div><div><strong>{capability.raw_range}</strong><span>reported raw feed range</span></div><div><strong>Flexible</strong><span>{capability.packaging}</span></div></div>
    </section>

    <section className="evidence"><p className="eyebrow">TECHNICAL DISCIPLINE</p><h2>Clear claims.<br/><em>Serious specifications.</em></h2><p>Our application map separates established commercial uses from claims that still require qualification. Current batch data and application testing should determine the final specification.</p><div className="evidence-row"><span>01 <b>Evidence-led applications</b></span><span>02 <b>Batch-specific data</b></span><span>03 <b>Application qualification</b></span></div></section>

    <section id="contact" className="contact"><div><p className="eyebrow">START A CONVERSATION</p><h2>Tell us what<br/>you need.</h2><p>Share your application, particle-size requirement and approximate volume. We can discuss a suitable grade and qualification path.</p></div><div className="contact-box"><a href={`mailto:${contact.email}`} className="contact-link">{contact.email} ↗</a><div className="contact-note">For industrial enquiries, include application, required PSD, bulk density, packaging and monthly quantity if known.</div></div></section>

    <footer><div className="brand"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></div><span>Exfoliated vermiculite · Application-led supply</span><span>© 2026 Jyothi Mines & Minerals</span></footer>
  </main>
}
