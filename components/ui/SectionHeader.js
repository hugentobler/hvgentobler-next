/**
 * Section
 * components/ui/SectionHeader.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useIntersection } from 'react-use';
import { m as motion, useAnimation } from 'framer-motion';

/**
 * DEFAULT EXPORT
 */
export default function SectionHeader(props) {
  /* Intersection observer and animations */
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3, // Observe when 0.3 of target is visible.
  });

  const controls = useAnimation();
  const variants = {
    slideIn: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.3,
        easing: 'easeOut',
      },
    },
  };

  const slide = {
    opacity: 0,
    y: '50%',
  };

  if (intersection && intersection.intersectionRatio > 0.1) {
    controls.start('slideIn');
  }

  if (intersection && !intersection.isIntersecting) {
    controls.set(slide);
  }

  const { children } = props;
  return (
    <Grid>
      {React.Children.map(children, (child) => {
        if (child.type === 'h1') {
          return (
            <div>
              {React.cloneElement(child)}
            </div>
          );
        }
        return (
          <motion.div
            initial={slide}
            animate={controls}
            variants={variants}
            ref={intersectionRef}
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
      grid-column: 1 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 10 / 13;
      grid-row: 2 / 2;
    }
  }
`;
