---
sidebar_position: 2
title: Searching for Data
description: Step-by-step guide to using the Data Explorer
---

# Searching for Data

A step-by-step walkthrough for finding available satellite data using the Data Explorer.

## Open Piksel Explorer {#open-piksel-explorer}

Go to https://explorer.piksel.big.go.id/products. This will open the Data Explorer interface.

![explorer-homepage](/img/explorer/explorer-home1.webp)

Piksel Explorer has four main sections:

1. **Product selector**: Shows the currently selected product. Click the product name to open the product menu.

2. **Time range**: Shows the active time range used to filter data for the selected product. Click the selected time range in the grey menu bar to open the time selector. The blue bar chart shows data availability over time for your chosen product.

3. **Map view**: Displays where data is available for the selected product and time range. Blue tiles indicate the presence of data.

4. **Product info**: The sidebar shows additional details about the data for the selected product and time range — for example, the number of datasets in the selection, their total area, and their coordinate reference system.

## Select a Product {#pilih-produk}

1. Click the **product selector** to open the menu, then choose **ls9_c2l2_sr** (Landsat 9 Surface Reflectance).

![explorer-l9](/img/explorer/explorer-home2.webp)

2. Click the **time** bar to open the menu. Select **2022**. This will show every Landsat 9 dataset for 2022.

![explorer-2022](/img/explorer/explorer-home3.webp)

3. Click the **all months** bar to open the menu. Select **August**. This will narrow the results to every Landsat 9 dataset for August 2022.

![explorer-aug](/img/explorer/explorer-home4.webp)

4. Click the **all days** bar to open the menu. Select **11**. This will narrow the results to every Landsat 9 dataset for 11 August 2022.

![explorer-11th](/img/explorer/explorer-home5.webp)

5. The **map view** now shows every Landsat 9 dataset for 11 August 2022 as blue tiles. Use the **+** button on the map to zoom in, then click and drag to pan.

![explorer-zoom](/img/explorer/explorer-home6.webp)

## Zoom to a Specific Region {#zoom-ntt}

Use the **+** button on the map to zoom into a region — in this case, East Nusa Tenggara.

![explorer-ntt](/img/explorer/explorer-home7.webp)

Over East Nusa Tenggara, there is one dataset for 11 August 2022. Click the blue tile on the map to open a data preview along with all related metadata below the map view.

![explorer-ntt2](/img/explorer/explorer-home8.webp)

:::tip
For programmatic queries against the same data, use the [STAC API](./stac-api.md), or see [Data Export Formats](./format-ekspor.md) for other format options.
:::
