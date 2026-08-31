import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageTemplate, EvidencePanel } from '../../../components/site/PageTemplate'
import { applications } from '../../../lib/content'
export function generateStaticParams(){return applications.map(a=>({id:a.slug}))}
export default async function ApplicationPage({params}:{params:Promise<{id:string}>}){const{id}=await params;const app=applications.find(a=>a.slug===id);if(!app)notFound();return <PageTemplate eyebrow="APPLICATION" title={app.name} lead={app.short} dark><section className="section dark application-detail"><div className="application-detail-grid"><div className="application-large-image"><img src={app.image} alt={`${app.name} vermiculite application reference`}/></div><div><EvidencePanel level={app.evidence} text={app.note}/><h2>Potential use cases</h2><ul className="large-list">{app.uses.map(use=><li key={use}>{use}</li>)}</ul><p className="qualification-note">Qualification rule: an industry use for vermiculite is not automatically a qualification for every Jyothi grade. Confirm current product data and test where the application is performance-critical.</p><Link className="gold-button" href="/contact">Discuss this application <ArrowRight size={15}/></Link></div></div></section></PageTemplate>}
