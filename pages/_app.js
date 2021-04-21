import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';
import { getResumeFile } from '../lib/api';

import '../styles/index.css';
import 'react-slideshow-image/dist/styles.css';

function MyApp({
  Component, pageProps, router, resumeFile,
}) {
  return (
    <div className="h-full">
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

MyApp.getInitialProps = async () => {
  const data = await getResumeFile();
  return { resumeFile: data };
};

export default MyApp;
