import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import ShapeContainer from '../../UI/Atoms/ShapeContainer';
import { useCasesData, useCasesHeaderData } from "@site/src/data/useCasesData";
import { Check } from 'lucide-react';
import Button from '../../UI/Atoms/Button';
import styles from './styles.module.scss';

export default function UseCases() {
  if (!useCasesData || Object.keys(useCasesData).length === 0) {
    console.warn('UseCases: No data available');
    return null;
  }

  const useCaseKeys = Object.keys(useCasesData);
  const [activeTab, setActiveTab] = useState(useCaseKeys[0] || 'useCase01');

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

  const handleViewAll = () => {
    console.log('Navigate to all use cases page');
  };

  return (
    <section id="use-cases" className={styles.useCases} style={dynamicStyles}>
      <ShapeContainer variant="none" color="neutral" position="absolute" flip dotPattern patternColor="primary" />
      
      <div className="container">
        <div className={styles.useCases__header}>
          <div className={styles.useCases__labelWrapper}>
            <div className={styles.useCases__line} />
            <span>{useCasesHeaderData?.tag || 'Use Cases'}</span>
            <div className={styles.useCases__line} />
          </div>
          <h2 className={styles.useCases__title}>{useCasesHeaderData?.title || 'Our Use Cases'}</h2>
          <p className={styles.useCases__subtitle}>
            {useCasesHeaderData?.subtitle || 'Explore how our solutions work in practice'}
          </p>
        </div>

        <div className={styles.useCases__tabsWrapper}>
          <div className={styles.useCases__scanLine} />
          
          <div className={styles.useCases__tabs} role="tablist" aria-label="Use case categories">
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
                  className={clsx(styles.useCases__tabButton, isActive && styles['useCases__tabButton--active'])}
                  onClick={() => setActiveTab(key)}
                  data-text={item?.tabLabel || item?.title || ''}
                >
                  {item?.tabLabel || item?.title || 'Untitled'}
                  {isActive && (
                    <div className={styles.useCases__tabIndicator} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.useCases__contentGrid}>
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
                className={clsx(styles.useCases__useCaseItem, isActive && styles['useCases__useCaseItem--active'])}
                aria-hidden={!isActive}
                style={itemStyles}
              >
                {/* Title Section */}
                <div className={styles.useCases__titleSection}>
                  <div className={styles.useCases__iconWrapper}>
                    <div className={styles.useCases__iconGlow} />
                    {ItemIcon && <ItemIcon className={styles.useCases__icon} />}
                  </div>
                  <h3 className={styles.useCases__contentTitle}>
                    <a href={item?.link || '#'} className={styles.useCases__contentTitleLink}>
                      {item?.title || 'Untitled Use Case'}
                    </a>
                    <div className={styles.useCases__titleUnderline} />
                  </h3>
                </div>

                {/* Image Section */}
                <div className={clsx("group", styles.useCases__imageSectionWrapper)}>
                  <div className={styles.useCases__imageSection}>
                    <div className={styles.useCases__imageContainer}>
                      {item?.image && (
                        <img
                          src={item.image}
                          alt={`${item.title} use case illustration`}
                          className={styles.useCases__image}
                          loading="lazy"
                        />
                      )}
                      <div className={styles.useCases__scanVertical} />
                    </div>
                  </div>
                </div>

                {/* Detail Section */}
                <div className={styles.useCases__detailSection}>
                  <p className={styles.useCases__contentDescription}>
                    {item?.description || 'No description available'}
                  </p>

                  {item?.features && item.features.length > 0 && (
                    <div className={styles.useCases__featuresList}>
                      {item.features.map((feature, idx) => (
                        <div key={idx} className={styles.useCases__featureItem}>
                          <div className={styles.useCases__checkIconWrapper}>
                            <Check className={styles.useCases__checkIcon} />
                          </div>
                          <span className={styles.useCases__featureText}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
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

        <Button
          variant="viewAll"
          label={useCasesHeaderData?.viewAllText || 'View All Use Cases'}
          to="/docs/usecase/main"
          style={{ '--active-color': 'var(--ifm-color-primary)' }}
        />

      </div>
    </section>
  );
}
