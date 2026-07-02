---
sidebar_position: 2
pagination_prev: null
---

# Pemantauan Sawah

## Ringkasan

Pemantauan fase tanam dan kondisi kesehatan tanaman padi di lahan baku sawah menggunakan indeks vegetasi dari citra Sentinel-2. Analisis multitemporal membantu mengidentifikasi daerah sentra produksi, memantau pola tanam, dan mendukung estimasi luas panen di tingkat kabupaten.

## Latar Belakang

Indonesia adalah salah satu produsen dan konsumen padi terbesar di dunia. Ketahanan pangan nasional bergantung pada pemantauan yang akurat terhadap luas lahan produktif dan siklus tanam. Pendekatan konvensional berbasis survei lapangan sering kali terbatas oleh biaya, waktu, dan cakupan wilayah. Pemantauan berbasis satelit menyediakan cara yang lebih objektif dan konsisten untuk memantau kondisi lahan sawah di seluruh Indonesia.

## Data dan Sensor

- **Sentinel-2 (Level-2A)** — resolusi spasial 10 m untuk band optik utama, revisit 5 hari.
- **Landsat 8/9 (Surface Reflectance)** — resolusi 30 m sebagai pelengkap arsip jangka panjang.
- **Batas wilayah administrasi** — untuk agregasi statistik per kabupaten atau kecamatan.
- **Peta lahan baku sawah** — sebagai mask analisis.

## Metodologi

1. **Preprocessing** — koreksi awan dan pembentukan mozaik bulanan dari citra bebas awan.
2. **Perhitungan indeks vegetasi** — NDVI dan EVI dihitung per piksel untuk setiap periode.
3. **Analisis time-series** — deret waktu indeks vegetasi digunakan untuk mengidentifikasi fase pertumbuhan tanaman (vegetatif, generatif, matang).
4. **Deteksi pola tanam** — klasifikasi pola satu kali, dua kali, atau tiga kali tanam dalam satu tahun berdasarkan puncak NDVI.
5. **Agregasi statistik** — ringkasan luas fase tanam per wilayah administrasi.

## Hasil dan Output

- Peta fase tanam padi per periode dalam format GeoTIFF (Cloud Optimized GeoTIFF).
- Statistik luas fase tanam per kabupaten dalam format CSV atau JSON.
- Visualisasi time-series NDVI untuk wilayah yang dipilih melalui layanan Peta Interaktif Piksel.

## Wilayah Kajian

Fokus awal pada sentra produksi padi di Pulau Jawa (Jawa Barat, Jawa Tengah, Jawa Timur) dan Sulawesi Selatan. Cakupan dapat diperluas ke wilayah lain sesuai kebutuhan pengguna.
