const PATHS = {
  shield: <path d="M12 3l7 3v5c0 4.6-3 8.1-7 10-4-1.9-7-5.4-7-10V6l7-3z" />,
  scale: (
    <>
      <path d="M12 3v18M8 21h8M4 7h16" />
      <path d="M6 7l-3 6a3.4 3.4 0 006 0L6 7zM18 7l-3 6a3.4 3.4 0 006 0l-3-6z" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s-6.5-5.4-6.5-10.2A6.5 6.5 0 0112 4.3a6.5 6.5 0 016.5 6.5C18.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.8" r="2.2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.8 4.4L18.2 9l-4.4 1.8L12 15.2l-1.8-4.4L5.8 9l4.4-1.6L12 3z" />
      <path d="M18.5 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.2 19.6c.4-3.2 2.7-5 5.8-5s5.4 1.8 5.8 5" />
      <path d="M15.5 5.8a3 3 0 110 5.6M17.3 14.9c2.3.5 3.6 2 4 4.4" />
    </>
  ),
  flag: <path d="M6 21V4m0 .8h11.4l-2.3 4 2.3 4H6" />,
  chart: <path d="M4 20h17M6.5 20v-6.5M11.5 20V6.5M16.5 20v-9.5" />,
  route: (
    <>
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="5" r="2.2" />
      <path d="M8.2 19H14a4 4 0 004-4v-5" />
    </>
  ),
  megaphone: <path d="M3 10.5v3a1 1 0 001 1h2.5l8.5 4.6V4.9L6.5 9.5H4a1 1 0 00-1 1zM18.5 9a3.2 3.2 0 010 6M8.5 15.4V18a2 2 0 004 .4" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10.5h17" />
    </>
  ),
  folder: <path d="M3.5 7a2 2 0 012-2h4l2 2.2h7a2 2 0 012 2V17a2 2 0 01-2 2h-13a2 2 0 01-2-2V7z" />,
  receipt: <path d="M5.5 3.5h13V20.5l-2.2-1.4-2.1 1.4-2.2-1.4-2.1 1.4-2.2-1.4-2.2 1.4V3.5zM9 8.5h6M9 12.5h6" />,
  file: (
    <>
      <path d="M6.5 2.5h7l4.5 4.5v13a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 015 20V4a1.5 1.5 0 011.5-1.5z" />
      <path d="M13.5 2.5V7H18M9 13h6M9 16.5h4" />
    </>
  ),
  book: <path d="M4.5 5.5a3 3 0 013-3H19.5v16.5h-12a3 3 0 00-3 3V5.5zM19.5 16h-12a3 3 0 00-3 3" />,
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8.2 10.5V7.8a3.8 3.8 0 117.6 0v2.7" />
    </>
  ),
  bell: <path d="M6.3 9.8a5.7 5.7 0 0111.4 0c0 4.6 1.8 5.7 1.8 5.7H4.5s1.8-1.1 1.8-5.7zM10.2 19.5a1.9 1.9 0 003.6 0" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2v5l3.2 2" />
    </>
  ),
  cloudOff: <path d="M6.5 18.5A4.5 4.5 0 016 9.6a6 6 0 0111.3-1.7 4.6 4.6 0 012.6 8M4 4l16 16" />,
  camera: (
    <>
      <path d="M4 8.2a1.7 1.7 0 011.7-1.7H8l1.6-2h4.8l1.6 2h2.3A1.7 1.7 0 0120 8.2v9.1a1.7 1.7 0 01-1.7 1.7H5.7A1.7 1.7 0 014 17.3V8.2z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </>
  ),
  fingerprint: <path d="M8 5.2A7.6 7.6 0 0119.4 12c0 2.5-.3 4.9-1 7M4.9 8.4A7.6 7.6 0 004.6 12c0 2.7-.5 4.7-1.3 6.3M12 8.6A3.5 3.5 0 0115.5 12c0 2.7-.3 5.3-1.1 7.8M8.5 12a3.5 3.5 0 011.6-3M8.3 15.6c-.3 1.7-.8 3.3-1.5 4.7M12 12.2c0 3-.5 5.9-1.4 8.4" />,
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12.5" rx="2" />
      <path d="M9 7.5V5.8A1.8 1.8 0 0110.8 4h2.4A1.8 1.8 0 0115 5.8v1.7M3.5 12.7h17" />
    </>
  ),
  building: <path d="M4 21h16M6 21V4.5A1.5 1.5 0 017.5 3h9A1.5 1.5 0 0118 4.5V21M9.5 7h1.5M13 7h1.5M9.5 10.5h1.5M13 10.5h1.5M9.5 14h1.5M13 14h1.5M10.5 21v-3.5h3V21" />,
  bank: <path d="M3 9.5L12 4l9 5.5M4.5 9.5V19M9 9.5V19M15 9.5V19M19.5 9.5V19M2.5 21h19M12 7.8h.01" />,
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  whatsapp: (
    <>
      <path d="M12 3.6a8.4 8.4 0 00-7.2 12.7L3.6 20.4l4.2-1.1A8.4 8.4 0 1012 3.6z" />
      <path d="M9.3 8.9c.6-1.2 1.3-.6 1.7.2.3.7.1 1.1-.3 1.5-.3.3 1 2.3 2.7 3 .5.2.8-.9 1.5-.7.8.3 1.5.8.9 1.7-2.4 3.2-9-3.2-6.5-5.7z" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8 8 0 01-8.6 8L7 21l1-3.2A8 8 0 1121 11.5z" />
      <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
    </>
  ),
  volume: (
    <>
      <path d="M4 9.5v5h3.5L12 18.5v-13L7.5 9.5H4z" />
      <path d="M15.5 9a4.2 4.2 0 010 6M18 6.5a8 8 0 010 11" />
    </>
  ),
  phone: (
    <path d="M5 4h3.5l1.5 4-2 1.5a12 12 0 006.5 6.5L16 14l4 1.5V19a2 2 0 01-2.2 2A16.8 16.8 0 013 6.2 2 2 0 015 4z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  arrowRight: <path d="M4 12h15M13.5 6l6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  moon: <path d="M20 13.5A8 8 0 1110.5 4 6.5 6.5 0 0020 13.5z" />,
}

const FLAT = new Set(['menu', 'x', 'check', 'arrowRight', 'plus', 'moon'])
const LAYERS = 5
const DEPTH = 3

const IMG3D = import.meta.glob('../assets/3dicons/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
})

export default function Icon({ name, size = 24, className = '' }) {
  const neon = !FLAT.has(name)
  if (neon && size >= 22) {
    const url = IMG3D[`../assets/3dicons/${name}.png`]
    if (url) {
      const px = Math.round(size * 1.7)
      return (
        <img
          className={`icon-3dimg ${className}`.trim()}
          src={url}
          alt=""
          width={px}
          height={px}
          loading="lazy"
          aria-hidden="true"
        />
      )
    }
  }
  const iso = neon && size >= 22
  const cls = `${neon ? 'icon-neon' : ''} ${iso ? 'icon-3d' : ''} ${className}`.trim()
  return (
    <svg
      className={cls}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iso
        ? Array.from({ length: LAYERS }, (_, i) => {
            const t = i / (LAYERS - 1)
            const off = (DEPTH * (1 - t)).toFixed(2)
            return (
              <g
                key={i}
                transform={`translate(${off} -${off})`}
                opacity={(0.28 + 0.72 * t).toFixed(2)}
                strokeWidth={i === LAYERS - 1 ? 1.7 : 1.05}
              >
                {PATHS[name]}
              </g>
            )
          })
        : PATHS[name] || null}
    </svg>
  )
}
