import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

/**
 * ShapeContainer Component
 * Used to add geometric background accents (Clip Path) and patterns to sections.
 * 
 * @param {string} variant - 'slanted', 'cut-corner', 'shard'
 * @param {string} color - 'primary', 'accent', 'neutral' (default: neutral (light gray))
 * @param {string} position - 'absolute' (default)
 * @param {boolean} flip - Flip the shape horizontally
 * @param {boolean} dotPattern - Add subtle dot pattern overlay
 * @param {string} patternColor - Color for dot pattern ('primary', 'secondary', 'custom')
 */
const ShapeContainer = ({ 
  variant = 'slanted', 
  color = 'neutral',
  position = 'absolute',
  flip = false,
  dotPattern = false,
  patternColor = 'primary',
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
        dotPattern && styles['shape--dotPattern'],
        dotPattern && styles[`shape--dotPattern-${patternColor}`],
        className
      )}
      style={style}
      aria-hidden="true"
    />
  );
};

export default ShapeContainer;
