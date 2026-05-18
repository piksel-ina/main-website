import clsx from 'clsx';
import styles from './styles.module.scss';

const Tag = ({ children, variant = 'default', className, ...props }) => (
  <span
    className={clsx(
      styles.tag,
      variant !== 'default' && styles[`tag--${variant}`],
      className,
    )}
    {...props}
  >
    {variant !== 'default' && <span className={styles.tag__dot} />}
    {children}
  </span>
);

export default Tag;
