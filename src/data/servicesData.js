import { translate } from "@docusaurus/Translate";
import { Search, Terminal, Map, Server, Cpu } from "lucide-react";

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
    color: "cyan",
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
    icon: Server,
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
