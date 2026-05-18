import Link from '@docusaurus/Link';
import {
  servicesData,
  servicesSectionHeader,
} from '@site/src/data/servicesData';
import styles from './styles.module.scss';
import { ArrowRight } from 'lucide-react';

export default function OurServices() {
  return (
    <section id="services" className={styles.ourServices}>
      <div className={styles.ourServices__header}>
        <h2 className={styles.ourServices__cardTitle}>
          {servicesSectionHeader.eyebrow}
        </h2>
        <p className={styles.ourServices__cardDesc}>
          {servicesSectionHeader.title}
        </p>
      </div>

      <div className={styles.ourServices__servicesGrid}>
        {servicesData.map((service) => {
          return (
            <div
              key={service.id}
              className={styles.ourServices__card}
              style={{ '--theme-color': service.color }}
            >
              <div className={styles.ourServices__cardContent}>
                <h3 className={styles.ourServices__cardTitle}>
                  {service.title}
                </h3>
                <p className={styles.ourServices__cardDesc}>
                  {service.description}
                </p>
                <Link to={service.link} className={styles.ourServices__linkRow}>
                  {service.linkText}
                  <ArrowRight size={16} strokeWidth={1.8} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
