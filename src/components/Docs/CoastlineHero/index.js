import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const CoastlineHero = ({ previewImage }) => {
  const imgSrc = useBaseUrl(previewImage);

  return (
    <div className={`${styles.hero} coastline-hero-wrap`}>
      <div className={styles.hero__bg} aria-hidden="true" />
      <div className={styles.hero__grid}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            <span className={styles.hero__titleMain}>Ina</span>
            <span className={styles.hero__titleSub}>Coastline</span>
          </h1>

          <p className={styles.hero__desc}>
            Dataset garis pantai tahunan dan laju perubahan pesisir Indonesia sejak 1987,
            diturunkan dari citra satelit Landsat melalui pemodelan pasang surut.
            Menyediakan catatan historis pesisir yang dapat diamati dan diukur secara kuantitatif dari waktu ke waktu.
          </p>
        </div>

        {previewImage ? (
          <div className={styles.hero__preview}>
            <img src={imgSrc} alt="Preview Ina Coastline" />
          </div>
        ) : (
          <div className={styles.hero__preview}>
            <span className={styles.hero__previewPlaceholder}>Preview Image</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoastlineHero;
