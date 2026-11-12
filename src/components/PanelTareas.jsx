import { Plus } from 'lucide-react'
import TarjetaTarea from './TarjetaTarea.jsx'

// Panel derecho: lista de tareas del día (interfaz estática)
function PanelTareas({ tareas }) {
  const totalCompletadas = tareas.filter((tarea) => tarea.completada).length

  return (
    <section
      aria-labelledby="titulo-tareas"
      className="flex flex-col rounded-[2rem] border-2 border-naranja-suave bg-crema-claro p-5 shadow-bloque sm:p-7"
    >
      <header className="flex items-baseline justify-between gap-4">
        <h2 id="titulo-tareas" className="text-2xl font-semibold">
          Tareas de hoy
        </h2>
        <p className="text-sm font-bold text-cafe-suave tabular-nums">
          {totalCompletadas} de {tareas.length} hechas
        </p>
      </header>

      <form className="mt-5 flex gap-2" onSubmit={(evento) => evento.preventDefault()}>
        <label htmlFor="nueva-tarea" className="sr-only">
          Nueva tarea
        </label>
        <input
          id="nueva-tarea"
          type="text"
          placeholder="¿Qué quieres hacer hoy?"
          className="min-w-0 flex-1 rounded-2xl border-2 border-arena bg-crema px-4 py-3 font-semibold placeholder:text-cafe-suave/70 focus:border-naranja-suave focus:outline-none"
        />
        <button
          type="submit"
          className="flex items-center gap-1.5 rounded-2xl border-2 border-naranja-tostado bg-naranja-suave px-4 py-3 font-extrabold shadow-bloque-naranja transition-transform active:translate-y-1 active:shadow-none"
        >
          <Plus className="size-5" strokeWidth={3} aria-hidden="true" />
          <span className="hidden sm:inline">Añadir</span>
        </button>
      </form>

      <ul className="mt-5 space-y-3">
        {tareas.map((tarea) => (
          <TarjetaTarea key={tarea.id} tarea={tarea} />
        ))}
      </ul>
    </section>
  )
}

export default PanelTareas
