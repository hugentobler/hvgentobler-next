/**
 * ThreeColumns
 * components/ui/ThreeColumns.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { m as motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
/* Components */
import { fadeInParent, fadeInChild } from './Animations';

/**
 * DEFAULT EXPORT
 */
export default function ThreeColumns(props) {
  const { children, caption } = props;

  /* Intersection observer and animations */
  const [ref, inView] = useInView({
    threshold: 0.66,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
    >
      {caption && (
        <Grid>
          <Caption>
            <span>
              {caption}
              &nbsp;&nbsp;
              <sup style={{ fontSize: '50%' }}>↓</sup>
            </span>
          </Caption>
        </Grid>
      )}
      <Grid
        initial="hidden"
        animate={inView ? 'visible' : ''}
        variants={fadeInParent}
      >
        {React.Children.map(children, (child) => (
          <motion.div
            variants={fadeInChild}
          >
            {React.cloneElement(child)}
          </motion.div>
        ))}
      </Grid>
    </div>
  );
}

/**
 * PROPTYPES
 */
ThreeColumns.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
};

ThreeColumns.defaultProps = {
  caption: '',
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: var(--space-6) var(--space-1);
  > div {
    grid-column: 4 / 13;
  }
  @media ${(props) => props.theme.forMiddle} {
    > div {
      grid-column-end: span 4;
    }
    > div:nth-of-type(1) {
      grid-column-start: 4;
    }
    > div:nth-of-type(2) {
      grid-column-start: 10;
    }
    > div:nth-of-type(3) {
      grid-column-start: 4;
    }
  }
  @media ${(props) => props.theme.forNotSmall} {
    > div {
      padding-right: var(--space-6);
    }
    > div:nth-of-type(1) {
      grid-column-start: 2;
    }
    > div:nth-of-type(2) {
      grid-column-start: 6;
    }
    > div:nth-of-type(3) {
      grid-column-start: 10;
    }
  }
`;

const Caption = styled.h1`
  grid-column: 4 / 14 !important;
`;
