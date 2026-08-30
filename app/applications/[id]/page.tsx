import Link from 'next/link'
import { notFound } from 'next/navigation'
import { applicationDetails, getApplication } from '../../../lib/applicationData'
import FloatingContact from '../../../components/FloatingContact'
import ApplicationDetail3D from '../../../components/ApplicationDetail3D'
import '../../v2.module.css'
import '../../immersive.css'

export const dynamicParams = false
export const revalidate = 3600
export function generateStaticParams() { return applicationDetails.map((app) => ({ id: app.id })) }

export default async function ApplicationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; const app = getApplication(id); if (!app) notFound()
  const index = applicationDetails.findIndex((item) => item.id === app.id)
  const message = `Hello Jyothi Mines & Minerals, I am interested in vermiculite for ${app.title}. Please share the suitable available size, specifications, availability and quotation.`
  const whatsapp = `https://wa.me/919963639482?text=${encodeURIComponent(message)}`
  return <main className="page application-detail-page"><header className="nav"><Link className="brand" href="/"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></Link><nav><Link href="/applications">Applications</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a></nav></header><section className="page-hero"><p className="eyebrow">{app.eyebrow} / APPLICATION</p><h1>{app.title}</h1><p className="lead">{app.short}</p><p>{app.why}</p><div className="detail-actions"><Link className="button primary" href={`/sizes?application=${app.id}`}>See size guidance →</Link><a className="button ghost" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp ↗</a></div></section><section className="detail-material-3d"><ApplicationDetail3D active={index} label={app.title} /></section><section className="page-body application-detail-body"><div className="detail-grid"><article className="info-card"><p className="eyebrow">WHY IT FITS</p><h2>Relevant properties</h2><ul>{app.properties.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="info-card"><p className="eyebrow">WHERE IT IS USED</p><h2>Documented / selected uses</h2><ul>{app.uses.map((item) => <li key={item}>{item}</li>)}</ul></article></div><article className="size-callout"><p className="eyebrow">SIZE MATTERS</p><h2>{app.sizeGuidance}</h2><p>{app.sizeBand}</p><Link className="button primary" href={`/sizes?application=${app.id}`}>See size guidance & enquire →</Link></article><article className="qualification-note"><strong>Qualification note</strong><p>{app.qualification}</p></article><div className="detail-actions"><Link className="button ghost" href="/applications">← All applications</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Ask Jyothi about this application ↗</a></div></section><FloatingContact /></main>
}
