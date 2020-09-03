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
import Split from '../utils/Split';
import { fadeInDelay, headerParent } from './Animations';

/**
 * DEFAULT EXPORT
 */
export default function TextHero(props) {
  const { children, caption } = props;

  return (
    <Grid>
      {
        caption && (
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInDelay}
          >
            {caption}
          </motion.p>
        )
      }
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInDelay}
      >
        <span>Christopher Hugentobler</span>
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInDelay}
        className="no-wrap"
      >
        <span>
          Walking talking venn digram
        </span>
      </motion.p>
      <Main>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={headerParent}
        >
          {Split(children)}
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
      &.no-wrap {
        white-space: nowrap;
      }
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
  margin-top: calc(var(--space-6) * 3);
  grid-column: 1 / 14;
  @media ${(props) => props.theme.forNotSmall} {
    margin-bottom: 0;
  }
  h1 {
    margin-bottom: var(--space-6);
    span {
      display: inline-block;
      opacity: 1;
    }
    @media ${(props) => props.theme.forNotSmall} {
      margin-bottom: var(--space-1);
    }
  }
`;
