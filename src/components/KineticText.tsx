import { Fragment, useEffect, useRef, type ElementType } from 'react'
import './KineticText.css'

interface KineticTextProps {
  /** Heading element to render. */
  as?: ElementType
  /** Lines of text. Lines break where given; long lines may still wrap between words. */
  lines: string[]
  /** "fill": size the text so its longest line spans the container. "flow": size comes from CSS. */
  sizing?: 'fill' | 'flow'
  className?: string
  id?: string
}

/** Resting and fully excited axis values of the variable display face. */
const REST = { wdth: 115, wght: 750 }
const PEAK = { wdth: 150, wght: 900 }
/** How far, in CSS px, a letter feels the pointer. */
const REACH = 220
/** Share of the remaining distance covered each frame: a soft follow, never a snap. */
const FOLLOW = 0.18
/** Share of the container a filled line occupies at rest, leaving room to widen. */
const FILL = 0.9

/**
 * Display text whose letters widen and thicken as the pointer comes near.
 * Fine pointers only; touch and reduced-motion users get the resting cut.
 */
export function KineticText({ as: Tag = 'h2', lines, sizing = 'flow', className, id }: KineticTextProps) {
  const rootRef = useRef<HTMLElement>(null)
  const text = lines.join('|')

  // Fill mode: measure each line at the resting cut, off-screen, and scale the font to fit.
  useEffect(() => {
    const root = rootRef.current
    const container = root?.parentElement
    if (sizing !== 'fill' || !root || !container) return

    const probe = document.createElement('span')
    probe.setAttribute('aria-hidden', 'true')
    Object.assign(probe.style, {
      // Fixed and hidden: it never extends the page's scroll area.
      position: 'fixed',
      top: '0',
      left: '0',
      visibility: 'hidden',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      fontFamily: getComputedStyle(root).fontFamily,
      fontSize: '100px',
      textTransform: 'uppercase',
      letterSpacing: '-0.015em',
      fontVariationSettings: `'wdth' ${REST.wdth}, 'wght' ${REST.wght}`,
    })
    document.body.append(probe)

    function fit() {
      if (!root || !container) return
      const available = container.clientWidth - parseFloat(getComputedStyle(container).paddingLeft) * 2
      const widest = Math.max(
        ...text.split('|').map((line) => {
          probe.textContent = line
          return probe.getBoundingClientRect().width
        }),
      )
      if (widest > 0) root.style.fontSize = `${((available * FILL) / widest) * 100}px`
    }

    const observer = new ResizeObserver(fit)
    observer.observe(container)
    document.fonts.ready.then(fit)
    return () => {
      observer.disconnect()
      probe.remove()
    }
  }, [sizing, text])

  // Pointer response: letters near the pointer open up; positions are cached at rest.
  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduceMotion) return

    const letters = Array.from(root.querySelectorAll<HTMLSpanElement>('[data-letter]'))
    const state = letters.map(() => ({ current: 0, target: 0 }))
    let centres: { x: number; y: number }[] | null = null
    let pointer: { x: number; y: number } | null = null
    let frame = 0

    function measureCentres() {
      centres = letters.map((letter) => {
        const box = letter.getBoundingClientRect()
        return { x: box.left + box.width / 2 + scrollX, y: box.top + box.height / 2 + scrollY }
      })
    }

    function tick() {
      let moving = false
      for (let i = 0; i < letters.length; i++) {
        const s = state[i]
        if (pointer && centres) {
          const t = Math.max(0, 1 - Math.hypot(pointer.x - centres[i].x, pointer.y - centres[i].y) / REACH)
          s.target = t * t * (3 - 2 * t)
        } else {
          s.target = 0
        }
        s.current += (s.target - s.current) * FOLLOW
        if (Math.abs(s.target - s.current) > 0.002) moving = true
        else s.current = s.target
        const wdth = REST.wdth + (PEAK.wdth - REST.wdth) * s.current
        const wght = REST.wght + (PEAK.wght - REST.wght) * s.current
        letters[i].style.fontVariationSettings = `'wdth' ${wdth.toFixed(1)}, 'wght' ${wght.toFixed(0)}`
      }
      frame = moving ? requestAnimationFrame(tick) : 0
    }

    function wake() {
      if (!frame) frame = requestAnimationFrame(tick)
    }

    function onEnter() {
      if (state.every((s) => s.current === 0)) measureCentres()
    }

    function onMove(event: PointerEvent) {
      if (!centres) measureCentres()
      pointer = { x: event.pageX, y: event.pageY }
      wake()
    }

    function onLeave() {
      pointer = null
      wake()
    }

    function invalidate() {
      centres = null
    }

    const zone = root.parentElement ?? root
    zone.addEventListener('pointerenter', onEnter)
    zone.addEventListener('pointermove', onMove)
    zone.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', invalidate)
    return () => {
      zone.removeEventListener('pointerenter', onEnter)
      zone.removeEventListener('pointermove', onMove)
      zone.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', invalidate)
      cancelAnimationFrame(frame)
    }
  }, [text])

  let order = 0
  return (
    <Tag ref={rootRef} className={`kinetic ${className ?? ''}`} id={id} aria-label={lines.join(' ')}>
      {lines.map((line, lineIndex) => (
        <span key={`${line}-${lineIndex}`} className="kinetic__line" aria-hidden="true">
          {line.split(' ').map((word, wordIndex) => (
            <Fragment key={`${word}-${wordIndex}`}>
              {wordIndex > 0 && ' '}
              <span className="kinetic__word">
                {Array.from(word).map((char, charIndex) => (
                  <span key={charIndex} className="kinetic__letter" data-letter style={{ animationDelay: `${order++ * 28}ms` }}>
                    {char}
                  </span>
                ))}
              </span>
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  )
}
