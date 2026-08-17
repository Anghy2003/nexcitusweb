import { useState } from 'react'
import Icon from '../icons.jsx'
import Btn from './Btn.jsx'
import { NAV_LINKS, LOGIN_URL } from '../data.js'
import logo from '../../assets/logoblanco.png'

export default function Navbar({ route = '/' }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#/" className="logo-chip">
          <img src={logo} alt="Legalsat-Nexcitus — Soluciones Tecnológicas" />
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={l.href.slice(1) === route ? 'active' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <Btn href={LOGIN_URL} small external>
            Ingresar
          </Btn>
          <button
            className="nav-burger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            <Icon name={open ? 'x' : 'menu'} size={26} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="nav-mobile">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={LOGIN_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Ingresar
          </a>
        </nav>
      )}
    </header>
  )
}
