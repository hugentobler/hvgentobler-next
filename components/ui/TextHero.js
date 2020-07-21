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
    <Grid>
      <p>Inspect Element</p>
      <p>
        <em>Product</em>
        &nbsp;and&nbsp;
        <em>Growth</em>
        &nbsp;Collective
      </p>
      <Main>
        {children}
      </Main>
    </Grid>
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
const Grid = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content min-content min-content;
  padding: var(--space-2) var(--space-2) 0;
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.forNotSmall} {
    grid-template-rows: min-content auto;
    height: 100vh;
    padding-bottom: var(--space-2);
  }
  p {
    color: var(--gray);
    font-size: 1.2rem;
    font-weight: 300;
    grid-column: 1 / 13;
    line-height: 1.3;
    margin: 0;
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
      &:nth-child(1) {
        grid-column: 1 / 3;
      }
      &:nth-child(2) {
        grid-column: 4 / 6;
      }
    }
  }
  em {
    color: lightgray;
    font-style: normal;
  }
`;

const Main = styled.div`
  align-self: end;
  margin-top: 6rem;
  grid-column: 1 / 13;
  h1 {
    margin: 0;
  }
`;
