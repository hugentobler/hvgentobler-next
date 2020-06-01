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
import Layout from '../components/Layout';

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
  /* Dynamic imports */
  // const Animation1 = dynamic(
  //   () => import('../components/home/1'),
  //   { ssr: false, loading: () => <p>Loading</p> }
  // )
  // const Animation2 = dynamic(
  //   () => import('../components/home/2'),
  //   { ssr: false, loading: () => <p>Loading</p> }
  // )

  return (
    <Layout {...frontmatter}>
      {/* title={title}
        description={description}
        image={image}
      > */}
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
      <section>
        <h2>
          Wide-eyed
          <br />
          outdoors
          <br />
          addict
          <br />
          Millennial
          <br />
          tech
          <br />
          nut
          <br />
          Software
          <br />
          entrepreneur
          <br />
        </h2>
      </section>
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
