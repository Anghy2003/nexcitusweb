import Icon from '../icons.jsx'
import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import { PLANS, WHATSAPP } from '../data.js'

export default function Plans() {
  return (
    <section id="planes">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Planes <span className="accent">mensuales</span>
          </h2>
          <p>Escoge la solución ideal para tu equipo.</p>
          <p className="plans-promo">
            <Icon name="sparkles" size={16} />
            15 % de descuento en plan anual
          </p>
        </Reveal>
        <div className="plans-grid">
          {PLANS.map((p, i) => (
            <Reveal
              as="article"
              className={`plan-card${p.highlighted ? ' highlighted' : ''}`}
              key={p.name}
              delay={i * 120}
            >
              {p.highlighted && <span className="plan-badge">Más elegido</span>}
              <div className="plan-icon">
                <Icon name={p.icon} size={26} />
              </div>
              <h3>{p.name}</h3>
              <p className="plan-tagline">{p.tagline}</p>
              <div className="plan-price">
                <span className="plan-price-old">${p.price}</span>
                <b>${p.offer}</b>
                <span className="plan-price-per">/mes</span>
                <span className="plan-discount">
                  -{Math.round((1 - p.offer / p.price) * 100)} %
                </span>
              </div>
              <ul className="plan-list">
                {p.features.map((f) => {
                  const inherit = f.startsWith('Todo lo del')
                  return (
                    <li key={f} className={inherit ? 'inherit' : ''}>
                      <Icon name={inherit ? 'sparkles' : 'check'} size={16} />
                      <span>{f}</span>
                    </li>
                  )
                })}
              </ul>
              <Btn href={WHATSAPP} variant={p.highlighted ? 'primary' : 'secondary'} external>
                Solicitar una demo
              </Btn>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
