/**
 * HOMEPAGE
 * pages/index.js
 */

/**
 * MODULES
 */
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
/* Components */
import Layout from '../layouts/main';
import TextHero from '../components/ui/TextHero';
import NavBar from '../components/ui/NavBar';
import SectionHeader from '../components/ui/SectionHeader';
import TableList from '../components/ui/TableList';
import SectionCta from '../components/ui/SectionCta';
import ThreeColumns from '../components/ui/ThreeColumns';

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: 'Inspect Element - Product and growth strategy for tech companies',
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
        <h1>Exceed your goals. Delight your customers. Outpace your competitors.</h1>
      </TextHero>
      <NavBar />
      <section>
        <SectionHeader>
          <h1>Human centered and data driven, we deliver sustainable product growth.</h1>
          <div>
            <p>Let's talk about your toughest product and growth strategy questions.</p>
            <ul>
              <li>
                Define your MVP and go-to-market strategy.
              </li>
              <li>
                A/B test and optimize your conversion funnel.
              </li>
              <li>
                Engage your users and retain your customers.
              </li>
              <li>
                Monetize your audiences locally and abroad.
              </li>
              <li>
                Build your product growth team and workflows.
              </li>
            </ul>
          </div>
        </SectionHeader>
      </section>
      <section>
        <ThreeColumns caption="Countdown to rocket ship growth">
          <div>
            <h2>
              <span>Ø3&nbsp;&nbsp;</span>
              Our team
            </h2>
            <p>We are a team of product, analytics, and growth people that have helped scale companies like Stitch Fix, Thumbtack, Facebook, and LinkedIn.</p>
          </div>
          <div>
            <h2>
              <span>Ø2&nbsp;&nbsp;</span>
              Our toolkit
            </h2>
            <p>We approach a question from all angles. We will talk to customers, mine the data, build models and dashboards, and partner with the team to run experiments.</p>
          </div>
          <div>
            <h2>
              <span>Ø1&nbsp;&nbsp;</span>
              Your success
            </h2>
            <p>We're not done until your team has a mental model of the problem and the path forward. We will constantly pressure test and debate ideas with team along the way.</p>
          </div>
        </ThreeColumns>
      </section>
      <SectionCta href="/about">
        <div>
          <h1>Meet our people</h1>
          <p>We are a multi-disciplinary collaborative of digital product and growth experts.</p>
        </div>
      </SectionCta>
      <section>
        <TableList caption="You're in great company" subtitle="We partner with exceptional early and growth stage tech companies. With us, they built and monetized modern digital experiences.">
          <Logo>
            <h1>Bowtie</h1>
            <LogoWrap>
              <img
                alt="Bowtie"
                src="/images/home/bowtie.png"
              />
            </LogoWrap>
          </Logo>
          <p>They were seeing significant growth in search traffic from users concerned about their loved one's health. They wanted to introduce solutions to these users in more relevant ways.</p>
          <Logo>
            <h1>Gogovan</h1>
            <LogoWrap>
              <img
                alt="Gogovan"
                src="/images/home/gogovan.png"
              />
            </LogoWrap>
          </Logo>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Logo>
            <h1>Snapask</h1>
            <LogoWrap>
              <img
                alt="Snapask"
                src="/images/home/snapask.png"
              />
            </LogoWrap>
          </Logo>
          <p>They started with a product offering that was fundamentally seasonal. To improve user stickiness, new services were bundled together into a subscription product that users found more valuable all year round.</p>
        </TableList>
      </section>
      <SectionCta href="/about" color="--classic-blue">
        <div>
          <h1>Schedule your call</h1>
          <p>Even if you don't know where your bottlenecks are, we should still talk.</p>
        </div>
      </SectionCta>
      <section>
        <TableList caption="Don't take our word for it">
          <blockquote><h2>The pandemic has been an opportunity for the entire learning sector. It has accelerated the adoption of online learning. Especially parents and educators have really warmed to it.</h2></blockquote>
          <Logo>
            <p>
              CNN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2020-06-13</span>
              <br />
              <span>
                Inventing Tomorrow: From Classroom to&nbsp;
                <q>Class Zoom</q>
              </span>
            </p>
          </Logo>
          <blockquote><h2>You&apos;ve obviously got first-mover advantage in terms of this digital license, but many of the incumbents are investing in digital. The big sell now is the convenience and the speed. We have an advantage because of direct relationship with the customer.</h2></blockquote>
          <Logo>
            <p>
              Bloomberg TV&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2020-06-02</span>
              <br />
              <span>
                H.K. Online Insurer Bowtie Sees&nbsp;
                <q>Very Positive</q>
                &nbsp;Outlook, CEO Says
              </span>
            </p>
          </Logo>
          <blockquote>
            <h2>
              Klook, which offers its services in nine languages and 41 currencies, processed $1 billion in bookings last year. In mature markets such as Hong Kong and Singapore they have&nbsp;
              <q>healthy cash flow</q>
              , while in newer markets they are focused on investing to expand the user base.
            </h2>
          </blockquote>
          <Logo>
            <p>
              The Information&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2019-10-10</span>
              <br />
              <span>
                SoftBank-Backed Tourism App Klook Eyes Expansion in Europe
              </span>
            </p>
          </Logo>
          <blockquote><h3>Snapask, an on-demand tutoring app, announced today that it has raised $35 million in Series B funding. Earmarked for the startup’s expansion in Southeast Asia, the round was led by Asia Partners and Intervest.</h3></blockquote>
          <Logo>
            <p>
              TechCrunch&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2020-02-26</span>
            </p>
          </Logo>
          <blockquote><h3>Hong Kong logistics company GoGoVan has agreed to a merger with 58 Suyun, the freight business of mainland Chinese online classifieds giant 58 Home, creating the city’s first start-up worth more than US$1 billion.</h3></blockquote>
          <Logo>
            <p>
              SCMP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2017-08-28</span>
            </p>
          </Logo>
          <blockquote><h3>The non-profit Running To Stop The Traffik is putting on this race, entirely run by high school students. When you get a cramp and can&apos;t go on anymore, just think about what the victims are going through, and then keep on going for them.</h3></blockquote>
          <Logo>
            <p>
              CNN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>2016-12-02</span>
            </p>
          </Logo>
        </TableList>
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
  @media ${(props) => props.theme.forMiddle} {
    grid-template-columns: repeat(9, 1fr);
  }
  img {
    object-fit: contain;
    object-position: 0% 50%;
    opacity: .6;
    width: 100%;
    height: 100%;
  }
  h1 {
    grid-column: 1 / span 5;
    line-height: 1;
    margin: 0;
  }
  p {
    grid-column: 1 / 10;
  }
`;

const LogoWrap = styled.div`
  align-self: center;
  height: 24px;
  grid-column: 7 / span 3;
  width: 72px;
`;
