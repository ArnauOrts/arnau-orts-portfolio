import { useEffect, useRef, useState } from 'react'

/**
 * Marks an element as revealed the first time a part of it enters the
 * viewport. Content renders visible when IntersectionObserver is missing.
 */
export function useReveal<T extends Element>() {
  const ref = useRef<T>(null)
  const [revealed, setRevealed] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    const node = ref.current
    if (!node || revealed) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -15% 0px' },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [revealed])

  return { ref, revealed }
}
