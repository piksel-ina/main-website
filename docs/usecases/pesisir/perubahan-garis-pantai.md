---
sidebar_position: 2
pagination_prev: null
---

# Perubahan Garis Pantai

## Ringkasan

Analisis perubahan garis pantai akibat abrasi dan akresi menggunakan data time-series Landsat sejak 1984. Analisis multitemporal ini membantu mengidentifikasi zona intertidal dan mendukung pengelolaan wilayah pesisir terpadu.

## Latar Belakang

Wilayah pesisir Indonesia rentan terhadap perubahan akibat dinamika alam dan aktivitas manusia. Abrasi mengancam permukiman dan infrastruktur, sementara akresi dapat mengubah pola pemanfaatan lahan pesisir. Data satelit optik jangka panjang memungkinkan analisis perubahan yang konsisten dari waktu ke waktu, memberikan gambaran objektif tentang laju dan pola perubahan garis pantai.

## Data dan Sensor

- **Landsat 5/7/8/9 (Surface Reflectance)** — arsip data sejak 1984, resolusi 30 m.
- **Sentinel-2 (Level-2A)** — data resolusi 10 m untuk periode terkini.
- **Data pasang surut** — sebagai koreksi posisi garis pantai relatif terhadap kondisi air laut.

## Metodologi

1. **Filter berdasarkan pasang surut** — pemilihan citra yang direkam pada kondisi air pasang atau surut tertentu untuk konsistensi.
2. **Ekstraksi garis pantai** — menggunakan indeks air (NDWI, MNDWI) atau threshold pada band inframerah.
3. **Vektorisasi** — konversi hasil raster menjadi garis pantai dalam format vektor.
4. **Analisis perubahan** — perhitungan jarak dan luas perubahan garis pantai antar periode (misalnya per dekade).
5. **Klasifikasi zona** — pemetaan zona abrasi dan akresi.

## Hasil dan Output

- Garis pantai historis dalam format vektor (GeoJSON atau Shapefile).
- Peta laju perubahan garis pantai (meter per tahun) dalam format raster.
- Statistik luas area abrasi dan akresi per wilayah administrasi.

## Wilayah Kajian

Fokus awal pada wilayah pesisir yang rawan abrasi seperti pantai utara Jawa (Pantura), pesisir timur Sumatera, dan wilayah pesisir strategis lainnya sesuai prioritas nasional.
