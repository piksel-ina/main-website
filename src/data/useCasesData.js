import { translate } from '@docusaurus/Translate';

export const useCasesData = [
  {
    id: 'garis-pantai',
    num: '01',
    en: 'Coastline Change',
    title: translate({
      id: 'useCases.garisPantai.title',
      message: 'Perubahan Garis Pantai',
    }),
    desc: translate({
      id: 'useCases.garisPantai.desc',
      message:
        'Pantau perubahan garis pantai akibat abrasi dan akresi menggunakan data time-series Landsat sejak 1984. Identifikasi zona intertidal dan klasifikasi penutup lahan pesisir untuk mendukung pengelolaan wilayah pesisir terpadu.',
    }),
    sector: translate({ id: 'useCases.sector.pesisir', message: 'Pesisir' }),
    sensor: 'Landsat · Sentinel-2',
    cadence: 'Annual',
    product: 'Coastline Change Map',
    color: '#0891b2',
    image: '/img/usecases/garis-pantai.svg',
    imageAlt: translate({
      id: 'useCases.garisPantai.imageAlt',
      message: 'Ilustrasi garis pantai dan wilayah pesisir',
    }),
    link: '/docs/usecases/pesisir/perubahan-garis-pantai',
    stats: [
      { k: 'Method', v: 'Water Index · MNDWI' },
      { k: 'Input', v: 'Landsat SR · S2 L2A' },
      { k: 'Output', v: 'Vector · GeoTIFF' },
    ],
  },
  {
    id: 'banjir-aceh',
    num: '02',
    en: 'Aceh Flood Delineation',
    title: translate({
      id: 'useCases.banjirAceh.title',
      message: 'Delineasi Banjir Aceh',
    }),
    desc: translate({
      id: 'useCases.banjirAceh.desc',
      message:
        'Studi kasus delineasi area terdampak banjir di Aceh menggunakan data radar Sentinel-1. Pemetaan cepat mendukung tanggap darurat, distribusi bantuan, dan perencanaan pemulihan pasca-banjir.',
    }),
    sector: translate({ id: 'useCases.sector.bencana', message: 'Bencana' }),
    sensor: 'Sentinel-1',
    cadence: 'On-event',
    product: 'S1 Flood Extent',
    color: '#dc2626',
    image: '/img/usecases/banjir-aceh.svg',
    imageAlt: translate({
      id: 'useCases.banjirAceh.imageAlt',
      message: 'Ilustrasi genangan banjir pada lahan terbangun',
    }),
    link: '/docs/usecases/bencana/delineasi-banjir-aceh',
    stats: [
      { k: 'Method', v: 'SAR Thresholding' },
      { k: 'Input', v: 'S1 GRD 10 m' },
      { k: 'Output', v: 'GeoJSON · GeoTIFF' },
    ],
  },
  {
    id: 'sawah',
    num: '03',
    en: 'Rice Crop Monitoring',
    title: translate({ id: 'useCases.sawah.title', message: 'Pemantauan Sawah' }),
    desc: translate({
      id: 'useCases.sawah.desc',
      message:
        'Pemantauan fase tanam dan kesehatan lahan baku sawah menggunakan indeks vegetasi multitemporal. Mendukung identifikasi sentra produksi, pemantauan pola tanam, dan estimasi luas panen di tingkat kabupaten.',
    }),
    sector: translate({ id: 'useCases.sector.pangan', message: 'Pangan' }),
    sensor: 'Sentinel-2 · Landsat',
    cadence: 'Monthly',
    product: 'Sentinel-2 NDVI Composite',
    color: '#d97706',
    image: '/img/usecases/sawah.svg',
    imageAlt: translate({
      id: 'useCases.sawah.imageAlt',
      message: 'Ilustrasi petak sawah dari pandangan udara',
    }),
    link: '/docs/usecases/pangan/pemantauan-sawah',
    stats: [],
  },
  {
    id: 'tambang',
    num: '04',
    en: 'Mining Area Calculation',
    title: translate({
      id: 'useCases.tambang.title',
      message: 'Perhitungan Luas Area Pertambangan',
    }),
    desc: translate({
      id: 'useCases.tambang.desc',
      message:
        'Perhitungan luas area terbuka aktivitas pertambangan menggunakan kombinasi data optik dan radar. Mendukung pemantauan kepatuhan izin usaha dan estimasi lahan terganggu.',
    }),
    sector: translate({ id: 'useCases.sector.lahan', message: 'Lahan' }),
    sensor: 'Sentinel-2 · Landsat',
    cadence: 'Quarterly',
    product: 'Land Disturbance Map',
    color: '#a3622a',
    image: '/img/usecases/tambang.svg',
    imageAlt: translate({
      id: 'useCases.tambang.imageAlt',
      message: 'Ilustrasi tambang terbuka dengan teras konsentris',
    }),
    link: '/docs/usecases/lahan/perhitungan-luas-area-pertambangan',
    stats: [],
  },
  {
    id: 'danau',
    num: '05',
    en: 'Lake Monitoring',
    title: translate({
      id: 'useCases.danau.title',
      message: 'Pemantauan Kondisi Danau',
    }),
    desc: translate({
      id: 'useCases.danau.desc',
      message:
        'Pemantauan kualitas dan luas permukaan danau menggunakan citra multispektral. Analisis kekeruhan, klorofil-a, dan luas genangan mendukung pengelolaan sumber daya air dan deteksi dini eutrofikasi.',
    }),
    sector: translate({ id: 'useCases.sector.lingkungan', message: 'Lingkungan' }),
    sensor: 'Sentinel-2 · Landsat',
    cadence: 'Monthly',
    product: 'Water Quality Index',
    color: '#0e7490',
    image: '/img/usecases/danau.svg',
    imageAlt: translate({
      id: 'useCases.danau.imageAlt',
      message: 'Ilustrasi danau dari pandangan udara',
    }),
    link: '/docs/usecases/lingkungan/pemantauan-kondisi-danau',
    stats: [],
  },
  {
    id: 'mangrove',
    num: '06',
    en: 'Mangrove Classification with ML',
    title: translate({
      id: 'useCases.mangrove.title',
      message: 'Klasifikasi Mangrove dengan Machine Learning',
    }),
    desc: translate({
      id: 'useCases.mangrove.desc',
      message:
        'Klasifikasi ekosistem mangrove menggunakan algoritma machine learning pada citra multispektral. Menghasilkan peta habitat mangrove akurat untuk konservasi dan penilaian karbon biru.',
    }),
    sector: translate({ id: 'useCases.sector.pesisir', message: 'Pesisir' }),
    sensor: 'Sentinel-1 · Sentinel-2',
    cadence: 'Annual',
    product: 'Mangrove Habitat Map',
    color: '#2c9a58',
    image: '/img/usecases/mangrove.svg',
    imageAlt: translate({
      id: 'useCases.mangrove.imageAlt',
      message: 'Ilustrasi klasifikasi mangrove di pesisir',
    }),
    link: '/docs/usecases/pesisir/klasifikasi-mangrove-ml',
    stats: [],
  },
];
