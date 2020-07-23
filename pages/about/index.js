/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Layout from '../../layouts/main';
import ImageHero from '../../components/ui/ImageHero';
import NavBar from '../../components/ui/NavBar';

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
        src="/images/about/christopher/pink.jpg"
        h="1599"
        w="1200"
        captions={[
          'Christopher Hugentobler',
          'Walking Talking Venn Diagram',
        ]}
      />
      <NavBar />
      <section>
        <h1>Curiosity pushed him throughout his entire career and it’s still at the core of his work ethic.</h1>
        <Grid>
          <Projects>
            <h2><span>Projects</span></h2>
            <h3>
              Bowtie
              <span> ~ Life & Medical Insurtech</span>
            </h3>
            <Date>Mar 2020 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              Snapask
              <span> - College & Career Edutech</span>
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              Pedder
              <span> - Mobile Apps</span>
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              24 Hour Race
              <span> - Advocacy & Community</span>
            </h3>
            <Date>Feb 2016 - present</Date>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </Projects>
          <Skills>
            <h2><span>Skills</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Native fluency in English, Mandarin and Cantonese. Basic conversational French.</p>
          </Skills>
          <Networks>
            <h2><span>Networks</span></h2>
            <p>Growth Lever</p>
            <p>University of Hong Kong</p>
            <p>AIESEC</p>
            <p>United World Colleges</p>
          </Networks>
        </Grid>
      </section>
      <ImageHero
        alt="Christopher pointing up and smiling!"
        src="/images/about/christopher/green.jpg"
        h="1599"
        w="1200"
        captions={[
          'Outdoors Adventure Addict',
        ]}
      />
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/
const Grid = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: auto 1fr;
`;

const Projects = styled.div`
  grid-column: 1 / span 13;
  grid-row: 2 / 2;
  @media ${(props) => props.theme.forMiddle} {
    grid-column: 1 / span 6;
    grid-row: 1 / span 2;
  }
  @media ${(props) => props.theme.forNotSmall} {
    grid-column: 1 / span 5;
  }
`;

const Skills = styled.div`
  grid-column: 1 / span 13;
  grid-row: 1 / 1;
  @media ${(props) => props.theme.forMiddle} {
    grid-column: 8 / span 6;
  }
  @media ${(props) => props.theme.forNotSmall} {
    grid-column: 7 / span 5;
  }
`;

const Networks = styled.div`
  grid-column: 1 / span 13;
  grid-row: 3 / 3;
  @media ${(props) => props.theme.forMiddle} {
    grid-column: 8 / span 6;
    grid-row: 2 / 2;
  }
  @media ${(props) => props.theme.forNotSmall} {
    grid-column: 7 / span 5;
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
