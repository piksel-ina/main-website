---
sidebar_position: 3
title: STAC API
description: Panduan kueri katalog Piksel secara terprogram menggunakan STAC API
---

# Menggunakan STAC API

Piksel Explorer memperlihatkan seluruh katalog data melalui **STAC API 1.1.0** (SpatioTemporal Asset Catalog). Dengan STAC, Anda dapat mencari, memfilter, dan mengambil metadata citra secara terprogram tanpa perlu membuka antarmuka web.

:::info Endpoint utama
`https://explorer.piksel.big.go.id/stac`
:::

## Mengapa STAC {#mengapa-stac}

STAC adalah standar terbuka untuk katalog aset geospasial. Menggunakan STAC berarti:

- **Satu API, banyak katalog.** Kode yang bekerja dengan STAC Piksel juga bekerja dengan katalog lain seperti Microsoft Planetary Computer, Earth Search, dan USGS Landsat.
- **Filter kuat.** Kueri berdasarkan area, waktu, tutupan awan, atau field metadata apa pun menggunakan CQL2.
- **Interoperable.** Kompatibel dengan `pystac-client`, `stackstac`, `odc-stac`, QGIS, dan banyak tool lainnya.

## Struktur Endpoint {#struktur-endpoint}

| Endpoint | Fungsi |
| --- | --- |
| `/stac` | Katalog akar — daftar seluruh collection |
| `/stac/collections` | Daftar collection yang tersedia |
| `/stac/collections/{product}` | Metadata satu collection |
| `/stac/search` | Cari item lintas collection dengan filter |
| `/stac/queryables` | Field yang dapat difilter |

## Contoh: Cari Item dengan pystac-client {#contoh-pystac}

`pystac-client` adalah cara paling umum mengakses STAC API dari Python.

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

Contoh di atas mencari citra Landsat 9 Surface Reflectance di wilayah Nusa Tenggara Timur untuk bulan Agustus 2022.

## Filter Lanjutan dengan CQL2 {#cql2}

Piksel STAC mendukung **CQL2** (Common Query Language) untuk filter kompleks yang tidak bisa diekspresikan dengan parameter dasar.

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

Contoh di atas mencari citra Sentinel-2 di seluruh Indonesia dengan tutupan awan ≤ 20% sejak Januari 2024.

Untuk melihat semua field yang dapat difilter, buka `/stac/queryables`.

## Mengambil URL Aset {#mengambil-aset}

Setiap item STAC berisi **aset** — URL langsung ke file COG (Cloud-Optimized GeoTIFF) yang dapat dibaca oleh `rioxarray`, `rasterio`, atau `odc-stac`.

```python
item = next(search.items())
red_band_url = item.assets["red"].href
print(red_band_url)
```

Aset ini dapat dibuka langsung tanpa mengunduh seluruh file, memanfaatkan HTTP range requests.

## Pagination {#pagination}

Untuk hasil pencarian yang besar, gunakan iterator `pystac-client` yang menangani pagination secara otomatis:

```python
for item in search.items():
    process(item)
```

Gunakan parameter `limit` untuk mengatur ukuran halaman dan `max_items` untuk membatasi total hasil yang diambil.

:::tip Referensi lengkap
- [Dokumentasi STAC API](https://api.stacspec.org/)
- [pystac-client](https://pystac-client.readthedocs.io/)
- [Katalog STAC Piksel](https://explorer.piksel.big.go.id/stac)
:::
