import Link from '@docusaurus/Link';
import { servicesData, servicesHeaderData } from '@site/src/data/servicesData';
import styles from './styles.module.scss';
import { ArrowRight } from 'lucide-react';
import Button from '../../UI/Atoms/Button';

export default function OurServices() {
  return (
    <section id="services" className={styles.ourServices}>
      <div className={styles.ourServices__header}>
        <div className={styles.ourServices__accentLine}>
          <div className={styles.ourServices__accentLineBar} />
          <span className={styles.ourServices__accentText}>
            {servicesHeaderData.title}
          </span>
        </div>
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
            <div
              key={service.id}
              className={styles.ourServices__card}
              style={{ '--theme-color': service.color }}
            >
              <div className={styles.ourServices__bgIcon}>
                <Icon />
              </div>

              <div className={styles.ourServices__cardContent}>
                <div className={styles.ourServices__iconRing}>
                  <Icon />
                </div>
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

      <div className={styles.ourServices__viewAllRow}>
        <Button
          to={servicesHeaderData.viewAllLink}
          label={servicesHeaderData.viewAllText}
          variant="outlined"
          color="#1D1D1F"
        />
      </div>
    </section>
  );
}
