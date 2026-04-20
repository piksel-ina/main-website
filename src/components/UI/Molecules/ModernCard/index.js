import { translate } from '@docusaurus/Translate';
import styles from './styles.module.scss';
import Button from '../../Atoms/Button';

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
      <div className={styles.modernCard__imageContainer}>
        <img src={image} alt={title} className={styles.modernCard__image} />
        <div className={styles.modernCard__overlay}></div>
      </div>

      {/* Content Container */}
      <div className={`card__body ${styles.modernCard__content}`}>
        {/* Title at the top */}
        <h3 className={styles.modernCard__title}>{title}</h3>

        {/* Bottom content */}
        <div className={styles.modernCard__bottom}>
          <p className={styles.modernCard__description}>{description}</p>
          <Button
            to={link}
            variant="link"
            className={styles.modernCard__button}
          >
            {translate({
              id: 'ui.modernCard.learnMore',
              message: 'Learn more',
            })}
            <span className={styles.modernCard__arrow}>→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ModernCard;
