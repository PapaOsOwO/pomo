import { Check, Coins } from 'lucide-react'

// Una fila de la lista de tareas (estática por ahora)
function TarjetaTarea({ tarea }) {
  const { titulo, categoria, recompensa, completada } = tarea

  return (
    <li
      className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3 transition-colors ${
        completada ? 'border-verde-pastel bg-verde-suave/60' : 'border-arena bg-crema-claro hover:border-naranja-suave'
      }`}
    >
      <button
        type="button"
        aria-pressed={completada}
        aria-label={completada ? `Desmarcar «${titulo}»` : `Completar «${titulo}»`}
        className={`grid size-7 shrink-0 place-items-center rounded-lg border-2 transition-colors ${
          completada
            ? 'border-verde-hoja bg-verde-hoja text-crema-claro'
            : 'border-naranja-suave bg-crema-claro hover:bg-beige'
        }`}
      >
        {completada && <Check className="size-4" strokeWidth={3.5} aria-hidden="true" />}
      </button>

      <div className="min-w-0 flex-1">
        <p className={`truncate font-bold ${completada ? 'text-cafe-suave line-through' : ''}`}>{titulo}</p>
        <p className="text-sm text-cafe-suave">{categoria}</p>
      </div>

      <span className="flex shrink-0 items-center gap-1 rounded-full bg-beige px-2.5 py-1 text-sm font-extrabold tabular-nums">
        <Coins className="size-4 text-naranja-tostado" strokeWidth={2.5} aria-hidden="true" />+{recompensa}
      </span>
    </li>
  )
}

export default TarjetaTarea
