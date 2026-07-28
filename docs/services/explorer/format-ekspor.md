---
sidebar_position: 4
title: Format Ekspor Data
description: Format metadata dan API geospasial yang tersedia di Piksel Explorer
---

# Format Ekspor Data

Selain antarmuka web, Piksel Explorer menyediakan beberapa format ekspor untuk konsumsi terprogram. Halaman ini merangkum format apa yang tersedia, di mana mengaksesnya, dan kapan menggunakan yang mana.

## Katalog Produk {#katalog-produk}

Metadata seluruh produk tersedia dalam tiga format. Link **Text / Stac / Yaml** berada tepat di atas tabel produk pada halaman [`/products`](https://explorer.piksel.big.go.id/products).

![Halaman produk Piksel Explorer dengan link ekspor di bagian atas](/img/explorer/explorer-products-list.webp)

| Format | URL | Kegunaan |
| --- | --- | --- |
| Teks | `/products.txt` | Daftar sederhana nama produk, cocok untuk script shell |
| STAC | `/stac/collections` | Katalog terstruktur, standar industri |
| YAML | `/products.odc-product.yaml` | Definisi Open Data Cube lengkap dengan measurement dan flag |

## Per Produk {#per-produk}

Setiap produk individual memiliki ekspor sendiri:

| Format | URL | Kegunaan |
| --- | --- | --- |
| ODC YAML | `/products/{name}.odc-product.yaml` | Definisi produk untuk indexing ke Open Data Cube lokal |
| STAC Collection | `/stac/collections/{name}` | Metadata collection dalam format STAC JSON |

Contoh untuk Landsat 9 Surface Reflectance:

```
https://explorer.piksel.big.go.id/products/ls9_c2l2_sr.odc-product.yaml
https://explorer.piksel.big.go.id/stac/collections/ls9_c2l2_sr
```

## API Geospasial {#api-geospasial}

Piksel Explorer menyediakan endpoint API untuk metadata spasial dan temporal:

| Endpoint | Format | Kegunaan |
| --- | --- | --- |
| `/api/footprint/{product}` | GeoJSON | Footprint agregat seluruh dataset dalam produk |
| `/api/dataset-timeline/{product}` | JSON | Jumlah dataset per bulan sepanjang waktu |

Endpoint ini berguna untuk:

- Menampilkan cakupan spasial produk pada peta pihak ketiga
- Membangun visualisasi ketersediaan data kustom
- Validasi cepat sebelum melakukan pencarian STAC penuh

## Metadata Types {#metadata-types}

Definisi tipe metadata (schema `eo3` yang digunakan seluruh produk) tersedia di:

| Format | URL |
| --- | --- |
| Teks | `/metadata-types.txt` |
| YAML | `/metadata-types.odc-type.yaml` |

## Kapan Menggunakan Format Apa {#kapan-menggunakan}

- **Butuh mengakses data untuk analisis?** Gunakan [STAC API](./stac-api.md) — standar terbuka, mendukung filter kompleks.
- **Membangun instance Open Data Cube sendiri?** Gunakan ODC YAML untuk indexing produk ke database lokal.
- **Hanya perlu daftar nama produk?** Gunakan `/products.txt`.
- **Ingin memvisualisasikan cakupan?** Gunakan endpoint `/api/footprint/{product}`.
