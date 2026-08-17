import Icon from '../icons.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Cta from '../components/Cta.jsx'
import { WHATSAPP } from '../data.js'

const FEATURE_CARDS = [
  {
    icon: 'mail',
    title: 'Escríbenos',
    text: 'Nos encantará leerte. Escríbenos tus preguntas o comentarios cuando quieras.',
    links: [{ label: 'comercial@latamtek.com', href: 'mailto:comercial@latamtek.com' }],
  },
  {
    icon: 'phone',
    title: 'Llámanos',
    text: 'Habla directamente con nuestro equipo para respuestas rápidas y soporte cercano.',
    links: [{ label: '+593 98 783 5870', href: WHATSAPP }],
  },
  {
    icon: 'building',
    title: 'Visítanos',
    text: 'Agenda una reunión o una demostración presencial en nuestras oficinas.',
    lines: [
      'Cuenca: Benigno Malo 5-72 y Calle Larga, Of. 200.',
      'New York: 30 Park Ave, Ossining, NY 10562.',
    ],
  },
]

const BENEFITS = [
  {
    icon: 'clock',
    title: 'Respuesta el mismo día',
    text: 'Nuestro equipo comercial te contacta en horas laborables.',
  },
  {
    icon: 'sparkles',
    title: 'Demo con tu operación real',
    text: 'Agenda una demostración funcional adaptada a tu cartera y tus objetivos.',
  },
  {
    icon: 'route',
    title: 'Implementación acompañada',
    text: 'Te guiamos en la carga de datos, la configuración y la puesta en marcha.',
  },
  {
    icon: 'users',
    title: 'Soporte especializado',
    text: 'Acompañamiento continuo por WhatsApp, correo y teléfono.',
  },
]

export default function Contacto() {
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const msg =
      `Hola, soy ${f.get('nombre')} ${f.get('apellido')}. ${f.get('mensaje')} ` +
      `— Contacto: ${f.get('correo')} · ${f.get('telefono')}`
    window.open(`${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noreferrer')
  }

  return (
    <>
      <PageHero
        title={
          <>
            Hablemos de <span className="accent">tu operación</span>
          </>
        }
      >
        Servicios a nivel nacional. Escríbenos y nuestro equipo diseñará una solución a la medida
        de tu cartera.
      </PageHero>

      <section className="contact-section">
        <div className="container">
          <div className="contact-features">
            {FEATURE_CARDS.map((c, i) => (
              <Reveal as="article" className="contact-feature" key={c.title} delay={i * 100}>
                <div className="contact-feature-icon">
                  <Icon name={c.icon} size={24} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <div className="contact-feature-links">
                  {(c.links || []).map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                  {(c.lines || []).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container contact-form-grid">
          <Reveal className="contact-form-copy">
            <h2>
              Envíale un mensaje a <span className="accent">nuestro equipo</span>
            </h2>
            <p className="contact-form-sub">
              Nos encantará leerte. Cuéntanos de tu cartera y te respondemos enseguida.
            </p>
            <form className="mooni-form" onSubmit={onSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-nombre">Nombre *</label>
                  <input id="f-nombre" name="nombre" type="text" required autoComplete="given-name" />
                </div>
                <div className="form-field">
                  <label htmlFor="f-apellido">Apellido *</label>
                  <input
                    id="f-apellido"
                    name="apellido"
                    type="text"
                    required
                    autoComplete="family-name"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="f-correo">Correo *</label>
                  <input id="f-correo" name="correo" type="email" required autoComplete="email" />
                </div>
                <div className="form-field">
                  <label htmlFor="f-telefono">Teléfono *</label>
                  <input id="f-telefono" name="telefono" type="tel" required autoComplete="tel" />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="f-mensaje">¿Cómo podemos ayudarte? *</label>
                <textarea id="f-mensaje" name="mensaje" required rows="5" />
              </div>
              <p className="form-note">
                Al enviar, tu mensaje se abre en WhatsApp con nuestro equipo comercial — sin
                formularios fríos, conversación directa.
              </p>
              <button className="btn btn-primary" type="submit">
                Enviar mensaje
              </button>
            </form>
          </Reveal>
          <Reveal className="contact-benefits" delay={140}>
            {BENEFITS.map((b) => (
              <div className="contact-benefit" key={b.title}>
                <div className="contact-feature-icon sm">
                  <Icon name={b.icon} size={22} />
                </div>
                <div>
                  <b>{b.title}</b>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  )
}
