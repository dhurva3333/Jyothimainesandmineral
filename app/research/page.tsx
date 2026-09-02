import type { Metadata } from "next";
import { getResearchClaims, getResearchSources } from "@/lib/data/repository";
import { ResearchCard } from "@/components/research/research-card";
import { SourceCitation } from "@/components/research/source-citation";
import { SectionHeader } from "@/components/ui/section-header";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";

export const metadata: Metadata = { title: "Research & Evidence", description: "Evidence-graded claims about vermiculite, distinguishing generic, historical and Jyothi-specific data." };
export default async function ResearchPage() { const [{ data: claims, provenance: claimsProvenance }, { data: sources, provenance: sourcesProvenance }] = await Promise.all([getResearchClaims(), getResearchSources()]); return <section className="bg-cream px-5 py-20 text-text-light sm:px-8"><div className="mx-auto max-w-[860px]"><SectionHeader eyebrow="RESEARCH" title="Evidence-Backed Claims" description="Every claim on this site is graded by evidence level and traced to a source where one exists. Generic vermiculite properties are never presented as verified Jyothi measurements."/><section className="mt-12"><h2 className="font-display text-2xl">Claims</h2><div className="mt-4">{claims.map((c)=><ResearchCard key={c.id} claim={c}/>)}</div>{claimsProvenance === "local_demo" && <DemoDataNotice className="mt-4"/>}</section><section className="mt-14"><h2 className="font-display text-2xl">Sources</h2><ul className="mt-4">{sources.map((s)=><SourceCitation key={s.id} source={s}/>)}</ul>{sourcesProvenance === "local_demo" && <DemoDataNotice className="mt-4"/>}</section></div></section>; }
