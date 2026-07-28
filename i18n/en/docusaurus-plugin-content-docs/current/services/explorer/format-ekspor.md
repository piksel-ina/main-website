---
sidebar_position: 4
title: Data Export Formats
description: Metadata and geospatial API formats available in the Piksel Explorer
---

# Data Export Formats

Beyond the web interface, Piksel Explorer offers several export formats for programmatic consumption. This page summarises what is available, where to access it, and when to use each format.

## Product Catalog {#katalog-produk}

Metadata for every product is available in three formats. The **Text / Stac / Yaml** links sit just above the product table on the [`/products`](https://explorer.piksel.big.go.id/products) page.

![Piksel Explorer products page with export links at the top](/img/explorer/explorer-products-list.webp)

| Format | URL | Purpose |
| --- | --- | --- |
| Text | `/products.txt` | Simple list of product names, handy for shell scripts |
| STAC | `/stac/collections` | Structured catalog in an industry-standard format |
| YAML | `/products.odc-product.yaml` | Full Open Data Cube definitions with measurements and flags |

## Per Product {#per-produk}

Each individual product has its own exports:

| Format | URL | Purpose |
| --- | --- | --- |
| ODC YAML | `/products/{name}.odc-product.yaml` | Product definition for indexing into a local Open Data Cube |
| STAC Collection | `/stac/collections/{name}` | Collection metadata in STAC JSON format |

Example for Landsat 9 Surface Reflectance:

```
https://explorer.piksel.big.go.id/products/ls9_c2l2_sr.odc-product.yaml
https://explorer.piksel.big.go.id/stac/collections/ls9_c2l2_sr
```

## Geospatial API {#api-geospasial}

Piksel Explorer provides API endpoints for spatial and temporal metadata:

| Endpoint | Format | Purpose |
| --- | --- | --- |
| `/api/footprint/{product}` | GeoJSON | Aggregate footprint of every dataset in a product |
| `/api/dataset-timeline/{product}` | JSON | Dataset counts per month over time |

These endpoints are useful for:

- Displaying a product's spatial coverage on a third-party map
- Building custom data-availability visualisations
- Quick validation before running a full STAC search

## Metadata Types {#metadata-types}

Definitions for the metadata types (the `eo3` schema used by every product) are available at:

| Format | URL |
| --- | --- |
| Text | `/metadata-types.txt` |
| YAML | `/metadata-types.odc-type.yaml` |

## Which Format When {#kapan-menggunakan}

- **Need to access data for analysis?** Use the [STAC API](./stac-api.md) — an open standard that supports complex filters.
- **Building your own Open Data Cube instance?** Use ODC YAML to index products into a local database.
- **Just need the list of product names?** Use `/products.txt`.
- **Want to visualise coverage?** Use the `/api/footprint/{product}` endpoint.
