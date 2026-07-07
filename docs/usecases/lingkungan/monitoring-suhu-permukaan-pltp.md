---
sidebar_position: 2
pagination_prev: null
pagination_next: null
---

# Monitoring Suhu Permukaan di Area PLTP

## Ringkasan

Modul ini bertujuan untuk memberikan contoh penggunaan metode Normalized Difference Vegetation Index (NDVI) dan Land Surface Temperature (LST) untuk mengetahui kondisi suhu permukaan di sekitar area Pembangkit Listrik Tenaga Panas Bumi (PLTP). Pemahaman terhadap suhu permukaan dapat menunjukkan aktivitas PLTP dan potensi pengembangan PLTP tersebut. Lokasi yang dipilih adalah area PLTP di Kamojang, Jawa Barat.

## Tahapan

1. Memuat library
2. Koneksi data
3. Menentukan wilayah
4. Memuat data Landsat
5. Membuat geomedian
6. Perhitungan NDVI
7. Perhitungan emisivitas
8. Perhitungan LST

## Hasil

Peta Land Surface Temperature (LST) menunjukkan bahwa kawasan PLTP termasuk pemukiman menunjukkan suhu permukaan yang tinggi (warna kuning, oranye dan merah). Sedang wilayah hutan memiliki suhu lebih rendah (berwarna biru).

![Peta Land Surface Temperature area PLTP Kamojang](/img/usecases/lst.webp)
