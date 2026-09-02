import type { Metadata } from "next";
import { getTechnicalProperties } from "@/lib/data/repository";
import { SpecificationTable } from "@/components/technical/specification-table";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";
export const metadata: Metadata = { title: "Specifications" };
export default async function SpecificationsPage() { const { data: properties, provenance } = await getTechnicalProperties(); return <section className="bg-cream px-5 py-20 text-text-light sm:px-8"><div className="mx-auto max-w-[900px]"><h1 className="font-display text-3xl">Specifications</h1><div className="mt-8"><SpecificationTable properties={properties}/></div>{provenance === "local_demo" && <DemoDataNotice className="mt-4"/>}</div></section>; }
