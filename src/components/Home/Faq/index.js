import React, { useState } from 'react';
import { faqData } from "@site/src/data/faqData";
import styles from './style.module.css';
import FAQItem from '../../UI/Molecules/FAQItem';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.sectionContainer}>
      
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
              question={item.question}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              {item.answer}
            </FAQItem>
          ))}
        </div>
      </div>
    </section>
  );
}