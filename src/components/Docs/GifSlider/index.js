import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

const GifSlider = ({ slides = [] }) => {
  const [current, setCurrent] = useState(0);

  if (slides.length === 0) return null;

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const currentSlide = slides[current];

  return (
    <div className={styles.slider}>
      <div className={styles.slider__header} aria-hidden="true">
        <div className={styles.slider__dotRow}>
          <span className={styles.slider__chromeDot} />
          <span className={styles.slider__chromeDot} />
          <span className={styles.slider__chromeDot} />
        </div>
        <span className={styles.slider__title}>Dynamic Coastline</span>
        <div style={{ width: 42 }} />
      </div>

      <div className={styles.slider__stage}>
        <div className={styles.slider__viewport}>
          <img
            key={currentSlide.src}
            src={currentSlide.src}
            alt={currentSlide.alt || ''}
            className={styles.slider__image}
          />
        </div>

        {currentSlide.caption && (
          <div className={styles.slider__caption}>
            {currentSlide.caption}
            {currentSlide.href && (
              <>
                {' · '}
                <Link to={currentSlide.href} className={styles.slider__link}>
                  lihat detail
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        className={`${styles.slider__arrow} ${styles['slider__arrow--prev']}`}
        onClick={prev}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next slide"
        className={`${styles.slider__arrow} ${styles['slider__arrow--next']}`}
        onClick={next}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {slides.length > 1 && (
        <div className={styles.slider__dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              className={`${styles.slider__dot} ${index === current ? styles['slider__dot--active'] : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GifSlider;