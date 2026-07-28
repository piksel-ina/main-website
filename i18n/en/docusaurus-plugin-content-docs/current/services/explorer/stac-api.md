---
sidebar_position: 3
title: STAC API
description: Guide to querying the Piksel catalog programmatically using the STAC API
---

# Using the STAC API

Piksel Explorer exposes the entire data catalog through the **STAC API 1.1.0** (SpatioTemporal Asset Catalog). With STAC you can search, filter, and retrieve image metadata programmatically without opening the web interface.

:::info Main endpoint
`https://explorer.piksel.big.go.id/stac`
:::

## Why STAC {#mengapa-stac}

STAC is an open standard for cataloguing geospatial assets. Using STAC means:

- **One API, many catalogs.** Code that works with the Piksel STAC also works with other catalogs like Microsoft Planetary Computer, Earth Search, and USGS Landsat.
- **Powerful filtering.** Query by area, time, cloud cover, or any metadata field using CQL2.
- **Interoperable.** Compatible with `pystac-client`, `stackstac`, `odc-stac`, QGIS, and many other tools.

## Endpoint Structure {#struktur-endpoint}

| Endpoint | Purpose |
| --- | --- |
| `/stac` | Root catalog — lists every collection |
| `/stac/collections` | List of 11 collections (one per product) |
| `/stac/collections/{product}` | Metadata for a single collection |
| `/stac/search` | Search for items across collections with filters |
| `/stac/queryables` | Fields available for filtering |

## Example: Searching for Items with pystac-client {#contoh-pystac}

`pystac-client` is the most common way to access a STAC API from Python.

```bash
pip install pystac-client
```

```python
from pystac_client import Client

catalog = Client.open("https://explorer.piksel.big.go.id/stac")

search = catalog.search(
    collections=["ls9_c2l2_sr"],
    bbox=[119.5, -9.5, 121.5, -8.0],
    datetime="2022-08-01/2022-08-31",
    limit=100,
)

for item in search.items():
    print(item.id, item.properties["datetime"])
```

The example above searches for Landsat 9 Surface Reflectance imagery over East Nusa Tenggara for August 2022.

## Advanced Filtering with CQL2 {#cql2}

The Piksel STAC supports **CQL2** (Common Query Language) for complex filters that cannot be expressed with the basic parameters.

```python
search = catalog.search(
    collections=["s2_l2a"],
    bbox=[95.0, -11.0, 141.0, 6.0],
    filter_lang="cql2-json",
    filter={
        "op": "and",
        "args": [
            {"op": "<=", "args": [{"property": "eo:cloud_cover"}, 20]},
            {"op": ">=", "args": [{"property": "datetime"}, "2024-01-01T00:00:00Z"]},
        ],
    },
)
```

The example above searches for Sentinel-2 imagery across Indonesia with cloud cover ≤ 20% since January 2024.

To see every filterable field, visit `/stac/queryables`.

## Retrieving Asset URLs {#mengambil-aset}

Each STAC item contains **assets** — direct URLs to COG (Cloud-Optimized GeoTIFF) files that can be read by `rioxarray`, `rasterio`, or `odc-stac`.

```python
item = next(search.items())
red_band_url = item.assets["red"].href
print(red_band_url)
```

These assets can be opened directly without downloading the entire file by taking advantage of HTTP range requests.

## Pagination {#pagination}

For large result sets, use the `pystac-client` iterator, which handles pagination automatically:

```python
for item in search.items():
    process(item)
```

Use the `limit` parameter to control page size and `max_items` to cap the total number of results retrieved.

:::tip Further reading
- [STAC API documentation](https://api.stacspec.org/)
- [pystac-client](https://pystac-client.readthedocs.io/)
- [Piksel STAC catalog](https://explorer.piksel.big.go.id/stac)
:::
