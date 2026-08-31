'use client'

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/VermiculiteUSGOV.jpg', label: 'Vermiculite reference · USGS public domain', note: 'Public-domain reference image showing real vermiculite morphology.', credit: 'Wikimedia Commons / USGS public domain' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Vermiculite1.jpg', label: 'Exfoliated vermiculite · macro', note: 'Real exfoliated vermiculite showing the characteristic flaky, expanded material form.', credit: 'KENPEI · CC BY-SA' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/VermiculiteSF.jpg', label: 'Expanded vermiculite · material view', note: 'Reference photograph of expanded vermiculite for colour and particle-form context.', credit: 'Alexkuzsluda · CC BY-SA' },
]

export default function VermiculiteMacroGallery() {
  return <section className="macro-gallery" aria-labelledby="macro-heading">
    <div className="macro-intro"><p className="kicker">REAL MATERIAL · MACRO VIEW</p><h2 id="macro-heading">See the mineral <em>as material.</em></h2><p>Real reference photography keeps the visual language grounded in actual vermiculite rather than generic 3D blobs. The interactive scenes use the real flaky/layered morphology as their visual reference.</p></div>
    <div className="macro-grid">{images.map((image, index) => <figure key={image.src} className={`macro-card macro-${index + 1}`}>
      <div className="macro-image"><img src={image.src} alt={image.label} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement?.classList.add('image-missing') }} /></div>
      <figcaption><span>0{index + 1}</span><div><strong>{image.label}</strong><small>{image.note}</small><small className="macro-credit">{image.credit}</small></div></figcaption>
    </figure>)}</div>
  </section>
}
