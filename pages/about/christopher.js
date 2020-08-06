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
              Christopher grew up in an environment that celebrated curiosity and hospitality. One day he'll make movies in space. But first he's making software products.
            </p>
            <p>Born in Taipei, Christopher moved to Xi'an, then Kota Kinabalu, grew up in Macao and Guangzhou, and came of age in Hong Kong.</p>
            <p>In high school, he clicked 'Inspect Element' for the first time after promising to complete an event website in one month. He delivered.</p>
          </div>
        </SectionHeader>
      </section>
      <section>
        <ThreeColumns>
          <div>
            <h2>Highlights</h2>
            <p>As 1st employee at Snapask reporting to the CEO, Christopher setup and led initial product, design, growth and b2b teams. He launched 3 products, managing their P&L, and led several cross-functional, cross-border teams.</p>
            <p>His work at 24 Hour Race resulted in millions of dollars donated to charities fighting human trafficking. Christopher spent several years working in youth leadership development. His goal was to inspire and empower more youth action.</p>
            <p>Christopher is regularly invited to speak on topics related to startups, product development and growth marketing. He is fluent in English, Mandarin and Cantonese.</p>
          </div>
          <div>
            <h2>Expertise</h2>
            <ul>
              <li>
                Prioritize your product opportunities backlog based on user feedback, business goals, your product vision and the competitive landscape.
              </li>
              <li>
                Optimize your conversion funnel by accessing your audience's emotions (heart), while speaking clearly to their logic (brain).
              </li>
              <li>
                Define and orchestrate your omni-channel marketing mix across the whole product funnel / user experience.
              </li>
              <li>
                Recruit and operate your own effective and empowered product growht teams.
              </li>
            </ul>
          </div>
          <div>
            <h2>Experience</h2>
            <p>
              CRO Consultant
              <br />
              Bowtie
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Life & Medical Insurtech</span>
              <br />
              <span>Mar 2020</span>
            </p>
            <p>
              Product Lead / Growth Lead / Misc.
              <br />
              Snapask
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;College & Career Edutech</span>
              <br />
              <span>Feb 2016 ~ Sep 2020</span>
            </p>
            <p>
              Co-founder
              <br />
              Pedder
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App & Web Agency</span>
              <br />
              <span>Jun 2014 ~ Jan 2016</span>
            </p>
            <p>
              Co-founder
              <br />
              24 Hour Race
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advocacy & Community</span>
              <br />
              <span>Jan 2014 ~ May 2015</span>
            </p>
          </div>
        </ThreeColumns>
      </section>
      <SectionCta href="/contact" color="--classic-blue">
        <div>
          <h1>Work with Christopher</h1>
          <p>It doesn't hurt to ask.</p>
        </div>
      </SectionCta>
      <section>
        <TableList>
          <blockquote><h2>An intuitive leader with integrity. Work with him to effect great change.</h2></blockquote>
          <p>
            Teammate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Ingrid</span>
          </p>
          <blockquote><h2>在颱風眼裡面工作的人。</h2></blockquote>
          <p>
            First impression&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Dustin</span>
          </p>
          <blockquote><h2>Sharp and critical; empathetic and team-oriented; visionary and audacious.</h2></blockquote>
          <p>
            Teammate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>Michelle</span>
          </p>
        </TableList>
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
