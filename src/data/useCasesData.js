import { translate } from '@docusaurus/Translate';

export const useCasesData = [
  {
    id: 'banjir',
    num: '01',
    en: 'Flood-affected Area Identification',
    title: translate({
      id: 'useCases.banjir.title',
      message: 'Identifikasi Area Terdampak Banjir',
    }),
    desc: translate({
      id: 'useCases.banjir.desc',
      message:
        'Siklon tropis Senyar dengan hujan yang lebat telah melanda Asia Tenggara mulai November 2025. Citra radar Sentinel-1 digunakan untuk mendeteksi genangan banjir berdasarkan perubahan backscatter antara data sebelum banjir dan ketika banjir.',
    }),
    sector: translate({ id: 'useCases.sector.bencana', message: 'Bencana' }),
    sensor: 'Sentinel-1',
    cadence: 'On-event',
    product: 'S1 Flood Extent',
    color: '#dc2626',
    image: '/img/usecases/banjir-aceh.webp',
    imageAlt: translate({
      id: 'useCases.banjir.imageAlt',
      message: 'Peta area terdampak banjir Siklon Senyar',
    }),
    link: '/docs/usecases/bencana/identifikasi-area-terdampak-banjir',
    stats: [
      { k: 'Method', v: 'SAR Thresholding' },
      { k: 'Input', v: 'Sentinel-1' },
      { k: 'Output', v: 'Flood Extent Map' },
    ],
  },
  {
    id: 'garis-pantai',
    num: '02',
    en: 'Coastline Change',
    title: translate({
      id: 'useCases.garisPantai.title',
      message: 'Perubahan Garis Pantai',
    }),
    desc: translate({
      id: 'useCases.garisPantai.desc',
      message:
        'Analisis perubahan garis pantai menggunakan citra Landsat multitemporal dan model pasang surut, dengan studi kasus di Pantai Utara Jakarta.',
    }),
    sector: translate({ id: 'useCases.sector.pesisir', message: 'Pesisir' }),
    sensor: 'Landsat 5 · 7 · 8 · 9',
    cadence: 'Annual',
    product: 'Coastline Change Map',
    color: '#0891b2',
    image: '/img/usecases/garis-pantai.webp',
    imageAlt: translate({
      id: 'useCases.garisPantai.imageAlt',
      message: 'Peta perubahan garis pantai Utara Jakarta',
    }),
    link: '/docs/usecases/pesisir/perubahan-garis-pantai',
    stats: [
      { k: 'Method', v: 'Multi-temporal Analysis' },
      { k: 'Input', v: 'Landsat 5 · 7 · 8 · 9' },
      { k: 'Output', v: 'Coastline Change Map' },
    ],
  },
  {
    id: 'padi',
    num: '03',
    en: 'Rice Planting Monitoring',
    title: translate({
      id: 'useCases.padi.title',
      message: 'Monitoring Penanaman Padi',
    }),
    desc: translate({
      id: 'useCases.padi.desc',
      message:
        'Pemanfaatan data Sentinel-2 untuk memantau pertumbuhan padi tahunan menggunakan indeks NDVI, LSWI, EVI, dan NDRE, menghasilkan peta fenologi, estimasi panen, serta dashboard pemantauan di Telagasari.',
    }),
    sector: translate({ id: 'useCases.sector.pangan', message: 'Pangan' }),
    sensor: 'Sentinel-2',
    cadence: 'Monthly',
    product: 'Crop Yield Prediction',
    color: '#d97706',
    image: '/img/usecases/padi.webp',
    imageAlt: translate({
      id: 'useCases.padi.imageAlt',
      message: 'Dashboard pemantauan penanaman padi di Telagasari',
    }),
    link: '/docs/usecases/pangan/monitoring-penanaman-padi',
    stats: [],
  },
  {
    id: 'tambang',
    num: '04',
    en: 'Mining Area Calculation',
    title: translate({
      id: 'useCases.tambang.title',
      message: 'Menghitung Luas Area Pertambangan',
    }),
    desc: translate({
      id: 'useCases.tambang.desc',
      message:
        'Penggunaan metode Bare Soil Index (BSI) untuk menghitung luas area pertambangan nikel di Pulau Gag, Raja Ampat, berdasarkan identifikasi tanah terbuka.',
    }),
    sector: translate({ id: 'useCases.sector.lahan', message: 'Lahan' }),
    sensor: 'Sentinel-2',
    cadence: 'Quarterly',
    product: 'Mining Area Map',
    color: '#a3622a',
    image: '/img/usecases/tambang.webp',
    imageAlt: translate({
      id: 'useCases.tambang.imageAlt',
      message: 'Peta luas area pertambangan nikel di Pulau Gag',
    }),
    link: '/docs/usecases/lahan/menghitung-luas-area-pertambangan',
    stats: [],
  },
  {
    id: 'mangrove',
    num: '05',
    en: 'Mangrove Classification with ML',
    title: translate({
      id: 'useCases.mangrove.title',
      message: 'Klasifikasi Mangrove dengan Machine Learning',
    }),
    desc: translate({
      id: 'useCases.mangrove.desc',
      message:
        'Penggunaan data Sentinel-2 dan metode Random Forest untuk delineasi mangrove melalui indeks spektral, dengan studi kasus di selatan Kota Denpasar, Bali.',
    }),
    sector: translate({ id: 'useCases.sector.pesisir', message: 'Pesisir' }),
    sensor: 'Sentinel-2',
    cadence: 'Annual',
    product: 'Mangrove Habitat Map',
    color: '#2c9a58',
    image: '/img/usecases/mangrove.webp',
    imageAlt: translate({
      id: 'useCases.mangrove.imageAlt',
      message: 'Peta klasifikasi mangrove di selatan Kota Denpasar',
    }),
    link: '/docs/usecases/pesisir/klasifikasi-mangrove-dengan-machine-learning',
    stats: [],
  },
  {
    id: 'pltp',
    num: '06',
    en: 'PLTP Surface Temperature Monitoring',
    title: translate({
      id: 'useCases.pltp.title',
      message: 'Monitoring Suhu Permukaan di Area PLTP',
    }),
    desc: translate({
      id: 'useCases.pltp.desc',
      message:
        'Penggunaan NDVI dan Land Surface Temperature (LST) untuk menganalisis suhu permukaan serta aktivitas PLTP, dengan studi kasus di Kamojang, Jawa Barat.',
    }),
    sector: translate({ id: 'useCases.sector.lingkungan', message: 'Lingkungan' }),
    sensor: 'Landsat 9',
    cadence: 'Monthly',
    product: 'Land Surface Temperature (LST)',
    color: '#c2410c',
    image: '/img/usecases/lst.webp',
    imageAlt: translate({
      id: 'useCases.pltp.imageAlt',
      message: 'Peta Land Surface Temperature area PLTP Kamojang',
    }),
    link: '/docs/usecases/lingkungan/monitoring-suhu-permukaan-pltp',
    stats: [],
  },
];
