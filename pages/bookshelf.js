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
import NavBar from '../components/ui/NavBar';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Bookshelf - Christopher Hugentobler',
  description: 'Stuff I read recently.',
  image: '/images/home/og.jpg',
  colour: 'makeup',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  return (
    <Layout {...frontmatter}>
      <NavBar />
      <section>
        <Grid>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>Fiction</span></p>
          <p>
            Surface Detail
            <span> (Culture Series)</span>
          </p>
          <p><span>Iain Banks</span></p>
          <p>
            Blindsight
          </p>
          <p><span>Peter Watts</span></p>
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
            Kitchen Confidential
          </p>
          <p><span>Anthony Bourdain</span></p>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>History</span></p>
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
          <p>The Design of Everyday Things</p>
          <p><span>Donald Norman</span></p>
          <p>&nbsp;</p>
          <p />
          <p />
          <p><span>Blogs</span></p>
          <p>Handbooks of Knowledge</p>
          <p><span>Julian Shapiro</span></p>
          <p>
            Divinations
            <span> | Substack</span>
          </p>
          <p><span>Nathan Baschez</span></p>
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
  gap: var(--space-2) var(--space-1);
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
