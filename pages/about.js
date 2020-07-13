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
        <img
          src="/images/about/portrait.jpeg"
          alt=""
        />
        <ImageHeroText>
          <p>Explorer</p>
        </ImageHeroText>
      </ImageHero>
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
const ImageHero = styled.div`
  margin-left: calc(-1 * var(--space-2));
  margin-right: calc(-1 * var(--space-2));
  img {
    object-fit: cover;
    height: 100vH;
    width: 100%;
  }
`;

const ImageHeroText = styled.div`
  align-items: center;
  background-color: rgba(28, 28, 28, 0.33);
  bottom: 0;
  color: var(--background-color);
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  position: absolute;
  right: 0;
`;
