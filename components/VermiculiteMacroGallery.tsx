'use client'

const images = [
  { src: 'https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/Figure1_300ppi_0.gif', label: 'Commercial expanded vermiculite · USGS', note: 'Public-domain reference image showing real expanded vermiculite morphology.' },
  { src: 'https://vermiculite.org/wp-content/uploads/2018/12/Vermiculite-768x576.jpg', label: 'Exfoliated vermiculite · macro', note: 'Industry reference photograph showing natural particle variation and colour.' },
  { src: 'https://medias.renoassistance.ca/image/upload/w_1024,h_575,c_fill,f_auto,q_auto/v1730249023/renoassistance/residential/articles/2021-05/vermiculite-dois-je-men-debarrasser/vermiculitevue-macro.jpg', label: 'Vermiculite macro texture', note: 'Close macro reference for the layered, accordion-like particle surface.' },
]

export default function VermiculiteMacroGallery() {
  return <section className="macro-gallery" aria-labelledby="macro-heading">
    <div className="macro-intro"><p className="kicker">REAL MATERIAL · MACRO VIEW</p><h2 id="macro-heading">See the mineral <em>as material.</em></h2><p>Real reference photography keeps the visual language grounded in actual vermiculite rather than generic 3D blobs. The interactive scenes use the same real morphology as their visual reference.</p></div>
    <div className="macro-grid">{images.map((image, index) => <figure key={image.src} className={`macro-card macro-${index + 1}`}>
      <div className="macro-image"><img src={image.src} alt={image.label} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" referrerPolicy="no-referrer" onError={(event) => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement?.classList.add('image-missing') }} /></div>
      <figcaption><span>0{index + 1}</span><div><strong>{image.label}</strong><small>{image.note}</small></div></figcaption>
    </figure>)}</div>
  </section>
}
