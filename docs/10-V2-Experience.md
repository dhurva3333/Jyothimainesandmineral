---
id: jmm.experience.v2
entity: experience
status: v2_experience
source: repository
---

# Jyothi Mines & Minerals — V2 Experience

## Goal
Turn the homepage from a polished brochure into an interactive materials-science journey that makes a visitor understand vermiculite quickly and gives them a reason to continue exploring.

## Experience sequence
1. **Material arrival** — vermiculite is the hero, not a generic corporate claim.
2. **Structure** — explain the layered mineral and conceptual exfoliation behavior without exposing the factory's confidential process.
3. **Properties** — connect structure to lightweight, porous, moisture and thermal characteristics.
4. **Application explorer** — let the visitor begin with the job they need to solve.
5. **Application universe** — visually connect vermiculite to documented application areas.
6. **Grade selection** — explain why particle size/specification matters without inventing Jyothi values.
7. **Technical evidence** — route serious buyers toward verified data and documents.
8. **WhatsApp enquiry** — make commercial contact the natural final step.

## Interactive components
- `components/VermiculiteScene.tsx`: defensive WebGL hero visualization.
- `components/MaterialExplorer.tsx`: application-first material explorer and educational particle-size visualizer.
- `app/v2.module.css`: V2 visual system, responsive layouts and material-science motion.

## Scientific/content guardrails
- General vermiculite behavior is educational content, not a Jyothi product specification.
- The particle-size slider is a visual concept only.
- Never claim a Jyothi grade is qualified for an application without verified product/customer data.
- Never expose the confidential factory processing route.
- Never invent laboratory values, certifications, customers, capacity or performance claims.

## UX requirements
- First-screen comprehension in seconds.
- Interaction must add understanding, not friction.
- WhatsApp remains easy to reach.
- Touch works without hover.
- Reduced-motion and WebGL fallbacks remain supported.
- Low-power devices should receive a useful experience even if rich 3D is reduced.

## Design rationale
The V2 direction follows a material-storytelling model: interactive 3D and scroll/interaction should reveal meaning progressively instead of acting as decoration. Real-world interactive product experiences commonly use rotation, zoom, hotspots, guided scenes and material exploration to make complex products easier to understand; this project adapts that pattern to vermiculite while keeping scientific and company-claim boundaries explicit.

## Portability
V2 must not introduce account-specific infrastructure. Obsidian and Graphify are documentation representations only. GitHub remains the canonical source of project memory; Vercel and Supabase remain replaceable infrastructure.
