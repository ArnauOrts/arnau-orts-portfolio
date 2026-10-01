import type { Language, Profile } from './types.ts'

/**
 * Personal data, taken from the owner's CV (October 2026).
 * Published contact is the email only, by the owner's choice: no phone,
 * LinkedIn, GitHub or downloadable CV. Add them to `links` / `cv` if that changes.
 */
export const profile: Profile = {
  name: 'Arnau Orts Brichs',
  role: {
    es: 'Desarrollador full-stack',
    en: 'Full-stack developer',
  },
  intro: {
    es: 'Experiencia principal en Node.js, Java, Angular y React. Construyo aplicaciones web y móviles de extremo a extremo: la interfaz, la API y los datos.',
    en: 'Core experience in Node.js, Java, Angular and React. I build web and mobile applications end to end: the interface, the API and the data.',
  },
  email: 'orts.brichs.arnau@gmail.com',
  links: [],
  cv: null,
}

export const languages: Language[] = [
  { name: { es: 'Castellano', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Catalán', en: 'Catalan' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'B2', en: 'B2' } },
]
