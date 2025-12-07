import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";

import Button from "../../Atoms/Button";

const GlassCard = ({
  icon: Icon,
  title,
  description,
  buttonText = "Mulai Menjelajah",
  buttonTextSecondary = "Pelajari Lebih Lanjut",
  link,
}) => {
  return (
    <div className={styles.glassCard}>
      <div className={styles.glassCard_content}>
        <div className={styles.glassCard_icon}>
          <Icon size={84} strokeWidth={0.5} />
        </div>
        <h3 className={styles.glassCard_title}>{title}</h3>

        <p className={styles.glassCard_description}>{description}</p>

        {/* CTA Button */}
        <div className={styles.glassCard_cta}>
          <Button
            to={link}
            variant="outline"
            className={styles.glassCard_ctaPrimary}
          >
            {buttonText}
          </Button>
          <Button
            to={link}
            variant="link"
            className={styles.glassCard_ctaSecondary}
          >
            {buttonTextSecondary}
            <ArrowRight
              size={15}
              strokeWidth={1.3}
              className={styles.glassCard_ctaIcon}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlassCard;
