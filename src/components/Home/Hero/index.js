import React from 'react';
import styles from './styles.module.scss';

import CTAButton from '../../UI/Atoms/CTAButton';
import { heroData } from "@site/src/data/heroData";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__imageContainer}>
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
            className={styles.hero__image}
          />
        </picture>
      </div>

      <div className={styles.hero__contentWrapper}>
        <div className={styles.hero__content}>
          <span className={styles.hero__tag}>{heroData.tag}</span>
          <h1 className={styles.hero__title}>{heroData.title}</h1>
          <p className={styles.hero__subtitle}>
            {heroData.subtitle}
          </p>
          
          <div className={styles.hero__actions}>
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

          <div className={styles.hero__statsRow}>
            {heroData.stats.map((stat, index) => (
              <div key={index} className={styles.hero__statItem}>
                <span className={styles.hero__statValue}>{stat.value}</span>
                <span className={styles.hero__statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
