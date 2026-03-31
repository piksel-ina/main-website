import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

export default function ImageCard({ title, description, image, to }) {
  const isExternal = to && (to.startsWith('http') || to.startsWith('//'));
  
  return (
    <Link 
      to={to} 
      className={styles.imageCard}
      style={{ textDecoration: 'none' }}
    >
      <div className={styles.imageCard__imageContainer}>
        {image && <img src={image} alt={title} className={styles.imageCard__image} />}
        <div className={styles.imageCard__overlay} />
      </div>

      <div className={styles.imageCard__content}>
        <h3 className={styles.imageCard__title}>{title}</h3>
        <p className={styles.imageCard__description}>{description}</p>
        
        <div className={styles.imageCard__link}>
          {isExternal ? 'Visit Site' : 'Read More'}
          <span className={styles.imageCard__arrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
