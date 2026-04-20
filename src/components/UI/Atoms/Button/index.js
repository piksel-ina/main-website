import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { ChevronRight, ArrowRight, MoveRight } from 'lucide-react';
import styles from './styles.module.scss';

const defaultIcons = {
  primary: ChevronRight,
  hero: ChevronRight,
  secondary: ChevronRight,
  link: ArrowRight,
  outlined: MoveRight,
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
  ...props
}) => {
  const content =
    label ||
    children ||
    translate({ id: 'ui.button.defaultLabel', message: 'Learn More' });
  const Component = to || href ? Link : 'button';
  const ButtonIcon = Icon || defaultIcons[variant] || null;
  const style = color
    ? { ...props.style, '--button-color': color }
    : props.style;

  const showShine =
    enableShine !== undefined ? enableShine : variant === 'primary';
  const shouldExpand =
    enableExpand !== undefined ? enableExpand : variant === 'primary';

  return (
    <Component
      className={clsx(
        styles.button,
        styles[`button--${variant}`],
        fullWidth && styles['button--fullWidth'],
        shouldExpand && styles['button--expandOnHover'],
        className,
      )}
      onClick={onClick}
      to={to}
      href={href}
      style={style}
      {...(!(to || href) && { type: 'button' })}
      {...props}
    >
      {showShine && (
        <div className={styles['button__shine']} aria-hidden="true" />
      )}

      {showIcon && ButtonIcon && iconPosition === 'left' && (
        <ButtonIcon className={styles['button__icon']} aria-hidden="true" />
      )}

      <span>{content}</span>

      {showIcon && ButtonIcon && iconPosition === 'right' && (
        <ButtonIcon className={styles['button__icon']} aria-hidden="true" />
      )}
    </Component>
  );
};

export default Button;
