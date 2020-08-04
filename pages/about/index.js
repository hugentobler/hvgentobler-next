/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
/* Components */
import Layout from '../../layouts/main';
import TextHero from '../../components/ui/TextHero';
import NavBar from '../../components/ui/NavBar';
import SectionHeader from '../../components/ui/SectionHeader';
import TableList from '../../components/ui/TableList';
import SectionCta from '../../components/ui/SectionCta';
import ThreeColumns from '../../components/ui/ThreeColumns';
import Portraits from '../../components/Portraits';

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
          <h1>Meet the extension of your in-house team.</h1>
          <div>
            <p>
              We are a multi-disciplinary collective of digital product and growth experts. We are all practising leaders and operators.
            </p>
          </div>
        </SectionHeader>
        <Portraits />
      </section>
      <section>
        <SectionHeader>
          <h1>We're led by human nature, driven by data.</h1>
          <div />
        </SectionHeader>
        <ThreeColumns>
          <div>
            <h3>We specialize in common sense.</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
          </div>
          <div>
            <h3>We start from first principles.</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
          </div>
          <div>
            <h3>We build uncomplicated hypotheses.</h3>
            <p><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></p>
          </div>
        </ThreeColumns>
      </section>
      <section>
        <ThreeColumns caption="Add our expertise to your toolbox">
          <div>
            <h2>
              <span>Ø1&nbsp;&nbsp;</span>
              Product Management
            </h2>
            <ul>
              <li>
                Develop software with empowered product teams.
              </li>
              <li>
                Discover product opportunities and test MVPs.
              </li>
              <li>
                Audit your product UX with data and user feedback.
              </li>
              <li>
                Invest in features for conversion, retention and personalization.
              </li>
            </ul>
          </div>
          <div>
            <h2>
              <span>Ø2&nbsp;&nbsp;</span>
              Growth Marketing
            </h2>
            <ul>
              <li>
                Measure and analyze data to model growth.
              </li>
              <li>
                Setup tooling and workflows to quickly experiment.
              </li>
              <li>
                Nurture growth loops, optimize conversion funnels.
              </li>
              <li>
                Orchestrate organic and paid marketing plans.
              </li>
              <li>
                Engage and retain users on time and in context.
              </li>
            </ul>
          </div>
          <div>
            <h2>
              <span>Ø3&nbsp;&nbsp;</span>
              Monetization & Localization
            </h2>
            <ul>
              <li>
                Anaylze and model users' willingness to pay.
              </li>
              <li>
                Setup recurring revenue strategies and pricing.
              </li>
              <li>
                Model best practices to acquire international customers.
              </li>
            </ul>
          </div>
        </ThreeColumns>
      </section>
      <SectionCta href="/contact" color="--black">
        <div>
          <h1>Schedule your call</h1>
          <p>Even if you don't know where your bottlenecks are, we should still talk.</p>
        </div>
      </SectionCta>
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
