import React from "react";
import styles from "./styles.module.css";
import Button from "../../Atoms/Button";

/**
 * ModernCard component - A reusable card with image overlay and hover effects
 * @param {string} image - Image URL for the card background
 * @param {string} title - Card title
 * @param {string} description - Card description text
 * @param {string} link - Link URL for the "Learn more" button
 */
function ModernCard({ image, title, description, link }) {

  return (
    <div className={`card shadow--md ${styles.modernCard}`}>
      <div className={styles.modernCardImageContainer}>
        <img src={image} alt={title} className={styles.modernCardImage} />
        <div className={styles.modernCardOverlay}></div>
      </div>

      {/* Content Container */}
      <div className={`card__body ${styles.modernCardContent}`}>
        {/* Title at the top */}
        <h3 className={styles.modernCardTitle}>{title}</h3>

        {/* Bottom content */}
        <div className={styles.modernCardBottom}>
          <p className={styles.modernCardDescription}>{description}</p>
          <Button
            to={link}
            variant="link"
            className={styles.modernCardButton}
          >
            Learn more
            <span className={styles.modernCardArrow}>→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
