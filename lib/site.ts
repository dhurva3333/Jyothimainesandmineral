import { createClient } from '@supabase/supabase-js'

export type Application = { id: string; title: string; short: string; fit: string; grades: string }

const fallback = {
  site: { company: 'Jyothi Mines & Minerals', tagline: 'Exfoliated vermiculite, matched to the application.', description: 'Application-led vermiculite supply for horticulture, construction, fire protection, insulation and selected industrial materials.' },
  contact: { email: 'info@jyothiminesandminerals.com' },
  applications: [
    { id: 'horticulture', title: 'Horticulture & Nursery', short: 'Seed starting, propagation and professional growing media.', fit: 'Core commercial field', grades: 'Fine / Medium / Coarse' },
    { id: 'construction', title: 'Lightweight Construction', short: 'Lightweight concrete, screeds, mortars and plaster formulations.', fit: 'Core commercial field', grades: 'Application-matched' },
    { id: 'fire_protection', title: 'Fire Protection', short: 'Mineral component for fire-protection boards and spray-applied systems.', fit: 'Qualification required', grades: 'Application-matched' },
    { id: 'insulation', title: 'Thermal Insulation', short: 'Loose-fill and high-temperature insulating formulations.', fit: 'Core industrial field', grades: 'Coarse / Fine' },
    { id: 'friction', title: 'Friction Materials', short: 'Fine exfoliated vermiculite for selected brake and friction formulations.', fit: 'Industrial qualification', grades: 'Fine' },
    { id: 'refractory', title: 'Refractory & Foundry', short: 'Insulating refractory mixes and selected high-temperature applications.', fit: 'Industrial qualification', grades: 'Application-specific' },
    { id: 'packaging', title: 'Protective Packaging', short: 'Lightweight cushioning and absorbent packing for fragile industrial goods.', fit: 'Commercial field', grades: 'Coarse' },
    { id: 'agriculture', title: 'Agricultural Inputs', short: 'Growing-media and selected agricultural formulations.', fit: 'Application-dependent', grades: 'Application-specific' },
  ] as Application[],
  capability: { capacity_day: '~10 tonnes/day', capacity_month: '~300 tonnes/month', raw_range: '~0.5–7 mm reported raw range', packaging: '12.5 kg · 15 kg · larger industrial bags', note: 'Historical figures supplied by Jyothi; verify current records before treating them as certified specifications.' },
}

export async function getSiteContent() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return fallback
  try {
    const supabase = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })
    const { data, error } = await supabase.from('site_content').select('key,value')
    if (error || !data) return fallback
    const map = Object.fromEntries(data.map((row) => [row.key, row.value])) as typeof fallback
    return {
      site: { ...fallback.site, ...(map.site || {}) },
      contact: { ...fallback.contact, ...(map.contact || {}) },
      applications: Array.isArray(map.applications) ? map.applications : fallback.applications,
      capability: { ...fallback.capability, ...(map.capability || {}) },
    }
  } catch { return fallback }
}
