import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'home.feature.apps.title',
      message: 'Apps',
    }),
    description: translate({
      id: 'home.feature.apps.description',
      message:
        "Extend Shoplazza's core functionality with apps that integrate into Shoplazza's admin, online store, checkout and more.",
    }),
    buttonText: translate({
      id: 'home.feature.apps.button',
      message: 'Build your app',
    }),
    imageUrl: 'https://cdn.shoplazza.com/2bfea269d420110bc0bbdb86d4c80158.webp',
    link: '/docs/apps/getting-started',
  },
  {
    title: translate({
      id: 'home.feature.themes.title',
      message: 'Themes',
    }),
    description: translate({
      id: 'home.feature.themes.description',
      message:
        'Help merchants express their unique brand in their storefront by building a custom theme.',
    }),
    buttonText: translate({
      id: 'home.feature.themes.button',
      message: 'Build your theme',
    }),
    imageUrl: 'https://cdn.shoplazza.com/2af99a8daef29261d3b5dfde1ea456bc.png',
    link: '/docs/themes/getting-started',
  },
];

function Feature({
  title,
  description,
  buttonText,
  imageUrl,
  link,
}: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureColumn)}>
      <div className={styles.featureCard}>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
          <Link to={link} className={styles.featureButton}>
            {buttonText} →
          </Link>
        </div>
        <div
          className={styles.featureImageContainer}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
