import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

/**
 * ImageCard Component
 * 
 * A stylish card component for MDX documentation.
 * Features an image background, title, and reveal-on-hover description.
 * 
 * @param {string} title - Card title
 * @param {string} description - Brief description
 * @param {string} image - Absolute path or URL to image
 * @param {string} to - Destination URL (internal or external)
 */
export default function ImageCard({ title, description, image, to }) {
  const isExternal = to && (to.startsWith('http') || to.startsWith('//'));
  
  return (
    <Link 
      to={to} 
      className={styles.imageCard}
      style={{ textDecoration: 'none' }} /* Remove default link underline */
    >
      <div className={styles.imageCardImageContainer}>
        {image && <img src={image} alt={title} className={styles.imageCardImage} />}
        <div className={styles.imageCardOverlay} />
      </div>

      <div className={styles.imageCardContent}>
        <h3 className={styles.imageCardTitle}>{title}</h3>
        <p className={styles.imageCardDescription}>{description}</p>
        
        <div className={styles.imageCardLink}>
          {isExternal ? 'Visit Site' : 'Read More'}
          <span className={styles.imageCardArrow}>→</span>
        </div>
      </div>
    </Link>
  );
}
