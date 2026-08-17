import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from '../icons.jsx'
import { STATS } from '../data.js'

const GLYPHS = '0123456789%+/-AKXΔ#'

function Scramble({ value, started, delay }) {
  const [text, setText] = useState(value)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!started) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf
    let last = 0
    const dur = 950
    let t0 = 0
    const timer = setTimeout(() => {
      setRunning(true)
      t0 = performance.now()
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur)
        if (now - last > 38) {
          last = now
          const lock = Math.floor(p * value.length)
          setText(
            value
              .split('')
              .map((ch, i) => {
                if (i < lock || ch === ' ') return ch
                return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
              })
              .join(''),
          )
        }
        if (p < 1) {
          raf = requestAnimationFrame(tick)
        } else {
          setText(value)
          setRunning(false)
        }
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => {
      clearTimeout(timer)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [started, value, delay])

  return (
    <b aria-label={value} className={running ? 'scrambling' : undefined}>
      <span aria-hidden="true">{text}</span>
    </b>
  )
}

export default function StatCards() {
  const gridRef = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const onMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const x = e.clientX - r.left
    const y = e.clientY - r.top
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rx = (y / r.height - 0.5) * -5
    const ry = (x / r.width - 0.5) * 7
    card.style.transform = `perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`
  }

  const onLeave = (e) => {
    e.currentTarget.style.transform = ''
  }

  return (
    <div className="hero-stats" ref={gridRef}>
      {STATS.map((s, i) => (
        <Reveal className="stat-shell" key={s.value} delay={i * 90}>
          <div className="stat" onMouseMove={onMove} onMouseLeave={onLeave}>
            <span className="stat-beam" aria-hidden="true" style={{ '--beam-delay': `${-i * 1.7}s` }} />
            <span className="stat-icon" aria-hidden="true">
              <Icon name={s.icon} size={17} />
            </span>
            <Scramble value={s.value} started={seen} delay={300 + i * 140} />
            <small>{s.label}</small>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
