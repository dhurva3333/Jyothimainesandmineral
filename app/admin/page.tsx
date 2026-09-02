import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

/**
 * Admin shell. Real write access to products/applications/research
 * requires Supabase Auth — this route intentionally refuses to render
 * an editable CMS when no Supabase session exists, rather than faking
 * an admin panel over static local data.
 */
export default async function AdminPage() {
  if (!isSupabaseConfigured()) {
    return (
      <section className="mx-auto max-w-[600px] px-5 py-24 text-center">
        <h1 className="font-display text-2xl">Admin</h1>
        <p className="mt-4 text-text-dark-mute">
          Supabase is not configured in this environment, so the admin CMS has no database to write to.
          Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> (see
          README.md) to enable authenticated admin access.
        </p>
      </section>
    );
  }

  const client = await createSupabaseServerClient();
  const { data: { user } } = client ? await client.auth.getUser() : { data: { user: null } };

  if (!user) {
    redirect("/admin/login" as never);
  }

  const sections = [
    ["/admin/products", "Products & Grades"],
    ["/admin/applications", "Applications"],
    ["/admin/research", "Research Claims & Sources"],
    ["/admin/specifications", "Technical Properties"],
    ["/admin/coa", "Certificates of Analysis"],
    ["/admin/documents", "Documents"],
  ] as const;

  return (
    <section className="mx-auto max-w-[800px] px-5 py-16">
      <h1 className="font-display text-2xl">Admin</h1>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {sections.map(([href, label]) => (
          <Link key={href} href={href as never} className="rounded-sm border border-white/10 p-4 hover:border-gold/40">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
