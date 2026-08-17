import { useEffect, useState } from 'react';
import clsx from 'clsx';

import { heroData } from '@site/src/data/heroData';
import { statsData } from '@site/src/data/statsData';

import Button from '../../UI/Atoms/Button';
import Coord from '../../UI/Atoms/Coord';
import Eyebrow from '../../UI/Atoms/Eyebrow';
import styles from './styles.module.scss';

const MIN_SLIDES = 2;
const MAX_SLIDES = 5;
const SLIDE_DURATION = 6000;

const HeroSlideshow = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideCount = slides?.length ?? 0;

  useEffect(() => {
    const motionPreference = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    );
    let intervalId;

    const updateRotation = () => {
      window.clearInterval(intervalId);

      if (motionPreference.matches) {
        setActiveSlide(0);
        return;
      }

      intervalId = window.setInterval(() => {
        setActiveSlide((currentSlide) => (currentSlide + 1) % slideCount);
      }, SLIDE_DURATION);
    };

    updateRotation();
    motionPreference.addEventListener('change', updateRotation);

    return () => {
      window.clearInterval(intervalId);
      motionPreference.removeEventListener('change', updateRotation);
    };
  }, [slideCount]);

  if (slideCount < MIN_SLIDES || slideCount > MAX_SLIDES) {
    throw new RangeError(
      `Hero slideshow requires ${MIN_SLIDES}–${MAX_SLIDES} slides; received ${slideCount}.`,
    );
  }

  return (
    <div className={styles.hero__slides}>
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={clsx(styles.hero__slide, {
            [styles['hero__slide--active']]: index === activeSlide,
          })}
          aria-hidden={index !== activeSlide}
        >
          <img
            className={styles.hero__slideImage}
            src={slide.image}
            alt=""
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
          <div className={styles.hero__frame}>
            <Coord className={styles.hero__frameLabel}>
              {slide.coords.lat}
            </Coord>
            <Coord className={styles.hero__frameLabel}>
              {slide.coords.date}
            </Coord>
            <Coord className={styles.hero__frameLabel}>
              {slide.coords.lon}
            </Coord>
          </div>
          <div className={styles.hero__photoTag}>
            <Coord className={styles.hero__photoMeta}>
              {slide.metadata.product}
            </Coord>
            <Coord className={styles.hero__photoMeta}>
              {slide.metadata.location}
            </Coord>
          </div>
        </div>
      ))}
    </div>
  );
};

const Hero = () => (
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
        <Eyebrow className={styles.hero__eyebrow}>{heroData.eyebrow}</Eyebrow>
        <h1 id="hero-title" className={styles.hero__title}>
          {heroData.titlePart1}
          <br />
          <span className={styles.hero__titleEm}>{heroData.titleEmphasis}</span>
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
        <HeroSlideshow slides={heroData.slides} />
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

export default Hero;
