import Icon from '../icons.jsx'
import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import BrowserMock from './BrowserMock.jsx'
import AppFeatureExplorer from './AppFeatureExplorer.jsx'
import { RISK_FACTORS, APP_FEATURES, WHATSAPP } from '../data.js'
import fotoSeguridad from '../../assets/njsznsn-518x587.webp'
import laptopGps from '../../assets/laptop-gps.png'
import shotDashboard from '../../assets/shot-dashboard-gestiones.png'
import shotDocumentos from '../../assets/shot-documentos.png'

export default function Highlights() {
  return (
    <section id="ia">
      <div className="container">
        {/* IA — Riesgo Judicial */}
        <div className="highlight-row">
          <Reveal className="highlight-copy">
            <h2>
              Análisis de Riesgo Judicial: <span className="accent">predicción precisa y confiable</span>
            </h2>
            <p>
              Aprovechamos el poder de la IA y las redes neuronales para ir más allá de los métodos
              tradicionales: procesamos grandes volúmenes de datos estructurados y no estructurados y
              construimos modelos predictivos que anticipan el riesgo, para que las instituciones
              financieras decidan informadas y protejan su capital.
            </p>
            <Btn href={WHATSAPP} external icon={<Icon name="arrowRight" size={18} />}>
              Contáctanos
            </Btn>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <ol className="factor-list">
              {RISK_FACTORS.map((f) => (
                <li key={f.title}>
                  <div>
                    <b>{f.title}</b>
                    <span>{f.text}</span>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* GPS Cobranza */}
        <div className="highlight-row reverse" id="gps">
          <Reveal className="highlight-copy">
            <h2>
              Zonas en el mapa y <span className="accent">monitoreo en tiempo real</span>
            </h2>
            <p>
              Dibuje zonas de cobranza directamente sobre el mapa y distribuya la cartera entre sus
              gestores de campo. Desde la oficina, supervise la ubicación y el avance de cada
              cobrador con actualización automática.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Asignación por zonas</b>
                  <span>Áreas dibujadas sobre el mapa, con cartera distribuida por gestor.</span>
                </div>
              </li>
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Monitoreo en vivo</b>
                  <span>Pantalla de supervisión con refresco automático del recorrido.</span>
                </div>
              </li>
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Mapa de calor de gestiones</b>
                  <span>Visualice las zonas de mayor concentración de su operación.</span>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <img
              className="media-photo transparent"
              src={laptopGps}
              alt="GPS Cobranza de Nexcitus: asignación de zonas por área sobre el mapa"
            />
          </Reveal>
        </div>

        {/* Dashboard de gestiones */}
        <div className="highlight-row" id="dashboard">
          <Reveal className="highlight-copy">
            <h2>
              Toda su operación, <span className="accent">medida en tiempo real</span>
            </h2>
            <p>
              Indicadores de gestiones totales, geolocalizadas y sin geolocalización; evolución por
              períodos, distribución y mapa georreferenciado de cada gestión de su equipo, con
              filtros por agencia, usuario y fechas.
            </p>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <BrowserMock>
              <img
                src={shotDashboard}
                alt="Dashboard de gestiones de Nexcitus con KPIs y mapa georreferenciado"
              />
            </BrowserMock>
          </Reveal>
        </div>

        {/* Gestión documental */}
        <div className="highlight-row reverse" id="documentos">
          <Reveal className="highlight-copy">
            <h2>
              Sus documentos, <span className="accent">organizados y seguros</span>
            </h2>
            <p>
              Cargue documentos de forma individual o masiva, créelos en línea con plantillas y
              manténgalos vinculados a clientes, procesos y gestiones, con búsqueda, categorías y
              almacenamiento seguro en la nube.
            </p>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <BrowserMock>
              <img
                src={shotDocumentos}
                alt="Listado de documentos de Nexcitus con búsqueda y categorías"
              />
            </BrowserMock>
          </Reveal>
        </div>

        {/* App móvil */}
        <div className="highlight-row" id="app">
          <Reveal className="highlight-copy">
            <h2>
              El campo trabaja, <span className="accent">aun sin conexión</span>
            </h2>
            <p>
              Un aplicativo móvil especializado para el trabajo fuera de oficina: la operación
              continúa al 100 % incluso sin internet, con evidencia fotográfica y coordenadas GPS
              verificadas.
            </p>
            <ul className="check-list">
              {APP_FEATURES.map((f) => (
                <li key={f.title}>
                  <Icon name="check" size={18} />
                  <div>
                    <b>{f.title}</b>
                    <span>{f.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <AppFeatureExplorer />
          </Reveal>
        </div>

        {/* Seguridad */}
        <div className="highlight-row reverse" id="seguridad">
          <Reveal className="highlight-copy">
            <h2>
              La seguridad no es una capa: <span className="accent">es el diseño</span>
            </h2>
            <p>
              Infraestructura construida bajo el principio de Seguridad por Diseño, con calificación
              máxima A-100 y cifrado de extremo a extremo para asegurar absoluta confidencialidad.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Autenticación con estándares abiertos</b>
                  <span>OAuth 2.0 / OpenID Connect y control de sesiones por horario.</span>
                </div>
              </li>
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Cifrado de extremo a extremo</b>
                  <span>Credenciales e información protegidas en todo el trayecto.</span>
                </div>
              </li>
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Validación en el servidor</b>
                  <span>Cada operación se verifica del lado del servidor, siempre.</span>
                </div>
              </li>
              <li>
                <Icon name="check" size={18} />
                <div>
                  <b>Alertas de inactividad procesal</b>
                  <span>El sistema vigila los procesos detenidos y notifica por correo, web o móvil.</span>
                </div>
              </li>
            </ul>
          </Reveal>
          <Reveal className="highlight-media" delay={140}>
            <div className="media-panel">
              <img
                className="media-photo"
                src={fotoSeguridad}
                alt="Acceso seguro a Nexcitus con credenciales cifradas"
              />
            </div>
            <span className="photo-badge">A-100 · Seguridad auditada</span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
