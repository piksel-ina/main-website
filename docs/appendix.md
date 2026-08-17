---
sidebar_position: 6
---

# Lampiran

Glosarium ini menjelaskan istilah, singkatan, dan konsep teknis yang digunakan dalam dokumentasi Piksel.

## Glosarium

### Reflektansi, suhu, dan radiometri

**ARD** (Analysis Ready Data) — Data yang telah diproses dan disusun dengan standar yang konsisten agar dapat langsung dimuat dan dibandingkan. Jenis koreksinya bergantung pada sensor: produk optik memerlukan koreksi radiometrik, geometrik, dan atmosferik, sedangkan produk SAR memerlukan koreksi radiometrik dan medan. Produk data satelit dasar Piksel disediakan sebagai ARD.

**BOA** (Bottom-Of-Atmosphere) — Reflektansi pada permukaan Bumi setelah pengaruh atmosfer dikoreksi. Pada produk optik, istilah ini digunakan untuk reflektansi permukaan.

**Level-1 / L1** — Produk yang diturunkan dari data sensor dengan koreksi radiometrik dan geometrik dasar, tetapi belum menjalani pemrosesan geofisik tingkat lanjut. Contohnya adalah Sentinel-2 Level-1C dan Sentinel-1 Level-1 GRD.

**Level-2 / L2** — Produk Level-1 yang telah menjalani pemrosesan sesuai jenis datanya. Contohnya adalah koreksi atmosferik untuk reflektansi permukaan dan estimasi suhu permukaan pada Landsat Collection 2 Level-2.

**Level-3 / L3** — Produk turunan atau komposit yang menggabungkan satu atau beberapa observasi Level-2. GeoMAD Sentinel-2 merupakan komposit temporal tahunan.

**SR** (Surface Reflectance) — Reflektansi permukaan Bumi setelah pengaruh atmosfer dikoreksi. Nilainya menggambarkan pantulan cahaya matahari oleh permukaan pada panjang gelombang yang berbeda.

**ST** (Surface Temperature) — Suhu radiatif permukaan yang diturunkan dari band inframerah termal. Produk Landsat Collection 2 Level-2 menyatakannya dalam kelvin.

**TOA** (Top-Of-Atmosphere) — Reflektansi pada sensor sebelum pengaruh atmosfer dikoreksi. Sentinel-2 Level-1C menyediakan reflektansi TOA, sedangkan data Landsat Level-1 dapat dikonversi menjadi reflektansi TOA.

### Algoritma pemrosesan

**LEDAPS** (Landsat Ecosystem Disturbance Adaptive Processing System) — Algoritma NASA dan USGS untuk menghasilkan reflektansi permukaan Landsat 4, 5, dan 7 melalui koreksi hamburan serta penyerapan atmosfer.

**LaSRC** (Land Surface Reflectance Code) — Algoritma USGS untuk menghasilkan reflektansi permukaan dari sensor OLI pada Landsat 8 dan 9.

**Sen2Cor** — Prosesor ESA yang mengubah Sentinel-2 Level-1C (TOA) menjadi Level-2A (BOA). Prosesor ini juga menghasilkan Scene Classification Layer (SCL), Aerosol Optical Thickness (AOT), dan Water Vapour (WVP).

### Radar dan SAR

**Hamburan balik (σ⁰)** — Ukuran energi gelombang mikro yang dipantulkan permukaan kembali ke sensor radar. Nilai sigma-nought ini dapat dinyatakan pada skala linear atau desibel (dB).

**C-band** — Rentang frekuensi gelombang mikro sekitar 4–8 GHz. SAR Sentinel-1 bekerja pada 5,405 GHz, setara dengan panjang gelombang sekitar 5,6 cm. Sinyal ini dapat menembus awan, sedangkan sensor SAR dapat beroperasi pada siang maupun malam hari.

**GRD** (Ground Range Detected) — Produk Sentinel-1 Level-1 yang telah diproyeksikan ke geometri ground range. Produk ini menjadi masukan untuk menghasilkan RTC.

**IW** (Interferometric Wide Swath) — Mode akuisisi utama Sentinel-1 di atas daratan. Mode ini memiliki lebar sapuan sekitar 250 km dan menghasilkan produk beresolusi sekitar 20 m.

**Polarisasi (VV, VH, HH, HV)** — Orientasi gelombang radar saat dipancarkan dan diterima. Sentinel-1 umumnya menggunakan polarisasi ganda, seperti VV+VH di atas daratan, untuk merekam respons permukaan yang berbeda.

**RTC** (Radiometrically Terrain Corrected) — Produk SAR yang telah dikoreksi secara radiometrik dan terhadap pengaruh topografi. Koreksi ini membuat nilai hamburan balik lebih konsisten untuk dibandingkan antarcitra, antarwaktu, dan pada medan yang berbeda.

**SAR** (Synthetic Aperture Radar) — Sensor radar aktif yang memancarkan gelombang mikro dan mengukur sinyal pantulannya. SAR tidak bergantung pada cahaya matahari dan dapat mengamati permukaan melalui tutupan awan.

### Sensor satelit

**ETM+** (Enhanced Thematic Mapper Plus) — Sensor multispektral pada Landsat 7. Sensor ini memiliki delapan band, termasuk band pankromatik 15 m dan band termal 60 m.

**MSI** (Multi-Spectral Instrument) — Sensor optik pada Sentinel-2 yang merekam 13 band dengan resolusi spasial 10, 20, dan 60 m.

**OLI** (Operational Land Imager) — Sensor optik multispektral pada Landsat 8. OLI memiliki sembilan band, termasuk band pankromatik 15 m, coastal aerosol, dan cirrus.

**OLI-2** — Sensor OLI pada Landsat 9. Resolusi radiometriknya 14 bit, dibandingkan dengan 12 bit pada OLI Landsat 8, sehingga dapat membedakan variasi spektral yang lebih halus.

**TIRS** (Thermal Infrared Sensor) — Sensor termal Landsat 8 dengan dua band termal pada resolusi asal 100 m. Produk Landsat meresampel band tersebut menjadi 30 m.

**TIRS-2** — Sensor termal Landsat 9. Desain optiknya mengurangi pengaruh cahaya liar (*stray light*) yang ditemukan pada TIRS Landsat 8.

**TM** (Thematic Mapper) — Sensor multispektral pada Landsat 4 dan 5. TM memiliki tujuh band pada resolusi 30 m, kecuali band termal dengan resolusi asal 120 m.

### Produk komposit

**GeoMAD** (Geometric Median and Median Absolute Deviations) — Komposit temporal yang menggunakan median geometrik untuk mewakili kondisi tipikal dan beberapa ukuran MAD untuk menunjukkan variasi. Piksel menyediakan GeoMAD tahunan dari Sentinel-2.

**BCMAD** (Bray-Curtis Median Absolute Deviation) — Ukuran variasi berdasarkan ketakmiripan Bray-Curtis terhadap median geometrik.

**COUNT** — Jumlah observasi valid yang digunakan untuk menghitung komposit pada setiap piksel.

**EMAD** (Euclidean Median Absolute Deviation) — Ukuran variasi berdasarkan jarak Euclidean terhadap median geometrik.

**SMAD** (Spectral Median Absolute Deviation) — Ukuran variasi berdasarkan sudut spektral terhadap median geometrik.

### Infrastruktur data dan standar

**COG** (Cloud-Optimized GeoTIFF) — GeoTIFF yang disusun agar bagian tertentu dari raster dapat dibaca melalui permintaan rentang HTTP tanpa mengunduh seluruh berkas.

**CRS** (Coordinate Reference System) — Sistem referensi yang menentukan cara koordinat pada data geospasial dipetakan ke lokasi di Bumi. CRS umumnya dikenali melalui kode EPSG.

**EPSG** — Daftar pengenal untuk sistem referensi koordinat yang dikelola oleh IOGP. Salah satu contohnya adalah EPSG:4326 untuk WGS 84.

**ODC** (Open Data Cube) — Kerangka kerja sumber terbuka untuk mengatur, memuat, dan menganalisis data geospasial multitemporal. Piksel Sandbox menggunakannya untuk mengakses katalog data.

**STAC** (SpatioTemporal Asset Catalog) — Standar terbuka untuk membuat katalog aset geospasial. Katalog STAC dapat ditelusuri secara terprogram dengan pustaka seperti `pystac-client`.

### Layanan web OGC

**OGC** (Open Geospatial Consortium) — Organisasi internasional yang mengembangkan standar terbuka untuk data dan layanan geospasial.

**WCS** (Web Coverage Service) — Layanan OGC untuk mengambil nilai piksel dari data raster. Permintaan dapat dibatasi menurut wilayah, resolusi, atau band untuk analisis lebih lanjut.

**WMS** (Web Map Service) — Layanan OGC untuk memperoleh peta yang telah dirender sebagai gambar.

**WMTS** (Web Map Tile Service) — Layanan OGC untuk memperoleh peta sebagai ubin gambar yang telah dirender, sehingga sesuai untuk penayangan peta web.

### Alat dan alur pemrosesan

**Argo Workflows** — Mesin alur kerja berbasis Kubernetes yang digunakan Piksel untuk menjalankan pemrosesan geospasial paralel pada infrastruktur komputasi awan.

**JupyterLab** — Antarmuka berbasis web untuk bekerja dengan notebook, kode, dan visualisasi Python. Piksel Sandbox menggunakannya sebagai lingkungan analisis interaktif.

**pystac-client** — Pustaka Python untuk menelusuri STAC API dan mengambil metadata aset geospasial.

**uv** — Pengelola paket dan lingkungan Python yang digunakan di Piksel Sandbox untuk menyiapkan lingkungan analisis.
