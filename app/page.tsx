'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X, MessageCircle, Phone, Mail, MapPin, ShieldCheck, Boxes, PackageCheck, Users, ChevronLeft, ChevronRight } from 'lucide-react'

const apps = [
  { title: 'Horticulture & Nursery', text: 'Improves aeration, water retention and root development.', image: '/images/apps-ref.svg', shift: 0 },
  { title: 'Agricultural Inputs', text: 'Enhances soil structure and nutrient efficiency.', image: '/images/apps-ref.svg', shift: 1 },
  { title: 'Construction & Insulation', text: 'Thermal insulation, fire resistance, lightweight.', image: '/images/apps-ref.svg', shift: 2 },
  { title: 'Industrial Applications', text: 'Used in foundry, filtration, coatings and more.', image: '/images/apps-ref.svg', shift: 3 },
]
const sizes = [
  { title: 'Fine', range: '0.5 – 1 mm', shift: 0 },
  { title: 'Medium', range: '1 – 2.5 mm', shift: 1 },
  { title: 'Coarse', range: '2.5 – 5 mm', shift: 2 },
]
const trustItems = [
  ['Quality Assured','Carefully processed',<ShieldCheck key="quality"/>],
  ['Wide Applications','Multiple industries',<Boxes key="applications"/>],
  ['Consistent Supply','Reliable & steady',<PackageCheck key="supply"/>],
  ['Customer Focused','Support at every step',<Users key="customer"/>],
] as const

function Logo(){return <a href="#home" className="brand"><span className="brand-mark">◇</span><span><strong>JYOTHI</strong><small>MINES &amp; MINERALS</small></span></a>}
function GoldButton({children,href='#contact'}:{children:React.ReactNode;href?:string}){return <a className="gold-btn" href={href}>{children}<ArrowRight size={14}/></a>}

export default function Home(){
 const [menu,setMenu]=useState(false)
 const [app,setApp]=useState(0)
 const [size,setSize]=useState(0)
 return <main id="home">
  <header className="nav">
   <Logo/>
   <nav className={menu?'nav-links open':'nav-links'}>{['Home','Vermiculite','Applications','Sizes','Technical','About Us','Contact'].map((x,i)=><a key={x} className={i===0?'active':''} href={i===0?'#home':`#${x.toLowerCase().replaceAll(' ','-')}`} onClick={()=>setMenu(false)}>{x}</a>)}</nav>
   <GoldButton href="#contact">Enquire Now</GoldButton>
   <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button>
  </header>

  <section className="hero">
   <img className="hero-bg-image" src="/images/hero-ref.svg" alt="" aria-hidden="true"/><div className="hero-overlay"/>
   <div className="hero-copy"><p className="eyebrow">PRODDATUR, ANDHRA PRADESH, INDIA</p><h1>Vermiculite.<br/>Material with<br/>Purpose.</h1><p>Exfoliated vermiculite for horticulture, agriculture,<br className="desktop"/> industry, construction and specialised applications.</p><div className="actions"><GoldButton href="#vermiculite">Discover Vermiculite</GoldButton><a className="outline-btn" href="#contact">Talk to Jyothi <MessageCircle size={15}/></a></div></div>
   <div className="contact-rail"><a href="https://wa.me/919963639482" aria-label="WhatsApp"><MessageCircle/><small>WhatsApp</small></a><a href="tel:+919963639482" aria-label="Call"><Phone/><small>Call Us</small></a><a href="mailto:vermiculitejyothi@gmail.com" aria-label="Email"><Mail/><small>Email Us</small></a></div>
  </section>

  <section className="trust">{trustItems.map(([a,b,I])=><div className="trust-item" key={a}>{I}<span><b>{a}</b><small>{b}</small></span></div>)}</section>

  <section className="material section-light" id="vermiculite">
   <div className="material-copy"><p className="eyebrow dark">WHAT IS VERMICULITE?</p><h2>Naturally Layered.<br/>Uniquely Versatile.</h2><p>Vermiculite is a naturally occurring mineral that expands when heated, forming lightweight, highly absorbent flakes with excellent insulating and growing properties.</p><a className="black-btn" href="#applications">Explore the Material <ArrowRight size={14}/></a></div>
   <div className="material-art"><div className="material-photo"><img src="/images/material-ref.svg" alt="Exfoliated vermiculite"/></div><div className="material-label l1"><b>Heat Expandable</b><span>Expands 8–20x</span></div><div className="material-label l2"><b>Layered Structure</b><span>Natural laminar<br/>formation</span></div><div className="material-label l3"><b>Lightweight</b><span>Low Density<br/>High Volume</span></div><div className="material-label l4"><b>Stable &amp; Inert</b><span>Chemically Stable<br/>pH Neutral</span></div></div>
  </section>

  <section className="applications section-dark" id="applications">
   <div className="app-copy"><p className="eyebrow">APPLICATIONS</p><h2>One Mineral.<br/>Many Possibilities.</h2><p>From growing plants to industrial processes, vermiculite adapts to your needs.</p><GoldButton href="#contact">View All Applications</GoldButton></div>
   <div className="app-carousel"><button className="carousel-arrow left" onClick={()=>setApp((app+apps.length-1)%apps.length)} aria-label="Previous"><ChevronLeft/></button><div className="app-track">{apps.map((item,i)=><article className={`app-card ${i===app?'selected':''}`} key={item.title} onClick={()=>setApp(i)}><div className="app-photo"><img src={item.image} alt="" style={{transform:`translateX(-${item.shift*25}%)`}}/></div><div className="app-card-copy"><h3>{item.title}</h3><p>{item.text}</p><span><ArrowRight size={11}/></span></div></article>)}</div><button className="carousel-arrow right" onClick={()=>setApp((app+1)%apps.length)} aria-label="Next"><ChevronRight/></button><div className="dots">{apps.map((_,i)=><button key={i} className={i===app?'on':''} onClick={()=>setApp(i)} aria-label={`Application ${i+1}`}/>)}</div></div>
  </section>

  <section className="sizes section-light" id="sizes">
   <div className="size-copy"><p className="eyebrow dark">SIZE SELECTION</p><h2>Right Size.<br/>Right Application.</h2><p>Different sizes fit different needs.<br/>Select the size that fits your application.</p><a className="black-btn" href="#contact">Explore Sizes &amp; Enquire <ArrowRight size={14}/></a></div>
   <div className="size-carousel"><div className="size-track">{sizes.map((item,i)=><article className={`size-card ${i===size?'selected':''}`} key={item.title} onClick={()=>setSize(i)}><div className="size-photo"><img src="/images/sizes-ref.svg" alt="" style={{transform:`translateX(-${item.shift*33.3333}%)`}}/></div><h3>{item.title}</h3><p>{item.range}</p></article>)}</div><button className="size-arrow" aria-label="Next size" onClick={()=>setSize((size+1)%sizes.length)}><ChevronRight/></button></div>
  </section>

  <section className="technical section-dark" id="technical"><div><p className="eyebrow">TECHNICAL MATERIAL</p><h2>Processed for<br/>Consistent Performance.</h2><p>Controlled crushing, grading, screening, magnetic separation, drying and thermal expansion help us supply dependable exfoliated vermiculite.</p></div><div className="spec-grid"><div><b>0.5–5 mm</b><span>Available grading range</span></div><div><b>8–20×</b><span>Typical expansion range</span></div><div><b>Low Density</b><span>High volume material</span></div><div><b>Stable</b><span>Inert mineral structure</span></div></div></section>

  <section className="about section-light" id="about-us"><div><p className="eyebrow dark">ABOUT JYOTHI</p><h2>Material expertise<br/>with a practical focus.</h2></div><p>Jyothi Mines &amp; Minerals supplies exfoliated vermiculite from Proddatur, Andhra Pradesh, with a focus on consistent processing, application fit and responsive customer support.</p></section>

  <section className="cta" id="contact"><div className="cta-art"/><div className="cta-copy"><p className="eyebrow">READY TO GET STARTED?</p><h2>Let’s Build Better<br/>Together.</h2><p>Tell us your requirement and our team will connect with you.</p><div className="actions"><a className="gold-btn" href="https://wa.me/919963639482">Enquire on WhatsApp <MessageCircle size={15}/></a><a className="outline-btn" href="tel:+919963639482">Call Us Now <Phone size={15}/></a></div></div></section>

  <footer className="footer"><div className="footer-main"><div className="footer-about"><Logo/><p>Supplying quality exfoliated vermiculite from Proddatur, Andhra Pradesh, India to industries across the globe.</p><div className="socials"><a href="#">f</a><a href="#">in</a><a href="#">◎</a><a href="#">▶</a></div></div><div><h4>Quick Links</h4>{['Home','Vermiculite','Applications','Sizes','Technical','About Us','Contact'].map(x=><a key={x} href={x==='Home'?'#home':`#${x.toLowerCase().replaceAll(' ','-')}`}>{x}</a>)}</div><div><h4>Applications</h4>{['Horticulture & Nursery','Agricultural Inputs','Growing Media','Seed Germination','Construction & Insulation','Fire Protection','Technical Materials'].map(x=><a key={x} href="#applications">{x}</a>)}</div><div><h4>Contact Us</h4><a href="tel:+919963639482"><Phone/> +91 9963639482</a><a href="mailto:vermiculitejyothi@gmail.com"><Mail/> vermiculitejyothi@gmail.com</a><a href="#contact"><MapPin/> Proddatur,<br/>Andhra Pradesh, India</a><a className="footer-enquire" href="#contact">Enquire Now <ArrowRight/></a></div></div><div className="footer-bottom"><span>© 2026 Jyothi Mines &amp; Minerals. All Rights Reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms &amp; Conditions</a></div></div></footer>
 </main>
}