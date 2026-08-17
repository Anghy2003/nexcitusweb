const logoModules = import.meta.glob('../../assets/logos-web/*.{png,svg}', {
  eager: true,
  import: 'default',
})

const LOGOS = Object.entries(logoModules).map(([path, url]) => {
  const file = path.split('/').pop() || ''
  const name = file
    .replace(/\.(png|svg)$/i, '')
    .replace(/@[\d.]+x/g, '')
    .replace(/[-_]+/g, ' ')
    .trim()
  return { url, name }
})

const half = Math.ceil(LOGOS.length / 2)
const ROW_A = LOGOS.slice(0, half)
const ROW_B = LOGOS.slice(half)

function TrustRow({ logos, reverse }) {
  const items = [...logos, ...logos, ...logos, ...logos]
  return (
    <div className="trust-marquee">
      <div className={`trust-track${reverse ? ' right' : ''}`}>
        {items.map((l, i) => (
          <img
            className="trust-logo"
            src={l.url}
            alt={l.name}
            key={`${l.name}-${i}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}

export default function ClientsMarquee() {
  return (
    <div className="trust-section">
      <div className="trust-panel">
        <div className="trust-info">
          <p className="trust-label">Con la confianza de</p>
          <h3 className="trust-big">{LOGOS.length}+ Empresas</h3>
          <p className="trust-rating">
            <span className="trust-stars">★★★★★</span>
            4.8/5 valoración de nuestros clientes
          </p>
        </div>
        <div className="trust-rows">
          <TrustRow logos={ROW_A} />
          <TrustRow logos={ROW_B} reverse />
        </div>
      </div>
    </div>
  )
}
