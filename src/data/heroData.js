import { translate } from "@docusaurus/Translate";
import { statsData } from "@site/src/data/statsData";

export const heroData = {
  eyebrow: translate({
    id: "homepage.hero.eyebrow",
    message: "Indonesia Datacube · v2.4",
    description: "The eyebrow text above the hero title",
  }),
  titlePart1: translate({
    id: "homepage.hero.titlePart1",
    message: "Dari orbit hingga",
    description: "First part of hero title before emphasis",
  }),
  titleEmphasis: translate({
    id: "homepage.hero.titleEmphasis",
    message: "insight yang dapat ditindaklanjuti",
    description: "Emphasized part of hero title styled italic+teal",
  }),
  titlePart2: translate({
    id: "homepage.hero.titlePart2",
    message: "untuk seluruh Indonesia.",
    description: "Last part of hero title after emphasis",
  }),
  subtitle: translate({
    id: "homepage.hero.subtitle",
    message:
      "Satu platform terbuka yang menghimpun puluhan tahun citra satelit siap analisis bersama komputasi awan elastis. Jelajahi, analisis, dan putuskan — tanpa keluar dari data.",
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
      message: "Jelajahi Data",
      description: "Secondary CTA button text",
    }),
    link: "/#faq",
  },
  photo: require("@site/static/img/news/featured-01.webp").default,
};
