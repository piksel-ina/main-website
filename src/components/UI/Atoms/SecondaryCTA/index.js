import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowRight } from 'lucide-react';
import styles from './styles.module.scss';

const SecondaryCTA = ({ label, to, className, ...props }) => {
  return (
    <Link to={to} className={`${styles.secondaryCta}${className ? ` ${className}` : ''}`} {...props}>
      {label}
      <ArrowRight size={16} strokeWidth={2} />
    </Link>
  );
};

export default SecondaryCTA;
