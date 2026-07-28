import React from 'react';
import styles from './styles.module.scss';

const LayerCard = ({ name, tag, description, attributes, color = 'primary', image, variant }) => {
  const colors = {
    primary: { bg: '#e8f4fd', accent: 'var(--pk-primary)', label: 'Garis Pantai' },
    erosi: { bg: '#fff5f5', accent: 'var(--pk-red)', label: 'Laju Perubahan' },
    hotspot: { bg: '#f5f0ff', accent: '#9c27b0', label: 'Hotspot' },
  };

  const c = colors[color] || colors.primary;
  const classes = [styles.card, variant ? styles[`card--${variant}`] : null]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} style={{ '--layer-color': c.accent, '--layer-bg': c.bg }}>
      {image && (
        <div className={styles.card__image}>
          <img src={image} alt={name} />
        </div>
      )}

      <div className={styles.card__body}>
        <div className={styles.card__header}>
          <span className={styles.card__tag}>{c.label}</span>
          <h4 className={styles.card__name}>{name}</h4>
        </div>

        <p className={styles.card__desc}>{description}</p>

        {attributes && attributes.length > 0 && (
          <div className={styles.card__attrs}>
            {attributes.map(({ key, value }) => (
              <div key={key} className={styles.card__attr}>
                <span className={styles.card__attrKey}>{key}</span>
                <span className={styles.card__attrValue}>{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LayerCard;
