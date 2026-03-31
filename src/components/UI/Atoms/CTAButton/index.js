import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.scss';

const CTAButton = ({ 
  label, 
  children,
  to, 
  href, 
  onClick, 
  className,
  variant = 'primary',
  color,
  icon: Icon,
  iconPosition = 'right',
  showIcon = true,
  fullWidth = false,
  enableShine,
  enableExpand,
  ...props 
}) => {
  const content = label || children || 'Learn More';
  const Component = to || href ? Link : 'button';
  
  const ButtonIcon = Icon || (variant === 'primary' ? ChevronRight : null);

  const style = color ? { '--button-color': color } : {};
  
  const showShine = enableShine !== undefined ? enableShine : variant === 'primary';
  const shouldExpand = enableExpand !== undefined ? enableExpand : variant === 'primary';

  return (
    <Component
      className={clsx(
        styles.button, 
        styles[`button--${variant}`],
        fullWidth && styles['button--fullWidth'],
        shouldExpand && styles['button--expandOnHover'],
        className
      )}
      onClick={onClick}
      to={to}
      href={href}
      style={style}
      {...props}
    >
      {showShine && <div className={styles['button__shine']} />}
      
      {showIcon && ButtonIcon && iconPosition === 'left' && (
        <ButtonIcon className={styles['button__icon']} />
      )}

      <span>{content}</span>
      
      {showIcon && ButtonIcon && iconPosition === 'right' && (
        <ButtonIcon className={styles['button__icon']} />
      )}
    </Component>
  );
};

export default CTAButton;
