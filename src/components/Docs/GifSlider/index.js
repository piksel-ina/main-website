import React, { useState, useCallback } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const FADE_MS = 220;

const GifSlider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  if (slides.length === 0) return null;

  const changeTo = useCallback(
    (index) => {
      if (fading || index === current) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(index);
        setFading(false);
      }, FADE_MS);
    },
    [fading, current]
  );

  const prev = () => changeTo((current - 1 + slides.length) % slides.length);
  const next = () => changeTo((current + 1) % slides.length);

  const currentSlide = slides[current];
  const currentSrc = useBaseUrl(currentSlide.src);

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrap}>
        <div
          className={`${styles.slider__viewport} ${fading ? styles['slider__viewport--fading'] : ''}`}
        >
          <img
            src={currentSrc}
            alt={currentSlide.alt || ''}
            className={styles.slider__image}
          />
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              className={`${styles.slider__arrow} ${styles['slider__arrow--prev']}`}
              onClick={prev}
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 1L1 9l8 8" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Next slide"
              className={`${styles.slider__arrow} ${styles['slider__arrow--next']}`}
              onClick={next}
            >
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 1l8 8-8 8" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className={styles.slider__bar}>
        <span className={styles.slider__counter}>
          {current + 1} / {slides.length}
        </span>
        <span className={styles.slider__caption}>
          {currentSlide.caption || currentSlide.alt || ''}
          {currentSlide.href && (
            <>
              {' · '}
              <Link to={currentSlide.href} className={styles.slider__link}>
                lihat detail
              </Link>
            </>
          )}
        </span>
        {slides.length > 1 && (
          <div className={styles.slider__dots}>
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                className={`${styles.slider__dot} ${index === current ? styles['slider__dot--active'] : ''}`}
                onClick={() => changeTo(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GifSlider;
