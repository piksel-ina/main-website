import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { servicesData } from "@site/src/data/homepageData";
import styles from "./style.module.css";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";

const colorMap = {
  cyan: {
    main: "#06b6d4", // cyan-500
    light: "#22d3ee", // cyan-400
    dark: "#083344", // cyan-950
  },
  purple: {
    main: "#a855f7", // purple-500
    light: "#c084fc", // purple-400
    dark: "#3b0764", // purple-950
  },
  emerald: {
    main: "#10b981", // emerald-500
    light: "#34d399", // emerald-400
    dark: "#022c22", // emerald-950
  },
  blue: {
    main: "#3b82f6", // blue-500
    light: "#60a5fa", // blue-400
    dark: "#172554", // blue-950
  },
  amber: {
    main: "#f59e0b", // amber-500
    light: "#fbbf24", // amber-400
    dark: "#451a03", // amber-950
  },
};

export default function PikselOurServices() {
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
              <Translate id="ourServices.header.tag">Layanan Kami</Translate>
            </span>
          </div>

          <h2 className={styles.headerTitle}>
            <Translate id="ourServices.header.title">PERJALANAN ANDA</Translate>
            <span className={styles.pulseDot} />
          </h2>

          <p className={styles.headerDesc}>
            <Translate id="ourServices.header.subtitle">
              Semua layanan kami tersedia secara gratis. Sebagian besar dapat diakses langsung, beberapa mungkin memerlukan inquiry. Jangan ragu untuk menghubungi kami.
            </Translate>
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
                        color: colors.light, // for potential currentColor usage
                      }}
                    />
                    <div
                      className={styles.numberText}
                      style={{ 
                        color: `${colors.main}15`, 
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
