/**
 * Portraits
 * components/Portraits.js
 */

/**
* MODULES
*/
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
/* Components */
import Image from './ui/Image';
import { fadeInParent, fadeInChild } from './ui/Animations';

const people = [
  { path: '/about/christopher', name: 'Christopher Hugentobler', location: 'Taipei' },
  { path: '/about/vincent', name: 'Vincent So', location: 'Hong Kong' },
  { path: '/about/patrick', name: 'Patrick Yip', location: 'Singapore' },
];

/**
 * DEFAULT EXPORT
 */
export default function Portraits() {
  /* Intersection observer and animations */
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Root
      initial="hidden"
      animate={inView ? 'visible' : ''}
      variants={fadeInParent}
    >
      {people.map((e, i) => (
        <motion.div
          key={e.name}
          variants={fadeInChild}
          ref={i === 0 ? ref : undefined}
        >
          <Link href={e.path}>
            <a>
              <ImageWrap>
                <Image
                  alt="portrait"
                  src="/images/about/portrait.png"
                  h="1200"
                  w="1200"
                  lazy
                  aspect
                />
              </ImageWrap>
              <TextWrap>
                <h3>{e.name}</h3>
                <p><span>{e.location}</span></p>
              </TextWrap>
            </a>
          </Link>
        </motion.div>
      ))}
    </Root>
  );
}

/**
* STYLED COMPONENTS
*/
const Root = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-auto-flow: dense;
  margin-top: var(--space-4);
  > div {
    grid-column: 4 / 14;
    padding: var(--space-1);
    margin-left: calc(-1 * var(--space-1));
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
      margin-left: 0;
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

const ImageWrap = styled.div`
  margin-left: auto;
  width: 80%;
`;

const TextWrap = styled.div`
  h3 {
    margin-bottom: var(--space-1);
  }
  p {
    margin: 0;
  }
`;
