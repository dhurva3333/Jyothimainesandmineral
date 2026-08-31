'use client'

import { useState } from 'react'
import { ArrowRight, Menu, X, MessageCircle, Phone, Mail, MapPin, ShieldCheck, Boxes, PackageCheck, Users } from 'lucide-react'

const apps = ['Horticulture & Nursery','Agricultural Inputs','Construction & Insulation','Industrial Applications']
const sizes = ['Fine','Medium','Coarse']

function Logo(){return <a href="#home" className="brand"><span className="brand-mark">◇</span><span><strong>JYOTHI</strong><small>MINES &amp; MINERALS</small></span></a>}
function GoldButton({children,href='#contact'}:{children:React.ReactNode;href?:string}){return <a className="gold-btn" href={href}>{children}<ArrowRight size={14}/></a>}

export default function Home(){
 const [menu,setMenu]=useState(false)
 const [app,setApp]=useState(0)
 const [size,setSize]=useState(0)
 return <main id="home">
  <header className="nav"><Logo/><nav className={menu?'nav-links open':'nav-links'}>{['Home','Vermiculite','Applications','Sizes','Technical','About Us','Contact'].map((x,i)=><a key={x} className={i===0?'active':''} href={i===0?'#home':`#${x.toLowerCase().replaceAll(' ','-')}`} onClick={()=>setMenu(false)}>{x}</a>)}</nav><GoldButton href="#contact">Enquire Now</GoldButton><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X/>:<Menu/>}</button></header>

  <section className="hero"><div className="hero-art"/><div className="hero-overlay"/><div className="hero-copy"><p className="eyebrow">PRODDATUR, ANDHRA PRADESH, INDIA</p><h1>Vermiculite.<br/>Material with<br/>Purpose.</h1><p>Exfoliated vermiculite for horticulture, agriculture,<br className="desktop"/> industry, construction and specialised applications.</p><div className="actions"><GoldButton href="#vermiculite">Discover Vermiculite</GoldButton><a className="outline-btn" href="#contact">Talk to Jyothi <MessageCircle size={15}/></a></div></div></section>

  <section className="trust">{[['Quality Assured','Carefully processed',ShieldCheck],['Wide Applications','Multiple industries',Boxes],['Consistent Supply','Reliable & steady',PackageCheck],['Customer Focused','Support at every step',Users]].map(([a,b,I])=><div className="trust-item" key={String(a)}><I/><span><b>{a}</b><small>{b}</small></span></div>)}</section>

  <section className="material section-light" id="vermiculite"><div className="material-copy"><p className="eyebrow dark">WHAT IS VERMICULITE?</p><h2>Naturally Layered.<br/>Uniquely Versatile.</h2><p>Vermiculite is a naturally occurring mineral that expands when heated, forming lightweight, highly absorbent flakes with excellent insulating and growing properties.</p><a className="black-btn" href="#applications">Explore the Material <ArrowRight size={14}/></a></div><div className="material-art"><img src="/images/material-ref.svg" alt="Layered exfoliated vermiculite"/><div className="material-label l1"><b>Heat Expandable</b><span>Expands 8–20x</span></div><div className="material-label l2"><b>Layered Structure</b><span>Natural laminar<br/>formation</span></div><div className="material-label l3"><b>Lightweight</b><span>Low Density<br/>High Volume</span></div><div className="material-label l4"><b>Stable &amp; Inert</b><span>Chemically Stable<br/>pH Neutral</span></div></div></section>

  <section className="applications section-dark" id="applications"><div className="app-copy"><p className="eyebrow">APPLICATIONS</p><h2>One Mineral.<br/>Many Possibilities.</h2><p>From growing plants to industrial processes, vermiculite adapts to your needs.</p><GoldButton href="#applications">View All Applications</GoldButton></div><div className="app-visual"><img src="/images/apps-ref.svg" alt="Vermiculite applications"/><button className="app-prev" onClick={()=>setApp((app+3)%4)} aria-label="Previous application">‹</button><button className="app-next" onClick={()=>setApp((app+1)%4)} aria-label="Next application">›</button><div className="app-hitboxes">{apps.map((x,i)=><button key={x} className={i===app?'selected':''} onClick={()=>setApp(i)} aria-label={x}/>)}</div><div className="dots">{apps.map((_,i)=><i key={i} className={i===app?'on':''}/>)}</div></div></section>

  <section className="sizes section-light" id="sizes"><div className="size-copy"><p className="eyebrow dark">SIZE SELECTION</p><h2>Right Size.<br/>Right Application.</h2><p>Different sizes fit different needs.<br/>Select the size that fits your application.</p><a className="black-btn" href="#contact">Explore Sizes &amp; Enquire <ArrowRight size={14}/></a></div><div className="size-visual"><img src="/images/sizes-ref.svg" alt="Fine, Medium and Coarse vermiculite sizes"/><div className="size-hitboxes">{sizes.map((x,i)=><button key={x} className={i===size?'selected':''} onClick={()=>setSize(i)} aria-label={x}/>)}</div><button className="size-arrow" aria-label="Next size" onClick={()=>setSize((size+1)%3)}>›</button></div></section>

  <section className="cta"><div className="cta-art"/><div className="cta-copy"><p className="eyebrow">READY TO GET STARTED?</p><h2>Let’s Build Better<br/>Together.</h2><p>Tell us your requirement and our team will connect with you.</p><div className="actions"><a className="gold-btn" href="https://wa.me/919963639482">Enquire on WhatsApp <MessageCircle size={15}/></a><a className="outline-btn" href="tel:+919963639482">Call Us Now <Phone size={15}/></a></div></div></section>

  <footer className="footer"><div className="footer-main"><div className="footer-about"><Logo/><p>Supplying quality exfoliated vermiculite from Proddatur, Andhra Pradesh, India to industries across the globe.</p><div className="socials"><a>f</a><a>in</a><a>◎</a><a>▶</a></div></div><div><h4>Quick Links</h4>{['Home','Vermiculite','Applications','Sizes','Technical','About Us','Contact'].map(x=><a key={x} href={x==='Home'?'#home':`#${x.toLowerCase().replaceAll(' ','-')}`}>{x}</a>)}</div><div><h4>Applications</h4>{['Horticulture & Nursery','Agricultural Inputs','Growing Media','Seed Germination','Construction & Insulation','Fire Protection','Technical Materials'].map(x=><a key={x} href="#applications">{x}</a>)}</div><div><h4>Contact Us</h4><a href="tel:+919963639482"><Phone/> +91 9963639482</a><a href="mailto:vermiculitejyothi@gmail.com"><Mail/> vermiculitejyothi@gmail.com</a><a href="#contact"><MapPin/> Proddatur,<br/>Andhra Pradesh, India</a><a className="footer-enquire" href="#contact">Enquire Now <ArrowRight/></a></div></div><div className="footer-bottom"><span>© 2025 Jyothi Mines &amp; Minerals. All Rights Reserved.</span><div><a>Privacy Policy</a><a>Terms &amp; Conditions</a></div></div></footer>
 </main>
}
