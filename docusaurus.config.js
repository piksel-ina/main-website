import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piksel",
  tagline:
    "Piksel brings together satellite imagery and cloud computing technology to enable digital earth observation across the Indonesian region",
  favicon: "img/ico-big.ico",
  url: "https://staging.pik-sel.id",
  baseUrl: "/",
  organizationName: "piksel-ina",
  projectName: "piksel-documentation",
  trailingSlash: false,

  onBrokenLinks: "warn",

  i18n: {
    defaultLocale: "id",
    locales: ["id", "en"],
    localeConfigs: {
      id: {
        label: "Id",
        direction: "ltr",
        htmlLang: "id-ID",
      },
      en: {
        label: "En",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/piksel-ina/piksel-documentation",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@500;700&family=JetBrains+Mono:wght@400&display=swap",
      type: "text/css",
    },
  ],

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: "img/piksel-logo.svg",
      navbar: {
        title: "",
        logo: {
          alt: "Logo Badan Informasi Geospasial",
          src: "img/logo-big.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "right",
            label: "Dokumentasi",
          },
          { href: "/#use-cases", label: "Pemanfaatan", position: "right" },
          { href: "/#services", label: "Layanan", position: "right" },
          { href: "/#faq", label: "FAQ", position: "right" },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Layanan",
            items: [
              {
                label: "Jelajah Data",
                to: "/docs/services/explorer",
              },
              {
                label: "Sandbox Analisis",
                to: "/docs/services/sandbox",
              },
              {
                label: "Peta Interaktif",
                to: "/docs/services/maps",
              },
              {
                label: "Layanan Web",
                to: "/docs/services/web-services",
              },
              {
                label: "Komputasi Awan",
                to: "/docs/services/cloud-computing",
              },
              {
                label: "Dukungan Teknis",
                to: "/docs/services/support",
              },
            ],
          },
          {
            title: "Contoh Pemanfaatan",
            items: [
              {
                label: "Pertanian",
                to: "/docs/usecase/agriculture",
              },
              {
                label: "Perkotaan",
                to: "/docs/usecase/urban",
              },
              {
                label: "Kehutanan",
                to: "/docs/usecase/forestry",
              },
              {
                label: "Pesisir",
                to: "/docs/usecase/coastal",
              },
              {
                label: "Bencana",
                to: "/docs/usecase/disaster",
              },
              {
                label: "Tambang",
                to: "/docs/usecase/mining",
              },
            ],
          },
          {
            title: "Referensi Lainnya",
            items: [
              {
                label: "Documentation",
                to: "/docs/about/intro",
              },
              {
                label: "API Reference",
                to: "/docs/api",
              },
              {
                label: "Tutorials",
                to: "/docs/tutorials",
              },

              {
                label: "Github",
                href: "https://github.com/piksel-ina",
              },
            ],
          },
          {
            title: "Kontak Kami",
            items: [
              {
                label: "Email: piksel@big.go.id",
                href: "mailto:piksel@big.go.id",
              },
              {
                label: "Phone: 021-8752062",
                href: "tel:+62218752062",
              },
              {
                label: "BIG Indonesia",
                href: "https://www.big.go.id",
              },
            ],
          },
        ],
        copyright: `
    <div class="footer__copyright-container">
      <img src="/img/logo-big.png" alt="Badan Informasi Geospasial" class="footer__logo" />
      <div class="footer__copyright-text">Copyright © ${new Date().getFullYear()} - Badan Informasi Geospasial</div>
      <div class="footer__address">
        Jl. Raya Jakarta - Bogor KM. 46 Cibinong 16911, Indonesia<br/>
        Tel: 021-8752062 ext.3608/3611/3103
      </div>
    </div>
  `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
