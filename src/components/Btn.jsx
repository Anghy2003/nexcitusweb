export default function Btn({ href, variant = 'primary', small = false, icon = null, external = false, children, ...rest }) {
  const extra = external ? { target: '_blank', rel: 'noreferrer' } : {}
  return (
    <a
      className={`btn btn-${variant}${small ? ' btn-sm' : ''}`}
      href={href}
      {...extra}
      {...rest}
    >
      {icon}
      <span className="btn-label">{children}</span>
    </a>
  )
}
