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
 * OBSERVE CHILDREN INTERSECTION
 */
const ObserveIntersectionChild = (props) => {
  const { children } = props;

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? 'visible' : ''}
      variants={fadeIn}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

/**
 * DEFAULT EXPORT
 */
export default function SectionHeader(props) {
  const { children } = props;

  /* Intersection observer and animations */
  const [headerRef, headerInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <Grid>
      {React.Children.map(children, (child, index) => {
        const divChildren = child.props.children;
        // First div
        if (index === 0) {
          return (
            <div>
              {React.Children.map(divChildren, (divChildrenChild) => {
                if (divChildrenChild.type === 'h1') {
                  return (
                    <motion.h1
                      initial="hidden"
                      animate={headerInView ? 'visible' : ''}
                      variants={headerParent}
                      ref={headerRef}
                    >
                      {Split(divChildrenChild.props.children)}
                    </motion.h1>
                  );
                }
                return (
                  <ObserveIntersectionChild>
                    {divChildrenChild}
                  </ObserveIntersectionChild>
                );
              })}
            </div>
          );
        }
        // Second / other divs
        return (
          <div>
            {React.Children.map(divChildren, (divChildrenChild) => (
              <ObserveIntersectionChild>
                {divChildrenChild}
              </ObserveIntersectionChild>
            ))}
          </div>
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

ObserveIntersectionChild.propTypes = {
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
    grid-column: 1 / span 13;
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
