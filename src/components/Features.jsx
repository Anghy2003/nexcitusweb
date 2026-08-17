import Icon from '../icons.jsx'
import Reveal from './Reveal.jsx'
import { FEATURES } from '../data.js'

export default function Features() {
  return (
    <section id="caracteristicas">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Todo su equipo de cobranza y legal, <span className="accent">una sola plataforma</span>
          </h2>
          <p>
            Gestión judicial y prejudicial, cobranzas, riesgo y trabajo de campo: cuatro pilares que
            sostienen la recuperación de su cartera.
          </p>
        </Reveal>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal as="article" className="feature-card" key={f.title} delay={i * 90}>
              <div className="icon-chip">
                <Icon name={f.icon} size={26} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
