import { useLocale } from '../i18n/useLocale.ts'
import './PlaceholderBadge.css'

interface PlaceholderBadgeProps {
  /** "example": sample content standing in for real content. "pending": a real detail not added yet. */
  kind?: 'example' | 'pending'
}

/** Visible mark on sample or missing content, so nothing reads as a real claim. */
export function PlaceholderBadge({ kind = 'example' }: PlaceholderBadgeProps) {
  const { t } = useLocale()
  const label = kind === 'pending' ? t.placeholder.pending : t.placeholder.badge
  const title = kind === 'pending' ? t.placeholder.pendingTitle : t.placeholder.title
  return (
    <span className="placeholder-badge label" title={title}>
      {label}
    </span>
  )
}
