import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

import ShapeContainer from '../../UI/Atoms/ShapeContainer';
import { heroData } from "@site/src/data/heroData";

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <ShapeContainer variant="shard" color="primary" position="absolute" />
      <div className={styles.heroAmbientBg} />
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
