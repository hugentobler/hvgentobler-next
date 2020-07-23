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
  const { children, caption } = props;
  return (
    <Grid>
      {
        caption && <p>{caption}</p>
      }
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
  caption: PropTypes.string,
};

TextHero.defaultProps = {
  caption: '',
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  padding: var(--space-2) var(--space-2) 0;
  position: relative;
  width: 100%;
  @media ${(props) => props.theme.forNotSmall} {
    grid-template-rows: min-content auto;
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    padding-bottom: var(--space-2);
  }
  p {
    color: var(--gray);
    grid-column: 1 / 13;
    @media ${(props) => props.theme.forNotSmall} {
      &:nth-child(1) {
        grid-column: 1 / 3;
      }
      &:nth-child(2) {
        grid-column: 4 / 6;
      }
      &:nth-child(3) {
        grid-column: 7 / 9;
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
  grid-column: 1 / 14;
  h1 {
    margin-top: 0;
  }
`;
