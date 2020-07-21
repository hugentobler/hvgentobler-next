/**
 * HOMEPAGE
 * pages/index.js
 */

/**
 * MODULES
 */
// import styled from 'styled-components';
/* Components */
import Layout from '../layouts/main';
import TextHero from '../components/ui/TextHero';
import NavBar from '../components/ui/NavBar';

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: 'Christopher Hugentobler - Where I inspect the elements.',
  description: 'This is the description.',
  image: '/',
  colour: 'night',
};

/**
 * DEFAULT EXPORT
 */
export default function Index() {
  return (
    <Layout {...frontmatter}>
      <TextHero>
        <h1>We build digital experiences that people want, then distribute them where people are. Led by human nature, driven by data, our work aims to give people back their time.</h1>
      </TextHero>
      <NavBar />
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
