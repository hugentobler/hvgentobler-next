/**
 * HOMEPAGE
 * pages/index.js
 */

/**
 * MODULES
 */
// import dynamic from 'next/dynamic';
import styled from 'styled-components';
/* Components */
import Layout from '../layouts/main';

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
      <Hero>
        <h6>
          Enchanté
          <span role="img" aria-label="Wave"> 👋 </span>
          I&apos;m Christopher
        </h6>
        <h1>A walking, talking venn diagram.</h1>
        <p>
          This is something amazing his is something amazing his is something amazinghis is something amazinghis is something amazinghis is something amazinghis is something amazing
        </p>
      </Hero>
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 480px;
  min-height: 80vh;
`;
