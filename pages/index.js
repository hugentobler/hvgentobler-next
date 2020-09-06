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
import SectionHeader from '../components/ui/SectionHeader';
import TableList from '../components/ui/TableList';
import SectionCta from '../components/ui/SectionCta';

/**
 * FRONTMATTER
 * Pass on to layout as props.
 */
const frontmatter = {
  title: 'Christopher Hugentobler',
  description: 'What does life look like if everyone has everything? When and how does tech beget happiness? One day I\'ll make movies in space. In the meantime, I make friendly humanist software products.',
  image: '/images/home/og.jpg',
  colour: 'night',
};

/**
 * DEFAULT EXPORT
 */
export default function Index() {
  return (
    <Layout {...frontmatter}>
      <TextHero>
        What does life look like if everyone has everything? When and how does tech beget happiness?
      </TextHero>
      <NavBar />
      <section>
        <SectionHeader>
          <div>
            <h1>If I wasn't building software, maybe I'd make movies.</h1>
          </div>
          <div>
            <p>One day I'll make movies in space. In the meantime, here's a few things I plan to attempt.</p>
            <ul>
              <li>
                Build software for 100M happy humans.
              </li>
              <li>
                Open a bakery / pâtisserie run by Mum.
              </li>
              <li>
                Own a surf retreat by a world-class point break.
              </li>
              <li>
                Summit K2.
              </li>
            </ul>
          </div>
        </SectionHeader>
      </section>
      <SectionCta href="/blog" color="--golden-rod-yellow">
        <div>
          <h2>What do surfing and software have in common?</h2>
          <p>
            I'm pretty stoked about both.
            <br />
            Sometimes I write about stuff that has me excited. Take a look.
          </p>
        </div>
      </SectionCta>
      <section>
        <TableList caption="Some stuff involving me" subtitle="Kudos to the people who bet on and collaborated with me.">
          <Logo>
            <h1>Inspect Element</h1>
            <LogoWrap>
              <img
                alt="Inspect Element"
                loading="lazy"
                src="/images/home/bowtie.png"
              />
            </LogoWrap>
          </Logo>
          <p>We formed a product growth consulting collective. We partnered up to unbox the product black box for exciting early-stage tech companies.</p>
          <Logo>
            <h1>Bowtie</h1>
            <LogoWrap>
              <img
                alt="Bowtie"
                loading="lazy"
                src="/images/home/bowtie.png"
              />
            </LogoWrap>
          </Logo>
          <p>They saw growth in search traffic from users worried about their loved one's health. We worked on introducing health solutions to users in more relevant ways.</p>
          <Logo>
            <h1>Snapask</h1>
            <LogoWrap>
              <img
                alt="Snapask"
                loading="lazy"
                src="/images/home/snapask.png"
              />
            </LogoWrap>
          </Logo>
          <p>They wanted to build a world-class online learning platform for high school students. We grew to company from Hong Kong to ten countries.</p>
          <Logo>
            <h1>24 Hour Race</h1>
            <LogoWrap style={{ height: '36px' }}>
              <img
                alt="24 Hour Race"
                loading="lazy"
                src="/images/home/24hourrace.png"
              />
            </LogoWrap>
          </Logo>
          <p>They wanted to build a grassroots youth movement into a legitimate intenational charity. We achieved that, expanded overseas, launched a corporate product, and more.</p>
        </TableList>
      </section>
      <SectionCta href="/about" color="--classic-blue">
        <div>
          <h2>Prefer a résumé with tables and bullet points?</h2>
          <p>For work, I build friendly humanist software products. Read more.</p>
        </div>
      </SectionCta>
      <section>
        <TableList caption="Don't take my word for it">
          <blockquote><h3>Christopher always goes beyond the scope of his role to bring positive impact to teams he's working with. He does not confine himself to management. He is detail-oriented, a disciplined learner and is never afraid to get his hands dirty in a challenging situation with his teammates.</h3></blockquote>
          <Logo>
            <p>
              Sharlene&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Google PM</span>
            </p>
          </Logo>
          <blockquote>
            <h2>
              An intuitive leader with integrity. Work with him to effect great change.
            </h2>
          </blockquote>
          <Logo>
            <p>
              Ingrid&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Teammate</span>
            </p>
          </Logo>
          <blockquote><h3>When looking to scale the 24 Hour Race to become the global movement it is today - the first person I brought on the team was Chris. Of all the people I know, he is the most frank, honest and possesses incredible focus. He considers problems with great diligence and through multiple perspectives to help teams arrive at the best strategic decisions.</h3></blockquote>
          <Logo>
            <p>
              C Schrader&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Tech Founder / Harvard Dropout</span>
            </p>
          </Logo>

          <blockquote><h2>Sharp and critical; empathetic and team-oriented; visionary and audacious.</h2></blockquote>
          <Logo>
            <p>
              Michelle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Teammate</span>
            </p>
          </Logo>
          <blockquote><h2>在颱風眼裡面工作的人。</h2></blockquote>
          <Logo>
            <p>
              Dustin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>First Impression</span>
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
