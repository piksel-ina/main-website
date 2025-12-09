import React from "react";
import styles from "./styles.module.css";

/**
 * ModernCard component - A reusable card with image overlay and hover effects
 * @param {string} image - Image URL for the card background
 * @param {string} title - Card title
 * @param {string} description - Card description text
 * @param {string} link - Link URL for the "Learn more" button
 */
function ModernCard({ image, title, description, link }) {
  const handleLearnMore = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className={`card shadow--md ${styles.modernCard}`}>
      {/* Background overlay */}
      <div className={styles.modernCardOverlay}></div>

      {/* Content Container */}
      <div className={`card__body ${styles.modernCardContent}`}>
        {/* Title at the top */}
        <h3 className={styles.modernCardTitle}>{title}</h3>

        {/* Image in the middle */}
        <div className={styles.modernCardImageContainer}>
          <img src={image} alt={title} className={styles.modernCardImage} />
        </div>

        {/* Bottom content */}
        <div className={styles.modernCardBottom}>
          <p className={styles.modernCardDescription}>{description}</p>
          <button
            onClick={handleLearnMore}
            className={`button button--link ${styles.modernCardButton}`}
            type="button"
          >
            Pelajari Selengkapnya
            <span className={styles.modernCardArrow}>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
