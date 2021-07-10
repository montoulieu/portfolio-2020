import { motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import NavMenu from '../components/NavMenu';
import usePanelBear from '../hooks/usePanelbear';

import '../styles/index.css';
import 'react-slideshow-image/dist/styles.css';

export default function MyApp({
  Component, pageProps, router, resumeFile,
}) {
  usePanelBear('ATv4xJM6hl0', {});

  return (
    <div className="h-full">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
        />
      </Head>
      <DefaultSeo
        title="Pieter Montoulieu"
        description="Full stack engineer, game developer, and audio engineer in Denver, Colorado."
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.montoulieu.dev/',
          site_name: 'Pieter Montoulieu',
          images: [
            {
              url: 'https://www.montoulieu.dev/images/social-pic.jpg',
            },
          ],
        }}
        twitter={{
          handle: '@_montoulieu',
          site: '@_montoulieu',
          cardType: 'summary_large_image',
        }}
      />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        className="h-full"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <NavMenu resumeFile={resumeFile} />
    </div>
  );
}
