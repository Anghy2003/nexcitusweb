import Reveal from './Reveal.jsx'
import laptopDashboard from '../../assets/laptop-dashboard.png'

export default function PlansShowcase() {
  return (
    <div className="container">
      <Reveal className="plans-showcase">
        <div className="plans-showcase-glow" aria-hidden="true" />
        <div className="plans-showcase-grid" aria-hidden="true" />
        <div className="plans-showcase-scene">
          <img
            src={laptopDashboard}
            alt="Panel de indicadores de cartera de Nexcitus en una laptop"
          />
        </div>
        <div className="showcase-chip chip-geo">
          <div className="chip-inner">
            <span className="chip-ring" />
            <div>
              <strong>82%</strong>
              <small>geolocalizadas</small>
            </div>
          </div>
        </div>
        <div className="showcase-chip chip-total">
          <div className="chip-inner">
            <span className="chip-dot chip-dot-green" />
            <div>
              <strong>99 gestiones</strong>
              <small>período filtrado</small>
            </div>
          </div>
        </div>
        <div className="showcase-chip chip-gps">
          <div className="chip-inner">
            <span className="chip-dot chip-dot-orange" />
            <div>
              <strong>GPS Cobranza</strong>
              <small>seguimiento en vivo</small>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
