/**
 * ImageHero
 * components/ui/ImageHero.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

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
      <p style={{ whiteSpace: 'nowrap' }}>
        <em>Product</em>
        &nbsp;and&nbsp;
        <em>Growth</em>
        &nbsp;strategy for tech companies
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
const slideIn = keyframes`
 from { transform: translateY(-60px); opacity: 0 }
 to { transform: translateY(0); opacity: 1 }
`;

const Grid = styled.section`
  transition: opacity 5s;
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
    animation: ${slideIn} .3s;
    color: var(--gray);
    grid-column: 1 / 13;
    margin: 0;
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
  margin: calc(var(--space-6) * 3) 0;
  grid-column: 1 / 14;
  @media ${(props) => props.theme.forNotSmall} {
    margin-bottom: 0;
  }
  h1 {
    @media ${(props) => props.theme.forNotSmall} {
      margin-bottom: var(--space-1);
    }
  }
`;
