import { useEffect, useRef } from 'react'
import Btn from './Btn.jsx'
import Reveal from './Reveal.jsx'
import { WHATSAPP, LOGIN_URL } from '../data.js'
import shotLogin from '../../assets/Screenshot_20260809-160538.jpg'
import shotDashboard from '../../assets/Screenshot_20260809-160720.jpg'
import shotGps from '../../assets/Screenshot_20260809-160812.jpg'

const clamp01 = (v) => Math.min(Math.max(v, 0), 1)
const seg = (p, a, b) => clamp01((p - a) / (b - a))

export default function DemoCta() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const gridRef = useRef(null)
  const firstRef = useRef(null)
  const secondRef = useRef(null)
  const thirdRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const apply = (p) => {
      const single = window.innerWidth <= 1020
      const conv = seg(p, 0.2, 0.5)
      if (!single) {
        const w = 31 - 13.5 * conv
        const gap = window.innerWidth * 0.0125
        const gridW = gridRef.current ? gridRef.current.offsetWidth : 0
        const shift = (gridW / 3 + gap / 3) * conv
        if (firstRef.current) {
          firstRef.current.style.width = `${w}vw`
          firstRef.current.style.transform = `translateX(${shift}px)`
        }
        if (thirdRef.current) {
          thirdRef.current.style.width = `${w}vw`
          thirdRef.current.style.transform = `translateX(${-shift}px)`
        }
        if (secondRef.current) secondRef.current.style.width = `${w}vw`
      } else {
        if (firstRef.current) {
          firstRef.current.style.width = ''
          firstRef.current.style.transform = ''
        }
        if (thirdRef.current) {
          thirdRef.current.style.width = ''
          thirdRef.current.style.transform = ''
        }
        if (secondRef.current) secondRef.current.style.width = ''
      }
      if (frameRef.current) {
        frameRef.current.style.transform = `translateY(${100 - 100 * seg(p, 0.4, 0.5)}vh)`
      }
      if (headingRef.current) {
        headingRef.current.style.transform = `translateX(${-100 + 200 * seg(p, 0.2, 0.85)}vw)`
      }
    }

    if (reduced) {
      apply(0.55)
      return
    }

    const target = () => {
      const el = sectionRef.current
      if (!el) return 0
      const rect = el.getBoundingClientRect()
      return clamp01((window.innerHeight - rect.top) / (window.innerHeight + rect.height))
    }

    let current = target()
    apply(current)

    let raf = 0
    const tick = () => {
      const t = target()
      current += (t - current) * 0.14
      if (Math.abs(t - current) < 0.001) current = t
      apply(current)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <>
      <section className="open-section" id="demo" ref={sectionRef}>
        <div className="open-sticky">
          <div className="open-stage">
            <div className="open-big-text" ref={headingRef} aria-hidden="true">
              ¡Empieza hoy!
            </div>
            <div className="open-grid" ref={gridRef}>
              <div className="open-card side shot" ref={firstRef}>
                <div className="shot-phone">
                  <div className="shot-screen">
                    <img src={shotLogin} alt="Login de la app móvil de Nexcitus" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="open-card center shot" ref={secondRef}>
                <div className="shot-phone">
                  <div className="shot-screen">
                    <img
                      src={shotDashboard}
                      alt="Resumen de cartera en la app móvil de Nexcitus"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="open-card side shot" ref={thirdRef}>
                <div className="shot-phone">
                  <div className="shot-screen">
                    <img
                      src={shotGps}
                      alt="GPS Cobranza con ruta optimizada en la app móvil de Nexcitus"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-frame" ref={frameRef}>
              <div className="frame-bezel">
                <div className="frame-screen">
                  <img src={shotLogin} alt="" aria-hidden="true" />
                </div>
                <span className="frame-notch" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="open-cta">
        <div className="container">
          <Reveal>
            <p className="hero-sub">
              Nexcitus es el aliado de tu operación de cobranza y legal: gestiona tu cartera con
              confianza desde el primer día.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <div className="hero-actions" style={{ marginBottom: 28 }}>
              <Btn href={WHATSAPP} external>
                Solicitar una demo
              </Btn>
              <Btn href={LOGIN_URL} variant="secondary" external>
                Ingresar a la plataforma
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={190}>
            <p className="open-note">+30 % de productividad de sus abogados desde el primer día</p>
          </Reveal>
        </div>
      </div>
    </>
  )
}
