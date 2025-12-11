import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.css';

const CTAButton = ({ 
  label, 
  children,
  to, 
  href, 
  onClick, 
  className,
  variant = 'primary', // 'primary' | 'secondary'
  color, // Optional color override
  icon: Icon,
  iconPosition = 'right', // 'left' | 'right'
  showIcon = true,
  fullWidth = false,
  enableShine, // Optional: defaults to true for primary
  enableExpand, // Optional: defaults to true for primary
  ...props 
}) => {
  const content = label || children || 'Learn More';
  const Component = to || href ? Link : 'button';
  
  // Determine icon to use
  const ButtonIcon = Icon || (variant === 'primary' ? ChevronRight : null);

  const style = color ? { '--button-color': color } : {};
  
  // Shine defaults to true for primary, false otherwise, unless explicitly set
  const showShine = enableShine !== undefined ? enableShine : variant === 'primary';

  // Expand defaults to true for primary, false otherwise, unless explicitly set
  const shouldExpand = enableExpand !== undefined ? enableExpand : variant === 'primary';

  return (
    <Component
      className={clsx(
        styles.button, 
        styles[variant],
        fullWidth && styles.fullWidth,
        shouldExpand && styles.expandOnHover,
        className
      )}
      onClick={onClick}
      to={to}
      href={href}
      style={style}
      {...props}
    >
      {showShine && <div className={styles.shine} />}
      
      {showIcon && ButtonIcon && iconPosition === 'left' && (
        <ButtonIcon className={styles.icon} />
      )}

      <span>{content}</span>
      
      {showIcon && ButtonIcon && iconPosition === 'right' && (
        <ButtonIcon className={styles.icon} />
      )}
    </Component>
  );
};

export default CTAButton;
