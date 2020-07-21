/**
 * ImageHero
 * components/ui/ImageHero.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * DEFAULT EXPORT
 */
export default function TextHero(props) {
  const { children } = props;
  return (
    <Root>
      <Main>
        {children}
      </Main>
    </Root>
  );
}

/**
 * PROPTYPES
 */
TextHero.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * STYLED COMPONENTS
 */

const Root = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid: 3rem auto / repeat(13, 1fr);
  height: 100vh;
  padding: var(--space-1);
  position: relative;
  width: 100%;
`;

const Main = styled.div`
  align-self: end;
  grid-column: 1 / 13;
  grid-row: 2 / 2;
  h1 {
    font-size: 2.4rem;
    font-weight: 300;
    margin: 0;
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 4.6vw;
    }
  }
`;
