/**
 * TableList
 * components/ui/TableList.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function TableList(props) {
  const { children, caption, subtitle } = props;
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
          <p>
            {subtitle}
          </p>
        </>
      )}
      {children}
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
