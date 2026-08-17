# webnexcitus — Sitio web público de Nexcitus

Landing page de marketing de Nexcitus (nexcitus.com renovado), construida con **React 18 + Vite**.
Réplica de la estructura y animaciones de la plantilla Novawell (novawell.webflow.io) con la
paleta de marca Nexcitus: fondo `#0D0D0D`, azul del menú del cliente `#0F3A56` en superficies
(botones, chips) y azul claro `#3D80A7` en acentos, tipografías **Lexend** (títulos) y
**Manrope** (cuerpo), botones
píldora con label deslizante al hover, hero sticky con letras gigantes animadas y líneas de fondo
con destellos, reveals al scroll (`translateY(80px) + blur(10px)`), marquee de clientes y sección
de funcionalidades con scrollytelling (teléfono sticky cuya pantalla cambia según el bloque
numerado activo — `FeatureShowcase.jsx`) y sección final «¡Empieza hoy!» que replica la timeline
IX2 real de la plantilla (`DemoCta.jsx`): tres paneles que convergen y se encogen (31vw→17.5vw,
x ±18.5vw en el tramo 20–50 % del scroll), un marco de teléfono que sube desde abajo (100vh→0 en
40–50 %) y los envuelve, y el texto gigante que barre la pantalla por detrás (−100vw→+100vw en
20–85 %), con suavizado exponencial equivalente al smoothing 50 de Webflow.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción → dist/
npm run preview   # servir el build localmente
```

## Estructura

Sitio **multipágina** con router por hash (sin dependencias, funciona en cualquier hosting
estático): `#/` Home · `#/planes` · `#/servicios` · `#/contacto`. El enlace activo se resalta
en el menú.

- `src/pages/` — una página por archivo: **Home** (hero + clientes + pilares + segmentos +
  "¡Empieza hoy!"), **Servicios** (scrollytelling de funcionalidades + grid de módulos +
  IA/GPS/app/seguridad), **Planes** (planes + FAQ), **Contacto** (tarjetas de contacto + CTA).
- `src/data.js` — **todo el contenido editable** (textos, módulos, planes, FAQ, clientes, enlaces
  de WhatsApp y login). Para cambiar textos no hace falta tocar componentes.
- `src/components/` — secciones reutilizables: Navbar, Hero, PageHero, ClientsMarquee, Features,
  FeatureShowcase, Modules, Highlights, Segments, Plans, Faq, DemoCta, Cta, Footer.
- `src/styles.css` — estilos globales con variables CSS (`:root`) para colores y tipografía.
- `assets/` — logo (`logoclaro.png`) e imágenes promocionales reales; se importan desde los
  componentes con rutas relativas.
- `Nexcitus-Contenido-Nueva-Web.docx` — documento fuente con todo el contenido y su origen.

## Notas

- El botón «Ingresar» apunta a `LOGIN_URL` en `src/data.js` (hoy: legalsat.com).
- Los logos de clientes son texto estilizado en el carrusel; reemplazar por imágenes reales
  cuando se tengan los archivos (`src/components/ClientsMarquee.jsx`).
- Los enlaces de Términos y Privacidad del footer son placeholders (`#`) pendientes de página.
