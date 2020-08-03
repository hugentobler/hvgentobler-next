/**
 * SectionCta
 * components/ui/SectionCta.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { m as motion } from 'framer-motion';

/**
 * ANIMATIONS
 */
const arrow = {
  visible: {
    x: ['-2%', '2%', '-2%'],
    transition: {
      duration: 0.5,
      loop: Infinity,
      repeatDelay: 0.1,
    },
  },
};

/**
 * DEFAULT EXPORT
 */
export default function SectionCta(props) {
  const { children, href, color } = props;
  return (
    <Section>
      <Background color={color} />
      <Link href={href}>
        <a>
          <Grid>
            {children}
            <motion.svg
              animate="visible"
              variants={arrow}
              aria-hidden="true"
              focusable="false"
              data-icon="arrow-right"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="448"
              height="512"
            >
              <path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z" />
            </motion.svg>
          </Grid>
        </a>
      </Link>
    </Section>
  );
}

/**
 * PROPTYPES
 */
SectionCta.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
};

SectionCta.defaultProps = {
  color: '--salmon',
};

/**
 * STYLED COMPONENTS
 */
const Section = styled.section`
  padding: var(--space-6) var(--space-2);
  position: relative;
  a {
    display: block;
    border: none;
  }
`;

const Background = styled.div`
  background-color: var(${(props) => props.color});
  bottom: var(--space-1);
  left: var(--space-1);
  right: var(--space-1);
  top: var(--space-1);
  position: absolute;
`;

const Grid = styled.div`
  column-gap: var(--space-1);
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  position: relative;
  & > :nth-child(1) {
    grid-column: 4 / 14;
    grid-row: 1 / 1;
  }
  & > svg {
    align-self: center;
    grid-column: 1 / span 2;
    grid-row: 1 / 1;
    max-height: 2.4rem;
    width: 100%;
  }
  @media ${(props) => props.theme.forMiddle} {
    & > :nth-child(1) {
      grid-column: 4 / 10;
    }
    & > svg {
      grid-column: 10 / span 1;
    }
  }
  @media ${(props) => props.theme.forNotSmall} {
    & > svg {
      max-height: 4.6vw;
    }
  }
`;
