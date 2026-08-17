import Reveal from './Reveal.jsx'
import ProtectedScreen from './ProtectedScreen.jsx'
import demoVideo from '../../assets/demo-nexcitus.mp4'

const REGIONS = [
  { top: '2%', right: '48%', bottom: '90%', left: '17%' },
  { top: '20%', right: '12%', bottom: '3%', left: '11%' },
]

export default function VideoDemo() {
  return (
    <section className="video-section">
      <div className="container">
        <Reveal className="section-head center">
          <h2>
            Vea la plataforma <span className="accent">en movimiento</span>
          </h2>
        </Reveal>
        <Reveal className="video-laptop" delay={120}>
          <div className="video-laptop-screen">
            <span className="video-laptop-cam" />
            <div className="video-laptop-display protected">
              <video src={demoVideo} autoPlay loop muted playsInline preload="metadata" />
              <ProtectedScreen regions={REGIONS} />
            </div>
          </div>
          <div className="video-laptop-base" />
        </Reveal>
      </div>
    </section>
  )
}
