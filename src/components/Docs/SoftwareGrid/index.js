import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const IconGithub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ICONS = {
  code: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  notebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z" />
      <path d="M8 8h7M8 12h7M8 16h4" />
    </svg>
  ),
  workflow: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="3" width="6" height="4" rx="1" />
      <rect x="16" y="3" width="6" height="4" rx="1" />
      <rect x="9" y="10" width="6" height="4" rx="1" />
      <rect x="2" y="17" width="6" height="4" rx="1" />
      <rect x="16" y="17" width="6" height="4" rx="1" />
      <path d="M5 7v3a2 2 0 0 0 2 2h2M19 7v3a2 2 0 0 1-2 2h-2M12 14v3M5 17V14M19 17v-3" />
    </svg>
  ),
  cube: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  tides: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2" />
    </svg>
  ),
  predict: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
};

const SoftwareCard = ({ icon, name, description, href, linkLabel, variant = 'platform' }) => (
  <div className={`${styles.card} ${styles[`card--${variant}`]}`}>
    <div className={styles.card__icon} aria-hidden="true">
      {ICONS[icon] ?? ICONS.code}
    </div>
    <div className={styles.card__body}>
      <h4 className={styles.card__name}>{name}</h4>
      <p className={styles.card__desc}>{description}</p>
    </div>
    {href && (
      <Link
        to={href}
        className={styles.card__link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkLabel?.includes('github') ? <IconGithub /> : <IconExternal />}
        <span>{linkLabel ?? href}</span>
      </Link>
    )}
  </div>
);

const SoftwareGrid = ({ tools = [], libraries = [] }) => (
  <div className={styles.root}>
    {tools.length > 0 && (
      <section className={styles.group}>
        <div className={styles.group__label}>
          <span>Tools &amp; Platform</span>
        </div>
        <div className={styles.group__grid}>
          {tools.map((item) => (
            <SoftwareCard key={item.name} {...item} variant="platform" />
          ))}
        </div>
      </section>
    )}
    {libraries.length > 0 && (
      <section className={styles.group}>
        <div className={styles.group__label}>
          <span>Core Libraries</span>
        </div>
        <div className={styles.group__grid}>
          {libraries.map((item) => (
            <SoftwareCard key={item.name} {...item} variant="library" />
          ))}
        </div>
      </section>
    )}
  </div>
);

export default SoftwareGrid;
