/**
 * ABOUT
 * pages/about.js
*/

/**
 * MODULES
 */
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
/* Components */
import Layout from '../../layouts/main';
import TextHero from '../../components/ui/TextHero';
import NavBar from '../../components/ui/NavBar';
import SectionHeader from '../../components/ui/SectionHeader';
import TableList from '../../components/ui/TableList';
import SectionCta from '../../components/ui/SectionCta';
import ThreeColumns from '../../components/ui/ThreeColumns';
import Image from '../../components/ui/Image';
import { fadeInParent, fadeInChild } from '../../components/ui/Animations';

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

const people = [
  { path: '/about/christopher', name: 'Christopher Hugentobler', location: 'Taipei' },
  { path: '/about/vincent', name: 'Vincent So', location: 'Hong Kong' },
  { path: '/about/patrick', name: 'Patrick Yip', location: 'Singapore' },
];

/**
 * DEFAULT EXPORT
 */
export default function About() {
  /* Intersection observer and animations */
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Layout {...frontmatter}>
      <TextHero caption="About">
        We build digital experiences that people want, then distribute them where people are.
      </TextHero>
      <NavBar />
      <section ref={ref}>
        <SectionHeader>
          <h1>Meet the extension of your in-house team.</h1>
          <div>
            <p>
              We are a multi-disciplinary collective of digital product and growth experts. We are all practising leaders and operators.
            </p>
          </div>
        </SectionHeader>
        <Portraits
          initial="hidden"
          animate={inView ? 'visible' : ''}
          variants={fadeInParent}
        >
          {people.map((e) => (
            <motion.div
              variants={fadeInChild}
            >
              <Link href={e.path}>
                <a>
                  <PortraitWrap>
                    <Image
                      alt="portrait"
                      src="/images/about/portrait.png"
                      h="1200"
                      w="1200"
                      lazy
                      aspect
                    />
                  </PortraitWrap>
                  <PortraitText>
                    <h3>{e.name}</h3>
                    <p><span>{e.location}</span></p>
                  </PortraitText>
                </a>
              </Link>
            </motion.div>
          ))}
        </Portraits>
      </section>
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

const Portraits = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-flow: dense;
  > div {
    grid-column: 4 / 13;
    padding: var(--space-2) var(--space-1);
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
  a {
    border: none;
    display: block;
    &:hover {
      opacity: 1;
    }
  }
  @media ${(props) => props.theme.forMiddle} {
    > div {
      grid-column-end: span 5;
    }
    > div:nth-child(n) {
      grid-column-start: -6;
    }
    > div:nth-child(2n) {
      grid-column-start: -11;
    }
  }
  @media ${(props) => props.theme.forNotSmall} {
    > div {
      grid-column-end: span 4;
    }
    > div:nth-child(n+1) {
      grid-column-start: -5;
    }
    > div:nth-child(3n-1) {
      grid-column-start: -9;
    }
    > div:nth-child(3n) {
      grid-column-start: -13;
    }
  }
`;

const PortraitWrap = styled.div`
  margin-left: auto;
  width: 80%;
`;

const PortraitText = styled.div`
  h3 {
    margin-bottom: var(--space-1);
  }
  p {
    margin: 0;
  }
`;
