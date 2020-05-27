/**
 * LAYOUT
 * components/Layout.js
 * The primary layout.
 */

/**
 * MODULES
 */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { motion } from 'framer-motion';
import styled from 'styled-components';
/* Components */
import Favicon from './Favicon';
import Background from './Background';
import Blinds from './Blinds';
import Navigation from './Navigation';
import Footer from './Footer';
import SetCSSProperty from './CustomCssProperties';

/**
 * ANIMATIONS
 */
const mainVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.3,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
};

/**
 * DEFAULT EXPORT
 */
export default function Layout(props) {
  const {
    children, title, description, image,
  } = props;
  const { asPath } = useRouter();
  const isProd = process.env.IS_PROD;

  /* Menu state management. */
  const [menuOpen, toggleMenu] = useState(false);
  const [menuAnimating, animateMenu] = useState(false);

  useEffect(() => {
    /* On subsequent route change, close menu and update css properties. */
    const handleRouteChange = (url) => {
      toggleMenu(false);
      SetCSSProperty(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <Favicon />
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Christopher Hugentobler" />
        <meta property="og:url" content={`https://hvgentobler.com${asPath}`} />
        <meta property="og:image" content={`https://hvgentobler.com${image}`} />
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Root>
        <Background />
        <Blinds
          menuOpen={menuOpen}
          animateMenu={animateMenu}
        />
        <Container>
          <motion.main
            initial="hidden"
            animate="visible"
            variants={mainVariants}
          >
            {React.Children.map(children, (child) => {
              /* Pass additional components if child is a component. */
              if (typeof child.type === 'object') {
                return React.cloneElement(child, { menuOpen });
              }
              return child;
            })}
          </motion.main>
        </Container>
      </Root>
      <Footer />
      <Navigation
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        menuAnimating={menuAnimating}
        animateMenu={animateMenu}
      />
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
};

/**
 * STYLED COMPONENTS
 */
const Root = styled.div`
  background-color: var(--background-color);
  position: relative;
  text-rendering: optimizeLegibility;
  z-index: 1;
`;

const Container = styled.div`
  margin: auto;
  max-width: var(--max-width);
  width: 100%;
`;
