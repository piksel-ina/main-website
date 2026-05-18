import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { ChevronRight } from 'lucide-react';
import styles from './styles.module.scss';

const Button = ({
  label,
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size,
  color,
  showIcon = true,
  fullWidth = false,
  className,
  ...props
}) => {
  const content =
    label ||
    children ||
    translate({ id: 'ui.button.defaultLabel', message: 'Learn More' });
  const Component = to || href ? Link : 'button';
  const style = color
    ? { ...props.style, '--button-color': color }
    : props.style;
  const isGhost = variant === 'ghost';
  const renderIcon = showIcon && !isGhost;

  return (
    <Component
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        size === 'sm' && styles['button--sm'],
        fullWidth && styles['button--fullWidth'],
        className,
      )}
      onClick={onClick}
      to={to}
      href={href}
      style={style}
      {...(!(to || href) && { type: 'button' })}
      {...props}
    >
      {renderIcon && (
        <ChevronRight className={styles.button__icon} aria-hidden="true" />
      )}
      <span>{content}</span>
    </Component>
  );
};
export default Button;
