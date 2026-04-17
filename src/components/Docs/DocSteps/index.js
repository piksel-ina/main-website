import React from 'react';
import styles from './styles.module.scss';

const Step = ({ children }) => <li className={styles.step}>{children}</li>;

const DocSteps = ({ children }) => {
  return (
    <ol className={styles.root}>
      {React.Children.map(children, (child) => {
        if (child?.type === Step) return child;
        return <li className={styles.step}>{child}</li>;
      })}
    </ol>
  );
};

export { Step };
export default DocSteps;
