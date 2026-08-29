# Jyothi Mines & Minerals — Graphify Knowledge Graph

This document is a tool-independent, Graphify-friendly knowledge graph. It is deliberately stored as Markdown so no external graph database is required.

## Graph rules
- Stable IDs are used instead of provider IDs.
- Relationships describe meaning, not implementation accidents.
- `GENERAL_SCIENCE` means general vermiculite knowledge and is not a Jyothi product claim.
- `JYOTHI_VERIFIED` must only contain facts verified by the company.
- `USER_REPORTED_UNVERIFIED` must never be displayed as an official specification.

## Nodes

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
| GRADE | concept | Particle size / grade | GENERAL_SCIENCE |
| WA | property | Water retention | GENERAL_SCIENCE |
| AER | property | Porosity/aeration | GENERAL_SCIENCE |
| CEC | property | Cation exchange capacity | GENERAL_SCIENCE |
| LD | property | Low density after exfoliation | GENERAL_SCIENCE |
| THERM | property | Thermal insulation | GENERAL_SCIENCE |
| FIREP | property | Fire resistance | GENERAL_SCIENCE |
| ABS | property | Liquid absorption | GENERAL_SCIENCE |
| WHATSAPP | conversion | WhatsApp enquiry | JYOTHI_VERIFIED_DESIGN |
| SUPABASE | service | Supabase | OPTIONAL_RUNTIME |
| VERCEL | service | Vercel | DEPLOYMENT |
| GITHUB | service | GitHub | SOURCE_CONTROL |

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
GRADE --DETERMINES--> APPLICATION_SUITABILITY
APPLICATION_SUITABILITY --REQUIRES--> VERIFIED_PRODUCT_DATA
JMM --CONVERTS_ENQUIRIES_VIA--> WHATSAPP
JMM --MAY_USE--> SUPABASE
JMM --DEPLOYED_ON--> VERCEL
JMM --SOURCE_CONTROLLED_BY--> GITHUB
```

## Application qualification rule
A graph relationship such as `VERM --USED_IN--> FRICT` means vermiculite is documented in friction-material applications. It does **not** mean `JMM` has qualified every product/grade for brake-pad formulations.

For a Jyothi-specific recommendation, the graph must contain verified product data linking the actual grade to the requested application.

## Portability rule
The graph deliberately contains conceptual service nodes rather than project IDs. Replacing Supabase, Vercel, GitHub ownership, or another account must not require rewriting the conceptual knowledge graph.
