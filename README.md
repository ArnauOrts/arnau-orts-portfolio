# Arnau Orts Brichs · Portfolio

Portfolio personal de Arnau Orts Brichs, desarrollador full-stack. Es bilingüe (español e inglés) y ocupa una sola página. Cada proyecto se presenta dividido en sus tres capas: frontend, backend y datos.

*Personal portfolio of Arnau Orts Brichs, full-stack developer. A bilingual (Spanish/English) single page where every project is broken down into its frontend, backend and data layers.*

## Stack

- React 19, TypeScript y Vite.
- CSS plano con tokens propios, sin framework de estilos.
- Tipografías variables autoalojadas: Anybody (con ejes de ancho y peso) para los títulos y Geist para el texto.
- Internacionalización propia, sin librerías: recuerda el idioma elegido y actualiza `lang`, el título y la descripción.

## Puesta en marcha

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # comprobación de tipos y build de producción en dist/
npm run lint     # ESLint
npm run preview  # sirve el build de producción
```

## Cómo se edita el contenido

Todo el contenido está en `src/content/`, separado de los componentes, y cada texto existe en los dos idiomas (`{ es, en }`).

- `profile.ts`: nombre, rol, presentación, contacto e idiomas.
- `projects.ts`: proyectos, cada uno con su resumen, lo que se hizo en cada capa, los enlaces y las capturas (en `public/projects/`).
- `experience.ts`: experiencia laboral y formación.
- `ui.ts`: textos de la interfaz.

Las tecnologías no se escriben a mano. `derive.ts` las saca de los proyectos, los puestos y la formación, y cada una enlaza a los sitios que la respaldan.

## Diseño

La dirección visual se llama "tipografía cinética". Los títulos son enormes y variables, y se ensanchan al acercar el puntero. Cada proyecto ocupa un campo de color plano. El sistema de diseño está documentado en `DESIGN.md`, y el historial de decisiones, en `CHANGELOG.md`.
