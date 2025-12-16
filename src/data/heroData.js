import { translate } from "@docusaurus/Translate";

export const heroData = {
  tag: translate({
    id: "homepage.hero.tag",
    message: "PIKSEL",
    description: "The tag on the homepage hero section",
  }),
  title: translate({
    id: "homepage.hero.title",
    message: "Dari Data Satelit hingga Keputusan yang Cerdas",
    description: "The main title on the homepage hero section",
  }),
  subtitle: translate({
    id: "homepage.hero.subtitle",
    message:
      "Satu platform lengkap untuk mengakses data satelit, menganalisis, memvisualisasikan, dan mengambil keputusan berbasis geospasial. Dari data hingga insight, semua dalam satu ekosistem cloud.",
    description: "The subtitle text on the homepage hero section",
  }),
  buttonText: translate({
    id: "homepage.hero.button",
    message: "Pelajari Selengkapnya",
    description: "The button text to read documentation",
  }),
  buttonLink: "/docs/usecase/intro",
  stats: [
    {
      number: translate({
        id: "homepage.hero.stats.01",
        message: "50TB+",
        description: "Statistics Number 01",
      }),
      label: translate({
        id: "homepage.hero.stats.01.label",
        message: "Total Data Tersedia",
        description: "Statistics Label 01",
      }),
    },
    {
      number: translate({
        id: "homepage.hero.stats.02",
        message: "100%",
        description: "Statistics Number 02",
      }),
      label: translate({
        id: "homepage.hero.stats.02.label",
        message: "Cakupan Wilayah Indonesia",
        description: "Statistics Label 02",
      }),
    },
    {
      number: translate({
        id: "homepage.hero.stats.03",
        message: "30+",
        description: "Statistics Number 03",
      }),
      label: translate({
        id: "homepage.hero.stats.03.label",
        message: "Tahun Data Historis",
        description: "Statistics Label 03",
      }),
    },
    {
      number: translate({
        id: "homepage.hero.stats.04",
        message: "Gratis",
        description: "Statistics Number 04",
      }),
      label: translate({
        id: "homepage.hero.stats.04.label",
        message: "Akses Terbuka untuk publik",
        description: "Statistics Label 04",
      }),
    },
  ],
  heroImage: {
    sources: {
      webp1x: require('@site/static/img/hero/hero-image-1x.webp').default,
      webp2x: require('@site/static/img/hero/hero-image.webp').default,
    },
    fallback: require('@site/static/img/hero/hero-image.png').default,
    alt: translate({
      id: "homepage.hero.image.alt",
      message: "Piksel Hero Image",
      description: "Alt text for the hero image",
    }),
  },
};
