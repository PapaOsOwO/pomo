# Proyecto Pomo

Aplicación web gamificada de productividad y gestión de hábitos, construida con **React (JavaScript)**, **Vite** y **TailwindCSS 4**.

## Directrices de estilo UI/UX

- **Inspiración visual:** ambiente "lofi" acogedor (tipo Lofi.Town): relajado, cálido, pixel-friendly. Tómalo como referencia de ambiente, no copies sus assets ni su marca.
- **Paleta de colores:** tonos cálidos, fondos beige/crema, detalles en verde pastel y bordes anaranjados suaves. La paleta está definida con nombre en el bloque `@theme` de `src/index.css` (`crema`, `crema-claro`, `beige`, `arena`, `verde-pastel`, `verde-suave`, `verde-hoja`, `naranja-suave`, `naranja-tostado`, `cafe`, `cafe-suave`). Usa esas utilidades (`bg-crema`, `border-naranja-suave`…) en lugar de valores hexadecimales sueltos; si hace falta un color nuevo, añádelo allí.
- **Tipografía y diseño:** Fredoka para títulos (`font-titulo`) y Nunito para texto (`font-cuerpo`). Bordes redondeados, estética relajada, elementos amigables y gráficos limpios. Sombras sólidas desplazadas (`shadow-bloque`, `shadow-bloque-naranja`).
- **Estructura principal:** diseño responsivo dividido en dos paneles:
  - **Panel izquierdo:** área de la mascota virtual (`PanelMascota`).
  - **Panel derecho:** panel de tareas y cronómetros (`PanelTareas`).
  - En móvil, los paneles se apilan verticalmente.

## Arquitectura y estructura de carpetas

- Lenguaje: JavaScript moderno (ES6+). Nada de TypeScript.
- Estructura dentro de `/src`, con carpetas aisladas:
  - `/components` — componentes de interfaz.
  - `/hooks` — lógica local y de estado (hooks personalizados).
  - `/utils` — cálculos de monedas y tiempo (funciones puras) y datos iniciales.
  - `/assets` — imágenes.
- **Persistencia:** el estado de la aplicación (tareas completadas, salud, monedas) se guarda en `localStorage`. Centraliza la lectura/escritura en un hook (p. ej. `useAlmacenamientoLocal`) y protege los accesos con `try/catch` y valores por defecto.

## Reglas de idioma y código

- **Estrictamente en español:** nombres de variables, funciones, componentes, comentarios en el código y explicaciones en la terminal, 100 % en español.
  - Ejemplos: `ListaDeTareas`, `useCronometro`, `calcularMonedas`, `saludMascota`.
  - Excepción inevitable: APIs y palabras reservadas de JavaScript/React/librerías (`useState`, `className`, `onClick`, etc.).
- Usa componentes funcionales y Hooks de React (`useState`, `useEffect`, y hooks personalizados en `/hooks`).
- Iconos con `lucide-react`.
- Si hacen falta datos iniciales para visualizar la interfaz, genera tareas ficticias genéricas (p. ej. "Tarea de prueba 1", "Completar informe") en `src/utils/datosIniciales.js`.

## Flujo de trabajo

- Autonomía para instalar dependencias de npm, modificar, refactorizar o eliminar archivos según lo requiera el desarrollo.
- El desarrollo se guía por un **tablero Kanban**. Al recibir una tarjeta:
  1. Implementa los cambios que pide la tarjeta.
  2. Asegúrate de que el proyecto sigue compilando (`npm run build` y `npm run lint`, y que `npm run dev` arranca sin errores).
  3. Haz el commit correspondiente.

## Convención de commits

Eres responsable de los commits. Usa **exclusivamente Conventional Commits en español**:

- `feat: [descripción]` — nuevas funcionalidades.
- `fix: [descripción]` — solución de errores.
- `chore: [descripción]` — mantenimiento o dependencias.
- `style: [descripción]` — cambios de interfaz con TailwindCSS.

Ejemplos:
- `feat: añadir cronómetro pomodoro al panel de tareas`
- `fix: corregir el cálculo de monedas al completar una tarea`
- `chore: instalar dependencias de TailwindCSS`
- `style: redondear las tarjetas de tareas y aplicar fondo crema`
