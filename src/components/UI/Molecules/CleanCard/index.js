import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";
import Button from "../../Atoms/Button";

const CleanCard = ({
  icon: Icon,
  title,
  description,
  buttonText = "Mulai Menjelajah",
  buttonTextSecondary = "Pelajari Lebih Lanjut",
  link,
}) => {
  return (
    <div className={styles.cleanCard}>
      <div className={styles.cleanCard__content}>
        <div className={styles.cleanCard__icon}>
          <Icon size={48} strokeWidth={1.5} />
        </div>
        <h3 className={styles.cleanCard__title}>{title}</h3>

        <p className={styles.cleanCard__description}>{description}</p>

        {/* CTA Button */}
        <div className={styles.cleanCard__cta}>
          <Button
            to={link}
            variant="primary"
            className={styles.cleanCard__ctaPrimary}
          >
            {buttonText}
          </Button>
          <Button
            to={link}
            variant="link"
            className={styles.cleanCard__ctaSecondary}
          >
            {buttonTextSecondary}
            <ArrowRight
              size={15}
              strokeWidth={2}
              className={styles.cleanCard__ctaIcon}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CleanCard;
