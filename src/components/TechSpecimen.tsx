import { techIndex } from '../content/derive.ts'
import { useLocale } from '../i18n/useLocale.ts'
import './TechSpecimen.css'

/** Technologies as a type specimen: the more recently used, the bigger; each word links to where it was used. */
export function TechSpecimen() {
  const { locale, t } = useLocale()
  const newest = Math.max(...techIndex.map((use) => use.lastUsed))
  const oldest = Math.min(...techIndex.map((use) => use.lastUsed))

  return (
    <section className="specimen page" id="stack" aria-labelledby="stack-title">
      <header className="section-head">
        <h2 className="section-head__title" id="stack-title">
          {t.stack.title}
        </h2>
        <p className="section-head__lead">{t.stack.lead}</p>
      </header>

      <ul className="specimen__list">
        {techIndex.map((use) => {
          const weight = newest > oldest ? (use.lastUsed - oldest) / (newest - oldest) : 1
          return (
            <li key={use.tech} className="specimen__item">
              <span
                className="specimen__word"
                style={{
                  fontSize: `calc(min(var(--text-2xl), 6vw) * ${(0.42 + 0.58 * weight).toFixed(2)})`,
                  fontVariationSettings: `'wdth' ${Math.round(90 + 20 * weight)}, 'wght' ${Math.round(500 + 350 * weight)}`,
                }}
              >
                {use.tech}
              </span>
              <span className="specimen__meta">
                {use.layers.length > 0 && (
                  <span className="label">{use.layers.map((layer) => t.layers[layer]).join(' · ')}</span>
                )}
                <span className="specimen__proof">
                  <span className="visually-hidden">{t.stack.usedIn} </span>
                  {use.sources.map((source, i) => (
                    <span key={source.key}>
                      {i > 0 && ' · '}
                      <a href={source.href}>{source.name[locale]}</a>
                    </span>
                  ))}
                </span>
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
