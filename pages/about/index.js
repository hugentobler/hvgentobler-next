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
import TextHero from '../../components/ui/TextHero';
import NavBar from '../../components/ui/NavBar';
import SectionHeader from '../../components/ui/SectionHeader';
import TableList from '../../components/ui/TableList';
import SectionCta from '../../components/ui/SectionCta';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'About Inspect Element',
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
      <TextHero caption="About">
        <h1>We build digital experiences that people want, then distribute them where people are.</h1>
      </TextHero>
      <NavBar />
      <section>
        <SectionHeader>
          <h1>Work with one of us, or bring the whole collective.</h1>
          <div>
            <p>
              We are a multi-disciplinary collective of digital product and growth experts. Every one of us a practising operator.
            </p>
          </div>
        </SectionHeader>
      </section>
      <SectionCta color="--lavender">
        <div>
          <Location><span>Taipei</span></Location>
          <h1>Christopher Hugentobler</h1>
        </div>
      </SectionCta>
      <SectionCta>
        <div>
          <Location><span>Hong Kong</span></Location>
          <h1>Vincent So</h1>
        </div>
      </SectionCta>
      <section>
        <SectionHeader>
          <h1>Led by human nature, driven by data.</h1>
          <div>
            <p>
              We specialise in common sense.
            </p>
            <p>
              We think in first principles.
            </p>
            <p>
              We test uncomplicated hypotheses.
            </p>
          </div>
        </SectionHeader>
      </section>
      <section>
        <TableList>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
          <p>
            They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.
          </p>
          <p><span>Tom Tsang <br/>Gogovan CEO</span></p>
        </TableList>
      </section>
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/

const Location = styled.p`
  bottom: 0;
  margin-bottom: var(--space-2);
  position: absolute;
`;
