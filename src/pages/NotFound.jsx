import Btn from '../components/Btn.jsx'
import Reveal from '../components/Reveal.jsx'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container">
        <Reveal className="notfound-art">
          <svg viewBox="0 0 640 400" role="img" aria-label="Error 404 — página no encontrada">
            <defs>
              <linearGradient id="nf-cloud" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#262626" />
                <stop offset="1" stopColor="#181818" />
              </linearGradient>
              <linearGradient id="nf-brand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#3d80a7" />
                <stop offset="1" stopColor="#26618a" />
              </linearGradient>
            </defs>

            <g className="nf-float-b" fill="url(#nf-brand)">
              <circle cx="185" cy="120" r="34" />
              <circle cx="232" cy="100" r="44" />
              <circle cx="285" cy="122" r="36" />
              <rect x="150" y="112" width="170" height="44" rx="22" />
            </g>

            <g className="nf-float-c" fill="url(#nf-brand)" opacity="0.85">
              <circle cx="505" cy="232" r="26" />
              <circle cx="540" cy="218" r="32" />
              <circle cx="575" cy="236" r="24" />
              <rect x="480" y="228" width="118" height="34" rx="17" />
            </g>

            <g className="nf-float-c" fill="url(#nf-brand)" opacity="0.5">
              <circle cx="85" cy="265" r="22" />
              <circle cx="115" cy="252" r="28" />
              <circle cx="148" cy="268" r="20" />
              <rect x="62" y="262" width="110" height="30" rx="15" />
            </g>

            <g fill="url(#nf-cloud)" stroke="rgba(255, 255, 255, 0.08)">
              <circle cx="235" cy="205" r="62" />
              <circle cx="320" cy="165" r="84" />
              <circle cx="400" cy="195" r="70" />
              <rect x="170" y="195" width="300" height="70" rx="35" />
            </g>

            <g className="nf-float-a">
              <path d="M488 132l-20 30 38-12z" fill="#1a1a1a" stroke="rgba(255, 255, 255, 0.1)" />
              <circle cx="505" cy="95" r="42" fill="#1a1a1a" stroke="rgba(255, 255, 255, 0.1)" />
              <text className="nf-bubble-text" x="505" y="102" textAnchor="middle" fontSize="20" fill="#ffffff">
                ¡Ups!
              </text>
            </g>

            <text className="nf-num" x="320" y="243" textAnchor="middle" fontSize="92" fill="#ffffff">
              404
            </text>
            <g transform="rotate(-5 320 272)">
              <rect x="245" y="252" width="150" height="40" rx="12" fill="#0f3a56" stroke="rgba(61, 128, 167, 0.55)" />
              <text className="nf-pill-text" x="323" y="279" textAnchor="middle" fontSize="20" fill="#ffffff">
                ERROR
              </text>
            </g>
          </svg>
        </Reveal>

        <Reveal delay={120}>
          <h1>
            Página <span className="accent">no encontrada</span>
          </h1>
          <p>
            La página que buscas no existe o cambió de dirección. Vuelve al inicio para seguir
            navegando.
          </p>
          <Btn href="#/">Volver al inicio</Btn>
        </Reveal>
      </div>
    </section>
  )
}
