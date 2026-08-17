import { translate } from '@docusaurus/Translate';

export const heroData = {
  eyebrow: translate({
    id: 'homepage.hero.eyebrow',
    message: 'Piksel',
    description: 'The eyebrow text above the hero title',
  }),
  titlePart1: translate({
    id: 'homepage.hero.titlePart1',
    message: 'Dari data satelit menjadi',
    description: 'First part of hero title before emphasis',
  }),
  titleEmphasis: translate({
    id: 'homepage.hero.titleEmphasis',
    message: 'informasi siap guna',
    description: 'Emphasized part of hero title styled italic+teal',
  }),
  titlePart2: translate({
    id: 'homepage.hero.titlePart2',
    message: 'untuk Indonesia.',
    description: 'Last part of hero title after emphasis',
  }),
  subtitle: translate({
    id: 'homepage.hero.subtitle',
    message:
      'Platform terbuka untuk menjelajahi dan menganalisis perubahan dengan data satelit siap analisis, tanpa perlu mengunduh atau menyiapkan data dari awal.',
    description: 'The subtitle text on the homepage hero section',
  }),
  slides: [
    {
      image: require('@site/static/img/hero/hero-satellite-02.webp').default,
      coords: {
        lat: translate({
          id: 'homepage.hero.slides.bromo.coords.lat',
          message: 'LAT 7,95142° LS',
          description: 'Latitude label for the Bromo hero slide',
        }),
        date: translate({
          id: 'homepage.hero.slides.bromo.coords.date',
          message: '2024',
          description: 'Year label for the Bromo hero slide',
        }),
        lon: translate({
          id: 'homepage.hero.slides.bromo.coords.lon',
          message: 'LON 112,94854° BT',
          description: 'Longitude label for the Bromo hero slide',
        }),
      },
      metadata: {
        product: translate({
          id: 'homepage.hero.slides.bromo.product',
          message: 'GeoMAD · Warna Alami',
          description: 'Product label for the Bromo hero slide',
        }),
        location: translate({
          id: 'homepage.hero.slides.bromo.location',
          message: 'Bromo Tengger Semeru, Indonesia',
          description: 'Location label for the Bromo hero slide',
        }),
      },
    },
    {
      image: require('@site/static/img/hero/hero-satellite-01.webp').default,
      coords: {
        lat: translate({
          id: 'homepage.hero.slides.toba.coords.lat',
          message: 'LAT 2,58197° LU',
          description: 'Latitude label for the Lake Toba hero slide',
        }),
        date: translate({
          id: 'homepage.hero.slides.toba.coords.date',
          message: '2025',
          description: 'Year label for the Lake Toba hero slide',
        }),
        lon: translate({
          id: 'homepage.hero.slides.toba.coords.lon',
          message: 'LON 98,80527° BT',
          description: 'Longitude label for the Lake Toba hero slide',
        }),
      },
      metadata: {
        product: translate({
          id: 'homepage.hero.slides.toba.product',
          message: 'BCMAD',
          description: 'Product label for the Lake Toba hero slide',
        }),
        location: translate({
          id: 'homepage.hero.slides.toba.location',
          message: 'Danau Toba, Indonesia',
          description: 'Location label for the Lake Toba hero slide',
        }),
      },
    },
  ],
  ctaPrimary: {
    text: translate({
      id: 'homepage.hero.cta.primary',
      message: 'Jadwalkan Demo',
      description: 'Primary CTA button text',
    }),
    link: '/docs/services/support/help-center/',
  },
  ctaSecondary: {
    text: translate({
      id: 'homepage.hero.cta.secondary',
      message: 'Kenali Piksel',
      description: 'Secondary CTA button text',
    }),
    link: '/docs/overview/',
  },
};
