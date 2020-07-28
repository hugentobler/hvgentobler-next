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
        <Table caption="Recognition">
          <blockquote><h2>The pandemic has been an opportunity for the entire learning sector. It has accelerated the adoption of online learning. Especially parents and educators have really warmed to it.</h2></blockquote>
          <Logo>
            <p>CNN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-06-13<br />Inventing Tomorrow: From Classroom to <q>Class Zoom</q></p>
          </Logo>
          <blockquote><h2>You&apos;ve obviously got first-mover advantage in terms of this digital license, but many of the incumbents are investing in digital. The big sell now is the convenience and the speed. We have an advantage because of direct relationship with the customer.</h2></blockquote>
          <Logo>
            <p>Bloomberg TV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-06-02<br/>H.K. Online Insurer Bowtie Sees <q>Very Positive</q> Outlook, CEO Says</p>
          </Logo>
          <blockquote><h2>Klook, which offers its services in nine languages and 41 currencies, processed $1 billion in bookings last year. In mature markets such as Hong Kong and Singapore they have <q>healthy cash flow</q>, while in newer markets they are focused on investing to expand the user base.</h2></blockquote>
          <Logo>
            <p>The Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2019-10-10<br/>SoftBank-Backed Tourism App Klook Eyes Expansion in Europe</p>
          </Logo>
          <blockquote><h3>Snapask, an on-demand tutoring app, announced today that it has raised $35 million in Series B funding. Earmarked for the startup’s expansion in Southeast Asia, the round was led by Asia Partners and Intervest.</h3></blockquote>
          <Logo>
            <p>TechCrunch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2020-02-26</p>
          </Logo>
          <blockquote><h3>Hong Kong logistics company GoGoVan has agreed to a merger with 58 Suyun, the freight business of mainland Chinese online classifieds giant 58 Home, creating the city’s first start-up worth more than US$1 billion.</h3></blockquote>
          <Logo>
            <p>SCMP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2017-08-28</p>
          </Logo>
          <blockquote><h3>The non-profit Running To Stop The Traffik is putting on this race, entirely run by high school students. When you get a cramp and can&apos;t go on anymore, just think about what the victims are going through, and then keep on going for them.</h3></blockquote>
          <Logo>
            <p>CNN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016-12-02</p>
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
  p {
    grid-column: 1 / 11;
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
