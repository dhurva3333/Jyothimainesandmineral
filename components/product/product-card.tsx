import Link from "next/link";
import type { Product } from "@/types/domain";
import { CoaBadge } from "@/components/product/coa-badge";
export function ProductCard({product}:{product:Product}){return <Link href={`/products/${product.slug}` as never} className="group block rounded-sm border border-cream-line bg-white p-6"><div className="mb-4 aspect-[4/3] rounded-sm bg-[radial-gradient(circle_at_30%_20%,#4a3a20,#201a10_75%)]"/><h3 className="font-display text-xl text-text-light">{product.name}</h3><p className="mt-1 text-sm leading-relaxed text-text-light-mute">{product.shortDescription}</p><div className="mt-4 flex items-center justify-between"><span className="text-sm text-gold-dim">View product →</span><CoaBadge available={product.coaAvailable}/></div></Link>}
