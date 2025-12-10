import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

import { heroData } from "@site/src/data/heroData";

const STATS = [
  { number: '50TB+', label: 'Data Processed Daily' },
  { number: '15min', label: 'Update Frequency' },
  { number: '99.8%', label: 'Accuracy Rate' },
  { number: '180+', label: 'Countries Covered' },
];

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.gridPattern} />
      <div className={clsx(styles.orb, styles.orb1)} />
      <div className={clsx(styles.orb, styles.orb2)} />
      <div className={styles.scanlines} />
      <div className={styles.imageCollage}>
        {heroData.images.map((item, idx) => {
          if (typeof item === 'object' && item.type === 'local') {
            return (
              <div key={idx} className={styles.imageItem}>
                <picture className={styles.adaptiveImage}>
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={item.sources.portrait.srcSet} 
                  />
                  <source 
                    media="(min-width: 769px)" 
                    srcSet={item.sources.landscape.srcSet} 
                  />
                  <img 
                    src={item.sources.landscape.src} 
                    alt={item.alt}
                    className={styles.adaptiveImgElement}
                  />
                </picture>
              </div>
            );
          }
          return (
            <div 
              key={idx} 
              className={styles.imageItem}
              style={{ backgroundImage: `url(${item})` }}
            />
          );
        })}
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>{heroData.tag}</span>
          <h1 className={styles.title}>{heroData.title}</h1>
          <p className={styles.subtitle}>
            {heroData.subtitle}
          </p>
          
          <div className={styles.heroStats}>
            {heroData.stats.map((stat, idx) => (
              <div key={idx} className={styles.heroStatItem}>
                <div className={styles.heroStatNumber}>{stat.number}</div>
                <div className={styles.heroStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
