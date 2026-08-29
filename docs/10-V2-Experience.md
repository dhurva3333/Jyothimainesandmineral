---
id: jmm.experience.v2
entity: experience
status: active_v2
source: repository
---

# Jyothi Mines & Minerals — V2 Experience

## Current goal
Make the homepage concise, clear and memorable without turning it into a generic animated corporate site.

## Homepage sequence
1. **Small hero** — briefly explain Jyothi Mines & Minerals and its vermiculite focus.
2. **What is vermiculite?** — a creative Three.js explanation of the layered mineral structure and interlayer water.
3. **Properties** — concise material characteristics.
4. **Applications** — interactive Three.js visuals for the major documented use areas.
5. **Application detail** — clicking an application opens a full explanation page.
6. **Size & enquire** — every application card also links to an application-specific size guide and WhatsApp enquiry.
7. **Persistent contact** — floating WhatsApp, phone and email icons.

## Current interactive components
- `components/VermiculiteExplainer.tsx`: Three.js layered-material visualization.
- `components/ApplicationShowcase.tsx`: Three.js visual for each application plus the two required actions.
- `components/FloatingContact.tsx`: phone, email and WhatsApp contact rail.
- `lib/applicationData.ts`: application explanations, properties, uses and size guidance.
- `app/applications/[id]/page.tsx`: full application explanation.
- `app/applications/[id]/sizes/page.tsx`: size guidance and contextual WhatsApp enquiry.

## Two required application actions
Every application card has:
- **Full explanation** → `/applications/[id]`
- **Sizes & enquire** → `/applications/[id]/sizes`

The size page must end in a contextual WhatsApp enquiry rather than an internal CRM.

## Size-data rule
General industry guidance can explain whether fine, medium or coarse material is normally considered. It must not be represented as a Jyothi specification. The previously discussed Jyothi range of approximately 0.5–1 mm to 4–7 mm is explicitly `USER_REPORTED_UNVERIFIED` until current product data confirms it.

## Contact details for this version
- Phone: +91 99636 39482
- WhatsApp: +91 99636 39482
- Email: vermiculitejyothi@gmail.com

## Confidentiality rule
Do not describe or visualize the factory's proprietary process for making/processing vermiculite. The public site may explain general scientific material behavior and application use, but not Jyothi's manufacturing route or application-specific manufacturing instructions.

## 3D rule
Three.js/React Three Fiber is used where 3D communicates material structure or application context. CSS is not used as a substitute for 3D. CSS remains responsible for layout, typography, responsive behavior and non-3D presentation.

## Content guardrails
- Never invent Jyothi specifications.
- Never invent certifications, customers, capacities or test results.
- Never claim a grade is qualified for an industrial application without verified evidence.
- Keep general science separate from company-specific data.
- Keep the experience useful on mobile and low-power devices.

## Portability
No Vercel, Supabase, GitHub-account or Obsidian dependency is part of the runtime experience. The repository remains the portable source of truth for future AI agents.
