---
sidebar_position: 2
pagination_prev: null
---

# Monitoring Penanaman Padi

## Ringkasan

Modul ini bertujuan untuk memberikan contoh penggunaan data Sentinel-2 untuk memonitor pertumbuhan padi dalam setahun. Dua spektral indeks yang digunakan adalah:

1. Normalized Difference Vegetation Index (NDVI)
2. Land Surface Water Index (LSWI)
3. Enhanced Vegetation Index (EVI)
4. Normalized Difference Red Edge (NDRE)

Selain itu, modul ini menghasilkan juga kualitas peta phenology, tanaman padi, estimasi hasil panen, dan dashboard pemantauan nya. Periode yang dianalisis adalah antara bulan Maret dan November 2025. Lokasi yang digunakan adalah di Kecamatan Telagasari, Kabupaten Karawang, Provinsi Jawa Barat.

## Tahapan

1. Persiapan data
2. Menghitung index spektral
3. Identifikasi lahan sawah
4. Membuat data time series
5. Mendeteksi tahap pertumbuhan padi
6. Membuat peta phenology
7. Memonitor kondisi padi
8. Prediksi panen
9. Dashboard untuk monitoring

## Hasil

Modul ini menyajikan metode pemantauan pertumbuhan padi melalui pembuatan dashboard interaktif yang menggabungkan data spasial dan temporal, termasuk luas area sawah, indeks vegetasi (NDVI dan EVI), serta tahapan pertumbuhan yang diurutkan secara kronologis. Hasil yang dicapai berupa visualisasi durasi antar tahap pertumbuhan, ringkasan statistik musim tanam (panjang musim, puncak NDVI/EVI), dan informasi luas lahan, sehingga memberikan gambaran komprehensif tentang dinamika pertumbuhan padi sekaligus memudahkan analisis perkembangan tanaman secara kuantitatif dan visual.

{/* image placeholder: padi.webp */}

## Input

Citra Sentinel-2

## Output

Prediksi hasil panen

## Metode

Indeks citra
