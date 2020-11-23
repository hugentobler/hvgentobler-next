/**
 * ImgPair
 * components/ImgPair.js
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function ImgPair(props) {
  const { children } = props;
  return (
    <Wrap>
      { children }
    </Wrap>
  );
}

/**
 * STYLED COMPONENTS
 */
const Wrap = styled.div`
  @media ${(props) => props.theme.forNotSmall} {
    display: flex;
    justify-content: space-between;
    > div {
      width: 49%;
    }
  }
`;

/**
 * PROPTYPES
 */
ImgPair.propTypes = {
  children: PropTypes.node.isRequired,
};
