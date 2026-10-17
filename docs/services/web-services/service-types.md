---
sidebar_position: 2
---
# Jenis Layanan Web

Setiap Layanan Web digunakan untuk kebutuhan yang berbeda. Web Map Service (WMS) menyajikan peta yang dihasilkan sesuai permintaan, Web Map Tile Service (WMTS) menyajikan peta dalam tile untuk kebutuhan tampilan, sedangkan Web Coverage Service (WCS) menyediakan data coverage untuk diolah lebih lanjut. Perbedaan ini menentukan layanan yang perlu dipilih sebelum menghubungkannya ke aplikasi.

Secara sederhana, alur prosesnya dapat digambarkan sebagai berikut:

```text
Kebutuhan penggunaan data
            |
            v
    Layanan Web Piksel
            |
   +--------+--------+
   |        |        |
   v        v        v
  WMS      WMTS     WCS
   |        |        |
   v        v        v
 Peta   Tile peta  Data coverage
```

## Web Map Service (WMS)

Pada WMS, aplikasi mengirimkan permintaan yang menyebutkan layer, area peta, sistem koordinat, ukuran gambar, dan format keluaran. Layanan kemudian merender peta berdasarkan permintaan tersebut dan mengirimkannya kembali sebagai gambar.

Seluruh proses render berlangsung di sisi server, sehingga aplikasi hanya menerima gambar yang siap ditampilkan dan tidak perlu menyiapkan sumber daya untuk mengolah data berukuran besar. Konsekuensinya, setiap perubahan area atau tingkat zoom akan memicu permintaan dan proses render baru, sehingga kecepatan tampilan bergantung pada beban server dan luas area yang diminta.

Daftar layer yang tersedia dapat dilihat melalui permintaan GetCapabilities berikut:

```text
https://ows.piksel.big.go.id/wms?service=WMS&request=GetCapabilities
```

Respons permintaan tersebut berupa dokumen XML yang memuat nama setiap layer beserta sistem koordinat dan format gambar yang didukung. Nama layer inilah yang digunakan saat menghubungkan layanan ke aplikasi.

## Web Map Tile Service (WMTS)

WMTS menyiapkan peta sebagai tile pada tingkat zoom yang telah ditentukan. Karena tile tersebut dibuat sebelum diminta, aplikasi hanya mengambil potongan peta yang sesuai dengan tampilan, tanpa menunggu proses render untuk setiap permintaan.

Penyajian dalam tile membuat proses menggeser dan memperbesar peta terasa lebih responsif, termasuk ketika diakses banyak pengguna sekaligus. Sebagai konsekuensinya, tampilan mengikuti tingkat zoom dan pembagian tile yang sudah ditetapkan, sehingga area dan ukuran peta tidak dapat diminta sebebas WMS.

Daftar layer yang tersedia dapat dilihat melalui permintaan GetCapabilities berikut:

```text
https://ows.piksel.big.go.id/wmts?service=WMTS&request=GetCapabilities
```

Respons permintaan tersebut memuat nama layer, susunan tile beserta tingkat zoom yang tersedia, dan format gambar yang didukung.

## Web Coverage Service (WCS)

Pada WCS, aplikasi menerima data beserta nilai pikselnya, bukan gambar peta. Permintaan dapat dibatasi pada area tertentu, sehingga data yang diambil hanya mencakup wilayah yang diperlukan.

Dengan nilai piksel yang tersedia, data dapat langsung digunakan untuk perhitungan dan analisis, misalnya indeks vegetasi atau pemodelan spasial. Ukuran data yang diambil bergantung pada luas area dan resolusinya, sehingga permintaan yang terlalu luas dapat memerlukan waktu unduh dan kapasitas penyimpanan yang besar.

Daftar coverage yang tersedia dapat dilihat melalui permintaan GetCapabilities berikut:

```text
https://ows.piksel.big.go.id/wcs?service=WCS&request=GetCapabilities
```

Respons permintaan tersebut memuat nama coverage yang tersedia beserta format data yang didukung.

## Perbandingan

Ringkasan perbedaan ketiga layanan:

| Aspek            | WMS                   | WMTS                   | WCS                          |
| ---------------- | --------------------- | ---------------------- | ---------------------------- |
| Hasil permintaan | Gambar peta           | Tile peta              | Data beserta nilai piksel    |
| Digunakan untuk  | Menampilkan peta      | Menampilkan peta       | Perhitungan dan analisis     |
| Cakupan area     | Sesuai permintaan     | Mengikuti susunan tile | Sesuai permintaan            |
| Penyiapan peta   | Dirender saat diminta | Disiapkan sebelumnya   | Bergantung luas dan resolusi |
