---
sidebar_position: 2
pagination_prev: null
---

# Pemantauan Kondisi Danau

## Ringkasan

Pemantauan kualitas dan luas permukaan air danau menggunakan data satelit multispektral. Analisis parameter seperti kekeruhan, konsentrasi klorofil, dan luas genangan mendukung pengelolaan sumber daya air dan deteksi dini indikasi eutrofikasi.

## Latar Belakang

Danau di Indonesia berperan penting sebagai sumber air baku, habitat perikanan, dan pendukung ekowisata. Kualitas air danau rentan menurun akibat pencemaran, sedimentasi, dan pertumbuhan alga berlebih. Pemantauan konvensional berbasis sampling lapangan terbatas oleh biaya dan cakupan spasial. Data satelit multispektral memungkinkan pemantauan kondisi permukaan air secara berkala pada seluruh badan air.

## Data dan Sensor

- **Sentinel-2 (Level-2A)** — resolusi 10-20 m dengan band khusus untuk analisis kualitas air, revisit 5 hari.
- **Landsat 8/9 (Surface Reflectance)** — data pelengkap untuk arsip jangka panjang.
- **Batas administratif danau** — sebagai mask analisis.
- **Data in-situ (jika tersedia)** — untuk kalibrasi model kualitas air.

## Metodologi

1. **Preprocessing** — koreksi atmosfer dan masking awan pada citra Sentinel-2.
2. **Ekstraksi permukaan air** — menggunakan indeks air (NDWI, MNDWI) untuk memisahkan tubuh air dari daratan.
3. **Perhitungan parameter kualitas air** — estimasi kekeruhan, klorofil-a, dan Total Suspended Solids (TSS) dari kombinasi band optik.
4. **Analisis time-series** — deret waktu parameter kualitas air untuk memantau tren jangka panjang.
5. **Deteksi anomali** — identifikasi periode dengan kualitas air di luar rentang normal.

## Hasil dan Output

- Peta parameter kualitas air (kekeruhan, klorofil-a, TSS) dalam format GeoTIFF.
- Time-series parameter kualitas air per titik atau zona danau.
- Peringatan indikasi eutrofikasi atau pencemaran akut.

## Wilayah Kajian

Fokus pada danau-danau prioritas nasional seperti Danau Toba, Danau Rawa Pening, Danau Tondano, dan danau lainnya yang menjadi prioritas pengelolaan.
