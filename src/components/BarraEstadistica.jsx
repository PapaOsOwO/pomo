// Barra de progreso para las estadísticas de la mascota (salud, energía...)
function BarraEstadistica({ etiqueta, valor, Icono, colorRelleno }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm font-bold">
        <span className="flex items-center gap-1.5">
          <Icono className="size-4" strokeWidth={2.5} aria-hidden="true" />
          {etiqueta}
        </span>
        <span className="tabular-nums text-cafe-suave">{valor}%</span>
      </div>
      <div
        className="h-3.5 overflow-hidden rounded-full border-2 border-arena bg-crema-claro"
        role="progressbar"
        aria-label={etiqueta}
        aria-valuenow={valor}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={`h-full rounded-full ${colorRelleno}`} style={{ width: `${valor}%` }} />
      </div>
    </div>
  )
}

export default BarraEstadistica
