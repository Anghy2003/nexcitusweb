import { useEffect, useRef, useState } from 'react'
import Icon from '../icons.jsx'
import { APP_MODULES } from '../data.js'
import promoApp from '../../assets/6.jpg'

const AUTOPLAY_MS = 4500

export default function AppFeatureExplorer() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [inView, setInView] = useState(false)
  const rootRef = useRef(null)
  const reduced = useRef(false)

  useEffect(() => {
    reduced.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!inView || paused || reduced.current) return
    const t = setTimeout(() => setActive((a) => (a + 1) % APP_MODULES.length), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [active, paused, inView])

  const mod = APP_MODULES[active]

  return (
    <div
      className={`app-explorer${paused ? ' paused' : ''}`}
      ref={rootRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="app-x-spin" aria-hidden="true" />
      <div className="app-x-inner">
        <div className="app-photo">
          <img
            src={promoApp}
            alt="Nexcitus móvil: el primer CRM creado por abogados para la gestión judicial y prejudicial"
          />
          <span className="app-badge">
            <i />
            App móvil · 100 % offline
          </span>
        </div>
        <div className="app-tiles">
          {APP_MODULES.map((m, i) => (
            <button
              type="button"
              key={m.title}
              className={`app-tile${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <Icon name={m.icon} size={22} />
              <span>{m.title}</span>
              {i === active && <i className="app-tile-progress" />}
            </button>
          ))}
        </div>
        <div className="app-detail" key={mod.title}>
          <div className="app-detail-visual">
            <span className="app-detail-ring" aria-hidden="true" />
            <span className="app-detail-orb" aria-hidden="true" />
            <Icon name={mod.icon} size={40} />
          </div>
          <div className="app-detail-copy">
            <b>{mod.title}</b>
            <p>{mod.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
