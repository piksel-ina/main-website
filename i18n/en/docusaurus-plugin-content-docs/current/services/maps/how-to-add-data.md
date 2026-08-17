---
sidebar_position: 2
title: Add Data to the Map
description: Add layers from the Piksel catalogue or your own data.
---

import Figure from '@site/src/components/Docs/Figure';

# Add Data to the Map

Use the catalogue to add Piksel data, or use **Upload data** to bring in local data and supported web sources.

## Add a layer from the catalogue

1. Click **Explore map data** in the Workbench.
2. Select a suitable category. The catalogue includes **Optical Satellite Data**, **Coastal Product**, and **Disaster**.

<Figure
  src="/img/maps/maps-add-01-catalog-groups.webp"
  alt="Piksel Map catalogue categories"
  size={6}
/>

3. To compare Sentinel-2 mosaics, open **Optical Satellite Data** → **Sentinel-2 Derived Products** → **Global Sentinel-2 Mosaic**.
4. Select a layer to display, for example **Sentinel-2 Mosaic 2020 (Preview)**.

<Figure
  src="/img/maps/maps-add-02-catalog-layers.webp"
  alt="Sentinel-2 mosaic choices"
  size={6}
/>

5. In the preview panel, click **Add to map**. Close the catalogue with **Go to map**.
6. The layer appears as a Workbench card. Use **Ideal zoom** to move to its coverage.

<Figure
  src="/img/maps/maps-add-03-layer-added.webp"
  alt="Added layer"
  size={6}
/>

## Upload your own data

1. Click **Upload data** in the Workbench.
2. Choose a file from your computer or enter a supported data-source URL.
3. Follow the options shown by Piksel Map to complete the import.
4. Added data appears in the Workbench and can be configured like catalogue layers.

:::tip Check coverage and time
If a layer is not visible, use **Ideal zoom**, check its time setting, or select a location inside its coverage.
:::
