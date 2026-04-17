import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const Step = ({ children }) => (
  <li className={clsx(styles.step, styles.number)}>
    <div className={styles.content}>{children}</div>
  </li>
);

const DocSteps = ({ children }) => {
  return (
    <ol className={styles.root}>
      {React.Children.map(children, (child) => {
        if (child?.type === Step) return child;
        return (
          <li className={clsx(styles.step, styles.number)}>
            <div className={styles.content}>{child}</div>
          </li>
        );
      })}
    </ol>
  );
};

export { Step };
export default DocSteps;
