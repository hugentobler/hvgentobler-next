/**
 * ImageHero
 * components/ui/ImageHero.js
*/

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';

/**
 * DEFAULT EXPORT
 */
export default function ImageHero(props) {
  const { captions, ...imageProps } = props;
  return (
    <Grid>
      <Wrap>
        <Image {...imageProps} />
      </Wrap>
      {
        captions.map((e) => (
          <p key={e}>{e}</p>
        ))
      }
    </Grid>
  );
}

/**
 * PROPTYPES
 */
ImageHero.propTypes = {
  captions: PropTypes.arrayOf(PropTypes.string),
};

ImageHero.defaultProps = {
  captions: [' ', ' '],
};

/**
 * STYLED COMPONENTS
 */
const Grid = styled.div`
  background-color: var(--sand);
  display: grid;
  gap: var(--space-1) var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: min-content;
  p {
    color: var(--dark-gray);
    font-size: 1.2rem;
    font-weight: 300;
    grid-column: 1 / 13;
    line-height: 1.3;
    margin: 0;
    padding-left: var(--space-2);
    &:nth-of-type(1) {
      grid-row: 1 / 1;
      padding-top: var(--space-2);
    }
    &:nth-of-type(2) {
      grid-row: 2 / 2;
    }
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
      grid-row: 1 / 1;
      &:nth-of-type(1) {
        grid-column: 1 / 3;
      }
      &:nth-of-type(2) {
        grid-column: 4 / 6;
        grid-row: 1 / 1;
        padding-left: 0;
        padding-top: var(--space-2);
      }
    }
  }
`;

const Wrap = styled.div`
  height: 90vh;
  height: calc(var(--vh, 1vh) * 90);
  justify-self: end;
  grid-column-start: 1;
  grid-column-end: span 13;
  grid-row: 1 / span 3;
  @media ${(props) => props.theme.forNotSmall} {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    grid-column-start: span 8;
    grid-column-end: 14;
  }
`;
