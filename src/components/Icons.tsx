import type { SVGProps } from 'react'

/** One drawn icon family: 24px grid, 1.5 stroke, square caps like a drafting pen. */
function Glyph({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M3 12h17M14 6l6 6-6 6" />
    </Glyph>
  )
}

export function ArrowLeft(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M21 12H4M10 6l-6 6 6 6" />
    </Glyph>
  )
}

export function ArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M12 3v17M6 14l6 6 6-6" />
    </Glyph>
  )
}

export function ArrowUpRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M6 18 18 6M8 6h10v10" />
    </Glyph>
  )
}

export function ArrowUp(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M12 21V4M6 10l6-6 6 6" />
    </Glyph>
  )
}

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </Glyph>
  )
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <Glyph {...props}>
      <path d="M3 5.5h18v13H3z" />
      <path d="m3 6 9 7 9-7" />
    </Glyph>
  )
}
