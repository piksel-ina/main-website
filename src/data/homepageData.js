import { translate } from "@docusaurus/Translate";
import { Map, FileCode2, Unplug, GitBranch } from "lucide-react";

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
    id: 1,
    icon: Map,
    title: translate({
      id: "ourServices.service1.title",
      message: "Piksel Map",
      description: "Title for service 1",
    }),
    description: translate({
      id: "ourServices.service1.description",
      message:
        "Eksplorasi dan visualisasi dataset geospasial melalui platform web interaktif kami.",
      description: "Service 1 Description",
    }),
    buttonText: translate({
      id: "ourServices.service1.button",
      message: "Mulai Eksplorasi",
      description: "Button text for service 1",
    }),
    link: "/map",
  },
  {
    id: 2,
    icon: FileCode2,
    title: translate({
      id: "ourServices.service2.title",
      message: "Piksel Sandbox",
      description: "Title for service 2",
    }),
    description: translate({
      id: "ourServices.service2.description",
      message:
        "Eksperimen, belajar, dan buat prototype di environment Jupyter berbasis cloud kami.",
      description: "Service 2 Description",
    }),
    buttonText: translate({
      id: "ourServices.service2.button",
      message: "Lihat Analytics",
      description: "Button text for service 2",
    }),
    link: "/sandbox",
  },
  {
    id: 3,
    icon: Unplug,
    title: translate({
      id: "ourServices.service3.title",
      message: "Piksel Data API",
      description: "Title for service 3",
    }),
    description: translate({
      id: "ourServices.service3.description",
      message:
        "Akses dataset geospasial yang komprehensif melalui infrastruktur API kami.",
      description: "Service 3 Description",
    }),
    buttonText: translate({
      id: "ourServices.service3.button",
      message: "Jelajah API",
      description: "Button text for service 3",
    }),
    link: "/api",
  },
  {
    id: 4,
    icon: GitBranch,
    title: translate({
      id: "ourServices.service4.title",
      message: "Piksel Workflows",
      description: "Title for service 4",
    }),
    description: translate({
      id: "ourServices.service4.description",
      message:
        "Otomasi pemrosesan data geospasial skala besar dengan Argo Workflows.",
      description: "Service 4 Description",
    }),
    buttonText: translate({
      id: "ourServices.service4.button",
      message: "Jelajahi Workflows",
      description: "Button text for service 4",
    }),
    link: "/workflows",
  },
];

export const useCasesData = {
  kehutanan: {
    icon: 'tree-pine',
    tabLabel: translate({id: 'useCases.kehutanan.tab', message: 'Kehutanan'}),
    title: translate({
      id: 'useCases.kehutanan.title',
      message: 'Pemantauan Deforestasi'
    }),
    description: translate({
      id: 'useCases.kehutanan.description',
      message: 'Deteksi perubahan tutupan hutan secara real-time dengan teknologi satelit beresolusi tinggi. Identifikasi area deforestasi, monitor pemulihan hutan, dan dukung upaya konservasi di seluruh Indonesia.'
    }),
    features: [
      translate({id: 'useCases.kehutanan.f1', message: 'Update setiap 15 menit'}),
      translate({id: 'useCases.kehutanan.f2', message: 'Akurasi deteksi 99.8%'}),
      translate({id: 'useCases.kehutanan.f3', message: '500K+ hektar terpantau'})
    ],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-kehutanan)',
    glowColor: 'rgba(16, 185, 129, 0.6)'
  },
  perkotaan: {
    icon: 'building-2',
    tabLabel: translate({id: 'useCases.perkotaan.tab', message: 'Perkotaan'}),
    title: translate({
      id: 'useCases.perkotaan.title',
      message: 'Perencanaan Kota'
    }),
    description: translate({
      id: 'useCases.perkotaan.description',
      message: 'Analisis pertumbuhan urban dan infrastruktur untuk perencanaan kota berkelanjutan. Monitor ekspansi kota, identifikasi area pengembangan, dan optimalkan tata ruang dengan data satelit presisi tinggi.'
    }),
    features: [
      translate({id: 'useCases.perkotaan.f1', message: 'Pemetaan 3D resolusi tinggi'}),
      translate({id: 'useCases.perkotaan.f2', message: 'Analisis perubahan temporal'}),
      translate({id: 'useCases.perkotaan.f3', message: 'Integrasi data demografi'})
    ],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-perkotaan)',
    glowColor: 'rgba(59, 130, 246, 0.6)'
  },
  pertanian: {
    icon: 'wheat',
    tabLabel: translate({id: 'useCases.pertanian.tab', message: 'Pertanian'}),
    title: translate({
      id: 'useCases.pertanian.title',
      message: 'Pertanian Presisi'
    }),
    description: translate({
      id: 'useCases.pertanian.description',
      message: 'Monitor kesehatan tanaman dan prediksi hasil panen dengan analisis multispektral. Deteksi stres tanaman, optimalkan irigasi, dan tingkatkan produktivitas pertanian dengan teknologi AI dan satelit.'
    }),
    features: [
      translate({id: 'useCases.pertanian.f1', message: 'Analisis NDVI real-time'}),
      translate({id: 'useCases.pertanian.f2', message: 'Prediksi hasil panen AI'}),
      translate({id: 'useCases.pertanian.f3', message: 'Rekomendasi irigasi otomatis'})
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-pertanian)',
    glowColor: 'rgba(245, 158, 11, 0.6)'
  },
  pesisir: {
    icon: 'waves',
    tabLabel: translate({id: 'useCases.pesisir.tab', message: 'Pesisir'}),
    title: translate({
      id: 'useCases.pesisir.title',
      message: 'Pengelolaan Pesisir'
    }),
    description: translate({
      id: 'useCases.pesisir.description',
      message: 'Pantau perubahan garis pantai dan kesehatan ekosistem laut. Deteksi abrasi, monitor terumbu karang, dan lindungi ekosistem pesisir dengan pemantauan satelit berkelanjutan.'
    }),
    features: [
      translate({id: 'useCases.pesisir.f1', message: 'Deteksi perubahan garis pantai'}),
      translate({id: 'useCases.pesisir.f2', message: 'Monitor kesehatan terumbu karang'}),
      translate({id: 'useCases.pesisir.f3', message: 'Analisis kualitas air laut'})
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-pesisir)',
    glowColor: 'rgba(6, 182, 212, 0.6)'
  },
  bencana: {
    icon: 'triangle-alert',
    tabLabel: translate({id: 'useCases.bencana.tab', message: 'Bencana'}),
    title: translate({
      id: 'useCases.bencana.title',
      message: 'Mitigasi Bencana'
    }),
    description: translate({
      id: 'useCases.bencana.description',
      message: 'Sistem peringatan dini dan penilaian kerusakan pasca-bencana. Monitor area rawan bencana, deteksi perubahan anomali, dan dukung respons cepat dengan data satelit real-time.'
    }),
    features: [
      translate({id: 'useCases.bencana.f1', message: 'Peringatan dini banjir & longsor'}),
      translate({id: 'useCases.bencana.f2', message: 'Penilaian kerusakan otomatis'}),
      translate({id: 'useCases.bencana.f3', message: 'Koordinasi respons darurat'})
    ],
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-bencana)',
    glowColor: 'rgba(239, 68, 68, 0.6)'
  },
  pertambangan: {
    icon: 'pickaxe',
    tabLabel: translate({id: 'useCases.pertambangan.tab', message: 'Tambang'}),
    title: translate({
      id: 'useCases.pertambangan.title',
      message: 'Pertambangan & Energi'
    }),
    description: translate({
      id: 'useCases.pertambangan.description',
      message: 'Pemantauan lokasi tambang dan kepatuhan lingkungan. Monitor aktivitas pertambangan, deteksi perubahan topografi, dan pastikan kepatuhan terhadap regulasi lingkungan dengan data satelit presisi.'
    }),
    features: [
      translate({id: 'useCases.pertambangan.f1', message: 'Monitor perubahan topografi'}),
      translate({id: 'useCases.pertambangan.f2', message: 'Deteksi aktivitas ilegal'}),
      translate({id: 'useCases.pertambangan.f3', message: 'Audit kepatuhan lingkungan'})
    ],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-pertambangan)',
    glowColor: 'rgba(139, 92, 246, 0.6)'
  }
};
