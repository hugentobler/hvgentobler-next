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
        <CompanyGrid>
          <CompanyGridTitle>
            <p><span>Select Work</span></p>
          </CompanyGridTitle>
          <Caption>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</Caption>
          <Logo>
            <img
              alt="Bowtie"
              src="/images/home/bowtie.png"
              w="100"
            />
          </Logo>
          <Caption>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</Caption>
          <Logo>
            <img
              alt="Gogovan"
              src="/images/home/gogovan.png"
              w="100"
            />
          </Logo>
          <Caption>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</Caption>
          <Logo>
            <img
              alt="Klook"
              src="/images/home/klook.png"
              w="100"
            />
          </Logo>
          <Caption>We work with early and growth stage teams to build and monetize modern digital experiences. We work with early and growth stage teams to build and monetize modern digital experiences.</Caption>
          <Logo>
            <img
              alt="Snapask"
              src="/images/home/snapask.png"
              w="100"
            />
          </Logo>
        </CompanyGrid>
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
        <CompanyGrid>
          <Dates />
          <h1><span>As Featured In</span></h1>
          <Dates />
          <p>Techcrunch</p>
          <p>CNN</p>
          <p>SCMP</p>
        </CompanyGrid>
      </section>
    </Layout>
  );
}

/**
 * STYLED COMPONENTS
 */
const CompanyGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(13, 1fr);
 gap: var(--space-6) var(--space-1);
 span {
   grid-column: 1 / 3;
 }
 h1 {
   a {
     border: none;
   }
   grid-column: 4 / 13;
   margin: 0;
   @media ${(props) => props.theme.forMiddle} {
     grid-column: 4 / 11;
   }
   @media ${(props) => props.theme.forNotSmall} {
     grid-column: 4 / 10;
   }
 }
 p {
   font-size: 1.2rem;
   font-weight: 300;
   line-height: 1.3;
   margin: 0;
   @media ${(props) => props.theme.forNotSmall} {
     font-size: 1vw;
  }
 }
`;

const CompanyGridTitle = styled.div`
  grid-column: 10 / 14;
`;

const Logo = styled.div`
  align-self: center;
  grid-column: 10 / 14;
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

const Caption = styled.p`
  grid-column: 4 / span 4;
`;

const Dates = styled.span`
 align-self: top;
 justify-self: center;
 display: block;
 font-size: 0.7em;
 font-weight: 400;
 letter-spacing: 0.1em;
 margin-top: var(--space-1);
 text-transform: uppercase;
 img {
   max-height: 40px;
   max-width: 120px;
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
