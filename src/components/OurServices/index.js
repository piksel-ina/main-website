import React from "react";
import { Map, FileCode2, Unplug, GitBranch, BookOpenText  } from "lucide-react";
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
        message: "Peta",
        description: "Title for service 1",
      }),
      description: translate({
        id: "ourServices.service1.description",
        message: "Eksplorasi dan visualisasi dataset geospasial.",
        description: "Service 1 Description",
      }),
      /*buttonText: translate({
        id: "ourServices.service1.button",
        message: "Info",
        description: "Button text for service 1",
      }),
      buttonTextSecondary: translate({
        id: "ourServices.service1.buttonSecondary",
        message: "Buka",
        description: "Secondary button text for service 1",
      }),*/
      link: "/layanan/peta",
      linkSecondary: "/layanan/peta",
    },
    {
      id: 2,
      icon: FileCode2,
      title: translate({
        id: "ourServices.service2.title",
        message: "Analisis Spasial",
        description: "Title for service 2",
      }),
      description: translate({
        id: "ourServices.service2.description",
        message:
          "Analisis spasial data citra satelit melalui jupyter notebook.",
        description: "Service 2 Description",
      }),
      /*buttonText: translate({
        id: "ourServices.service1.button",
        message: "Info",
        description: "Button text for service 1",
      }),
      buttonTextSecondary: translate({
        id: "ourServices.service1.buttonSecondary",
        message: "Buka",
        description: "Secondary button text for service 1",
      }),*/
      link: "/layanan/analisis-spasial", // ← Tambahkan link
      linkSecondary: "https://sandbox.staging.pik-sel.id", // ← Tambahkan link
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
          "Akses data Piksel melalui API [Application Programming Interface].",
        description: "Service 3 Description",
      }),
      /*buttonText: translate({
        id: "ourServices.service1.button",
        message: "Info",
        description: "Button text for service 1",
      }),
      buttonTextSecondary: translate({
        id: "ourServices.service1.buttonSecondary",
        message: "Buka",
        description: "Secondary button text for service 1",
      }),*/
      link: "/layanan/api", // ← Tambahkan link
      linkSecondary: "https://github.com/piksel-ina/homepage", // ← Tambahkan link
    },
    {
      id: 4,
      icon: BookOpenText,
      title: translate({
        id: "ourServices.service4.title",
        message: "Katalog Produk",
        description: "Title for service 4",
      }),
      description: translate({
        id: "ourServices.service4.description",
        message:
          "Daftar kumpulan data citra satelit dan data turunannya.",
        description: "Service 4 Description",
      }),
      /*buttonText: translate({
        id: "ourServices.service1.button",
        message: "Info",
        description: "Button text for service 1",
      }),
      buttonTextSecondary: translate({
        id: "ourServices.service1.buttonSecondary",
        message: "Buka",
        description: "Secondary button text for service 1",
      }),*/
      link: "/layanan/katalog-produk", // ← Tambahkan link
      linkSecondary: "https://explorer.staging.pik-sel.id/products", // ← Link external
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
                  "Menyediakan data geospasial yang dapat diakses oleh semua orang",
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
                  buttonTextSecondary={service.buttonTextSecondary}
                  link={service.link} // ← Pass link ke GlassCard
                  linkSecondary={service.linkSecondary} // ← Pass linkSecondary ke GlassCard
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