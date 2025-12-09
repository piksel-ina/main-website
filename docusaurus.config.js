import { themes as prismThemes } from "prism-react-renderer";

const config = {
  title: "Piksel",
  tagline:
    "Piksel brings together satellite imagery and cloud computing technology to enable digital earth observation across the Indonesian region",
  favicon: "img/piksel-logo.ico",
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
        label: "Indonesia",
        direction: "ltr",
        htmlLang: "id-ID",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/piksel-ina/piksel-documentation",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/piksel-ina/piksel-documentation",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        //language: "en",

        

      },
    ],
  ],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Oswald:wght@200;300;400;500;600;700&display=swap",
      type: "text/css",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
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

  themeConfig: {
    image: "img/piksel-logo.svg",

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: "piksel",
      logo: {
        alt: "Piksel Logo",
        src: "img/piksel-logo.svg",
      },
      items: [
        {
          label: "Penggunaan",
          position: "left",
          to: "/penggunaan",
          items: [
            { label: "Ketahanan Pangan", to: "/penggunaan/ketahanan-pangan" },
            //{ label: "Data Satelit untuk Pembangunan", to: "/penggunaan/data-satelit" },
            { label: "Kebencanaan", to: "/penggunaan/kebencanaan" },
            { label: "Penggunaan Lahan", to: "/penggunaan/penggunaan-lahan" },
            { label: "Pemantauan Lingkungan", to: "/penggunaan/pemantauan-lingkungan" },
            { label: "Pengelolaan Pesisir", to: "/penggunaan/pengelolaan-pesisir" },
          ],
        },

        {
          label: "Layanan",
          position: "left",
          to: "/layanan",
          items: [
            { label: "Peta", to: "/layanan/peta" },
            { label: "Analisis Spasial", to: "/layanan/analisis-spasial" },
            { label: "Piksel Data API", to: "/layanan/api" },
            { label: "Katalog Produk", to: "/layanan/katalog-produk" },
          ],
        },

        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Dokumentasi",
        },

        {
          label: "Tentang",
          position: "left",
          items: [
            { label: "Latar Belakang", to: "/tentang/latar-belakang" },
            { label: "Tujuan", to: "/tentang/tujuan" },
            { label: "Artikel", to: "/blog" },
            { label: "Kolaborasi", to: "/tentang/kolaborasi" },
            { label: "Kontributor", to: "/tentang/kontributor" },
            { label: "Kontak Kami", to: "/tentang/kontak" },
          ],
        },
{
          type: 'search',
          position: 'right', // ubah posisi search di sini
        },
        { type: "localeDropdown", position: "right" },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Penggunaan",
          items: [
            { label: "Ketahanan Pangan", to: "/penggunaan/ketahanan-pangan" },
            
            { label: "Kebencanaan", to: "/penggunaan/kebencanaan" },
            { label: "Penggunaan Lahan", to: "/penggunaan/penggunaan-lahan" },
            { label: "Pemantauan Lingkungan", to: "/penggunaan/pemantauan-lingkungan" },
            { label: "Pengelolaan Pesisir", to: "/penggunaan/pengelolaan-pesisir" },
          ],
        },

        {
          title: "Layanan",
          items: [
            { label: "Peta", to: "/layanan/peta" },
            { label: "Analisis Spasial", to: "/layanan/analisis-spasial" },
            { label: "Piksel Data API", to: "/layanan/api" },
            { label: "Katalog Produk", to: "/layanan/katalog-produk" },
          ],
        },

        {
          title: "Referensi Lainnya",
          items: [
            { label: "Dokumentasi", to: "/docs" },
            { label: "API Reference", to: "/docs/api" },
            { label: "Tutorial", to: "/docs/tutorials" },
            { label: "Artikel", to: "/blog" },
            { label: "Github", href: "https://github.com/piksel-ina" },
          ],
        },

        {
          title: "Kontak Kami",
          items: [{
                  label: "piksel@big.go.id",
                  href: "mailto:piksel@big.go.id",
                  className: "footer-email", // Tambahkan class
                  },
                  {
                    label: "021-8752062",
                    href: "tel:+62218752062",
                    className: "footer-phone", // Tambahkan class
                  },
                  {
                    label: "Badan Informasi Geospasial",
                    href: "https://www.big.go.id",
                    className: "footer-website", // Tambahkan class
                  },
                  {
                    label: "Jl. Raya Jakarta - Bogor KM. 46.\nCibinong 16911. Indonesia.",
                    href: "https://www.google.com/maps/place/-6.490857746585234,106.84939063522785",
                    className: "footer-location-wrapper", // Tambahkan class
                  }
          ],},
      ],

      copyright:
        `Copyright © ${new Date().getFullYear()} Piksel Indonesia - Badan Informasi Geospasial (BIG)`
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};



export default config;
