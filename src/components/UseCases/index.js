import React from "react";
import ModernCard from "@site/src/components/ModernCard/";
import styles from "./style.module.css";
import { translate } from "@docusaurus/Translate";

// Use case data with stable identifiers
const USE_CASES = [
  {
    id: "usecase1",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    link: "/environment",
  },
  {
    id: "usecase2",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/technology",
  },
  {
    id: "usecase3",
    image:
      "https://plus.unsplash.com/premium_photo-1666256629413-ea053d34ff36?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/research",
  },
];

// Helper function to get translations for each use case
function getUseCaseTranslations(useCaseId) {
  switch (useCaseId) {
    case "usecase1":
      return {
        title: translate({
          id: "useCase.card.environment.title",
          message: "Lingkungan",
          description: "Title for use case 1",
        }),
        description: translate({
          id: "useCase.card.environment.description",
          message:
            "Kami menyediakan citra dan data terpercaya tentang lanskap Indonesia untuk peneliti dan pengelola lahan, membantu mereka menavigasi kompleksitas lingkungan",
          description: "Description for use case 1",
        }),
      };
    case "usecase2":
      return {
        title: translate({
          id: "useCase.card.technology.title",
          message: "Teknologi",
          description: "Title for use case 2",
        }),
        description: translate({
          id: "useCase.card.technology.description",
          message:
            "Solusi terkini untuk tantangan modern dalam manajemen dan analisis data, didukung oleh riset dan pengembangan yang inovatif.",
          description: "Description for case 2",
        }),
      };
    case "usecase3":
      return {
        title: translate({
          id: "useCase.card.research.title",
          message: "Riset",
          description: "Title for use case 3",
        }),
        description: translate({
          id: "useCase.card.research.description",
          message:
            "Mendukung riset ilmiah dengan data yang andal dan tools inovatif yang memungkinkan penemuan dan wawasan terobosan.",
          description: "Description for use case 3",
        }),
      };
    default:
      return { title: "", description: "" };
  }
}

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
          {USE_CASES.map((useCase) => {
            const translations = getUseCaseTranslations(useCase.id);

            return (
              <div key={useCase.id} className="col col--4 margin-bottom--lg">
                <ModernCard
                  image={useCase.image}
                  title={translations.title}
                  description={translations.description}
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
