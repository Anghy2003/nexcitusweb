export default function PhoneMock() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-screen">
          <div className="phone-notch" />
          <p className="phone-title">Ruta de hoy · Zona Norte</p>
          <div className="phone-banner">Faltan 3 clientes por visitar</div>
          <div className="phone-card">
            <b>
              Cliente A. Morales <span className="pill ok">Visitado</span>
            </b>
            <small>Gestión registrada · foto + GPS</small>
          </div>
          <div className="phone-card">
            <b>
              Cliente R. Sánchez <span className="pill ok">Visitado</span>
            </b>
            <small>Acuerdo de pago registrado</small>
          </div>
          <div className="phone-card">
            <b>
              Cliente L. Vega <span className="pill wait">Siguiente</span>
            </b>
            <small>A 1,2 km · navegación activa</small>
          </div>
          <div className="phone-progress">
            <i />
          </div>
          <p className="phone-progress-label">5 de 8 visitas completadas · sin conexión ✓</p>
        </div>
      </div>
    </div>
  )
}
