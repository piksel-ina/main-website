---
sidebar_position: 3
title: STAC API
description: Guide to querying the Piksel catalogue through the STAC API
---

# Using the STAC API

Data Explorer exposes its catalogue through the **STAC API 1.1.0** (SpatioTemporal Asset Catalog). The API can search, filter and retrieve imagery metadata without using the web interface.

:::info Main endpoint
`https://explorer.piksel.big.go.id/stac`
:::

## Why STAC {#mengapa-stac}

STAC is an open standard for cataloguing geospatial assets. It offers:

- **A common interface.** The same STAC clients can connect to Piksel and other catalogues such as Microsoft Planetary Computer, Earth Search and USGS Landsat.
- **Flexible filtering.** CQL2 queries can filter by area, time, cloud cover and other fields exposed by the catalogue.
- **Broad tool support.** STAC is supported by `pystac-client`, `stackstac`, `odc-stac`, QGIS and other geospatial tools.

## Endpoint Structure {#struktur-endpoint}

| Endpoint | Purpose |
| --- | --- |
| `/stac` | Root catalogue with links to the available collections |
| `/stac/collections` | Lists the available collections |
| `/stac/collections/{product}` | Metadata for one collection |
| `/stac/search` | Searches for items across collections using filters |
| `/stac/queryables` | Fields available for filtering |

## Example: Search with pystac-client {#contoh-pystac}

Install `pystac-client` to access the STAC API from Python.

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

This example searches for Landsat 9 Surface Reflectance imagery over East Nusa Tenggara in August 2022.

## Advanced Filtering with CQL2 {#cql2}

Piksel's STAC API supports **CQL2** (Common Query Language) for filters that cannot be expressed with the basic search parameters.

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

This example searches for Sentinel-2 imagery across Indonesia with cloud cover of 20% or less from January 2024 onwards.

Open `/stac/queryables` to see the fields available for filtering.

## Retrieve Asset Locations {#mengambil-aset}

Each STAC item contains **assets** with locations for files such as Cloud-Optimised GeoTIFFs. The URI scheme and access method depend on the product and its storage location.

```python
item = next(search.items())
red_band_url = item.assets["red"].href
print(red_band_url)
```

Libraries such as `rioxarray`, `rasterio` and `odc-stac` can use these asset locations when the relevant storage access is configured.

## Pagination {#pagination}

For large result sets, the `pystac-client` iterator handles pagination automatically:

```python
for item in search.items():
    process(item)
```

Use `limit` to set the page size and `max_items` to cap the total number of items returned.

:::tip Further reading
- [STAC API documentation](https://api.stacspec.org/)
- [pystac-client](https://pystac-client.readthedocs.io/)
- [Piksel STAC catalogue](https://explorer.piksel.big.go.id/stac)
:::
