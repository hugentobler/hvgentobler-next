/**
 * Section
 * components/ui/SectionHeader.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function SectionHeader(props) {
  const { children } = props;
  return (
    <Grid>
      {children}
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
  h1, h2 {
    grid-column: 1 / 14;
    margin-top: 0;
    @media ${(props) => props.theme.forMiddle} {
      grid-column: 4 / span 8;
    }
    @media ${(props) => props.theme.forNotSmall} {
      grid-column: 4 / span 6;
    }
  }
  p {
    font-size: 1.2rem;
    font-weight: 300;
    grid-column: 4 / 14;
    line-height: 1.3;
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
    }
  }
`;
