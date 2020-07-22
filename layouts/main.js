/**
 * LAYOUT
 * layouts/main.js
 * The primary layout.
 */

/**
 * MODULES
 */
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
/* Components */
import Favicon from '../components/Favicon';
import Footer from '../components/Footer';
import SetCSSProperty from '../components/CustomCssProperties';
import SetVerticalHeight from '../components/SetVerticalHeight';

/**
 * DYNAMIC IMPORTS
 */
const Background = dynamic(() => import('../components/Background'));

// const Blinds = dynamic(() => import('../components/Blinds'));

// const Navigation = dynamic(() => import('../components/Navigation'));

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
  const [menuOpen, toggleMenu] = useState(false);
  const [menuAnimating, animateMenu] = useState(false);

  useEffect(() => {
    /* Update css properties. */
    SetCSSProperty(colour);
    /* Set vertical height. */
    SetVerticalHeight();
    /* On subsequent route change, close menu and update css properties. */
    const handleRouteChange = (url) => {
      toggleMenu(false);
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
        <meta property="og:site_name" content="Christopher Hugentobler" />
        <meta property="og:url" content={`https://inspectelement.co${asPath}`} />
        <meta property="og:image" content={`https://inspectelement.co${image}`} />
        {/* Prevent robots scraping dev / staging sites */}
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
        {/* Preload primary font */}
        <link rel="preload" href="/fonts/soehne-test-buch.woff" as="font" type="font/woff" crossOrigin="anonymous" />
      </Head>
      <Root>
        {/* <Background /> */}
        {/* <Blinds
          menuOpen={menuOpen}
          animateMenu={animateMenu}
        /> */}
        <main>
          {React.Children.map(children, (child) => {
            /* Pass additional props if child is a component. */
            if (typeof child.type === 'object') {
              return React.cloneElement(child, { menuOpen });
            }
            return child;
          })}
        </main>
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
  colour: 'default',
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
