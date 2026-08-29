import { createClient } from '@supabase/supabase-js'

export type Application = { id: string; title: string; short: string; fit: string }

export const fallback = {
  site: {
    company: 'Jyothi Mines & Minerals',
    tagline: 'A naturally occurring mineral transformed into a lightweight, versatile material for horticultural and industrial applications.',
    properties: ['Lightweight after exfoliation','Porous','Moisture retaining','Thermally insulating','Fire resistant','Liquid absorbing']
  },
  whatsapp: { number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '' },
  contact: { email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', location: 'Proddatur, Kadapa District, Andhra Pradesh' },
  applications: [
    { id:'horticulture', title:'Horticulture & Nursery', short:'Seed starting, propagation, rooting and professional growing media.', fit:'Very high priority' },
    { id:'agriculture', title:'Agricultural Inputs', short:'Moisture management and selected carrier/formulation applications.', fit:'Application dependent' },
    { id:'construction', title:'Lightweight Construction', short:'Lightweight concrete, screeds, mortars and plaster formulations.', fit:'Established field' },
    { id:'fire', title:'Fire Protection', short:'Mineral component in selected fire-protection systems and boards.', fit:'Qualification required' },
    { id:'insulation', title:'Thermal Insulation', short:'Loose-fill and high-temperature insulating applications.', fit:'Established field' },
    { id:'friction', title:'Friction Materials', short:'Fine exfoliated vermiculite in selected brake and friction formulations.', fit:'Industrial qualification' },
    { id:'refractory', title:'Refractory & Foundry', short:'Insulating refractory and selected high-temperature material systems.', fit:'Industrial qualification' },
    { id:'packaging', title:'Protective Packaging', short:'Lightweight cushioning and absorbent packing for selected uses.', fit:'Commercial field' }
  ] as Application[],
  grades: [
    { name:'Fine', description:'Smaller exfoliated particles for applications where fine material is required; suitability is application-specific.' },
    { name:'Medium', description:'Balanced particle size for growing media and selected construction or insulation formulations.' },
    { name:'Coarse', description:'Larger exfoliated particles for selected loose-fill, packaging and industrial applications.' }
  ]
}

export async function getSiteContent() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return fallback
  try {
    const supabase = createClient(url, key, { auth: { persistSession:false, autoRefreshToken:false } })
    const { data, error } = await supabase.from('site_content').select('key,value')
    if (error || !data) return fallback
    const map = Object.fromEntries(data.map(row => [row.key, row.value])) as Partial<typeof fallback>
    return {
      ...fallback,
      site: { ...fallback.site, ...(map.site || {}) },
      contact: { ...fallback.contact, ...(map.contact || {}) },
      whatsapp: { ...fallback.whatsapp, ...(map.whatsapp || {}) },
      applications: Array.isArray(map.applications) ? map.applications : fallback.applications,
      grades: Array.isArray(map.grades) ? map.grades : fallback.grades
    }
  } catch { return fallback }
}
