import { useState } from 'react'
import Icon from '../icons.jsx'
import Reveal from './Reveal.jsx'
import { FAQS } from '../data.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Tus preguntas, <span className="accent">respondidas</span>
          </h2>
        </Reveal>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <Reveal
              className={`faq-item${openIndex === i ? ' open' : ''}`}
              key={f.q}
              delay={i * 60}
            >
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                {f.q}
                <Icon name="plus" size={20} />
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
