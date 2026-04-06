import React, { useState, useMemo } from 'react';
import clsx from 'clsx';
import { useCasesData, useCasesHeaderData } from "@site/src/data/useCasesData";
import { Check } from 'lucide-react';
import Button from '../../UI/Atoms/Button';
import styles from './styles.module.scss';

export default function UseCases() {
  if (!useCasesData || Object.keys(useCasesData).length === 0) return null;

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

  return (
    <section id="use-cases" className={styles.useCases} style={dynamicStyles}>
        <div className={styles.useCases__header}>
          <h2 className={styles.useCases__title}>{useCasesHeaderData?.title || 'Our Use Cases'}</h2>
          <p className={styles.useCases__subtitle}>
            {useCasesHeaderData?.subtitle || 'Explore how our solutions work in practice'}
          </p>
        </div>
        <div className={styles.useCases__divider} />
        <div className={styles.useCases__layout}>
          <div className={styles.useCases__navColumn}>
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
                    style={isActive ? { '--active-color': item?.color || color, '--active-glow': item?.glowColor || glowColor } : undefined}
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

          <div className={styles.useCases__contentColumn}>
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
                    className={clsx(styles.useCases__card, isActive && styles['useCases__card--active'])}
                    aria-hidden={!isActive}
                    style={itemStyles}
                  >
                    <div className={styles.useCases__cardAccent} />

                    <div className={styles.useCases__cardGrid}>
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
                          <div className={styles.useCases__imageOverlay} />
                        </div>
                      </div>

                      <div className={styles.useCases__contentSection}>
                        <div className={styles.useCases__titleRow}>
                          <div className={styles.useCases__iconWrapper}>
                            {ItemIcon && <ItemIcon className={styles.useCases__icon} />}
                          </div>
                          <div>
                            <h3 className={styles.useCases__contentTitle}>
                              {item?.title || 'Untitled Use Case'}
                            </h3>
                            <div className={styles.useCases__titleUnderline} />
                          </div>
                        </div>

                        <p className={styles.useCases__contentDescription}>
                          {item?.description || 'No description available'}
                        </p>

                        {item?.features && item.features.length > 0 && (
                          <div className={styles.useCases__chipsRow}>
                            {item.features.map((feature, idx) => (
                              <div key={idx} className={styles.useCases__chip}>
                                <Check size={14} strokeWidth={2.5} className={styles.useCases__chipIcon} />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className={styles.useCases__cardActions}>
                          <Button
                            href={item?.link || '#'}
                            label={useCasesHeaderData?.learnMoreText || 'Learn More'}
                            color="var(--active-color)"
                            iconPosition="left"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.useCases__viewAllWrapper}>
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
