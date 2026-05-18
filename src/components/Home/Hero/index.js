import styles from './styles.module.scss';

import Button from '../../UI/Atoms/Button';
import { heroData } from '@site/src/data/heroData';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__contentWrapper}>
        <div className={styles.hero__content}>
          <span className={styles.hero__tag}>{heroData.eyebrow}</span>
          <h1 id="hero-title" className={styles.hero__title}>
            {heroData.title}
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
              return (
                <div key={index} className={styles.hero__statItem}>
                  <div className={styles.hero__statText}>
                    <div className={styles.hero__statRow}>
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
