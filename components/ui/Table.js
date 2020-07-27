/**
 * Table
 * components/ui/Table.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function Table(props) {
  const { children, caption } = props;
  return (
    <Grid>
      {caption && (
        <>
          <Caption>
            <span>{caption}</span>
          </Caption>
          <p/>
        </>
      )}
      {children}
    </Grid>
  );
}

/**
 * PROPTYPES
 */
Table.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string,
};

Table.defaultProps = {
  caption: '',
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: var(--space-6) var(--space-1);
  margin: var(--space-6) 0;
  > :nth-child(odd) {
    grid-column: 4 / 14;
  }
  > :nth-child(even) {
    grid-column: 1 / span 13;
  }
  @media ${(props) => props.theme.forMiddle} {
    > :nth-child(odd) {
    }
    > :nth-child(even) {
      grid-column: 1 / span 8;
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
