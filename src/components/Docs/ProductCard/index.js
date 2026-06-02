import { Fragment } from 'react';
import styles from './styles.module.scss';

const ProductCard = ({ productId, meta = [], tags = [], image, imageAlt }) => (
  <div className={styles.productCard}>
    <div className={styles.productCard__panel}>
      {productId && (
        <span className={styles.productCard__eyebrow}>{productId}</span>
      )}

      {meta.length > 0 && (
        <dl className={styles.productCard__meta}>
          {meta.map(({ label, value }) => (
            <Fragment key={label}>
              <dt className={styles.productCard__label}>{label}</dt>
              <dd className={styles.productCard__value}>{value}</dd>
            </Fragment>
          ))}
        </dl>
      )}

      {tags.length > 0 && (
        <div className={styles.productCard__tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.productCard__tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>

    {image && (
      <div className={styles.productCard__image}>
        <img src={image} alt={imageAlt} />
      </div>
    )}
  </div>
);

export default ProductCard;
