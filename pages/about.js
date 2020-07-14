/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Layout from '../layouts/main';
import Image from '../components/Image';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'About',
  description: ' ',
  image: ' ',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  return (
    <Layout {...frontmatter}>
      <ImageHero>
        <Wrap>
          <Image
            alt="Christopher pointing up and smiling!"
            src="/images/25th/main.jpg"
            h="1599"
            w="1200"
          />
          <Filter>
            <p>Avid Explorer</p>
          </Filter>
        </Wrap>
      </ImageHero>
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const ImageHero = styled.div`
  align-items: center;
  display: flex;
  height: 100vH;
  min-height: 480px;
  ${'' /* height: calc(100vH - var(--space-2)); */}
  ${'' /* margin-right: calc(-1 * var(--space-2)); */}
  @media ${theme.forNotSmall} {
    margin-left: calc(-1 * var(--space-2));
    min-height: 720px;
  }

`;

const Wrap = styled.div`
  background-color: white;
  box-sizing: border-box;
  height: 100%;
  max-height: 480px;
  max-width: 360px;
  padding: var(--space-1);
  position: relative;
  width: 100%;
  @media ${theme.forNotSmall} {
    max-height: 600px;
    max-width: 480px;
  }
`;

const Filter = styled.div`
  align-items: center;
  background-color: rgba(28, 28, 28, 0.33);
  bottom: var(--space-1);
  color: var(--background-color);
  display: flex;
  justify-content: center;
  left: var(--space-1);
  top: var(--space-1);
  position: absolute;
  right: var(--space-1);
`;
