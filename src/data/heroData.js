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
  ctaPrimary: {
    text: translate({
      id: "homepage.hero.cta.primary",
      message: "Request Demo",
      description: "Primary CTA button text",
    }),
    link: "#cta",
  },
  ctaSecondary: {
    text: translate({
      id: "homepage.hero.cta.secondary",
      message: "Read More",
      description: "Secondary CTA button text",
    }),
    link: "/docs/usecase/intro",
  },
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
