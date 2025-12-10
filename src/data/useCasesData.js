import { translate } from "@docusaurus/Translate";
import { TreePine, Building2, Wheat, Waves, TriangleAlert, Pickaxe } from "lucide-react";

export const useCasesHeaderData = {
  tag: translate({
    id: "useCases.header.tag",
    message: "Solusi Kami",
    description: "Tag label for the use cases section",
  }),
  title: translate({
    id: "useCases.header.title",
    message: "Kasus Penggunaan Piksel",
    description: "Main title for the use cases section",
  }),
  subtitle: translate({
    id: "useCases.header.subtitle",
    message: "Solusi observasi bumi untuk berbagai sektor di Indonesia",
    description: "Subtitle description for the use cases section",
  }),
  learnMoreText: translate({
    id: "useCases.common.learnMore",
    message: "Pelajari Lebih Lanjut",
    description: "Button text to learn more about a specific use case",
  }),
  viewAllText: translate({
    id: "useCases.common.viewAll",
    message: "Lihat Semua Penggunaan",
    description: "Button text to view all use cases",
  }),
};

export const useCasesData = {
  useCase01: {
    icon: TreePine,
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
    icon: Building2,
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
    icon: Wheat,
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
    icon: Waves,
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
    icon: TriangleAlert,
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
    icon: Pickaxe,
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
