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
  images: [
    {
      type: 'local',
      alt: 'Hero Main',
      sources: {
        landscape: {
          src: require('@site/static/img/hero/Landscape_1x.webp').default,
          srcSet: `${require('@site/static/img/hero/Landscape_1x.webp').default} 1x, ${require('@site/static/img/hero/Landscape_2x.webp').default} 2x`
        },
        portrait: {
          src: require('@site/static/img/hero/Portrait_1x.webp').default,
          srcSet: `${require('@site/static/img/hero/Portrait_1x.webp').default} 1x, ${require('@site/static/img/hero/Portrait_2x.webp').default} 2x`
        }
      }
    },
    'https://images.unsplash.com/photo-1623200403279-26c414d90f9d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1712665535102-fddaf87dbc17?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ],
};
