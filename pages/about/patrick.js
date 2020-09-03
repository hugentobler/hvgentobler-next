/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
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
  title: 'Patrick Yip - Product and growth strategy for tech companies',
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
        alt=""
        src=""
        h="1599"
        w="1200"
        captions={[
          'Patrick Yip',
          'Marketing tagline',
        ]}
      />
      <NavBar />
      <section>
        <SectionHeader>
          <h1>
            Enabling growth with prioritization, experiments and tech.
          </h1>
          <div>
            <p>Being a social science ex-academics, Patrick knows how to blend scientific rigour into driving business growth.</p>
            <p>Born and bred in Hong Kong, now based in Singapore, Patrick has extensive experience across growing companies at different stages and across industries, from travel to fashion, from consumer products to enterprise softwares.</p>
            <p>Although he has an ample interest in social sciences, he also grows up with a coding-literate background--starting building his first website at junior secondary school.</p>
          </div>
        </SectionHeader>
      </section>
      <section>
        <ThreeColumns>
          <div>
            <h2>Highlights</h2>
            <p>Working at ranges of companies from early stage startups to more established ones, Patrick identifies growth opportunities, implement experiments and scale what works.</p>
            <p>At OneSky and EventXtra, Patrick is able to set up content marketing from scratch to be recognized veteran VCs from the Valley, and transformed a loosely operating sales organization to scalable lead generation for Fortune 500 companies.</p>
            <p>Currently, he is vertical growth lead at Style Theory, the largest circular fashion platform in Southeast Asia.</p>
            <p>Patrick has spoken about global expansion and inbound marketing in Hong Kong, Helsinki and Shenzhen. He can speak fluently in English, Mandarin and Cantonese.</p>
          </div>
          <div>
            <h2>Expertise</h2>
            <ul>
              <li>
                Review channel portfolio and identify your next growth lever to test
              </li>
              <li>
                Empower your growth teams with automating key steps and processes.
              </li>
              <li>
                Optimize your user journey for better conversion rates.
              </li>
            </ul>
          </div>
          <div>
            <h2>Experience</h2>
            <p>
              Vertical Growth Lead, Singapore Apparel
              <br />
              Style Theory
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fashion, Subscription</span>
              <br />
              <span>Oct 2019</span>
            </p>
            <p>
              Growth Manager
              <br />
              Skyscanner
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travel, Marketplace</span>
              <br />
              <span>Aug 2018 - Oct 2019</span>
            </p>
            <p>
              Head of Marketing and Sales Development
              <br />
              Eventextra
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2B SaaS</span>
              <br />
              <span>Nov 2016 - Jul 2018</span>
            </p>
            <p>
              Incubatee, Batch 19
              <br />
              500 Startups
              <br />
              <span>Nov 2016 - Feb 2017</span>
            </p>
            <p>
              Head of Marketing
              <br />
              OneSky
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2B SaaS, Marketplace</span>
              <br />
              <span>Aug 2013 - Nov 2016</span>
            </p>
          </div>
        </ThreeColumns>
      </section>
      <SectionCta href="/contact" color="--classic-blue">
        <div>
          <h1>Work with Patrick</h1>
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
        alt=""
        src=""
        h="1599"
        w="1200"
        captions={[
          'In leisure time, Patrick enjoys reading loads of meaningful and "meaningless" stuff to feed his curiosity. Probably too much.',
        ]}
      />
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/
