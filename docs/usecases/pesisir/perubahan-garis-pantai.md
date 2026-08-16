---
sidebar_position: 2
pagination_prev: null
title: Perubahan Garis Pantai
description: Analisis perubahan garis pantai Pulau Jawa menggunakan citra Landsat multitemporal dan pemodelan pasang surut pada platform Piksel.
---

| | |
| --- | --- |
| Satelit | Landsat 5, 7, 8, dan 9 |
| Periode | 1987–2025 |
| Wilayah analisis | Pulau Jawa |
| Sektor | Pesisir |

## Latar Belakang

Garis pantai Indonesia berubah akibat gelombang, sedimentasi, kenaikan muka air laut, reklamasi, dan pembangunan pesisir. Survei lapangan tidak dapat menjangkau seluruh garis pantai secara rutin, sehingga rangkaian citra satelit diperlukan untuk memetakan perubahan secara konsisten dari tahun ke tahun.

Analisis ini menggunakan Pulau Jawa sebagai wilayah kajian untuk menunjukkan bagaimana Ina Coastline dapat digunakan dalam pemantauan perubahan pesisir.

## Pendekatan

Arsip Landsat pada platform Piksel digunakan untuk mengekstrak posisi garis pantai tahunan sejak 1987. Citra disaring berdasarkan estimasi pasang surut dari gabungan model global dan INATIDES agar observasi yang digunakan berada di sekitar muka air laut rata-rata. Hasilnya adalah rangkaian garis pantai tahunan yang dapat dibandingkan dari waktu ke waktu.

Metode ini diadaptasi dari DEA Coastlines yang dikembangkan oleh Geoscience Australia dan diterapkan untuk kondisi Indonesia melalui produk [Ina Coastline](/docs/data_products/sea_ocean_coast/coastline).

## Hasil Analisis

Laju perubahan dihitung menggunakan regresi linier posisi garis pantai tahunan terhadap waktu. Setiap titik mewakili interval 30 meter. Nilai negatif menunjukkan pergerakan ke arah darat atau erosi, sedangkan nilai positif menunjukkan pergerakan ke arah laut atau akresi.

Ringkasan berikut berasal dari pemrosesan Pulau Jawa dan tidak mewakili hasil nasional:

- **63,9% titik menunjukkan akresi** dan **36% menunjukkan erosi**, dengan median laju perubahan +0,16 meter per tahun.
- **59,9% titik berkualitas baik** menunjukkan tren yang signifikan secara statistik (nilai p ≤ 0,01), terdiri atas 52.568 titik akresi dan 23.626 titik erosi yang signifikan.
- Sebanyak 90% titik memiliki laju antara **−2,4 dan +7,4 meter per tahun**. Nilai ekstrem mencapai −101 dan +97 meter per tahun pada lokasi tertentu dan memerlukan pemeriksaan lebih lanjut.
- Median *Shoreline Change Envelope* selama 38 tahun adalah **42,9 meter**.
- Dari 1.960 hotspot dengan radius agregasi 1 km, **59 titik mencatat akresi ≥ 3 meter per tahun** dan **7 titik mencatat erosi ≤ −3 meter per tahun**.

Hasil tersebut perlu dibaca bersama garis pantai tahunan dan citra pembanding. Laju perubahan menggambarkan tren, tetapi tidak menentukan penyebab perubahan pada setiap lokasi.

## Referensi dan Atribusi

Metode Ina Coastline diadaptasi dari DEA Coastlines. Implementasi untuk Indonesia menggunakan platform Piksel dan INATIDES sebagai bagian dari pemodelan pasang surut.

- Bishop-Taylor, R., Nanson, R., Sagar, S., & Lymburner, L. (2021). *Mapping Australia's dynamic coastline at mean sea level using three decades of Landsat imagery*. Remote Sensing of Environment, 267, 112734. [https://doi.org/10.1016/j.rse.2021.112734](https://doi.org/10.1016/j.rse.2021.112734)
- Kode sumber: [github.com/piksel-ina/indonesia-coastlines](https://github.com/piksel-ina/indonesia-coastlines)
- Repositori DEA Coastlines: [github.com/GeoscienceAustralia/dea-coastlines](https://github.com/GeoscienceAustralia/dea-coastlines)
