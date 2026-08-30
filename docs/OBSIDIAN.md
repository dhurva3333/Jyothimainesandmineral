# Obsidian Knowledge Base

This repository is designed to remain understandable inside an Obsidian vault and by AI coding agents. GitHub is the canonical project memory; Obsidian is a portable representation.

## Vault structure
```text
Jyothi Mines & Minerals/
├── 00-Start-Here.md
├── 01-Project-Spec.md
├── 02-Architecture.md
├── 03-Security.md
├── 04-Content-Rules.md
├── 05-Vermiculite-Knowledge.md
├── 06-Products.md
├── 07-Applications.md
├── 08-Deployment.md
├── 09-Knowledge-Graph.md
└── 10-V2-Experience.md
```

## Current approved V3 experience
The frontend follows `04_AI_Professional_Frontend_Design_Standard.pdf` as the governing design standard.

1. The first viewport is company-first and communicates Jyothi Mines & Minerals plus vermiculite quickly.
2. The hero uses lightweight 3D enhancement rather than blocking first paint.
3. Real vermiculite photography is the material visual reference for colour, texture and morphology.
4. Three.js is used only when spatial/material/application storytelling benefits from it.
5. Native browser scrolling is the baseline; scroll is never globally hijacked.
6. Short sticky 3D stories are allowed for explanation, but they must exit cleanly and must not leave large empty pinned areas.
7. Application exploration uses one shared Canvas and side-entering/side-exiting visual choreography as the user scrolls.
8. Each application keeps exactly two primary actions: Full explanation and Sizes & enquire.
9. Application detail pages continue the 3D visual language without animating every piece of text.
10. The size guide is a centralized destination; application links may deep-link to the relevant application/size context.
11. Floating WhatsApp, phone and email controls remain persistent but must not obscure content.
12. Mobile is separately composed: scene complexity, camera, typography, controls and spacing may change by breakpoint.
13. Every 3D scene has a fallback and reduced-motion path.
14. Scroll-linked scenes must behave correctly in both directions and under touch/trackpad/fast scrolling.
15. Broken external images must fail gracefully; critical images should eventually be repository-owned or hosted by an owned media/CDN service.
16. Do not copy ASUS branding or layouts. Use strong product websites only as presentation references.

## Application page model
Every application has:
- overview
- why vermiculite is relevant
- relevant material properties
- documented/selected uses
- application-specific size guidance
- qualification caveat
- WhatsApp enquiry with application context
- a contextual 3D scene where useful

## Size-guide model
Size pages explain the practical direction for fine/medium/coarse material and show the previously discussed Jyothi range as unverified until confirmed. They must never turn general industry guidance into a Jyothi specification.

## 3D rules
- Three.js/React Three Fiber is the source of interactive material visuals.
- CSS is for layout/presentation, not for pretending to be material simulation.
- 3D must explain the material or application context, not be decorative motion.
- Use group-level animation where possible; avoid a separate continuous frame loop for every mesh.
- Keep DPR and geometry budgets controlled.
- Lazy-mount expensive scenes near the viewport.
- No critical information may depend on WebGL.
- Avoid long scroll-pin sequences and global smooth-scroll hijacking.
- Conceptual visualizations must never be labelled as laboratory measurements.
- Keep mobile fallbacks and performance safeguards.

## Contact rules
Canonical public contact details supplied for this version:
- Phone: +91 99636 39482
- Email: vermiculitejyothi@gmail.com
- WhatsApp: +91 99636 39482

These should remain centralized or clearly documented if changed later.

## AI handoff rule
If an AI receives this repository without the original conversation, it should read `AGENTS.md`, `README.md`, then the relevant docs before changing code. The repository must contain enough context to continue the project without chat history.

Obsidian and Graphify are documentation representations only. They must never become runtime dependencies.
