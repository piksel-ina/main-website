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
    message: "Contoh Pemanfaatan Piksel",
    description: "Main title for the use cases section",
  }),
  subtitle: translate({
    id: "useCases.header.subtitle",
    message: "Pemanfaatan data penginderaan jauh untuk mendukung pengambilan kebijakan berbasis bukti dan memperkuat ketahanan nasional di berbagai sektor strategis Indonesia.",
    description: "Subtitle description for the use cases section",
  }),
  learnMoreText: translate({
    id: "useCases.common.learnMore",
    message: "Pelajari Lebih Lanjut",
    description: "Button text to learn more about a specific use case",
  }),
  viewAllText: translate({
    id: "useCases.common.viewAll",
    message: "Lihat Semua Pemanfaatan",
    description: "Button text to view all use cases",
  }),
};

export const useCasesData = {
  useCase01: {
    icon: Wheat,
    tabLabel: translate({id: 'useCases.useCase03.tab', message: 'Pertanian'}),
    title: translate({
      id: 'useCases.useCase03.title',
      message: 'Kedaulatan Pangan'
    }),
    description: translate({
      id: 'useCases.useCase03.description',
      message: 'Mendukung ketahanan pangan nasional melalui pemantauan fase tanam padi dan kesehatan lahan baku sawah. Identifikasi daerah sentra produksi dan prediksi panen menggunakan analisis data satelit multitemporal.'
    }),
    features: [
      translate({id: 'useCases.useCase03.f1', message: 'Pemantauan Lahan Baku Sawah'}),
      translate({id: 'useCases.useCase03.f2', message: 'Analisis fase pertumbuhan padi'}),
      translate({id: 'useCases.useCase03.f3', message: 'Estimasi indeks pertanaman'})
    ],
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-brown)',
    glowColor: 'rgba(165, 112, 42, 0.2)'
  },
  useCase02: {
    icon: Building2,
    tabLabel: translate({id: 'useCases.useCase02.tab', message: 'Perkotaan'}),
    title: translate({
      id: 'useCases.useCase02.title',
      message: 'Perluasan Wilayah Urban'
    }),
    description: translate({
      id: 'useCases.useCase02.description',
      message: 'Analisis tren perluasan area terbangun (urban sprawl) untuk mendukung perencanaan wilayah. Pantau konversi lahan di pinggiran kota menggunakan data arsip satelit jangka panjang.'
    }),
    features: [
      translate({id: 'useCases.useCase02.f1', message: 'Pemetaan area terbangun'}),
      translate({id: 'useCases.useCase02.f2', message: 'Monitoring perubahan tata guna lahan'}),
      translate({id: 'useCases.useCase02.f3', message: 'Analisis tren pertumbuhan kota'})
    ],
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-blue)',
    glowColor: 'rgba(59, 130, 246, 0.2)'
  },
  useCase03: {
    icon: TreePine,
    tabLabel: translate({id: 'useCases.useCase01.tab', message: 'Kehutanan'}),
    title: translate({
      id: 'useCases.useCase01.title',
      message: 'Pemantauan Deforestasi'
    }),
    description: translate({
      id: 'useCases.useCase01.description',
      message: 'Deteksi perubahan tutupan hutan secara berkala menggunakan data optik (Sentinel-2, Landsat) dan radar (Sentinel-1). Identifikasi indikasi pembukaan lahan dan pantau pemulihan vegetasi di seluruh Indonesia.'
    }),
    features: [
      translate({id: 'useCases.useCase01.f1', message: 'Pemantauan tutupan lahan berkala'}),
      translate({id: 'useCases.useCase01.f2', message: 'Deteksi perubahan berbasis time-series'}),
      translate({id: 'useCases.useCase01.f3', message: 'Analisis historis data Landsat'})
    ],
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-green)',
    glowColor: 'rgba(16, 185, 129, 0.2)'
  },
  useCase04: {
    icon: Waves,
    tabLabel: translate({id: 'useCases.useCase04.tab', message: 'Pesisir'}),
    title: translate({
      id: 'useCases.useCase04.title',
      message: 'Dinamika Pesisir'
    }),
    description: translate({
      id: 'useCases.useCase04.description',
      message: 'Pantau perubahan garis pantai akibat abrasi atau akresi menggunakan data time-series Landsat. Identifikasi area genangan pasang surut (intertidal) untuk pengelolaan wilayah pesisir.'
    }),
    features: [
      translate({id: 'useCases.useCase04.f1', message: 'Deteksi perubahan garis pantai historis'}),
      translate({id: 'useCases.useCase04.f2', message: 'Pemetaan area pasang surut'}),
      translate({id: 'useCases.useCase04.f3', message: 'Klasifikasi penutup lahan pesisir'})
    ],
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-cyan)',
    glowColor: 'rgba(6, 182, 212, 0.2)'
  },
  useCase05: {
    icon: TriangleAlert,
    tabLabel: translate({id: 'useCases.useCase05.tab', message: 'Bencana'}),
    title: translate({
      id: 'useCases.useCase05.title',
      message: 'Pemetaan Area Banjir'
    }),
    description: translate({
      id: 'useCases.useCase05.description',
      message: 'Pemanfaatan data radar Sentinel-1 untuk mendeteksi genangan banjir, bahkan saat tertutup awan. Dukung respons cepat dengan penyediaan peta indikatif area terdampak.'
    }),
    features: [
      translate({id: 'useCases.useCase05.f1', message: 'Deteksi banjir berbasis SAR'}),
      translate({id: 'useCases.useCase05.f2', message: 'Pemantauan area terdampak'}),
      translate({id: 'useCases.useCase05.f3', message: 'Penyediaan data bebas awan'})
    ],
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-red)',
    glowColor: 'rgba(239, 68, 68, 0.2)'
  },
  useCase06: {
    icon: Pickaxe,
    tabLabel: translate({id: 'useCases.useCase06.tab', message: 'Tambang'}),
    title: translate({
      id: 'useCases.useCase06.title',
      message: 'Aktivitas Pertambangan'
    }),
    description: translate({
      id: 'useCases.useCase06.description',
      message: 'Pantau pembukaan lahan untuk area tambang terbuka secara berkala. Identifikasi perubahan bentang alam dan kolam tambang menggunakan kombinasi data optik dan radar.'
    }),
    features: [
      translate({id: 'useCases.useCase06.f1', message: 'Deteksi pembukaan lahan'}),
      translate({id: 'useCases.useCase06.f2', message: 'Identifikasi tubuh air tambang'}),
      translate({id: 'useCases.useCase06.f3', message: 'Pemantauan rehabilitasi lahan'})
    ],
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop',
    color: 'var(--piksel-color-amber)',
    glowColor: 'rgba(255, 159, 64, 0.2)'
  }
};
