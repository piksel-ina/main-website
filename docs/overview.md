---
sidebar_position: 1
---

# Ikhtisar

Piksel adalah platform observasi Bumi digital yang memudahkan akses ke citra satelit dan informasi geospasial untuk wilayah Indonesia. Arsipnya mencakup data dari **Sentinel-1**, **Sentinel-2**, serta **Landsat 5, 7, 8, dan 9** untuk menelusuri dan menganalisis perubahan di berbagai wilayah Indonesia.

## Tentang proyek Piksel

Proyek Piksel (Bumi Digital Indonesia) merupakan kolaborasi antara Badan Informasi Geospasial dan Geoscience Australia, dengan dukungan Department of Foreign Affairs and Trade Australia.

Melalui Piksel, data satelit ditata menjadi koleksi yang konsisten dan siap analisis, kemudian disediakan melalui peta, layanan web, lingkungan komputasi, dan infrastruktur pemrosesan. Pengguna dapat memilih layanan yang sesuai tanpa harus mengunduh seluruh arsip data atau menyiapkan seluruh infrastruktur pengolahan dari awal.

## Layanan Piksel

Layanan Piksel mencakup:

- **[Jelajah Data](../services/explorer)** — menelusuri katalog metadata dan memeriksa ketersediaan citra berdasarkan lokasi dan waktu.
- **[Peta Interaktif](../services/maps)** — melihat produk citra dan dataset pada peta interaktif.
- **[Piksel Sandbox](../services/sandbox)** — menggunakan JupyterLab dan Open Data Cube untuk mengeksplorasi data serta mengembangkan analisis berbasis Python.
- **[Pemrosesan Data Geospasial](../services/geospatial-data-processing)** — menjalankan pemrosesan geospasial berskala besar dengan komputasi awan dan Argo Workflows.
- **[Layanan Web](../services/web-services)** — menghubungkan QGIS, ArcGIS, atau aplikasi lain melalui layanan OGC seperti WMS, WMTS, dan WCS.
- **[Dukungan dan Kolaborasi](../services/support)** — memperoleh bantuan, mengikuti pelatihan, dan menemukan informasi tentang kolaborasi dengan tim Piksel.

## Kasus penggunaan

Arsip citra multitemporal untuk wilayah Indonesia mendukung analisis di bidang berikut:

- **[Pangan dan pertanian](../usecases/pangan)** — pemantauan lahan pertanian, produktivitas, dan pola tanam.
- **[Tutupan lahan](../usecases/lahan)** — deteksi perubahan penggunaan dan tutupan lahan.
- **[Wilayah pesisir](../usecases/pesisir)** — analisis garis pantai, mangrove, dan zona pesisir.
- **[Lingkungan](../usecases/lingkungan)** — pemantauan kualitas lingkungan dan sumber daya alam.
- **[Kebencanaan](../usecases/bencana)** — pemetaan wilayah terdampak banjir, longsor, dan kebakaran hutan.

Data tersebut dapat diolah menjadi komposit tahunan GeoMAD, peta perubahan garis pantai, serta peta wilayah terdampak bencana.

## Data yang tersedia

Produk data Piksel dikelompokkan sebagai berikut:

- **[Data satelit dasar](../data_products/baseline_satellite/)** — produk per citra dan komposit temporal dari beberapa misi:
  - **[Reflektansi permukaan](../data_products/baseline_satellite/surface_reflectance/)** dari Landsat 5, 7, 8, dan 9 serta Sentinel-2.
  - **[Suhu permukaan](../data_products/baseline_satellite/surface_temperature/)** dari Landsat 5, 7, 8, dan 9.
  - **[Hamburan balik radar](../data_products/baseline_satellite/radar_backscatter/)** dari Sentinel-1.
  - **[Komposit tahunan GeoMAD](../data_products/baseline_satellite/s2_geomad_annual)** dari Sentinel-2.
- **[Data laut dan pesisir](../data_products/sea_ocean_coast/coastline)** — produk turunan seperti Ina Coastline untuk menganalisis perubahan garis pantai.

Spesifikasi setiap produk tersedia pada bagian [Data Products](../category/data-products/). Ketersediaan data menurut lokasi dan waktu dapat diperiksa melalui [Jelajah Data](../services/explorer).

## Struktur dokumentasi

Dokumentasi Piksel dibagi berdasarkan kebutuhan pembaca:

1. **Layanan** menjelaskan fitur platform dan cara menggunakannya.
2. **Kasus Penggunaan** berisi contoh analisis untuk beberapa bidang aplikasi.
3. **Data Products** memuat spesifikasi produk dan pengukuran yang tersedia.
4. **Lampiran** menyediakan glosarium istilah teknis.

## Mulai dari mana

- **Pertama kali menggunakan Piksel?** Periksa data yang tersedia melalui [Jelajah Data](../services/explorer).
- **Ingin mencoba analisis?** Ajukan akses ke [Piksel Sandbox](../services/sandbox), lalu ikuti panduan [Memulai Piksel Sandbox](../services/sandbox/sandbox-getting-started).
- **Sudah memiliki alur kerja GIS?** Hubungkan aplikasi melalui [Layanan Web](../services/web-services).
- **Membutuhkan bantuan atau ingin berkolaborasi?** Kunjungi [Dukungan dan Kolaborasi](../services/support).
