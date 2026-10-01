# Registro de cambios

Historial de cambios relevantes del proyecto, del más reciente al más antiguo. Léelo antes de hacer cualquier cambio (ver CLAUDE.md).

## 2026-10-01

- La web se despliega en Vercel, a petición del usuario: https://arnau-orts-portfolio.vercel.app. El proyecto se llama `arnau-orts-portfolio` y lleva la configuración de Vite detectada automáticamente.
  - **Despliegue:** por ahora se hace con la CLI (`npx vercel deploy --prod`). La conexión automática con GitHub falló porque falta instalar la app de Vercel en la cuenta de GitHub. Cuando esté instalada, cada `git push` desplegará solo.
  - **`.gitignore`:** Vercel añadió `.vercel` y `.env*`; `.env.local` contiene un token OIDC que no debe subirse.
  - **Documentación:** el README y `CLAUDE.md` recogen la dirección pública.

- Se añade LinkedIn (linkedin.com/in/arnauorts, del CV) a la sección de contacto, a petición del usuario. Aparece como botón bajo el correo y se abre en una pestaña nueva, con el aviso para lectores de pantalla (`profile.ts`, `Contact.tsx`). Se actualizan `PRODUCT.md` y `CLAUDE.md`.

- El botón "Contactar" de la primera pantalla lleva a la sección de contacto (`#contact`) en lugar de abrir el correo, a petición del usuario. Ahora lleva una flecha hacia abajo, como "Ver proyectos" (`Hero.tsx`).

- Se quita la etiqueta "Último uso" de las tecnologías porque al usuario no le convence. El orden y el tamaño siguen dependiendo de la recencia. Debajo de cada palabra quedan solo la capa (si la tiene) y los enlaces a donde se usó (`TechSpecimen.tsx`, `derive.ts`, `ui.ts`).

- Las tecnologías se ordenan y dimensionan por su uso más reciente, a petición del usuario. Antes contaba el número de sitios donde aparecían, y SQL salía la más grande solo por estar en los tres programas de formación.
  - **Datos** (`derive.ts`): cada fuente guarda su fecha de fin. Un proyecto toma la del puesto con el que se hizo. La tecnología usa la más reciente y se ordena por ella, y en caso de empate por número de sitios y por nombre.
  - **Presentación** (`TechSpecimen.tsx`): el tamaño va de la más antigua a la más reciente. Cada palabra muestra "Último uso" y el año, y sus fuentes van de la más reciente a la más antigua.
  - **Tamaño máximo:** se reduce para que quepan varias palabras por línea.
  - **Texto:** se reescribe la entradilla de la sección en `ui.ts`.

- Se corrige el efecto del puntero en los títulos cinéticos (`KineticText.tsx`).
  - **Fallo:** el efecto guardaba las letras una sola vez al montarse. Si el contenido del título cambiaba sin cambiar su texto, por ejemplo al añadir el enlace o en una recarga en caliente, seguía animando letras que ya no estaban en la página y el hover dejaba de verse.
  - **Corrección:** ahora busca las letras cada vez que mide, al entrar el puntero o si las anteriores ya no están en la página.

- El título y las capturas de cada proyecto enlazan a su web (`links.demo`) y la abren en una pestaña nueva, a petición del usuario. El enlace "Ver demo" se mantiene.
  - **Título:** `KineticText` admite una prop `link`. El efecto cinético se conserva, y los lectores de pantalla leen el nombre seguido de "(se abre en una pestaña nueva)".
  - **Capturas:** al pasar el ratón suben 4 px y su borde se pone en lima, el acento reservado para hover. Con movimiento reducido no se desplazan.
  - **Artículo:** se identifica por el nombre del proyecto (`aria-label`), para que no incluya el aviso de pestaña nueva.
  - **Archivos:** `ProjectField.tsx/.css`, `KineticText.tsx/.css` y `ui.ts`.

- Se cambian las capturas de Velzio a petición del usuario. Se toman de la web en producción (velziogroup.com) a doble resolución: la portada y la sección Comunidad.
  - **Formato:** WebP a 1600 × 1000 px (unos 100–120 KB cada una), en lugar de PNG de 0,5–1 MB, para que la página cargue más rápido.
  - **Archivos:** las nuevas están en `public/projects/velzio-portada.webp` y `velzio-comunidad.webp`, y se borran los PNG anteriores. Su origen queda registrado en los archivos `.webp.json` contiguos.
  - **Datos:** se actualizan las rutas, las dimensiones y los textos alternativos en `src/content/projects.ts`.

- El proyecto pasa a git y se publica en GitHub, en el repositorio público https://github.com/ArnauOrts/arnau-orts-portfolio (rama `main`), a petición del usuario.
  - **Qué no se sube** (`.gitignore`): las herramientas de terceros (`.claude/skills` y `.claude/agents`, que se restauran con `skills-lock.json` y el instalador de impeccable) y los artefactos de trabajo de impeccable (capturas de revisión, críticas y páginas de decisión). El sistema de diseño (`DESIGN.md`, `.impeccable/design.json`) y el contrato de dirección sí se versionan.
  - **README:** `README.md` sustituye el de la plantilla de Vite por uno propio, que explica el proyecto, cómo arrancarlo y cómo editar el contenido.
  - **Herramientas:** se instala GitHub CLI (`gh`) en el equipo para crear el repositorio.
  - **CLAUDE.md:** recoge el repositorio y deja de decir que no hay historial de git.

- Se completa el contenido real a partir de los CV del usuario (`Downloads/CV Arnau Orts.pdf`, fuente de las fechas por decisión del usuario, y las versiones en inglés para las traducciones). Ya no queda contenido de ejemplo.
  - **Perfil** (`src/content/profile.ts`): presentación basada en el resumen del CV y correo como único contacto publicado. El usuario decidió no publicar teléfono, LinkedIn, GitHub ni CV descargable, así que se quitan las ranuras de "CV pendiente".
  - **Proyecto** (`src/content/projects.ts`): solo Velzio, por decisión del usuario, con sus tres capas, el enlace a velziogroup.com y dos capturas reales en `public/projects/`. Las capturas llevan su origen incrustado.
  - **Experiencia** (`src/content/experience.ts`): Velzio, Treelogic y BTO. Se añaden la formación (bootcamp, CFGS DAW y DAM) y los idiomas, que se muestran en la sección Trayectoria.
- Cambios de modelo y componentes:
  - **Tipos:** `Project.screenshots` admite varias capturas con sus dimensiones. Se añaden los tipos `Education` y `Language`, y `Job` incorpora un `slug` para sus anclas.
  - **Tecnologías:** `derive.ts` las saca de proyectos, puestos y formación. Cada palabra enlaza a los sitios que la respaldan y crece según cuántos son, así que tecnologías del CV como Node.js o React aparecen con prueba.
  - **Primera pantalla:** la segunda acción pasa a ser "Contactar" por correo.
  - **Contacto:** el correo usa la fuente de lectura y cabe en una línea en móvil.
- Se actualizan `PRODUCT.md` (contacto decidido, proyecto y experiencia reales) y `CLAUDE.md` (estado del proyecto y derivación de tecnologías).

- Rediseño completo: se sustituye la dirección "sección con luz natural" por "tipografía cinética".
  - **Por qué:** al usuario no le gustó nada del diseño anterior: ni la metáfora del edificio, ni los colores apagados, ni la tipografía condensada en cursiva. Además lo veía poco moderno. En la nueva ronda de impeccable (semilla 7cc5305b) eligió la dirección asignada.
  - **Cómo es:**
    - El nombre y los títulos de proyecto van en letra enorme y variable, y se ensanchan y engordan al acercar el puntero.
    - Cada proyecto ocupa un campo de color plano a sangre (cobalto, bermellón y lima por orden) sobre fondo papel con tinta negra.
    - El lima queda reservado para el estado activo y el hover.
  - **Contrato:** está actualizado en `.impeccable/surfaces/src-app-tsx.md`.
  - **Sistema de diseño:** `DESIGN.md` y `.impeccable/design.json` se regeneran por completo para el nuevo mundo.
- Componentes nuevos:
  - `Hero` y `KineticText`, el texto cinético. Ajusta el nombre al ancho y solo reacciona con puntero fino; con movimiento reducido no se anima.
  - `ProjectField`, con un hueco para la captura de cada proyecto que queda fijo junto a las capas.
  - `TechSpecimen`, con las tecnologías agrupadas por número de proyectos.
  - Hooks `useReveal` (revelado por secuencia) y `useActiveSection` (sección activa en la navegación).
  - Se reescriben `SiteHeader`, `Experience` y `Contact`.
  - Se eliminan `SectionDrawing`, `section-geometry.ts`, `LayerAxis`, `Showcase`, `ProjectSheet`, `StackLegend` y `SectionHead`.
- Contenido:
  - **Captura opcional:** el tipo `Project` admite `screenshot` (ruta en `public/` y texto alternativo bilingüe). Mientras falte, se muestra "Captura pendiente".
  - **Tecnologías:** `derive.ts` expone `techIndex`, con cada tecnología una sola vez, sus capas y sus proyectos.
  - **Textos:** se reescriben los de interfaz en `ui.ts`.
- Dependencias: se quitan `@fontsource/barlow` y `@fontsource/barlow-condensed`. Se añaden `@fontsource-variable/anybody`, con ejes de ancho y peso, y `@fontsource-variable/geist`.
- Se aplican las correcciones de `/impeccable critique` (22/32) y de la revisión final, que dio por resueltas las siete correcciones de diseño:
  - Corte tipográfico ancho en reposo, en lugar del condensado que el usuario rechazó.
  - El nombre llena el ancho y el rol no se parte por el guion.
  - Sin desbordamiento a 1024 px, con la navegación completa desde 64rem.
  - La entrada animada nunca oculta el nombre.
  - El estado activo de la navegación es legible sin depender del color.
  - Sin antetítulos.
  - Una sola marca por cada dato pendiente.
- Se actualiza `CLAUDE.md`: estado del proyecto, arquitectura y fuentes.

- Se construye la interfaz del portfolio y se sustituye la plantilla de Vite.
  - **Dirección visual:** "sección con luz natural", elegida por el usuario en la ronda de impeccable (semilla 87870293). Cada proyecto se dibuja como un edificio en sección: la interfaz arriba, la API en medio y los datos bajo rasante, iluminados por un haz de luz. Se eligió porque demuestra el perfil full-stack en vez de afirmarlo (PRODUCT.md, principios 2 y 3).
  - **Contrato de dirección:** está en `.impeccable/surfaces/src-app-tsx.md`.
  - **Sistema de diseño:** está en `DESIGN.md` y `.impeccable/design.json`, generados a partir del código construido. Paleta de cal, poché, oro y azul sombra. Tipografías Barlow Condensed en cursiva y Barlow, autoalojadas.
- Nueva arquitectura de contenido e idioma, sin librerías:
  - **Contenido:** datos tipados y bilingües en `src/content/` (`profile.ts`, `projects.ts`, `experience.ts`, `ui.ts`, `types.ts`). Las tecnologías se derivan de los proyectos en `derive.ts`, para que ninguna aparezca sin un proyecto que la respalde.
  - **Idioma:** proveedor propio en `src/i18n/`, que recuerda la elección en `localStorage` y actualiza `lang`, el título y la descripción.
  - **Motivo:** sin datos reales todavía, todo lo pendiente vive en un solo sitio y es fácil de sustituir.
- Contenido de ejemplo marcado.
  - **Qué se inventó y qué no:** los proyectos y la experiencia son ejemplos con la marca visible "Ejemplo / Example". El correo, los enlaces y el CV aparecen como "Pendiente / Pending". Solo son reales el nombre, el rol full-stack y la frase de presentación, esta última derivada del posicionamiento de PRODUCT.md.
  - **Cómo se sustituye:** el CV se activa rellenando `profile.cv` y dejando los PDF en `public/cv/`.
- Componentes nuevos en `src/components/`:
  - **Cabecera:** con selector ES/EN y, en móvil y tablet, una barra inferior de secciones.
  - **Primera pantalla:** dibujo en sección generado por proyecto (`SectionDrawing`, `section-geometry.ts`), eje de capas accesible como pestañas (`LayerAxis`) y selector de proyecto.
  - **Resto de la página:** fichas de proyecto con miniatura, leyenda de tecnologías enlazada a cada proyecto, trayectoria, y contacto con pie.
- Movimiento según las skills de Emil:
  - **Momentos:** el haz de luz entra al cargar, se desplaza al cambiar de capa y los elementos del dibujo hacen un fundido al cambiar de proyecto.
  - **Reglas:** solo `transform` y `opacity`, y siempre hay variante para `prefers-reduced-motion`.
- Se aplican las correcciones de `/impeccable critique` (22/32) y de la revisión final:
  - Foco visible en los botones achaflanados.
  - Contacto y CV pendientes con el mismo peso visual que los reales.
  - El dibujo aparece en la primera pantalla del móvil.
  - Lenguaje llano en lugar de jerga de arquitectura.
  - Objetivos táctiles de 44 px.
  - Salas habitadas y dibujos distintos por proyecto.
- Dependencias añadidas: `@fontsource/barlow` y `@fontsource/barlow-condensed`.
- Se eliminan los restos de la plantilla: `src/App.css`, `src/assets/` y `public/icons.svg`. Se crean un favicon propio y un `index.html` en español con descripción.
- Se actualizan `CLAUDE.md` (estado del proyecto y arquitectura) y `PRODUCT.md` (nombre mostrado y contenido de ejemplo).

- Se instalan en el proyecto las skills `vercel-react-best-practices` y `vercel-composition-patterns`, del repositorio oficial `vercel-labs/agent-skills`, en `.claude/skills/`. Se revisaron: solo contienen documentación, sin scripts. `npx skills` crea `skills-lock.json` para poder restaurarlas. En `CLAUDE.md` se corrigen los nombres a los publicados, que llevan el prefijo `vercel-`.

- `CLAUDE.md` (editado por el usuario): nueva sección "Skills" con este flujo de trabajo:
  - Interfaces con impeccable, y `/impeccable critique` antes de dar una pantalla por terminada.
  - Animaciones con `emil-design-eng` y `animate`.
  - Código React con `react-best-practices` y `composition-patterns` (todavía no instaladas).
  - Tras cada feature visual, comprobarla con `agent-browser` en localhost, con captura.

- Se instala Impeccable en el proyecto (`.claude/skills/impeccable`, `.claude/agents`) y se activa el hook detector de diseño: `.impeccable/config.json` y hooks `PostToolUse`/`Stop` en `.claude/settings.local.json`. Revisa automáticamente cada archivo de interfaz que se edita. Los archivos de configuración locales se añaden a `.gitignore`.

- Se añade el registro de cambios obligatorio: se crea `CHANGELOG.md` y `CLAUDE.md` exige leerlo antes de actuar y actualizarlo después de cada cambio relevante.
- Se crea `PRODUCT.md` con el contexto de producto: portfolio full-stack; primero para reclutadores y después para clientes freelance; bilingüe español/inglés; hay proyectos con demos y CV disponibles, pero aún no están en el repo. Quedan pendientes el nombre o la marca, los canales de contacto, el formato del CV, el despliegue y el blog.
- Se crea `CLAUDE.md` con los comandos, la arquitectura y las restricciones de TypeScript/ESLint del proyecto (plantilla Vite + React + TypeScript sin modificar).
