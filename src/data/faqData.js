import { translate } from "@docusaurus/Translate";

export const faqData = {
  title: translate({
    id: "homepage.faq.title",
    message: "Pertanyaan Umum",
    description: "Title for the FAQ section",
  }),
  subtitle: translate({
    id: "homepage.faq.subtitle",
    message: "Informasi mengenai latar belakang, akses data, dan kolaborasi.",
    description: "Subtitle for the FAQ section",
  }),
  questions: [
    {
      id: "faq-1",
      question: translate({
        id: "homepage.faq.q1",
        message: "Apa latar belakang pembentukan PIKSEL?",
      }),
      answer: translate({
        id: "homepage.faq.a1",
        message:
          "PIKSEL hadir melalui kolaborasi strategis dengan Geoscience Australia, mengadopsi teknologi Open Data Cube yang serupa dengan platform Digital Earth Australia. Inisiatif ini bertujuan membangun kemandirian infrastruktur data geospasial nasional untuk mendukung pengambilan keputusan yang lebih akurat.",
      }),
    },
    {
      id: "faq-2",
      question: translate({
        id: "homepage.faq.q2",
        message: "Apakah diperlukan akun pengguna untuk mengakses data?",
      }),
      answer: translate({
        id: "homepage.faq.a2",
        message:
          "Tidak. Sebagian besar data dan layanan API (WMS/WCS) piksel.id terbuka untuk publik tanpa registrasi. Pendaftaran akun hanya diperlukan jika Anda ingin menggunakan layanan Jupyter Sandbox untuk melakukan pengolahan data dan simulasi secara privat.",
      }),
    },
    {
      id: "faq-3",
      question: translate({
        id: "homepage.faq.q3",
        message: "Bagaimana cara berkolaborasi dengan PIKSEL?",
      }),
      answer: translate({
        id: "homepage.faq.a3",
        message:
          "Kami menyambut baik kolaborasi dengan akademisi, peneliti, dan instansi lain. Anda dapat berkontribusi melalui pengembangan modul analisis di Sandbox, atau menghubungi tim kami secara langsung untuk potensi kerja sama pengembangan produk geospasial yang lebih luas.",
      }),
    },
    {
      id: "faq-4",
      question: translate({
        id: "homepage.faq.q4",
        message: "Apa jenis dan format data yang tersedia?",
      }),
      answer: translate({
        id: "homepage.faq.a4",
        message:
          "Saat ini kami menyediakan data analisis siap pakai (Analysis Ready Data) dari konstelasi satelit Sentinel-1, Sentinel-2, serta arsip historis Landsat. Data disajikan dalam format Cloud Optimized GeoTIFF (COG) untuk mendukung akses yang cepat dan interoperabel.",
      }),
    },
    {
      id: "faq-5",
      question: translate({
        id: "homepage.faq.q5",
        message: "Seberapa sering data satelit diperbarui?",
      }),
      answer: translate({
        id: "homepage.faq.a5",
        message:
          "Platform kami melakukan indeksasi data baru setiap hari. Satelit sendiri melintasi wilayah Indonesia setiap hari namun pada lokasi yang berbeda-beda mengikuti jalur orbitnya. Untuk lokasi spesifik yang sama, Sentinel-2 akan kembali setiap 5 hari dan Sentinel-1 setiap 6-12 hari.",
      }),
    },
  ],
};
