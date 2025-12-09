import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocCard({ title, description, to }) {
  return (
    <Link to={to} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}
