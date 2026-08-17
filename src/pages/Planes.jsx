import PageHero from '../components/PageHero.jsx'
import PlansShowcase from '../components/PlansShowcase.jsx'
import Plans from '../components/Plans.jsx'
import Faq from '../components/Faq.jsx'

export default function Planes() {
  return (
    <>
      <PageHero
        title={
          <>
            Tu inversión merece <span className="accent">resultados específicos</span>
          </>
        }
      >
        Obtén el beneficio total de nuestro equipo de expertos en una solución diseñada solo para
        ti.
      </PageHero>
      <PlansShowcase />
      <Plans />
      <Faq />
    </>
  )
}
