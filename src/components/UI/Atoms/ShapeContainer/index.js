import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * ShapeContainer Component
 * Used to add geometric background accents (Clip Path) to sections.
 * 
 * @param {string} variant - 'slanted', 'cut-corner', 'shard'
 * @param {string} color - 'primary', 'accent', 'neutral' (default: neutral (light gray))
 * @param {string} position - 'absolute' (default)
 * @param {boolean} flip - Flip the shape horizontally
 */
const ShapeContainer = ({ 
  variant = 'slanted', 
  color = 'neutral',
  position = 'absolute',
  flip = false,
  className,
  style 
}) => {
  return (
    <div 
      className={clsx(
        styles.shape,
        styles[`shape--${variant}`],
        styles[`shape--color-${color}`],
        flip && styles['shape--flip'],
        position === 'absolute' && styles['shape--absolute'],
        className
      )}
      style={style}
      aria-hidden="true"
    />
  );
};

export default ShapeContainer;
