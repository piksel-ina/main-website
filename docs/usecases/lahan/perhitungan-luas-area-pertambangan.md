---
sidebar_position: 2
pagination_prev: null
---

# Perhitungan Luas Area Pertambangan

## Ringkasan

Perhitungan luas area terbuka aktivitas pertambangan menggunakan kombinasi data optik dan radar. Analisis ini menjadi dasar pemantauan kepatuhan izin usaha pertambangan dan estimasi lahan terganggu yang membutuhkan rehabilitasi.

## Latar Belakang

Aktivitas pertambangan terbuka menyebabkan perubahan bentang alam yang signifikan pada area yang luas dan sering kali sulit dijangkau melalui inspeksi darat. Pengetahuan yang akurat tentang luas area terbuka penting untuk memastikan aktivitas tetap dalam batas wilayah izin usaha pertambangan (WIUP) dan untuk mengukur kewajiban rehabilitasi pasca-tambang. Data satelit memberikan informasi objektif yang dapat diperbarui secara berkala.

## Data dan Sensor

- **Sentinel-2 (Level-2A)** — data optik resolusi 10 m untuk deteksi visual perubahan bentang alam.
- **Sentinel-1 (GRD)** — data radar untuk pemantauan saat kondisi tertutup awan.
- **Landsat 8/9 (Surface Reflectance)** — data pelengkap untuk analisis jangka panjang.
- **Peta wilayah izin usaha pertambangan (WIUP)** — sebagai referensi batas legal.

## Metodologi

1. **Pembentukan komposit kuartalan** — median composite dari citra bebas awan setiap tiga bulan.
2. **Klasifikasi tutupan lahan** — pemisahan area tambang terbuka dari vegetasi, kolam tambang, tumpukan material, dan area terbangun.
3. **Perhitungan luas** — kalkulasi luas area tambang terbuka per piksel dan agregasi per wilayah konsesi.
4. **Overlay dengan WIUP** — evaluasi kesesuaian aktivitas terhadap batas izin.
5. **Analisis perubahan** — perbandingan antar kuartal untuk memantau perluasan atau penurunan aktivitas.

## Hasil dan Output

- Peta area tambang terbuka kuartalan dalam format GeoTIFF.
- Statistik luas (hektar) per konsesi dalam format CSV atau JSON.
- Layer poligon area terbuka dalam format GeoJSON untuk integrasi ke sistem GIS.

## Wilayah Kajian

Fokus pada wilayah konsentrasi aktivitas pertambangan terbuka di Kalimantan (batubara), Sumatera (batubara), dan Sulawesi (nikel).
