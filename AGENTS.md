# AI Repository Operating Guide — Jyothi Mines & Minerals

## Purpose
This repository contains the public B2B website for Jyothi Mines & Minerals, focused primarily on vermiculite. An AI arriving without the original conversation must be able to understand and safely continue the project from this file and `docs/`.

## Source of truth hierarchy
1. `README.md`
2. `docs/PROJECT_SPEC.md`
3. `docs/ARCHITECTURE.md`
4. `docs/SECURITY.md`
5. `docs/CONTENT_RULES.md`
6. `docs/10-V2-Experience.md`
7. `docs/FRONTEND_V3_RULES.md`
8. `docs/KNOWLEDGE_GRAPH.md`
9. `docs/OBSIDIAN.md`
10. Source code

Never silently invent missing business facts.

## Core product principle
Teach the visitor in this order:
**What is vermiculite → what makes it useful → what grade matters → where it is used → whether Jyothi can supply the relevant material → contact Jyothi.**

## Business/content rules
- Never invent Jyothi-specific certifications, laboratory specifications, production capacity, customer names, mine ownership, export markets or industrial qualifications.
- Keep general vermiculite science separate from verified Jyothi data.
- Do not imply that every Jyothi grade is qualified for every documented application.
- Do not publish or visualize Jyothi's proprietary manufacturing/process route.
- WhatsApp is the primary commercial conversion path.
- No CRM, ERP, SRM, inventory dashboard or unnecessary admin system in V1.

## Frontend rule
Use `04_AI_Professional_Frontend_Design_Standard.pdf` as the governing frontend design standard. Design hierarchy before decoration. Choose 2D, photography, motion or 3D according to communication value and technical cost. Professional 3D means controlled composition, lighting, depth, motion, interaction and performance — not maximum effects.

## 3D and scroll rules
- ASUS and other high-quality product websites are references for product presentation discipline, not templates to copy.
- The first viewport must become understandable quickly.
- Hero 3D is lightweight.
- Below-fold 3D is lazy-mounted near the viewport.
- Application exploration uses one shared Canvas rather than many simultaneous WebGL contexts.
- Native browser scrolling is the baseline; do not globally hijack scroll.
- Short sticky scroll-linked 3D stories are allowed when they explain something.
- Avoid long GSAP ScrollTrigger pin sequences and avoid Lenis unless a measured requirement proves it helps without scroll conflicts.
- Keep mesh count, bevel/curve complexity, DPR and per-object animation loops controlled.
- No critical runtime HDR/CDN environment dependency.
- Every WebGL scene needs a fallback and reduced-motion behavior.
- Real vermiculite macro photography is evidence and identity; do not replace it with generic 3D blobs.

## Performance/release safety
Deployment attempts are scarce. Before committing:
1. Verify every import path and referenced file.
2. Check JSX/TS syntax, especially inline expressions, style objects, template literals and arrays.
3. Check Vercel configuration for supported fields only.
4. Verify normal Next.js output expectations; never invent a `public` output directory for a normal Next.js app.
5. Prefer one atomic coherent commit rather than partial broken commits.
6. Run type/build/lint checks where possible.
7. Inspect the rendered result on mobile and desktop when possible.
8. Diagnose exact deployment logs before another broad change.
9. Never claim build/runtime/performance/security verification unless actually performed.

## Portability
GitHub, Vercel, domains and Supabase accounts may change. Provider IDs, deployment URLs, generated credentials and secrets must not be hard-coded. Supabase is optional and the public site must have a repository-backed fallback. Never expose a Supabase service-role key in browser code.

## Knowledge systems
Graphify and Obsidian are documentation representations only and never runtime dependencies. Keep them synchronized with material architectural changes so another AI can understand the repository without chat history.
