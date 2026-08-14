---
sidebar_position: 2
title: Mencari Data
description: Panduan langkah demi langkah menggunakan Data Explorer
---

# Mencari Data

Panduan langkah demi langkah untuk menemukan data satelit yang tersedia menggunakan Data Explorer.

## Buka Piksel Explorer {#open-piksel-explorer}

Buka https://explorer.piksel.big.go.id/products. Hal ini akan menampilkan antarmuka pengguna Data Explorer.

![explorer-homepage](/img/explorer/explorer-home1.webp)

Piksel Explorer memiliki empat bagian utama:

1. **Pilihan produk**: Bagian ini menampilkan produk yang sedang dipilih. Klik nama produk yang dipilih untuk membuka menu produk.

2. **Periode waktu**: Bagian ini menampilkan periode waktu yang aktif untuk memfilter data produk yang dipilih. Klik periode waktu yang dipilih pada bilah menu abu-abu untuk membuka menu pemilihan waktu. Diagram batang biru menunjukkan ketersediaan data dari waktu ke waktu untuk produk yang Anda pilih.

3. **Tampilan peta**: Ini menampilkan lokasi ketersediaan data, untuk periode waktu dan produk yang dipilih. Ubin berwarna biru menunjukkan adanya data.

4. **Informasi produk**: Bilah samping menampilkan informasi lebih lanjut tentang data untuk periode waktu dan produk yang dipilih. Misalnya, ini mencakup jumlah dataset yang dipilih, luas total dataset yang dipilih, dan sistem referensi koordinatnya.

## Pilih Produk {#pilih-produk}

1. Klik bilah **pemilihan produk** untuk membuka menu, lalu pilih **ls9_c2l2_sr** (Landsat 9 Surface Reflectance).

![explorer-l9](/img/explorer/explorer-home2.webp)

2. Klik bilah **waktu** untuk membuka menu. Pilih **2022**. Tindakan ini akan menampilkan semua kumpulan data Landsat 9 untuk tahun 2022.

![explorer-2022](/img/explorer/explorer-home3.webp)

3. Klik bilah **semua bulan** untuk membuka menu. Pilih **Agustus**. Tindakan ini akan menampilkan semua kumpulan data Landsat 9 untuk bulan Agustus 2022.

![explorer-aug](/img/explorer/explorer-home4.webp)

4. Klik bilah **semua hari** untuk membuka menu. Pilih **11**. Tindakan ini akan menampilkan semua kumpulan data Landsat 9 untuk tanggal 11 Agustus 2022.

![explorer-11th](/img/explorer/explorer-home5.webp)

5. **Tampilan peta** kini akan menampilkan semua dataset Landsat 9 untuk tanggal 11 Agustus 2022 dalam bentuk kotak berwarna biru. Gunakan tombol **+** pada peta untuk memperbesar tampilan, lalu klik dan seret untuk menggeser tampilan peta.

![explorer-zoom](/img/explorer/explorer-home6.webp)

## Perbesar pada Wilayah Tertentu {#zoom-ntt}

Gunakan tombol **+** pada peta untuk memperbesar wilayah, dalam hal ini kita akan melihat wilayah Nusa Tenggara Timur

![explorer-ntt](/img/explorer/explorer-home7.webp)

Pada wilayah Nusa Tenggara Timur, terdapat satu kumpulan data per tanggal 11 Agustus 2022. Klik kotak biru tersebut pada peta untuk membuka pratinjau data dan seluruh metadata terkait di bawah tampilan peta.

![explorer-ntt2](/img/explorer/explorer-home8.webp)

## Mengunduh Data

Beberapa dataset, terutama produk yang dihasilkan Piksel, menyediakan berkas yang dapat diunduh melalui halaman detail dataset. Pada bagian **Location**, pilih nama berkas untuk membuka atau mengunduh aset yang tersedia.

![Daftar berkas yang dapat diunduh pada halaman detail dataset Data Explorer](/img/explorer/explorer-dataset-download.webp)

:::tip
Untuk kueri terprogram atas data yang sama, gunakan [STAC API](./stac-api.md) atau lihat [Format Ekspor Data](./data-export-formats.md) untuk pilihan format lainnya.
:::
