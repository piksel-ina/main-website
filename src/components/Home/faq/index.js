import React, { useState } from 'react';
import clsx from 'clsx';
import { faqData } from '@site/src/data/homepageData';
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
        <span>{item.question}</span>
        {isOpen ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
      </button>
      <div className={clsx(styles.answer, { [styles.answerVisible]: isOpen })}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default function PikselFaq() {
  const [openIndex, setOpenIndex] = useState(0); // Default open the first one

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title} dangerouslySetInnerHTML={{__html: faqData.title}}></h2>
          <p className={styles.subtitle}>{faqData.subtitle}</p>
        </div>
        
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
