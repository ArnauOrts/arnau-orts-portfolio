import { profile } from '../content/profile.ts'
import { LOCALES } from '../content/types.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { ArrowRight, ArrowUpRight } from './Icons.tsx'
import './SiteHeader.css'

function LocaleSwitch() {
  const { locale, setLocale, t } = useLocale()
  return (
    <div className="locale-switch" role="group" aria-label={t.language.label}>
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          className="locale-switch__option"
          aria-pressed={code === locale}
          aria-label={t.language.names[code]}
          lang={code}
          onClick={() => setLocale(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function SectionLinks({ sections, active }: { sections: { id: string; label: string }[]; active: string | null }) {
  return (
    <ul>
      {sections.map((section) => (
        <li key={section.id}>
          <a href={`#${section.id}`} aria-current={section.id === active ? 'location' : undefined}>
            {section.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

export function SiteHeader() {
  const { locale, t } = useLocale()
  const sections = [
    { id: 'projects', label: t.nav.work },
    { id: 'stack', label: t.nav.stack },
    { id: 'experience', label: t.nav.experience },
    { id: 'contact', label: t.nav.contact },
  ]
  const active = useActiveSection(sections.map((section) => section.id))

  return (
    <>
      <header className="site-header" id="top">
        <div className="page site-header__inner">
          <a className="site-header__brand" href="#top">
            {profile.name}
          </a>

          <nav className="site-header__nav" aria-label={t.nav.label}>
            <SectionLinks sections={sections} active={active} />
          </nav>

          <div className="site-header__tools">
            <LocaleSwitch />
            {profile.cv && (
              <a className="btn btn--ghost site-header__action" href={profile.cv[locale]} download>
                {t.actions.downloadCv}
                <ArrowUpRight />
              </a>
            )}
            <a className="btn btn--solid site-header__action" href="#contact">
              {t.actions.contact}
              <ArrowRight />
            </a>
          </div>
        </div>
      </header>

      <nav className="mobile-bar" aria-label={t.nav.label}>
        <SectionLinks sections={sections} active={active} />
      </nav>
    </>
  )
}
