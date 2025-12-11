import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { MoveRight } from 'lucide-react';
import styles from './styles.module.css';

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
      className={clsx(styles.button, className)}
      onClick={onClick}
      to={to}
      href={href}
      {...props}
    >
      <span>{content}</span>
      <Icon className={styles.icon} />
    </Component>
  );

  if (wrapperClassName !== undefined) {
      if (wrapperClassName === "") {
          return buttonContent;
      }
      return (
        <div className={clsx(styles.wrapper, wrapperClassName)}>
           {buttonContent}
        </div>
      );
  }

  // Default wrapper behavior
  return (
    <div className={styles.wrapper}>
      {buttonContent}
    </div>
  );
};

export default ViewAllButton;
