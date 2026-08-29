# AI Repository Operating Guide — Jyothi Mines & Minerals

## Purpose
This repository contains the public B2B website for Jyothi Mines & Minerals, focused primarily on vermiculite. An AI or developer arriving with no prior conversation should be able to understand the project from this file and the documents in `docs/`.

## Source of truth hierarchy
1. `README.md` — project overview and non-negotiable architecture rules.
2. `docs/PROJECT_SPEC.md` — detailed product/content specification.
3. `docs/ARCHITECTURE.md` — implementation architecture and portability model.
4. `docs/SECURITY.md` — security model and release gates.
5. `docs/CONTENT_RULES.md` — evidence and claim rules.
6. `docs/KNOWLEDGE_GRAPH.md` — Graphify/knowledge-graph representation of the project.
7. `docs/OBSIDIAN.md` — Obsidian-compatible knowledge-base structure.
8. Application source code — implementation of the above.

If code conflicts with a documented requirement, inspect the code and fix the implementation unless the documentation is explicitly marked historical. Never silently invent missing business facts.

## Core product principle
Teach the visitor in this order:
**What is vermiculite → what makes it useful → what grade matters → where it is used → whether Jyothi can supply the relevant material → contact Jyothi.**

## Non-negotiable business/content rules
- Never invent Jyothi-specific certifications, laboratory specifications, production capacity, customer names, mine ownership, export markets, or industrial qualifications.
- Keep general vermiculite science separate from verified Jyothi company data.
- Industry/application information must not be interpreted as proof that every Jyothi grade is qualified for that application.
- Manufacturing/process details supplied internally are not automatically public website content.
- WhatsApp is the primary commercial conversion path.
- No CRM, ERP, SRM, inventory dashboard, or unnecessary admin system in V1.

## Portability rule
GitHub ownership, Vercel projects, domains, Supabase projects, and deployment environments may change. The source code must remain portable.

Provider-specific IDs, database IDs, deployment URLs, generated credentials, and secrets must never be hard-coded. Provider changes should require environment/configuration changes, not source-code surgery.

Supabase is optional. The website must have a deterministic repository-backed fallback so removal, replacement, outage, or account transfer of Supabase does not make the public site unusable.

Never expose a Supabase service-role key in browser code.

## AI modification protocol
Before changing code:
1. Read this file.
2. Read the relevant `docs/` file.
3. Inspect the existing implementation.
4. Preserve portability and fallback behavior.
5. Run type/build/lint checks where the environment permits.
6. Do not claim a build or security score was verified if it was not actually tested.
7. Document material architectural changes.

## Security target
Target a high-hardening production baseline equivalent to >=9/10 only after deployment-specific testing. This is a target, not a certification.

## Knowledge systems
`docs/KNOWLEDGE_GRAPH.md` provides a Graphify-friendly graph model using stable entity IDs and relationships. `docs/OBSIDIAN.md` defines a Markdown vault structure with wiki-links and frontmatter. These are documentation/knowledge representations; they are not runtime dependencies.

## Safe default
When uncertain, prefer a simple, portable, static implementation over introducing a new service or dependency.
