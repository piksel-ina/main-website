import styles from './styles.module.scss';

import Button from '../../UI/Atoms/Button';
import Eyebrow from '../../UI/Atoms/Eyebrow';
import Coord from '../../UI/Atoms/Coord';
import { heroData } from '@site/src/data/heroData';
import { statsData } from '@site/src/data/statsData';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__bg} aria-hidden="true">
        <svg className={styles.hero__grid} aria-hidden="true">
          <defs>
            <pattern
              id="heroGrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M80 0H0V80"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className={styles.hero__inner}>
        <div className={styles.hero__copy}>
          <Eyebrow>{heroData.eyebrow}</Eyebrow>
          <h1 id="hero-title" className={styles.hero__title}>
            {heroData.titlePart1}
            <br />
            <span className={styles.hero__titleEm}>
              {heroData.titleEmphasis}
            </span>
            <br />
            {heroData.titlePart2}
          </h1>
          <p className={styles.hero__sub}>{heroData.subtitle}</p>
          <div className={styles.hero__actions}>
            <Button
              to={heroData.ctaPrimary.link}
              label={heroData.ctaPrimary.text}
              variant="primary"
            />
            <Button
              to={heroData.ctaSecondary.link}
              label={heroData.ctaSecondary.text}
              variant="on-dark"
            />
          </div>
        </div>

        <div className={styles.hero__photo}>
          <div className={styles.hero__frame} aria-hidden="true">
            <Coord className={styles.hero__frameLabel}>
              {heroData.coords.lat}
            </Coord>
            <Coord className={styles.hero__frameLabel}>
              {heroData.coords.date}
            </Coord>
            <Coord className={styles.hero__frameLabel}>
              {heroData.coords.lon}
            </Coord>
          </div>
          <img src={heroData.photo} alt="" />
          <div className={styles.hero__photoTag}>
            <Coord className={styles.hero__photoMeta}>
              {heroData.photoMeta.sensor}
            </Coord>
            <Coord className={styles.hero__photoMeta}>
              {heroData.photoMeta.location}
            </Coord>
          </div>
        </div>
      </div>

      <div className={styles.hero__stats}>
        <div className={styles.hero__statsGrid}>
          {statsData.stats.map((stat) => (
            <div key={stat.id} className={styles.hero__stat}>
              <Coord>{stat.id}</Coord>
              <div className={styles.hero__statValue}>{stat.value}</div>
              <div className={styles.hero__statDesc}>{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
