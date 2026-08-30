import { getSiteContent } from '../lib/site'
import { applicationDetails } from '../lib/applicationData'
import VermiculiteExplainer from '../components/VermiculiteExplainer'
import ApplicationShowcase from '../components/ApplicationShowcase'
import VermiculiteMacroGallery from '../components/VermiculiteMacroGallery'
import FloatingContact from '../components/FloatingContact'
import HeroMaterial from '../components/HeroMaterial'
import ImmersiveScrollStory from '../components/ImmersiveScrollStory'
import './v2.css'
import './vermiculite-colors.css'
import './immersive.css'
import './immersive-v3.css'

export const revalidate = 3600

const phone = 'tel:+919963639482'
const email = 'mailto:vermiculitejyothi@gmail.com'
const whatsapp = 'https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20would%20like%20to%20enquire%20about%20vermiculite.'

export default async function Home() {
  const { site } = await getSiteContent()
  return <main className="home-v2">
    <header className="site-nav" id="top">
      <a className="brand-lockup" href="/" aria-label="Jyothi Mines & Minerals home"><span className="brand-mark">J</span><span><strong>JYOTHI</strong><small>MINES & MINERALS</small></span></a>
      <nav aria-label="Primary navigation"><a href="#vermiculite">Vermiculite</a><a href="#applications">Applications</a><a href="/products">Products</a><a href="/technical">Technical</a><a className="nav-cta" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a></nav>
    </header>

    <section className="hero-v2-new"><div className="hero-v2-copy"><p className="kicker">JYOTHI MINES & MINERALS · PRODDATUR, INDIA</p><h1>Vermiculite.<br /><span>Material with purpose.</span></h1><p className="hero-deck">Vermiculite-focused B2B material supply from Jyothi Mines & Minerals. Explore the material, understand where it fits, then discuss size and supply with Jyothi.</p><div className="hero-actions"><a className="button button-dark" href="#vermiculite">Discover vermiculite</a><a className="button button-outline" href={whatsapp} target="_blank" rel="noopener noreferrer">Talk to Jyothi ↗</a></div><div className="hero-meta"><span>HORTICULTURE</span><span>INDUSTRIAL</span><span>TECHNICAL SUPPLY</span></div></div><div className="hero-v2-art"><HeroMaterial /></div></section>

    <section className="company-intro-v3" aria-labelledby="company-heading">
      <div className="company-intro-v3-mark"><span>J</span><small>JYOTHI<br />MINES & MINERALS</small></div>
      <div className="company-intro-v3-copy"><p className="kicker">THE MATERIAL, THE APPLICATION, THE CONVERSATION</p><h2 id="company-heading">A vermiculite-focused material partner, <em>not just another mineral page.</em></h2><p>Jyothi Mines & Minerals presents vermiculite around the questions a buyer actually needs answered: what the material is, where its properties matter, which size direction to discuss, and how to enquire about current supply.</p></div>
      <div className="company-intro-v3-facts"><div><span>01</span><strong>Material focus</strong><small>Vermiculite and its application context</small></div><div><span>02</span><strong>Application-led</strong><small>Explore use areas before discussing a grade</small></div><div><span>03</span><strong>Direct enquiry</strong><small>Talk to Jyothi about size and supply</small></div></div>
    </section>

    <section className="proof-bar" aria-label="Vermiculite characteristics"><div><small>01</small><strong>Lightweight</strong><span>Low-density expanded material</span></div><div><small>02</small><strong>Porous</strong><span>Open structure for useful media behaviour</span></div><div><small>03</small><strong>Moisture retaining</strong><span>Important in growing-media applications</span></div><div><small>04</small><strong>Thermal</strong><span>Used in selected insulation systems</span></div></section>

    <section id="vermiculite"><ImmersiveScrollStory /></section>
    <section className="transformation-v2"><div className="section-index">04 · UNDERSTAND THE MATERIAL</div><div className="transformation-copy"><p className="kicker">WHAT IS VERMICULITE?</p><h2>A layered mineral with <em>a remarkable structure.</em></h2><p>Vermiculite is a hydrated, laminar silicate mineral related structurally to mica. Its layered structure and interlayer water help explain the distinctive behaviour of exfoliated vermiculite.</p><a className="underlink" href="/vermiculite">Explore the material →</a></div><VermiculiteExplainer /></section>
    <VermiculiteMacroGallery />

    <section className="applications-v2-new" id="applications"><div className="applications-heading"><div><p className="kicker">WHERE IT IS USED</p><h2>One material.<br /><span>Many applications.</span></h2></div><p>Choose an application to understand the role vermiculite can play, then view size guidance before contacting Jyothi. No proprietary manufacturing process is disclosed here.</p></div><ApplicationShowcase applications={applicationDetails} /></section>

    <section className="selection-v2"><div className="selection-visual"><div className="particle-field">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div><div className="selection-scale"><span>FINE</span><span>MEDIUM</span><span>COARSE</span></div></div><div className="selection-copy"><p className="kicker">SIZE & APPLICATION</p><h2>Choose by the <em>job.</em></h2><p>Particle size is application-dependent. The website gives a practical starting direction while keeping general industry guidance separate from verified Jyothi availability.</p><div className="grade-lines"><div><strong>FINE</strong><span>Often considered for smaller particles, formulated systems and selected growing-media uses.</span></div><div><strong>MEDIUM</strong><span>Useful where a balance of structure, porosity and handling is required.</span></div><div><strong>COARSE</strong><span>Often considered where lightweight aggregate or loose-fill structure matters.</span></div></div><a className="button button-dark" href="/sizes">Explore sizes & enquire →</a></div></section>

    <section className="evidence-v2"><div><p className="kicker">TECHNICAL INFORMATION</p><h2>From material knowledge to <em>buying confidence.</em></h2><p>Technical buyers can go deeper into product information, application guidance and available documentation without confusing general vermiculite science with Jyothi-specific specifications.</p></div><div className="evidence-list"><a href="/technical"><span>01</span><strong>Technical information</strong><b>→</b></a><a href="/products"><span>02</span><strong>Products & grades</strong><b>→</b></a><a href="/resources"><span>03</span><strong>Resources</strong><b>→</b></a></div></section>

    <section className="cta-v2-new"><div><p className="kicker">JYOTHI MINES & MINERALS</p><h2>Have an application?<br /><em>Let's discuss the material.</em></h2></div><div className="cta-side"><p>Tell us the application, required size if known, quantity and delivery location. Jyothi can discuss suitable material and current availability.</p><a className="button button-dark" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Jyothi ↗</a></div></section>
    <footer className="footer-v2"><div className="brand-lockup"><span className="brand-mark">J</span><span><strong>JYOTHI</strong><small>MINES & MINERALS</small></span></div><div><a href={phone}>+91 99636 39482</a> · <a href={email}>vermiculitejyothi@gmail.com</a></div><span>© {new Date().getFullYear()} Jyothi Mines & Minerals</span></footer><FloatingContact />
  </main>
}
