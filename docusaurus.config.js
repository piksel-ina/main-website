import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Piksel',
  tagline:
    'Piksel brings together satellite imagery and cloud computing technology to enable digital earth observation across the Indonesian region',
  favicon: 'img/favicons/favicon.ico',
  url: 'https://staging.piksel.big.go.id',
  baseUrl: '/',
  organizationName: 'piksel-ina',
  projectName: 'piksel-documentation',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'id',
    locales: ['id', 'en'],
    localeConfigs: {
      id: {
        label: 'Id',
        direction: 'ltr',
        htmlLang: 'id-ID',
      },
      en: {
        label: 'En',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/piksel-ina/piksel-documentation',
        },

        blog: {
          showReadingTime: true,
          blogSidebarCount: 'ALL',
        },

        theme: {
          customCss: './src/css/custom.scss',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      type: 'text/css',
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicons/favicon-32x32.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicons/favicon-16x16.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicons/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/img/favicons/site.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msapplication-TileImage',
        content: '/img/favicons/mstile-150x150.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
  ],

  plugins: [
    function featuredBlogDataPlugin() {
      return {
        name: 'featured-blog-data',
        async allContentLoaded({ allContent, actions }) {
          const blogContent =
            allContent['docusaurus-plugin-content-blog']?.default;
          if (!blogContent?.blogPosts) {
            actions.setGlobalData({ featuredPosts: [] });
            return;
          }

          const featuredPosts = blogContent.blogPosts
            .filter((post) => post.metadata.frontMatter.featured === true)
            .sort(
              (a, b) => new Date(b.metadata.date) - new Date(a.metadata.date),
            )
            .slice(0, 6)
            .map((post) => ({
              title: post.metadata.title,
              slug: post.metadata.slug,
              permalink: post.metadata.permalink,
              image: post.metadata.frontMatter.image || null,
              description: post.metadata.description || '',
              authors: post.metadata.authors || [],
              date: post.metadata.date,
              readingTime: post.metadata.readingTime || null,
            }));

          actions.setGlobalData({ featuredPosts });
        },
      };
    },
    function scssPlugin() {
      return {
        name: 'scss-support',
        configureWebpack(config, isServer, utils) {
          const { getStyleLoaders } = utils;
          return {
            mergeStrategy: { 'module.rules': 'prepend' },
            module: {
              rules: [
                {
                  test: /\.module\.scss$/,
                  exclude: /node_modules/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: { exportOnlyLocals: isServer },
                      importLoaders: 1,
                    }),
                    {
                      loader: require.resolve('sass-loader'),
                      options: { api: 'modern-compiler', sourceMap: !isServer },
                    },
                  ],
                },
                {
                  test: /\.scss$/,
                  exclude: [/\.module\.scss$/, /node_modules/],
                  use: [
                    ...getStyleLoaders(isServer, { importLoaders: 1 }),
                    {
                      loader: require.resolve('sass-loader'),
                      options: { api: 'modern-compiler', sourceMap: !isServer },
                    },
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content:
          '⚠️ Situs ini adalah <strong>staging</strong> dan sedang dalam pengembangan. | This is a <strong>staging</strong> site currently under construction.',
        backgroundColor: '#fef3c7',
        textColor: '#1d1d1f',
        isCloseable: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: true,
        },
      },
      image: 'img/logos/logo-big-360px.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Logo Badan Informasi Geospasial',
          src: 'img/logos/logo-big-360px-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'right',
            label: 'Dokumentasi',
          },
          { href: '/#use-cases', label: 'Pemanfaatan', position: 'right' },
          { href: '/#services', label: 'Layanan', position: 'right' },
          { href: '/#news', label: 'Berita', position: 'right' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Layanan',
            items: [
              {
                label: 'Jelajah Data',
                to: '/docs/services/explorer/',
              },
              {
                label: 'Sandbox Analisis',
                to: '/docs/services/sandbox/',
              },
              {
                label: 'Peta Interaktif',
                to: '/docs/services/maps/',
              },
              {
                label: 'Layanan Web',
                to: '/docs/services/web-services/',
              },
              {
                label: 'Komputasi Awan',
                to: '/docs/services/cloud-computing/',
              },
              {
                label: 'Dukungan Teknis',
                to: '/docs/services/support/',
              },
            ],
          },
          {
            title: 'Contoh Pemanfaatan',
            items: [
              {
                label: 'Pertanian',
                to: '/docs/usecases/agriculture/',
              },
              {
                label: 'Perkotaan',
                to: '/docs/usecases/urban/',
              },
              {
                label: 'Kehutanan',
                to: '/docs/usecases/forestry/',
              },
              {
                label: 'Pesisir',
                to: '/docs/usecases/coastal/',
              },
              {
                label: 'Bencana',
                to: '/docs/usecases/disaster/',
              },
              {
                label: 'Tambang',
                to: '/docs/usecases/mining/',
              },
            ],
          },
          {
            title: 'Referensi Lainnya',
            items: [
              {
                label: 'Documentation',
                to: '/docs/overview',
              },
              {
                label: 'Github',
                href: 'https://github.com/piksel-ina',
              },
            ],
          },
          {
            title: 'Kontak Kami',
            items: [
              {
                label: 'Email: piksel@big.go.id',
                href: 'mailto:piksel@big.go.id',
              },
              {
                label: 'Phone: 021-8752062',
                href: 'tel:+62218752062',
              },
              {
                label: 'BIG Indonesia',
                href: 'https://www.big.go.id',
              },
            ],
          },
        ],
        copyright: `
    <div class="footer__copyright-container">
      <img src="/img/logos/logo-big-360px.png" alt="Badan Informasi Geospasial" class="footer__logo" />
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
