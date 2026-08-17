import Icon from '../icons.jsx'
import logoBlanco from '../../assets/logoblanco.png'

const DEFAULT_REGIONS = [{ top: '20%', right: '2%', bottom: '8%', left: '13%' }]

export default function ProtectedScreen({ regions = DEFAULT_REGIONS }) {
  return (
    <>
      {regions.map((r, i) => (
        <div className="protected-blur" style={r} key={i} aria-hidden="true" />
      ))}
      <div className="protected-veil" aria-hidden="true" />
      <div className="protected-mark" aria-hidden="true">
        <img src={logoBlanco} alt="" />
      </div>
      <div className="protected-badge">
        <Icon name="lock" size={14} />
        <span>Vista reservada</span>
      </div>
    </>
  )
}
