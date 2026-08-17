import { useEffect, useRef } from 'react'
import Icon from '../icons.jsx'
import Btn from '../components/Btn.jsx'
import Reveal from '../components/Reveal.jsx'
import PageHero from '../components/PageHero.jsx'
import ProtectedScreen from '../components/ProtectedScreen.jsx'
import { WHATSAPP } from '../data.js'
import ariaVideo from '../../assets/ia.mp4'
import ariaRobot from '../../assets/aria-robot-alpha.png'

const CLIP_START = 27.8
const CLIP_END = 42.4

const VIDEO_REGIONS = [{ top: '30%', right: '2%', bottom: '19%', left: '12%' }]

const CHANNELS = [
  { icon: 'message', name: 'SMS', drop: 96 },
  { icon: 'volume', name: 'Notificación por voz', drop: 156 },
  { icon: 'phone', name: 'Llamada con IA', drop: 64 },
  { icon: 'mail', name: 'Correo electrónico', drop: 136 },
  { icon: 'whatsapp', name: 'WhatsApp', drop: 88 },
]

const PILARES = [
  {
    icon: 'sparkles',
    title: 'Automatización',
    text: 'Campañas de llamadas según cartera, prioridad, producto y etapa de gestión.',
  },
  {
    icon: 'file',
    title: 'Trazabilidad',
    text: 'Registro de llamada, resultado, intención, compromiso y próxima acción.',
  },
  {
    icon: 'users',
    title: 'Escalamiento',
    text: 'Derivación oportuna a gestores humanos en casos complejos o sensibles.',
  },
]

const BENEFICIOS = [
  {
    icon: 'users',
    title: 'Mayor cobertura de contacto',
    text: 'Campañas masivas y segmentadas, sin perder control sobre la estrategia ni la trazabilidad de cada gestión.',
  },
  {
    icon: 'clock',
    title: 'Atención oportuna de cartera',
    text: 'Recordatorios antes del vencimiento, contacto inicial de mora y seguimiento de compromisos dentro de los tiempos definidos.',
  },
  {
    icon: 'file',
    title: 'Registro automático de gestiones',
    text: 'Cada contacto queda con evidencia, resultado y próxima acción programada, sin actividades manuales de registro.',
  },
  {
    icon: 'briefcase',
    title: 'Gestores mejor enfocados',
    text: 'Su equipo humano se concentra en negociaciones complejas, clientes de alto riesgo y casos que requieren análisis especializado.',
  },
  {
    icon: 'calendar',
    title: 'Seguimiento de compromisos',
    text: 'Promesas de pago registradas, recordatorios previos y detección de incumplimientos para actuar a tiempo.',
  },
  {
    icon: 'route',
    title: 'Control y escalabilidad',
    text: 'Indicadores de contactabilidad, efectividad y recaudo por cartera, con capacidad de crecer junto a su operación.',
  },
]

const APLICACIONES = [
  {
    num: '01',
    title: 'Cobranza preventiva',
    text: 'Recordatorios antes del vencimiento, confirmación de la próxima fecha de pago y orientación sobre los canales habilitados.',
  },
  {
    num: '02',
    title: 'Mora temprana',
    text: 'Contacto inicial automatizado, recordatorio de obligaciones vencidas y registro de compromisos de pago.',
  },
  {
    num: '03',
    title: 'Seguimiento de compromisos',
    text: 'Aviso previo a la fecha prometida, confirmación posterior y derivación automática de incumplimientos a un gestor humano.',
  },
  {
    num: '04',
    title: 'Reactivación de contacto',
    text: 'Campañas para números no contestados, devolución de llamadas y reintentos definidos por reglas de negocio.',
  },
  {
    num: '05',
    title: 'Control gerencial',
    text: 'Indicadores de llamadas realizadas, contactabilidad, promesas registradas, cumplimiento y recaudo por campaña.',
  },
]

export default function Aria() {
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const clamp = () => {
      if (v.currentTime < CLIP_START - 0.25 || v.currentTime >= CLIP_END) {
        v.currentTime = CLIP_START
      }
    }
    v.addEventListener('loadedmetadata', clamp)
    v.addEventListener('timeupdate', clamp)
    if (v.readyState >= 1) clamp()
    return () => {
      v.removeEventListener('loadedmetadata', clamp)
      v.removeEventListener('timeupdate', clamp)
    }
  }, [])

  return (
    <>
      <PageHero
        title={
          <>
            Conozca a <span className="accent">Aria</span>
          </>
        }
      >
        El agente virtual de cobranza con inteligencia artificial, integrado a Nexcitus: campañas
        automatizadas, conversaciones naturales y cada gestión registrada y trazable.
      </PageHero>

      <section className="aria-diagram-section">
        <div className="container">
          <Reveal className="video-laptop aria-video-panel">
            <div className="video-laptop-screen">
              <span className="video-laptop-cam" />
              <div className="video-laptop-display protected">
                <video ref={videoRef} src={ariaVideo} autoPlay loop muted playsInline preload="metadata" />
                <ProtectedScreen regions={VIDEO_REGIONS} />
              </div>
            </div>
            <div className="video-laptop-base" />
          </Reveal>
          <div className="aria-channels" role="list" aria-label="Canales de contacto de Aria">
            {CHANNELS.map((c, i) => (
              <div
                className="aria-channel"
                role="listitem"
                key={c.name}
                style={{ '--drop': `${c.drop}px`, '--delay': `${0.25 + i * 0.18}s` }}
              >
                <span className="aria-line" aria-hidden="true">
                  <i />
                </span>
                <div className="aria-channel-circle">
                  <Icon name={c.icon} size={30} />
                </div>
                <div className="aria-channel-label">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aria-about">
        <div className="container aria-about-grid">
          <Reveal className="aria-about-copy">
            <h2>
              Un agente que <span className="accent">nunca duerme</span>
            </h2>
            <p>
              Aria automatiza la comunicación con sus deudores mediante flujos de cobranza
              parametrizados: segmentación de cartera, reglas de contacto, horarios autorizados y
              frecuencia de intentos, alineados con la Ley de Defensa del Consumidor y la Ley de
              Protección de Datos Personales, bajo parámetros de la ISO-27001.
            </p>
            <p>
              Opera sobre la información de Nexcitus o sobre datos de su institución mediante una
              integración autorizada. Identifica compromisos de pago, mide la efectividad de cada
              campaña y deriva a un gestor humano los casos que requieren atención directa.
            </p>
            <div className="aria-pilares">
              {PILARES.map((p) => (
                <div className="aria-pilar" key={p.title}>
                  <Icon name={p.icon} size={22} />
                  <div>
                    <b>{p.title}</b>
                    <span>{p.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="aria-robot-wrap" delay={120}>
            <img
              src={ariaRobot}
              alt="Aria, el agente virtual con inteligencia artificial de Nexcitus"
            />
          </Reveal>
        </div>
      </section>

      <section className="aria-benefits-section">
        <div className="container">
          <Reveal className="section-head center">
            <h2>
              Lo que Aria le da a <span className="accent">su operación</span>
            </h2>
            <p>Más capacidad de gestión, sin depender solo de la disponibilidad de su equipo.</p>
          </Reveal>
          <div className="aria-benefits">
            {BENEFICIOS.map((b, i) => (
              <Reveal as="article" className="aria-benefit" key={b.title} delay={i * 90}>
                <div className="aria-benefit-icon">
                  <Icon name={b.icon} size={22} />
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="aria-apps-section">
        <div className="container">
          <Reveal className="section-head center">
            <h2>
              Aria en su estrategia de <span className="accent">cobranza</span>
            </h2>
          </Reveal>
          <div className="aria-apps">
            {APLICACIONES.map((a, i) => (
              <Reveal as="article" className="aria-app" key={a.num} delay={i * 90}>
                <span className="aria-app-num">{a.num}</span>
                <div>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="aria-cta">
            <p>Vea a Aria conversando con su cartera real.</p>
            <div className="hero-actions">
              <Btn href={WHATSAPP} external icon={<Icon name="arrowRight" size={18} />}>
                Solicitar una demostración
              </Btn>
              <Btn href="#/planes" variant="secondary">
                Ver planes
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
