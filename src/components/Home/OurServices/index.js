import React from "react";
import Link from "@docusaurus/Link";
import { servicesData, servicesHeaderData } from "@site/src/data/servicesData";
import styles from "./styles.module.scss";
import { ArrowRight } from "lucide-react";
import Button from '../../UI/Atoms/Button';

export default function OurServices() {
  return (
    <section id="services" className={styles.ourServices}>
      <div className={styles.ourServices__header}>
        <h2 className={styles.ourServices__headerTitle}>
          {servicesHeaderData.tag}
        </h2>

        <p className={styles.ourServices__headerDesc}>
          {servicesHeaderData.subtitle}
        </p>
      </div>

      <div className={styles.ourServices__servicesGrid}>
        {servicesData.map((service) => {
          const Icon = service.icon;

          return (
            <Link
              key={service.id}
              to={service.link}
              className={styles.ourServices__card}
              style={{ "--theme-color": service.color }}
            >
              <span className={styles.ourServices__bgNumber}>
                {service.id}
              </span>

              <div className={styles.ourServices__iconWrapper}>
                <Icon className={styles.ourServices__icon} />
              </div>

              <h3 className={styles.ourServices__cardTitle}>
                {service.title}
              </h3>

              <p className={styles.ourServices__cardDesc}>
                {service.description}
              </p>

              <span className={styles.ourServices__linkRow}>
                {service.linkText}
                <ArrowRight size={16} strokeWidth={1.8} />
              </span>
            </Link>
          );
        })}
      </div>

      <div className={styles.ourServices__viewAllRow}>
        <Button
          to={servicesHeaderData.viewAllLink}
          label={servicesHeaderData.viewAllText}
          variant="outlined"
        />
      </div>
    </section>
  );
}
