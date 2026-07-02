---
sidebar_position: 2
pagination_prev: null
---

# Delineasi Banjir Aceh

## Ringkasan

Studi kasus delineasi area terdampak banjir di wilayah Aceh menggunakan data radar Sentinel-1. Pemetaan cepat dilakukan untuk mendukung upaya tanggap darurat, distribusi bantuan, dan perencanaan pemulihan pasca-banjir.

## Latar Belakang

Aceh mengalami kejadian banjir signifikan yang berdampak pada permukiman, lahan pertanian, dan infrastruktur di berbagai kabupaten. Kondisi cuaca yang sering tertutup awan pada saat banjir menyulitkan pemantauan menggunakan sensor optik. Data radar Sentinel-1 menjadi solusi untuk pemetaan cepat area tergenang, menyediakan informasi yang dapat langsung digunakan oleh lembaga tanggap bencana untuk mengoordinasikan respons di lapangan.

## Data dan Sensor

- **Sentinel-1 (GRD)** — data radar C-band, revisit 6-12 hari, dapat menembus tutupan awan.
- **Citra referensi pra-banjir** — sebagai baseline untuk deteksi perubahan permukaan air.
- **DEM Nasional** — untuk validasi area yang secara alami rendah.
- **Data batas administratif dan penggunaan lahan** — untuk agregasi dampak per wilayah.

## Metodologi

1. **Akuisisi citra pasca-kejadian** — pengambilan citra Sentinel-1 pada tanggal terdekat setelah puncak banjir.
2. **Preprocessing radar** — koreksi geometrik, speckle filtering, dan konversi ke sigma naught.
3. **Deteksi permukaan air** — thresholding pada nilai backscatter untuk memisahkan permukaan air dari lahan kering.
4. **Masking tubuh air permanen** — eliminasi sungai, danau, dan waduk yang sudah ada sebelum kejadian.
5. **Validasi topografi** — penyaringan berdasarkan DEM dan verifikasi visual pada beberapa titik dengan Sentinel-2 (bila tersedia bebas awan).
6. **Agregasi dampak** — perhitungan luas area terdampak per kabupaten, per klasifikasi penggunaan lahan.

## Hasil dan Output

- Peta indikatif genangan banjir Aceh dalam format GeoTIFF, tersedia dalam hitungan jam setelah akuisisi citra.
- Layer poligon area terdampak dalam format GeoJSON untuk integrasi ke sistem GIS BNPB dan BPBD.
- Statistik luas area tergenang per kabupaten, kecamatan, dan tipe penggunaan lahan (permukiman, pertanian, dll).
- Laporan singkat untuk dukungan pengambilan keputusan tanggap darurat.

## Wilayah Kajian

Wilayah kabupaten dan kota di Provinsi Aceh yang terdampak kejadian banjir, dengan cakupan yang disesuaikan dengan luas area terdampak pada setiap kejadian.
