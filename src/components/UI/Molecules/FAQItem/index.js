import React, { useState } from 'react';
import clsx from 'clsx';
import { Plus, Minus } from 'lucide-react';
import styles from './styles.module.scss';

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
      className={clsx(styles.faqItem, { [styles.faqItemOpen]: show })}
      data-open={show}
    >
      <button
        className={styles.faqItem__question}
        onClick={handleClick}
        aria-expanded={show}
      >
        <span className={styles.faqItem__questionText}>{question}</span>
        <div className={styles.faqItem__iconWrapper}>
          {show ? (
            <Minus className={styles.faqItem__icon} />
          ) : (
            <Plus className={styles.faqItem__icon} />
          )}
        </div>
      </button>

      <div className={styles.faqItem__answer}>
        <div className={styles.faqItem__answerInner}>
          {typeof children === 'string' ? <p>{children}</p> : children}
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
