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
  title: 'About ~ Christopher Hugentobler',
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
        <Grid>
          <Projects>
            <h2>Projects</h2>
            <h3>
              <b>Bowtie</b>
              {' '}
              - Life & Medical Insurtech
            </h3>
            <Date>Mar 2020 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              <b>Snapask</b>
              {' '}
              - College & Career Edutech
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              <b>Pedder</b>
              {' '}
              - Mobile Apps
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              <b>24 Hour Race</b>
              {' '}
              - Advocacy & Community
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Projects>
          <Skills>
            <h2>Skills</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Skills>
          <Networks>
            <h2>Networks</h2>
            <h3>University of Hong Kong</h3>
          </Networks>
        </Grid>
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

const Grid = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto 1fr;
  & > div {
    max-width: ${theme.contentWidth};
    padding-right: var(--space-6);
  }
`;

const Projects = styled.div`
  grid-column: 1 / span 2;
  grid-row: 2 / 2;
  @media screen and (min-width: 720px) {
    grid-column: 1 / 1;
    grid-row: 1 / span 2;
  }
`;

const Skills = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / 1;
  @media screen and (min-width: 720px) {
    grid-column: 2 / 2;
  }
`;

const Networks = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3 / 3;
  @media screen and (min-width: 720px) {
    grid-column: 2 / 2;
    grid-row: 2 / 2;
  }
`;

const Date = styled.span`
  display: block;
  font-size: 0.7em;
  font-weight: 400;
  letter-spacing: 0.1em;
  margin-top: var(--space-1);
  text-transform: uppercase;
`;
