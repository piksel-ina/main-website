import clsx from 'clsx';
import styles from './styles.module.scss';

const Coord = ({ children, className, ...props }) => (
  <span className={clsx(styles.coord, className)} {...props}>
    {children}
  </span>
);

export default Coord;
