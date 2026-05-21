import Link from '@docusaurus/Link';
import { useCasesData } from '@site/src/data/useCasesData';
import UseCaseEO from './UseCaseEO';
import styles from './styles.module.scss';

const TileArrow = () => (
  <svg width="24" height="12" viewBox="0 0 24 12" fill="none"
       stroke="currentColor" strokeWidth="1.2"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="0" y1="6" x2="20" y2="6" />
    <polyline points="16,2 20,6 16,10" />
  </svg>
);

const SectionArrow = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
       stroke="currentColor" strokeWidth="1.5"
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="11" x2="11" y2="3" />
    <polyline points="5,3 11,3 11,9" />
  </svg>
);

const MosaicTile = ({ uc, featured = false }) => (
  <Link
    to={uc.link}
    className={`${styles.tile}${featured ? ` ${styles['tile--feat']}` : ''}`}
    style={{ '--uc-color': uc.color }}
  >
    <div className={styles.tile__media}>
      <UseCaseEO id={uc.id} featured={featured} />
      <div className={`${styles.tile__corner} ${styles['tile__corner--tl']}`}>
        <span>UC · {uc.num}</span>
      </div>
      <div className={`${styles.tile__corner} ${styles['tile__corner--tr']}`}>
        <span className={styles.tile__dot} />
        <span>{uc.sensor}</span>
      </div>
      <div className={`${styles.tile__corner} ${styles['tile__corner--bl']}`}>
        <span>{uc.cadence}</span>
      </div>
    </div>

    <div className={styles.tile__body}>
      <div className={styles.tile__sector}>
        <span>{uc.sector}</span>
        <span className={styles.tile__sectorLine} />
      </div>

      <h3 className={styles.tile__title}>{uc.en}</h3>
      <p className={styles.tile__desc}>{uc.desc}</p>

      {featured && uc.stats && (
        <div className={styles.tile__stats}>
          {uc.stats.map((s, i) => (
            <div key={i} className={styles.tile__stat}>
              <span className={styles.tile__statK}>{s.k}</span>
              <span className={styles.tile__statV}>{s.v}</span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.tile__foot}>
        <span className={styles.tile__product}>{uc.product}</span>
        <span className={styles.tile__cta}>
          Pelajari <TileArrow />
        </span>
      </div>
    </div>
  </Link>
);

export default function UseCases() {
  const [featuredA, featuredB, ...standard] = useCasesData;

  return (
    <section id="use-cases" className={styles.artboard}>
      <div className={styles.coords}>
        <span className="pk-coord">SECTION · 02 / PEMANFAATAN</span>
      </div>

      <header className={styles.header}>
        <div>
          <span className="pk-eyebrow">02 / Pemanfaatan</span>
          <h2 className={styles.header__title}>
            Where Piksel
            <br />
            is being <em>put to work</em>.
          </h2>
        </div>
        <p className={styles.header__sub}>
          Six operational use cases — each tile carries the actual EO product
          output, the sensor stack behind it, and the cadence it ships at.
        </p>
      </header>

      <div className={styles.mosaic}>
        <div className={styles.mosaic__featured}>
          <MosaicTile uc={featuredA} featured />
          <MosaicTile uc={featuredB} featured />
        </div>
        <div className={styles.mosaic__standard}>
          {standard.map((uc) => (
            <MosaicTile key={uc.id} uc={uc} />
          ))}
        </div>
      </div>

      <div className={`${styles.coords} ${styles['coords--bottom']}`}>
        <span className="pk-coord">DATACUBE · INDONESIA · OPEN ACCESS</span>
        <Link to="/docs/category/kasus-penggunaan" className={`pk-coord ${styles.coords__link}`}>
          LIHAT SEMUA PEMANFAATAN <SectionArrow />
        </Link>
      </div>
    </section>
  );
}
