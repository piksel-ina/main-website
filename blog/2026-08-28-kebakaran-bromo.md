---
slug: kebakaran-bromo
title: "Dari Hotspot hingga Jejak Kebakaran: Membaca Perubahan Bromo"
authors: [tim_piksel]
tags: [bencana, kebakaran]
image: /img/preview/20260828-fire.webp
description: Piksel memanfaatkan data VIIRS dan Sentinel-2 untuk menelusuri waktu, lokasi, dan perkembangan kebakaran Bromo, serta perubahan permukaan sebelum dan sesudah kejadian. Integrasi data satelit ini mendukung analisis spatio-temporal untuk pemantauan dan evaluasi dampak kebakaran.
featured: true
---

import Figure from '@site/src/components/Docs/Figure';

Kebakaran di kawasan Bromo meninggalkan jejak yang dapat dibaca dari angkasa. Dengan memanfaatkan data penginderaan jauh, perubahan kawasan dapat diamati tidak hanya dari kondisi sebelum dan sesudah kejadian, tetapi juga dari pola kemunculan aktivitas panas sepanjang waktu. Melalui Piksel, citra Sentinel-2 dan data hotspot dari data VIIRS (Visible Infrared Imaging Radiometer Suite) dipadukan untuk memberikan gambaran mengenai lokasi, waktu, dan perubahan kawasan yang berkaitan dengan kejadian kebakaran.

<!-- truncate -->

<Figure
  alt="Ilustrasi kebakaran"
  caption="Ilustrasi kebakaran hutan dan lahan (Vladyslav Dukhin / Pexels)"
  captionAlign="center"
  src="/img/preview/20260828-fire.webp"
/>

<Figure
  alt="Perubahan area"
  caption="Perubahan area setelah kebakaran"
  captionAlign="center"
  src="/img/preview/20260828-change.webp"
/>

Citra Sentinel-2 tanggal 2 Agustus 2026 menunjukkan kondisi kawasan sebelum perubahan pascakebakaran, sementara citra 22 Agustus 2026 memperlihatkan kondisi setelah rangkaian aktivitas kebakaran terdeteksi. Perbandingan kedua citra menunjukkan perubahan rona dan karakter spektral pada sejumlah bagian kawasan Bromo. Area yang sebelumnya memiliki tutupan vegetasi relatif seragam terlihat mengalami perubahan pada citra setelah kejadian. Perubahan tersebut dapat menjadi indikasi vegetasi yang terbakar atau mengalami kerusakan. Dengan analisis lebih lanjut, Sentinel-2 dapat dimanfaatkan untuk mengidentifikasi dan mendelineasi area yang diduga mengalami dampak kebakaran.

<Figure
  alt="Hotspot"
  caption="Hotspot dalam periode kebakaran"
  captionAlign="center"
  src="/img/preview/20260828-hotspot.webp"
/>

Untuk melihat bagaimana kejadian tersebut berkembang dari waktu ke waktu, Piksel memanfaatkan data VIIRS dari NASA. Data hotspot (active fire) menunjukkan lokasi tempat satelit mendeteksi anomali termal yang memenuhi kriteria tertentu pada saat observasi. Ketika titik-titik tersebut disusun berdasarkan tanggal, terlihat perubahan pola dan konsentrasi aktivitas panas di kawasan Bromo. Data periode 2–4 Agustus, 5–8 Agustus, 9–12 Agustus, hingga 13–18 Agustus 2026 memperlihatkan bagaimana titik-titik hotspot muncul di lokasi yang berbeda dan kemudian membentuk konsentrasi tertentu. Hotspot tersebut bukan merupakan batas atau luas api secara langsung, tetapi menjadi indikator penting untuk menelusuri lokasi dan waktu aktivitas panas yang terdeteksi satelit.

Kekuatan analisis terletak pada penggabungan kedua sumber data tersebut. Data VIIRS memberikan dimensi temporal, yaitu kapan dan di mana aktivitas panas terdeteksi, sedangkan Sentinel-2 memberikan dimensi spasial, yaitu bagaimana kondisi permukaan terlihat sebelum dan setelah kejadian. Di dalam Piksel, titik-titik hotspot dapat dianalisis berdasarkan kedekatan lokasi dan waktu untuk mengidentifikasi suatu fire event, kemudian dikaitkan dengan perubahan yang terlihat pada citra Sentinel-2. Dengan pendekatan ini, analisis tidak berhenti pada pertanyaan “di mana kebakaran terjadi?”, tetapi berkembang menjadi “kapan aktivitas panas mulai terdeteksi, bagaimana pola lokasinya, dan perubahan apa yang terlihat setelah kejadian?”

Dari rangkaian data tersebut, Piksel mengubah data satelit menjadi informasi spatio-temporal yang mudah dipahami. Jejak aktivitas panas dapat ditelusuri berdasarkan waktu dan lokasi, sementara perubahan permukaan dapat diamati melalui citra satelit. Pendekatan ini menunjukkan bagaimana teknologi penginderaan jauh dapat membantu memahami suatu kejadian secara lebih menyeluruh—mulai dari mendeteksi aktivitas kebakaran, menelusuri perkembangannya, hingga mengidentifikasi area yang mengalami perubahan pascakebakaran. Bagi pengelolaan kawasan konservasi dan lingkungan, informasi semacam ini dapat menjadi dasar untuk pemantauan, evaluasi dampak, pemetaan area terdampak, dan pengambilan keputusan berbasis data geospasial.
