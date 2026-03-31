import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

const ShapeContainer = ({ 
  variant = 'slanted', 
  color = 'neutral',
  position = 'absolute',
  flip = false,
  dotPattern = false,
  pattern = null,
  patternColor = 'primary',
  children,
  className,
  style 
}) => {
  const activePattern = pattern || (dotPattern ? 'dot' : null);

  return (
    <div 
      className={clsx(
        styles.shape,
        styles[`shape--${variant}`],
        styles[`shape--color-${color}`],
        flip && styles['shape--flip'],
        position === 'absolute' && styles['shape--absolute'],
        activePattern === 'dot' && styles['shape--dotPattern'],
        activePattern === 'dot' && styles[`shape--dotPattern-${patternColor}`],
        activePattern === 'grid' && styles['shape--pattern-grid'],
        className
      )}
      style={style}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

export default ShapeContainer;
