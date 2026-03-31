import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { MoveRight } from 'lucide-react';
import styles from './styles.module.scss';

const ViewAllButton = ({ 
  label, 
  children,
  to, 
  href, 
  onClick, 
  className,
  wrapperClassName,
  icon: Icon = MoveRight,
  ...props 
}) => {
  const content = label || children || 'View All';
  const Component = to || href ? Link : 'button';
  
  const buttonContent = (
    <Component
      className={clsx(styles['viewAll__button'], className)}
      onClick={onClick}
      to={to}
      href={href}
      {...props}
    >
      <span>{content}</span>
      <Icon className={styles['viewAll__icon']} />
    </Component>
  );

  if (wrapperClassName !== undefined) {
      if (wrapperClassName === "") {
          return buttonContent;
      }
      return (
        <div className={clsx(styles.viewAll, wrapperClassName)}>
           {buttonContent}
        </div>
      );
  }

  return (
    <div className={styles.viewAll}>
      {buttonContent}
    </div>
  );
};

export default ViewAllButton;
