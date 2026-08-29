# Jyothi Mines & Minerals — Graphify Knowledge Graph

This document is the tool-independent, Graphify-friendly knowledge graph for the project. It is Markdown so it remains portable and does not require an external graph database.

## Graph rules
- Stable conceptual IDs are used instead of provider/project IDs.
- Relationships describe meaning, not implementation accidents.
- `GENERAL_SCIENCE` means general vermiculite knowledge and is not a Jyothi product claim.
- `JYOTHI_VERIFIED` contains only company-verified facts.
- `USER_REPORTED_UNVERIFIED` must never be displayed as an official specification.
- `V2_EXPERIENCE` describes website interaction/design decisions, not scientific claims.

## Core nodes
| ID | Type | Name | Status |
|---|---|---|---|
| JMM | company | Jyothi Mines & Minerals | JYOTHI_VERIFIED |
| VERM | material | Vermiculite | GENERAL_SCIENCE |
| EXF | material_state | Exfoliated vermiculite | GENERAL_SCIENCE |
| HORT | industry | Horticulture & nursery | GENERAL_SCIENCE |
| AGRI | industry | Agriculture | GENERAL_SCIENCE |
| CONST | industry | Construction | GENERAL_SCIENCE |
| INSUL | industry | Thermal insulation | GENERAL_SCIENCE |
| FIRE | industry | Fire protection | GENERAL_SCIENCE |
| FRICT | industry | Friction materials | GENERAL_SCIENCE |
| REFRACT | industry | Refractory/high-temperature | GENERAL_SCIENCE |
| PACK | industry | Protective packaging | GENERAL_SCIENCE |
| COAT | industry | Coatings/fillers | GENERAL_SCIENCE |
| GRADE | concept | Particle size / grade | GENERAL_SCIENCE |
| WA | property | Water retention | GENERAL_SCIENCE |
| AER | property | Porosity/aeration | GENERAL_SCIENCE |
| CEC | property | Cation exchange capacity | GENERAL_SCIENCE |
| LD | property | Low density after exfoliation | GENERAL_SCIENCE |
| THERM | property | Thermal insulation | GENERAL_SCIENCE |
| FIREP | property | Fire resistance | GENERAL_SCIENCE |
| ABS | property | Liquid absorption | GENERAL_SCIENCE |
| WHATSAPP | conversion | WhatsApp enquiry | JYOTHI_VERIFIED_DESIGN |

## V2 experience nodes
| ID | Type | Name | Status |
|---|---|---|---|
| V2 | experience | Interactive materials-science homepage | V2_EXPERIENCE |
| MATERIAL_STORY | experience | Material-first story | V2_EXPERIENCE |
| STRUCTURE_VIEW | experience | Layered/exfoliated conceptual visualization | V2_EXPERIENCE |
| MATERIAL_EXPLORER | interaction | Application-first material explorer | V2_EXPERIENCE |
| PARTICLE_EXPLORER | interaction | Particle-size visual explainer | V2_EXPERIENCE |
| APP_UNIVERSE | interaction | Application universe/orbit | V2_EXPERIENCE |
| TECH_EVIDENCE | content | Technical evidence gateway | V2_EXPERIENCE |
| GRADE_SELECTION | interaction | Application-to-grade pathway | V2_EXPERIENCE |
| FALLBACK | reliability | 2D/static fallback | V2_EXPERIENCE |

## Infrastructure nodes
| ID | Type | Name | Status |
|---|---|---|---|
| SUPABASE | service | Supabase | OPTIONAL_RUNTIME |
| VERCEL | service | Vercel | DEPLOYMENT |
| GITHUB | service | GitHub | SOURCE_CONTROL |
| OBSIDIAN | knowledge_tool | Obsidian representation | DOCUMENTATION_ONLY |
| GRAPHIFY | knowledge_tool | Graphify-compatible representation | DOCUMENTATION_ONLY |

## Relationships
```text
JMM --FOCUSES_ON--> VERM
VERM --CAN_BE_TRANSFORMED_TO--> EXF
EXF --HAS_PROPERTY--> LD
EXF --HAS_PROPERTY--> AER
EXF --HAS_PROPERTY--> WA
VERM --HAS_PROPERTY--> CEC
EXF --HAS_PROPERTY--> THERM
EXF --HAS_PROPERTY--> FIREP
EXF --HAS_PROPERTY--> ABS
VERM --USED_IN--> HORT
VERM --USED_IN--> AGRI
VERM --USED_IN--> CONST
VERM --USED_IN--> INSUL
VERM --USED_IN--> FIRE
VERM --USED_IN--> FRICT
VERM --USED_IN--> REFRACT
VERM --USED_IN--> PACK
VERM --USED_IN--> COAT
GRADE --INFLUENCES--> APPLICATION_SUITABILITY
APPLICATION_SUITABILITY --REQUIRES--> VERIFIED_PRODUCT_DATA
JMM --CONVERTS_ENQUIRIES_VIA--> WHATSAPP
JMM --DEPLOYED_ON--> VERCEL
JMM --SOURCE_CONTROLLED_BY--> GITHUB

V2 --EXPLAINS--> MATERIAL_STORY
MATERIAL_STORY --LEADS_TO--> STRUCTURE_VIEW
STRUCTURE_VIEW --LEADS_TO--> MATERIAL_EXPLORER
MATERIAL_EXPLORER --USES--> APPLICATION_SUITABILITY
MATERIAL_EXPLORER --LEADS_TO--> GRADE_SELECTION
GRADE_SELECTION --LEADS_TO--> TECH_EVIDENCE
TECH_EVIDENCE --LEADS_TO--> WHATSAPP
V2 --INCLUDES--> PARTICLE_EXPLORER
V2 --INCLUDES--> APP_UNIVERSE
V2 --REQUIRES--> FALLBACK
V2 --MUST_NOT_REVEAL--> FACTORY_PROCESS_DETAILS
```

## Application qualification rule
A relationship such as `VERM --USED_IN--> FRICT` means vermiculite is documented in friction-material applications. It does not mean JMM has qualified every product/grade for brake-pad formulations.

For a Jyothi-specific recommendation, verified product data must link the actual grade to the requested application.

## V2 content rule
The interactive experience may visualize general material behavior, but conceptual graphics must not be presented as laboratory measurements or Jyothi-specific specifications. The particle-size control is an educational visualizer, not a product specification.

## Portability rule
Graphify knowledge contains conceptual service nodes rather than Vercel/Supabase project IDs. Replacing accounts or ownership must not require rewriting the knowledge graph.
