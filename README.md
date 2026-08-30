# Jyothi Mines & Minerals — Vermiculite Website

Premium B2B vermiculite website for Jyothi Mines & Minerals, designed around fast product understanding, real material evidence and selective meaningful 3D.

## Current frontend direction
The site uses ASUS and other high-quality product websites as **references for product presentation discipline**: clear hierarchy, strong imagery, concise key information, polished interaction and obvious next actions. It does not copy their branding or proprietary assets.

The frontend design standard is the governing visual standard. Choose 2D, photography, motion or 3D according to communication value and technical cost.

### 3D strategy
- Lightweight 3D hero for the first impression.
- Real vermiculite macro photography for material credibility.
- Lazy-mounted 3D below the fold.
- One shared 3D application Canvas rather than many simultaneous WebGL contexts.
- Native browser scrolling; short sticky 3D scroll stories only where they explain material structure.
- No global scroll hijacking and no long pinning sequences merely for effects.
- WebGL fallbacks and reduced-motion behavior are required.
- No critical runtime HDR/CDN environment dependency.

See `AGENTS.md` and `docs/FRONTEND_V3_RULES.md` before making frontend changes.

## Core content flow
**What is vermiculite → what makes it useful → what grade matters → where it is used → whether Jyothi can supply the relevant material → contact Jyothi.**

## Business rules
- Never invent company specifications, certifications, customer names, production capacity or industrial qualifications.
- Keep general vermiculite science separate from verified Jyothi data.
- Do not expose Jyothi's proprietary manufacturing/process route.
- WhatsApp is the primary commercial conversion path.
- No CRM, ERP, SRM or internal admin system is required for V1.

## Portability
GitHub, Vercel, domains and Supabase accounts may change. Provider IDs and secrets must not be hard-coded. Supabase remains optional and the public website must retain a repository-backed fallback.

## Release discipline
Deployment attempts are scarce. Verify imports, syntax, configuration and build behavior before committing. Prefer one atomic coherent commit. Diagnose exact deployment logs before another broad change.
