import { useState } from 'react';
import Link from '@docusaurus/Link';
import { servicesData } from '@site/src/data/servicesData';
import Coord from '@site/src/components/UI/Atoms/Coord';
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

const SVC_META = {
  '01': {
    capability: 'Browse & filter',
    interface: 'Web UI',
    prerequisite: 'None',
    access: 'Public',
    update: 'Daily indexing',
  },
  '02': {
    capability: 'Compute & prototype',
    interface: 'IDE (Jupyter)',
    prerequisite: 'Account',
    access: 'Login',
    update: 'Always current',
  },
  '03': {
    capability: 'Visualize & share',
    interface: 'Web / Embed',
    prerequisite: 'None',
    access: 'Public',
    update: 'Per new product',
  },
  '04': {
    capability: 'Query & stream',
    interface: 'API (REST)',
    prerequisite: 'None',
    access: 'Public',
    update: 'Daily indexing',
  },
  '05': {
    capability: 'Process at scale',
    interface: 'CLI / Dashboard',
    prerequisite: 'Partnership',
    access: 'By request',
    update: 'On schedule',
  },
  '06': {
    capability: 'Onboard & troubleshoot',
    interface: 'Email',
    prerequisite: 'None',
    access: 'Mon – Fri',
    update: '< 1 business day',
  },
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
  const meta = SVC_META[active];

  return (
    <section id="services" className={styles.artboard}>
      <div className={styles.inner}>
        <div className={styles.coords}>
          <Coord>SECTION · 01 / LAYANAN</Coord>
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
            Six interlocking services — pick one to see its surface,
            capabilities, and the endpoint you&apos;d call to use it in
            production.
          </p>
        </header>

        <div className={styles.inspector}>
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

          <div className={styles.panel}>
            <div className={styles.panel__bar}>
              <Coord>
                SVC · {svc.id} · {svc.en.toUpperCase()}
              </Coord>
              <span className={styles.panel__barStatus}>
                <span className={styles.panel__dot} aria-hidden="true" />
                {svc.status}
              </span>
            </div>

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

            <div className={styles.panel__foot}>
              <span className={styles.panel__footText}>
                ENDPOINT · {svc.endpoint}
              </span>
            </div>
          </div>

          <div className={styles.panel__viz}>
            <div className={styles.panel__vizInner}>
              <div className={styles.panel__vizMeta}>
                <dl className={styles.panel__vizMetaList}>
                  <div>
                    <dt>Capability</dt>
                    <dd>{meta.capability}</dd>
                  </div>
                  <div>
                    <dt>Interface</dt>
                    <dd>{meta.interface}</dd>
                  </div>
                  <div>
                    <dt>Prerequisite</dt>
                    <dd>{meta.prerequisite}</dd>
                  </div>
                  <div>
                    <dt>Access</dt>
                    <dd>{meta.access}</dd>
                  </div>
                  <div>
                    <dt>Update</dt>
                    <dd>{meta.update}</dd>
                  </div>
                </dl>
              </div>
              <div className={styles.panel__vizFrame}>
                {svc.image ? (
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={svc.image.srcset}
                      sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px"
                    />
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

        <div className={`${styles.coords} ${styles['coords--bottom']}`}>
          <Coord>06 SERVICES · CLICK ANY ROW TO INSPECT</Coord>
        </div>
      </div>
    </section>
  );
}
