import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { servicesData, servicesHeaderData } from "@site/src/data/homepageData";
import styles from "./style.module.css";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const colorMap = {
  cyan: {
    main: "var(--piksel-color-cyan)",
    light: "color-mix(in srgb, var(--piksel-color-cyan), white 30%)",
    dark: "color-mix(in srgb, var(--piksel-color-cyan), black 80%)",
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
    <section className={styles.sectionContainer}>
      {/* Background Elements */}
      <div className={styles.gridPattern} />
      <div className={styles.diagonalPattern} />
      <div className={clsx(styles.orb, styles.orb1)} />
      <div className={clsx(styles.orb, styles.orb2)} />
      <div className={clsx(styles.orb, styles.orb3)} />
      <div className={clsx(styles.orb, styles.orb4)} />
      <div className={styles.vignette} />

      <div className={styles.contentWrapper}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.accentLine}>
            <div className={styles.accentLineBar} />
            <span className={styles.accentText}>
              {servicesHeaderData.tag}
            </span>
          </div>

          <h2 className={styles.headerTitle}>
            {servicesHeaderData.title}
            <span className={styles.pulseDot} />
          </h2>

          <p className={styles.headerDesc}>
            {servicesHeaderData.subtitle}
          </p>

          <div className={styles.headerCornerAccent} />
        </div>

        {/* Services List */}
        <div className={styles.servicesContainer}>
          <div className={styles.verticalLine} />

          {servicesData.map((service, index) => {
            const colors = colorMap[service.color] || colorMap.cyan;
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={styles.serviceItem}
                style={{
                  "--theme-color": colors.main,
                  "--theme-light": colors.light,
                  "--theme-dark": colors.dark,
                }}
              >
                <div
                  className={styles.activeBorder}
                  style={{ backgroundColor: colors.main }}
                />

                <div className={styles.grid}>
                  {/* Left Column: Number */}
                  <div className={styles.numberCol}>
                    <div
                      className={styles.cornerAccent}
                      style={{
                        borderColor: colors.light,
                        color: colors.light,
                      }}
                    />
                    <div
                      className={styles.numberText}
                      style={{ 
                        color: `color-mix(in srgb, ${colors.main}, transparent 92%)`,
                      }}
                    >
                      {service.id}
                      <div
                        className={styles.numberOverlay}
                        style={{ backgroundColor: colors.main }}
                      />
                    </div>
                  </div>

                  {/* Right Column: Content */}
                  <div className={styles.contentCol}>
                    <div
                      className={styles.contentCornerAccent}
                      style={{ borderColor: colors.light }}
                    />

                    <div className={styles.titleRow}>
                      <div
                        className={styles.iconWrapper}
                        style={{ color: colors.light }}
                      >
                        <Icon size={44} strokeWidth={1.5} />
                        <div
                          className={styles.iconGlow}
                          style={{ backgroundColor: colors.main }}
                        />
                      </div>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <div
                        className={styles.titleLine}
                        style={{ backgroundColor: colors.main }}
                      />
                    </div>

                    <p className={styles.description}>{service.description}</p>

                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.featureItem}>
                          <span
                            className={styles.featureArrow}
                            style={{ color: colors.light }}
                          >
                            ▸
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Buttons */}
                    <div className={styles.buttonGroup}>
                      <Link
                        to={service.link}
                        className={styles.primaryBtn}
                        style={{ backgroundColor: colors.main }}
                      >
                        <div className={styles.btnShine} />
                        <span className={styles.btnContent}>
                          {service.buttonText}
                        </span>
                        <ArrowRight size={16} className={styles.btnIcon} />
                      </Link>

                      {service.secondaryButtonText && (
                        <Link to={service.link} className={styles.secondaryBtn}>
                          <span className={styles.btnContent}>
                            {service.secondaryButtonText}
                          </span>
                          <ExternalLink size={16} />
                        </Link>
                      )}
                    </div>

                    <div
                      className={styles.bottomCornerAccent}
                      style={{ borderColor: colors.light }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
