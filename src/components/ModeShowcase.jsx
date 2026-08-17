import Reveal from './Reveal.jsx'
import BrowserMock from './BrowserMock.jsx'
import modoClaro from '../../assets/modo-claro.png'
import modoNoche from '../../assets/modo-noche.png'

export default function ModeShowcase() {
  return (
    <section className="mode-section">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Modo claro y <span className="accent">modo noche</span>
          </h2>
          <p>La misma plataforma, cómoda a cualquier hora del día.</p>
        </Reveal>
        <div className="mode-grid">
          <Reveal className="mode-card">
            <BrowserMock>
              <img src={modoClaro} alt="Panel de cartera de Nexcitus en modo claro" loading="lazy" />
            </BrowserMock>
            <span>Modo claro</span>
          </Reveal>
          <Reveal className="mode-card" delay={120}>
            <BrowserMock>
              <img src={modoNoche} alt="Panel de cartera de Nexcitus en modo noche" loading="lazy" />
            </BrowserMock>
            <span>Modo noche</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
