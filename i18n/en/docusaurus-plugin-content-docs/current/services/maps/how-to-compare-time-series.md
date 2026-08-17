---
sidebar_position: 4
title: Compare Data and Time
description: Compare two layers or two points in time side by side.
---

import Figure from '@site/src/components/Docs/Figure';

# Compare Data and Time

Comparison mode helps you view differences between two layers or points in time without moving between map views.

## Start a comparison

1. Add one or two layers to the Workbench. To compare change over time, add **Sentinel-2 Mosaic 2016 (Preview)** and **Sentinel-2 Mosaic 2020 (Preview)**.
2. Click the **Compare** button on the right of the map.

<Figure
  src="/img/maps/maps-compare-01-button.webp"
  alt="Compare button"
  size={6}
/>

3. The map splits into left and right sides.
4. Configure each side independently through the Workbench layer cards.
5. Drag the divider to view differences at the same location.

<Figure
  src="/img/maps/maps-compare-02-split.webp"
  alt="Side-by-side comparison"
  size={6}
/>

## Use the comparison result

Use comparison to inspect land-cover changes, coastal conditions, or other patterns between two points in time. When finished, click **Compare** again to leave this mode.

:::tip Share a comparison
Use **Share / Print** after configuring a comparison. The shared link preserves the map view and active layers.
:::
