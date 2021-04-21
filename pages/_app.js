import { motion } from 'framer-motion';
import NavMenu from '../components/NavMenu';

import '../styles/index.css';
import 'react-slideshow-image/dist/styles.css';

export default function MyApp({
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
