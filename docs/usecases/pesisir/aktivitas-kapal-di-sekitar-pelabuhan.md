---
sidebar_position: 4
pagination_next: null
---

# Aktivitas Kapal di Sekitar Pelabuhan

## Ringkasan

Modul ini bertujuan untuk memberikan contoh penggunaan data Sentinel-1 dalam memantau keberadaan kapal di sekitar pelabuhan. Mampu mendeteksi kapal dan jalur pelayaran dari citra satelit dapat bermanfaat untuk mendapatkan gambaran holistik lalu lintas di pelabuhan. Data radar (Sentinel-1) dapat digunakan untuk mendeteksi keberadaan kapal dari waktu ke waktu, sehingga menyoroti keberadaan jalur pelayaran. Saat bekerja dengan data radar, air tampak gelap; permukaannya yang relatif halus menghasilkan hamburan balik yang sangat kecil, sehingga intensitas rendah terekam oleh satelit di kedua pita polarisasi. Namun, jika sebuah kapal berada di atas air, hamburan balik di lokasi kapal akan jauh lebih tinggi daripada di air. Lokasi yang digunakan adalah di Pelabuhan Makassar, provinsi Sulawesi Selatan pada bulan Januari 2025.

## Tahapan

1. Memuat library
2. Menggunakan distributed computing
3. Menentukan wilayah
4. Memuat data
5. Konversi data ke decibel

## Hasil

Densitas aktivitas kapal di sekitar pelabuhan.

{/* image placeholder: kapal.webp */}

## Input

Citra Sentinel-1

## Output

Lokasi kapal dalam suatu pelabuhan

## Metode

Penggunaan citra radar
