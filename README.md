# Jyothi Mines & Minerals

Premium B2B vermiculite website.

## Production architecture
- Next.js + React + TypeScript
- Three.js + React Three Fiber for progressive 3D
- GSAP for selective motion
- CSS design system / design tokens
- Vercel deployment
- GitHub source of truth
- Optional Supabase content layer with a complete versioned fallback
- WhatsApp-first enquiries
- No CRM, SRM, ERP, inventory dashboard, or admin panel

## Portability / ownership transfer
Changing GitHub ownership, Vercel project, or Supabase project must require **configuration changes only**, never source-code edits. Provider IDs, database IDs, secrets, generated credentials, and deployment URLs must never be hard-coded into application code.

The application must boot and render without Supabase. If Supabase variables are absent, the site uses the versioned content model in the repository. Use `.env.example` as the configuration contract. Never expose a Supabase service-role key.

## Content integrity
Do not invent Jyothi-specific certifications, laboratory specifications, production capacity, customer names, mine ownership, export markets, or application qualifications. General vermiculite science must remain clearly separate from verified company data.

The manufacturing route is proprietary and is **not** published as a process diagram or operating recipe.

## Security target
High-hardening production baseline targeting >=9/10 after deployment-specific security testing. A numeric score is not claimed until independently tested. Performance, accessibility, and dependency hygiene are release gates too.

## 3D/performance
3D is progressive enhancement. First meaningful content must render without it. Respect reduced-motion preferences, support weak devices with a lightweight fallback, and avoid blocking the main thread with unnecessary assets.

## Commercial conversion
WhatsApp is the primary CTA. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in the deployment environment when the verified company number is available. The code constructs contextual messages; it does not store customer enquiries or require a CRM.
