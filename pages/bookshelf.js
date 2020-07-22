/**
 * BOOKSHELF
 * pages/bookshelf.js
*/

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Layout from '../layouts/main';
import ImageHero from '../components/ui/ImageHero';
import NavBar from '../components/ui/NavBar';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Bookshelf ~ Inspect Element',
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
      <NavBar />
      <section>
        <h1>Curiosity pushed him throughout his entire career and it’s still at the core of his work ethic.</h1>
      </section>
      <section>
        <Grid>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>People</span></p>
          <p>
            Hungry
            <span> ~ Eating, Road-Tripping, and Risking It All with the Greatest Chef in the World</span>
          </p>
          <p><span>Jeff Gordinier</span></p>
          <p>
            Valley of Genius
            <span> ~ The Uncensored History of Silicon Valley</span>
          </p>
          <p><span>Adam Fisher</span></p>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>Mental Models</span></p>
          <p>The Hard Thing About Hard Things</p>
          <p><span>Ben Horowitz</span></p>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>Fiction</span></p>
          <p>
            Surface Detail
            <span> (Culture Series)</span>
          </p>
          <p><span>Iain Banks</span></p>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>Blogs</span></p>
          <p>Handbooks of Knowledge</p>
          <p><span>Julian Shapiro</span></p>
        </Grid>
      </section>
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
  p {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.3;
    margin: 0;
    grid-column: 1 / span 13;
    @media ${(props) => props.theme.forMiddle} {
      &:nth-of-type(odd) {
        grid-column: 1 / span 8;
      }
      &:nth-of-type(even) {
        grid-column: 10 / span 3;
      }
    }
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
      &:nth-of-type(odd) {
        grid-column: 4 / span 4;
      }
      &:nth-of-type(even) {
        grid-column: 10 / span 3;
      }
    }
  }
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
