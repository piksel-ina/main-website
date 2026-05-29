import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import InaDcMark from '@site/src/components/UI/Atoms/InaDcMark';
import Coord from '@site/src/components/UI/Atoms/Coord';
import styles from './styles.module.scss';

export default function Footer() {
  const { pathname } = useLocation();
  const { footer } = useThemeConfig();

  if (pathname.startsWith('/docs')) return null;

  const links = footer?.links ?? [];

  const description = translate({
    id: 'footer.brand.description',
    message:
      'An initiative by Badan Informasi Geospasial in collaboration with Geoscience Australia.',
    description: 'Footer brand description',
  });

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        {/* === TOP GRID === */}
        <div className={styles.footer__top}>
          {/* Brand column */}
          <div className={styles.footer__brand}>
            <InaDcMark size={48} color="#fff" />
            <div className={styles.footer__brandText}>
              <div className={styles.footer__wordmark}>Inadc</div>
              <div className={styles.footer__sub}>Indonesia Datacube</div>
            </div>
            <p className={styles.footer__desc}>{description}</p>
          </div>

          {/* Link columns from docusaurus.config.js */}
          {links.map((col, i) => (
            <div key={i} className={styles.footer__col}>
              <div className={styles.footer__colTitle}>{col.title}</div>
              <ul className={styles.footer__list}>
                {col.items.map((item, j) => (
                  <li key={j}>
                    {item.to ? (
                      <Link to={item.to} className={styles.footer__link}>
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className={styles.footer__link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* === BOTTOM BAR === */}
        <div className={styles.footer__bottom}>
          <img
            src="/img/logos/logo-big-360px-white.png"
            alt="Badan Informasi Geospasial"
            className={styles.footer__bigLogo}
          />
          <Coord className={styles.footer__copyright}>
            {translate({
              id: 'footer.copyright',
              message: `© ${new Date().getFullYear()} Badan Informasi Geospasial`,
              description: 'Footer copyright text',
            })}
          </Coord>
          <Coord className={styles.footer__address}>
            {translate({
              id: 'footer.address',
              message: 'Jl. Raya Jakarta–Bogor KM. 46 · Cibinong 16911 · ID',
              description: 'Footer address',
            })}
          </Coord>
        </div>
      </div>
    </footer>
  );
}
