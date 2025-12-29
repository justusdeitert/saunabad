# Copilot Instructions for saunabad

## Style

- Do not use em dashes (`—`, `U+2014`). Rephrase instead of substituting with hyphens.
- Never push code (`git push`) without explicit user confirmation.

## Overview

- Static website for Saunabad Berlin, a neighborhood sauna and wellness center in Prenzlauer Berg.
- Multi-page static site built with Eleventy 3.x, Liquid templating, TypeScript, and Tailwind CSS 4.x.

## Tech Stack

- **Frontend:** Liquid templates, TypeScript (ES Modules), SCSS with Tailwind CSS 4.x via PostCSS
- **Animations:** GSAP (scroll-based parallax and entrance effects)
- **Transitions:** Highway.js (SPA-like page transitions)
- **Gallery:** Swiper 11.x (touch-friendly carousel)
- **Tooling:** Eleventy 3.x, esbuild, PostCSS CLI, tsx, Yarn
- **Infrastructure:** Static site, deployed at saunabad.justusdeitert.de

## Project Structure

- `eleventy.config.ts` - Eleventy config (image shortcode, hash shortcode, passthrough copy, plugins)
- `postcss.config.cjs` - PostCSS config (Sass, Tailwind, autoprefixer, cssnano in prod)
- `tsconfig.json` - TypeScript config (ES Modules, strict)
- `views/` - Liquid templates, layouts, includes, and data files
- `views/_data/` - YAML data files (meta, gallery, faqs)
- `views/_includes/` - Reusable partials (nav, footer, sections, icons, components)
- `views/layouts/base.liquid` - Base HTML layout
- `src/scripts/main.ts` - TypeScript entry point; imports all modules
- `src/scripts/animations.ts` - GSAP scroll animations
- `src/scripts/transitions.ts` - Highway.js page transitions
- `src/scripts/swiper.ts` - Swiper carousel init
- `src/scripts/accordion.ts` - Accordion logic
- `src/scripts/smooth-scroll.ts` - Anchor smooth scroll
- `src/styles/main.scss` - SCSS entry point; imports all partials
- `src/styles/_tailwind.scss` - Tailwind 4.x `@theme` config and imports
- `src/images/` - Source images
- `lib/shortcodes/image.ts` - Responsive image shortcode (eleventy-img)
- `lib/transforms/htmlmin.ts` - HTML minification transform (production only)
- `dist/` - Build output (generated, do not edit)

## Development

- `yarn dev` - Start dev server (clears dist, runs Eleventy + PostCSS + esbuild in parallel)
- `yarn build` - Production build (minified HTML, CSS, JS)
- `yarn serve` - Serve the dist folder locally

## Code Patterns

- ES Modules throughout; all scripts use `import`/`export`.
- TypeScript for all scripts; no plain JS files in `src/scripts/`.
- Data is stored as YAML in `views/_data/` and loaded via `js-yaml` extension in Eleventy config.
- Images are processed via the `{% image %}` Liquid shortcode (eleventy-img, outputs WebP + JPEG).
- Cache-busting via `{% hash %}` shortcode (returns `Date.now()`).
- Tailwind 4.x configured via `@theme` directive in `_tailwind.scss` — no separate config file.
- Tabs for indentation, single quotes, semicolons required.

## Installed Tools

- **CLI Tools:** git, gh (GitHub CLI), yarn

## Commit Format

- Use [Conventional Commits](https://www.conventionalcommits.org/) prefixes: `feat:`, `fix:`, `refactor:`, `style:`, `perf:`, `docs:`, `chore:`
- Title: short imperative summary, lowercase after prefix (e.g. `feat: add accordion component`)
- Do not repeat the prefix as a verb (e.g. `fix: broken scroll`, not `fix: fix broken scroll`)
- Strip unnecessary filler words (e.g. "to enhance", "for improved", "for better")
- Body only when needed; for small changes a title alone is fine
- Body: flat bullet list of changes, no category headers
- Maximum 10 list items per commit
- Use `->` for version transitions (e.g. `chore: tailwind 3->4`)

## Release Flow

1. Determine version: patch bump for fixes/refinements, minor for new features
2. Update `version` in `package.json`, run `yarn install` to update `yarn.lock`
3. Stage `package.json` and `yarn.lock`, commit: `chore: release v<version>`
4. Tag: `git tag v<version>` (lightweight, not annotated)
5. Push: `git push origin main --tags` (always ask for explicit user confirmation first)
6. Create GitHub release: `gh release create v<version> --title "v<version>" --notes "<notes>"`

## Code Style
- ES Modules (type: module)
- TypeScript for scripts
- Tabs for indentation
- Single quotes
- Semicolons required
