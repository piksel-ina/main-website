# Project Patterns

Structural patterns visible across the codebase. Reference for the `convention-review` skill — the subagent compares the diff against these.

## Components

`src/components/<Section>/<PascalCase>/` folder containing:

- `index.js` — default export
- `styles.module.scss` — alongside the component (when the component has styles)

Sub-component variants live in nested folders (e.g., `OurServices/previews/Preview01.js`).

## Data

`src/data/<purpose>Data.js`. Named camelCase exports. User-facing text wrapped in `@docusaurus/Translate`.

## Images

`static/img/<purpose>/`. Format conventions:

- `.webp` primary for raster
- `.jpg` / `.png` as fallback
- `.svg` for icons and logos

Responsive variants named `<name>-<width>.webp` (e.g., `maps-800.webp`, `maps-1200.webp`, `maps-1600.webp`).

## Blog

`YYYY-MM-DD-slug.md` with Indonesian slug. Single `authors.yml` for author metadata.

## Docs

`kebab-case.md` for articles. `index.mdx` per section. `_category_.yml` for sidebar configuration.

## i18n

`write-translations` generates IDs and skeleton structure — those should not be hand-edited. Translated values (string content) and translated content files under `current/` are expected to be hand-edited; that's the workflow.
