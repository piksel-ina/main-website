import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { ctaData } from "../../../data/ctaData";
import Button from "../../UI/Atoms/Button";
import ShapeContainer from "../../UI/Atoms/ShapeContainer";

export default function CallToAction() {
  return (
    <section className={styles.cta}>
      <ShapeContainer />
      <div className={clsx("container", styles.cta__container)}>
        <div className={styles.cta__content}>
          <h2 className={styles.cta__title}>{ctaData.title}</h2>
          <p className={styles.cta__description}>{ctaData.description}</p>
          <div className={styles.cta__actions}>
            <Button
              to={ctaData.primaryButton.to}
              variant="primary"
              size="large"
            >
              {ctaData.primaryButton.text}
            </Button>
            <Button
              to={ctaData.secondaryButton.to}
              variant="outline"
              size="large"
            >
              {ctaData.secondaryButton.text}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
