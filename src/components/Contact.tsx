import { profile } from '../content/profile.ts'
import { useLocale } from '../i18n/useLocale.ts'
import { ArrowUp, ArrowUpRight } from './Icons.tsx'
import { KineticText } from './KineticText.tsx'
import './Contact.css'

/** The page closes on the ink field: the invitation at billboard scale, then the channels. */
export function Contact() {
  const { locale, t } = useLocale()

  return (
    <footer className="contact" id="contact" aria-labelledby="contact-title">
      <div className="page contact__inner">
        <KineticText as="h2" id="contact-title" className="contact__title" lines={[t.contact.title]} sizing="fill" />
        <p className="contact__lead">{t.contact.lead}</p>

        <div className="contact__channels">
          {profile.email ? (
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          ) : (
            <p className="contact__email contact__email--pending">
              {t.contact.emailLabel}
            </p>
          )}

          <div className="contact__actions">
            {profile.cv && (
              <a className="btn btn--accent" href={profile.cv[locale]} download>
                {t.actions.downloadCv}
                <ArrowUpRight />
              </a>
            )}

            {profile.links.map((link) => (
              <a key={link.href} className="btn btn--ghost" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="page contact__footer">
        <p>{t.footer.built}</p>
        <a href="#top" className="contact__top">
          {t.footer.top}
          <ArrowUp />
        </a>
      </div>
    </footer>
  )
}
