import { translate } from "@docusaurus/Translate";

export const servicesData = [
  {
    id: "01",
    title: translate({
      id: "ourServices.explorer.title",
      message: "Jelajah Data",
      description: "Service title: Data Explorer",
    }),
    description: translate({
      id: "ourServices.explorer.description",
      message: "Jelajahi dan akses data geospasial yang tersedia di platform kami secara bebas.",
    }),
    linkText: translate({
      id: "ourServices.explorer.btn",
      message: "Mulai Eksplorasi",
    }),
    link: "/docs/services/explorer",
    color: "#0891b2",
  },
  {
    id: "02",
    title: translate({
      id: "ourServices.sandbox.title",
      message: "Sandbox Analisis",
      description: "Service title: Analysis Sandbox",
    }),
    description: translate({
      id: "ourServices.sandbox.description",
      message: "Pelajari pengolahan data secara programatik. Lingkungan pelatihan untuk pengembangan analisis geospasial.",
    }),
    linkText: translate({
      id: "ourServices.sandbox.btn",
      message: "Mulai Belajar",
    }),
    link: "/docs/services/sandbox",
    color: "#7c3aed",
  },
  {
    id: "03",
    title: translate({
      id: "ourServices.maps.title",
      message: "Peta Interaktif",
      description: "Service title: Interactive Maps",
    }),
    description: translate({
      id: "ourServices.maps.description",
      message: "Interaksi langsung dengan peta digital untuk mendapatkan wawasan visual secara cepat.",
    }),
    linkText: translate({
      id: "ourServices.maps.btn",
      message: "Buka Peta",
    }),
    link: "/docs/services/maps",
    color: "#059669",
  },
  {
    id: "04",
    title: translate({
      id: "ourServices.webservices.title",
      message: "Layanan Web",
      description: "Service title: Web Services",
    }),
    description: translate({
      id: "ourServices.webservices.description",
      message: "Integrasikan data satelit langsung ke dalam aplikasi Anda melalui standar layanan web global.",
    }),
    linkText: translate({
      id: "ourServices.webservices.btn",
      message: "Lihat Dokumentasi",
    }),
    link: "/docs/services/web-services",
    color: "#2563eb",
  },
  {
    id: "05",
    title: translate({
      id: "ourServices.production.title",
      message: "Komputasi Awan",
      description: "Service title: Cloud Computing",
    }),
    description: translate({
      id: "ourServices.production.description",
      message: "Dukungan infrastruktur komputasi berkinerja tinggi untuk pemrosesan data skala nasional.",
    }),
    linkText: translate({
      id: "ourServices.production.btn",
      message: "Hubungi Kami",
    }),
    link: "/docs/services/cloud-computing",
    color: "#d97706",
  },
  {
    id: "06",
    title: translate({
      id: "ourServices.support.title",
      message: "Dukungan Teknis",
      description: "Service title: Technical Support",
    }),
    description: translate({
      id: "ourServices.support.description",
      message: "Bantuan teknis ahli untuk memastikan integrasi dan operasional sistem berjalan lancar.",
    }),
    linkText: translate({
      id: "ourServices.support.btn",
      message: "Hubungi Support",
    }),
    link: "/docs/services/support",
    color: "#dc2626",
  },
];

export const servicesSectionHeader = {
  eyebrow: translate({
    id: "ourServices.header.eyebrow",
    message: "Layanan Piksel",
    description: "Eyebrow label for the services section",
  }),
  title: translate({
    id: "ourServices.header.title",
    message: "Ekosistem Piksel",
    description: "Main title for the services section",
  }),
  sub: translate({
    id: "ourServices.header.sub",
    message:
      "Akses ekosistem data geospasial komprehensif untuk mendukung inovasi dan pengambilan keputusan strategis. Dari eksplorasi data terbuka hingga infrastruktur komputasi tingkat lanjut untuk kebutuhan nasional.",
    description: "Subtitle description for the services section",
  }),
};
