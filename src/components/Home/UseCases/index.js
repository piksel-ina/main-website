import React from "react";
import ModernCard from "@site/src/components/UI/Molecules/ModernCard/";
import styles from "./style.module.css";
import { translate } from "@docusaurus/Translate";

import { useCasesData as USE_CASES } from "@site/src/data/homepageData";

export default function UseCase() {
  return (
    <section className={styles.useCaseSection}>
      <div className="container">
        <div className="section__header">
          <div className="text--center margin-bottom--lg">
            <h2 className="section__title section__title--primary-darkest">
              {translate({
                id: "useCase.title",
                message: "Contoh Pemanfaatan",
                description: "The title of the use cases section",
              })}
            </h2>
            <p className="section__subtitle .section__subtitle--bg-color">
              {translate({
                id: "useCase.subtitle",
                message:
                  "Temukan bagaimana solusi kami memberikan dampak di berbagai domain",
                description: "The subtitle of the use cases section",
              })}
            </p>
          </div>
        </div>

        <div className="row">
          {Object.values(USE_CASES).map((useCase) => {
            return (
              <div key={useCase.id} className="col col--4 margin-bottom--lg">
                <ModernCard
                  image={useCase.image}
                  title={useCase.title}
                  description={useCase.description}
                  link={useCase.link}
                />
              </div>
            );
          })}
        </div>
        <div className="text--center margin-top--lg">
          <a
            href="/use-cases"
            className="button button--outline button--lg button--primary"
          >
            {translate({
              id: "useCase.readMore.button",
              message: "Lihat Contoh Pemanfaatan Lainnya",
              description: "Button text to view more use cases",
            })}
          </a>
        </div>
      </div>
    </section>
  );
}
