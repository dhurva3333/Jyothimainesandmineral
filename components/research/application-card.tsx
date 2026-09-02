import Link from "next/link";
import type { Application } from "@/types/domain";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
export function ApplicationCard({application}:{application:Application}){return <Link href={`/applications/${application.slug}` as never} className="flex min-h-[230px] flex-col justify-end bg-ink p-7"><div className="mb-14 flex h-[38px] w-[38px] items-center justify-center rounded-full border border-gold text-gold">•</div><h3 className="font-display text-xl">{application.name}</h3><p className="mt-2 text-[13.5px] leading-relaxed text-text-dark-mute">{application.summary}</p><EvidenceBadge level={application.evidence.level} className="mt-3.5"/></Link>}
