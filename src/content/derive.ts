import { education, experience } from './experience.ts'
import { projects } from './projects.ts'
import { LAYER_IDS, type LayerId, type Localized } from './types.ts'

/** Where a technology was used: a project, a job or a programme, with its anchor on the page. */
export interface TechSource {
  key: string
  name: Localized
  href: string
}

export interface TechUse {
  tech: string
  /** Project layers where it is used, in stack order (empty when only jobs or education prove it). */
  layers: LayerId[]
  /** Distinct places that prove it, in page order. */
  sources: TechSource[]
}

const same = (text: string): Localized => ({ es: text, en: text })

/**
 * Every technology shown on the site, once, with the places that prove it.
 * Skills are never listed by hand: a word appears only if a project, a job or
 * a programme on this page used it. A project and the job that built it
 * (same name) count as one place. Sorted by number of places, then by name.
 */
export const techIndex: TechUse[] = (() => {
  const uses = new Map<string, { layers: Set<LayerId>; sources: Map<string, TechSource> }>()

  function add(tech: string, source: TechSource, layer?: LayerId) {
    const use = uses.get(tech) ?? { layers: new Set<LayerId>(), sources: new Map<string, TechSource>() }
    if (layer) use.layers.add(layer)
    if (!use.sources.has(source.key)) use.sources.set(source.key, source)
    uses.set(tech, use)
  }

  for (const project of projects) {
    const source = { key: project.name.en, name: project.name, href: `#project-${project.slug}` }
    for (const layer of LAYER_IDS) {
      for (const tech of project.layers[layer].stack) add(tech, source, layer)
    }
  }
  for (const job of experience) {
    const source = { key: job.company, name: same(job.company), href: `#job-${job.slug}` }
    for (const tech of job.stack) add(tech, source)
  }
  for (const programme of education) {
    const source = { key: programme.slug, name: programme.short, href: `#study-${programme.slug}` }
    for (const tech of programme.stack) add(tech, source)
  }

  return [...uses]
    .map(([tech, use]) => ({
      tech,
      layers: LAYER_IDS.filter((layer) => use.layers.has(layer)),
      sources: [...use.sources.values()],
    }))
    .sort((a, b) => b.sources.length - a.sources.length || a.tech.localeCompare(b.tech))
})()
