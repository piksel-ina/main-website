---
sidebar_position: 3
---

# Klasifikasi Mangrove dengan Machine Learning

## Ringkasan

Klasifikasi ekosistem mangrove menggunakan algoritma machine learning pada citra multispektral. Pendekatan ini menghasilkan peta habitat mangrove dengan tingkat akurasi tinggi untuk mendukung konservasi dan penilaian nilai ekonomi karbon biru.

## Latar Belakang

Mangrove adalah salah satu ekosistem pesisir paling penting di Indonesia, memberikan jasa lingkungan mulai dari perlindungan garis pantai hingga penyerapan karbon (blue carbon). Namun ekosistem mangrove menghadapi tekanan konversi lahan menjadi tambak, permukiman, dan infrastruktur pesisir. Klasifikasi berbasis machine learning memungkinkan pemetaan mangrove secara akurat dan konsisten pada skala nasional, sesuatu yang sulit dicapai dengan metode klasifikasi konvensional.

## Data dan Sensor

- **Sentinel-2 (Level-2A)** — resolusi 10 m dengan band merah, inframerah dekat, dan short-wave infrared yang responsif terhadap vegetasi mangrove.
- **Sentinel-1 (GRD)** — data radar untuk membantu diskriminasi mangrove dari vegetasi lainnya.
- **DEM (Digital Elevation Model)** — sebagai fitur tambahan berdasarkan elevasi rendah pesisir.
- **Data referensi mangrove** — untuk training dan validasi model.

## Metodologi

1. **Persiapan fitur** — kompilasi band optik, band radar, indeks vegetasi, dan indeks air.
2. **Sampling area training** — pengambilan titik referensi mangrove dan non-mangrove dari data lapangan atau citra resolusi tinggi.
3. **Training model** — pelatihan classifier Random Forest atau Gradient Boosted Trees pada fitur multi-source.
4. **Klasifikasi wilayah** — penerapan model pada citra untuk menghasilkan peta klasifikasi.
5. **Validasi akurasi** — evaluasi menggunakan confusion matrix dan overall accuracy pada data independen.

## Hasil dan Output

- Peta klasifikasi habitat mangrove dalam format GeoTIFF.
- Peta probabilitas mangrove sebagai output antara.
- Statistik luas mangrove per wilayah administrasi dan tren perubahannya antar periode.

## Wilayah Kajian

Fokus pada wilayah pesisir dengan ekosistem mangrove signifikan seperti pantai timur Sumatera, pesisir Kalimantan, Sulawesi, Papua, dan Kepulauan Riau.
