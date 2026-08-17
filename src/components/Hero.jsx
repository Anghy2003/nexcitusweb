import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import Icon from '../icons.jsx'
import StatCards from './StatCards.jsx'
import { WHATSAPP } from '../data.js'

const LINE_1 = 'NEXCITUS'.split('')

const BG_LINES = [
  null,
  { delay: '0s', duration: '5.2s' },
  null,
  { delay: '2.1s', duration: '6.4s' },
  null,
  { delay: '0.8s', duration: '4.6s' },
  null,
  { delay: '3.2s', duration: '7s' },
  null,
  { delay: '1.5s', duration: '5.6s' },
  null,
  { delay: '4s', duration: '6s' },
  null,
]

const AMBIENT_SOURCES = Object.values(
  import.meta.glob('../../assets/hero-ambient.{webm,mp4}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
).sort((a, b) => (a.endsWith('.webm') ? -1 : b.endsWith('.webm') ? 1 : 0))

export default function Hero() {
  return (
    <>
      <section className="hero-sticky" id="inicio">
        <div className="hero-pin">
          {AMBIENT_SOURCES.length > 0 ? (
            <div className="hero-video" aria-hidden="true">
              <video autoPlay loop muted playsInline preload="metadata">
                {AMBIENT_SOURCES.map((src) => (
                  <source key={src} src={src} />
                ))}
              </video>
            </div>
          ) : (
            <div className="hero-bg" aria-hidden="true">
              {BG_LINES.map((dash, i) => (
                <div className="hero-bg-line" key={i}>
                  {dash && (
                    <i style={{ animationDelay: dash.delay, animationDuration: dash.duration }} />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="hero-heading" role="heading" aria-level="1" aria-label="Nexcitus">
            <div className="hero-line" aria-hidden="true">
              {LINE_1.map((ch, i) => (
                <span key={i} style={{ animationDelay: `${0.35 + 0.055 * i}s` }}>
                  {ch}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-cards" aria-hidden="true">
            <div className="hero-cards-anim">
              <div className="hero-cards-wrapper">
                <div className="hero-cards-wrapper-inner">
                  <div className="hero-card-01" style={{ animationDelay: '1s' }}>
                    <div className="hero-card-title">
                      <div>Nexcitus</div>
                      <div>Web</div>
                    </div>
                    <div className="hero-card-designation">Plataforma de cobranza</div>
                  </div>
                  <div className="hero-card-02" style={{ animationDelay: '1.15s' }}>
                    <div className="hero-card-title">
                      <div>Nexcitus</div>
                      <div>Web</div>
                    </div>
                    <div className="hero-card-designation dim">Plataforma de cobranza</div>
                  </div>
                  <div className="hero-card-03" style={{ animationDelay: '1.3s' }}>
                    <div className="hero-card-title">
                      <div>GPS Cobranza</div>
                    </div>
                    <div className="hero-card-designation dim">Monitoreo en vivo</div>
                  </div>
                  <div className="hero-card-04" style={{ animationDelay: '1.45s' }}>
                    <div className="hero-card-small">
                      <Icon name="sparkles" size={26} />
                      <div className="hero-card-small-title">Agente IA</div>
                    </div>
                    <div className="hero-card-tall">
                      <div className="hero-card-small-title">App Móvil</div>
                    </div>
                    <div className="hero-card-small">
                      <Icon name="scale" size={26} />
                      <div className="hero-card-small-title">Riesgo Judicial IA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-glow" aria-hidden="true" />
        </div>
      </section>

      <div className="hero-cta">
        <div className="container">
          <Reveal>
            <p className="hero-sub">
              Creamos el primer sistema especializado de cobranzas y gestión legal que revoluciona
              el sector Empresarial y Financiero, con aplicaciones innovadoras impulsadas por
              inteligencia artificial. Impulsamos la productividad de abogados, despachos, empresas
              y áreas de cobranza de bancos y cooperativas, potenciando la recuperación de cartera
              y la gestión judicial y prejudicial.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="hero-actions">
              <Btn href="#/servicios">Conocer más</Btn>
              <Btn href={WHATSAPP} variant="secondary" external>
                Solicitar una demo
              </Btn>
            </div>
          </Reveal>
          <StatCards />
        </div>
      </div>
    </>
  )
}
