/**
 * Section
 * components/ui/SectionHeader.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { m as motion } from 'framer-motion';
/* Components */
import Split from '../utils/Split';
import { fadeIn, headerParent } from './Animations';

/**
 * DEFAULT EXPORT
 */
export default function SectionHeader(props) {
  const { children } = props;

  /* Intersection observer and animations */
  const [ref, inView] = useInView({
    threshold: 0.66,
    triggerOnce: true,
  });

  return (
    <Grid ref={ref}>
      {React.Children.map(children, (child) => {
        if (child.type === 'h1') {
          const text = child.props.children;
          return (
            <motion.h1
              initial="hidden"
              animate={inView ? 'visible' : ''}
              variants={headerParent}
            >
              {Split(text)}
            </motion.h1>
          );
        }
        return (
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : ''}
            variants={fadeIn}
          >
            {React.cloneElement(child)}
          </motion.div>
        );
      })}
    </Grid>
  );
}

/**
 * PROPTYPES
 */
SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  > :nth-child(1) {
    grid-column: 1 / 14;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / span 8;
    }
  }
  > :nth-child(2) {
    grid-column: 4 / 14;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 7 / 14;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 10 / 13;
      grid-row: 2 / 2;
    }
  }
  h1 {
    span {
      display: inline-block;
    }
  }
`;
