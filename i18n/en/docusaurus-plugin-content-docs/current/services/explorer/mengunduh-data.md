---
sidebar_position: 5
title: Downloading Data
description: How to download or stream raster data from the Piksel Explorer catalog
---

# Downloading Data

Piksel Explorer is a **metadata catalog** — not a file hosting service. The actual raster data (COG, Cloud-Optimized GeoTIFF) lives with the original providers, such as USGS for Landsat and cloud providers for Sentinel. The Piksel catalog exposes direct links to those files through the STAC API.

:::info Three ways to access data
1. **Download a single file** using a direct asset URL
2. **Batch download** using a Python script built on STAC
3. **Stream directly without downloading** for analysis with `xarray` / `odc-stac`
:::

## Prerequisites {#prasyarat}

For the programmatic methods on this page, install:

```bash
pip install pystac-client odc-stac rioxarray
```

For simple downloads, `curl` or `wget` is enough.

## Method 1: Download a Single File {#unduh-tunggal}

Each dataset in STAC has **assets** — one per band. Once you have an asset URL (see [Retrieving Asset URLs](./stac-api.md#mengambil-aset) in the STAC API guide), the file can be downloaded directly with `curl` or `wget`:

```bash
curl -O "https://landsatlook.usgs.gov/data/collection02/level-2/standard/oli-tirs/2022/103/061/LC09_L2SP_103061_20220415_20230421_02_T1/LC09_L2SP_103061_20220415_20230421_02_T1_SR_B4.TIF"
```

This method is suited for grabbing a single band from a single scene — for example, for a quick visual inspection or a spot check.

## Method 2: Batch Download with a Script {#unduh-batch}

To download several files based on area and time, query the STAC API and iterate over the results:

```python
from pathlib import Path

import requests
from pystac_client import Client

catalog = Client.open("https://explorer.piksel.big.go.id/stac")

search = catalog.search(
    collections=["ls9_c2l2_sr"],
    bbox=[119.5, -9.5, 121.5, -8.0],
    datetime="2022-08-01/2022-08-31",
    limit=10,
)

output_dir = Path("./data")
output_dir.mkdir(exist_ok=True)

for item in search.items():
    for band_name in ["red", "green", "blue", "nir08"]:
        asset = item.assets[band_name]
        target = output_dir / f"{item.id}_{band_name}.tif"

        with requests.get(asset.href, stream=True) as response:
            response.raise_for_status()
            with open(target, "wb") as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

        print(f"Download complete: {target}")
```

The example above downloads four bands (RGB + NIR) for every Landsat 9 scene over East Nusa Tenggara in August 2022.

## Method 3: Stream Directly Without Downloading {#stream}

For analysis, it is often more efficient to read data straight from the cloud without saving files locally. `odc-stac` uses HTTP range requests on COGs to read only the pixels you need:

```python
from odc.stac import load
from pystac_client import Client

catalog = Client.open("https://explorer.piksel.big.go.id/stac")

search = catalog.search(
    collections=["ls9_c2l2_sr"],
    bbox=[119.5, -9.5, 121.5, -8.0],
    datetime="2022-08-01/2022-08-31",
)

ds = load(
    search.items(),
    bands=["red", "green", "blue", "nir08"],
    resolution=30,
    crs="EPSG:4326",
    chunks={"time": 1, "x": 2048, "y": 2048},
)

ndvi = (ds.nir08 - ds.red) / (ds.nir08 + ds.red)
```

This approach suits analytical pipelines — you only fetch the data you actually read.

## Which Method When {#kapan-menggunakan}

| Need | Method |
| --- | --- |
| A single file for manual inspection | Method 1 (`curl`) |
| Several scenes for a local archive | Method 2 (batch script) |
| Large-scale analysis without local storage | Method 3 (`odc-stac`) |

:::tip
For larger workloads, use the [Analysis Sandbox](/docs/services/sandbox) — it comes with Open Data Cube, `xarray`, and `dask` pre-installed, so no local setup or downloads are required.
:::
