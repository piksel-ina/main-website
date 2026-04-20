---
sidebar_position: 4
title: Komponen MDX Cheatsheet
description: Referensi lengkap semua komponen MDX dan elemen Markdown yang tersedia untuk menulis dokumentasi Piksel.
---

# Komponen MDX Cheatsheet

Halaman ini menampilkan semua komponen MDX kustom dan elemen Markdown bawaan yang dapat digunakan dalam dokumentasi Piksel. Gunakan halaman ini sebagai referensi untuk memilih komponen yang tepat.

## Headings

Semua level heading didukung. Gunakan heading secara hierarkis untuk struktur dokumen yang baik.

# H1 — Judul Halaman

## H2 — Bagian Utama

### H3 — Sub Bagian

#### H4 — Detail

##### H5 — Catatan Kecil

###### H6 — Label

## Teks Dasar

Paragraf biasa ditulis seperti biasa. Gunakan **teks tebal** untuk penekanan, _teks miring_ untuk istilah, dan `kode inline` untuk nama teknis.

Garis horizontal digunakan untuk memisahkan bagian:

---

## Daftar

### Daftar Tidak Berurutan

- Item pertama dalam daftar
- Item kedua dengan penjelasan lebih panjang untuk menunjukkan bagaimana teks akan terlihat saat dibungkus ke beberapa baris
- Item ketiga
  - Sub-item pertama
  - Sub-item kedua

### Daftar Berurutan

1. Langkah pertama dalam proses
2. Langkah kedua dalam proses
3. Langkah ketiga dalam proses
4. Langkah terakhir

## Link

[Link ke halaman lain dalam dokumentasi](/docs/overview).

## Gambar

![Contoh gambar dengan caption](/img/hero/hero-image.png)

## Tabel

| Properti      | Tipe      | Default  | Deskripsi                |
| ------------- | --------- | -------- | ------------------------ |
| `title`       | string    | —        | Judul komponen           |
| `description` | string    | —        | Deskripsi singkat        |
| `type`        | enum      | `'info'` | Varian tampilan          |
| `children`    | ReactNode | —        | Konten di dalam komponen |

## Kode

### Kode Inline

Gunakan `backtick tunggal` untuk kode inline. Contoh: nama fungsi seperti `handleClick()` atau variabel seperti `const count = 0`.

### Blok Kode

```javascript
function processImageData(imageUrl, options = {}) {
  const { format = 'geotiff', resolution = 10 } = options;

  return fetch(imageUrl)
    .then((response) => response.arrayBuffer())
    .then((buffer) => processGeoTIFF(buffer, format, resolution));
}
```

```python
from piksel import SatelliteImage, ProcessingPipeline

image = SatelliteImage.open("path/to/image.tif")
pipeline = ProcessingPipeline([
    "normalize",
    "classify",
    "vectorize"
])

result = pipeline.run(image)
print(f"Processed area: {result.area_km2} km²")
```

```bash
piksel-cli process \
  --input data/input.tif \
  --output data/output.tif \
  --algorithm ndvi \
  --resolution 10m
```

## Blockquote

> Ini adalah blockquote standar. Gunakan untuk kutipan atau informasi penting yang perlu ditonjolkan dari teks utama.
>
> Blockquote dapat berisi beberapa paragraf dan bahkan **teks tebal** serta _teks miring_.

## Admonitions

Admonition bawaan Docusaurus:

:::note[Catatan]

Informasi tambahan yang membantu pembaca memahami konteks.

:::

:::tip[Tips]

Saran praktis atau cara yang lebih efisien untuk melakukan sesuatu.

:::

:::info[Informasi]

Detail teknis atau konteks yang relevan dengan topik saat ini.

:::

:::warning[Peringatan]

Hal-hal yang perlu diperhatikan untuk menghindari kesalahan.

:::

:::danger[Bahaya]

Tindakan yang dapat menyebabkan masalah serius jika tidak dilakukan dengan benar.

:::

## Details / Collapsible

<details>
<summary>Klik untuk melihat detail teknis</summary>

Konten tersembunyi yang dapat diperluas. Berguna untuk informasi teknis mendalam yang tidak semua pembaca perlu lihat.

- Parameter konfigurasi lanjutan
- Detail implementasi internal
- Log debugging

</details>

<details>
<summary>Detail implementasi API</summary>

Konten kedua yang dapat diperluas, menunjukkan bahwa beberapa elemen details dapat digunakan bersamaan.

```json
{
  "api_version": "v2",
  "endpoint": "/api/imagery/process",
  "method": "POST"
}
```

</details>

---

## Komponen Kustom

### DocSteps

Daftar langkah bernomor dengan garis waktu. Gunakan untuk panduan langkah demi langkah.

```mdx
import DocSteps, { Step } from '@site/src/components/Docs/DocSteps';

<DocSteps>
  <Step>
    **Langkah pertama** — Buka halaman Explorer dan pilih area yang diinginkan.
  </Step>
  <Step>
    **Langkah kedua** — Tentukan rentang waktu dan jenis citra satelit.
  </Step>
  <Step>**Langkah ketiga** — Klik tombol proses untuk memulai analisis.</Step>
</DocSteps>
```

**Hasil:**

import DocSteps, { Step } from '@site/src/components/Docs/DocSteps';

<DocSteps>
  <Step>**Langkah pertama** — Buka halaman Explorer dan pilih area yang diinginkan pada peta interaktif.</Step>
  <Step>**Langkah kedua** — Tentukan rentang waktu dan jenis citra satelit yang akan digunakan untuk analisis.</Step>
  <Step>**Langkah ketiga** — Klik tombol proses dan tunggu hingga hasil analisis tersedia untuk diunduh.</Step>
</DocSteps>
