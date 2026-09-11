"use client";

import Link from "next/link";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">SOMETHING WENT WRONG</p>
        <h1 className="font-display text-4xl sm:text-5xl">We could not load this page.</h1>
        <p className="mt-5 text-text-dark-mute">Please try again. If the problem continues, contact Jyothi Mines &amp; Minerals directly.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => reset()} className="rounded-sm bg-gold px-5 py-3 text-sm font-medium text-ink">Try again</button>
          <Link href="/contact" className="rounded-sm border border-white/20 px-5 py-3 text-sm">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
