import { useState } from 'react';
import { faqData } from '@site/src/data/faqData';
import styles from './styles.module.scss';
import FAQItem from '../../UI/Molecules/FAQItem';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className={styles.faq__contentWrapper}>
        {/* Left Column: Header & Accents */}
        <div className={styles.faq__headerColumn}>
          <div className={styles.faq__accentLine}>
            <div className={styles.faq__accentLineBar} />
            <span className={styles.faq__accentText}>FAQ</span>
          </div>
          <h2
            className={styles.faq__headerTitle}
            dangerouslySetInnerHTML={{ __html: faqData.title }}
          />
          <p className={styles.faq__headerDesc}>{faqData.subtitle}</p>
        </div>

        {/* Right Column: FAQ List */}
        <div className={styles.faq__faqList}>
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
};

export default Faq;
