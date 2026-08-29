import { getSiteContent } from '../lib/site'
import { applicationDetails } from '../lib/applicationData'
import VermiculiteExplainer from '../components/VermiculiteExplainer'
import ApplicationShowcase from '../components/ApplicationShowcase'
import FloatingContact from '../components/FloatingContact'
import './v2.module.css'

export const revalidate = 3600

const phone = 'tel:+919963639482'
const email = 'mailto:vermiculitejyothi@gmail.com'
const whatsapp = 'https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20would%20like%20to%20enquire%20about%20vermiculite.'

export default async function Home() {
  const { site } = await getSiteContent()
  return <main className="home-v2-final">
    <header className="nav" id="top">
      <a className="brand" href="/" aria-label="Jyothi Mines & Minerals home"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></a>
      <nav aria-label="Primary navigation"><a href="#vermiculite">Vermiculite</a><a href="#applications">Applications</a><a href="/products">Products</a><a href="/technical">Technical</a><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a></nav>
    </header>

    <section className="hero hero-compact">
      <div className="hero-copy">
        <p className="eyebrow">JYOTHI MINES & MINERALS · INDIA</p>
        <h1>Vermiculite<br /><em>for real applications.</em></h1>
        <p className="lead">{site.tagline} Explore the material, understand where it fits, then ask Jyothi about the size and supply requirement.</p>
        <div className="actions"><a className="button primary" href="#vermiculite">What is vermiculite?</a><a className="button ghost" href={whatsapp} target="_blank" rel="noopener noreferrer">Talk to Jyothi ↗</a></div>
        <div className="hero-contact"><span>Proddatur · Andhra Pradesh</span><span>Vermiculite-focused B2B supply</span></div>
      </div>
      <div className="hero-mark"><div className="hero-mark-inner"><span>J</span><small>MINERAL<br />MATERIALS</small></div></div>
    </section>

    <section className="vermiculite-section" id="vermiculite">
      <div className="section-heading"><p className="eyebrow">WHAT IS VERMICULITE?</p><h2>A layered mineral with a <em>different kind of structure.</em></h2><p>Vermiculite is a hydrated, laminar silicate mineral related structurally to mica. Its interlayer water and layered structure are central to the behaviour of the exfoliated material.</p></div>
      <VermiculiteExplainer />
      <div className="property-row">{site.properties.slice(0, 6).map((property: string) => <span key={property}>{property}</span>)}</div>
    </section>

    <section className="application-section" id="applications">
      <div className="section-heading application-heading"><p className="eyebrow">WHERE IT IS USED</p><h2>One material.<br /><em>Many applications.</em></h2><p>Choose an application to understand why vermiculite is used there. Each card explains the material role and size considerations without exposing proprietary manufacturing information.</p></div>
      <ApplicationShowcase applications={applicationDetails} />
    </section>

    <section className="buyer-section"><div><p className="eyebrow">BUYING VERMICULITE</p><h2>Know the application.<br /><em>Then choose the size.</em></h2></div><div className="buyer-copy"><p>Particle size is application-dependent. Our size pages show a practical starting point and clearly separate general industry guidance from Jyothi-specific availability.</p><div className="buyer-links"><a href="/products">See products →</a><a href="/technical">Technical information →</a><a href={whatsapp} target="_blank" rel="noopener noreferrer">Ask Jyothi on WhatsApp →</a></div></div></section>

    <section className="contact-band"><div><p className="eyebrow">JYOTHI MINES & MINERALS</p><h2>Have an application in mind?</h2></div><div><p>Send the application, required size if known, quantity and delivery location. We can discuss the suitable material and availability.</p><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Jyothi ↗</a></div></section>

    <footer><div className="brand"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></div><div className="footer-contact"><a href={phone}>+91 99636 39482</a><a href={email}>vermiculitejyothi@gmail.com</a></div><span>© {new Date().getFullYear()} Jyothi Mines & Minerals</span></footer>
    <FloatingContact />
  </main>
}
