---
sidebar_position: 6
---

# Appendix

Bagian ini berisi rujukan pendukung untuk memahami istilah, singkatan, dan konsep teknis yang sering muncul di dokumentasi Piksel. Fokus utama saat ini adalah **glosarium** — daftar istilah dengan definisinya. Bagian lain seperti panduan sitasi, lisensi data, dan tabel referensi silang antar sensor akan ditambahkan seiring waktu.

## Glosarium

### Reflektansi, Suhu, dan Radiometri

**ARD** (Analysis Ready Data) — Data yang telah dikoreksi radiometrik, geometrik, dan atmosferik, sehingga siap dianalisis tanpa preprocessing tambahan. Semua produk baseline di Piksel adalah ARD.

**BOA** (Bottom-Of-Atmosphere) — Reflektansi permukaan Bumi setelah efek atmosfer dikoreksi. Istilah setara dengan Surface Reflectance untuk produk optik.

**Level-1 / L1** — Data mentah dengan koreksi geometris dasar. Contoh: Landsat Level-1 GRD, Sentinel-2 Level-1C.

**Level-2 / L2** — Data yang telah dikoreksi atmosferik. Semua produk Surface Reflectance, Surface Temperature, dan Sentinel-1 RTC di Piksel merupakan produk Level-2.

**Level-3 / L3** — Produk turunan atau komposit dari data Level-2. Contoh: Sentinel-2 GeoMAD adalah komposit tahunan Level-3.

**SR** (Surface Reflectance) — Reflektansi permukaan Bumi yang telah dikoreksi dari efek atmosfer. Menggambarkan sifat pantulan cahaya matahari oleh permukaan pada berbagai panjang gelombang.

**ST** (Surface Temperature) — Suhu radiatif permukaan tanah yang diturunkan dari saluran termal inframerah. Disimpan dalam satuan **Kelvin** pada produk Landsat Collection 2 Level-2.

**TOA** (Top-Of-Atmosphere) — Reflektansi yang diukur sensor sebelum koreksi atmosfer. Level-1 Landsat dan Level-1C Sentinel-2 adalah produk TOA.

### Algoritma Pemrosesan

**LEDAPS** (Landsat Ecosystem Disturbance Adaptive Processing System) — Algoritma milik NASA/USGS untuk menurunkan reflektansi permukaan dari citra Landsat 4, 5, dan 7. Mengoreksi hamburan dan penyerapan atmosfer.

**LaSRC** (Land Surface Reflectance Code) — Algoritma pengganti LEDAPS untuk Landsat 8 dan 9. Dikembangkan USGS dengan koreksi atmosfer yang lebih akurat untuk sensor OLI.

**Sen2Cor** — Prosesor resmi ESA untuk mengubah Sentinel-2 Level-1C (TOA) menjadi Level-2A (BOA), sekaligus menghasilkan band pendukung SCL, AOT, dan WVP.

### Radar dan SAR

**Backscatter (σ⁰)** — Intensitas gelombang mikro yang dipantulkan kembali ke sensor radar setelah mengenai permukaan. Dibaca sebagai "sigma-nought" dan disimpan dalam skala linear atau desibel (dB).

**C-band** — Rentang frekuensi gelombang mikro sekitar 4–8 GHz. Sentinel-1 SAR bekerja pada 5.405 GHz (panjang gelombang ~5.6 cm) yang mampu menembus awan dan bekerja siang-malam.

**GRD** (Ground Range Detected) — Produk Sentinel-1 Level-1 yang telah diproyeksikan ke geometri ground range. Menjadi input utama untuk pembuatan produk RTC.

**IW** (Interferometric Wide swath) — Mode akuisisi default Sentinel-1 atas daratan. Cakupan 250 km dengan resolusi ~20 m.

**Polarisasi (VV, VH, HH, HV)** — Orientasi gelombang radar saat dipancarkan dan diterima. Sentinel-1 mengakuisisi data dalam mode dual-polarisasi (biasanya VV+VH atas daratan) untuk membedakan tipe permukaan.

**RTC** (Radiometrically Terrain Corrected) — Produk SAR yang telah dikoreksi topografi dan radiometrik, sehingga nilai backscatter dapat dibandingkan antar scene, antar waktu, dan lintas kemiringan lereng.

**SAR** (Synthetic Aperture Radar) — Radar apertur sintetis. Sensor aktif yang memancarkan gelombang mikro dan mengukur pantulan kembali. Tidak bergantung pada cahaya matahari dan tidak terhalang awan.

### Sensor Satelit

**ETM+** (Enhanced Thematic Mapper Plus) — Sensor optik multispektral pada Landsat 7. Memiliki 8 band termasuk pankromatik 15 m dan termal 60 m (Band 6).

**MSI** (Multi-Spectral Instrument) — Sensor optik pada Sentinel-2. Mengakuisisi 13 band pada resolusi 10, 20, dan 60 m.

**OLI** (Operational Land Imager) — Sensor optik multispektral pada Landsat 8. Mencakup 9 band optik termasuk pankromatik 15 m dan dua band baru (coastal aerosol, cirrus).

**OLI-2** — Versi OLI pada Landsat 9 dengan resolusi radiometrik 14-bit (dibanding 12-bit pada OLI Landsat 8), memungkinkan deteksi variasi spektral yang lebih halus.

**TIRS** (Thermal Infrared Sensor) — Sensor termal Landsat 8. Menyediakan dua band termal (Band 10 dan Band 11) pada resolusi native 100 m, disampling ke 30 m.

**TIRS-2** — Sensor termal Landsat 9. Menggunakan baffling telescope untuk mengatasi stray light yang mempengaruhi TIRS Landsat 8.

**TM** (Thematic Mapper) — Sensor optik multispektral pada Landsat 4 dan 5. Memiliki 7 band pada resolusi 30 m (kecuali Band 6 termal pada 120 m native).

### Produk Komposit

**BCMAD** (Bray-Curtis MAD) — Deviasi Bray-Curtis dari geometric median. Salah satu band statistik pada produk GeoMAD.

**COUNT** — Band pada GeoMAD yang menyimpan jumlah observasi valid per piksel selama periode agregasi. Berguna untuk menilai kualitas komposit di suatu wilayah.

**EMAD** (Euclidean MAD) — Deviasi jarak Euclidean dari geometric median di seluruh band spektral. Salah satu band statistik GeoMAD.

**GeoMAD** (Geometric Median + Median Absolute Deviation) — Komposit temporal yang menggabungkan geometric median untuk nilai tipikal dan MAD untuk variabilitas. Piksel menyediakan komposit tahunan dari Sentinel-2.

**SMAD** (Spectral MAD) — Deviasi absolut median dalam ruang spektral. Salah satu band statistik GeoMAD untuk mengukur variabilitas warna piksel.

### Infrastruktur Data dan Standar

**COG** (Cloud-Optimized GeoTIFF) — Format raster GeoTIFF yang dioptimalkan untuk cloud storage. Memungkinkan pembacaan sebagian data (HTTP range requests) tanpa mengunduh seluruh file.

**CRS** (Coordinate Reference System) — Sistem referensi koordinat yang mendefinisikan bagaimana koordinat pada citra dipetakan ke lokasi di Bumi. Umumnya diidentifikasi dengan kode EPSG.

**EPSG** — Namespace kode untuk sistem referensi koordinat (contoh: EPSG:4326 untuk WGS84, EPSG:6933 untuk Equal Earth). Dikelola oleh IOGP.

**ODC** (Open Data Cube) — Framework open-source untuk mengorganisasi, memuat, dan menganalisis data geospasial multi-temporal. Digunakan Piksel Sandbox untuk katalog data.

**STAC** (SpatioTemporal Asset Catalog) — Standar terbuka untuk katalog aset geospasial. Memungkinkan pencarian dan pengambilan metadata citra secara terprogram menggunakan `pystac-client` atau tool lainnya.

### Layanan Web (OGC)

**OGC** (Open Geospatial Consortium) — Organisasi standar internasional untuk data dan layanan geospasial.

**WCS** (Web Coverage Service) — Layanan OGC untuk mengambil data raster secara utuh (nilai piksel), cocok untuk analisis lanjutan.

**WMS** (Web Map Service) — Layanan OGC untuk mengambil peta yang telah dirender sebagai gambar. Cocok untuk visualisasi.

**WMTS** (Web Map Tile Service) — Layanan OGC untuk mengambil peta dalam bentuk tile pre-rendered. Cocok untuk aplikasi web dengan performa tinggi.

### Alat dan Alur Pemrosesan

**Argo Workflow** — Engine workflow Kubernetes-native yang digunakan Piksel untuk pemrosesan data geospasial berskala besar secara paralel di infrastruktur cloud.

**JupyterLab** — Antarmuka web untuk notebook, kode, dan visualisasi Python. Merupakan antarmuka utama Piksel Sandbox untuk analisis interaktif.

**pystac-client** — Pustaka Python untuk mengakses STAC API. Digunakan luas untuk mencari dan mengambil metadata citra secara terprogram.

**uv** — Manajer paket Python cepat yang digunakan di Piksel Sandbox untuk menyiapkan lingkungan analisis.
