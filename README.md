# Panduan Pengembangan & Dokumentasi

Dokumen ini berfungsi sebagai acuan utama bagi pengembang (_developer_) dan tim konten dalam mengelola website Project Piksel.

## 1. Overview

Pendekatan _Docs-as-Code_ dipilih untuk pengelolaan website ini. Meskipun konfigurasi awal dan adaptasi alur kerja berbasis Git memerlukan upaya lebih dibandingkan CMS tradisional, metode ini menawarkan efisiensi dalam jangka panjang.

Keuntungan utama meliputi:

- Kecepatan: Tidak perlu menunggu proses _loading_ antarmuka admin CMS; penyuntingan dilakukan langsung pada file teks.
- Versi & Riwayat: Setiap perubahan tercatat rapi dalam riwayat Git.
- Kolaborasi: Memungkinkan pengerjaan paralel antar anggota tim tanpa risiko saling menimpa konten yang tidak terkontrol.

## 2. Setup Environment

Bagian ini menjelaskan langkah-langkah instalasi untuk memulai pengembangan di komputer lokal.

### Prasyarat

Pastikan perangkat telah terpasang:

- Git
- VS Code (Editor yang disarankan)
- Node.js (Versi 18.0 atau lebih baru)

### Instalasi & Menjalankan Server

1.  Clone Repository

    ```bash
    git clone git@github.com:piksel-ina/homepage.git
    cd homepage
    ```

2.  Install Dependencies

    ```bash
    npm install
    ```

3.  Jalankan Local Server
    ```bash
    npm start
    ```
    Website akan berjalan di `http://localhost:3000`. Fitur _hot reloading_ aktif secara default, sehingga perubahan file akan otomatis memperbarui tampilan di browser.

## 3. Panduan Tim Konten

Website ini menggunakan Bahasa Indonesia sebagai bahasa utama. Konten ditulis dalam format Markdown (`.md`) atau MDX (`.mdx`).

### Lokasi Penyimpanan File


- Dokumentasi Teknis: folder `/docs`
- Gambar/Aset: folder `/static/img`

### Pembuatan File



### Referensi Penulisan Markdown

Docusaurus mendukung Markdown standar dan beberapa fitur tambahan (MDX).

- Panduan Dasar: [Markdown Guide - Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- Fitur Khusus Docusaurus: [Docusaurus Markdown Features](https://docusaurus.io/docs/markdown-features)

### Penerjemahan

Mengingat sumber utama ditulis dalam Bahasa Indonesia, file terjemahan bahasa Inggris perlu diperbarui setiap kali terdapat penambahan konten atau perubahan struktur teks.

Jalankan perintah berikut:

```bash
npm run docusaurus -- write-translations --locale en
```

Periksa folder `i18n/en/` untuk melengkapi hasil terjemahan.

## 4. Git Workflow

Seluruh perubahan kode atau konten wajib melalui mekanisme _Pull Request_.

### Langkah 1: Branching

Hindari bekerja langsung pada branch `main`. Buat branch baru untuk setiap fitur atau artikel yang dikerjakan.

```bash
git checkout -b nama-branch-baru
```

### Langkah 2: Commit & Push

Lakukan penyuntingan, simpan perubahan (_commit_), dan unggah (_push_) ke remote repository.

```bash
git add .
git commit -m "Menambahkan artikel tentang X"
git push origin nama-branch-baru
```

### Langkah 3: Pull Request (PR)

Buat _Pull Request_ melalui antarmuka GitHub untuk menggabungkan perubahan dari `nama-branch-baru` ke `main`. Proses ini memungkinkan anggota tim lain melakukan peninjauan (_review_) sebelum perubahan diterapkan.

## 5. Panduan Developer

Bagian ini dikhususkan untuk pengembangan struktur teknis dan konfigurasi website.

### Struktur Project

- `docusaurus.config.js`: Konfigurasi global (navbar, footer, i18n, plugin).
- `src/pages`: Komponen React untuk halaman mandiri (_landing page_).
- `src/css/custom.css`: Styling global.

### Build & Deployment

Sebelum membuat _Pull Request_, proses _build_ sangat disarankan untuk memastikan tidak terdapat tautan rusak (_broken link_) atau kesalahan saat _rendering_.

- Build Project:
  ```bash
  npm run build
  ```
- Simulasi Production:
  ```bash
  npm run serve
  ```

Proses _deployment_ ke server berjalan otomatis menggunakan GitHub Actions setelah _Pull Request_ berhasil digabungkan (_merge_) ke branch `main`.

## 6. Referensi

Untuk informasi teknis lebih mendalam, silakan merujuk ke dokumentasi resmi:

- Docusaurus CLI Commands: [https://docusaurus.io/docs/cli](https://docusaurus.io/docs/cli)
- Docusaurus Documentation: [https://docusaurus.io/docs](https://docusaurus.io/docs)
