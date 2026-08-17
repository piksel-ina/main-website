---
sidebar_position: 3
pagination_next: null
---

import Figure from '@site/src/components/Docs/Figure';

# Penggunaan di Perangkat Lunak GIS

Layanan Web dapat digunakan langsung dari antarmuka perangkat lunak GIS dengan menambahkan alamat layanan pada menu koneksi yang tersedia. Menu yang digunakan berbeda untuk setiap layanan.

| Layanan | QGIS               | ArcGIS Pro      | Alamat                             |
| ------- | ------------------ | --------------- | ---------------------------------- |
| WMS     | Add WMS/WMTS Layer | New WMS Server  | `https://ows.staging.piksel.big.go.id/wms` |
| WMTS    | Add WMS/WMTS Layer | New WMTS Server | `https://ows.staging.piksel.big.go.id/wmts` |
| WCS     | Add WCS Layer      | New WCS Server  | `https://ows.staging.piksel.big.go.id/wcs` |

## QGIS

1. Pilih Layer → Add Layer, lalu pilih menu sesuai layanan yang digunakan.

<Figure
  src="/img/services/web-services/qgis-add-layer.webp"
  alt="Menu Add WMS/WMTS Layer di QGIS"
  size={5}
/>

2. Klik New, lalu masukkan nama dan alamat layanan.

<Figure
  src="/img/services/web-services/qgis-connection.webp"
  alt="Formulir koneksi baru di QGIS"
  size={5}
/>

3. Klik Connect, pilih layer atau coverage yang tersedia, lalu klik Add.

<Figure
  src="/img/services/web-services/qgis-layer-list.webp"
  alt="Daftar layer Piksel di QGIS"
  size={5}
/>

## ArcGIS Pro

1. Pilih Insert → Connections → Server, lalu pilih server sesuai layanan yang digunakan.

<Figure
  src="/img/services/web-services/arcgis-server-menu.webp"
  alt="Menu koneksi server di ArcGIS Pro"
  size={5}
/>

2. Masukkan alamat layanan, lalu klik OK.

<Figure
  src="/img/services/web-services/arcgis-server-connection.webp"
  alt="Formulir koneksi server di ArcGIS Pro"
  size={5}
/>

3. Pilih layer dari koneksi tersebut dan tambahkan ke peta.
