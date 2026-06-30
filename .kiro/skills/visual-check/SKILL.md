---
name: visual-check
description: Capture responsive screenshots at the project's breakpoints and report layout issues across viewport widths. Use when reviewing visual changes, after CSS or layout edits, or when the user asks for a visual check, responsive check, or screenshot review. Requires a vision-capable model — the procedure inspects screenshots visually.
---

# Visual Check

Capture screenshots of the running site at multiple viewport widths, then visually inspect each for layout issues.

## Prerequisites

- The Docusaurus dev server is running (`npm start`, default `http://localhost:3000`). If it isn't, ask the user to start it.
- `playwright-cli` is on PATH driving Chromium. If missing, install it (per AGENTS.md, dev tools may be installed — surface the install command first). If install isn't possible, stop and tell the user.

## Breakpoints

Capture at height 900px. Widths target real device viewports rather than the SCSS breakpoint tokens — each width sits inside a different responsive range to exercise the layout where it actually renders:

| Width  | Target            |
|--------|-------------------|
| 1920px | Large desktop     |
| 1280px | Laptop            |
| 1024px | Small laptop      |
| 820px  | Tablet            |
| 600px  | Large phone       |
| 360px  | Small phone       |

## Procedure

1. Resolve the target URL. Default: `http://localhost:3000`. For a specific page: `http://localhost:3000/<path>`.
2. Derive a slug for filenames: `homepage` if no path, otherwise the path with `/` replaced by `-`.
3. Open one browser session:
   ```bash
   playwright-cli open <url> --browser chrome
   ```
4. For each width in the table above:
   ```bash
   playwright-cli resize <width> 900
   playwright-cli screenshot --filename .playwright-cli/<slug>-<width>.png
   ```
5. Close the session:
   ```bash
   playwright-cli close
   ```
6. Read each PNG and inspect visually.
7. After reporting, delete the screenshots you captured this run: `rm .playwright-cli/<slug>-*.png`. Keep them only if the user explicitly asks to retain them for review.

## What to inspect

- **Text overflow** — cut off, truncated, or extending beyond its container
- **Alignment** — centering issues, inconsistent spacing, misaligned elements
- **Overlaps** — elements covering each other, z-index problems
- **Clip-paths** — distorted or broken polygon shapes
- **Responsive breaks** — content that breaks at one specific width
- **Missing content** — present at other widths but absent here
- **Horizontal scroll** — the page body should not trigger `overflow-x`
- **Code blocks** — `pre` / `code` elements overflowing their container
- **Sidebar collapse** — expected behavior at tablet widths (820–1024px)

## Report format

One line per issue:

```
[WIDTH][SEVERITY] Section — description
```

Severity: `HIGH` (broken/overlapping content), `MEDIUM` (noticeable misalignment), `LOW` (minor cosmetic).

End with:

```
SUMMARY: X HIGH / Y MEDIUM / Z LOW issues across N viewports
```

If no issues: `All clear across all viewports.`

Do not suggest fixes. Report only.
