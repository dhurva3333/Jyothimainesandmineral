# Jyothi Vermiculite — Website

Next.js 16 / React 19 / TypeScript / Tailwind CSS v4 product and knowledge platform for
Jyothi Mines & Minerals' exfoliated vermiculite business.

## Status: what is real vs. not connected

This codebase is complete and locally runnable. It is **not deployed** and **not connected to
a live Supabase project** — those require credentials only you can provide. Here's exactly
what that means:

| Layer | Status |
|---|---|
| Next.js app, routes, components | Real, complete, runs locally with `pnpm dev` |
| Local/demo data (`lib/data/mock-data.ts`) | Real fallback data, clearly labelled in the UI as "Demo data" wherever it's used |
| Supabase schema (`supabase/migrations/0001_init.sql`) | Real SQL, not yet applied to any database |
| Supabase client/repository code | Real integration code, inert until env vars are set |
| Authentication / Admin CMS | Real Supabase Auth wiring + route protection; no admin UI forms are built yet beyond navigation shell, since there's nothing to authenticate against without a project |
| 3D particle visualizer | Real Three.js/R3F scene, lazy-loaded, with reduced-motion and no-JS fallbacks |
| Tests | Real Vitest unit tests (evidence logic, contact schema) and Playwright e2e specs; **not run in this environment** — see below |
| Deployment | Not deployed anywhere. Vercel-ready; see Deployment section |

## Getting started

```bash
pnpm install
cp .env.example .env.local   # fill in Supabase credentials, or leave blank for demo mode
pnpm dev
```

Without Supabase credentials, every data-driven page renders from `lib/data/mock-data.ts`
and shows a small "Showing local demo data" notice. This is intentional — the site should
never present demo data as if it came from a live database.

## Setting up Supabase

1. Create a project at supabase.com.
2. Run the migration:
   ```bash
   supabase link --project-ref <your-ref>
   supabase db push
   ```
   (or paste `supabase/migrations/0001_init.sql` into the SQL editor).
3. Set `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`.
4. Create an admin user in Supabase Auth — any authenticated user currently has admin write
   access per the RLS policies in the migration; tighten this with a `role` claim or a
   dedicated `admins` table before going live.

## Scientific/content integrity rules encoded in this codebase

- Every technical claim carries an `EvidenceLevel` (`types/domain.ts`), rendered via
  `<EvidenceBadge>`. Nothing with `generic_reference`, `proposed`, `unverified`, `historical`,
  or `contradicted` status is displayed as a confirmed Jyothi measurement.
- `TechnicalProperty.jyothiValue` is `string | null` on purpose — `null` renders as
  "Not independently verified" rather than being coalesced to a fake number.
- No CoA data exists in `mock-data.ts`; `/technical/coa` explicitly states none is published
  rather than fabricating one.
- `/about` does not invent company history, certifications, or facility details.

## Testing

```bash
pnpm typecheck   # tsc --noEmit
pnpm lint        # eslint
pnpm test        # vitest unit tests
pnpm test:e2e    # playwright — requires `pnpm dev` running / browsers installed
```

**Honesty note on this build:** in the environment that generated this codebase, `pnpm
install` was run against the public npm registry and `next build` / `tsc` were used to check
the code compiles (see the message accompanying this repo for the actual output). Playwright
browser binaries were not installed, so the e2e suite has not been executed — treat it as
written-but-unverified until you run it yourself.

## Project structure

See `app/`, `components/`, `lib/`, `types/`, `supabase/migrations/`. Route list matches the
originally specified information architecture (products, applications, research, technical,
resources, about, contact, admin) — some resource/download subpages are stubbed as "coming
soon" rather than populated with placeholder files that don't exist yet.

## Deployment (not yet performed)

```bash
vercel link
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
vercel deploy --prod
```
