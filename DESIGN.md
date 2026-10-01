---
name: Arnau Orts Brichs · Portfolio
description: Kinetic typography on paper, ink and flat colour fields; type is the interface.
colors:
  paper: "#f3f1ec"
  ink: "#111111"
  ink-soft: "#4a4a48"
  ink-mute: "#6b6a66"
  cobalt: "#2f3bff"
  vermilion: "#ff5a36"
  chartreuse: "#c6f432"
typography:
  display:
    fontFamily: "'Anybody Variable', 'Arial Black', sans-serif"
    fontSize: "clamp(2.75rem, 0.5rem + 9.6vw, 9.5rem)"
    fontWeight: 750
    lineHeight: 0.88
    letterSpacing: "-0.015em"
    fontVariation: "'wdth' 115, 'wght' 750"
  headline:
    fontFamily: "'Anybody Variable', 'Arial Black', sans-serif"
    fontSize: "clamp(2.25rem, 1.2rem + 3.6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Anybody Variable', 'Arial Black', sans-serif"
    fontSize: "clamp(1.5rem, 1.15rem + 1.2vw, 2rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 120"
  body-lead:
    fontFamily: "'Geist Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Geist Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Geist Variable', 'Segoe UI', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "5rem"
  "9": "8rem"
  gutter: "clamp(1rem, 0.3rem + 3vw, 3.5rem)"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-solid-hover:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-ghost-hover:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.ink}"
  button-accent-on-ink:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1.5rem"
    height: "3rem"
  button-accent-on-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  locale-switch-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    width: "2.75rem"
    height: "2.5rem"
  project-field-cobalt:
    backgroundColor: "{colors.cobalt}"
    textColor: "{colors.paper}"
  project-field-vermilion:
    backgroundColor: "{colors.vermilion}"
    textColor: "{colors.ink}"
  project-field-chartreuse:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.ink}"
  contact-field:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: Arnau Orts Brichs · Portfolio

## Overview

**Creative North Star: "Type Is the Interface"**

The page is printed in two materials, warm paper and near-black ink, and interrupted by full-bleed fields of flat saturated colour. The name and every project title are set in an enormous uppercase variable grotesk that opens wider and heavier as the pointer comes near; that response is the signature, and nothing else on the page competes with it. There are no illustrations, no cards, no imagery standing in for the work: where a screenshot exists it is shown framed in a 2px rule, and where it does not, the frame is drawn dashed at the size the real thing will occupy.

Density is low at the top and rises inside each project: a billboard title, then a compact data band and a numbered stack of layers ruled in the field's own ink. Sections never fade or blend into each other. They meet at hard colour cuts, paper to cobalt to vermilion to chartreuse and back to paper, ending on the ink field.

Motion follows one grammar: type breathes (width and weight change on the variable axes), and blocks only rise into place vertically, never slide sideways.

**Key Characteristics:**
- Paper ground, ink type, and one flat colour field per project cycling cobalt, vermilion, chartreuse by index.
- Anybody variable, uppercase, tight leading, for every display word; Geist variable for everything read.
- Square corners everywhere; 2px solid rules in currentColor are the only line.
- Flat: no shadows, no gradients, no blur.
- Missing content keeps its real footprint, drawn in dashed rule.

## Colors

A high-contrast print palette: two neutrals that do all the reading work, three saturated field colours that each own a whole project.

### Primary
- **Ink** (`{colors.ink}`): all type on paper, the solid button, the active locale option, every structural rule on paper, and the closing contact field.
- **Paper** (`{colors.paper}`): the page ground, the sticky header, and the type colour on cobalt and ink fields.

### Secondary
- **Cobalt Field** (`{colors.cobalt}`): the first project field (paper text). Also the browser focus outline, caret and form accent colour on paper.
- **Vermilion Field** (`{colors.vermilion}`): the second project field (ink text).

### Tertiary
- **Chartreuse** (`{colors.chartreuse}`): the third project field (ink text) and the single accent for state: hover fill on buttons, nav links and inline links; the "you are here" band under the active nav item; text selection on paper and ink. On the ink contact field it is also the voice: the section title and the primary action.

### Neutral
- **Soft Ink** (`{colors.ink-soft}`): lead paragraphs, job summaries and periods, supporting proof lines; secondary reading text on paper only.
- **Muted Ink** (`{colors.ink-mute}`): link underline colour inside dense lists and the scrollbar thumb. Never body text.

### Named Rules
**The One Field Rule.** A project owns its whole full-bleed field, background and text colour together (cobalt with paper, vermilion with ink, chartreuse with ink), assigned by page index. Nothing inside a field introduces another colour; rules, badges, focus outlines and selection invert to the field's own ink.

**The State Accent Rule.** On paper, chartreuse appears only where something is hovered, selected or current. A resting element on paper is never chartreuse.

## Typography

**Display Font:** Anybody Variable (with Arial Black, sans-serif)
**Body Font:** Geist Variable (with Segoe UI, system-ui, sans-serif)

**Character:** A wide, loud, variable grotesk that physically reacts, set against a quiet, precise reading sans. The display face carries identity; Geist carries every sentence.

### Hierarchy
- **Display** (750 at rest, width 115, line-height 0.88, uppercase): the hero name and the contact title are sized in script so their longest line fills 90% of the content width (the clamp is the CSS fallback); project titles flow at clamp(2.75rem, 0.8rem + 7.4vw, 9rem). Rendered letter by letter so each glyph can respond to the pointer.
- **Headline** (800, width 112, `--text-2xl`, line-height 0.9): section titles (Stack, Experience), the layer names inside a project, and the contact email address.
- **Title** (800, width 120 to 125, `--text-xl`): job roles, the role band in the hero, the header wordmark at body size.
- **Body lead** (400 to 500, 1.25rem to `--text-xl`, line-height 1.3 to 1.55): section leads (max 52ch), hero intro (max 44ch), project summary (max 42ch).
- **Body** (400, 1.0625rem, line-height 1.55): reading text, max 60ch. Tabular numerals for years and indices.
- **Label** (600, 0.75rem, 0.08em tracking, uppercase, Geist): data-band terms (year, role, stack), layer tags in the specimen, placeholder badges. Always attached to the value it names; never a free-standing line above a heading.

### Named Rules
**The Breathing Type Rule.** Display letters move only along their variable axes: width 115 to 150 and weight 750 to 900 under a fine pointer, eased with a soft follow; on load they open from width 60 / weight 400 to rest, staggered 28ms per letter. Touch and reduced-motion users get the resting cut.

**The Proof-Sized Specimen Rule.** In the technology specimen, a word's size, width and weight scale with how many projects use it (45% to 100% of `--text-3xl`, width 80 to 115, weight 500 to 850).

## Layout

A single column of full-bleed bands. Content sits in a centred page container (max 96rem) with a fluid gutter (`{spacing.gutter}`). Vertical rhythm is generous between bands (3rem to 8rem block padding) and tight inside them (0.25rem to 1.5rem).

- **Hero:** the name fills the width across two lines; below it, a row with role and intro at left and the two actions at right (stacked under 64rem). At 80rem and up the hero is about two-thirds of the viewport, so the first project field's title shows at the fold.
- **Project field:** at 64rem and up, title across the top, then a 5:7 split: a sticky aside (media, data band, summary, links) beside the numbered layers. Below 64rem everything stacks.
- **Experience:** ruled rows; at 64rem a 4:5:3 grid (role and company, summary, period and stack right-aligned).
- **Navigation:** at 64rem and up a sticky paper header (4rem) with centred section links; below 64rem a fixed ink bar at the bottom (3.5rem, four equal cells, contact cell in paper).
- **Breakpoints:** 48rem (layer rows split), 64rem (desktop grid and header nav), 80rem (hero height, header wordmark returns).

## Elevation & Depth

Completely flat. There are no shadows, gradients or blurs; depth is expressed only by hard colour cuts between bands and by stickiness (header, project aside). The two inset box-shadows in the build are not elevation: they draw the active-section underline (an ink rule over a chartreuse band) and the active cell marker in the mobile bar.

### Named Rules
**The Hard Cut Rule.** Sections meet edge to edge at a change of ground colour. No divider line, gradient or overlap separates one band from the next.

## Shapes

Square corners throughout (`{rounded.none}`). The only line is a 2px solid rule in currentColor: around buttons and media frames, above and below the data band and each layer or job row, under the header. Dashed 2px rule in the same colour marks something that does not exist yet (pending media, pending CV, pending email, pending links); the placeholder badge uses a 1.5px dash. Bullets in layer lists are small solid squares in currentColor.

## Components

### Buttons
Blocks of ink that light up in the accent.
- **Shape:** square, 2px solid border in currentColor, min-height 3rem, 0 1.5rem padding, Geist 600 at body size, trailing arrow icon at 1.1em.
- **Solid:** ink fill, paper text. Primary action on paper.
- **Ghost:** transparent, border and text in the surrounding ink.
- **Hover / Focus:** on fine pointers, solid and ghost fill chartreuse with ink text and ink border (160ms); the arrow nudges 3px toward its direction. Press scales to 0.97. Focus is a 3px cobalt outline offset 3px (field ink on colour fields, chartreuse on the ink field).
- **On the ink field:** the primary action is chartreuse with ink text; it and the ghost buttons turn paper on hover.
- **Pending slot:** the same footprint drawn in a 2px dashed border, not interactive.

### Locale switch
- Two square cells (2.75rem by 2.5rem) inside a 2px ink border. The pressed language is ink with paper text; the other turns chartreuse on hover.

### Navigation
- **Desktop:** sticky paper header with a 2px ink bottom rule; wordmark in display at body size, width 125. Links in Geist 500, 2.75rem tall; hover fills chartreuse; the current section goes 700 with an ink underline over a chartreuse band, legible without colour.
- **Mobile:** fixed ink bar at the bottom with paper text; the contact cell is inverted to paper; the current cell gets a 4px chartreuse top band and 700 weight.

### Project Field (signature)
- A full-bleed colour band per project, colour assigned by index. Kinetic display title, then a media frame (16:10, 2px rule), a data band ruled top and bottom, a summary, and links underlined with a 2px rule whose arrow lifts diagonally on hover.
- The three layers are numbered in stack order and reveal one after another, rising 24px and fading in over 600ms when the list enters the viewport.

### Technology Specimen
- Technologies grouped by how many projects use them, each group ruled above in ink, with the count as a reading-size row heading beside the words; each word sized by its proof.

### Placeholder Badge
- Uppercase label in a 1.5px dashed box in currentColor, so it reads on paper, any field, and ink alike. Marks sample content and pending details.

## Do's and Don'ts

### Do:
- **Do** give each project a full-bleed field in cobalt, vermilion or chartreuse, in that order by index, with its paired text colour.
- **Do** set every display word in Anybody uppercase through the kinetic text component, so it opens on load and responds to the pointer.
- **Do** draw every line as a 2px solid rule in currentColor, and every missing item as the same footprint in dashed rule.
- **Do** keep chartreuse on paper for hover, selection and the current section only.
- **Do** animate blocks only vertically (rise 12px to 24px) and type only on its width and weight axes; drop transforms under reduced motion.
- **Do** keep Geist for all reading text, with soft ink for secondary copy on paper.

### Don't:
- **Don't** round a corner, add a shadow, gradient or blur.
- **Don't** slide a block in sideways.
- **Don't** separate sections with a divider line; change the ground colour instead.
- **Don't** put a resting chartreuse element on paper, or add a fourth field colour.
- **Don't** set display type in Geist, or reading text in Anybody.
- **Don't** put small uppercase labels above headings as kickers; labels only name the value beside them.
- **Don't** replace missing content with invented samples or stock imagery; show the dashed footprint and the pending badge.
