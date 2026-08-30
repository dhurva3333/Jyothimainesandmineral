# Frontend V3 Rules — selective 3D, fast entry, premium product presentation

This is the implementation contract for future AI/developer changes.

## Governing source
Use `04_AI_Professional_Frontend_Design_Standard.pdf` as the primary frontend design authority. Effects must have a communication purpose; 3D is used for material/product storytelling, not as decoration. The standard requires deliberate hierarchy, responsive recomposition, reduced-motion support, performance-aware assets and render-first review. 

## Approved V3 experience
1. The first viewport must communicate Jyothi Mines & Minerals and vermiculite quickly, with a lightweight hero 3D enhancement.
2. The Jyothi section must feel company-specific rather than like a generic mineral landing page. Never invent company claims.
3. Real vermiculite photography is the visual source of truth for material colour, texture and morphology. 3D must resemble real flaky/layered vermiculite rather than generic blobs.
4. Use 3D selectively: material structure, spatial/product explanation, application context and meaningful interaction. Use 2D/editorial photography when it communicates faster or more accurately.
5. Native browser scrolling remains the baseline. Never globally hijack scroll.
6. Short sticky scroll-linked 3D stories are allowed when the scroll directly explains the material. Avoid long pin sequences and avoid scroll libraries unless measurement proves a need.
7. Application exploration uses one shared Canvas. Applications should enter/exit laterally in the visual hierarchy as the user scrolls, while the document itself remains normally scrollable.
8. Application cards retain exactly two primary actions: Full explanation and Sizes & enquire.
9. Application detail pages retain the 3D visual language, but do not turn every paragraph into an animation.
10. The size guide is one coherent destination. Application-specific links may deep-link into it, but the catalogue remains centralized.
11. Buttons must have clear hover, focus, pressed and disabled/loading states and touch-safe targets.
12. Floating WhatsApp, phone and email controls remain persistent but must never obscure important content.
13. Image loading must fail gracefully. Broken external images must never expose raw alt text as visible design. Critical future imagery should be repository-owned or served by an owned media/CDN system.
14. First-load priority is HTML/text and essential visual content; expensive 3D and noncritical images load progressively.
15. Mobile is designed separately from desktop: camera, object count, typography, controls and scene duration may be recomposed rather than simply scaled down.
16. Every 3D scene needs a fallback and reduced-motion path. No critical information may depend on WebGL.
17. Scroll transitions must work in both directions, including reverse scrolling, fast scrolling, touch scrolling and trackpads.
18. Avoid visually empty pinned space. Every sticky scene must have a deliberate beginning, active state and clean exit into the next section.
19. Do not make the website imitate ASUS literally. Use ASUS and other strong product sites as references for hierarchy, product presentation discipline, photography, interaction quality and transitions only.
20. Do not expose Jyothi's proprietary manufacturing/process route.

## 3D budget
- One lightweight hero Canvas above the fold.
- Below-fold 3D lazy-mounted near the viewport.
- One shared application Canvas.
- Prefer group-level animation instead of a `useFrame` loop on every mesh.
- Keep geometry/bevel/curve counts low.
- Keep DPR controlled around 1–1.3 for the website baseline.
- No critical runtime HDR/CDN environment dependency.
- No decorative particle systems that compete with content.

## Release safety
A visual change is not accepted because it merely compiles. Before any scarce Vercel deployment attempt:
- verify every import and referenced file;
- check JSX/TS syntax, especially inline expressions and style objects;
- run the project's build/type checks where available;
- inspect the intended commit and changed-file list;
- verify Vercel configuration contains only supported fields;
- verify normal Next.js output expectations;
- inspect mobile and desktop rendering;
- test image failures, WebGL fallback, reduced motion and reverse scrolling;
- only then deploy.

Never claim build/runtime/performance/security verification unless evidence exists.
