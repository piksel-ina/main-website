import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import UseCase from "@site/src/components/Home/UseCases";
import OurServices from "../components/Home/OurServices";
import Articles from "../components/Home/Articles";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Translate, { translate } from "@docusaurus/Translate";

import { heroData } from "@site/src/data/homepageData";

import PikselHero from "../components/Home/PikselHero";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={`${styles.heroText}`}>
          <Heading as="h1" className="hero__title text--uppercase">
            {heroData.title}
          </Heading>
          <p className="hero__subtitle">
            {heroData.subtitle}
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={heroData.buttonLink}
            >
              {heroData.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({
        id: "homepage.meta.title",
        message: "Piksel",
        description: "Site title for the homepage",
      })}
      description={translate({
        id: "homepage.meta.description",
        message:
          "Bumi Digital Indonesia (piksel) mengintegrasikan citra satelit dengan teknologi cloud computing untuk observasi bumi digital di seluruh Indonesia",
        description: "Meta description for the homepage",
      })}
    >
      {/* <div className={styles.headerWrapper}>
        <HomepageHeader />
      </div> */}
      <PikselHero />
      <main>
        <UseCase />
        <OurServices />
        <Articles />
      </main>
    </Layout>
  );
}
