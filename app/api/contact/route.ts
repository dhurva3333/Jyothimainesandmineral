import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/contact";
import { createSupabaseServerClient, isSupabaseConfigured } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    console.warn("[contact] Supabase not configured; enquiry was not persisted:", parsed.data);
    return NextResponse.json(
      { ok: true, persisted: false, note: "Received, but not stored — Supabase is not configured in this environment." },
      { status: 200 }
    );
  }

  const client = await createSupabaseServerClient();
  if (!client) {
    return NextResponse.json({ ok: true, persisted: false }, { status: 200 });
  }

  const { error } = await client.from("contacts").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone ?? null,
    company: parsed.data.company ?? null,
    application: parsed.data.application,
    message: parsed.data.message,
  });

  if (error) {
    console.error("[contact] Failed to persist enquiry:", error);
    return NextResponse.json({ error: "Could not save enquiry" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, persisted: true }, { status: 200 });
}
