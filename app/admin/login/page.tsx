import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin Login" };

// Real sign-in wiring (Supabase Auth email/password or magic link)
// belongs here once Supabase credentials are configured; kept as a
// stub so the route exists and the redirect from /admin resolves.
export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-[420px] px-5 py-24 text-center">
      <h1 className="font-display text-2xl">Admin Sign In</h1>
      <p className="mt-4 text-text-dark-mute">
        Authentication is handled by Supabase Auth. Configure your Supabase project and this form will accept
        real credentials — see README.md for setup.
      </p>
    </section>
  );
}
