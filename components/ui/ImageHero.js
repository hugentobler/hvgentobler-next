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
import Image from './Image';
/* Components */
import { fadeInDelay } from './Animations';

/**
 * DEFAULT EXPORT
 */
export default function ImageHero(props) {
  const { captions, ...imageProps } = props;
  return (
    <Grid>
      <Wrap>
        <Image {...imageProps} />
      </Wrap>
      {
        captions.map((e) => (
          <motion.p
            key={e}
            initial="hidden"
            animate="visible"
            variants={fadeInDelay}
          >
            {e}
          </motion.p>
        ))
      }
    </Grid>
  );
}

/**
 * PROPTYPES
 */
ImageHero.propTypes = {
  captions: PropTypes.arrayOf(PropTypes.string),
};

ImageHero.defaultProps = {
  captions: [' ', ' '],
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  background-color: var(--sand);
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  p {
    color: var(--dark-gray);
    grid-column: 1 / 13;
    padding-left: var(--space-2);
    margin: 0;
    &:nth-of-type(1) {
      grid-row: 1 / 1;
      padding-top: var(--space-2);
    }
    &:nth-of-type(2) {
      grid-row: 2 / 2;
    }
    @media ${(props) => props.theme.forNotSmall} {
      white-space: nowrap;
      grid-row: 1 / 1;
      &:nth-of-type(1) {
        grid-column: 1 / 3;
      }
      &:nth-of-type(2) {
        grid-column: 4 / 6;
        grid-row: 1 / 1;
        padding-left: 0;
        padding-top: var(--space-2);
      }
    }
  }
`;

const Wrap = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  justify-self: end;
  grid-column-start: 1;
  grid-column-end: span 13;
  grid-row: 4 / 5;
  @media ${(props) => props.theme.forNotSmall} {
    grid-column-start: span 8;
    grid-column-end: 14;
    grid-row: 1 / span 3;
  }
`;
