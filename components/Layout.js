// components/Layout.js

// Modules
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Head from 'next/head';
import Favicon from '../components/Favicon';
import Background from '../components/Background';
import Blinds from '../components/Blinds';
import Navigation from '../components/Navigation';

// Dynamic import
// Client side javascript, we don't want server side rendering
// const Browser = dynamic(
//   () => import('../components/Browser'),
//   { ssr: false }
// );

const Layout = props => {
  // Get current path for frontmatter.
  const router = useRouter();
  // Get build environment from next config.
  const isProd = process.env.IS_PROD;

  // Declare state variable for toggling navigation menu
  const [menuOpen, toggleMenu] = useState(false);
  const [menuAnimating, animateMenu] = useState(false);

  return (
    <>
      <Head>
        <Favicon/>
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Christopher Hugentobler" />
        <meta property="og:url" content={`https://hvgentobler.com${router.asPath}`} />
        <meta property="og:image" content={`https://hvgentobler.com${props.image}`} />
        {isProd ? <meta name="robots" content="index, follow" /> : <meta name="robots" content="noindex, nofollow" />}
      </Head>
      <Root>
        <Container>
          <motion.main
            initial='hidden'
            animate='visible'
            //exit='hidden'
            variants={mainVariants}
          >
            {props.children}
          </motion.main>
          <Background />
          <Blinds
            menuOpen={menuOpen}
            animateMenu={animateMenu}
          />
          <Navigation
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
            menuAnimating={menuAnimating}
            animateMenu={animateMenu}
          />
        </Container>
      </Root>
    </>
  )
};

// Animations Framer Motion
const mainVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: .4
    }
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: .3,
      ease: [.45,.05,.55,.95],
    }
  }
}

// Styled components
const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-rendering: optimizeLegibility;
`;

const Container = styled.div`
  max-width: var(--max-width);
  width: 100%;
`;

export default Layout;
