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
import ImageHero from '../components/ui/ImageHero';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'About',
  description: ' ',
  image: ' ',
  colour: 'night',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  return (
    <Layout {...frontmatter}>
      <ImageHero
        alt="Christopher pointing up and smiling!"
        src="/images/25th/main.jpg"
        h="1599"
        w="1200"
        caption="Avid Explorer"
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      </ImageHero>
      <ImageHero
        alt="Christopher pointing up and smiling!"
        src="/images/25th/main.jpg"
        h="1599"
        w="1200"
        caption="Avid Explorer"
      >
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
      </ImageHero>
      <section id="résumé">
        <Columns>
          <div>
            <h2>Skills</h2>
          </div>
          <div>
            <h2>Projects</h2>
          </div>
          <div>
            <h2>Networks</h2>
          </div>
        </Columns>
      </section>
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

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    max-width: ${theme.contentWidth};
    width: 100%;
  }
  @media ${theme.forNotSmall} {
    & > div {
      width: 33%;
    }
  }
`;
