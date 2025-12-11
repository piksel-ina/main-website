import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import ShapeContainer from '../../UI/Atoms/ShapeContainer';
import { useCasesData, useCasesHeaderData } from "@site/src/data/useCasesData";
import { 
  ArrowRight, 
  Check 
} from 'lucide-react';
import styles from './styles.module.css';

// IconMap removed as icons are now imported in data file

export default function UseCases() {
  const useCaseKeys = Object.keys(useCasesData || {});
  const [activeTab, setActiveTab] = useState(useCaseKeys[0] || 'useCase01');

  const currentCase = useMemo(() => {
    return useCasesData[activeTab];
  }, [activeTab]);

  if (!currentCase) return null;


  const color = currentCase.color;
  const glowColor = currentCase.glowColor;

  const dynamicStyles = {
    '--active-color': color,
    '--active-glow': glowColor,
  };

  return (
    <section id="use-cases" className={styles.section} style={dynamicStyles}>
      <ShapeContainer variant="slanted" color="neutral" position="absolute" flip />
      
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.line} />
            <span>{useCasesHeaderData.tag}</span>
            <div className={styles.line} />
          </div>
          <h2 className={styles.title}>{useCasesHeaderData.title}</h2>
          <p className={styles.subtitle}>
            {useCasesHeaderData.subtitle}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsWrapper}>
          <div className={styles.scanLine} />
          
          <div className={styles.tabs}>
            {useCaseKeys.map((key) => {
              const isActive = activeTab === key;
              const item = useCasesData[key];
              return (
                <button
                  key={key}
                  className={clsx(styles.tabButton, isActive && styles.tabButtonActive)}
                  onClick={() => setActiveTab(key)}
                  data-text={item.tabLabel || item.title}
                >
                  {item.tabLabel || item.title}
                  {isActive && (
                    <div className={styles.tabIndicator} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area (Stacked Grid) */}
        <div className={styles.contentGrid}>
          {useCaseKeys.map((key) => {
            const item = useCasesData[key];
            const isActive = activeTab === key;
            const ItemIcon = item.icon;

            const itemStyles = {
              '--active-color': item.color,
              '--active-glow': item.glowColor,
            };

            return (
              <div 
                key={key}
                className={clsx(styles.useCaseItem, isActive && styles.useCaseItemActive)}
                aria-hidden={!isActive}
                style={itemStyles}
              >
                {/* Title Section */}
                <div className={styles.titleSection}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconGlow} />
                    <ItemIcon className={styles.icon} />
                  </div>
                  <h3 className={styles.contentTitle}>
                    <a href={item.link} className={styles.contentTitleLink}>
                      {item.title}
                    </a>
                    <div className={styles.titleUnderline} />
                  </h3>
                </div>

                {/* Image Section */}
                <div className={clsx("group", styles.imageSectionWrapper)}>
                  <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={styles.image}
                      />
                      <div className={styles.scanVertical} />
                    </div>
                  </div>
                </div>

                {/* Detail Section */}
                <div className={styles.detailSection}>
                  <p className={styles.contentDescription}>
                    {item.description}
                  </p>

                  <div className={styles.featuresList}>
                    {item.features.map((feature, idx) => (
                      <div key={idx} className={styles.featureItem}>
                        <div className={styles.checkIconWrapper}>
                          <Check className={styles.checkIcon} />
                        </div>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={item.link} className={styles.ctaButton}>
                    <span>{useCasesHeaderData.learnMoreText}</span>
                    <ArrowRight className={styles.ctaIcon} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className={styles.viewAllWrapper}>
          <button className={styles.viewAllButton}>
            <span>{useCasesHeaderData.viewAllText}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
