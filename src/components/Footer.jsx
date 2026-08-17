import { useState } from 'react'
import { NAV_LINKS, ALLIANCES, LOGIN_URL } from '../data.js'
import mark from '../../assets/Copia-de-Copia-de-Logo-Legalsat-Nexcitus-5.png'

export default function Footer() {
  const [contact, setContact] = useState('')
  const demoHref = `https://wa.me/593987835870?text=${encodeURIComponent(
    contact.trim()
      ? `Hola, quiero una demo de Nexcitus. Mi contacto: ${contact.trim()}`
      : 'Hola, quiero una demo de Nexcitus.',
  )}`

  return (
    <footer className="footer">
      <div className="footer-panel">
        <div className="footer-aurora" aria-hidden="true" />
        <div className="container">
          <div className="footer-top">
            <nav className="footer-col" aria-label="Sitio">
              <h4>Sitio</h4>
              <ul>
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="footer-mark" aria-hidden="true">
              <img src={mark} alt="" />
              <span>NEXCITUS</span>
            </div>
            <nav className="footer-col right" aria-label="Contacto">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <a href={LOGIN_URL} target="_blank" rel="noreferrer">
                    Ingresar
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/593987835870" target="_blank" rel="noreferrer">
                    +593 98 783 5870
                  </a>
                </li>
                <li>
                  <a href="mailto:comercial@latamtek.com">comercial@latamtek.com</a>
                </li>
                <li className="footer-addr">Cuenca · Benigno Malo 5-72 y Calle Larga, Of. 200</li>
              </ul>
            </nav>
          </div>

          <hr className="footer-sep" />

          <div className="footer-mid">
            <div className="footer-who">
              <h4>Quiénes somos</h4>
              <p>
                Impulsando la Cobranza y la industria Legal y Financiera con inteligencia
                artificial y servicios especializados.
              </p>
              <div className="social-row">
                <a
                  className="social-chip"
                  href="https://facebook.com/nexcitus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
                <a
                  className="social-chip"
                  href="https://instagram.com/nexcitus"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="footer-cta">
              <h4>Hablemos</h4>
              <form
                className="footer-pill"
                onSubmit={(e) => {
                  e.preventDefault()
                  window.open(demoHref, '_blank', 'noopener')
                }}
              >
                <input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Tu correo o empresa"
                  aria-label="Tu correo o empresa"
                />
                <button type="submit">Solicitar demo</button>
              </form>
              <small>Te respondemos por WhatsApp en horario de oficina.</small>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© Nexcitus 2026 — Todos los derechos reservados.</span>
            <span className="footer-alliances">{ALLIANCES.join(' · ')}</span>
            <span>
              <a href="#">Términos y condiciones</a> · <a href="#">Política de privacidad</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
