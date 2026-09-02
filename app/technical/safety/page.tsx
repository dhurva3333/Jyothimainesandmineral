import type { Metadata } from "next";

export const metadata: Metadata = { title: "Safety" };

export default function SafetyPage() {
  return (
    <section className="bg-cream px-5 py-20 text-text-light sm:px-8">
      <div className="mx-auto max-w-[720px]"><h1 className="font-display text-3xl">Safety & Handling</h1><ul className="mt-6 space-y-4 text-text-light-mute"><li>Vermiculite is generally regarded as chemically inert and low-hazard when handled correctly.</li><li>As with any fine mineral particulate, avoid prolonged inhalation of dust; use ventilation and appropriate PPE during bagging, mixing or pouring.</li><li>A product-specific Safety Data Sheet (SDS) is not yet published for Jyothi vermiculite — this page provides general handling guidance only, not a substitute for one.</li></ul></div>
    </section>
  );
}
