import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import { AiFillYoutube } from 'react-icons/ai';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline} </p>

        <div className='iframecontainer'>
          <iframe
            className='responsive__iframe'
            src='https://www.youtube.com/embed/3xH1vBuDbBA'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>

        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Docs
          </Link>
          <a
            className='button button--secondary button--lg'
            target='_blank'
            href='https://www.spreadit.pro'
            rel='noreferrer'
          >
            Live Version
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Spreadit`} description='Aprendiendo de Bitcoin'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
