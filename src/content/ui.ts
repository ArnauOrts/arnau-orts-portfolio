import type { LayerId, Localized } from './types.ts'

interface UiText {
  meta: { title: string; description: string }
  skipLink: string
  nav: { work: string; stack: string; experience: string; contact: string; label: string }
  language: { label: string; names: Localized }
  actions: {
    seeProjects: string
    contact: string
    downloadCv: string
    cvPending: string
    demo: string
    code: string
    linksPending: string
  }
  placeholder: { badge: string; title: string; pending: string; pendingTitle: string }
  layers: Record<LayerId, string>
  project: {
    role: string
    year: string
    stack: string
    layersLabel: string
    screenshotPending: string
    /** Read by screen readers after a link that opens in a new tab. */
    newTab: string
  }
  work: { title: string }
  stack: { title: string; lead: string; usedIn: string }
  experience: { title: string; present: string; education: string; languages: string }
  contact: {
    title: string
    lead: string
    emailLabel: string
    elsewhere: string
  }
  footer: { built: string; top: string }
}

export const ui: Localized<UiText> = {
  es: {
    meta: {
      title: 'Arnau Orts Brichs · Desarrollador full-stack',
      description:
        'Portfolio de Arnau Orts Brichs, desarrollador full-stack: proyectos con su interfaz, su API y sus datos.',
    },
    skipLink: 'Saltar al contenido',
    nav: {
      work: 'Proyectos',
      stack: 'Tecnologías',
      experience: 'Trayectoria',
      contact: 'Contacto',
      label: 'Secciones',
    },
    language: { label: 'Idioma', names: { es: 'Español', en: 'English' } },
    actions: {
      seeProjects: 'Ver proyectos',
      contact: 'Contactar',
      downloadCv: 'Descargar CV',
      cvPending: 'CV pendiente',
      demo: 'Ver demo',
      code: 'Código',
      linksPending: 'Enlaces pendientes',
    },
    placeholder: {
      badge: 'Ejemplo',
      title: 'Contenido de ejemplo que se sustituirá por el real',
      pending: 'Pendiente',
      pendingTitle: 'Dato real todavía por añadir',
    },
    layers: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Datos',
    },
    project: {
      role: 'Rol',
      year: 'Año',
      stack: 'Stack',
      layersLabel: 'Qué se hizo en cada capa',
      screenshotPending: 'Captura pendiente',
      newTab: ' (se abre en una pestaña nueva)',
    },
    work: { title: 'Proyectos' },
    stack: {
      title: 'Tecnologías',
      lead: 'Cada tecnología, con el proyecto, el puesto o la formación donde la he usado. Cuanto más grande, en más sitios.',
      usedIn: 'Usado en',
    },
    experience: { title: 'Trayectoria', present: 'Actualidad', education: 'Formación', languages: 'Idiomas' },
    contact: {
      title: 'Hablemos',
      lead: 'Para una entrevista, un puesto o un encargo, escríbeme y respondo personalmente.',
      emailLabel: 'Correo pendiente',
      elsewhere: 'También en',
    },
    footer: { built: 'Diseñado y construido por Arnau Orts Brichs.', top: 'Volver arriba' },
  },
  en: {
    meta: {
      title: 'Arnau Orts Brichs · Full-stack developer',
      description:
        'Portfolio of Arnau Orts Brichs, full-stack developer: projects shown with their interface, API and data.',
    },
    skipLink: 'Skip to content',
    nav: {
      work: 'Projects',
      stack: 'Technologies',
      experience: 'Experience',
      contact: 'Contact',
      label: 'Sections',
    },
    language: { label: 'Language', names: { es: 'Español', en: 'English' } },
    actions: {
      seeProjects: 'See projects',
      contact: 'Get in touch',
      downloadCv: 'Download CV',
      cvPending: 'CV pending',
      demo: 'Live demo',
      code: 'Code',
      linksPending: 'Links pending',
    },
    placeholder: {
      badge: 'Example',
      title: 'Sample content that will be replaced with the real thing',
      pending: 'Pending',
      pendingTitle: 'Real detail still to be added',
    },
    layers: {
      frontend: 'Frontend',
      backend: 'Backend',
      data: 'Data',
    },
    project: {
      role: 'Role',
      year: 'Year',
      stack: 'Stack',
      layersLabel: 'What was built on each layer',
      screenshotPending: 'Screenshot pending',
      newTab: ' (opens in a new tab)',
    },
    work: { title: 'Projects' },
    stack: {
      title: 'Technologies',
      lead: 'Each technology with the project, role or training where I used it. The bigger the word, the more places.',
      usedIn: 'Used in',
    },
    experience: { title: 'Experience', present: 'Present', education: 'Education', languages: 'Languages' },
    contact: {
      title: 'Let’s talk',
      lead: 'For an interview, a role or a project, write to me and I will answer personally.',
      emailLabel: 'Email pending',
      elsewhere: 'Also on',
    },
    footer: { built: 'Designed and built by Arnau Orts Brichs.', top: 'Back to top' },
  },
}
