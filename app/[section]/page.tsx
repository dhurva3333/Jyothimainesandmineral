import { notFound } from 'next/navigation'
import { PageTemplate } from '../../components/site/PageTemplate'
import { sectionContent, topSections } from '../../lib/content'

export const dynamicParams=false
export const revalidate=3600
export function generateStaticParams(){return topSections.map(section=>({section}))}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const{section}=await params;const data=sectionContent[section];if(!data)notFound();return <PageTemplate {...data} dark={section==='applications'||section==='research'}/>} 
