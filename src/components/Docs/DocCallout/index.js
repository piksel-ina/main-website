import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

export default function DocCallout({ type = 'info', title, children }) {
  return (
    <div className={clsx(styles.callout, styles[type])}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
