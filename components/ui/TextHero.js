/**
 * ImageHero
 * components/ui/ImageHero.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
/* Components */
import { fadeIn } from './Animations';

/**
 * ANIMATIONS
 */
const heading = {
  visible: {
    opacity: 1,
    transition: {
      easing: 'easeOut',
      staggerChildren: 0.02,
      when: 'beforeChildren',
    },
  },
  hidden: { opacity: 0 },
};

const word = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      damping: 300,
      duration: 0.15,
      type: 'spring',
    },
  },
  hidden: { opacity: 0, y: '100%' },
};

/**
 * DEFAULT EXPORT
 */
export default function TextHero(props) {
  const { children, caption } = props;

  /* Animate heading words. */
  const text = children.split(' ');
  const words = text.map((e) => (
    <>
      <motion.span
        variants={word}
      >
        {e}
        &nbsp;
      </motion.span>
    </>
  ));

  return (
    <Grid>
      {
        caption && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            {caption}
          </motion.p>
        )
      }
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <span>Inspect Element</span>
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        style={{ whiteSpace: 'nowrap' }}
      >
        <span>
          Product and growth strategy for tech companies
        </span>
      </motion.p>
      <Main>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heading}
        >
          {words.map((e, i) => (
            React.cloneElement(e, { key: `${e.props.children}-${i}` })
          ))}
        </motion.h1>
      </Main>
    </Grid>
  );
}

/**
 * PROPTYPES
 */
TextHero.propTypes = {
  children: PropTypes.string.isRequired,
  caption: PropTypes.string,
};

TextHero.defaultProps = {
  caption: '',
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.section`
  color: var(--text-color);
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  padding: var(--space-2) var(--space-2) 0;
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.forNotSmall} {
    grid-template-rows: min-content auto;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    padding-bottom: var(--space-2);
  }
  p {
    grid-column: 1 / 13;
    margin: 0;
    @media ${(props) => props.theme.forNotSmall} {
      &:nth-child(1) {
        grid-column: 1 / 3;
      }
      &:nth-child(2) {
        grid-column: 4 / 6;
      }
      &:nth-child(3) {
        grid-column: 7 / 9;
      }
    }
  }
`;

const Main = styled.div`
  align-self: end;
  margin: calc(var(--space-6) * 3) 0;
  grid-column: 1 / 14;
  @media ${(props) => props.theme.forNotSmall} {
    margin-bottom: 0;
  }
  h1 {
    span {
      display: inline-block;
      opacity: 1;
    }
    @media ${(props) => props.theme.forNotSmall} {
      margin-bottom: var(--space-1);
    }
  }
`;
