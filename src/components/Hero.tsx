import { Fragment } from 'react'
import { profile } from '../content/profile.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { ArrowDown, ArrowUpRight } from './Icons.tsx'
import { KineticText } from './KineticText.tsx'
import './Hero.css'

/** Split a name into two balanced lines: everything but the last word, then the last word. */
function nameLines(name: string) {
  const words = name.split(' ')
  return words.length > 2 ? [words.slice(0, -1).join(' '), words[words.length - 1]] : words
}

export function Hero() {
  const { locale, t } = useLocale()

  return (
    <section className="hero page" aria-labelledby="hero-title">
      <KineticText as="h1" id="hero-title" className="hero__name" lines={nameLines(profile.name)} sizing="fill" />

      <div className="hero__row">
        <div className="hero__intro">
          <p className="hero__role">
            {profile.role[locale].split(' ').map((word, i) => (
              <Fragment key={word}>
                {i > 0 && ' '}
                <span className="hero__role-mark">{word}</span>
              </Fragment>
            ))}
          </p>
          <p className="hero__lede">{profile.intro[locale]}</p>
        </div>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#projects">
            {t.actions.seeProjects}
            <ArrowDown />
          </a>
          {profile.cv && (
            <a className="btn btn--ghost" href={profile.cv[locale]} download>
              {t.actions.downloadCv}
              <ArrowUpRight />
            </a>
          )}
          <a className="btn btn--ghost" href="#contact">
            {t.actions.contact}
            <ArrowDown />
          </a>
        </div>
      </div>
    </section>
  )
}
