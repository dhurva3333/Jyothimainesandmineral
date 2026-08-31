import { getSiteContent } from '../lib/site'
import { applicationDetails } from '../lib/applicationData'
import VermiculiteExplainer from '../components/VermiculiteExplainer'
import HeroMaterial from '../components/HeroMaterial'
import FloatingContact from '../components/FloatingContact'
import './v2.css'
import './vermiculite-colors.css'
import './immersive.css'
import './immersive-v3.css'
import './mockup.css'

export const revalidate = 3600
const phone = 'tel:+919963639482'
const email = 'mailto:vermiculitejyothi@gmail.com'
const whatsapp = 'https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20would%20like%20to%20enquire%20about%20vermiculite.'
const applications = applicationDetails.slice(0, 4)
const sizes = [{ name: 'Fine', band: '0.5 – 1 mm' }, { name: 'Medium', band: '1 – 2.5 mm' }, { name: 'Coarse', band: '2.5 – 5 mm' }]

export default async function Home() {
  const { site } = await getSiteContent()
  return <main className="reference-home">
    <header className="reference-nav" id="top"><a className="reference-brand" href="/" aria-label="Jyothi Mines & Minerals home"><span className="reference-logo">J</span><span><strong>JYOTHI</strong><small>MINES & MINERALS</small></span></a><nav aria-label="Primary navigation"><a className="active" href="#top">Home</a><a href="#vermiculite">Vermiculite</a><a href="#applications">Applications</a><a href="#sizes">Sizes</a><a href="/technical">Technical</a><a href="/about">About Us</a><a href="#contact">Contact</a><a className="reference-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire Now</a></nav><button className="reference-menu" aria-label="Open menu">☰</button></header>

    <section className="reference-hero"><div className="reference-hero-copy"><p className="reference-kicker">PRODDATUR, ANDHRA PRADESH, INDIA</p><h1>Vermiculite.<br />Material with<br />Purpose.</h1><p>Exfoliated vermiculite for horticulture, agriculture, industry, construction and specialised applications.</p><div className="reference-actions"><a className="gold-button" href="#vermiculite">Discover Vermiculite <span>→</span></a><a className="outline-button" href={whatsapp} target="_blank" rel="noopener noreferrer">Talk to Jyothi <span>◉</span></a></div></div><div className="reference-hero-3d"><HeroMaterial /></div></section>

    <section className="reference-proof"><div><b>♧</b><strong>Quality Assured</strong><small>Carefully processed</small></div><div><b>✧</b><strong>Wide Applications</strong><small>Multiple industries</small></div><div><b>◈</b><strong>Consistent Supply</strong><small>Reliable & timely</small></div><div><b>♧</b><strong>Customer Focused</strong><small>Support at every step</small></div></section>

    <section className="reference-material" id="vermiculite"><div className="material-copy"><p className="reference-kicker">WHAT IS VERMICULITE?</p><h2>Naturally Layered.<br />Uniquely Versatile.</h2><p>Vermiculite is a naturally occurring mineral that expands when heated, forming lightweight, highly absorbent flakes with excellent insulating and growing properties.</p><a className="dark-button" href="/vermiculite">Explore the Material <span>→</span></a></div><div className="material-3d"><VermiculiteExplainer /><div className="material-callout callout-one"><b>Heat Expandable</b><small>Expands 8–20x</small></div><div className="material-callout callout-two"><b>Layered Structure</b><small>Natural Laminar Formation</small></div><div className="material-callout callout-three"><b>Lightweight</b><small>Low Density · High Volume</small></div><div className="material-callout callout-four"><b>Stable & Inert</b><small>Chemically Stable · pH Neutral</small></div></div></section>

    <section className="reference-applications" id="applications"><div className="applications-intro"><p className="reference-kicker">APPLICATIONS</p><h2>One Mineral.<br />Many Possibilities.</h2><p>From growing plants to industrial processes, vermiculite adapts to your needs.</p><a className="gold-button" href="/applications">View All Applications <span>→</span></a></div><div className="application-strip">{applications.map((app, index) => <a className={`application-tile ${index === 0 ? 'selected' : ''}`} key={app.id} href={`/applications/${app.id}`}><div className={`application-photo application-photo-${index + 1}`}><span>{index === 0 ? '🌱' : index === 1 ? '🌿' : index === 2 ? '▰' : '◉'}</span></div><strong>{app.title}</strong><p>{app.short}</p><i>↗</i></a>)}<button className="strip-arrow" aria-label="Next application">›</button></div><div className="strip-dots"><b></b><i></i><i></i><i></i><i></i></div></section>

    <section className="reference-sizes" id="sizes"><div className="sizes-intro"><p className="reference-kicker">SIZE SELECTION</p><h2>Right Size.<br />Right Application.</h2><p>Different sizes for different needs.<br />Select the size that fits your application.</p><a className="dark-button" href="/sizes">Explore Sizes & Enquire <span>→</span></a></div><div className="size-cards">{sizes.map((size, index) => <a href={`/sizes?grade=${size.name.toLowerCase()}`} className="size-card" key={size.name}><div className={`size-material size-${index + 1}`}><span></span></div><strong>{size.name}</strong><small>{size.band}</small></a>)}<button className="size-arrow" aria-label="Next size">›</button></div></section>

    <section className="reference-cta" id="contact"><div className="cta-image"><HeroMaterial /></div><div className="cta-copy"><p className="reference-kicker">READY TO GET STARTED?</p><h2>Let's Build Better<br />Together.</h2><p>Tell us your requirement and our team will connect with you.</p><div><a className="gold-button" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <span>◉</span></a><a className="outline-button light" href={phone}>Call Us Now <span>⌕</span></a></div></div></section>

    <footer className="reference-footer"><div className="footer-brand"><span className="reference-logo">J</span><strong>JYOTHI<br /><small>MINES & MINERALS</small></strong><p>Supplying quality exfoliated vermiculite from Proddatur, Andhra Pradesh, India to industries across the globe.</p><div className="socials"><span>f</span><span>in</span><span>◎</span><span>▶</span></div></div><div><h4>Quick Links</h4><a href="#top">Home</a><a href="#vermiculite">Vermiculite</a><a href="#applications">Applications</a><a href="#sizes">Sizes</a><a href="/technical">Technical</a><a href="/about">About Us</a><a href="#contact">Contact</a></div><div><h4>Applications</h4>{applicationDetails.slice(0, 7).map(app => <a href={`/applications/${app.id}`} key={app.id}>{app.title}</a>)}</div><div><h4>Contact Us</h4><a href={phone}>⌕ +91 99636 39482</a><a href={email}>✉ vermiculitejyothi@gmail.com</a><span>⌖ Proddatur,<br />Andhra Pradesh, India</span><a className="footer-enquire" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire Now →</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Jyothi Mines & Minerals. All Rights Reserved.</span><span>Privacy Policy &nbsp;&nbsp;&nbsp; Terms & Conditions</span></div></footer><FloatingContact />
  </main>
}
