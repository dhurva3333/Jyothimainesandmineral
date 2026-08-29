export type ApplicationDetail = {
  id: string
  title: string
  eyebrow: string
  short: string
  why: string
  properties: string[]
  uses: string[]
  sizeGuidance: string
  sizeBand: string
  qualification: string
}

/**
 * Application guidance is general/industry guidance, not a Jyothi product specification.
 * Jyothi's previously discussed supply range is approximately 0.5–1 mm at the fine end
 * through approximately 4–7 mm at the coarse end; exact current availability must be confirmed.
 */
export const applicationDetails: ApplicationDetail[] = [
  {
    id: 'horticulture', title: 'Horticulture & Nursery', eyebrow: 'GROWING MEDIA',
    short: 'Seed germination, propagation, rooting and growing-media blends.',
    why: 'Vermiculite is valued in horticulture for its light, porous structure and ability to hold water and nutrients while maintaining a useful root-zone environment.',
    properties: ['Moisture retention', 'Aeration', 'Lightweight structure', 'Cation exchange capacity'],
    uses: ['Seed germination', 'Seed covering', 'Propagation', 'Rooting cuttings', 'Potting mixes', 'Nursery media', 'Container growing'],
    sizeGuidance: 'For seed trays and small-cell propagation, fine material is generally preferred. Coarser material is used in larger growing-media blends where more structure and aeration are desired.',
    sizeBand: 'General guide: fine ≈ 0.5–1 mm; medium/coarse should be selected to suit the mix. Confirm the exact Jyothi grade before ordering.',
    qualification: 'Use horticultural-grade material appropriate to the crop and growing system. Do not treat this guide as a guaranteed Jyothi specification.'
  },
  {
    id: 'agriculture', title: 'Agricultural Inputs', eyebrow: 'AGRICULTURE',
    short: 'Moisture management and selected carrier/formulation applications.',
    why: 'Vermiculite can contribute lightweight structure, moisture management and ion-retention characteristics in selected agricultural formulations.',
    properties: ['Moisture retention', 'Lightweight carrier', 'Porosity', 'CEC'],
    uses: ['Soil amendment', 'Fertilizer carrier', 'Selected agricultural formulations', 'Moisture-management applications'],
    sizeGuidance: 'Fine to medium material is commonly considered where a carrier or blend needs relatively uniform particles. Larger material may be useful where physical structure is the priority.',
    sizeBand: 'Start with fine/medium grades and specify the required particle distribution. Exact suitability depends on the formulation.',
    qualification: 'Regulatory, formulation and application requirements must be checked by the buyer before use.'
  },
  {
    id: 'construction', title: 'Lightweight Construction', eyebrow: 'BUILDING MATERIALS',
    short: 'Lightweight concrete, plaster, screeds and selected insulation systems.',
    why: 'Exfoliated vermiculite is used as a lightweight, insulating mineral component in selected construction materials.',
    properties: ['Low density', 'Thermal insulation', 'Fire resistance', 'Lightweight aggregate'],
    uses: ['Lightweight concrete', 'Plaster', 'Screeds', 'Insulating mixes', 'Selected acoustic systems'],
    sizeGuidance: 'Medium to coarse particles are often considered where the material is functioning as a lightweight aggregate; the formulation determines the final distribution.',
    sizeBand: 'General direction: medium/coarse. Exact mm range must be matched to the binder system and required density.',
    qualification: 'Construction performance depends on the complete formulation, not vermiculite size alone.'
  },
  {
    id: 'fire', title: 'Fire Protection', eyebrow: 'FIRE PERFORMANCE',
    short: 'Selected fire-protection boards, plasters and mineral systems.',
    why: 'Vermiculite combines low density with thermal stability and fire-resistant behaviour, making it useful in selected fire-protection systems.',
    properties: ['Fire resistance', 'Thermal insulation', 'Low density', 'Mineral stability'],
    uses: ['Fire-protection formulations', 'Fire-resistant plasters', 'Boards and panels', 'Thermal protection systems'],
    sizeGuidance: 'Particle size is formulation-specific. Fine to medium grades may be used where a smooth matrix is required; coarser grades can be used where lightweight aggregate structure is desired.',
    sizeBand: 'Choose by the formulation specification rather than by a generic fire grade. Confirm the required PSD with Jyothi.',
    qualification: 'Fire rating must be demonstrated for the complete tested system. Vermiculite alone is not a fire-rating certification.'
  },
  {
    id: 'insulation', title: 'Thermal Insulation', eyebrow: 'THERMAL',
    short: 'Loose-fill and selected high-temperature insulating applications.',
    why: 'The low density and low thermal conductivity of exfoliated vermiculite make it useful in selected insulation applications.',
    properties: ['Low thermal conductivity', 'Low density', 'Heat resistance', 'Porous structure'],
    uses: ['Loose-fill insulation', 'Thermal fills', 'Insulating mixes', 'High-temperature insulation'],
    sizeGuidance: 'Medium to coarse particles are often attractive for loose-fill applications because they preserve a lightweight porous structure. Fine grades can be useful in formulated insulation systems.',
    sizeBand: 'General direction: medium/coarse for loose-fill; formulation-dependent for bonded systems.',
    qualification: 'Thermal performance must be evaluated for the final density, packing and construction system.'
  },
  {
    id: 'friction', title: 'Friction Materials', eyebrow: 'FRICTION',
    short: 'Selected brake and friction-material formulations.',
    why: 'Finer exfoliated vermiculite is documented as a component of friction materials, where thermal resistance and its flake-like structure can be useful in formulations.',
    properties: ['Thermal resistance', 'Flake morphology', 'Low density', 'Formulation compatibility'],
    uses: ['Brake linings', 'Brake-pad formulations', 'Clutch/friction materials'],
    sizeGuidance: 'Finer grades are generally the starting point for friction formulations. Published technical literature shows that formulation-specific particle limits can be much finer than horticultural grades.',
    sizeBand: 'Start by sharing the formulation PSD requirement. Do not assume the full 0.5–7 mm Jyothi range is appropriate for a friction formulation.',
    qualification: 'Final qualification must be performed by the friction-material manufacturer. Never present a Jyothi grade as automotive-qualified without test evidence.'
  },
  {
    id: 'refractory', title: 'Refractory & Foundry', eyebrow: 'HIGH TEMPERATURE',
    short: 'Insulating refractory and selected high-temperature material systems.',
    why: 'Vermiculite is used in selected refractory and high-temperature systems where lightweight insulation is valuable.',
    properties: ['Thermal insulation', 'Fire resistance', 'Low density', 'High-temperature stability'],
    uses: ['Insulating refractories', 'Insulating concrete', 'High-temperature binders', 'Foundry-related thermal applications'],
    sizeGuidance: 'Medium to coarse material can be useful in lightweight insulating systems, while fine material may be selected for matrix or binder formulations.',
    sizeBand: 'General direction: medium/coarse for aggregate-like use; fine for selected formulated systems.',
    qualification: 'Temperature, binder chemistry, density and particle distribution all need to be qualified for the actual system.'
  },
  {
    id: 'packaging', title: 'Protective Packaging', eyebrow: 'PROTECTIVE MATERIALS',
    short: 'Lightweight cushioning, absorbent and selected protective packing uses.',
    why: 'The lightweight, porous structure of exfoliated vermiculite can provide cushioning and absorption in selected packaging applications.',
    properties: ['Low density', 'Absorption', 'Porosity', 'Thermal buffering'],
    uses: ['Protective packing', 'Absorbent packing', 'Selected thermal/protective packaging'],
    sizeGuidance: 'Coarser particles are generally more practical where cushioning and loose-fill volume are important. Fine material can be selected where packing geometry or absorption behaviour requires it.',
    sizeBand: 'General direction: medium/coarse for loose-fill packing; confirm required particle distribution.',
    qualification: 'Packaging performance depends on the product being protected, packing geometry and handling conditions.'
  }
]

export function getApplication(id: string) {
  return applicationDetails.find((item) => item.id === id)
}
