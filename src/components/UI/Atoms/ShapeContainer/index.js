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
  dotPattern = false, // Deprecated: use pattern="dot"
  pattern = null, // 'dot', 'grid'
  patternColor = 'primary',
  children,
  className,
  style 
}) => {
  // Backward compatibility
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
