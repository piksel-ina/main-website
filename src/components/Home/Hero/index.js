import React from 'react';
import styles from './styles.module.css';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
  'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800',
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
  'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800',
];

const STATS = [
  { number: '50TB+', label: 'Data Processed Daily' },
  { number: '15min', label: 'Update Frequency' },
  { number: '99.8%', label: 'Accuracy Rate' },
  { number: '180+', label: 'Countries Covered' },
];

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.imageCollage}>
        {HERO_IMAGES.map((src, idx) => (
          <div 
            key={idx} 
            className={styles.imageItem}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.heroContent}>
          <span className={styles.tag}>PIKSEL</span>
          <h1 className={styles.title}>Memahami Bumi Indonesia Melalui Piksel</h1>
          <p className={styles.subtitle}>
            Piksel mengintegrasikan citra satelit dengan teknologi cloud computing untuk observasi bumi digital di seluruh Indonesia
          </p>
          
          <div className={styles.heroStats}>
            {STATS.map((stat, idx) => (
              <div key={idx} className={styles.heroStatItem}>
                <div className={styles.heroStatNumber}>{stat.number}</div>
                <div className={styles.heroStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
