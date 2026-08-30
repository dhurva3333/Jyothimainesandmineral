import { Mail, MessageCircle, Phone } from 'lucide-react'

const phone = 'tel:+919963639482'
const email = 'mailto:vermiculitejyothi@gmail.com'
const whatsapp = 'https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20would%20like%20to%20enquire%20about%20vermiculite.'

export default function FloatingContact() {
  return <aside className="floating-contact" aria-label="Contact Jyothi Mines & Minerals">
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Jyothi" title="WhatsApp"><MessageCircle /></a>
    <a href={phone} aria-label="Call Jyothi" title="Call"><Phone /></a>
    <a href={email} aria-label="Email Jyothi" title="Email"><Mail /></a>
  </aside>
}
