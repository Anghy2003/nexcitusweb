import Reveal from './Reveal.jsx'
import ariaRobot from '../../assets/aria-robot.png'
import canalSms from '../../assets/canal-sms.png'
import canalWhatsapp from '../../assets/canal-whatsapp.png'
import canalCorreo from '../../assets/canal-correo.png'
import canalLlamadaIa from '../../assets/canal-llamada-ia.png'
import canalVoz from '../../assets/canal-voz.png'

const CHANNELS = [
  { url: canalWhatsapp, name: 'Campañas por WhatsApp' },
  { url: canalSms, name: 'Campañas por SMS' },
  { url: canalCorreo, name: 'Campañas por correo electrónico' },
  { url: canalLlamadaIa, name: 'Llamadas con inteligencia artificial' },
  { url: canalVoz, name: 'Notificaciones por voz' },
]

export default function CampaignChannels() {
  return (
    <section className="campaigns" id="campanias">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Conozca a <span className="accent">ArIA</span>, la asistente con IA
          </h2>
          <p>
            Diseñe campañas de contacto por segmentos de su cartera con un asistente paso a paso, y
            llegue a cada cliente por el canal correcto.
          </p>
        </Reveal>
        <div className="campaign-grid">
          <Reveal className="campaign-robot">
            <img src={ariaRobot} alt="ArIA, la asistente virtual con inteligencia artificial de Nexcitus" />
          </Reveal>
          <div className="channel-list">
            {CHANNELS.map((c, i) => (
              <Reveal className="channel-tile" key={c.name} delay={i * 80}>
                <img src={c.url} alt={c.name} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
