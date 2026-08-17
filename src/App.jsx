import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Planes from './pages/Planes.jsx'
import Servicios from './pages/Servicios.jsx'
import Aria from './pages/Aria.jsx'
import Contacto from './pages/Contacto.jsx'
import NotFound from './pages/NotFound.jsx'

const PAGES = {
  '/': Home,
  '/planes': Planes,
  '/servicios': Servicios,
  '/ia': Aria,
  '/contacto': Contacto,
}

const getRoute = () => {
  const h = window.location.hash
  return h.startsWith('#/') ? h.slice(1) : '/'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const Page = PAGES[route] || NotFound

  return (
    <>
      <Navbar route={route} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}
