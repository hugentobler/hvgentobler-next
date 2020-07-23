/**
 * HOMEPAGE
 * pages/index.js
 */

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Layout from '../layouts/main';
import TextHero from '../components/ui/TextHero';
import NavBar from '../components/ui/NavBar';
import SectionHeader from '../components/ui/SectionHeader';
import Table from '../components/ui/Table';

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: 'Inspect Element ~ Product and Growth Collective',
  description: 'We work with early and growth stage teams to build and monetize modern digital experiences.',
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
        <h1>Your customers, delighted. Your competitors, disrupted. Your milestones, achieved.</h1>
      </TextHero>
      <NavBar />
      <section>
        <SectionHeader>
          <h1><span>Inspect Element is a product and growth collective.</span></h1>
          <h2>We work with early and growth stage teams to build and monetize modern digital experiences.</h2>
        </SectionHeader>
        <Table caption="Select Work">
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <img
              alt="Bowtie"
              src="/images/home/bowtie.png"
            />
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <img
              alt="Gogovan"
              src="/images/home/gogovan.png"
            />
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <img
              alt="Klook"
              src="/images/home/klook.png"
            />
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <img
              alt="Snapask"
              src="/images/home/snapask.png"
            />
          </Logo>
        </Table>
      </section>
      <section>
        <Grid>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>&nbsp;</p>
          <p />
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>&nbsp;</p>
          <p />
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>&nbsp;</p>
          <p />
        </Grid>
      </section>
      <section>

      </section>
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
const Logo = styled.div`
  align-self: start;
  @media ${(props) => props.theme.forNotSmall} {
    align-self: center;
  }
  height: 32px;
  width: 100px;
  img {
    object-fit: contain;
    object-position: 0% 0%;
    opacity: .6;
    width: 100%;
    height: 100%;
  }
`;

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
