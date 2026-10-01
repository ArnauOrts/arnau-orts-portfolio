import { LAYER_IDS, type Project } from '../content/types.ts'
import { useReveal } from '../hooks/useReveal.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { sheetId } from './anchors.ts'
import { KineticText } from './KineticText.tsx'
import { PlaceholderBadge } from './PlaceholderBadge.tsx'
import { ProjectLinks } from './ProjectLinks.tsx'
import './ProjectField.css'

/** The colour fields, in page order; projects cycle through them. */
const FIELDS = ['cobalt', 'vermilion', 'chartreuse'] as const

interface ProjectFieldProps {
  project: Project
  /** Position in the page; picks the colour field. */
  index: number
}

/** One project as a full-bleed colour field: title, proof, data band, and the three layers in sequence. */
export function ProjectField({ project, index }: ProjectFieldProps) {
  const { locale, t } = useLocale()
  const { ref, revealed } = useReveal<HTMLOListElement>()
  const field = FIELDS[index % FIELDS.length]
  const headingId = `${sheetId(project.slug)}-title`
  const stack = [...new Set(LAYER_IDS.flatMap((layer) => project.layers[layer].stack))]

  return (
    <article className="field" data-field={field} id={sheetId(project.slug)} aria-labelledby={headingId}>
      <div className="page field__inner">
        <div className="field__title-zone">
          <KineticText as="h3" id={headingId} className="field__title" lines={[project.name[locale]]} />
        </div>

        <div className="field__aside">
          {project.screenshots && project.screenshots.length > 0 ? (
            <div className="field__shots">
              {project.screenshots.map((shot, i) => (
                <img
                  key={shot.src}
                  className="field__media"
                  src={shot.src}
                  alt={shot.alt[locale]}
                  width={shot.width}
                  height={shot.height}
                  loading={index === 0 && i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ))}
            </div>
          ) : (
            <div className="field__media field__media--pending">{t.project.screenshotPending}</div>
          )}

          <dl className="field__band">
            <div>
              <dt className="label">{t.project.year}</dt>
              <dd className="tabular">{project.year}</dd>
            </div>
            <div>
              <dt className="label">{t.project.role}</dt>
              <dd>{project.role[locale]}</dd>
            </div>
            <div>
              <dt className="label">{t.project.stack}</dt>
              <dd>{stack.join(' · ')}</dd>
            </div>
            {project.placeholder && (
              <div className="field__badge">
                <PlaceholderBadge />
              </div>
            )}
          </dl>
          <p className="field__summary">{project.summary[locale]}</p>
          <ProjectLinks project={project} />
        </div>

        <ol className="field__layers" ref={ref} data-revealed={revealed} aria-label={t.project.layersLabel}>
          {LAYER_IDS.map((layer, i) => {
            const detail = project.layers[layer]
            return (
              <li key={layer} className="layer" style={{ transitionDelay: revealed ? `${i * 90}ms` : '0ms' }}>
                <h4 className="layer__name">
                  <span className="layer__index tabular" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {t.layers[layer]}
                </h4>
                <div className="layer__body">
                  <p className="layer__summary">{detail.summary[locale]}</p>
                  <ul className="layer__work">
                    {detail.work[locale].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p className="layer__stack">{detail.stack.join(' · ')}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </article>
  )
}
