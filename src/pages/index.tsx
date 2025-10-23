import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <Translate id="home.title" description="The title of the home page">
            {siteConfig.title}
          </Translate>
        </Heading>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          <Translate
            id="home.subtitle"
            description="The subtitle of the home page"
          >
            {siteConfig.tagline}
          </Translate>
        </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            <Translate
              id="home.button.label"
              description="The label of the button"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Translate>
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate(
        {
          id: "home.title",
          description: "The title of the home page",
          message: "Hello from {title}",
        },
        { title: siteConfig.title }
      )}
      description={translate({
        id: "home.description",
        description: "The description of the home page",
        message: "Description will go into a meta tag in <head />",
      })}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
