---
sidebar_position: 1
title: Ina Coastline
toc_max_heading_level: 3
description: Produk data turunan Piksel untuk memantau perubahan garis pantai Indonesia sejak 1987 menggunakan data Landsat dan pemodelan pasang surut.
---

## Tentang

Ina Coastline adalah produk geospasial berbasis platform Piksel yang memetakan posisi garis pantai Indonesia pada kondisi mendekati muka air laut rata-rata. Produk ini menggabungkan arsip citra Landsat dan pemodelan pasang surut untuk menghasilkan garis pantai tahunan serta laju perubahan pesisir sejak 1987.

Data ini dapat digunakan untuk mengamati erosi dan akresi pada pantai, beting pasir, muara sungai, dan dataran pasang surut. Rangkaian data tahunannya mendukung analisis perubahan pesisir pada skala lokal hingga nasional.

> **Catatan:** Istilah **garis pantai** dalam artikel ini mengacu pada posisi garis pantai dalam kondisi mendekati muka air laut rata-rata, kecuali dinyatakan lain. Ina Coastline dikembangkan untuk analisis dan pemantauan dinamika pesisir. Dataset ini bukan produk resmi atau formal yang ditetapkan oleh Badan Informasi Geospasial (BIG), sehingga tidak dapat digunakan sebagai rujukan atau acuan hukum.

## Spesifikasi Utama

| Properti | Nilai |
| --- | --- |
| Tipe data | Vektor |
| Cakupan wilayah | Indonesia |
| Cakupan waktu | 1987–2025 |
| Pembaruan data | Tahunan |
| Sumber citra | Landsat 5, 7, 8, dan 9 |
| Referensi elevasi | Muka air laut rata-rata |

Ina Coastline diturunkan dari data Reflektansi Permukaan Landsat yang dihimpun di platform Piksel. Rincian produk induk tersedia pada [dokumentasi Reflektansi Permukaan](/docs/category/surface-reflectance-satellite-data/).

## Aplikasi

- Memantau laju erosi dan pertumbuhan pantai di wilayah pesisir Indonesia.
- Menganalisis tren historis untuk mendukung pengelolaan pesisir pada skala lokal dan regional.
- Mengkaji respons garis pantai terhadap cuaca ekstrem, kenaikan muka air laut, dan pembangunan pesisir.
- Menyediakan rangkaian data historis untuk kajian geomorfologi dan dinamika pesisir.

## Lapisan Data

Ina Coastline terdiri atas kelompok data garis pantai tahunan, titik laju perubahan, dan hotspot perubahan pesisir.

### Garis Pantai Tahunan — `shorelines_annual`

Lapisan vektor ini merepresentasikan posisi median garis pantai untuk setiap tahun sejak 1987. Posisi garis pantai diperkirakan pada elevasi muka air laut rata-rata sebagai referensi 0 meter.

| Nama | Tipe | Unit | Deskripsi |
| --- | --- | --- | --- |
| `year` | Integer | Tahun | Tahun representasi setiap garis pantai. |
| `certainty` | String | — | Penanda kualitas data. Nilainya meliputi `good`, `unstable data`, `insufficient data`, dan `aerosol issues`. |
| `tide_datum` | String | — | Datum pasang surut yang digunakan sebagai acuan elevasi garis pantai. |

### Titik Laju Perubahan — `rates_of_change`

Lapisan titik ini menyajikan laju perubahan pada interval 30 meter di sepanjang garis pantai non-berbatu. Laju dihitung melalui regresi linier posisi garis pantai tahunan terhadap waktu. Nilai negatif menunjukkan erosi, sedangkan nilai positif menunjukkan akresi.

| Nama | Tipe | Unit | Deskripsi |
| --- | --- | --- | --- |
| `uid` | String | — | Pengenal unik berbasis geohash untuk setiap titik. |
| `rate_time` | Float | Meter per tahun | Laju perubahan tahunan yang dihitung tanpa observasi pencilan. |
| `sig_time` | Float | Nilai p | Signifikansi statistik hubungan antara posisi garis pantai dan waktu. |
| `se_time` | Float | Meter per tahun | Galat standar untuk estimasi laju perubahan. |
| `outl_time` | String | — | Tahun yang terdeteksi sebagai pencilan dan dikeluarkan dari perhitungan. |
| `dist_YYYY` | Float | Meter | Jarak garis pantai pada tahun tertentu terhadap garis pantai acuan terbaru. |
| `angle_mean`, `angle_std` | Integer | Derajat | Rerata dan deviasi standar sudut dari titik acuan ke garis pantai tahunan. |
| `valid_obs` | Integer | — | Jumlah observasi tahunan yang valid. |
| `valid_span` | Integer | Tahun | Rentang antara observasi valid pertama dan terakhir. |
| `sce` | Float | Meter | *Shoreline Change Envelope*: jarak maksimum antara dua posisi garis pantai tahunan. |
| `nsm` | Float | Meter | *Net Shoreline Movement*: jarak bersih antara posisi tertua dan terbaru. |
| `max_year` | Integer | Tahun | Tahun ketika garis pantai berada pada posisi paling ke arah laut. |
| `min_year` | Integer | Tahun | Tahun ketika garis pantai berada pada posisi paling ke arah darat. |
| `certainty` | String | — | Penanda kualitas untuk setiap titik laju perubahan. |

### Hotspot Perubahan Pesisir — `hotspots_zoom`

Kelompok lapisan titik ini merangkum perubahan pesisir pada radius agregasi 1 km, 5 km, dan 10 km. Ringkasan tersebut membantu mengidentifikasi segmen pesisir yang mengalami perubahan pada skala regional dan nasional.

| Nama | Tipe | Unit | Deskripsi |
| --- | --- | --- | --- |
| `radius_m` | Integer | Meter | Radius agregasi yang digunakan untuk merangkum perubahan pesisir. |
| `n` | Integer | — | Jumlah titik `rates_of_change` yang valid dalam perhitungan. |

## Tahapan Pemrosesan

1. **Memuat data.** Memuat arsip Landsat 5, 7, 8, dan 9 untuk wilayah pemrosesan. Data Tier 1 diprioritaskan, sedangkan Tier 2 digunakan apabila observasi Tier 1 tidak mencukupi.
2. **Menghitung indeks air.** Menggunakan indeks air yang dapat dikonfigurasi, termasuk MNDWI, NDWI, Combined Water Index, dan MNDWI-NIR, untuk memisahkan air dari daratan.
3. **Memodelkan pasang surut.** Memperkirakan ketinggian pasang surut menggunakan gabungan model global dan INATIDES sebagai model regional untuk perairan Indonesia.
4. **Menginterpolasi pasang surut.** Menginterpolasi estimasi pasang surut ke resolusi 30 meter agar setiap piksel memiliki nilai pada waktu akuisisi citra.
5. **Menyaring observasi.** Mempertahankan citra yang direkam pada rentang 50% pasang surut di sekitar muka air laut rata-rata.
6. **Menyusun komposit tahunan.** Menggabungkan observasi menjadi komposit median tahunan. Piksel dengan kurang dari lima observasi bersih diisi menggunakan komposit median tiga tahun.
7. **Membatasi zona pesisir.** Menggunakan masker pesisir untuk mengecualikan area non-pesisir dan struktur buatan dari ekstraksi.
8. **Mengekstrak garis pantai.** Menentukan posisi garis air dengan metode *sub-pixel waterline extraction* (Bishop-Taylor et al., 2019).
9. **Menghitung perubahan.** Menggunakan regresi linier untuk menghitung laju perubahan, signifikansi statistik, galat standar, *Shoreline Change Envelope*, dan *Net Shoreline Movement*.

Kode sumber alur pemrosesan tersedia di [repositori Indonesia Coastlines](https://github.com/piksel-ina/indonesia-coastlines).

## Keterbatasan dan Kualitas Data

### Garis Pantai Tahunan

- Garis pantai tahunan menunjukkan posisi median pada muka air laut rata-rata. Data ini ditujukan untuk analisis tren jangka panjang, bukan fluktuasi harian, musiman, atau perubahan singkat akibat satu kejadian ekstrem.
- Ketelitian posisi dapat menurun pada dataran pasang surut yang landai atau wilayah dengan rentang pasang surut besar. Galat kecil pada model pasang surut dapat menghasilkan pergeseran horizontal yang berarti.
- Pantulan dari bangunan terang di kawasan pesisir dapat keliru diklasifikasikan sebagai air.
- Batas air pada tambak pesisir dapat terbaca sebagai garis pantai.
- Data 1991 dan 1992 dapat dipengaruhi aerosol atmosfer akibat letusan Gunung Pinatubo.

Penanda `certainty` pada `shorelines_annual` mencakup:

- `aerosol issues` — posisi garis pantai berpotensi dipengaruhi aerosol atmosfer.
- `insufficient data` — observasi bebas awan tidak mencukupi.
- `unstable data` — posisi menunjukkan fluktuasi yang tinggi.

### Titik Laju Perubahan

- Laju perubahan menggambarkan tren spasial, tetapi tidak menjelaskan penyebabnya. Reklamasi, pelabuhan, saluran, dan perubahan alami dapat menghasilkan pola yang serupa.
- Hasil dapat kurang andal pada lingkungan dengan perubahan cepat dan nonlinier, termasuk kawasan endapan muara sungai.
- Nilai ekstrem perlu diperiksa bersama garis pantai tahunan dan citra satelit pembanding.

Penanda `certainty` pada `rates_of_change` mencakup:

- `insufficient observations` — kurang dari 25 tahun observasi berkualitas baik.
- `likely rocky coastline` — lokasi kemungkinan berupa tebing atau pantai berbatu.
- `extreme value (> 50 m)` — laju perubahan melebihi 50 meter per tahun.
- `high angular variability` — arah pergerakan garis pantai sangat bervariasi.
- `baseline outlier` — garis pantai acuan terbaru terdeteksi sebagai pencilan.

Lapisan `hotspots_zoom` juga menandai lokasi yang tidak memiliki cukup titik laju perubahan untuk menghasilkan ringkasan regional yang andal.

## Referensi

- Bishop-Taylor, R., Nanson, R., Sagar, S., & Lymburner, L. (2021). *Mapping Australia's dynamic coastline at mean sea level using three decades of Landsat imagery*. Remote Sensing of Environment, 267, 112734. https://doi.org/10.1016/j.rse.2021.112734
- Bishop-Taylor, R., Sagar, S., Lymburner, L., Alam, I., & Sixsmith, J. (2019). *Sub-pixel waterline extraction: Characterising accuracy and sensitivity to indices and spectra*. Remote Sensing, 11(24), 2984. https://doi.org/10.3390/rs11242984
- Nanson, R., Bishop-Taylor, R., Sagar, S., & Lymburner, L. (2022). *Geomorphic insights into Australia's coastal change using a national dataset derived from the multi-decadal Landsat archive*. Estuarine, Coastal and Shelf Science, 265, 107712. https://doi.org/10.1016/j.ecss.2021.107712
- Xu, H. (2006). *Modification of normalised difference water index (NDWI) to enhance open water features in remotely sensed imagery*. International Journal of Remote Sensing, 27(14), 3025–3033.
