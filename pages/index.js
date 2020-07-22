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

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: 'Inspect Element ~ Product and Growth Collective',
  description: 'This is the description.',
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
        <h1>We build digital experiences that people want, then distribute them where people are. Led by human nature, driven by data, our work aims to give people back their time.</h1>
      </TextHero>
      <NavBar />
      <section>
        <CompanyGrid>
          <Dates />
          <h1><span>Selected Work</span></h1>
          <Dates>
            <img
              alt="Snapask"
              src="/images/home/snapask.png"
            />
          </Dates>
          <h1>
            Building the future of learning from 0 to $200M
          </h1>
          <Dates>
            <img
              alt="Klook"
              src="/images/home/klook.png"
            />
          </Dates>
          <h1>
            Leading product growth experimentation in travel
          </h1>
          <Dates>
            <img
              alt="Bowtie"
              src="/images/home/bowtie.png"
            />
          </Dates>
          <h1>
            3x conversion rates in digital medical insurance
          </h1>
          <Dates>
            <img
              alt="Gogovan"
              src="/images/home/gogovan.png"
            />
          </Dates>
          <h1>
            Capturing mobility market share from fierce competition
          </h1>
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
