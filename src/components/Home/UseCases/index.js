import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import ShapeContainer from '../../UI/Atoms/ShapeContainer';
import { useCasesData, useCasesHeaderData } from "@site/src/data/useCasesData";
import { Check } from 'lucide-react';
import ViewAllButton from '../../UI/Atoms/ViewAllButton';
import CTAButton from '../../UI/Atoms/CTAButton';
import styles from './styles.module.css';

export default function UseCases() {
  // Add error handling for missing data
  if (!useCasesData || Object.keys(useCasesData).length === 0) {
    console.warn('UseCases: No data available');
    return null;
  }

  const useCaseKeys = Object.keys(useCasesData);
  const [activeTab, setActiveTab] = useState(useCaseKeys[0] || 'useCase01');

  // Fixed useMemo with proper dependencies
  const currentCase = useMemo(() => {
    return useCasesData?.[activeTab];
  }, [activeTab, useCasesData]);

  if (!currentCase) return null;

  const color = currentCase.color;
  const glowColor = currentCase.glowColor;

  const dynamicStyles = {
    '--active-color': color,
    '--active-glow': glowColor,
  };

  // Add handler for View All button
  const handleViewAll = () => {
    console.log('Navigate to all use cases page');
  };

  return (
    <section id="use-cases" className={styles.section} style={dynamicStyles}>
      <ShapeContainer variant="slanted" color="neutral" position="absolute" flip dotPattern patternColor="primary" />
      
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.labelWrapper}>
            <div className={styles.line} />
            <span>{useCasesHeaderData?.tag || 'Use Cases'}</span>
            <div className={styles.line} />
          </div>
          <h2 className={styles.title}>{useCasesHeaderData?.title || 'Our Use Cases'}</h2>
          <p className={styles.subtitle}>
            {useCasesHeaderData?.subtitle || 'Explore how our solutions work in practice'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabsWrapper}>
          <div className={styles.scanLine} />
          
          <div className={styles.tabs} role="tablist" aria-label="Use case categories">
            {useCaseKeys.map((key) => {
              const isActive = activeTab === key;
              const item = useCasesData[key];
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${key}`}
                  tabIndex={isActive ? 0 : -1}
                  className={clsx(styles.tabButton, isActive && styles.tabButtonActive)}
                  onClick={() => setActiveTab(key)}
                  data-text={item?.tabLabel || item?.title || ''}
                >
                  {item?.tabLabel || item?.title || 'Untitled'}
                  {isActive && (
                    <div className={styles.tabIndicator} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.contentGrid}>
          {useCaseKeys.map((key) => {
            const item = useCasesData[key];
            const isActive = activeTab === key;
            const ItemIcon = item?.icon;

            const itemStyles = {
              '--active-color': item?.color || color,
              '--active-glow': item?.glowColor || glowColor,
            };

            return (
              <div 
                key={key}
                id={`panel-${key}`}
                role="tabpanel"
                aria-labelledby={`tab-${key}`}
                className={clsx(styles.useCaseItem, isActive && styles.useCaseItemActive)}
                aria-hidden={!isActive}
                style={itemStyles}
              >
                {/* Title Section */}
                <div className={styles.titleSection}>
                  <div className={styles.iconWrapper}>
                    <div className={styles.iconGlow} />
                    {ItemIcon && <ItemIcon className={styles.icon} />}
                  </div>
                  <h3 className={styles.contentTitle}>
                    <a href={item?.link || '#'} className={styles.contentTitleLink}>
                      {item?.title || 'Untitled Use Case'}
                    </a>
                    <div className={styles.titleUnderline} />
                  </h3>
                </div>

                {/* Image Section - Fixed alt text */}
                <div className={clsx("group", styles.imageSectionWrapper)}>
                  <div className={styles.imageSection}>
                    <div className={styles.imageContainer}>
                      {item?.image && (
                        <img
                          src={item.image}
                          alt={`${item.title} use case illustration`}
                          className={styles.image}
                          loading="lazy"
                        />
                      )}
                      <div className={styles.scanVertical} />
                    </div>
                  </div>
                </div>

                {/* Detail Section */}
                <div className={styles.detailSection}>
                  <p className={styles.contentDescription}>
                    {item?.description || 'No description available'}
                  </p>

                  {item?.features && item.features.length > 0 && (
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
                  )}

                  <CTAButton 
                    href={item?.link || '#'}
                    label={useCasesHeaderData?.learnMoreText || 'Learn More'}
                    color="var(--active-color)"
                    iconPosition="left"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button - Fixed with handler */}
        <ViewAllButton 
          label={useCasesHeaderData?.viewAllText || 'View All Use Cases'}
          to="/docs/usecase/main"
          style={{ '--active-color': 'var(--ifm-color-primary)' }}
        />

      </div>
    </section>
  );
}
