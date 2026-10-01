import { use } from 'react'
import { ui } from '../content/ui.ts'
import { LocaleContext } from './locale-context.ts'

/** Current locale, its setter, and the interface strings for that locale. */
export function useLocale() {
  const context = use(LocaleContext)
  if (!context) throw new Error('useLocale must be used inside <LocaleProvider>')
  return { ...context, t: ui[context.locale] }
}
