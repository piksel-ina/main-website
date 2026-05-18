import clsx from 'clsx';
import styles from './styles.module.scss';

const Eyebrow = ({ children, tone = 'teal', className, ...props }) => (
  <span
    className={clsx(
      styles.eyebrow,
      tone === 'ink' && styles['eyebrow--ink'],
      className,
    )}
    {...props}
  >
    {children}
  </span>
);

export default Eyebrow;
