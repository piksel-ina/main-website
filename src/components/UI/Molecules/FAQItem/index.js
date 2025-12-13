import React, { useState } from 'react';
import clsx from 'clsx';
import { Plus, Minus } from 'lucide-react';
import styles from './styles.module.css';

const FAQItem = ({ question, children, isOpen, onToggle }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  
  const isControlled = isOpen !== undefined;
  const show = isControlled ? isOpen : internalOpen;
  
  const handleClick = () => {
    if (isControlled) {
      onToggle && onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <div 
        className={styles.item}
        data-open={show}
    >
      <button 
        className={styles.question} 
        onClick={handleClick}
        aria-expanded={show}
      >
        <span className={styles.questionText}>{question}</span>
        <div className={styles.iconWrapper}>
          {show ? (
            <Minus className={styles.icon} />
          ) : (
            <Plus className={styles.icon} />
          )}
        </div>
      </button>
      
      <div className={clsx(styles.answer, { [styles.answerVisible]: show })}>
        <div className={styles.answerInner}>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
