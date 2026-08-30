# Frontend V3 Rules — selective 3D, fast entry, premium product presentation

This is the implementation contract for future AI/developer changes.

## Design decision
Use ASUS and other high-quality product websites as references for product hierarchy, photography, concise key information, interaction quality and clear next actions. Do not copy their branding, proprietary assets or layout.

## Medium selection
- 2D for navigation, typography, information hierarchy and straightforward explanation.
- Real macro photography for actual vermiculite evidence, texture, colour and credibility.
- Three.js/R3F only where 3D improves material understanding, spatial context, product/application storytelling or interaction.
- Motion only where it communicates continuity, hierarchy or feedback.

## Scroll
- Native browser scrolling is the baseline.
- Never globally hijack scroll.
- Do not create very long GSAP pin sequences.
- A short sticky 3D story is allowed when scroll directly controls the explanation.
- Scroll-linked 3D must remain smooth on mobile and have a reduced-motion path.

## 3D budget
- One lightweight hero Canvas above the fold.
- Below-fold 3D is lazy-mounted near the viewport.
- Application exploration uses one shared Canvas.
- Prefer group-level animation instead of a `useFrame` loop on every mesh.
- Keep geometry/bevel/curve counts low.
- Keep DPR controlled around 1–1.35 for the website baseline.
- No critical runtime HDR/CDN environment dependency.
- Every Canvas needs a fallback.

## Imagery
Real vermiculite macro imagery is a primary visual layer. External image hosts must fail gracefully. Critical future images should be stored in the repository or an owned media/CDN service.

## UX
Application cards keep exactly two primary actions: Full explanation and Sizes & enquire. Floating WhatsApp, phone and email remain available. Buttons need clear focus/pressed/hover states and touch-safe targets.

## Performance acceptance
A change is not accepted because it merely compiles. Check first viewport speed, image loading, WebGL runtime behavior, native scrolling, mobile interaction, reduced motion and the intended deployment commit.

## Content boundary
Never expose Jyothi's proprietary manufacturing process. Never invent specifications, certifications, customer qualifications or laboratory data.
