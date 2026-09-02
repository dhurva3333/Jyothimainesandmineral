import type { Metadata } from "next";
import { getProducts } from "@/lib/data/repository";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeader } from "@/components/ui/section-header";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";

export const metadata: Metadata = { title: "Products", description: "Exfoliated vermiculite grades and products from Jyothi Mines & Minerals." };
export default async function ProductsPage() { const { data: products, provenance } = await getProducts(); return <section className="bg-cream px-5 py-20 text-text-light sm:px-8"><div className="mx-auto max-w-[1240px]"><SectionHeader eyebrow="PRODUCTS" title="Vermiculite Grades" /><div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map((p)=><ProductCard key={p.id} product={p}/>)}</div>{provenance === "local_demo" && <DemoDataNotice className="mt-6"/>}</div></section>; }
