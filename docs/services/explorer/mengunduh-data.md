---
sidebar_position: 5
title: Mengunduh Data
description: Cara mengunduh atau memuat data raster dari katalog Piksel Explorer
---

# Mengunduh Data

Piksel Explorer adalah **katalog metadata** — bukan layanan hosting berkas. Data raster sebenarnya (COG, Cloud-Optimized GeoTIFF) berada di penyedia asal seperti USGS untuk Landsat dan penyedia cloud untuk Sentinel. Katalog Piksel menyediakan tautan langsung ke berkas tersebut melalui STAC API.

:::info Tiga cara mengakses data
1. **Unduh berkas tunggal** menggunakan URL aset langsung
2. **Unduh batch** menggunakan skrip Python berbasis STAC
3. **Muat langsung tanpa unduh** untuk analisis dengan `xarray`/`odc-stac`
:::

## Prasyarat {#prasyarat}

Untuk metode terprogram di halaman ini, siapkan:

```bash
pip install pystac-client odc-stac rioxarray
```

Untuk unduhan sederhana, `curl` atau `wget` sudah cukup.

## Cara 1: Unduh Berkas Tunggal {#unduh-tunggal}

Setiap dataset di STAC memiliki **aset** — satu per band. Setelah Anda memiliki URL aset (lihat [Mengambil URL Aset](./stac-api.md#mengambil-aset) di panduan STAC API), berkas dapat diunduh langsung dengan `curl` atau `wget`:

```bash
curl -O "https://landsatlook.usgs.gov/data/collection02/level-2/standard/oli-tirs/2022/103/061/LC09_L2SP_103061_20220415_20230421_02_T1/LC09_L2SP_103061_20220415_20230421_02_T1_SR_B4.TIF"
```

Metode ini cocok untuk mengambil satu band tertentu dari satu scene — misalnya untuk inspeksi visual atau pengujian cepat.

## Cara 2: Unduh Batch dengan Skrip {#unduh-batch}

Untuk mengunduh beberapa berkas berdasarkan area dan waktu, kueri STAC API lalu iterasi hasilnya:

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

        print(f"Unduhan selesai: {target}")
```

Contoh di atas mengunduh empat band (RGB + NIR) untuk seluruh scene Landsat 9 di Nusa Tenggara Timur pada Agustus 2022.

## Cara 3: Muat Langsung Tanpa Mengunduh {#stream}

Untuk analisis, sering kali lebih efisien untuk membaca data langsung dari cloud tanpa menyimpan berkas lokal. `odc-stac` memanfaatkan HTTP range request pada COG untuk hanya membaca piksel yang dibutuhkan:

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

Pendekatan ini cocok untuk pipeline analitik — Anda hanya mengunduh data yang benar-benar dibaca.

## Kapan Menggunakan Metode Apa {#kapan-menggunakan}

| Kebutuhan | Metode |
| --- | --- |
| Satu berkas tertentu untuk inspeksi manual | Cara 1 (`curl`) |
| Beberapa scene untuk arsip lokal | Cara 2 (skrip batch) |
| Analisis skala besar tanpa penyimpanan lokal | Cara 3 (`odc-stac`) |

:::tip
Untuk workload yang lebih besar, gunakan [Sandbox Analisis](/docs/services/sandbox) — sudah dilengkapi Open Data Cube, `xarray`, dan `dask` sehingga tidak perlu instalasi maupun unduhan lokal.
:::
