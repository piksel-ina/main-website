import React from "react";
import Link from "@docusaurus/Link";
import { ArrowRight, ExternalLink } from "lucide-react";
import styles from "./style.module.css";

const GlassCard = ({
  icon: Icon,
  title,
  description,
  buttonText = "Info",
  buttonTextSecondary = "Buka",
  link, // ← Tambahkan prop link
  linkSecondary, // ← Tambahkan prop link secondary (optional)
}) => {
  // Cek apakah link external atau internal
  const isExternal = link && (link.startsWith('http://') || link.startsWith('https://'));
  const isExternalSecondary = linkSecondary && (linkSecondary.startsWith('http://') || linkSecondary.startsWith('https://'));

  return (
    <div className={styles.glassCard}>
      <div className={styles.glassCard_content}><p></p>
        <div className={styles.glassCard_icon}>
          <Icon size={84} strokeWidth={1.5} />
        </div>

        <p><h3 className={styles.glassCard_title}>{title}</h3></p>

        <p className={styles.glassCard_description}>{description}</p>

        {/* Buttons Container - Display side by side */}
        <p></p><p></p><div className={styles.glassCard_buttons}>
          {/* Primary Button */}
          {link && (
            isExternal ? (
              <a
                href={link}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonText}
               {/*<ExternalLink size={16} className={styles.button_icon} />*/}
              </a>
            ) : (
              <Link
                to={link}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
              >
                {buttonText}
                {/*<ArrowRight size={16} className={styles.button_icon} />*/}
              </Link>
            )
          )}

          {/* Secondary Button */}
          {linkSecondary && (
            isExternalSecondary ? (
              <a
                href={linkSecondary}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {buttonTextSecondary}
                {/*<ArrowRight size={16} className={styles.button_icon} />*/}
              </a>
            ) : (
              <Link
                to={linkSecondary}
                className={`${styles.glassCard_button} ${styles.glassCard_button_secondary}`}
              >
                {buttonTextSecondary}
                {/*<ArrowRight size={16} className={styles.button_icon} />*/}
              </Link>
            )
          )}
        </div><p></p>
      </div>
    </div>
  );
};

export default GlassCard;