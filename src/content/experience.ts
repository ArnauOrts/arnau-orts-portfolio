import type { Education, Job } from './types.ts'

/** Work history, newest first, from the owner's CV (Spanish version, the authoritative dates). */
export const experience: Job[] = [
  {
    slug: 'velzio',
    placeholder: false,
    company: 'Velzio',
    role: { es: 'Desarrollador full-stack', en: 'Full-stack developer' },
    start: '03/2026',
    end: '09/2026',
    summary: {
      es: 'Diseño y desarrollo desde cero de un marketplace web y móvil multiplataforma con React Native, Expo Router y Supabase.',
      en: 'Designed and built from scratch a cross-platform web and mobile marketplace with React Native, Expo Router and Supabase.',
    },
    stack: ['React Native', 'TypeScript', 'Supabase', 'PostgreSQL'],
  },
  {
    slug: 'treelogic',
    placeholder: false,
    company: 'Treelogic',
    role: { es: 'Desarrollador full-stack', en: 'Full-stack developer' },
    start: '06/2024',
    end: '01/2026',
    summary: {
      es: 'Nuevas funcionalidades y mantenimiento de aplicaciones web y de la intranet interna: backend en Java (Spring) con bases de datos SQL y frontend en Angular.',
      en: 'New features and maintenance for web applications and the internal intranet: Java (Spring) backend with SQL databases and an Angular frontend.',
    },
    stack: ['Java', 'Spring', 'Angular', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    slug: 'bto',
    placeholder: false,
    company: 'BTO',
    role: { es: 'Desarrollador full-stack', en: 'Full-stack developer' },
    start: '10/2023',
    end: '06/2024',
    summary: {
      es: 'Desarrollo y personalización de una plataforma de compraventa en WordPress (Elementor), con backend en PHP y SQL, comunicaciones con clientes en AJO y mejoras de rendimiento y usabilidad.',
      en: 'Built and customised a marketplace platform on WordPress (Elementor), with a PHP and SQL backend, customer communications in AJO and performance and usability improvements.',
    },
    stack: ['WordPress', 'PHP', 'SQL', 'JavaScript'],
  },
]

/** Education, newest first. */
export const education: Education[] = [
  {
    slug: 'bootcamp',
    title: { es: 'Bootcamp Full Stack JavaScript', en: 'Full Stack JavaScript Bootcamp' },
    short: { es: 'Bootcamp Fundación Esplai', en: 'Fundación Esplai bootcamp' },
    school: 'Fundación Esplai',
    start: '01/2024',
    end: '06/2024',
    stack: ['Node.js', 'React', 'Vue', 'Astro', 'SQL', 'Tailwind CSS'],
  },
  {
    slug: 'daw',
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      en: 'Higher Technician in Web Application Development',
    },
    short: { es: 'CFGS Aplicaciones Web', en: 'Web Applications diploma' },
    school: 'Institut Pedralbes',
    start: '09/2021',
    end: '06/2022',
    stack: ['PHP', 'Node.js', 'SQL', 'JavaScript', 'Vue', 'React', 'Angular'],
  },
  {
    slug: 'dam',
    title: {
      es: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
      en: 'Higher Technician in Cross-Platform Application Development',
    },
    short: { es: 'CFGS Aplicaciones Multiplataforma', en: 'Cross-Platform Applications diploma' },
    school: 'Institut Pedralbes',
    start: '09/2019',
    end: '06/2021',
    stack: ['Java', 'C#', 'C++', 'Unity', 'SQL'],
  },
]
