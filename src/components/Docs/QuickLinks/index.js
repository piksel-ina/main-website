import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const icons = {
  map: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 4l-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  ),
  details: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  ),
  download: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
      <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
    </svg>
  ),
  notebook: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4z" />
      <path d="M8 8h7M8 12h7M8 16h4" />
    </svg>
  ),
  credits: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6" />
      <path d="M14 20c0-2.21 1.79-4 4-4s4 1.79 4 4" />
    </svg>
  ),
  github: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
};

const QuickLinks = ({ links = [] }) => {
  if (links.length === 0) return null;

  return (
    <div className={styles.quickLinks}>
      <div className={styles.quickLinks__label}></div>
      <div className={styles.quickLinks__grid}>
        {links.map(({ label, subtitle, href, icon, external }) => {
          const iconEl = icons[icon] || icons.details;
          return (
            <Link
              key={label}
              to={href}
              className={styles.quickLinks__item}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className={styles.quickLinks__icon}>{iconEl}</span>
              <span className={styles.quickLinks__body}>
                <span className={styles.quickLinks__text}>{label}</span>
                {subtitle && (
                  <span className={styles.quickLinks__subtitle}>{subtitle}</span>
                )}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
