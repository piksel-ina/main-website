import { useState } from 'react';
import Link from '@docusaurus/Link';
import { servicesData } from '@site/src/data/servicesData';
import styles from './styles.module.scss';
import Preview01 from './previews/Preview01';
import Preview02 from './previews/Preview02';
import Preview03 from './previews/Preview03';
import Preview04 from './previews/Preview04';
import Preview05 from './previews/Preview05';
import Preview06 from './previews/Preview06';

const PREVIEWS = {
  '01': Preview01,
  '02': Preview02,
  '03': Preview03,
  '04': Preview04,
  '05': Preview05,
  '06': Preview06,
};

const VIZ_META = {
  '01': {
    product: 's2_geomad_annual',
    date: '1st January 2025',
    processed: '3 weeks ago',
    datasets: '1,615 datasets',
    area: '5,814,000 km² (approx.)',
    regions: '1,615 unique regions',
    crs: 'EPSG:6933',
  },
  '02': { product: 's2_l2a', date: '1st April 2025', processed: '1 day ago', datasets: '48,210 datasets', area: 'National coverage', regions: '34 provinces', crs: 'EPSG:4326' },
  '03': { product: 's2_geomad_annual', date: '20th May 2026', processed: '2 hours ago', datasets: 'Dataset comparison', left: 'Sentinel-2 SR 2016', right: 'Sentinel-2 SR 2025', regions: 'Central Sulawesi', crs: 'EPSG:4326' },
  '04': { product: 'stac_catalog_v1', date: '20th May 2026', processed: '6 hours ago', datasets: '210,000+ items', area: 'National coverage', regions: 'All provinces', crs: 'EPSG:4326' },
  '05': { product: 'geomad_idn_2026', date: '1st January 2026', processed: 'In progress', datasets: '48 tasks', area: 'National coverage', regions: '34 provinces', crs: 'EPSG:6933' },
  '06': { product: 'support_inbox', date: '20th May 2026', processed: '< 1 business day', datasets: '4 open tickets', area: 'All services', regions: 'All partners', crs: 'N/A' },
};

const InspectorArrow = ({ small = false }) => (
  <svg
    width={small ? 14 : 18}
    height={small ? 8 : 10}
    viewBox="0 0 18 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="0" y1="5" x2="13" y2="5" />
    <polyline points="8,1 13,5 8,9" />
  </svg>
);

export default function OurServices() {
  const [active, setActive] = useState('01');
  const svc = servicesData.find((s) => s.id === active);
  const Preview = PREVIEWS[active];
  const meta = VIZ_META[active];

  return (
    <section id="services" className={styles.artboard}>
      <div className={styles.coords}>
        <span className="pk-coord">SECTION · 01 / LAYANAN</span>
      </div>

      <header className={styles.header}>
        <div>
          <span className="pk-eyebrow">01 / Layanan Piksel</span>
          <h2 className={styles.header__title}>
            Inspect every <em>service</em>,
            <br />
            before you commit.
          </h2>
        </div>
        <p className={styles.header__sub}>
          Six interlocking services — pick one to see its surface, capabilities,
          and the endpoint you&apos;d call to use it in production.
        </p>
      </header>

      <div className={styles.inspector}>
        {/* LEFT — compact list */}
        <div className={styles.list}>
          {servicesData.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`${styles.list__row}${s.id === active ? ` ${styles['list__row--active']}` : ''}`}
              onClick={() => setActive(s.id)}
              aria-pressed={s.id === active}
            >
              <span className={styles.list__idx}>{s.id}</span>
              <span className={styles.list__labels}>
                <span className={styles.list__name}>{s.en}</span>
                <span className={styles.list__en}>{s.title}</span>
              </span>
              <span className={styles.list__chev} aria-hidden="true">
                {s.id === active ? '—' : '›'}
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT — inspector panel */}
        <div className={styles.panel}>
          <div className={styles.panel__bar}>
            <span className="pk-coord">
              SVC · {svc.id} · {svc.en.toUpperCase()}
            </span>
            <span className={styles.panel__barStatus}>
              <span className={styles.panel__dot} aria-hidden="true" />
              {svc.status}
            </span>
          </div>

          <div className={styles.panel__body}>
            <div className={styles.panel__copy}>
              <span className={styles.panel__num}>{svc.id}</span>
              <h3 className={styles.panel__title}>{svc.en}</h3>
              <span className={styles.panel__en}>{svc.title}</span>
              <p className={styles.panel__desc}>{svc.description}</p>

              <ul className={styles.panel__features}>
                {svc.features.map((f, i) => (
                  <li key={i}>
                    <span className={styles.panel__featureIdx}>F·0{i + 1}</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.panel__cta}>
                <a
                  href={`https://${svc.endpoint}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.btn} ${styles['btn--primary']}`}
                >
                  <span>Open service</span>
                  <InspectorArrow />
                </a>
                <Link
                  to={svc.link}
                  className={`${styles.btn} ${styles['btn--ghost']}`}
                >
                  <span>Documentation</span>
                  <InspectorArrow small />
                </Link>
              </div>
            </div>

            <div className={styles.panel__viz}>
              <div className={styles.panel__vizInner}>
                <div className={styles.panel__vizBar}>
                  <a
                    href={`https://${svc.endpoint}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.panel__vizEndpoint}
                  >
                    {svc.endpoint}
                  </a>
                  <span className={styles.panel__vizDots} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                {!svc.hideVizMeta && (
                <div className={styles.panel__vizMeta}>
                  <dl className={styles.panel__vizMetaList}>
                    <div><dt>Product</dt><dd>{meta.product}</dd></div>
                    <div><dt>Date</dt><dd>{meta.date}</dd></div>
                    <div><dt>Processed</dt><dd>{meta.processed}</dd></div>
                    <div><dt>{meta.left ? 'Visual' : 'Datasets'}</dt><dd>{meta.datasets || meta.left && 'Dataset comparison'}</dd></div>
                    {meta.left && <div><dt>Left</dt><dd>{meta.left}</dd></div>}
                    {meta.right && <div><dt>Right</dt><dd>{meta.right}</dd></div>}
                    {meta.area && <div><dt>Area</dt><dd>{meta.area}</dd></div>}
                    <div><dt>Regions</dt><dd>{meta.regions}</dd></div>
                    <div><dt>CRS</dt><dd>{meta.crs}</dd></div>
                  </dl>
                </div>
                )}
                <div className={`${styles.panel__vizFrame}${svc.hideVizMeta ? ` ${styles['panel__vizFrame--full']}` : ''}`}>
                  {svc.image ? (
                    <picture>
                      <source type="image/webp" srcSet={svc.image.srcset} sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px" />
                      <img
                        src={svc.image.src}
                        srcSet={svc.image.srcsetFallback}
                        sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px"
                        alt={svc.image.alt}
                        loading="lazy"
                        decoding="async"
                        className={styles.panel__vizImg}
                      />
                    </picture>
                  ) : (
                    <Preview />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.panel__foot}>
            <span className={styles.panel__footText}>
              ENDPOINT · {svc.endpoint}
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.coords} ${styles['coords--bottom']}`}>
        <span className="pk-coord">06 SERVICES · CLICK ANY ROW TO INSPECT</span>
      </div>
    </section>
  );
}
