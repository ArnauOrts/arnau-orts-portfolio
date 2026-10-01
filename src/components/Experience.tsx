import { education, experience } from '../content/experience.ts'
import { languages } from '../content/profile.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { PlaceholderBadge } from './PlaceholderBadge.tsx'
import './Experience.css'

export function Experience() {
  const { locale, t } = useLocale()

  return (
    <section className="experience page" id="experience" aria-labelledby="experience-title">
      <header className="section-head">
        <h2 className="section-head__title" id="experience-title">
          {t.experience.title}
        </h2>
      </header>

      <ol className="experience__list">
        {experience.map((job) => (
          <li key={job.slug} id={`job-${job.slug}`} className="job">
            <h3 className="job__role">{job.role[locale]}</h3>
            <p className="job__company">
              {job.company}
              {job.placeholder && <PlaceholderBadge />}
            </p>
            <p className="job__period tabular">
              {job.start} – {job.end ?? t.experience.present}
            </p>
            <p className="job__summary">{job.summary[locale]}</p>
            <p className="job__stack">{job.stack.join(' · ')}</p>
          </li>
        ))}
      </ol>

      <div className="experience__extra">
        <section className="studies" aria-labelledby="education-title">
          <h3 className="studies__title" id="education-title">
            {t.experience.education}
          </h3>
          <ol className="studies__list">
            {education.map((programme) => (
              <li key={programme.slug} id={`study-${programme.slug}`} className="study">
                <p className="study__name">{programme.title[locale]}</p>
                <p className="study__meta">
                  {programme.school} · <span className="tabular">{programme.start} – {programme.end}</span>
                </p>
                <p className="study__stack">{programme.stack.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="studies" aria-labelledby="languages-title">
          <h3 className="studies__title" id="languages-title">
            {t.experience.languages}
          </h3>
          <dl className="languages">
            {languages.map((language) => (
              <div key={language.name.en} className="languages__row">
                <dt>{language.name[locale]}</dt>
                <dd>{language.level[locale]}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  )
}
