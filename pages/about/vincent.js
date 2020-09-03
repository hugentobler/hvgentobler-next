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
  title: 'Vincent So - Product and growth strategy for tech companies',
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
          'Vincent So',
          'First product manager at Klook',
        ]}
      />
      <NavBar />
      <section>
        <SectionHeader>
          <h1>
            From 1 to 100, through growth x product.
          </h1>
          <div>
            <p>Vincent was born in Canada while growing up in Hong Kong. During college, Vincent interned at bank / MNC / 4As and came to a conclusion that being a founder would be the perfect job for him (which he would soon regreted).</p>
            <p>After graduating from college, Vincent founded his first startup in Hong Kong yet failed before reaching critical mass. By then Vincent has started his journey in startup learning how to scale growth.</p>
            <p>It's been over 7 years since Vincent first heard of the term "Growth Hacking" yet he's still passionate to treat it as a life long career, however now it's just growth, no hacking.</p>
          </div>
        </SectionHeader>
      </section>
      <section>
        <ThreeColumns>
          <div>
            <h2>Highlights</h2>
            <p>Specialized in building a growth team from scratch, Vincent was the first PM at Klook and scaled the team to &gt;10 with 4PMs and a scrum team with engineers and designers. He also led product analytics, user research at different stage of the company, and worked on new vertial expensions (e.g. concert and rails).</p>
            <p>At Gogovan, Vincent was first reporting to CMO, focusing on building a balanced acquisition mix and optimizing product adoption. After raising series B, Vincent shifted focus on product, focusing on conversion and retention. He was also in charge of product expansion in India.  Previously, Vincent was working together with Patrick at OneSky on outbound B2B growth. Currently he's Head of Growth at Evercare, healthcare tech startup based in Hong Kong, and growth advisor to startups and corporates in different fields.</p>
            <p>Vincent if the co-founder of Growth Lever, a growth community in HK, and guest lecturer & speaker of different universities, General Assembly, Growth Marketing Academy and Code for Hong Kong.</p>
          </div>
          <div>
            <h2>Expertise</h2>
            <ul>
              <li>
                0 to 1 ideation, user research and customer segmentation
              </li>
              <li>
                Defining company strategy & metrics, and how it impacts on your day to day task
              </li>
              <li>
                Expert in conversion optimization and A/B testing
              </li>
              <li>
                Acting as your interim Head of Growth or Head of Product, helping you not only in strategy level but also in managing the team
              </li>
              <li>
                Setting up balanced acquisition loops and maximize LTV/CAC ratio
              </li>
            </ul>
          </div>
          <div>
            <h2>Experience</h2>
            <p>
              Growth Consultant
              <br />
              New World Development
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Retail</span>
              <br />
              Automate
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transportation</span>
              <br />
              GLO Travel
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travel</span>
              <br />
              Grantit
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fintech</span>
              <br />
              FinMonster
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fintech</span>
              <br />
              SleekFlow
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2B SaaS</span>
              <br />
              <span>Jan 2020</span>
            </p>
            <p>
              Head of Growth
              <br />
              Evercare
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Healthcare, Marketplace</span>
              <br />
              <span>Jul 2020</span>
            </p>
            <p>
              Senior Product Manager, Growth
              <br />
              Klook
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Travel, Marketplace</span>
              <br />
              <span>Jul 2016 - Jul 2020</span>
            </p>
            <p>
              Product Manager, Growth
              <br />
              GoGoVan
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logistic, Marketplace</span>
              <br />
              <span>Jul 2015 - Jul 2016</span>
            </p>
            <p>
              Growth Marketing Manager
              <br />
              OneSky
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B2B SaaS, Marketplace</span>
              <br />
              <span>Sep 2014 - Jul 2015</span>
            </p>
            <p>
              Founder
              <br />
              Friend Zone
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Social App</span>
              <br />
              <span>Jan 2013 - Jul 2014</span>
            </p>
          </div>
        </ThreeColumns>
      </section>
      <SectionCta href="/contact" color="--classic-blue">
        <div>
          <h1>Work with Vincent</h1>
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
          'Besides growth, Vincent is serious about wine, whiskey, poker and his cute golden retriever.',
        ]}
      />
    </Layout>
  );
}

/**
* STYLED COMPONENTS
*/
