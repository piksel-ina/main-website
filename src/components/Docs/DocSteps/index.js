import React, { Children } from 'react';
import styles from './styles.module.scss';

export const DocStep = ({ title, _index = 0, children }) => (
  <div className={styles.step}>
    <h3 className={styles.title}>
      <span className={styles.num}>{_index + 1}.</span> {title}
    </h3>
    <div className={styles.body}>{children}</div>
  </div>
);

const DocSteps = ({ children }) => (
  <div className={styles.root}>
    {Children.map(children, (child, i) =>
      child ? React.cloneElement(child, { _index: i }) : child,
    )}
  </div>
);

export default DocSteps;
