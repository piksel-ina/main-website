---
sidebar_position: 3
pagination_next: null
---

# Zona Bahaya Banjir

## Ringkasan

Data Digital Elevation Model (DEM) dapat dimanfaatkan untuk mengidentifikasi area yang berpotensi banjir melalui klasifikasi wilayah berdasarkan elevasinya. DEM merupakan representasi digital permukaan bumi dalam bentuk raster yang menyimpan nilai ketinggian pada setiap piksel dan banyak digunakan untuk analisis topografi, hidrologi, serta simulasi aliran air. Contoh ini menggunakan data Digital Surface Model (DSM) global beresolusi 30 meter yang merepresentasikan permukaan bumi beserta objek di atasnya, dengan studi kasus di Kabupaten Bangka Barat, Provinsi Kepulauan Bangka Belitung.

## Tahapan

Tahapan dalam identifikasi area berpotensi banjir adalah sebagai berikut:

1. Memuat library
2. Menentukan wilayah
3. Memuat data Sentinel-2
4. Memuat DEM
5. Menampilkan DEM
6. Peta kemiringan lereng
7. Peta zonasi bahaya banjir

## Hasil

Data DEM dapat digunakan untuk penyusunan zonasi bahaya banjir secara sederhana. Untuk hasil yang lebih akurat, pemodelan spasial dengan menggunakan data curah hujan dan tutupan lahan perlu dilakukan.

![Peta zonasi bahaya banjir Kabupaten Bangka Barat](/img/usecases/banjir.webp)
