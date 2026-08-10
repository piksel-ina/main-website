---
sidebar_position: 3
sidebar_label: GeoMAD
pagination_next: null
---
import Figure from '@site/src/components/Docs/Figure';

# Pengolahan GeoMAD

GeoMAD adalah produk geospasial yang dibentuk dari *geomedian* dan *median absolute deviation* (MAD) pada rangkaian citra satelit dalam satu periode. Dengan menggunakan banyak pengamatan, GeoMAD mengurangi pengaruh awan, bayangan awan, dan variasi atmosfer sehingga memberi gambaran permukaan bumi yang lebih konsisten untuk analisis multitemporal.

Piksel menghasilkan GeoMAD tahunan dari data Sentinel-2 untuk seluruh Indonesia. Wilayah pengolahan dibagi menjadi beberapa tile atau grid, lalu diproses secara paralel dengan [Argo Workflows](../argo). Hasilnya kemudian disimpan di *cloud storage* dan diintegrasikan langsung ke layanan Piksel agar dapat diakses publik.

Argo Workflows mengatur pelaksanaan pengolahan tersebut. Setelah grid pemrosesan disusun, Argo membagikan pekerjaan ke setiap tile dan menjalankan *task* pengolahan menggunakan *container image* yang sama.

Banyak tile dapat diproses pada waktu yang sama. Jumlah *task* paralel ditetapkan berdasarkan sumber daya yang tersedia; ketika satu *task* selesai, Argo menjadwalkan tile berikutnya secara otomatis. Dengan pengaturan ini, pengolahan untuk ribuan tile dapat berjalan sebagai satu workflow tanpa perlu menjalankan setiap tile secara manual.

<Figure
  src="/img/services/geospatial-data-processing/2-cloud-geomad.webp"
  alt="Pengolahan GeoMAD"
  caption="Pengolahan GeoMAD"
  captionAlign="center"
  size={6}
/>

## Tahapan Pengolahan GeoMAD

### 1. Pembagian wilayah menjadi tile atau grid

Wilayah Indonesia dibagi menjadi tile atau grid dengan ukuran tertentu. Pembagian ini memberi satuan pengolahan yang konsisten dan memungkinkan pekerjaan pada banyak area dijalankan secara paralel.

<Figure
  src="/img/services/geospatial-data-processing/3-tile.webp"
  alt="Pembagian wilayah Indonesia ke dalam tile atau grid"
  caption="Pembagian wilayah Indonesia ke dalam tile atau grid"
  captionAlign="center"
  size={6}
/>

### 2. Penyiapan dataset Sentinel-2

Untuk setiap periode, citra Sentinel-2 dikumpulkan menjadi satu dataset. Citra diseleksi berdasarkan kualitasnya, termasuk persentase tutupan awan, agar pengolahan menggunakan pengamatan dengan kualitas radiometrik dan visual yang memadai.

<Figure
  src="/img/services/geospatial-data-processing/4-dataset.webp"
  alt="Dataset Sentinel-2 untuk pengolahan GeoMAD"
  caption="Dataset Sentinel-2 untuk pengolahan GeoMAD"
  captionAlign="center"
  size={6}
/>

### 3. Masking awan

Masking awan mengidentifikasi piksel yang terpengaruh oleh awan, bayangan awan, dan gangguan atmosfer lainnya. Piksel tersebut tidak digunakan pada tahap berikutnya, sehingga perhitungan GeoMAD menggunakan piksel yang valid.

<Figure
  src="/img/services/geospatial-data-processing/5-masking.webp"
  alt="Masking awan pada dataset Sentinel-2"
  caption="Masking awan pada dataset Sentinel-2"
  captionAlign="center"
  size={6}
/>

### 4. Perhitungan GeoMAD

Pada setiap tile, GeoMAD dihitung dari dataset yang telah melalui masking awan. Hasil perhitungannya berupa *geomedian* dan *median absolute deviation* (MAD) dari rangkaian pengamatan pada periode tersebut, kemudian disimpan di *public storage* dan diindeks ke Data Cube.

---
