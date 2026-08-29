import Link from 'next/link'
import { notFound } from 'next/navigation'
import { applicationDetails, getApplication } from '../../../lib/applicationData'

export const dynamicParams = false
export const revalidate = 3600

export function generateStaticParams() {
  return applicationDetails.map((app) => ({ id: app.id }))
}

export default async function ApplicationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const app = getApplication(id)
  if (!app) notFound()
  const message = `Hello Jyothi Mines & Minerals, I am interested in vermiculite for ${app.title}. Please share the suitable available size, specifications, availability and quotation.`
  const whatsapp = `https://wa.me/919963639482?text=${encodeURIComponent(message)}`
  return <main className="page application-detail-page">
    <header className="nav"><Link className="brand" href="/"><span className="mark">J</span><span>JYOTHI <b>MINES & MINERALS</b></span></Link><nav><Link href="/applications">Applications</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Enquire</a></nav></header>
    <section className="page-hero"><p className="eyebrow">{app.eyebrow} / APPLICATION</p><h1>{app.title}</h1><p className="lead">{app.short}</p></section>
    <section className="page-body application-detail-body">
      <article className="detail-intro"><p className="eyebrow">WHY VERMICULITE</p><h2>{app.why}</h2></article>
      <div className="detail-grid">
        <article className="info-card"><h2>Relevant properties</h2><ul>{app.properties.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article className="info-card"><h2>Documented / selected uses</h2><ul>{app.uses.map((item) => <li key={item}>{item}</li>)}</ul></article>
      </div>
      <article className="size-callout"><p className="eyebrow">SIZE MATTERS</p><h2>{app.sizeGuidance}</h2><p>{app.sizeBand}</p><Link className="button primary" href={`/applications/${app.id}/sizes`}>See size guidance & enquire →</Link></article>
      <article className="qualification-note"><strong>Qualification note</strong><p>{app.qualification}</p></article>
      <div className="detail-actions"><Link className="button ghost" href="/applications">← All applications</Link><a className="button primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Ask Jyothi about this application ↗</a></div>
    </section>
  </main>
}
