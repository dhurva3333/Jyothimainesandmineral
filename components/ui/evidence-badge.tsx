import { classifyEvidence } from "@/lib/validation/evidence";
import type { EvidenceLevel } from "@/types/domain";
import { cn } from "@/lib/utils";
const TONE_CLASSES:Record<string,string>={strong:"bg-[#6fae63]/15 text-[#9fc79a]",moderate:"bg-gold/15 text-gold",proposed:"bg-text-dark-mute/15 text-text-dark-mute",unverified:"bg-[#b0524a]/15 text-[#e0938c]"};
export function EvidenceBadge({level,className}:{level:EvidenceLevel;className?:string}){const{label,tone}=classifyEvidence(level);return <span className={cn("inline-block w-fit rounded-full px-2.5 py-1 text-[11px] tracking-wide",TONE_CLASSES[tone],className)}>{label}</span>}
