import { Heart, Zap } from 'lucide-react'
import BarraEstadistica from './BarraEstadistica.jsx'

// Panel izquierdo: la mascota virtual y su estado
function PanelMascota({ mascota }) {
  return (
    <section
      aria-labelledby="titulo-mascota"
      className="flex flex-col rounded-[2rem] border-2 border-naranja-suave bg-crema-claro p-5 shadow-bloque sm:p-7"
    >
      <header className="flex items-baseline justify-between">
        <h2 id="titulo-mascota" className="text-2xl font-semibold">
          {mascota.nombre}
        </h2>
        <span className="rounded-full bg-verde-suave px-3 py-1 text-sm font-bold text-verde-hoja">
          {mascota.estadoAnimo}
        </span>
      </header>

      {/* Escena de la mascota: suelo de césped y sol de tarde */}
      <div className="relative mt-5 flex flex-1 items-end justify-center overflow-hidden rounded-3xl border-2 border-arena bg-linear-to-b from-beige to-crema min-h-64 lg:min-h-80">
        <div className="absolute top-6 right-8 size-14 rounded-full bg-naranja-suave/60" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-verde-pastel" aria-hidden="true" />
        <span
          className="relative mb-6 select-none text-[7rem] leading-none drop-shadow-[0_6px_0_rgba(91,70,54,0.15)] sm:text-[9rem]"
          role="img"
          aria-label={`Mascota ${mascota.nombre}`}
        >
          {mascota.emoji}
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <BarraEstadistica etiqueta="Salud" valor={mascota.salud} Icono={Heart} colorRelleno="bg-naranja-suave" />
        <BarraEstadistica etiqueta="Energía" valor={mascota.energia} Icono={Zap} colorRelleno="bg-verde-pastel" />
      </div>
    </section>
  )
}

export default PanelMascota
