import type { Project } from '../content/types.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { ArrowUpRight } from './Icons.tsx'
import './ProjectLinks.css'

/** Demo and code links, or an honest note while they do not exist yet. */
export function ProjectLinks({ project }: { project: Project }) {
  const { t } = useLocale()
  const { demo, code } = project.links

  if (!demo && !code) {
    return <p className="project-links project-links--pending label">{t.actions.linksPending}</p>
  }

  return (
    <ul className="project-links">
      {demo && (
        <li>
          <a className="project-links__link" href={demo} target="_blank" rel="noreferrer">
            {t.actions.demo}
            <ArrowUpRight />
          </a>
        </li>
      )}
      {code && (
        <li>
          <a className="project-links__link" href={code} target="_blank" rel="noreferrer">
            {t.actions.code}
            <ArrowUpRight />
          </a>
        </li>
      )}
    </ul>
  )
}
