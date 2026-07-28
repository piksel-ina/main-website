import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import DownloadCard from '@site/src/components/Docs/DownloadCard';
import styles from './coastline.module.scss';

const iconDatabase = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
    <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
  </svg>
);

const iconTile = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="8" height="8" rx="1" />
    <rect x="13" y="3" width="8" height="8" rx="1" />
    <rect x="3" y="13" width="8" height="8" rx="1" />
    <rect x="13" y="13" width="8" height="8" rx="1" />
  </svg>
);

const downloads = [
  {
    format: 'gpkg',
    badge: 'gpkg',
    icon: iconDatabase,
    description:
      'GeoPackage berisi seluruh layer vektor Ina Coastline: garis pantai tahunan, titik laju perubahan, dan hotspot perubahan pesisir untuk wilayah Pulau Jawa.',
    useCase: 'QGIS, ArcGIS, GeoPandas, analisis GIS desktop',
    size: null,
    href: 'https://piksel-staging-public-data.s3.ap-southeast-3.amazonaws.com/ls_coastlines/coastlines_0.0.5.Java-Island-V3.gpkg',
  },
  {
    format: 'pmtiles',
    badge: 'pmtiles',
    icon: iconTile,
    description:
      'Format tile vektor tunggal yang dioptimalkan untuk rendering web. Cocok untuk integrasi langsung ke aplikasi peta berbasis browser tanpa server tile terpisah.',
    useCase: 'MapLibre GL JS, Protomaps, aplikasi web mapping',
    size: null,
    href: 'https://piksel-staging-public-data.s3.ap-southeast-3.amazonaws.com/ls_coastlines/coastlines_0.0.5.Java-Island-V3.pmtiles',
  },
];

const CoastlineDownloadPage = () => (
  <Layout
    title="Unduh Data — Ina Coastline"
    description="Unduh dataset vektor Ina Coastline dalam format GeoPackage (.gpkg) dan PMTiles untuk analisis GIS dan integrasi web mapping."
  >
    <main className={styles.page}>
      <div className={styles.page__bg} aria-hidden="true" />

      <div className={styles.container}>

        {/* === BREADCRUMB === */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/docs/category/data-laut-dan-pesisir" className={styles.breadcrumb__link}>
            Data Laut &amp; Pesisir
          </Link>
          <span className={styles.breadcrumb__sep} aria-hidden="true">/</span>
          <Link to="/docs/data_products/sea_ocean_coast/coastline" className={styles.breadcrumb__link}>
            Ina Coastline
          </Link>
          <span className={styles.breadcrumb__sep} aria-hidden="true">/</span>
          <span className={styles.breadcrumb__current}>Unduh Data</span>
        </nav>

        {/* === HEADER === */}
        <header className={styles.header}>
          <div className={styles.header__eyebrow}>
            <span className={styles.header__tag}>Ina Coastline</span>
            <span className={styles.header__version}>v0.0.5</span>
            <span className={styles.header__region}>Pulau Jawa</span>
          </div>
          <h1 className={styles.header__title}>Unduh Dataset</h1>
          <p className={styles.header__desc}>
            Dataset vektor garis pantai tahunan dan laju perubahan pesisir Indonesia,
            tersedia dalam dua format sesuai kebutuhan analisis Anda.
          </p>
        </header>

        {/* === NOTICE === */}
        <div className={styles.notice}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
          <p>
            Dataset ini dirilis di bawah lisensi{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.notice__link}
            >
              Creative Commons Attribution 4.0 International (CC BY 4.0)
            </a>
            . Cantumkan atribusi saat menggunakan data ini dalam publikasi atau produk turunan.
          </p>
        </div>

        {/* === DOWNLOAD CARDS === */}
        <section className={styles.cards} aria-label="Pilihan format unduhan">
          {downloads.map((item) => (
            <DownloadCard key={item.format} {...item} />
          ))}
        </section>

        {/* === INSTRUCTIONS === */}
        <section className={styles.instructions}>

          <div className={styles.instructions__block}>
            <h2 className={styles.instructions__title}>Format yang Tersedia</h2>
            <ul className={styles.instructions__list}>
              <li>
                <span className={styles.instructions__badge}>GeoPackage (.gpkg)</span>
                {' '}— Direkomendasikan. Cocok untuk QGIS dan GeoPandas; satu file berisi semua layer dengan simbologi bawaan untuk memudahkan interpretasi.
              </li>
              <li>
                <span className={styles.instructions__badge}>PMTiles (.pmtiles)</span>
                {' '}— Format tile vektor tunggal untuk integrasi web. Cocok untuk MapLibre GL JS, Protomaps, dan aplikasi peta berbasis browser.
              </li>
            </ul>
          </div>

          <div className={styles.instructions__block}>
            <h2 className={styles.instructions__title}>Cara Mengunduh</h2>
            <ol className={styles.instructions__list}>
              <li>Klik tombol <strong>Unduh GPKG</strong> atau <strong>Unduh PMTILES</strong> pada kartu format di atas.</li>
              <li>File akan langsung diunduh ke komputer Anda. Pastikan koneksi internet stabil karena ukuran file dapat cukup besar.</li>
              <li>Setelah selesai, file siap dibuka langsung — tidak perlu diekstrak.</li>
            </ol>
          </div>

          <div className={styles.instructions__block}>
            <h2 className={styles.instructions__title}>Memuat GeoPackage di QGIS</h2>
            <ol className={styles.instructions__list}>
              <li>
                Seret dan lepas file <code className={styles.instructions__code}>coastlines_*.gpkg</code> ke jendela peta QGIS, atau buka melalui{' '}
                <strong>Layer</strong> &gt; <strong>Tambah Layer</strong> &gt; <strong>Tambah Layer Vektor</strong>.
              </li>
              <li>
                Saat muncul dialog <strong>Pilih Layer Vektor yang Akan Ditambahkan</strong>, pilih semua layer lalu klik <strong>OK</strong>.
              </li>
              <li>
                Layer Ina Coastline akan dimuat dengan simbologi bawaan. Secara default, layer beralih tampilan otomatis berdasarkan tingkat zoom peta.
                Untuk menonaktifkan ini: klik kanan layer di panel Layers, pilih <strong>Set Layer Scale Visibility</strong>, lalu hilangkan centang pada <strong>Scale visibility</strong>.
              </li>
            </ol>
          </div>

          <div className={styles.instructions__block}>
            <h2 className={styles.instructions__title}>Menggunakan PMTiles di Aplikasi Web</h2>
            <ol className={styles.instructions__list}>
              <li>
                Muat file <code className={styles.instructions__code}>coastlines_*.pmtiles</code> secara lokal atau host di server menggunakan library{' '}
                <a href="https://protomaps.com/docs/pmtiles" target="_blank" rel="noopener noreferrer" className={styles.instructions__link}>
                  Protomaps
                </a>.
              </li>
              <li>
                Integrasikan dengan MapLibre GL JS menggunakan plugin{' '}
                <code className={styles.instructions__code}>@protomaps/maplibre</code> untuk rendering tile vektor langsung di browser.
              </li>
              <li>
                Tidak diperlukan server tile terpisah — satu file PMTiles sudah mencakup semua zoom level dan layer.
              </li>
            </ol>
          </div>

        </section>

        {/* === FOOTER LINKS === */}
        <footer className={styles.footer}>
          <Link to="/docs/data_products/sea_ocean_coast/coastline" className={styles.footer__link}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Kembali ke dokumentasi
          </Link>
          <a
            href="https://github.com/piksel-ina/indonesia-coastlines"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footer__link}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            Repositori GitHub
          </a>
        </footer>

      </div>
    </main>
  </Layout>
);

export default CoastlineDownloadPage;
