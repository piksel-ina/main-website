import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { ChevronRight, ArrowRight, MoveRight } from 'lucide-react';
import styles from './styles.module.scss';

const defaultIcons = {
  primary: ChevronRight,
  hero: ChevronRight,
  secondary: ChevronRight,
  link: ArrowRight,
  viewAll: MoveRight,
};

const Button = ({
  label,
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  color,
  icon: Icon,
  iconPosition = 'right',
  showIcon = true,
  fullWidth = false,
  enableShine,
  enableExpand,
  className,
  wrapperClassName,
  ...props
}) => {
  const content = label || children || (variant === 'viewAll' ? 'View All' : 'Learn More');
  const Component = to || href ? Link : 'button';
  const ButtonIcon = Icon || defaultIcons[variant] || null;
  const style = color ? { ...props.style, '--button-color': color } : props.style;

  const showShine = enableShine !== undefined ? enableShine : variant === 'primary';
  const shouldExpand = enableExpand !== undefined ? enableExpand : variant === 'primary';

  const buttonElement = (
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

  if (variant === 'viewAll') {
    if (wrapperClassName !== undefined) {
      if (wrapperClassName === '') {
        return buttonElement;
      }
      return (
        <div className={clsx(styles.viewAll, wrapperClassName)}>
          {buttonElement}
        </div>
      );
    }
    return (
      <div className={styles.viewAll}>
        {buttonElement}
      </div>
    );
  }

  return buttonElement;
};

export default Button;
