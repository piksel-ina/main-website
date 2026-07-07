---
sidebar_position: 3
---

# Klasifikasi Mangrove dengan Machine Learning

## Ringkasan

Modul ini bertujuan untuk memberikan contoh penggunaan data Sentinel-2 dalam delineasi area mangrove. Beberapa spektral indeks digunakan untuk cakupan area mangrove. Metode machine learning dengan menggunakan random forest digunakan untuk mengklasifikasikan mangrove dan tutupan lahan disekitarnya. Lokasi mangrove yang dipilih adalah di selatan Kota Denpasar, provinsi Bali.

## Tahapan

1. Memuat library
2. Memuat data
3. Persiapan data
4. Menghitung indeks spektral
5. Membuat training data
6. Melatih random forest classifier
7. Analisa fitur
8. Klasifikasi mangrove
9. Confusion matrix & validasi model
10. Menyimpan hasil

## Hasil

Menghasilkan peta distribusi mangrove beserta statistik luas tiap kelas, serta menyimpan seluruh keluaran analisis dalam folder khusus. Dengan demikian, workflow ini memberikan gambaran spasial dan kuantitatif yang siap digunakan untuk penelitian ekologi maupun perencanaan wilayah pesisir.

{/* image placeholder: mangrove.webp */}

## Input

Citra Sentinel-2

## Output

Klasifikasi mangrove

## Metode

Penggunaan indeks spektral dan machine learning (random forest)
