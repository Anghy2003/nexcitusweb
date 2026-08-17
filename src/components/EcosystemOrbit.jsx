import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from '../icons.jsx'
import logoMark from '../../assets/Copia-de-Copia-de-Logo-Legalsat-Nexcitus-5.png'

const SATS = [
  { icon: 'sparkles', title: 'Aria, Agente IA', color: '#a48bf5', x: 33, y: 50, size: 62, depth: 3 },
  { icon: 'mapPin', title: 'GPS Cobranza', color: '#47c479', x: 65, y: 50, size: 62, depth: 3 },
  { icon: 'scale', title: 'Procesos judiciales', color: '#8b7ae8', x: 30, y: 14, size: 54, depth: 1.6 },
  { icon: 'users', title: 'Clientes y carteras', color: '#4cc3e8', x: 66, y: 14, size: 54, depth: 1.6 },
  { icon: 'chart', title: 'Panel de gestiones', color: '#7db8d8', x: 13, y: 37, size: 56, depth: 2 },
  { icon: 'flag', title: 'Etapas de cobranza', color: '#e8964f', x: 84, y: 37, size: 56, depth: 2 },
  { icon: 'calendar', title: 'Agenda y planificación', color: '#e3c05b', x: 17, y: 84, size: 52, depth: 1.8 },
  { icon: 'megaphone', title: 'Campañas', color: '#d86b9c', x: 31, y: 88, size: 56, depth: 2.2 },
  { icon: 'route', title: 'Rutas optimizadas', color: '#35b8a4', x: 66, y: 88, size: 56, depth: 2.2 },
  { icon: 'shield', title: 'Seguridad por diseño', color: '#5b9fc9', x: 80, y: 84, size: 52, depth: 1.8 },
]

export default function EcosystemOrbit() {
  const stageRef = useRef(null)
  const parRefs = useRef([])
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let nx = 0
    let ny = 0
    const apply = () => {
      raf = 0
      parRefs.current.forEach((el, i) => {
        if (!el) return
        const d = SATS[i].depth
        el.style.transform = `translate(${nx * -13 * d}px, ${ny * -9 * d}px)`
      })
    }
    const onMove = (e) => {
      const r = stage.getBoundingClientRect()
      nx = (e.clientX - r.left) / r.width - 0.5
      ny = (e.clientY - r.top) / r.height - 0.5
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const onLeave = () => {
      nx = 0
      ny = 0
      if (!raf) raf = requestAnimationFrame(apply)
    }
    stage.addEventListener('mousemove', onMove)
    stage.addEventListener('mouseleave', onLeave)
    return () => {
      stage.removeEventListener('mousemove', onMove)
      stage.removeEventListener('mouseleave', onLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="orbit-section" id="ecosistema">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Un solo sistema, <span className="accent">todo tu ecosistema</span>
          </h2>
          <p>
            Cada módulo de Nexcitus orbita alrededor de la misma plataforma: la información fluye
            entre cobranza, campo, legal e inteligencia artificial sin salir del sistema.
          </p>
        </Reveal>
        <div className={`orbit-stage${seen ? ' in' : ''}`} ref={stageRef}>
          <div className="orbit-glow" aria-hidden="true" />
          <span className="orbit-ring r1" aria-hidden="true" />
          <span className="orbit-ring r2" aria-hidden="true" />
          <span className="orbit-ripple" aria-hidden="true" />
          <span className="orbit-ripple d2" aria-hidden="true" />
          <span className="orbit-dash left" aria-hidden="true" />
          <span className="orbit-dash right" aria-hidden="true" />
          <div className="orbit-center">
            <img src={logoMark} alt="Nexcitus" />
          </div>
          {SATS.map((s, i) => (
            <div
              className="orbit-sat"
              key={s.icon}
              style={{ left: `${s.x}%`, top: `${s.y}%`, '--size': `${s.size}px`, '--c': s.color }}
            >
              <div className="orbit-pop" style={{ animationDelay: `${0.15 + i * 0.09}s` }}>
                <div className="orbit-par" ref={(el) => (parRefs.current[i] = el)}>
                  <div
                    className="orbit-bob"
                    style={{ animationDuration: `${5.5 + (i % 4) * 1.3}s`, animationDelay: `${-i * 1.1}s` }}
                  >
                    <div className="orbit-bubble" role="img" aria-label={s.title}>
                      <Icon name={s.icon} size={s.size >= 60 ? 26 : 22} />
                    </div>
                    <span className="orbit-label">{s.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
