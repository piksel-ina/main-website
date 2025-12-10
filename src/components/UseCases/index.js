import React from "react";
import ModernCard from "@site/src/components/ModernCard/";
import styles from "./style.module.css";
import { translate } from "@docusaurus/Translate";

// Use case data with stable identifiers
const USE_CASES = [
  {
    id: "usecase1",
    image: "/img/food-.png",
    link: "/penggunaan/ketahanan-pangan",
  },
  {
    id: "usecase2",
    image: "/img/disaster-.png",
    link: "/penggunaan/kebencanaan",
  },
  {
    id: "usecase3",
    image: "/img/land-.png",
    link: "/penggunaan/penggunaan-lahan",
  },
  {
    id: "usecase4",
    image: "/img/coastal-.png",
    link: "/penggunaan/pengelolaan-pesisir",
  },
];

// Helper function to get translations for each use case
function getUseCaseTranslations(useCaseId) {
  switch (useCaseId) {
    case "usecase1":
      return {
        title: translate({
          id: "useCase.card.environment.title",
          message: "Ketahanan Pangan",
          description: "Title for use case 1",
        }),
        description: translate({
          id: "useCase.card.environment.description",
          message:
            "Data satelit mendukung pertanian presisi dengan memantau kesehatan tanaman, untuk meningkatkan produktivitas.",
          description: "Description for use case 1",
        }),
      };
    case "usecase2":
      return {
        title: translate({
          id: "useCase.card.technology.title",
          message: "Kebencanaan",
          description: "Title for use case 2",
        }),
        description: translate({
          id: "useCase.card.technology.description",
          message:
            "Informasi cepat dan akurat untuk mendeteksi potensi banjir, longsor, kebakaran hutan, dan aktivitas gunung api.",
          description: "Description for case 2",
        }),
      };
    case "usecase3":
      return {
        title: translate({
          id: "useCase.card.research.title",
          message: "Penggunaan Lahan",
          description: "Title for use case 3",
        }),
        description: translate({
          id: "useCase.card.research.description",
          message:
            "Pemantauan perubahan tutupan lahan secara konsisten, sehingga berbagai dinamika yang terjadi dapat terdeteksi dengan jelas.",
          description: "Description for use case 3",
        }),
      };
      case "usecase4":
      return {
        title: translate({
          id: "useCase.card.coastal.title",
          message: "Pengelolaan Pesisir",
          description: "Title for use case 4",
        }),
        description: translate({
          id: "useCase.card.coastal.description",
          message:
            "Memantau perubahan garis pantai, abrasi, sedimentasi, serta kondisi ekosistem yang membantu mengidentifikasi area rentan.",
          description: "Description for use case 4",
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
                message: "Contoh Penggunaan",
                description: "The title of the use cases section",
              })}
            </h2>
            <p className="section__subtitle .section__subtitle--bg-color">
              {translate({
                id: "useCase.subtitle",
                message:
                  "Temukan bagaimana Piksel memberikan solusi di berbagai permasalahan",
                description: "The subtitle of the use cases section",
              })}
            </p>
          </div>
        </div>

        {/* Ubah dari col--4 menjadi col--3 untuk 4 card per baris */}
        <div className="row">
          {USE_CASES.map((useCase) => {
            const translations = getUseCaseTranslations(useCase.id);

            return (
              <div key={useCase.id} className="col col--3 margin-bottom--lg">
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
            href="/penggunaan/"
            className="button button--outline button--lg button--primary"
          >
            {translate({
              id: "useCase.readMore.button",
              message: "Lihat Contoh Penggunaan Lainnya",
              description: "Button text to view more use cases",
            })}
          </a>
        </div>
      </div>
    </section>
  );
}
