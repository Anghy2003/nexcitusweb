import PageHero from '../components/PageHero.jsx'
import DashboardShowcase from '../components/DashboardShowcase.jsx'
import FeatureShowcase from '../components/FeatureShowcase.jsx'
import Modules from '../components/Modules.jsx'
import ModeShowcase from '../components/ModeShowcase.jsx'
import Highlights from '../components/Highlights.jsx'

export default function Servicios() {
  return (
    <>
      <PageHero
        title={
          <>
            Todo lo que Nexcitus <span className="accent">hace por ti</span>
          </>
        }
      >
        Cobranza prejudicial y judicial, riesgo con inteligencia artificial, trabajo de campo con
        GPS y una plataforma con módulos para cada etapa de la recuperación.
      </PageHero>
      <DashboardShowcase />
      <FeatureShowcase />
      <Modules />
      <ModeShowcase />
      <Highlights />
    </>
  )
}
