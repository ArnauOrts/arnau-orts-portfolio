export const LOCALES = ['es', 'en'] as const
export type Locale = (typeof LOCALES)[number]

/** Every visible string exists in both languages (PRODUCT.md: bilingual parity). */
export type Localized<T = string> = Record<Locale, T>

/** The three layers every project is broken into: interface, services, data. */
export const LAYER_IDS = ['frontend', 'backend', 'data'] as const
export type LayerId = (typeof LAYER_IDS)[number]

export interface ProjectLayer {
  /** One sentence on what this layer does in the project. */
  summary: Localized
  /** Concrete work done on this layer. */
  work: Localized<string[]>
  /** Technologies used on this layer. */
  stack: string[]
}

export interface Project {
  slug: string
  /** True while the project is sample content that must be replaced. */
  placeholder: boolean
  name: Localized
  kind: Localized
  year: string
  summary: Localized
  role: Localized
  layers: Record<LayerId, ProjectLayer>
  links: {
    demo?: string
    code?: string
  }
  /** Screenshots under /public, first one leads; omit until provided. */
  screenshots?: Screenshot[]
}

export interface Screenshot {
  /** Path under /public, e.g. '/projects/velzio-inicio.png'. */
  src: string
  alt: Localized
  width: number
  height: number
}

export interface Job {
  /** Stable id for anchors, e.g. 'treelogic'. */
  slug: string
  placeholder: boolean
  company: string
  role: Localized
  start: string
  /** Omit while the position is current. */
  end?: string
  summary: Localized
  stack: string[]
}

export interface Education {
  slug: string
  title: Localized
  /** Short name used where space is tight, e.g. as proof under a technology. */
  short: Localized
  school: string
  start: string
  end: string
  /** Technologies worked with during the programme. */
  stack: string[]
}

export interface Language {
  name: Localized
  level: Localized
}

export interface ContactLink {
  label: string
  href: string
  /** Text shown in place of the URL. */
  display: string
}

export interface Profile {
  name: string
  role: Localized
  intro: Localized
  /** Null until the user provides their channels. */
  email: string | null
  links: ContactLink[]
  /** Paths under /public to the CV PDF per language; null until provided. */
  cv: Localized | null
}
