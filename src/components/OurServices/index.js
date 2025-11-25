import React from "react";
import { Map, FileCode2, Unplug, GitBranch } from "lucide-react";
import Translate from "@docusaurus/Translate";
import { translate } from "@docusaurus/Translate";
import GlassCard from "../GlassCard";
import styles from "./style.module.css";

const OurServices = () => {
  const services = [
    {
      id: 1,
      icon: Map,
      title: translate({
        id: "ourServices.service1.title",
        message: "Piksel Map",
        description: "Title for service 1",
      }),
      description: translate({
        id: "ourServices.service1.description",
        message:
          "Eksplorasi dan visualisasi dataset geospasial melalui platform web interaktif kami.",
        description: "Service 1 Description",
      }),
      buttonText: translate({
        id: "ourServices.service1.button",
        message: "Mulai Eksplorasi",
        description: "Button text for service 1",
      }),
    },
    {
      id: 2,
      icon: FileCode2,
      title: translate({
        id: "ourServices.service2.title",
        message: "Piksel Sandbox",
        description: "Title for service 2",
      }),
      description: translate({
        id: "ourServices.service2.description",
        message:
          "Eksperimen, belajar, dan buat prototype di environment Jupyter berbasis cloud kami.",
        description: "Service 2 Description",
      }),
      buttonText: translate({
        id: "ourServices.service2.button",
        message: "Lihat Analytics",
        description: "Button text for service 2",
      }),
    },
    {
      id: 3,
      icon: Unplug,
      title: translate({
        id: "ourServices.service3.title",
        message: "Piksel Data API",
        description: "Title for service 3",
      }),
      description: translate({
        id: "ourServices.service3.description",
        message:
          "Akses dataset geospasial yang komprehensif melalui infrastruktur API kami.",
        description: "Service 3 Description",
      }),
      buttonText: translate({
        id: "ourServices.service3.button",
        message: "Jelajah API",
        description: "Button text for service 3",
      }),
    },
    {
      id: 4,
      icon: GitBranch,
      title: translate({
        id: "ourServices.service4.title",
        message: "Piksel Workflows",
        description: "Title for service 4",
      }),
      description: translate({
        id: "ourServices.service4.description",
        message:
          "Otomasi pemrosesan data geospasial skala besar dengan Argo Workflows.",
        description: "Service 4 Description",
      }),
      buttonText: translate({
        id: "ourServices.service4.button",
        message: "Jelajahi Workflows",
        description: "Button text for service 4",
      }),
    },
  ];

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
