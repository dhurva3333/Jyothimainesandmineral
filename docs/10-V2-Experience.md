---
id: jmm.experience.v2
entity: experience
status: active_v2
source: repository
---

# Jyothi Mines & Minerals — V2 Experience

## Goal
Premium materials-science presentation with fast entry, real vermiculite evidence and selective meaningful 3D. ASUS is a reference for product presentation discipline and interaction quality, not a visual template.

## Homepage sequence
1. Small, immediately understandable Jyothi + vermiculite hero.
2. Creative 3D explanation of vermiculite structure.
3. Real vermiculite macro photography.
4. One shared 3D application explorer.
5. Full application explanation pages.
6. Size guidance and contextual WhatsApp enquiry.
7. Technical/product information.
8. Persistent WhatsApp, phone and email contact.

## Medium rule
- 2D/layout: navigation, typography, hierarchy and straightforward information.
- Photography: real material evidence and credibility.
- 3D: material structure, spatial context, application storytelling and interaction.
- Motion: continuity, hierarchy and feedback.
Do not use 3D merely because it is available.

## Scroll rule
Native browser scrolling is the baseline. Do not globally hijack scroll. The material story may use a short sticky 3D scene controlled by native scroll progress. Avoid long pinning sequences that make the page feel locked.

## 3D/performance rule
Hero 3D is lightweight. Below-fold 3D is lazy-mounted near the viewport. Applications use one shared Canvas. Keep DPR, geometry, bevels and animation loops controlled. Avoid runtime HDR/CDN dependencies for critical scenes. Every Canvas needs a WebGL fallback and reduced-motion behavior.

## Real material rule
Real vermiculite macro photography is a first-class visual layer. External images must fail gracefully; critical future assets should be repository/CDN controlled.

## Application actions
Every application keeps exactly two primary actions:
- **Full explanation** → `/applications/[id]`
- **Sizes & enquire** → canonical size guidance / contextual WhatsApp path

## Content boundary
Never disclose Jyothi's proprietary manufacturing process or application-specific manufacturing instructions. Never invent specifications, certifications, customers, capacities or test results.

## Acceptance
A visual change is not accepted merely because it compiles. Check first viewport speed, image loading, WebGL runtime behavior, native scrolling, mobile interaction, reduced motion and the intended deployment commit.
