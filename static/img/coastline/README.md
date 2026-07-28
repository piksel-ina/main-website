# Aset Gambar — Coastline

Folder ini menyimpan gambar yang dipakai di halaman Coastline.

## File yang diharapkan

| Nama file              | Tujuan di halaman                                              | Status      |
| ---------------------- | -------------------------------------------------------------- | ----------- |
| `preview.webp`         | Gambar preview pada ProductCard (header halaman)               | Belum ada   |
| `hero.webp`            | Gambar hero utama di bawah ProductCard                         | Belum ada   |
| `layer-shorelines.webp` | Visualisasi layer `shorelines_annual` (Gambar 1 di bagian Teknis) | Belum ada |
| `layer-rates.webp`     | Visualisasi layer `rates_of_change` (Gambar 2)                | Belum ada   |
| `layer-hotspots.webp`  | Visualisasi layer `hotspots_zoom_*` (Gambar 3)                | Belum ada   |
| `validation.webp`      | Diagram validasi (Gambar 5–6 di bagian Kualitas)               | Belum ada   |
| `intertidal-issues.webp` | Contoh masalah intertidal (Gambar 7)                          | Belum ada   |

## Cara menambahkan

Letakkan file dengan nama persis seperti di atas ke folder ini, lalu muat ulang halaman.
Docusaurus otomatis menyalin isi `static/` ke output build, sehingga path gambar
(`/img/coastline/preview.webp` dst.) langsung tersedia tanpa konfigurasi tambahan.

> **Catatan:** Sampai gambar asli tersedia, halaman akan menampilkan _broken image_.
> Itu tidak menggangu build, hanya tampilan. Halaman tetap dapat dirender.
