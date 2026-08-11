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


## Content Security Policy

A strict hash-based CSP guards the deployed site, defined in a separate repo — `piksel-ina/terraform-iac`, path `staging/locals.tf`. The build output has to match those hashes, or the browser blocks the offending script or style. The trap: these changes pass `npm run build` clean and fail only in production, quietly, visible just in the browser console. Flag anything in the diff that desyncs the two:

- A new inline `<script>` or `style="..."`, or a new inline-style value — each is a hash the CSP doesn't carry yet.
- A new external host for images, fonts, scripts, iframes, or `fetch`/API calls — each needs its CSP directive widened.
- A Docusaurus version bump — its built-in inline scripts change, so the pinned hashes go stale.