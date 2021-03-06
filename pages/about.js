/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
/* Components */
import Layout from '../layouts/main';
import ImageHero from '../components/ui/ImageHero';
import NavBar from '../components/ui/NavBar';
import SectionHeader from '../components/ui/SectionHeader';
import ThreeColumns from '../components/ui/ThreeColumns';

/**
 * FRONTMATTER
 * Pass on to layout as props.
*/
const frontmatter = {
  title: 'Résumé - Christopher Hugentobler',
  description: 'Builder of friendly humanist software products.',
  image: '/images/home/og.jpg',
  colour: 'blue',
};

/**
 * DEFAULT EXPORT
 */
export default function About() {
  React.useEffect(() => {
    /* Fix object position of 2nd image */
    const images = document.querySelectorAll('img');
    images[1].style.objectPosition = 'center 10%';
  });

  return (
    <Layout {...frontmatter}>
      <ImageHero
        alt="Christopher smiling at a table."
        src="/images/about/christopher/gray.jpg"
        h="1799"
        w="1200"
        captions={[
          'Christopher Hugentobler',
          'Tech product growth leader',
        ]}
      />
      <NavBar />
      <section>
        <SectionHeader>
          <div>
            <h1>
              Builder of friendly humanist software products.
            </h1>
          </div>
          <div>
            <p>
              Christopher grew up around curious people and great hospitality. He builds software products that are equally thoughtful and welcoming.
            </p>
            <p>Born in Taipei, Christopher moved to Xi'an, then Kota Kinabalu, then Macao and Guangzhou. He finished college in Hong Kong at 19 years old.</p>
            <p>In high school, he clicked 'Inspect Element' for the first time after promising to complete an event website in one month. He delivered.</p>
          </div>
        </SectionHeader>
      </section>
      <section>
        <ThreeColumns>
          <div>
            <h3>Highlights</h3>
            <p>As 1st employee at Snapask reporting to the CEO, Christopher setup and led initial product, design, growth and b2b teams. He launched 3 products, managing their P&L, and led several cross-functional, cross-border teams.</p>
            <p>Christopher's work at 24 Hour Race resulted in millions of dollars donated to charities fighting human trafficking across Asia. He spent several years working in youth leadership development. His goal was to inspire and empower more youth action.</p>
            <p>Christopher is regularly invited to speak on topics related to startups, product development and growth marketing. He is fluent in English, Mandarin and Cantonese.</p>
          </div>
          <div>
            <h3>Expertise</h3>
            <ul>
              <li>
                Prioritize your product opportunities backlog based on user feedback, business goals, your product vision and the competitive landscape.
              </li>
              <li>
                Optimize your conversion funnel by accessing your audience's emotions (heart), while speaking clearly to their logic (brain).
              </li>
              <li>
                Define and orchestrate your user engagement strategy across multiple touchpoints, from start to end of your user funnel.
              </li>
              <li>
                Recruit and operate your own empowered product growth teams.
              </li>
            </ul>
            <h3>Speaker + Instructor + Mentor</h3>
            <p>
              sofasoda
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taipei</span>
              <br />
              Growth Marketing Academy
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taipei</span>
              <br />
              JumpStart Program
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Taipei</span>
              <br />
              Xccelerate
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hong Kong</span>
              <br />
              RISE Conference
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hong Kong</span>
            </p>
          </div>
          <div>
            <h3>Work</h3>
            <p>
              Partner / Startup Advisor
              <br />
              Inspect Element
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Venture Builder</span>
              <br />
              <span>Summer 2020 ~ Now</span>
            </p>
            <p>
              Product Management & Design Lead
              <br />
              Bowtie
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health & Insurtech</span>
              <br />
              <span>Oct 2020 ~ Now</span>
            </p>
            <p>
              Product Lead / Growth Lead / Misc.
              <br />
              Snapask
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;College & Career Edutech</span>
              <br />
              <span>Feb 2016 ~ Jun 2020</span>
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
      <ImageHero
        alt="Christopher smiling on a rooftop."
        src="/images/about/christopher/pink.jpg"
        h="1599"
        w="1200"
        captions={[
          'Loves great food, drinks, and culture',
        ]}
      />
      <ImageHero
        alt="Christopher at an onsen in Taiwan."
        src="/images/about/christopher/green.jpg"
        h="1599"
        w="1200"
        captions={[
          'Outdoors adventure addict',
        ]}
      />
      <ImageHero
        alt="Christopher in an exhibition."
        src="/images/about/christopher/lavender.jpg"
        h="1599"
        w="1200"
        captions={[
          'Geeky about science fiction',
        ]}
      />
    </Layout>
  );
}
