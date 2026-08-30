import Link from 'next/link'
import SizeExplorer from '../../components/SizeExplorer'
import FloatingContact from '../../components/FloatingContact'
import '../v2.css'
import '../immersive.css'

export const revalidate = 3600

export default function SizesPage() {
  return <main className="page sizes-unified-page"><header className="nav"><Link className="brand" href="/"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></Link><nav><Link href="/applications">Applications</Link><a className="button primary" href="https://wa.me/919963639482" target="_blank" rel="noopener noreferrer">Enquire</a></nav></header><section className="page-hero sizes-intro"><p className="eyebrow">VERMICULITE / SIZE GUIDE</p><h1>Find the right<br /><em>size.</em></h1><p className="lead">One interactive place for every size direction, application and growing-media use. Select an application and size to inspect the material, compare options and enquire.</p></section><SizeExplorer /><section className="page-body sizes-notes"><div className="info-card"><p className="eyebrow">IMPORTANT</p><h2>Size is only one part of qualification.</h2><p>Particle-size distribution, bulk density, expansion, moisture, formulation and the final application can all affect suitability. The website does not turn general guidance into a Jyothi product specification.</p></div><div className="detail-actions"><Link className="button button-outline" href="/applications">Explore applications</Link><a className="button button-dark" href="https://wa.me/919963639482?text=Hello%20Jyothi%20Mines%20%26%20Minerals%2C%20I%20need%20help%20selecting%20a%20vermiculite%20size.%20Please%20advise%20the%20suitable%20grade%2C%20specification%2C%20availability%20and%20quotation." target="_blank" rel="noopener noreferrer">Ask Jyothi ↗</a></div></section><FloatingContact /></main>
}
