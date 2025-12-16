import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { ctaData } from "@site/src/data/ctaData";
import { statsData } from "@site/src/data/statsData";
import CTAButton from "../../UI/Atoms/CTAButton";

export default function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.cta__background}>
        <picture>
          <source 
            srcSet={require('@site/static/img/cta/cta-bg.webp').default}
            type="image/webp"
            media="(min-width: 1280px)"
          />
          <source 
            srcSet={require('@site/static/img/cta/cta-bg-md.webp').default}
            type="image/webp"
            media="(min-width: 768px)"
          />
          <img 
            src={require('@site/static/img/cta/cta-bg-sm.webp').default}
            alt=""
            className={styles.cta__bgImage}
          />
        </picture>
        <div className={styles.cta__overlay} />
      </div>

      <div className={clsx("container", styles.cta__container)}>
        <div className={styles.cta__glass}>
          <div className={styles.cta__stats}>
            {statsData.stats.map((stat, idx) => (
              <div key={idx} className={styles.cta__statItem}>
                <div className={styles.cta__statNumber}>{stat.number}</div>
                <div className={styles.cta__statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={styles.cta__content}>
            <h2 className={styles.cta__title}>{ctaData.title}</h2>
            <p className={styles.cta__description}>{ctaData.description}</p>
            <div className={styles.cta__actions}>
              <CTAButton
                to={ctaData.primaryButton.to}
                label={ctaData.primaryButton.text}
                variant="primary"
                color="#fff"
                className={styles.cta__btnPrimary}
              />
              <CTAButton
                to={ctaData.secondaryButton.to}
                label={ctaData.secondaryButton.text}
                variant="secondary"
                showIcon={false}
                className={styles.cta__btnSecondary}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
