import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const CoastlineHero = ({ previewImage, desc }) => {
  const imgSrc = useBaseUrl(previewImage);

  const defaultDesc =
    'Dataset garis pantai tahunan dan laju perubahan pesisir Indonesia sejak tahun 1987, ' +
    'yang diturunkan dari citra satelit Landsat melalui pemodelan pasang surut. ' +
    'Menyajikan rekam jejak historis untuk memantau dan mengukur dinamika pesisir secara kuantitatif dari waktu ke waktu.';

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
            {desc ?? defaultDesc}
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
