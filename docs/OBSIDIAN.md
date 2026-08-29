# Obsidian Knowledge Base

This repository is designed to be understandable inside an Obsidian vault as well as by AI coding agents.

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

## V2 knowledge note
Create `10-V2-Experience.md` as the human-readable design record for the interactive homepage. It should link to:
- [[05-Vermiculite-Knowledge]] for general science
- [[07-Applications]] for documented uses
- [[06-Products]] for verified Jyothi product data
- [[09-Knowledge-Graph]] for Graphify relationships
- [[08-Deployment]] for portable infrastructure

Recommended frontmatter:
```yaml
---
id: jmm.experience.v2
entity: experience
status: v2_experience
source: repository
---
```

## V2 experience principles
- The visitor should understand vermiculite within seconds, then become curious enough to explore.
- 3D is used to explain material behavior, not as decoration.
- The homepage journey is Material → Structure → Properties → Application → Grade considerations → Technical evidence → Enquiry.
- The application explorer starts with the visitor's need rather than company departments.
- The particle-size visualizer is explicitly educational and must never be mistaken for a Jyothi specification.
- Application pages must distinguish documented vermiculite uses from verified Jyothi-grade suitability.
- The factory's confidential processing route must not be exposed by the public experience.
- Mobile and low-power devices require graceful fallbacks; visual quality must not destroy usability.

## Linking model
Use wiki-links to preserve relationships:
- [[01-Project-Spec]] → project requirements
- [[02-Architecture]] → implementation decisions
- [[03-Security]] → security controls
- [[04-Content-Rules]] → evidence policy
- [[05-Vermiculite-Knowledge]] → scientific material knowledge
- [[06-Products]] → verified Jyothi product data
- [[07-Applications]] → application knowledge
- [[08-Deployment]] → GitHub/Vercel/Supabase portability
- [[09-Knowledge-Graph]] → Graphify relationships
- [[10-V2-Experience]] → interactive website experience

## AI handoff rule
If an AI is given this repository without the original conversation, it should first read `AGENTS.md`, then `README.md`, then the relevant `docs/` files. The AI should treat those documents as the project's portable memory.

Do not rely on chat history, a particular ChatGPT account, a particular GitHub account, a particular Vercel account, or a particular Supabase project to understand the project.

## Important distinction
Obsidian is a documentation/knowledge-management representation. It must not become a runtime dependency of the website. The website must continue to build and deploy without Obsidian.
