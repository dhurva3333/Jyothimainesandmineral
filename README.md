# Jyothi Mines & Minerals — Vermiculite V3

Premium scientific-industrial vermiculite platform built from the supplied visual references and the existing Jyothi repository.

## Stack
- Next.js 16.3.3 / React 19.2 / TypeScript
- App Router + Server Components
- Tailwind CSS v4 + reusable CSS design system
- Supabase PostgreSQL, Auth and Storage foundation
- React Hook Form + Zod enquiry validation
- Three.js + React Three Fiber + Drei for selective explanatory 3D
- Vitest + Playwright
- ESLint 9 + Prettier
- Vercel-ready

## Route architecture
Top-level routes: `/`, `/vermiculite`, `/products`, `/applications`, `/research`, `/technical`, `/resources`, `/about`, `/contact`, `/admin`.

Nested product routes cover `/products/vermiculite`, `/products/horti-fine`, `/products/horti-medium`, `/products/horti-coarse`.
Application routes cover horticulture, agriculture, construction, industrial, insulation and other.
Research, technical and resource route families are implemented as data-driven dynamic pages so the site can expand without duplicated templates.

## Scientific integrity
The frontend intentionally distinguishes:
- **Verified Jyothi value** — current Jyothi documentation
- **Historical reference** — information retained from supplied/reference material
- **Generic reference** — general vermiculite science
- **Proposed target** — future target, never a measured result
- **Testing required** — no current verified value
- **Unverified** — insufficient evidence

No invented CoA, laboratory result, certification, production capacity or industrial qualification is published.

The three visible horticultural size bands in the supplied reference are retained as historical reference ranges until a current Jyothi specification is attached.

## Supabase setup
1. Create a Supabase project.
2. Run `supabase/migrations/0001_initial.sql` and `0002_storage.sql`.
3. Configure `.env.local` from `.env.example`.
4. Create the first Auth user, then add its UUID to `public.profiles` with `role='admin'` using a secure SQL session.
5. Add genuine product documents, CoAs, images and research sources through the CMS before publishing them.

The public site can render its repository-backed content without Supabase. Enquiry submission and authenticated CMS features require the Supabase environment variables.

## Development
```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm lint
pnpm test
pnpm test:e2e
```

## Visual reference
The supplied screenshots are treated as visual direction and product/brand evidence. Existing reference assets in `public/images/` are used instead of unrelated stock photography. The implementation reproduces the hierarchy, dark/cream palette, gold accents, material-first composition and application/grade structure without copying the page pixel-for-pixel.
