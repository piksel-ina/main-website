import { translate } from "@docusaurus/Translate";
import { statsData } from "@site/src/data/statsData";

export const heroData = {
  eyebrow: translate({
    id: "homepage.hero.eyebrow",
    message: "Indonesia Datacube · v2.4",
    description: "The eyebrow text above the hero title",
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
  coords: {
    lat: translate({
      id: "homepage.hero.coords.lat",
      message: "LAT -6.2088",
      description: "Latitude coordinate label in the hero",
    }),
    lon: translate({
      id: "homepage.hero.coords.lon",
      message: "LON 106.8456",
      description: "Longitude coordinate label in the hero",
    }),
    date: translate({
      id: "homepage.hero.coords.date",
      message: "2024-12-01",
      description: "Date label in the hero coordinate frame",
    }),
  },
  photoMeta: {
    sensor: translate({
      id: "homepage.hero.photoMeta.sensor",
      message: "Sentinel-2A · MSI · 10m",
      description: "Sensor metadata displayed on the hero photo",
    }),
    location: translate({
      id: "homepage.hero.photoMeta.location",
      message: "Jakarta, Indonesia",
      description: "Location metadata displayed on the hero photo",
    }),
  },
  ctaPrimary: {
    text: translate({
      id: "homepage.hero.cta.primary",
      message: "Request Demo",
      description: "Primary CTA button text",
    }),
    link: "mailto:hello@pik-sel.id",
  },
  ctaSecondary: {
    text: translate({
      id: "homepage.hero.cta.secondary",
      message: "Pahami Piksel",
      description: "Secondary CTA button text linking to FAQ section",
    }),
    link: "/#faq",
  },
  stats: statsData.stats.map((stat) => ({
    value: stat.value,
    label: stat.label,
  })),
  photo: require("@site/static/img/news/featured-01.webp").default,
};
