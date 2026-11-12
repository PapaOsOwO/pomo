import { Coins } from 'lucide-react'
import PanelMascota from './components/PanelMascota.jsx'
import PanelTareas from './components/PanelTareas.jsx'
import { mascotaInicial, monedasIniciales, tareasFicticias } from './utils/datosIniciales.js'

// Estructura principal: mascota a la izquierda, tareas a la derecha (apiladas en móvil)
function App() {
  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-4 py-6 sm:px-6 lg:py-10">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          pomo<span className="text-naranja-tostado">.</span>
        </h1>
        <p
          className="flex items-center gap-2 rounded-full border-2 border-naranja-suave bg-crema-claro px-4 py-1.5 font-extrabold tabular-nums shadow-bloque"
          aria-label={`${monedasIniciales} monedas`}
        >
          <Coins className="size-5 text-naranja-tostado" strokeWidth={2.5} aria-hidden="true" />
          {monedasIniciales}
        </p>
      </header>

      <main className="grid flex-1 gap-6 lg:grid-cols-[5fr_7fr]">
        <PanelMascota mascota={mascotaInicial} />
        <PanelTareas tareas={tareasFicticias} />
      </main>
    </div>
  )
}

export default App
