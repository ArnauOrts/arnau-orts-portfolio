import { useEffect, useState } from 'react'

/**
 * Id of the section currently crossing the reading line (a band near the top
 * of the viewport), or null above the first one.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join('|')

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = key
      .split('|')
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null)
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        setActive(sections.find((section) => visible.has(section.id))?.id ?? null)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return active
}
