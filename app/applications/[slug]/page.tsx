import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getApplicationBySlug, getResearchClaims } from "@/lib/data/repository";
import { EvidenceBadge } from "@/components/ui/evidence-badge";
import { ResearchCard } from "@/components/research/research-card";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { data: app } = await getApplicationBySlug(slug);
  if (!app) return {};
  return { title: app.name, description: app.summary };
}

export default async function ApplicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [{ data: application, provenance }, { data: claims }] = await Promise.all([
    getApplicationBySlug(slug),
    getResearchClaims(),
  ]);

  if (!application) notFound();

  const relatedClaims = claims.filter((c) => c.applicationSlug === application.slug);

  return (
    <article className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[860px]">
        <p className="mb-3 text-[13px] tracking-[0.08em] text-gold">APPLICATION</p>
        <h1 className="font-display text-[clamp(32px,5vw,52px)] font-normal">{application.name}</h1>
        <div className="mt-4"><EvidenceBadge level={application.evidence.level} /></div>
        <p className="mt-6 text-[17px] leading-relaxed text-text-dark-mute">{application.description}</p>

        {application.examples.length > 0 && (
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {application.examples.map((ex) => (
              <li key={ex} className="rounded-sm border border-white/10 px-4 py-3 text-sm text-text-dark-mute">
                {ex}
              </li>
            ))}
          </ul>
        )}

        {relatedClaims.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-2xl">Evidence for this application</h2>
            <div className="mt-4">
              {relatedClaims.map((c) => (
                <ResearchCard key={c.id} claim={c} />
              ))}
            </div>
          </section>
        )}

        {provenance === "local_demo" && <DemoDataNotice className="mt-10" />}
      </div>
    </article>
  );
}
