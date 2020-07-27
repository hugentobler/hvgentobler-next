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
          <h1>Inspect Element is a product and growth collective.</h1>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences.</p>
        </SectionHeader>
      </section>
      <section>
        <Table caption="Select Works">
          <Logo>
            <h1>Bowtie</h1>
            <LogoWrap>
              <img
                alt="Bowtie"
                src="/images/home/bowtie.png"
              />
            </LogoWrap>
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <h1>Gogovan</h1>
            <LogoWrap>
              <img
                alt="Gogovan"
                src="/images/home/gogovan.png"
              />
            </LogoWrap>
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <h1>Klook</h1>
            <LogoWrap
              style={{ height: '16px' }}
            >
              <img
                alt="Klook"
                src="/images/home/klook.png"
              />
            </LogoWrap>
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
          <Logo>
            <h1>Snapask</h1>
            <LogoWrap>
              <img
                alt="Snapask"
                src="/images/home/snapask.png"
              />
            </LogoWrap>
          </Logo>
          <p>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</p>
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
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  column-gap: var(--space-1);
  img {
    object-fit: contain;
    object-position: 0% 50%;
    opacity: .6;
    width: 100%;
    height: 100%;
  }
  h1 {
    grid-column: 1 / span 6;
    line-height: 1;
    margin: 0;
  }
`;

const LogoWrap = styled.div`
  align-self: center;
  height: 24px;
  grid-column: 7 / 11;
  width: 72px;
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
