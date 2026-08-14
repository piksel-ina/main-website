---
sidebar_position: 1
---

# Overview

Piksel adalah platform observasi bumi digital yang dikembangkan oleh **Badan Informasi Geospasial (BIG)** untuk menyediakan akses yang mudah terhadap data citra satelit dan informasi geospasial Indonesia. Piksel menghimpun arsip data penginderaan jauh dari berbagai misi satelit — termasuk **Sentinel-1**, **Sentinel-2**, dan **Landsat 5/7/8/9** — sehingga pengguna dapat menjelajahi, mengakses, dan memanfaatkan data untuk berbagai kebutuhan analisis wilayah.

Piksel tidak hanya menyediakan data, tetapi juga fitur untuk melakukan analisis dan menghasilkan informasi yang dapat digunakan untuk mendukung pengambilan keputusan. Platform ini dirancang untuk pemanfaatan observasi bumi secara terbuka, fleksibel, dan efisien — tanpa memerlukan infrastruktur pengolahan data yang besar di sisi pengguna.

## Layanan Piksel

Piksel menyediakan enam layanan utama yang saling melengkapi:

- **[Jelajah Data](/docs/services/explorer)** — Menjelajahi arsip metadata untuk memeriksa ketersediaan citra satelit berdasarkan lokasi dan waktu.
- **[Peta Interaktif](/docs/services/maps)** — Melihat produk citra dan dataset dalam tampilan peta interaktif.
- **[Piksel Sandbox](/docs/services/sandbox)** — Lingkungan JupyterLab dan Open Data Cube untuk eksplorasi data serta pengembangan alur analisis berbasis Python.
- **[Pemrosesan Data Geospasial](/docs/services/geospatial-data-processing)** — Infrastruktur komputasi awan dan Argo Workflow untuk pemrosesan data geospasial berskala besar.
- **[Layanan Web](/docs/services/web-services)** — Endpoint standar OGC (WMS, WMTS, WCS) untuk integrasi dengan QGIS, ArcGIS, dan aplikasi GIS lainnya.
- **[Dukungan dan Kolaborasi](/docs/services/support)** — Pelatihan, pusat bantuan, dan peluang kolaborasi strategis dengan tim Piksel.

## Contoh Pemanfaatan

Cakupan wilayah Indonesia dan arsip citra multitemporal memungkinkan berbagai analisis untuk berbagai bidang:

- **[Pangan dan Pertanian](/docs/usecases/pangan)** — pemantauan lahan pertanian, produktivitas, dan pola tanam
- **[Tutupan Lahan](/docs/usecases/lahan)** — deteksi perubahan penggunaan dan tutupan lahan
- **Kehutanan** — pemantauan deforestasi dan kondisi hutan
- **[Wilayah Pesisir](/docs/usecases/pesisir)** — analisis garis pantai, mangrove, dan zona pesisir
- **[Lingkungan](/docs/usecases/lingkungan)** — pemantauan kualitas lingkungan dan sumber daya alam
- **[Kebencanaan](/docs/usecases/bencana)** — pemetaan area terdampak banjir, longsor, dan kebakaran hutan

Data satelit yang tersedia dapat diolah menjadi berbagai produk informasi, seperti citra komposit tahunan bebas awan (GeoMAD), peta perubahan garis pantai, hingga peta area terdampak bencana.

## Data yang Tersedia

Piksel mengorganisasi data pada dua kategori utama:

- **Data Satelit Baseline** — arsip citra Level-2 dan Level-3 untuk berbagai misi:
  - **Reflektansi Permukaan** dari Landsat 5/7/8/9 dan Sentinel-2
  - **Suhu Permukaan** dari Landsat 5/7/8/9
  - **Radar Backscatter** dari Sentinel-1 (kapabilitas segala cuaca, menembus tutupan awan)
  - **Komposit Tahunan** GeoMAD dari Sentinel-2
- **Data Pesisir dan Kelautan** — produk turunan untuk analisis wilayah laut dan pesisir

Referensi teknis lengkap untuk setiap produk data tersedia pada bagian **Data Products** di sidebar.

## Struktur Dokumentasi

Dokumentasi ini disusun untuk melayani berbagai kebutuhan, dari pengguna baru hingga yang membutuhkan referensi teknis mendalam:

1. **Layanan** — Cara menggunakan setiap fitur platform, dari eksplorasi data hingga analisis lanjutan.
2. **Contoh Pemanfaatan** — Studi kasus dan alur kerja nyata untuk berbagai bidang aplikasi.
3. **Data Products** — Referensi teknis lengkap untuk setiap produk data yang tersedia.
4. **Appendix dan Cheatsheet** — Referensi cepat, glosarium, dan informasi pendukung lainnya.

Setiap bagian dapat diakses melalui sidebar navigasi di sebelah kiri.

## Mulai dari Mana

- **Baru pertama kali menggunakan Piksel?** Mulai dengan mengeksplorasi data yang tersedia melalui [Jelajah Data](/docs/services/explorer).
- **Ingin mencoba analisis?** Ajukan akses ke [Piksel Sandbox](/docs/services/sandbox) dan mulai dari notebook tutorial.
- **Sudah punya alur kerja GIS?** Hubungkan aplikasi Anda melalui [Layanan Web](/docs/services/web-services).
- **Butuh bantuan atau ingin berkolaborasi?** Kunjungi [Dukungan dan Kolaborasi](/docs/services/support).
