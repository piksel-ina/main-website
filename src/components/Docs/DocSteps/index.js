import React from 'react';
import styles from './styles.module.css';

export default function DocSteps({ children }) {
  return (
    <div className={styles.steps}>
      {React.Children.map(children, (child) => (
        <div className={styles.step}>{child}</div>
      ))}
    </div>
  );
}
