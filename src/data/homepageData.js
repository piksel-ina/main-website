import { translate } from "@docusaurus/Translate";
import { Map, Terminal, Globe, Server, Cpu, Search } from "lucide-react";

export const heroData = {
  title: translate({
    id: "homepage.hero.title",
    message: "Bumi Digital Indonesia",
    description: "The main title on the homepage hero section",
  }),
  subtitle: translate({
    id: "homepage.hero.subtitle",
    message:
      "Piksel mengintegrasikan citra satelit dengan teknologi cloud computing untuk observasi bumi digital di seluruh Indonesia",
    description: "The subtitle text on the homepage hero section",
  }),
  buttonText: translate({
    id: "homepage.hero.button",
    message: "Pelajari Selengkapnya",
    description: "The button text to read documentation",
  }),
  buttonLink: "/docs/penggunaan/intro",
};

export const articlesData = [
  {
    id: 1,
    title: translate({
      id: "articles.defaultArticles.feat01.title",
      message: "Memahami Citra Satelit untuk Indonesia",
    }),
    description: translate({
      id: "articles.defaultArticles.feat01.description",
      message:
        "Pelajari dasar-dasar analisis citra satelit dan penerapannya untuk fitur geografis Indonesia serta monitoring lingkungan.",
    }),
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0ZWxsaXRlJTIwaW1hZ2VyeXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/satellite-imagery-basics",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: translate({
      id: "articles.defaultArticles.feat02.title",
      message: "Cloud Computing untuk Data Geospasial",
    }),
    description: translate({
      id: "articles.defaultArticles.feat02.description",
      message:
        "Temukan bagaimana cloud computing merevolusi pemrosesan dan analisis data geospasial untuk proyek observasi bumi skala besar.",
    }),
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWQlMjBjb21wdXRpbmd8ZW58MHx8MHx8fDA%3D",
    link: "/docs/cloud-computing-geospatial",
    date: "2024-01-20",
  },
  {
    id: 3,
    title: translate({
      id: "articles.defaultArticles.feat03.title",
      message: "Monitoring Lingkungan dengan Piksel",
    }),
    description: translate({
      id: "articles.defaultArticles.feat03.description",
      message:
        "Jelajahi bagaimana teknologi digital earth Piksel membantu memonitor deforestasi, pertumbuhan urban, dan dampak perubahan iklim di seluruh Indonesia.",
    }),
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0JTIwbW9uaXRvcmluZ3xlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/environmental-monitoring",
    date: "2024-01-25",
  },
  {
    id: 4,
    title: translate({
      id: "articles.defaultArticles.feat04.title",
      message: "Integrasi API Data Piksel",
    }),
    description: translate({
      id: "articles.defaultArticles.feat04.description",
      message:
        "Panduan step-by-step untuk mengintegrasikan API data geospasial Piksel ke dalam aplikasi dan workflow Anda.",
    }),
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBpJTIwaW50ZWdyYXRpb258ZW58MHx8MHx8fDA%3D",
    link: "/docs/api-integration",
    date: "2024-02-01",
  },
  {
    id: 5,
    title: translate({
      id: "articles.defaultArticles.feat05.title",
      message: "Otomasi Workflow Geospasial",
    }),
    description: translate({
      id: "articles.defaultArticles.feat05.description",
      message:
        "Pelajari cara mengotomasi pemrosesan data geospasial skala besar menggunakan Piksel Workflows dan teknologi Argo.",
    }),
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    link: "/docs/workflow-automation",
    date: "2024-02-05",
  },
];

export const servicesData = [
  {
    id: "01",
    icon: Search,
    title: "EXPLORER",
    description: translate({
      id: "ourServices.explorer.description",
      message: "Jelajahi dan akses data geospasial yang tersedia di platform kami secara bebas",
    }),
    features: [
      translate({ id: "ourServices.explorer.f1", message: "Browse katalog data" }),
      translate({ id: "ourServices.explorer.f2", message: "Preview visualisasi" }),
      translate({ id: "ourServices.explorer.f3", message: "Download dataset" }),
    ],
    buttonText: translate({ id: "ourServices.explorer.btn", message: "Mulai Eksplorasi" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/explorer",
    color: "cyan", // internal usage for styling mapping
  },
  {
    id: "02",
    icon: Terminal,
    title: "JUPYTER SANDBOX",
    description: translate({
      id: "ourServices.sandbox.description",
      message: "Belajar bekerja dengan data secara programatik. Kontribusi dalam pengembangan produk bersama kami",
    }),
    features: [
      translate({ id: "ourServices.sandbox.f1", message: "Notebook environment siap pakai" }),
      translate({ id: "ourServices.sandbox.f2", message: "Sample code dan tutorial" }),
      translate({ id: "ourServices.sandbox.f3", message: "Kolaborasi pengembangan" }),
    ],
    buttonText: translate({ id: "ourServices.sandbox.btn", message: "Mulai Belajar" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/sandbox",
    color: "purple",
  },
  {
    id: "03",
    icon: Map,
    title: "MAPS",
    description: translate({
      id: "ourServices.maps.description",
      message: "Berinteraksi dengan produk kami dan dapatkan insight visual dengan cepat",
    }),
    features: [
      translate({ id: "ourServices.maps.f1", message: "Interface interaktif" }),
      translate({ id: "ourServices.maps.f2", message: "Analisis real-time" }),
      translate({ id: "ourServices.maps.f3", message: "Export hasil analisis" }),
    ],
    buttonText: translate({ id: "ourServices.maps.btn", message: "Buka Maps" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/maps",
    color: "emerald",
  },
  {
    id: "04",
    icon: Server, // or Globe
    title: "WEB SERVICES",
    description: translate({
      id: "ourServices.webservices.description",
      message: "Akses data melalui web services dan integrasikan ke aplikasi Anda",
    }),
    features: [
      translate({ id: "ourServices.webservices.f1", message: "WMS/WCS/WMTS endpoints" }),
      translate({ id: "ourServices.webservices.f2", message: "REST API" }),
      translate({ id: "ourServices.webservices.f3", message: "Dokumentasi lengkap" }),
    ],
    buttonText: translate({ id: "ourServices.webservices.btn", message: "Lihat Dokumentasi" }),
    // secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/docs/api-integration",
    color: "blue",
  },
  {
    id: "05",
    icon: Cpu,
    title: "NATIONAL PRODUCTION",
    description: translate({
      id: "ourServices.production.description",
      message: "Delegasi ratusan hingga ribuan CPU untuk memproses data multi-spasial dan multi-temporal skala nasional",
    }),
    features: [
      translate({ id: "ourServices.production.f1", message: "Cloud computing dengan Kubernetes" }),
      translate({ id: "ourServices.production.f2", message: "Karpenter & Argo Workflow" }),
      translate({ id: "ourServices.production.f3", message: "Proses 1-3 hari untuk skala nasional" }),
      translate({ id: "ourServices.production.f4", message: "Kolaborasi produksi tingkat nasional" }),
    ],
    buttonText: translate({ id: "ourServices.production.btn", message: "Lihat Dokumentasi" }),
    // secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/contact",
    color: "amber",
  },
];

export const servicesHeaderData = {
  tag: translate({
    id: "ourServices.header.tag",
    message: "Layanan Kami",
    description: "Tag label for the services section"
  }),
  title: translate({
    id: "ourServices.header.title",
    message: "PERJALANAN ANDA",
    description: "Main title for the services section"
  }),
  subtitle: translate({
    id: "ourServices.header.subtitle",
    message: "Semua layanan kami tersedia secara gratis. Sebagian besar dapat diakses langsung, beberapa mungkin memerlukan inquiry. Jangan ragu untuk menghubungi kami.",
    description: "Subtitle description for the services section"
  })
};

export const useCasesData = {
  useCase01: {
    icon: 'tree-pine',
    tabLabel: translate({id: 'useCases.useCase01.tab', message: 'Kehutanan'}),
    title: translate({
      id: 'useCases.useCase01.title',
      message: 'Pemantauan Deforestasi'
    }),
    description: translate({
      id: 'useCases.useCase01.description',
      message: 'Deteksi perubahan tutupan hutan secara real-time dengan teknologi satelit beresolusi tinggi. Identifikasi area deforestasi, monitor pemulihan hutan, dan dukung upaya konservasi di seluruh Indonesia.'
    }),
    features: [
      translate({id: 'useCases.useCase01.f1', message: 'Update setiap 15 menit'}),
      translate({id: 'useCases.useCase01.f2', message: 'Akurasi deteksi 99.8%'}),
      translate({id: 'useCases.useCase01.f3', message: '500K+ hektar terpantau'})
    ],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-green)',
    glowColor: 'rgba(16, 185, 129, 0.6)'
  },
  useCase02: {
    icon: 'building-2',
    tabLabel: translate({id: 'useCases.useCase02.tab', message: 'Perkotaan'}),
    title: translate({
      id: 'useCases.useCase02.title',
      message: 'Perencanaan Kota'
    }),
    description: translate({
      id: 'useCases.useCase02.description',
      message: 'Analisis pertumbuhan urban dan infrastruktur untuk perencanaan kota berkelanjutan. Monitor ekspansi kota, identifikasi area pengembangan, dan optimalkan tata ruang dengan data satelit presisi tinggi.'
    }),
    features: [
      translate({id: 'useCases.useCase02.f1', message: 'Pemetaan 3D resolusi tinggi'}),
      translate({id: 'useCases.useCase02.f2', message: 'Analisis perubahan temporal'}),
      translate({id: 'useCases.useCase02.f3', message: 'Integrasi data demografi'})
    ],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-blue)',
    glowColor: 'rgba(59, 130, 246, 0.6)'
  },
  useCase03: {
    icon: 'wheat',
    tabLabel: translate({id: 'useCases.useCase03.tab', message: 'Pertanian'}),
    title: translate({
      id: 'useCases.useCase03.title',
      message: 'Pertanian Presisi'
    }),
    description: translate({
      id: 'useCases.useCase03.description',
      message: 'Monitor kesehatan tanaman dan prediksi hasil panen dengan analisis multispektral. Deteksi stres tanaman, optimalkan irigasi, dan tingkatkan produktivitas pertanian dengan teknologi AI dan satelit.'
    }),
    features: [
      translate({id: 'useCases.useCase03.f1', message: 'Analisis NDVI real-time'}),
      translate({id: 'useCases.useCase03.f2', message: 'Prediksi hasil panen AI'}),
      translate({id: 'useCases.useCase03.f3', message: 'Rekomendasi irigasi otomatis'})
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-amber)',
    glowColor: 'rgba(245, 158, 11, 0.6)'
  },
  useCase04: {
    icon: 'waves',
    tabLabel: translate({id: 'useCases.useCase04.tab', message: 'Pesisir'}),
    title: translate({
      id: 'useCases.useCase04.title',
      message: 'Pengelolaan Pesisir'
    }),
    description: translate({
      id: 'useCases.useCase04.description',
      message: 'Pantau perubahan garis pantai dan kesehatan ekosistem laut. Deteksi abrasi, monitor terumbu karang, dan lindungi ekosistem pesisir dengan pemantauan satelit berkelanjutan.'
    }),
    features: [
      translate({id: 'useCases.useCase04.f1', message: 'Deteksi perubahan garis pantai'}),
      translate({id: 'useCases.useCase04.f2', message: 'Monitor kesehatan terumbu karang'}),
      translate({id: 'useCases.useCase04.f3', message: 'Analisis kualitas air laut'})
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-cyan)',
    glowColor: 'rgba(6, 182, 212, 0.6)'
  },
  useCase05: {
    icon: 'triangle-alert',
    tabLabel: translate({id: 'useCases.useCase05.tab', message: 'Bencana'}),
    title: translate({
      id: 'useCases.useCase05.title',
      message: 'Mitigasi Bencana'
    }),
    description: translate({
      id: 'useCases.useCase05.description',
      message: 'Sistem peringatan dini dan penilaian kerusakan pasca-bencana. Monitor area rawan bencana, deteksi perubahan anomali, dan dukung respons cepat dengan data satelit real-time.'
    }),
    features: [
      translate({id: 'useCases.useCase05.f1', message: 'Peringatan dini banjir & longsor'}),
      translate({id: 'useCases.useCase05.f2', message: 'Penilaian kerusakan otomatis'}),
      translate({id: 'useCases.useCase05.f3', message: 'Koordinasi respons darurat'})
    ],
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-red)',
    glowColor: 'rgba(239, 68, 68, 0.6)'
  },
  useCase06: {
    icon: 'pickaxe',
    tabLabel: translate({id: 'useCases.useCase06.tab', message: 'Tambang'}),
    title: translate({
      id: 'useCases.useCase06.title',
      message: 'Pertambangan & Energi'
    }),
    description: translate({
      id: 'useCases.useCase06.description',
      message: 'Pemantauan lokasi tambang dan kepatuhan lingkungan. Monitor aktivitas pertambangan, deteksi perubahan topografi, dan pastikan kepatuhan terhadap regulasi lingkungan dengan data satelit presisi.'
    }),
    features: [
      translate({id: 'useCases.useCase06.f1', message: 'Monitor perubahan topografi'}),
      translate({id: 'useCases.useCase06.f2', message: 'Deteksi aktivitas ilegal'}),
      translate({id: 'useCases.useCase06.f3', message: 'Audit kepatuhan lingkungan'})
    ],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-purple)',
    glowColor: 'rgba(139, 92, 246, 0.6)'
  }
};

export const faqData = {
  title: translate({
    id: "homepage.faq.title",
    message: "Frequently Asked Question",
    description: "Title for the FAQ section",
  }),
  subtitle: translate({
    id: "homepage.faq.subtitle",
    message: "Trusted in more than 100 countries and 4 million customers.",
    description: "Subtitle for the FAQ section",
  }),
  questions: [
    {
      id: "faq-1",
      question: translate({
        id: "homepage.faq.q1",
        message: "How do i update my billing information?",
      }),
      answer: translate({
        id: "homepage.faq.a1",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed et faucibus. Vivamus in ante sed libero feugiat fermentum.",
      }),
    },
    {
      id: "faq-2",
      question: translate({
        id: "homepage.faq.q2",
        message: "How do i update my billing information?",
      }),
      answer: translate({
        id: "homepage.faq.a2",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed et faucibus. Vivamus in ante sed libero feugiat fermentum.",
      }),
    },
    {
      id: "faq-3",
      question: translate({
        id: "homepage.faq.q3",
        message: "How do i update my billing information?",
      }),
      answer: translate({
        id: "homepage.faq.a3",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed et faucibus. Vivamus in ante sed libero feugiat fermentum.",
      }),
    },
    {
      id: "faq-4",
      question: translate({
        id: "homepage.faq.q4",
        message: "How do i update my billing information?",
      }),
      answer: translate({
        id: "homepage.faq.a4",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed et faucibus. Vivamus in ante sed libero feugiat fermentum.",
      }),
    },
     {
      id: "faq-5",
      question: translate({
        id: "homepage.faq.q5",
        message: "How do i update my billing information?",
      }),
      answer: translate({
        id: "homepage.faq.a5",
        message:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec ante vitae purus tempus egestas. Curabitur euismod purus sed et faucibus. Vivamus in ante sed libero feugiat fermentum.",
      }),
    },
  ],
};
