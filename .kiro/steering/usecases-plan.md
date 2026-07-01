---
inclusion: manual
---

# Use Cases Content Update Plan

Branch: `update-usecases-content`

## Decisions Made

### Homepage Section (src/components/Home/UseCases/index.js)

1. **Heading**: Replace English with Indonesian — "Pemanfaatan Piksel di Lapangan."
2. **Subtitle**: "Enam pemanfaatan operasional — setiap kartu menampilkan produk observasi bumi, sensor yang digunakan, dan frekuensi pembaruan data."
3. **Tile heading**: Render the `title` field (Indonesian) instead of `en` field. Keep `en` in data structure for future English locale.
4. **Technical terms** (sensor, cadence, product): Stay in English — they're industry-standard.
5. **Tile CTA**: Change "Pelajari" to "Selengkapnya".
6. **Eyebrow/coord text**: Keep as-is ("02 / Pemanfaatan", "DATACUBE · INDONESIA · OPEN ACCESS").

### Data (src/data/useCasesData.js)

7. **Stats field**: Add `stats: []` to the four tiles missing them (forestry, coastal, disaster, mining). Keep Agriculture and Urban stats unchanged. Values for the new four will be filled by the team later.

### Tile Imagery

8. **Replace** inline SVG component (UseCaseEO.js) with **static SVG files** — isometric/flat illustrations, one per use case.
9. Stored as asset files for easy future swap to real EO imagery (which is still being processed).
10. Style: isometric/flat scenes representing each sector (rice paddies, city skyline, forest canopy, coastline, flood, mine pit).

### Doc Pages (docs/usecases/)

11. **Language**: Indonesian. Technical terms (NDVI, Sentinel-2, SAR, etc.) stay in English within the text.
12. **index.mdx per category**: Short 2-3 sentence intro + `<DocCardList />`.
13. **Detail page structure** (brochure-plus level):
    - Title
    - Ringkasan (2-3 sentences)
    - Latar Belakang (problem context in Indonesia)
    - Data dan Sensor (satellites, resolution, temporal coverage)
    - Metodologi (processing steps, high level)
    - Hasil dan Output (deliverable type, format, frequency)
    - Wilayah Kajian (area of interest)
14. Each category has one detail page now but will have multiple in the future.

## Files to Modify

- `src/components/Home/UseCases/index.js` — heading, subtitle, render `title` instead of `en`, CTA text
- `src/components/Home/UseCases/UseCaseEO.js` — replace with static image approach
- `src/data/useCasesData.js` — add empty stats to 4 tiles
- `docs/usecases/*/index.mdx` — write intro content (6 files)
- `docs/usecases/agriculture/crop-monitoring.md` — full content
- `docs/usecases/urban/urban-growth.md` — full content
- `docs/usecases/forestry/deforestation-detection.md` — full content
- `docs/usecases/coastal/coastal-erosion.md` — full content
- `docs/usecases/disaster/flood-mapping.md` — full content
- `docs/usecases/mining/mining-monitoring.md` — full content
- Static SVG assets (new files, 6 illustrations)

## Notes

- This is a staging phase — site won't be published yet.
- English locale will be added later.
- Real EO imagery will replace illustrations once data processing is complete.
- Delete this steering file once implementation is done.
