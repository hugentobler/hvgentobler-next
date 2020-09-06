/**
 * LAYOUT
 * layouts/main.js
 * The primary layout.
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styled from 'styled-components';
import {
  m as motion,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
} from 'framer-motion';
/* Components */
import Favicon from '../components/Favicon';
import Footer from '../components/Footer';
import SetCSSProperty from '../components/dom/CustomCssProperties';
import SetVerticalHeight from '../components/dom/SetVerticalHeight';
import LogConsole from '../components/dom/LogConsole';

/**
 * ANIMATIONS
 */
const variants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.15,
      ease: 'easeOut',
    },
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

/**
 * DEFAULT EXPORT
 */
export default function Layout(props) {
  const {
    children, title, description, image, colour,
  } = props;
  const router = useRouter();
  const { asPath } = useRouter();
  const isProd = process.env.IS_PROD;

  /* Menu state management. */
  // const [menuOpen, toggleMenu] = useState(false);
  // const [menuAnimating, animateMenu] = useState(false);

  React.useEffect(() => {
    /* Update css properties. */
    SetCSSProperty(colour);
    /* Set vertical height. */
    SetVerticalHeight();
    /* Log console. */
    if (isProd) LogConsole();
    /* On subsequent route change, close menu and update css properties. */
    const handleRouteChange = (url) => {
      // toggleMenu(false);
      SetCSSProperty(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <Favicon />
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=5.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Inspect Element" />
        <meta property="og:url" content={`https://inspectelement.co${asPath}`} />
        <meta property="og:image" content={`https://inspectelement.co${image}`} />
        {/* Prevent robots scraping dev / staging sites */}
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
        {/* Preload primary font */}
        <link rel="preload" href="/fonts/soehne-test-buch.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        {/* Plausible analytics */}
        {process.browser && <script async defer data-domain="hvgentobler.com" src="https://plausible.io/js/plausible.js" />}
      </Head>
      <Root>
        {/* <Background /> */}
        {/* <Blinds
            menuOpen={menuOpen}
            animateMenu={animateMenu}
        /> */}
        <MotionConfig
          features={[AnimationFeature, ExitFeature]}
        >
          <motion.main
            initial="exit"
            animate="enter"
            exit="exit"
            variants={variants}
          >
            {children}
            {/* {React.Children.map(children, (child) => {
              Pass additional props if child is a component.
              if (typeof child.type === 'object') {
                return React.cloneElement(child, { menuOpen });
              }
              return child;
            })} */}
          </motion.main>
        </MotionConfig>
      </Root>
      <Footer />
      {/* <Navigation
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        menuAnimating={menuAnimating}
        animateMenu={animateMenu}
      /> */}
    </>
  );
}

/**
 * PROPTYPES
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  colour: PropTypes.string,
};

Layout.defaultProps = {
  colour: 'night',
};

/**
 * STYLED COMPONENTS
 */
const Root = styled.div`
  background-color: var(--background-color);
  position: relative;
  text-rendering: optimizeLegibility;
  z-index: 10;
`;
