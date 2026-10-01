import type { Project } from './types.ts'

/**
 * Projects, featured first. Every fact comes from the owner's CV and the
 * product's own screens; nothing here is invented. Add new projects with the
 * same shape and `placeholder: false`.
 */
export const projects: Project[] = [
  {
    slug: 'velzio',
    placeholder: false,
    name: { es: 'Velzio', en: 'Velzio' },
    kind: { es: 'Marketplace web y móvil', en: 'Web and mobile marketplace' },
    year: '2026',
    summary: {
      es: 'Marketplace de coches y motos clásicas con comunidad: anuncios de vehículos y piezas, perfiles y publicaciones, en web, Android e iOS.',
      en: 'A marketplace for classic cars and motorbikes with a community: vehicle and parts listings, profiles and posts, on web, Android and iOS.',
    },
    role: { es: 'Diseño y desarrollo desde cero', en: 'Design and development from scratch' },
    layers: {
      frontend: {
        summary: {
          es: 'Aplicación multiplataforma con React Native y Expo Router, con diseño de UI/UX propio.',
          en: 'A cross-platform app built with React Native and Expo Router, with its own UI/UX design.',
        },
        work: {
          es: [
            'Navegación con Expo Router',
            'Formularios multipaso para publicar anuncios',
            'Gestión de estado y subida de imágenes a la nube',
            'Despliegue en Android, iOS y web',
          ],
          en: [
            'Navigation with Expo Router',
            'Multi-step forms to publish listings',
            'State management and cloud image uploads',
            'Deployment to Android, iOS and web',
          ],
        },
        stack: ['React Native', 'Expo Router', 'TypeScript'],
      },
      backend: {
        summary: {
          es: 'Backend e infraestructura sobre Supabase: cuentas, anuncios y perfiles.',
          en: 'Backend and infrastructure on Supabase: accounts, listings and profiles.',
        },
        work: {
          es: [
            'Autenticación con email y contraseña, y OAuth con Google',
            'Listados y publicación de anuncios',
            'Perfiles de usuario',
          ],
          en: [
            'Email and password authentication, plus Google OAuth',
            'Listings and ad publishing',
            'User profiles',
          ],
        },
        stack: ['Supabase'],
      },
      data: {
        summary: {
          es: 'Base de datos PostgreSQL modelada desde cero y protegida fila a fila.',
          en: 'A PostgreSQL database modelled from scratch and protected row by row.',
        },
        work: {
          es: ['Modelado de la base de datos PostgreSQL', 'Políticas de seguridad a nivel de fila (RLS)'],
          en: ['PostgreSQL database modelling', 'Row-level security policies (RLS)'],
        },
        stack: ['PostgreSQL'],
      },
    },
    links: { demo: 'https://velziogroup.com' },
    screenshots: [
      {
        src: '/projects/velzio-inicio.png',
        alt: {
          es: 'Portada de Velzio con la selección de coches clásicos en venta y la barra de navegación inferior.',
          en: 'Velzio home screen with the selection of classic cars for sale and the bottom navigation bar.',
        },
        width: 1903,
        height: 907,
      },
      {
        src: '/projects/velzio-comunidad.png',
        alt: {
          es: 'Sección Comunidad de Velzio con publicaciones destacadas de restauraciones.',
          en: 'Velzio Community section with featured restoration posts.',
        },
        width: 1904,
        height: 905,
      },
    ],
  },
]
