import { useEffect, useRef, useState } from 'react'
import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import { SHOWCASE, WHATSAPP } from '../data.js'
import shotLogin from '../../assets/Screenshot_20260809-160538.jpg'
import shotDashboard from '../../assets/Screenshot_20260809-160720.jpg'
import shotGps from '../../assets/Screenshot_20260809-160812.jpg'

const SHOTS = { ruta: shotGps, mapa: shotDashboard, offline: shotLogin, riesgo: shotDashboard }

export default function FeatureShowcase() {
  const [active, setActive] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index))
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    itemRefs.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className="showcase" id="funcionalidades">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Descubre las funcionalidades <span className="accent">clave</span> de Nexcitus
          </h2>
        </Reveal>
        <div className="showcase-grid">
          <div className="showcase-media">
            <div className="showcase-glow" aria-hidden="true" />
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="screens">
                  {SHOWCASE.map((s, i) => (
                    <div className={`screen shot${i === active ? ' active' : ''}`} key={s.num}>
                      <img src={SHOTS[s.screen]} alt={s.title} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-items">
            {SHOWCASE.map((s, i) => (
              <article
                key={s.num}
                ref={(el) => (itemRefs.current[i] = el)}
                data-index={i}
                className={`showcase-item${i === active ? ' active' : ''}`}
              >
                <span className="showcase-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <Reveal className="showcase-actions center">
          <Btn href={WHATSAPP} external>
            Solicitar una demo
          </Btn>
          <Btn href="#/planes" variant="secondary">
            Ver planes
          </Btn>
        </Reveal>
      </div>
    </section>
  )
}
