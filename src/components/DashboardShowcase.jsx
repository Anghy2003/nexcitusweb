import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import shotDashboard from '../../assets/shot-dashboard-gestiones.png'

const ROUTE_D = 'M 36 150 C 70 128 96 138 118 112 S 168 78 196 84 S 246 60 266 44'

const MAP_BLOCKS = [
  [14, 10, 60, 20],
  [86, 8, 44, 24],
  [146, 14, 52, 18],
  [16, 50, 50, 20],
  [86, 44, 58, 22],
  [152, 48, 40, 18],
  [16, 88, 44, 22],
  [150, 92, 46, 18],
  [86, 128, 44, 18],
  [150, 130, 40, 16],
  [222, 110, 48, 18],
  [256, 86, 40, 16],
]

function useCountUp(target, started) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!started) return
    let raf
    const t0 = performance.now()
    const dur = 1400
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, started])
  return value
}

export default function DashboardShowcase() {
  const sceneRef = useRef(null)
  const tiltRef = useRef(null)
  const mapRef = useRef(null)
  const kpiRef = useRef(null)
  const [kpiSeen, setKpiSeen] = useState(false)
  const total = useCountUp(1248, kpiSeen)

  useEffect(() => {
    const el = kpiRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setKpiSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const scene = sceneRef.current
      if (!scene) return
      if (window.innerWidth < 760) {
        if (tiltRef.current) tiltRef.current.style.transform = ''
        if (mapRef.current) mapRef.current.style.transform = ''
        if (kpiRef.current) kpiRef.current.style.transform = ''
        return
      }
      const rect = scene.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1.25, Math.max(0, 1 - (rect.top - vh * 0.1) / (vh * 0.62)))
      const settled = Math.min(1, p)
      if (tiltRef.current) {
        const tilt = (1 - settled) * 14
        const scale = 0.95 + settled * 0.05
        tiltRef.current.style.transform = `perspective(1300px) rotateX(${tilt}deg) scale(${scale})`
      }
      if (mapRef.current) mapRef.current.style.transform = `translateY(${(1 - p) * 54}px)`
      if (kpiRef.current) kpiRef.current.style.transform = `translateY(${(p - 1) * 64}px)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="servicios-showcase">
      <div className="container">
        <div className="ds-scene" ref={sceneRef}>
          <div className="ds-bg" aria-hidden="true" />

          <Reveal delay={100}>
            <div className="ds-tilt" ref={tiltRef}>
              <div className="ds-frame">
                <div className="ds-frame-spin" aria-hidden="true" />
                <div className="ds-frame-inner">
                  <div className="ds-chrome" aria-hidden="true">
                    <span className="ds-dot r" />
                    <span className="ds-dot y" />
                    <span className="ds-dot g" />
                    <span className="ds-url">
                      <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="11" width="16" height="10" rx="2" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                      </svg>
                      app.nexcitus.com/dashboard/gestiones
                    </span>
                  </div>
                  <img
                    src={shotDashboard}
                    alt="Dashboard de gestiones de Nexcitus con KPIs y mapa georreferenciado"
                  />
                </div>
                <span className="ds-shine" aria-hidden="true" />
              </div>
              <div className="ds-underglow" aria-hidden="true" />
            </div>
          </Reveal>

          <div className="ds-card ds-card-map" ref={mapRef} aria-hidden="true">
            <Reveal delay={320}>
              <div className="ds-card-inner ds-float-a">
                <div className="ds-card-head">
                  <span className="ds-card-icon">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <b>Gestiones georreferenciadas</b>
                </div>
                <svg className="ds-map" viewBox="0 0 320 180" role="presentation">
                  <defs>
                    <linearGradient id="dsMapBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#12202e" />
                      <stop offset="1" stopColor="#0b1219" />
                    </linearGradient>
                    <linearGradient id="dsRoute" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0" stopColor="#47c479" />
                      <stop offset="1" stopColor="#3d80a7" />
                    </linearGradient>
                  </defs>
                  <rect width="320" height="180" rx="12" fill="url(#dsMapBg)" />
                  {MAP_BLOCKS.map(([x, y, w, h]) => (
                    <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="4" fill="rgba(255,255,255,0.028)" />
                  ))}
                  <g stroke="rgba(160,200,230,0.10)" strokeWidth="1.5" fill="none">
                    <path d="M-10 40 L330 32" />
                    <path d="M-10 78 L330 70" />
                    <path d="M-10 118 L330 112" />
                    <path d="M-10 152 L330 148" />
                    <path d="M52 -8 L44 190" />
                    <path d="M118 -8 L112 190" />
                    <path d="M186 -8 L180 190" />
                    <path d="M250 -8 L246 190" />
                  </g>
                  <path d="M-10 96 C 80 90 200 98 330 88" stroke="rgba(160,200,230,0.16)" strokeWidth="3" fill="none" />
                  <path d="M 240 -10 C 220 40 260 80 232 130 S 210 170 224 195" stroke="rgba(61,128,167,0.30)" strokeWidth="8" strokeLinecap="round" fill="none" />
                  <path className="ds-route" d={ROUTE_D} stroke="url(#dsRoute)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 7" fill="none" />
                  <g>
                    <circle className="ds-ping" cx="36" cy="150" r="9" fill="rgba(71,196,121,0.35)" />
                    <circle cx="36" cy="150" r="4.5" fill="#47c479" stroke="#0d1117" strokeWidth="1.5" />
                    <circle className="ds-ping d2" cx="118" cy="112" r="9" fill="rgba(61,128,167,0.4)" />
                    <circle cx="118" cy="112" r="4.5" fill="#3d80a7" stroke="#0d1117" strokeWidth="1.5" />
                    <circle className="ds-ping d3" cx="266" cy="44" r="9" fill="rgba(240,160,80,0.35)" />
                    <circle cx="266" cy="44" r="4.5" fill="#e8964f" stroke="#0d1117" strokeWidth="1.5" />
                  </g>
                  <circle r="3.4" fill="#7ed8a4" stroke="#fff" strokeWidth="1.2">
                    <animateMotion dur="7s" repeatCount="indefinite" path={ROUTE_D} />
                  </circle>
                </svg>
                <div className="ds-chips">
                  <span>Individual</span>
                  <span>Por zona</span>
                  <span className="live">En vivo</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="ds-card ds-card-kpi" ref={kpiRef} aria-hidden="true">
            <Reveal delay={440}>
              <div className="ds-card-inner ds-float-b">
                <div className="ds-kpi-row">
                  <span className="ds-kpi-label">Total gestiones</span>
                  <span className="ds-trend">
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 17 L10 11 L14 15 L20 7" />
                      <path d="M14 7h6v6" />
                    </svg>
                    +30 %
                  </span>
                </div>
                <div className="ds-kpi-value">{total.toLocaleString('es-EC')}</div>
                <svg className="ds-spark" viewBox="0 0 220 64" role="presentation">
                  <defs>
                    <linearGradient id="dsSparkStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#3d80a7" />
                      <stop offset="1" stopColor="#7ed8a4" />
                    </linearGradient>
                    <linearGradient id="dsSparkFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="rgba(61,128,167,0.35)" />
                      <stop offset="1" stopColor="rgba(61,128,167,0)" />
                    </linearGradient>
                  </defs>
                  <path
                    className="ds-spark-area"
                    d="M 6 46 C 22 40 30 50 44 44 S 70 30 84 34 S 112 20 128 26 S 158 12 172 18 S 198 8 214 10 L 214 60 L 6 60 Z"
                    fill="url(#dsSparkFill)"
                  />
                  <path
                    className="ds-spark-line"
                    d="M 6 46 C 22 40 30 50 44 44 S 70 30 84 34 S 112 20 128 26 S 158 12 172 18 S 198 8 214 10"
                    stroke="url(#dsSparkStroke)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle className="ds-ping" cx="214" cy="10" r="8" fill="rgba(126,216,164,0.35)" />
                  <circle cx="214" cy="10" r="3.4" fill="#7ed8a4" stroke="#0d1117" strokeWidth="1.4" />
                </svg>
                <small className="ds-kpi-foot">últimos 30 días</small>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
