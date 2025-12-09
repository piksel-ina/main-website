import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Translate, { translate } from "@docusaurus/Translate";

import Hero from "../components/Home/Hero";
import UseCases from "../components/Home/UseCases";
import OurServices from "../components/Home/OurServices";
import Faq from "../components/Home/Faq";

// HomepageHeader component removed as it is unused

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

      <Hero />
      <main>
        <UseCases />
        <OurServices />
        <Faq />
      </main>
    </Layout>
  );
}
