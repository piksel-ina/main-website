import styles from './styles.module.scss';

import Button from '../../UI/Atoms/Button';
import { heroData } from '@site/src/data/heroData';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
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
          <h1 id="hero-title" className={styles.hero__title}>
            {heroData.title.replace(heroData.titleHighlight, '').trimEnd()}
            <span className={styles.hero__titleHighlight}>
              {' '}
              {heroData.titleHighlight}
            </span>
          </h1>
          <div className={styles.hero__divider} aria-hidden="true" />
          <p className={styles.hero__subtitle}>{heroData.subtitle}</p>

          <div className={styles.hero__actions}>
            <Button
              to={heroData.ctaPrimary.link}
              label={heroData.ctaPrimary.text}
              variant="primary"
            />
            <Button
              to={heroData.ctaSecondary.link}
              label={heroData.ctaSecondary.text}
              variant="ghost"
            />
          </div>

          <div className={styles.hero__statsRow}>
            {heroData.stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={styles.hero__statItem}>
                  <div className={styles.hero__statText}>
                    <div className={styles.hero__statRow}>
                      <Icon
                        strokeWidth={1.4}
                        className={styles.hero__statIcon}
                      />
                      <span className={styles.hero__statValue}>
                        {stat.value}
                      </span>
                    </div>
                    <span className={styles.hero__statLabel}>{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
