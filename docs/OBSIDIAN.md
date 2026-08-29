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
└── 09-Knowledge-Graph.md
```

## Recommended frontmatter

Every Obsidian note should use stable metadata, for example:

```yaml
---
id: jmm.application.horticulture
entity: application
status: general_science
source: project-spec
---
```

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
- [[09-Knowledge-Graph]] → graph relationships

## AI handoff rule

If an AI is given this repository without the original conversation, it should first read `AGENTS.md`, then `README.md`, then the relevant `docs/` files. The AI should treat those documents as the project's portable memory.

Do not rely on chat history, a particular ChatGPT account, a particular GitHub account, a particular Vercel account, or a particular Supabase project to understand the project.

## Important distinction

Obsidian is a documentation/knowledge-management representation. It must not become a runtime dependency of the website. The website must continue to build and deploy without Obsidian.
