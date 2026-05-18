import clsx from 'clsx';
import Eyebrow from '../../Atoms/Eyebrow';
import styles from './styles.module.scss';

const SectionHeader = ({ eyebrow, title, sub, action, align = 'left' }) => {
  const isSplit = !!action;

  return (
    <div
      className={clsx(
        styles.sectionHeader,
        isSplit && styles['sectionHeader--split'],
        !isSplit && align === 'center' && styles['sectionHeader--center'],
      )}
    >
      <div className={styles.sectionHeader__content}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={styles.sectionHeader__title}>{title}</h2>
        {sub && <p className={styles.sectionHeader__sub}>{sub}</p>}
      </div>
      {action && <div className={styles.sectionHeader__action}>{action}</div>}
    </div>
  );
};

export default SectionHeader;
