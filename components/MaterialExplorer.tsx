'use client'

import { CSSProperties, useMemo, useState } from 'react'

type Application = {
  id: string
  title: string
  short: string
  fit?: string
}

const modes = [
  { id: 'horticulture', label: 'Grow plants', icon: '↗', property: 'Water + air', detail: 'Seed germination, propagation and growing-media uses where an appropriate horticultural grade is selected.' },
  { id: 'industrial', label: 'Manufacture', icon: '◈', property: 'Material structure', detail: 'Explore documented industrial application areas, then qualify the actual grade against your specification.' },
  { id: 'thermal', label: 'Need thermal protection', icon: '◌', property: 'Low density + thermal', detail: 'Vermiculite is used in selected insulation, refractory and fire-protection applications.' },
  { id: 'construction', label: 'Build lightweight', icon: '□', property: 'Low density', detail: 'Selected lightweight construction formulations use exfoliated vermiculite as a lightweight aggregate or insulating component.' },
  { id: 'friction', label: 'Friction material', icon: '◇', property: 'Formulation dependent', detail: 'Vermiculite is documented in friction-material applications; qualification depends on the formulation and grade.' },
  { id: 'absorption', label: 'Absorb a liquid', icon: '≈', property: 'Porous + absorbent', detail: 'Selected absorbent applications use exfoliated vermiculite. Actual performance must be evaluated for the intended liquid and grade.' },
]

export default function MaterialExplorer({ applications = [] }: { applications?: Application[] }) {
  const [mode, setMode] = useState(modes[0].id)
  const [size, setSize] = useState(45)
  const active = modes.find((item) => item.id === mode) ?? modes[0]
  const nearestApps = useMemo(() => applications.slice(0, 4), [applications])

  return (
    <section className="explorer" id="explore">
      <div className="explorer-intro">
        <p className="eyebrow">CHOOSE A NEED</p>
        <h2>Start with the<br /><em>job.</em></h2>
        <p>Don't know the grade yet? Start with the application. The website will explain the relevant material properties before asking for a technical enquiry.</p>
      </div>
      <div className="explorer-panel">
        <div className="mode-grid">
          {modes.map((item) => (
            <button className={`mode ${mode === item.id ? 'active' : ''}`} key={item.id} onClick={() => setMode(item.id)} type="button">
              <span>{item.icon}</span><strong>{item.label}</strong>
            </button>
          ))}
        </div>
        <div className="explorer-result">
          <div className="result-visual" aria-hidden="true">
            <div className="result-core"><span>{active.property}</span><b>VERMICULITE</b></div>
            <i /><i /><i />
          </div>
          <div className="result-copy">
            <p className="eyebrow">WHY IT MATTERS</p>
            <h3>{active.property}</h3>
            <p>{active.detail}</p>
            <a className="text-link" href={`/applications#${active.id}`}>Explore this application →</a>
          </div>
        </div>
        <div className="lab-control">
          <div><span className="eyebrow">PARTICLE-SIZE EXPLORER</span><strong>Smaller → larger</strong></div>
          <input aria-label="Particle size visualizer" type="range" min="0" max="100" value={size} onChange={(event) => setSize(Number(event.target.value))} />
          <div className="particle-row" aria-hidden="true" style={{ '--particle-scale': `${0.45 + size / 140}` } as CSSProperties}>
            {Array.from({ length: 12 }, (_, i) => <span key={i} />)}
          </div>
          <small>This is a visual explainer, not a Jyothi product specification.</small>
        </div>
      </div>
      {nearestApps.length > 0 && <div className="explorer-links">{nearestApps.map((app) => <a href={`/applications#${app.id}`} key={app.id}>{app.title}<span>↗</span></a>)}</div>}
    </section>
  )
}
