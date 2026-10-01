# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

A personal, bilingual (ES/EN) single-page portfolio for Arnau Orts Brichs. The interface is built and the content in `src/content/` is real, taken from the owner's CV: one project (Velzio), three jobs, education and languages. Published contact: email and LinkedIn. The code lives in the public GitHub repository https://github.com/ArnauOrts/arnau-orts-portfolio (branch `main`). It is deployed on Vercel (project `arnau-orts-portfolio`, account ortsbrichsarnau-5704) at https://arnau-orts-portfolio.vercel.app; production deploys run with `npx vercel deploy --prod` (`.vercel/` and `.env*` are gitignored).

The visual direction ("kinetic typography": the name and every project in enormous variable grotesk that widens and thickens under the pointer, one flat saturated colour field per project) is recorded in `.impeccable/surfaces/src-app-tsx.md`; durable tokens live in `DESIGN.md`. It replaced the earlier "daylight section" world, which the user rejected.

Product context (audience, goals, bilingual ES/EN requirement, what content exists and must not be invented) lives in `PRODUCT.md`.

## Change log (mandatory)

`CHANGELOG.md` is the project's history of relevant changes and the decisions behind them; git history records the code changes.

- **Before acting:** read `CHANGELOG.md` at the start of every task, before changing anything, so the work builds on decisions already made.
- **After acting:** add an entry for every relevant change: new or removed features, sections or pages, design or architecture decisions, dependency or config changes, and changes to `PRODUCT.md`, `DESIGN.md` or this file. Typo fixes and purely internal tweaks with no effect on behavior or decisions don't need one.
- **Entry format:** newest first, under a `## YYYY-MM-DD` heading. One bullet per change saying what changed, which files it touched and, when there was a decision, why. Write the entries in Spanish.

## Commands

- `npm run dev`: Vite dev server with HMR
- `npm run build`: type-checks with `tsc -b` (project references), then `vite build` to `dist/`
- `npm run lint`: ESLint over the repo
- `npm run preview`: serve the production build locally

There is no test runner configured.

## Stack and architecture

- React 19 + TypeScript 6 + Vite 8, using `@vitejs/plugin-react` (Oxc transform). React Compiler is not enabled.
- Entry: `index.html` loads `src/main.tsx`, which mounts `<App />` inside `<LocaleProvider>` and `StrictMode`.
- Content is data, separate from components: `src/content/` holds typed, bilingual data (`profile.ts`, `projects.ts`, `experience.ts`, interface strings in `ui.ts`, types in `types.ts`). Every visible string is `Localized` (`{ es, en }`). Technologies shown on the site are derived in `derive.ts` (`techIndex`) from the stacks of projects, jobs and education, never listed by hand; each one links to the places that prove it. Entries with `placeholder: true` render a `PlaceholderBadge` (none today). Project screenshots live in `public/projects/` with their origin embedded (`impeccable embed-prompt`).
- i18n is in-house, no library: `src/i18n/` (`LocaleProvider.tsx`, `locale-context.ts`, `useLocale.ts`). `useLocale()` returns `{ locale, setLocale, t }`; the provider syncs `<html lang>`, the title and meta description, and remembers the choice in `localStorage`.
- Components live in `src/components/`, each with its own CSS file: `SiteHeader` (with the mobile bottom bar), `Hero`, `KineticText` (pointer-reactive variable type, fine pointers only, off under reduced motion), `ProjectField` (one colour field per project), `TechSpecimen`, `Experience`, `Contact`. `src/hooks/useReveal.ts` reveals elements once on first view.
- Styling is plain CSS: tokens and shared classes (`.page`, `.label`, `.btn`, `.slot`, `.section-head`) in `src/index.css`. No CSS framework. Fonts are self-hosted variable fonts: `@fontsource-variable/anybody` (display, `wdth` and `wght` axes) and `@fontsource-variable/geist` (text).
- Assets: files in `public/` are served from the site root as-is (`/favicon.svg`; CV PDFs go in `public/cv/`).
- TypeScript is split into `tsconfig.app.json` (for `src/`, browser) and `tsconfig.node.json` (for `vite.config.ts`), referenced from `tsconfig.json`.

## TypeScript/lint constraints to respect

- `verbatimModuleSyntax`: type-only imports must use `import type`.
- `erasableSyntaxOnly`: no `enum`, `namespace`, or constructor parameter properties.
- `allowImportingTsExtensions`: local imports include the extension (e.g. `import App from './App.tsx'`).
- `noUnusedLocals` / `noUnusedParameters` are on, so unused code fails `npm run build`.
- ESLint uses flat config with `react-hooks` and `react-refresh` (Vite preset): component files should only export components so Fast Refresh keeps working.

## Skills
- Diseño e interfaces: usa impeccable. Antes de dar una pantalla por terminada, ejecuta /impeccable critique.
- Animaciones: sigue las skills de Emil (emil-design-eng, animate).
- Código React: aplica vercel-react-best-practices y vercel-composition-patterns.
- Tras cada feature visual: usa agent-browser para abrir la app en localhost, hacer captura y comprobar que funciona.