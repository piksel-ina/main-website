import React, { useState } from 'react';
import clsx from 'clsx';
import { faqData } from "@site/src/data/faqData";
import styles from './style.module.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div className={styles.item}>
      <button 
        className={styles.question} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{item.question}</span>
        <div className={styles.iconWrapper}>
          {isOpen ? (
            <ChevronUp className={styles.icon} />
          ) : (
            <ChevronDown className={styles.icon} />
          )}
        </div>
      </button>
      
      <div className={clsx(styles.answer, { [styles.answerVisible]: isOpen })}>
        <div className={styles.answerInner}>
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h2 
            className={styles.title} 
            dangerouslySetInnerHTML={{ __html: faqData.title }}
          />
          <p className={styles.subtitle}>{faqData.subtitle}</p>
        </div>
        
        {/* FAQ List Section */}
        <div className={styles.faqList}>
          {faqData.questions.map((item, index) => (
            <FAQItem 
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}