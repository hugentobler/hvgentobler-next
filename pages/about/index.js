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
import ThreeColumns from '../../components/ui/ThreeColumns';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'About Inspect Element',
  description: ' ',
  image: ' ',
  colour: 'blue',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  return (
    <Layout {...frontmatter}>
      <TextHero caption="About">
        We build digital experiences that people want, then distribute them where people are.
      </TextHero>
      <NavBar />
      <section>
        <SectionHeader>
          <h1>Work with one of us. Access expertise from the whole collaborative.</h1>
          <div>
            <p>
              We are a multi-disciplinary collective of digital product and growth experts. Every one of us a practising operator.
            </p>
          </div>
        </SectionHeader>
      </section>
      <SectionCta href="/about/christopher" color="--lavender">
        <div>
          <Location><span>Taipei</span></Location>
          <h1>Christopher Hugentobler</h1>
        </div>
      </SectionCta>
      <SectionCta href="/about/vincent" color="--salmon">
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
        <ThreeColumns caption="Select Proficiencies">
          <div>
            <h2>
              Product
              <br />
              Management
            </h2>
            <ul>
              <li>
                Product management skills
              </li>
              <li>
                Product management skills
              </li>
              <li>
                Product management skills
              </li>
              <li>
                Product management skills
              </li>
            </ul>
          </div>
          <div>
            <h2>
              Growth
              <br />
              Marketing
            </h2>
            <ul>
              <li>
                Growth marketing skills
              </li>
              <li>
                Growth marketing skills
              </li>
              <li>
                Growth marketing skills
              </li>
              <li>
                Growth marketing skills
              </li>
            </ul>
          </div>
          <div>
            <h2>
              Monetization,
              <br />
              Localization
            </h2>
            <ul>
              <li>
                Monetization and localization skills
              </li>
              <li>
                Monetization and localization skills
              </li>
              <li>
                Monetization and localization skills
              </li>
              <li>
                Monetization and localization skills
              </li>
            </ul>
          </div>
        </ThreeColumns>
      </section>
      <section>
        <TableList>
          <blockquote><h2>They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.</h2></blockquote>
          <p>
            Gogovan CEO
            <br />
            <span>Tom Tsang</span>
          </p>
          <blockquote><h2>They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.</h2></blockquote>
          <p>
            Gogovan CEO
            <br />
            <span>Tom Tsang</span>
          </p>
          <blockquote><h2>They are an absolute pleasure to work with. Professional, responsive, sharp. Achieved results in record time.</h2></blockquote>
          <p>
            Gogovan CEO
            <br />
            <span>Tom Tsang</span>
          </p>
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
