import Link from 'next/link'
import { notFound } from 'next/navigation'
import { applicationDetails, getApplication } from '../../../../lib/applicationData'
import FloatingContact from '../../../../components/FloatingContact'
import ApplicationDetail3D from '../../../../components/ApplicationDetail3D'
import '../../../v2.module.css'

export const dynamicParams = false
export const revalidate = 3600

export function generateStaticParams() { return applicationDetails.map((app) => ({ id: app.id })) }

export default async function ApplicationSizesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = getApplication(id)
  if (!app) notFound()
  const index = applicationDetails.findIndex((item) => item.id === app.id)
  const message = `Hello Jyothi Mines & Minerals, I need vermiculite for ${app.title}. Please advise the suitable available particle size, grade, specification, packaging, availability and quotation.`
  const whatsapp = `https://wa.me/919963639482?text=${encodeURIComponent(message)}`
  return <main className="page sizes-page">
    <header className="nav"><Link className="brand" href="/"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></Link><nav><Link href={`/applications/${app.id}`}>Application</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a></nav></header>
    <section className="page-hero"><p className="eyebrow">SIZE GUIDE / {app.eyebrow}</p><h1>Which size for<br /><em>{app.title}?</em></h1><p className="lead">Use this as a starting point, not as a Jyothi product specification. Final size must be matched to the actual formulation or growing system.</p><div className="detail-actions"><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a><Link className="button ghost" href={`/applications/${app.id}`}>Application details</Link></div></section>
    <section className="detail-material-3d"><ApplicationDetail3D active={index + 8} label={`${app.title} · size study`} /></section>
    <section className="page-body"><div className="size-guide-card"><p className="eyebrow">GENERAL DIRECTION</p><h2>{app.sizeGuidance}</h2><div className="size-band"><strong>{app.sizeBand}</strong></div><p>{app.qualification}</p></div><div className="size-options"><article className="info-card"><span className="size-label">FINE</span><h2>Fine end</h2><p>Consider when the application needs smaller particles, more uniform coverage or a finer formulation. For some applications, the required size may be below Jyothi's currently discussed range.</p></article><article className="info-card"><span className="size-label">MEDIUM</span><h2>Middle range</h2><p>Consider when a balance of structure, handling and porosity is needed. Confirm the actual particle-size distribution before ordering.</p></article><article className="info-card"><span className="size-label">COARSE</span><h2>Coarse end</h2><p>Consider where larger particles provide useful loose-fill volume, structure or cushioning. Exact suitability depends on the application.</p></article></div><div className="known-range"><p className="eyebrow">JYOTHI RANGE DISCUSSED PREVIOUSLY</p><h2>Approximately 0.5–1 mm to 4–7 mm</h2><p>This is user-reported business information from our project discussions, not a verified current product catalogue. Ask Jyothi to confirm the exact available grade, PSD and packaging.</p></div><div className="detail-actions"><Link className="button ghost" href={`/applications/${app.id}`}>← Application details</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a></div></section>
    <FloatingContact />
  </main>
}
