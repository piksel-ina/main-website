import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

export default function DocCallout({ type = 'info', title, children }) {
  return (
    <div className={clsx(styles.docCallout, styles[`docCallout--${type}`])}>
      {title && <div className={styles.docCallout__title}>{title}</div>}
      <div className={styles.docCallout__content}>{children}</div>
    </div>
  );
}
