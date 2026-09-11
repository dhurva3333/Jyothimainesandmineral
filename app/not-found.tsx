import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="mb-4 text-xs tracking-[0.18em] text-gold">404 · PAGE NOT FOUND</p>
        <h1 className="font-display text-4xl sm:text-5xl">This material is not here.</h1>
        <p className="mt-5 text-text-dark-mute">The page may have moved or the address may be incorrect.</p>
        <Link href="/" className="mt-8 inline-flex rounded-sm bg-gold px-5 py-3 text-sm font-medium text-ink">Return home</Link>
      </div>
    </main>
  );
}
