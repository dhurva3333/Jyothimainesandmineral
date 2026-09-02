import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { MetricCard } from "@/components/ui/metric-card";
import { ApplicationCard } from "@/components/research/application-card";
import { SpecificationTable } from "@/components/technical/specification-table";
import { getApplications, getTechnicalProperties } from "@/lib/data/repository";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";

export default async function HomePage() {
  const [{ data: applications, provenance: appProvenance }, { data: properties, provenance: propProvenance }] = await Promise.all([getApplications(), getTechnicalProperties()]);
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pb-24 sm:pt-28">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-[13px] tracking-[0.12em] text-gold">PRODDATUR, ANDHRA PRADESH, INDIA</p>
            <h1 className="font-display text-[clamp(40px,6vw,68px)] font-normal leading-[1.04] tracking-tight">Vermiculite.<br />Material with<br />Purpose.</h1>
            <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-text-dark-mute">Exfoliated vermiculite for horticulture, agriculture, industry, construction and specialised applications — engineered for real-world performance, explained with technical clarity.</p>
            <div className="mt-9 flex flex-wrap gap-3.5"><Link href="/products/vermiculite" className="inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-4 text-[14.5px] font-medium text-ink">Discover Vermiculite →</Link><Link href="/contact" className="rounded-sm border border-white/25 px-6 py-4 text-[14.5px]">Talk to Jyothi</Link></div>
          </div>
          <FlakeArt />
        </div>
        <div className="mx-auto mt-20 grid max-w-[1240px] grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"><MetricCard label="Carefully processed" value="Quality Assured" /><MetricCard label="Multiple industries" value="Wide Applications" /><MetricCard label="Reliable & timely" value="Consistent Supply" /><MetricCard label="Support at every step" value="Customer Focused" /></div>
      </section>
      <section className="bg-cream px-5 py-24 text-text-light sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]"><FlakeBlock /><div><SectionHeader eyebrow="WHAT IS VERMICULITE?" title={<>Naturally Layered.<br />Uniquely Versatile.</>} description="Vermiculite is a naturally occurring hydrated mineral that exfoliates when heated, forming lightweight, absorbent flakes with a layered structure. The figures below describe the general behaviour of the material; values specific to Jyothi's processed output are being established through laboratory testing." /><div className="mt-8"><SpecificationTable properties={properties.slice(0, 4)} />{propProvenance === "local_demo" && <DemoDataNotice className="mt-3" />}</div></div></div></section>
      <section className="px-5 py-24 sm:px-8 sm:py-28"><div className="mx-auto max-w-[1240px]"><div className="mb-13 flex flex-wrap items-end justify-between gap-8"><SectionHeader eyebrow="APPLICATIONS" title={<>One Mineral.<br />Many Possibilities.</>} dark /><p className="max-w-[34ch] text-[15px] text-text-dark-mute">From nurturing plants to enhancing industrial processes, vermiculite adapts to your needs.</p></div><div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{applications.map((app) => <ApplicationCard key={app.id} application={app} />)}</div>{appProvenance === "local_demo" && <DemoDataNotice className="mt-6" />}</div></section>
      <section className="border-t border-white/10 px-5 py-24 sm:px-8 sm:py-28"><div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="mb-4 text-[13px] tracking-[0.08em] text-gold">READY TO GET STARTED?</p><h2 className="font-display text-[clamp(30px,4.5vw,46px)] font-normal leading-[1.1]">Let&rsquo;s Build Better<br />Together.</h2><p className="mt-4 max-w-[44ch] text-text-dark-mute">Tell us your requirement and our team will connect with you.</p></div><div className="flex flex-wrap gap-3.5"><a href="https://wa.me/919963639482" className="rounded-sm bg-gold px-6 py-4 text-[14.5px] font-medium text-ink">Enquire on WhatsApp</a><a href="tel:+919963639482" className="rounded-sm border border-white/25 px-6 py-4 text-[14.5px]">Call Us Now</a></div></div></section>
    </>
  );
}

function FlakeArt() { return <div className="relative h-[280px] sm:h-[420px]" aria-hidden="true"><div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_55%,rgba(201,160,92,0.18),transparent_60%)]" />{["top-[40%] left-[8%] w-[230px] h-[60px] -rotate-[8deg]","top-[47%] left-[20%] w-[210px] h-[56px] rotate-[3deg]","top-[55%] left-[6%] w-[250px] h-[64px] -rotate-[4deg]","top-[63%] left-[22%] w-[200px] h-[52px] rotate-[7deg]","top-[70%] left-[14%] w-[180px] h-[48px] -rotate-[10deg]"].map((cls,i)=><div key={i} className={`absolute rounded-sm shadow-[0_14px_30px_rgba(0,0,0,0.45)] ${cls}`} style={{background:"linear-gradient(135deg,#B98A46 0%,#8C6A38 30%,#D9B876 55%,#7C5E32 78%,#C79C58 100%)"}} />)}</div> }
function FlakeBlock() { return <div className="relative aspect-[4/3] overflow-hidden rounded-sm" style={{background:"radial-gradient(circle at 30% 20%, #4a3a20, #201a10 75%)"}} aria-hidden="true">{["top-[22%] left-[20%] w-[60%] h-[18%] -rotate-[6deg]","top-[38%] left-[24%] w-[56%] h-[16%] rotate-[4deg]","top-[52%] left-[18%] w-[62%] h-[19%] -rotate-[3deg]","top-[67%] left-[26%] w-[50%] h-[15%] rotate-[6deg]"].map((cls,i)=><div key={i} className={`absolute rounded-sm ${cls}`} style={{background:"linear-gradient(135deg,#C9A05C 0%,#9C7A44 35%,#E4C480 60%,#8C6A38 100%)"}} />)}</div> }
