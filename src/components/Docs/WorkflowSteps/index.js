import React, { Children } from 'react';
import styles from './styles.module.scss';

const PHASE_COLORS = {
  input: 'input',
  water: 'water',
  tidal: 'tidal',
  composite: 'composite',
  extraction: 'extraction',
  analysis: 'analysis',
};

export const WorkflowStep = ({ label, phase = 'input', _index = 0, children }) => (
  <div className={styles.step}>
    <div className={styles.step__connector}>
      <div className={`${styles.step__badge} ${styles[`step__badge--${PHASE_COLORS[phase] ?? 'input'}`]}`}>
        <span className={styles.step__num}>{String(_index + 1).padStart(2, '0')}</span>
      </div>
      <div className={styles.step__line} aria-hidden="true" />
    </div>
    <div className={styles.step__content}>
      <div className={`${styles.step__header} ${styles[`step__header--${PHASE_COLORS[phase] ?? 'input'}`]}`}>
        <span className={styles.step__label}>{label}</span>
      </div>
      <div className={styles.step__body}>{children}</div>
    </div>
  </div>
);

const WorkflowSteps = ({ children }) => (
  <div className={styles.root}>
    {Children.map(children, (child, i) =>
      child ? React.cloneElement(child, { _index: i }) : child,
    )}
  </div>
);

export default WorkflowSteps;
