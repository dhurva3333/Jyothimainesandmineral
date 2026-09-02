import type { Metadata } from "next";
import { getApplications } from "@/lib/data/repository";
import { ApplicationCard } from "@/components/research/application-card";
import { SectionHeader } from "@/components/ui/section-header";
import { DemoDataNotice } from "@/components/ui/demo-data-notice";

export const metadata: Metadata = {
  title: "Applications",
  description: "Where vermiculite is used: horticulture, agriculture, construction, industrial and more.",
};

export default async function ApplicationsPage() {
  const { data: applications, provenance } = await getApplications();
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-[1240px]">
        <SectionHeader eyebrow="APPLICATIONS" title="Where Vermiculite Is Used" dark />
        <div className="mt-10 grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((a) => (
            <ApplicationCard key={a.id} application={a} />
          ))}
        </div>
        {provenance === "local_demo" && <DemoDataNotice className="mt-6" />}
      </div>
    </section>
  );
}
