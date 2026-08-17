import Icon from '../icons.jsx'
import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import { WHATSAPP, WHATSAPP_2 } from '../data.js'
import promoCta from '../../assets/Promo-glob-para-historias-5-487x560.png'

export default function Cta() {
  return (
    <div className="cta" id="contacto">
      <div className="container">
        <Reveal className="cta-panel">
          <div className="cta-grid">
            <img
              className="cta-photo"
              src={promoCta}
              alt="Legalsat-Nexcitus: tecnología para la gestión legal y financiera"
            />
            <div>
              <h2>¿Listo para comenzar?</h2>
              <p>Contáctate con nosotros para comenzar y conocer más.</p>
              <div className="cta-actions">
                <Btn href={WHATSAPP} external icon={<Icon name="whatsapp" size={20} />}>
                  ¡Lo quiero!
                </Btn>
                <Btn href={WHATSAPP_2} variant="secondary" external>
                  +593 98 783 5870
                </Btn>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
