import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Jyothi Mines & Minerals, Proddatur, Andhra Pradesh, India.",
};

export default function AboutPage() {
  return (
    <section className="bg-cream px-5 py-20 text-text-light sm:px-8">
      <div className="mx-auto max-w-[720px]">
        <p className="mb-3 text-[13px] tracking-[0.08em] text-gold-dim">ABOUT US</p>
        <h1 className="font-display text-[clamp(32px,5vw,48px)] font-normal">Jyothi Mines &amp; Minerals</h1>
        <p className="mt-6 text-text-light-mute leading-relaxed">
          Jyothi Mines &amp; Minerals supplies exfoliated vermiculite from Proddatur, Andhra Pradesh, India.
          Detailed company history, certifications and facility information are not yet published on this
          site — this page is intentionally left minimal rather than populated with invented company facts.
          Contact us directly for company documentation.
        </p>
      </div>
    </section>
  );
}
