import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.scss';

export default function DocCard({ title, description, to }) {
  return (
    <Link to={to} className={styles.docCard}>
      <h3 className={styles.docCard__title}>{title}</h3>
      <p className={styles.docCard__description}>{description}</p>
    </Link>
  );
}
