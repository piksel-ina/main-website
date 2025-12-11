import { translate } from "@docusaurus/Translate";
import { Search, Terminal, Map, Server, Cpu, LifeBuoy } from "lucide-react";

export const servicesData = [
  {
    id: "01",
    icon: Search,
    title: "JELAJAH DATA",
    description: translate({
      id: "ourServices.explorer.description",
      message: "Jelajahi dan akses data geospasial yang tersedia di platform kami secara bebas.",
    }),
    features: [
      translate({ id: "ourServices.explorer.f1", message: "Telusuri katalog data" }),
      translate({ id: "ourServices.explorer.f2", message: "Pratinjau visualisasi" }),
      translate({ id: "ourServices.explorer.f3", message: "Unduh dataset" }),
    ],
    buttonText: translate({ id: "ourServices.explorer.btn", message: "Mulai Eksplorasi" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/explorer",
    color: "cyan",
  },
  {
    id: "02",
    icon: Terminal,
    title: "SANDBOX ANALISIS",
    description: translate({
      id: "ourServices.sandbox.description",
      message: "Pelajari pengolahan data secara programatik. Lingkungan pelatihan untuk pengembangan analisis geospasial.",
    }),
    features: [
      translate({ id: "ourServices.sandbox.f1", message: "Lingkungan notebook siap pakai" }),
      translate({ id: "ourServices.sandbox.f2", message: "Kode sampel dan tutorial" }),
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
    title: "PETA INTERAKTIF",
    description: translate({
      id: "ourServices.maps.description",
      message: "Interaksi langsung dengan peta digital untuk mendapatkan wawasan visual secara cepat.",
    }),
    features: [
      translate({ id: "ourServices.maps.f1", message: "Antarmuka peta interaktif" }),
      translate({ id: "ourServices.maps.f2", message: "Analisis waktu nyata (real-time)" }),
      translate({ id: "ourServices.maps.f3", message: "Ekspor hasil analisis" }),
    ],
    buttonText: translate({ id: "ourServices.maps.btn", message: "Buka Peta" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/maps",
    color: "emerald",
  },
  {
    id: "04",
    icon: Server,
    title: "LAYANAN WEB",
    description: translate({
      id: "ourServices.webservices.description",
      message: "Integrasikan data satelit langsung ke dalam aplikasi Anda melalui standar layanan web global.",
    }),
    features: [
      translate({ id: "ourServices.webservices.f1", message: "Layanan WMS/WCS/WMTS" }),
      translate({ id: "ourServices.webservices.f2", message: "REST API" }),
      translate({ id: "ourServices.webservices.f3", message: "Dokumentasi teknis lengkap" }),
    ],
    buttonText: translate({ id: "ourServices.webservices.btn", message: "Lihat Dokumentasi" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/docs/api-integration",
    color: "blue",
  },
  {
    id: "05",
    icon: Cpu,
    title: "KOMPUTASI AWAN",
    description: translate({
      id: "ourServices.production.description",
      message: "Dukungan infrastruktur komputasi berkinerja tinggi untuk pemrosesan data skala nasional.",
    }),
    features: [
      translate({ id: "ourServices.production.f1", message: "Komputasi awan berbasis Kubernetes" }),
      translate({ id: "ourServices.production.f2", message: "Manajemen beban kerja otomatis" }),
      translate({ id: "ourServices.production.f3", message: "Efisiensi pemrosesan skala besar" }),
      translate({ id: "ourServices.production.f4", message: "Kolaborasi produksi nasional" }),
    ],
    buttonText: translate({ id: "ourServices.production.btn", message: "Hubungi Kami" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/contact",
    color: "amber",
  },
  {
    id: "06",
    icon: LifeBuoy,
    title: "DUKUNGAN TEKNIS",
    description: translate({
      id: "ourServices.support.description",
      message: "Bantuan teknis ahli untuk memastikan integrasi dan operasional sistem berjalan lancar.",
    }),
    features: [
      translate({ id: "ourServices.support.f1", message: "Konsultasi arsitektur sistem" }),
      translate({ id: "ourServices.support.f2", message: "Pemecahan masalah prioritas" }),
      translate({ id: "ourServices.support.f3", message: "Pelatihan dan workshop tim" }),
    ],
    buttonText: translate({ id: "ourServices.support.btn", message: "Hubungi Support" }),
    secondaryButtonText: translate({ id: "ourServices.common.learnMore", message: "Pelajari Lebih Lanjut" }),
    link: "/support",
    color: "red",
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
    message: "EKOSISTEM PIKSEL",
    description: "Main title for the services section"
  }),
  subtitle: translate({
    id: "ourServices.header.subtitle",
    message: "Akses ekosistem data geospasial komprehensif untuk mendukung inovasi dan pengambilan keputusan strategis. Dari eksplorasi data terbuka hingga infrastruktur komputasi tingkat lanjut untuk kebutuhan nasional.",
    description: "Subtitle description for the services section"
  })
};
