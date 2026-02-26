import React from 'react';
import styles from './styles.module.css';

import CTAButton from '../../UI/Atoms/CTAButton';
import { heroData } from "@site/src/data/heroData";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroImageContainer}>
        <picture>
          <source 
            srcSet={heroData.heroImage.sources.webp2x} 
            type="image/webp" 
            media="(min-width: 996px)" 
          /> 
          <source 
            srcSet={heroData.heroImage.sources.webp1x} 
            type="image/webp" 
          />
          <img 
            src={heroData.heroImage.fallback} 
            alt={heroData.heroImage.alt}
            className={styles.heroImage}
          />
        </picture>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>{heroData.tag}</span>
          <h1 className={styles.title}>{heroData.title}</h1>
          <p className={styles.subtitle}>
            {heroData.subtitle}
          </p>
          
          <div className={styles.heroActions}>
            <CTAButton
              to={heroData.ctaPrimary.link}
              label={heroData.ctaPrimary.text}
              variant="primary"
              iconPosition="left"
            />
            <CTAButton
              to={heroData.ctaSecondary.link}
              label={heroData.ctaSecondary.text}
              variant="secondary"
              showIcon={false}
            />
          </div>

          <div className={styles.statsRow}>
            {heroData.stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
