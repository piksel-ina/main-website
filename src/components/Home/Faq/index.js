import React, { useState } from 'react';
import clsx from 'clsx';
import { faqData } from "@site/src/data/faqData";
import styles from './style.module.css';
import { Plus, Minus } from 'lucide-react'; // Switched to Plus/Minus for more modern look

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div 
        className={styles.item}
        data-open={isOpen}
    >
      <button 
        className={styles.question} 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={styles.questionText}>{item.question}</span>
        <div className={styles.iconWrapper}>
          {isOpen ? (
            <Minus className={styles.icon} />
          ) : (
            <Plus className={styles.icon} />
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
    <section id="faq" className={styles.sectionContainer}>
      {/* Removed gridPattern to restore previous background */}
      
      <div className={styles.contentWrapper}>
        {/* Left Column: Header & Accents */}
        <div className={styles.headerColumn}>
            <div className={styles.accentLine}>
                <div className={styles.accentLineBar} />
                <span className={styles.accentText}>FAQ</span>
            </div>
            <h2 className={styles.headerTitle} dangerouslySetInnerHTML={{ __html: faqData.title }} />
            <p className={styles.headerDesc}>{faqData.subtitle}</p>
        </div>
        
        {/* Right Column: FAQ List */}
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