import Icon from '../icons.jsx'
import Reveal from './Reveal.jsx'
import { SEGMENTS } from '../data.js'

export default function Segments() {
  return (
    <section className="segments" id="segmentos">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Pensado para <span className="accent">todo el ecosistema de cobranza y legal</span>
          </h2>
        </Reveal>
        <div className="segments-grid">
          {SEGMENTS.map((s, i) => (
            <Reveal as="article" className="segment-card" key={s.title} delay={i * 90}>
              <div className="icon-chip dark">
                <Icon name={s.icon} size={24} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
