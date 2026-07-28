import React, { useState } from 'react';
import styles from './styles.module.scss';

const DownloadCard = ({ format, badge, description, useCase, size, href, icon }) => {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 2500);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__icon} aria-hidden="true">
          {icon}
        </div>
        <span className={`${styles.card__badge} ${styles[`card__badge--${badge}`]}`}>
          .{format}
        </span>
      </div>

      <div className={styles.card__body}>
        <p className={styles.card__desc}>{description}</p>
        <div className={styles.card__useCase}>
          <span className={styles.card__useCaseLabel}>Cocok untuk</span>
          <span className={styles.card__useCaseValue}>{useCase}</span>
        </div>
        {size && (
          <div className={styles.card__meta}>
            <span className={styles.card__metaLabel}>Ukuran</span>
            <span className={styles.card__metaValue}>{size}</span>
          </div>
        )}
      </div>

      <a
        href={href}
        className={`${styles.card__btn} ${downloading ? styles['card__btn--loading'] : ''}`}
        onClick={handleClick}
        download
      >
        {downloading ? (
          <>
            <span className={styles.card__spinner} aria-hidden="true" />
            Memulai unduhan...
          </>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4" />
              <path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2" />
            </svg>
            Unduh {format.toUpperCase()}
          </>
        )}
      </a>
    </div>
  );
};

export default DownloadCard;
