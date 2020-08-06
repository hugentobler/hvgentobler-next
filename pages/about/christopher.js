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
import SectionHeader from '../../components/ui/SectionHeader';
import TableList from '../../components/ui/TableList';
import ThreeColumns from '../../components/ui/ThreeColumns';
import SectionCta from '../../components/ui/SectionCta';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Christopher Hugentobler - Product and growth strategy for tech companies',
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
        alt="Christopher smiling at a table."
        src="/images/about/christopher/gray.jpg"
        h="1799"
        w="1200"
        captions={[
          'Christopher Hugentobler 姚思陶',
          'A walking talking venn diagram',
        ]}
      />
      <NavBar />
      <section>
        <SectionHeader>
          <h1>
            Builder of friendly humanist software products.
          </h1>
          <div>
            <p>
              Christopher grew up surrounded by an attention to detail. His father an
            </p>
            <p>Born in Taipei, Christopher moved to Xi'an, then Kota Kinabalu, grew up in Macao and Guangzhou, and came of age in Hong Kong.</p>
            <p>In high school, he pressed </p>
            <p>My goal is to make movies in space, but first I will build awesome software products.</p>
            <ul>
              <li>
                MVP definition and go-to-market
              </li>
              <li>
                Conversion funnel optimization and A/B testing
              </li>
              <li>
                Cross-border monetization and localization
              </li>
              <li>
                Building product growth teams and workflows
              </li>
            </ul>
          </div>
        </SectionHeader>
      </section>
      <section>
        <TableList>
          <blockquote><h2>An intuitive leader with integrity. Work with him to effect great change.</h2></blockquote>
          <p>
            Teammate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Ingrid</span>
          </p>
          <blockquote><h2>Sharp and critical; empathetic and team-oriented; visionary and audacious.</h2></blockquote>
          <p>
            Teammate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Michelle</span>
          </p>
          <blockquote><h2>在颱風眼裡面工作的人。</h2></blockquote>
          <p>
            First impression&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Dustin</span>
          </p>
        </TableList>
      </section>
      <SectionCta href="/contact" color="--classic-blue">
        <div>
          <h1>Work with Christopher</h1>
          <p>It doesn't hurt to ask.</p>
        </div>
      </SectionCta>
      <section>
        <ThreeColumns>
          <div>
            <h2><span>Projects</span></h2>
            <h3>
              Bowtie
              <span> ~ Life & Medical Insurtech</span>
            </h3>
            <p><span>Mar 2020 - present</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              Snapask
              <span> - College & Career Edutech</span>
            </h3>
            <p><span>Feb 2016 - present</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              Pedder
              <span> - Mobile Apps</span>
            </h3>
            <p><span>Feb 2016 - present</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h3>
              24 Hour Race
              <span> - Advocacy & Community</span>
            </h3>
            <p><span>Feb 2016 - present</span></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div>
            <h2><span>Networks</span></h2>
            <ul>
              <li>
                University of Hong Kong
              </li>
              <li>
                AIESEC
              </li>
              <li>
                United World Colleges
              </li>
            </ul>
          </div>
        </ThreeColumns>
      </section>
      <ImageHero
        alt="Christopher smiling on a rooftop."
        src="/images/about/christopher/pink.jpg"
        h="1599"
        w="1200"
        captions={[
          'Christopher is an adventure addict. He loves science fiction, exploring the outdoors, great food and surfing.',
        ]}
      />
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/
