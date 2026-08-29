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

## Current homepage experience
The homepage is intentionally concise:
1. Small Jyothi Mines & Minerals hero that explains the company and vermiculite briefly.
2. Creative Three.js vermiculite explanation showing layered structure and interlayer water.
3. Three.js application visuals for the major use areas.
4. Each application has exactly two primary actions: full explanation and sizes/enquire.
5. Persistent floating WhatsApp, phone and email contact icons.

## Application page model
Every application has:
- [[07-Applications]]-style overview
- Why vermiculite is relevant
- Relevant material properties
- Documented/selected uses
- Application-specific size guidance
- Qualification caveat
- WhatsApp enquiry with application context

## Size-guide model
Size pages explain the practical direction for fine/medium/coarse material and show the previously discussed Jyothi range as unverified until confirmed. They must never turn general industry guidance into a Jyothi specification.

General guidance can be supported by external technical references. For example, forestry/horticulture references support finer grades for seed germination and coarser grades for larger growing containers, while industry sources document finer exfoliated grades in friction linings. These are general application references, not proof that a particular Jyothi grade is qualified.

## 3D rules
- Three.js/React Three Fiber is the source of interactive material visuals.
- CSS is for layout and presentation, not for pretending to be the material simulation.
- 3D must explain the material or application context, not be decorative motion.
- Avoid exposing the factory's proprietary process.
- Conceptual visualizations must never be labelled as laboratory measurements.
- Keep mobile fallbacks and performance safeguards.

## Contact rules
Canonical public contact details supplied for this version:
- Phone: +91 99636 39482
- Email: vermiculitejyothi@gmail.com
- WhatsApp: +91 99636 39482

These should remain centralized or clearly documented if changed later.

## Knowledge links
- [[01-Project-Spec]] → project requirements
- [[02-Architecture]] → implementation decisions
- [[03-Security]] → security controls
- [[04-Content-Rules]] → evidence policy
- [[05-Vermiculite-Knowledge]] → general science
- [[06-Products]] → verified product data
- [[07-Applications]] → application knowledge
- [[08-Deployment]] → portable infrastructure
- [[09-Knowledge-Graph]] → Graphify relationships
- [[10-V2-Experience]] → current interactive experience

## AI handoff rule
If an AI receives this repository without the original conversation, it should read `AGENTS.md`, `README.md`, then the relevant docs before changing code. The repository must contain enough context to continue the project without chat history.

Obsidian and Graphify are documentation representations only. They must never become runtime dependencies.
