import React from 'react';
import styles from './styles.module.scss';

export default function DocSteps({ children }) {
  return (
    <div className={styles.docSteps}>
      {React.Children.map(children, (child) => (
        <div className={styles.docSteps__step}>{child}</div>
      ))}
    </div>
  );
}
