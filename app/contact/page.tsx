import type { Metadata } from "next";
import { QuoteForm } from "@/components/product/quote-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Jyothi Mines & Minerals for vermiculite enquiries and quotations.",
};

export default function ContactPage() {
  return (
    <section className="bg-cream px-5 py-20 text-text-light sm:px-8">
      <div className="mx-auto grid max-w-[1000px] gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-[13px] tracking-[0.08em] text-gold-dim">CONTACT</p>
          <h1 className="font-display text-3xl">Request a Quotation</h1>
          <p className="mt-4 text-text-light-mute">Tell us your requirement and our team will connect with you.</p>
          <div className="mt-8 space-y-2 text-sm text-text-light-mute">
            <p>+91 9963639482</p>
            <p>vermiculite.jyothi@gmail.com</p>
            <p>Proddatur, Andhra Pradesh, India</p>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
