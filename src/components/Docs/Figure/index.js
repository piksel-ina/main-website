import styles from './styles.module.scss';

const sizes = [1, 2, 3, 4, 5, 6];
const captionAlignments = ['left', 'center'];

const Figure = ({ alt, caption, captionAlign, size, src }) => {
  const selectedSize = sizes.includes(size) ? size : null;
  const selectedCaptionAlign = captionAlignments.includes(captionAlign)
    ? captionAlign
    : 'left';

  return (
    <div
      className={
        selectedSize
          ? `${styles.figure} ${styles[`figure--${selectedSize}`]}`
          : styles.figure
      }
    >
      <figure>
        <img className={styles.figure__image} src={src} alt={alt} />
        {caption && (
          <figcaption
            className={`${styles.figure__caption} ${styles[`figure__caption--${selectedCaptionAlign}`]}`}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
};

export default Figure;
