import Icon from '../icons.jsx'
import Reveal from './Reveal.jsx'
import { MODULES } from '../data.js'

const FEATURED = [
  'Directorio de clientes y carteras',
  'Campañas',
  'Panel de gestiones con mapa de calor',
  'GPS Cobranza',
]

const STACK_TAGS = {
  'Etapas de cobranza inteligentes': ['Automática', 'Trazable'],
  'Rutas de visita optimizadas': ['Móvil', 'GPS'],
  'Procesos judiciales completos': ['Judicial', 'Gastos'],
  'Agenda y planificación': ['Web', 'Móvil'],
  'Gestión documental': ['Plantillas', 'Nube'],
  'Comprobantes electrónicos': ['Facturación', 'Integrado'],
  Reportes: ['Operativo', 'Gerencial'],
  'Biblioteca de leyes': ['Consulta', 'Normativa'],
  'Roles y permisos': ['Seguridad', 'Granular'],
  'Notificaciones multicanal': ['Push', 'Correo'],
  'Detección de inactividad procesal': ['Alertas', 'Automático'],
}

const byTitle = Object.fromEntries(MODULES.map((m) => [m.title, m]))
const stackModules = MODULES.filter((m) => !FEATURED.includes(m.title))

export default function Modules() {
  return (
    <section className="modules" id="plataforma">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Módulos para <span className="accent">cada etapa</span> de la recuperación
          </h2>
          <p>
            Una plataforma web de nueva generación: rápida, intuitiva, con modo claro y modo noche,
            y módulos que cubren desde el primer contacto hasta la sentencia.
          </p>
        </Reveal>

        <div className="bento-grid">
          <Reveal className="bento-card bento-sm">
            <div className="bento-mock bn-clients" aria-hidden="true">
              <div className="bn-chip">
                <span className="bn-ava">MC</span>
                <div>
                  <b>María Cárdenas</b>
                  <small>Cartera Quito · 12 operaciones</small>
                </div>
              </div>
              <div className="bn-chip active">
                <span className="bn-ava">JT</span>
                <div>
                  <b>Jorge Tapia</b>
                  <small>Cartera Cuenca · 8 operaciones</small>
                </div>
              </div>
              <div className="bn-chip">
                <span className="bn-ava">RV</span>
                <div>
                  <b>Rosa Vega</b>
                  <small>Cartera Loja · 5 operaciones</small>
                </div>
              </div>
            </div>
            <div className="bento-copy">
              <h3>Directorio de clientes y carteras</h3>
              <p>{byTitle['Directorio de clientes y carteras'].text}</p>
            </div>
          </Reveal>

          <Reveal className="bento-card bento-lg bento-row" delay={110}>
            <div className="bento-copy top">
              <h3>Campañas</h3>
              <p>{byTitle['Campañas'].text}</p>
            </div>
            <div className="bento-mock bn-tasks" aria-hidden="true">
              <div className="bn-task">
                Crear campaña
                <span className="bn-plus">+</span>
              </div>
              <div className="bn-task hot">
                Segmentar cartera
                <span className="bn-plus">+</span>
              </div>
              <div className="bn-task">
                Simular resultados
                <span className="bn-plus">+</span>
              </div>
              <svg className="bn-cursor" width="26" height="26" viewBox="0 0 24 24" fill="#9fd0ea" stroke="#0b0f15" strokeWidth="1.4">
                <path d="M4 3l7 18 2.5-7.5L21 11 4 3z" />
              </svg>
            </div>
          </Reveal>

          <Reveal className="bento-card bento-lg2">
            <div className="bento-mock bn-panel" aria-hidden="true">
              <div className="bn-form">
                <small>¿Cómo quiere ver las gestiones de su equipo?</small>
                <div className="bn-seg">
                  <span className="on">Individual</span>
                  <span>Por zona</span>
                  <span>Mapa de calor</span>
                </div>
                <div className="bn-inputrow">
                  Compare carteras y períodos en un solo panel
                  <span className="bn-try">✦ Ver ejemplo</span>
                </div>
              </div>
            </div>
            <div className="bento-copy">
              <h3>Panel de gestiones con mapa de calor</h3>
              <p>{byTitle['Panel de gestiones con mapa de calor'].text}</p>
            </div>
          </Reveal>

          <Reveal className="bento-card bento-sm2" delay={110}>
            <div className="bento-mock bn-zones" aria-hidden="true">
              <div className="bn-zone z1">
                <small>ZONA 1</small>
                <span>Ruta asignada</span>
              </div>
              <div className="bn-zone z2 hot">
                <small>ZONA 2</small>
                <span>En recorrido</span>
              </div>
              <div className="bn-zone z3">
                <small>ZONA 3</small>
                <span>Visita completada</span>
              </div>
            </div>
            <div className="bento-copy">
              <h3>GPS Cobranza</h3>
              <p>{byTitle['GPS Cobranza'].text}</p>
            </div>
          </Reveal>
        </div>

        <div className="mod-stack">
          {stackModules.map((m, i) => (
            <div className="mod-stack-item" key={m.title}>
              <article className="mod-stack-card" style={{ '--tilt': `${i % 2 ? 2.5 : -3}deg` }}>
                <div className="mod-stack-head">
                  <span className="mod-stack-icon">
                    <Icon name={m.icon} size={20} />
                  </span>
                  <span className="mod-stack-num">Módulo {String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                <div className="mod-stack-tags">
                  {(STACK_TAGS[m.title] || []).map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
