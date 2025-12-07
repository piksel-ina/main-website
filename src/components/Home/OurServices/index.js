import React from "react";
import { translate } from "@docusaurus/Translate";
import GlassCard from "../../UI/Molecules/GlassCard";
import styles from "./style.module.css";
import { servicesData as services } from "@site/src/data/homepageData";

const OurServices = () => {

  return (
    <div className={`${styles.container} padding-top--lg padding-bottom--xl`}>
      <div className={styles.background}></div>

      <div className="container">
        <div className="section__header">
          <div className="text--center">
            <h2 className="section__title section__title--white ">
              {translate({
                id: "ourServices.title",
                message: "Layanan Kami",
                description: "The title of the our services section",
              })}
            </h2>
            <p className="section__subtitle section__subtitle--white-less">
              {translate({
                id: "ourServices.subtitle",
                message:
                  "Membuat data geospasial dapat diakses oleh semua orang",
                description: "The subtitle of the our services section",
              })}
            </p>
          </div>
        </div>
        <div className="row margin-top--md">
          {services.map((service) => (
            <div
              key={service.id}
              className={`col col--3 margin-bottom--md ${styles.ourServices_content}`}
            >
              <div className={styles.cardWrapper}>
                <GlassCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  buttonText={service.buttonText}
                  link={service.link}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
