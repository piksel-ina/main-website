---
sidebar_position: 2
title: Menambahkan Data ke Peta
description: Menambahkan layer dari katalog Piksel atau data Anda sendiri.
---

import Figure from '@site/src/components/Docs/Figure';

# Menambahkan Data ke Peta

Gunakan katalog untuk menambahkan data Piksel, atau gunakan **Unggah data** untuk memasukkan data lokal dan sumber web yang didukung.

## Tambahkan layer dari katalog

1. Klik **Jelajahi data** pada Workbench.
2. Pilih kategori yang sesuai. Katalog mencakup **Data Satelit Optik**, **Coastal Product**, dan **Disaster**.

<Figure
  src="/img/maps/maps-add-01-catalog-groups.webp"
  alt="Kategori katalog Piksel Map"
  size={6}
/>

3. Untuk membandingkan mosaik Sentinel-2, buka **Data Satelit Optik** → **Produk Turunan Sentinel-2** → **Mosaik Global Sentinel-2**.
4. Pilih layer yang ingin ditampilkan, misalnya **Mosaik Sentinel-2 2020 (Pratinjau)**.

<Figure
  src="/img/maps/maps-add-02-catalog-layers.webp"
  alt="Pilihan mosaik Sentinel-2"
  size={6}
/>

5. Pada panel pratinjau, klik **Tambahkan ke peta**. Tutup katalog dengan **Pergi ke peta**.
6. Layer akan muncul sebagai kartu di Workbench. Gunakan **Zoom Ideal** untuk berpindah ke cakupan layer.

<Figure
  src="/img/maps/maps-add-03-layer-added.webp"
  alt="Layer yang sudah ditambahkan"
  size={6}
/>

## Unggah data sendiri

1. Klik **Unggah data** pada Workbench.
2. Pilih file dari komputer atau masukkan URL sumber data yang didukung.
3. Ikuti pilihan yang ditampilkan Piksel Map untuk menyelesaikan impor.
4. Data yang berhasil ditambahkan muncul di Workbench dan dapat diatur seperti layer katalog lainnya.

:::tip Periksa cakupan dan waktu
Jika layer tidak tampak, gunakan **Zoom Ideal**, periksa waktu layer, atau pilih lokasi yang berada di dalam cakupan datanya.
:::
