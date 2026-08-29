# Jyothi Mines & Minerals — Graphify Knowledge Graph

Portable, tool-independent knowledge graph. GitHub remains the canonical source of project memory.

## Graph rules
- `GENERAL_SCIENCE` = general vermiculite knowledge, never a Jyothi product claim.
- `JYOTHI_VERIFIED` = company-verified facts only.
- `USER_REPORTED_UNVERIFIED` = project information that must not be displayed as an official specification.
- `EXPERIENCE` = website interaction/design decisions.
- Never expose proprietary manufacturing/process details in the public experience.

## Core nodes
| ID | Type | Name | Status |
|---|---|---|---|
| JMM | company | Jyothi Mines & Minerals | JYOTHI_VERIFIED |
| VERM | material | Vermiculite | GENERAL_SCIENCE |
| EXF | material_state | Exfoliated vermiculite | GENERAL_SCIENCE |
| HORT | application | Horticulture & nursery | GENERAL_SCIENCE |
| AGRI | application | Agricultural inputs | GENERAL_SCIENCE |
| CONST | application | Lightweight construction | GENERAL_SCIENCE |
| FIRE | application | Fire protection | GENERAL_SCIENCE |
| INSUL | application | Thermal insulation | GENERAL_SCIENCE |
| FRICT | application | Friction materials | GENERAL_SCIENCE |
| REFRACT | application | Refractory & foundry | GENERAL_SCIENCE |
| PACK | application | Protective packaging | GENERAL_SCIENCE |
| GRADE | concept | Particle size / grade | GENERAL_SCIENCE |
| JMM_RANGE | product_data | Approx. 0.5–1 mm to 4–7 mm discussed range | USER_REPORTED_UNVERIFIED |
| WA | property | Water retention | GENERAL_SCIENCE |
| AER | property | Porosity/aeration | GENERAL_SCIENCE |
| CEC | property | Cation exchange capacity | GENERAL_SCIENCE |
| LD | property | Low density after exfoliation | GENERAL_SCIENCE |
| THERM | property | Thermal insulation | GENERAL_SCIENCE |
| FIREP | property | Fire resistance | GENERAL_SCIENCE |
| ABS | property | Liquid absorption | GENERAL_SCIENCE |
| WHATSAPP | conversion | WhatsApp enquiry | JYOTHI_VERIFIED_DESIGN |
| PHONE | conversion | Phone call | JYOTHI_VERIFIED_DESIGN |
| EMAIL | conversion | Email enquiry | JYOTHI_VERIFIED_DESIGN |

## Experience nodes
| ID | Type | Name | Status |
|---|---|---|---|
| HOME | experience | Concise homepage | EXPERIENCE |
| MATERIAL_3D | interaction | Three.js layered vermiculite explainer | EXPERIENCE |
| APP_3D | interaction | Three.js application visuals | EXPERIENCE |
| APP_CARD | interaction | Application card | EXPERIENCE |
| APP_DETAIL | page | Full application explanation | EXPERIENCE |
| SIZE_GUIDE | page | Application-specific size guidance | EXPERIENCE |
| CONTACT_RAIL | conversion | Floating WhatsApp/phone/email icons | EXPERIENCE |

## Relationships
```text
JMM --FOCUSES_ON--> VERM
VERM --HAS_STATE--> EXF
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
VERM --USED_IN--> FIRE
VERM --USED_IN--> INSUL
VERM --USED_IN--> FRICT
VERM --USED_IN--> REFRACT
VERM --USED_IN--> PACK
GRADE --INFLUENCES--> APPLICATION_SUITABILITY
APPLICATION_SUITABILITY --REQUIRES--> VERIFIED_PRODUCT_DATA
JMM_RANGE --MUST_BE_CONFIRMED_BY--> JMM
JMM --CONVERTS_VIA--> WHATSAPP
JMM --CONVERTS_VIA--> PHONE
JMM --CONVERTS_VIA--> EMAIL

HOME --INTRODUCES--> VERM
HOME --USES--> MATERIAL_3D
HOME --LEADS_TO--> APP_CARD
APP_CARD --LINKS_TO--> APP_DETAIL
APP_CARD --LINKS_TO--> SIZE_GUIDE
APP_DETAIL --EXPLAINS--> APPLICATION_SUITABILITY
SIZE_GUIDE --EXPLAINS--> GRADE
SIZE_GUIDE --LEADS_TO--> WHATSAPP
CONTACT_RAIL --INCLUDES--> WHATSAPP
CONTACT_RAIL --INCLUDES--> PHONE
CONTACT_RAIL --INCLUDES--> EMAIL
MATERIAL_3D --VISUALIZES--> VERM
APP_3D --VISUALIZES--> APPLICATION_CONTEXT
MATERIAL_3D --MUST_NOT_REVEAL--> FACTORY_PROCESS_DETAILS
APP_DETAIL --MUST_NOT_REVEAL--> FACTORY_PROCESS_DETAILS
```

## Application qualification rule
Showing an application means vermiculite is documented or plausibly used in that field. It does not mean every Jyothi grade is qualified for it. Product recommendations must be based on verified Jyothi data and, where required, customer testing.

## Size rule
Application size guidance is general/industry guidance unless explicitly marked as verified Jyothi data. The previously discussed Jyothi range of approximately 0.5–1 mm to 4–7 mm is stored as `USER_REPORTED_UNVERIFIED` and must be confirmed before being presented as a current catalogue.

## Public-information rule
The website explains what vermiculite is, why its properties matter, where it is used and how to discuss size selection. It does **not** publish the factory's proprietary process for making/processing vermiculite or application-specific manufacturing instructions.

## Portability
Graphify is documentation only. No Vercel, Supabase, GitHub-account or provider IDs belong in the knowledge graph. Replacing accounts must not require rewriting project knowledge.
