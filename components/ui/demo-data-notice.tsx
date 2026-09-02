import { cn } from "@/lib/utils";
export function DemoDataNotice({className}:{className?:string}){return <p className={cn("text-xs text-text-dark-mute/70",className)}>Showing local demo data — connect Supabase to serve live content. See README.md.</p>}
