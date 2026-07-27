import { useState } from 'react';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {
  servicesData,
  servicesSectionHeader,
} from '@site/src/data/servicesData';
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
  const meta = svc.meta;

  return (
    <section id="services" className={styles.artboard}>
      <div className={styles.inner}>
        <div className={styles.coords}>
          <Coord>
            <Translate
              id="ourServices.coord.section"
              description="Top coordinate label for the services section"
            >
              BAGIAN · 01 / LAYANAN
            </Translate>
          </Coord>
        </div>

        <header className={styles.header}>
          <div>
            <span className="pk-eyebrow">{servicesSectionHeader.eyebrow}</span>
            <h2 className={styles.header__title}>
              {servicesSectionHeader.title}
            </h2>
          </div>
          <p className={styles.header__sub}>{servicesSectionHeader.sub}</p>
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
                  <span className={styles.list__name}>{s.title}</span>
                  <span className={styles.list__en}>{s.title_indonesia}</span>
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
                <Translate
                  id="ourServices.coord.svc"
                  values={{ id: svc.id, name: svc.title.toUpperCase() }}
                  description="Panel bar coordinate label with service id and name"
                >
                  {'LYN · {id} · {name}'}
                </Translate>
              </Coord>
              <span className={styles.panel__barStatus}>
                <span className={styles.panel__dot} aria-hidden="true" />
                {svc.status}
              </span>
            </div>

            <div className={styles.panel__copy}>
              <span className={styles.panel__num}>{svc.id}</span>
              <h3 className={styles.panel__title}>{svc.title}</h3>
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
                  <span>
                    <Translate
                      id="ourServices.cta.openService"
                      description="CTA button to open the service"
                    >
                      Open service
                    </Translate>
                  </span>
                  <InspectorArrow />
                </a>
                <Link
                  to={svc.link}
                  className={`${styles.btn} ${styles['btn--ghost']}`}
                >
                  <span>
                    <Translate
                      id="ourServices.cta.documentation"
                      description="CTA button to open the documentation"
                    >
                      Documentation
                    </Translate>
                  </span>
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
                    <dt>
                      <Translate
                        id="ourServices.meta.label.capability"
                        description="Meta label: capability"
                      >
                        Capability
                      </Translate>
                    </dt>
                    <dd>{meta.capability}</dd>
                  </div>
                  <div>
                    <dt>
                      <Translate
                        id="ourServices.meta.label.interface"
                        description="Meta label: interface"
                      >
                        Interface
                      </Translate>
                    </dt>
                    <dd>{meta.interface}</dd>
                  </div>
                  <div>
                    <dt>
                      <Translate
                        id="ourServices.meta.label.prerequisite"
                        description="Meta label: prerequisite"
                      >
                        Prerequisite
                      </Translate>
                    </dt>
                    <dd>{meta.prerequisite}</dd>
                  </div>
                  <div>
                    <dt>
                      <Translate
                        id="ourServices.meta.label.access"
                        description="Meta label: access"
                      >
                        Access
                      </Translate>
                    </dt>
                    <dd>{meta.access}</dd>
                  </div>
                  <div>
                    <dt>
                      <Translate
                        id="ourServices.meta.label.update"
                        description="Meta label: update"
                      >
                        Update
                      </Translate>
                    </dt>
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
          <Coord>
            <Translate
              id="ourServices.coord.hint"
              description="Bottom coordinate hint inviting users to click a service row"
            >
              LAYANAN · KLIK BARIS MANA SAJA UNTUK MENINJAU
            </Translate>
          </Coord>
        </div>
      </div>
    </section>
  );
}
