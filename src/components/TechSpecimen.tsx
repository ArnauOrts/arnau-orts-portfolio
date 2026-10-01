import { techIndex } from '../content/derive.ts'
import { useLocale } from '../i18n/useLocale.ts'
import './TechSpecimen.css'

/** Technologies as a type specimen: each word is sized by how many places prove it, and links to them. */
export function TechSpecimen() {
  const { locale, t } = useLocale()
  const most = Math.max(1, ...techIndex.map((use) => use.sources.length))

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
          const weight = most > 1 ? (use.sources.length - 1) / (most - 1) : 1
          return (
            <li key={use.tech} className="specimen__item">
              <span
                className="specimen__word"
                style={{
                  fontSize: `calc(min(var(--text-3xl), 9vw) * ${(0.36 + 0.64 * weight).toFixed(2)})`,
                  fontVariationSettings: `'wdth' ${Math.round(90 + 30 * weight)}, 'wght' ${Math.round(500 + 350 * weight)}`,
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
