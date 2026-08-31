import { describe, expect, it } from 'vitest'
import { applications, grades, evidenceLabels } from '../lib/content'
describe('Jyothi content model',()=>{it('keeps grade ranges explicit',()=>{expect(grades).toHaveLength(3);expect(grades.map(g=>g.range)).toEqual(['0.5–1 mm','1–2.5 mm','2.5–5 mm'])});it('does not mark generic application content as verified Jyothi data',()=>{expect(applications.some(a=>a.evidence==='Verified Jyothi value')).toBe(false)});it('defines every evidence status',()=>{expect(Object.keys(evidenceLabels)).toHaveLength(6)})})
