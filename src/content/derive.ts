import { education, experience } from './experience.ts'
import { projects } from './projects.ts'
import { LAYER_IDS, type LayerId, type Localized } from './types.ts'

/** Where a technology was used: a project, a job or a programme, with its anchor on the page. */
export interface TechSource {
  key: string
  name: Localized
  href: string
  /** When this place ended, as a month index (year * 12 + month - 1). */
  ended: number
}

export interface TechUse {
  tech: string
  /** Project layers where it is used, in stack order (empty when only jobs or education prove it). */
  layers: LayerId[]
  /** Distinct places that prove it, most recent first. */
  sources: TechSource[]
  /** Most recent use, as a month index; drives order and size. */
  lastUsed: number
}

const same = (text: string): Localized => ({ es: text, en: text })

/** 'MM/YYYY' to a month index; a bare 'YYYY' counts as mid-year. */
function monthIndex(date: string) {
  const [month, year] = date.includes('/') ? date.split('/').map(Number) : [6, Number(date)]
  return year * 12 + month - 1
}

/**
 * Every technology shown on the site, once, with the places that prove it.
 * Skills are never listed by hand: a word appears only if a project, a job or
 * a programme on this page used it. A project and the job that built it
 * (same name) count as one place. Sorted by most recent use, then by number
 * of places, then by name.
 */
export const techIndex: TechUse[] = (() => {
  const uses = new Map<string, { layers: Set<LayerId>; sources: Map<string, TechSource> }>()

  function add(tech: string, source: TechSource, layer?: LayerId) {
    const use = uses.get(tech) ?? { layers: new Set<LayerId>(), sources: new Map<string, TechSource>() }
    if (layer) use.layers.add(layer)
    const known = use.sources.get(source.key)
    if (!known) use.sources.set(source.key, source)
    else if (source.ended > known.ended) known.ended = source.ended
    uses.set(tech, use)
  }

  for (const project of projects) {
    // A project built in a job ends when that job ends; otherwise its year stands in.
    const job = experience.find((entry) => entry.company === project.name.en)
    const ended = job?.end ? monthIndex(job.end) : monthIndex(project.year)
    const source = { key: project.name.en, name: project.name, href: `#project-${project.slug}`, ended }
    for (const layer of LAYER_IDS) {
      for (const tech of project.layers[layer].stack) add(tech, { ...source }, layer)
    }
  }
  for (const job of experience) {
    // A current job counts as used this month.
    const now = new Date()
    const ended = job.end ? monthIndex(job.end) : now.getFullYear() * 12 + now.getMonth()
    for (const tech of job.stack) {
      add(tech, { key: job.company, name: same(job.company), href: `#job-${job.slug}`, ended })
    }
  }
  for (const programme of education) {
    for (const tech of programme.stack) {
      add(tech, { key: programme.slug, name: programme.short, href: `#study-${programme.slug}`, ended: monthIndex(programme.end) })
    }
  }

  return [...uses]
    .map(([tech, use]) => {
      const sources = [...use.sources.values()].sort((a, b) => b.ended - a.ended)
      const lastUsed = sources[0].ended
      return { tech, layers: LAYER_IDS.filter((layer) => use.layers.has(layer)), sources, lastUsed }
    })
    .sort((a, b) => b.lastUsed - a.lastUsed || b.sources.length - a.sources.length || a.tech.localeCompare(b.tech))
})()
