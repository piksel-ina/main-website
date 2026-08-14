---
sidebar_position: 2
title: Searching for Data
description: Step-by-step guide to using Data Explorer
---

# Searching for Data

This guide walks through finding available satellite data in Data Explorer.

## Open Data Explorer {#open-piksel-explorer}

Open the [Data Explorer product catalogue](https://explorer.piksel.big.go.id/products).

![explorer-homepage](/img/explorer/explorer-home1.webp)

Data Explorer has four main sections:

1. **Product selector**: Shows the selected product. Select the product name to open the product menu.

2. **Time range**: Shows the period used to filter the selected product. Select the time range in the grey menu bar to open the time selector. The blue bar chart shows how data availability changes over time.

3. **Map view**: Shows where data is available for the selected product and period. Blue tiles indicate available data.

4. **Product information**: Shows further details about the selection, including the number of datasets, their total area and their coordinate reference system.

## Select a Product {#pilih-produk}

1. Select the **product selector**, then choose **ls9_c2l2_sr** (Landsat 9 Surface Reflectance).

![explorer-l9](/img/explorer/explorer-home2.webp)

2. Select the **time** bar, then choose **2022** to show Landsat 9 datasets from that year.

![explorer-2022](/img/explorer/explorer-home3.webp)

3. Select the **all months** bar, then choose **August** to narrow the results to August 2022.

![explorer-aug](/img/explorer/explorer-home4.webp)

4. Select the **all days** bar, then choose **11** to narrow the results to 11 August 2022.

![explorer-11th](/img/explorer/explorer-home5.webp)

5. The **map view** shows the selected Landsat 9 datasets as blue tiles. Use the **+** button to zoom in, then select and drag the map to move around.

![explorer-zoom](/img/explorer/explorer-home6.webp)

## Zoom to a Specific Region {#zoom-ntt}

Use the **+** button to zoom in on a region. This example uses East Nusa Tenggara.

![explorer-ntt](/img/explorer/explorer-home7.webp)

Select a blue tile to open a preview and view the dataset metadata below the map.

![explorer-ntt2](/img/explorer/explorer-home8.webp)

## Downloading Data {#mengunduh-data}

Some datasets, particularly products created by Piksel, provide downloadable files on the dataset details page. Under **Location**, select a filename to open or download an available asset.

![Downloadable files under Location on a Data Explorer dataset page](/img/explorer/explorer-dataset-download.webp)

:::tip
To query the catalogue through code, use the [STAC API](./stac-api.md), or see [Data Export Formats](./data-export-formats.md) for other metadata formats.
:::
