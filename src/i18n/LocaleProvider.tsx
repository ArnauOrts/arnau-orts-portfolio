import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ui } from '../content/ui.ts'
import { LOCALES, type Locale } from '../content/types.ts'
import { LocaleContext } from './locale-context.ts'

const STORAGE_KEY = 'portfolio.locale'

function isLocale(value: unknown): value is Locale {
  return LOCALES.includes(value as Locale)
}

function initialLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // Storage can be blocked (private mode, disabled site data): fall through.
  }
  const preferred = navigator.languages?.find((lang) => lang.toLowerCase().startsWith('es'))
  return preferred ? 'es' : 'en'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  useEffect(() => {
    const text = ui[locale].meta
    document.documentElement.lang = locale
    document.title = text.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', text.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // Remembering the choice is a convenience only.
    }
  }, [locale])

  const value = useMemo(() => ({ locale, setLocale }), [locale])

  return <LocaleContext value={value}>{children}</LocaleContext>
}
