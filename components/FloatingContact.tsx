const phone = 'tel:+919963639482'
const email = 'mailto:vermiculitejyothi@gmail.com'
const whatsapp = 'https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20would%20like%20to%20enquire%20about%20vermiculite.'

function Icon({ type }: { type: 'whatsapp' | 'phone' | 'email' }) {
  if (type === 'phone') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 9.7 3l2 4.5-2.1 1.5a13.5 13.5 0 0 0 5.4 5.4l1.5-2.1 4.5 2-.8 2.5a2 2 0 0 1-2.1 1.4C10.8 17.6 6.4 13.2 5.8 5.9a2 2 0 0 1 1.4-2.1Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  if (type === 'email') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.6a8.2 8.2 0 0 1-12.2 7.1L4 20l1.3-3.6A8.2 8.2 0 1 1 20 11.6Z" fill="none" stroke="currentColor" strokeWidth="1.7"/><path d="M8.6 8.7c.2-.5.5-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c.6 1.1 1.5 2 2.6 2.6l.7-.6c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .3 0 .6-.5.8-2 .7-7-2.4-7.3-5.3Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

export default function FloatingContact() {
  return <aside className="floating-contact" aria-label="Contact Jyothi Mines & Minerals">
    <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Jyothi" title="WhatsApp"><Icon type="whatsapp" /></a>
    <a href={phone} aria-label="Call Jyothi" title="Call"><Icon type="phone" /></a>
    <a href={email} aria-label="Email Jyothi" title="Email"><Icon type="email" /></a>
  </aside>
}
