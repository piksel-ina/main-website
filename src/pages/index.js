import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { translate } from "@docusaurus/Translate";

import Hero from "../components/Home/Hero";
import UseCases from "../components/Home/UseCases";
import OurServices from "../components/Home/OurServices";
import Faq from "../components/Home/Faq";
import CallToAction from "../components/Home/CallToAction";

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
        <CallToAction />
      </main>
    </Layout>
  );
}
