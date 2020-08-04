/**
 * TableList
 * components/ui/TableList.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { m as motion } from 'framer-motion';
import { fadeIn } from './Animations';

/**
 * OBSERVE CHILDREN INTERSECTION
 */
const ObserveIntersectionChild = (props) => {
  const { children } = props;

  const [ref, inView] = useInView({
    threshold: 1,
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
export default function TableList(props) {
  const { children, caption, subtitle } = props;

  const [subtitleRef, subtitleInView] = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  return (
    <Grid>
      {caption && (
        <>
          <Caption>
            <span>
              {caption}
              &nbsp;&nbsp;
              <sup style={{ fontSize: '50%' }}>↓</sup>
            </span>
          </Caption>
          <motion.p
            ref={subtitleRef}
            initial="hidden"
            animate={subtitleInView ? 'visible' : ''}
            variants={fadeIn}
          >
            {subtitle}
          </motion.p>
        </>
      )}
      {React.Children.map(children, (child, i) => {
        if (i % 2) {
          return (
            <ObserveIntersectionChild>
              {child}
            </ObserveIntersectionChild>
          );
        }
        return child;
      })}
    </Grid>
  );
}

/**
 * PROPTYPES
 */
TableList.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
  subtitle: PropTypes.string,
};

TableList.defaultProps = {
  caption: '',
  subtitle: '',
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: var(--space-6) var(--space-1);
  > :nth-child(odd) {
    grid-column: 4 / 14;
  }
  > :nth-child(even) {
    grid-column: 1 / span 13;
  }
  @media ${(props) => props.theme.forMiddle} {
    > :nth-child(odd) {
      grid-column: 4 / 13;
    }
    > :nth-child(even) {
      grid-column: 7 / 14;
    }
  }
  @media ${(props) => props.theme.forNotSmall} {
    > :nth-child(odd) {
    }
    > :nth-child(even) {
      grid-column: 10 / 13;
    }
  }
`;

const Caption = styled.h1`
  grid-column: 4 / 14 !important;
`;
