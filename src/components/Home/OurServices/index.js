import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { servicesData, servicesHeaderData } from "@site/src/data/servicesData";
import styles from "./styles.module.scss";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import ViewAllButton from "../../UI/Atoms/ViewAllButton";
import CTAButton from "../../UI/Atoms/CTAButton";
import ShapeContainer from "../../UI/Atoms/ShapeContainer";

const colorMap = {
  cyan: {
    main: "var(--piksel-color-cyan)",
    light: "color-mix(in srgb, var(--piksel-color-cyan), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-cyan), black 80%)",
  },
  red: {
    main: "var(--piksel-color-red)",
    light: "color-mix(in srgb, var(--piksel-color-red), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-red), black 80%)",
  },
  purple: {
    main: "var(--piksel-color-purple)",
    light: "color-mix(in srgb, var(--piksel-color-purple), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-purple), black 80%)",
  },
  emerald: {
    main: "var(--piksel-color-green)",
    light: "color-mix(in srgb, var(--piksel-color-green), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-green), black 80%)",
  },
  blue: {
    main: "var(--piksel-color-blue)",
    light: "color-mix(in srgb, var(--piksel-color-blue), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-blue), black 80%)",
  },
  amber: {
    main: "var(--piksel-color-amber)",
    light: "color-mix(in srgb, var(--piksel-color-amber), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-amber), black 80%)",
  },
};

export default function OurServices() {
  return (
    <section id="services" className={styles.ourServices}>
      <ShapeContainer 
        variant="slanted-y" 
        position="absolute"
        color="custom"
        flip
        pattern="grid"
        style={{ backgroundColor: 'var(--ifm-background-color)', zIndex: 0 }}
      >
        <div className={styles.ourServices__diagonalPattern} />
      </ShapeContainer>

      <div className={styles.ourServices__contentWrapper}>
        <div className={styles.ourServices__header}>
          <div className={styles.ourServices__accentLine}>
            <div className={styles.ourServices__accentLineBar} />
            <span className={styles.ourServices__accentText}>
              {servicesHeaderData.tag}
            </span>
          </div>

          <h2 className={styles.ourServices__headerTitle}>
            {servicesHeaderData.title}
            <span className={styles.ourServices__pulseDot} />
          </h2>

          <p className={styles.ourServices__headerDesc}>
            {servicesHeaderData.subtitle}
          </p>

          <div className={styles.ourServices__headerCornerAccent} />
        </div>

        <div className={styles.ourServices__servicesContainer}>


          {servicesData.map((service, index) => {
            const colors = colorMap[service.color] || colorMap.cyan;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={styles.ourServices__serviceItem}
                style={{
                  "--theme-color": colors.main,
                  "--theme-light": colors.light,
                  "--theme-dark": colors.dark,
                }}
              >
                <div
                  className={styles.ourServices__activeBorder}
                  style={{ backgroundColor: colors.main }}
                />

                <div className={styles.ourServices__grid}>
                  <div className={styles.ourServices__numberCol}>
                    <div
                      className={styles.ourServices__cornerAccent}
                      style={{
                        borderColor: colors.light,
                        color: colors.light,
                      }}
                    />
                    <div
                      className={styles.ourServices__numberText}
                      style={{ 
                        color: `color-mix(in srgb, ${colors.main}, transparent 92%)`,
                      }}
                    >
                      {service.id}
                      <div
                        className={styles.ourServices__numberOverlay}
                        style={{ backgroundColor: colors.main }}
                      />
                    </div>
                  </div>

                  <div className={styles.ourServices__contentCol}>
                    <div
                      className={styles.ourServices__contentCornerAccent}
                      style={{ borderColor: colors.light }}
                    />

                    <div className={styles.ourServices__titleRow}>
                      <div
                        className={styles.ourServices__iconWrapper}
                        style={{ color: colors.light }}
                      >
                        <Icon className={styles.ourServices__icon} />
                        <div
                          className={styles.ourServices__iconGlow}
                          style={{ backgroundColor: colors.main }}
                        />
                      </div>
                      <h3 className={styles.ourServices__serviceTitle}>{service.title}</h3>
                      <div
                        className={styles.ourServices__titleLine}
                        style={{ backgroundColor: colors.main }}
                      />
                    </div>

                    <p className={styles.ourServices__description}>{service.description}</p>

                    <ul className={styles.ourServices__featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.ourServices__featureItem}>
                          <span
                            className={styles.ourServices__featureArrow}
                            style={{ color: colors.light }}
                          >
                            ▸
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.ourServices__buttonGroup}>
                      <CTAButton 
                    href={service?.link || '#'}
                    label={service?.buttonText || 'Learn More'}
                    color={colors.main}
                    iconPosition="left"
                    enableShine={false}
                    enableExpand={false}
                  />

                      {service.secondaryButtonText && (
                        <CTAButton
                          to={service.link}
                          label={service.secondaryButtonText}
                          variant="secondary"
                          icon={ArrowRight}
                          className={styles.ourServices__secondaryBtn}
                          iconPosition="left"
                        />
                      )}
                    </div>

                    <div
                      className={styles.ourServices__bottomCornerAccent}
                      style={{ borderColor: colors.light }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <ViewAllButton
          to="/docs/services/main"
          label={<Translate id="ourServices.viewAll">Lihat Semua Layanan</Translate>}
        />
      </div>
    </section>
  );
}
