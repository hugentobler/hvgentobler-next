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
  const { children, caption, ...imageProps } = props;
  return (
    <Root>
      <ImageWrap>
        <Image {...imageProps} />
        <Caption>
          <p>{caption}</p>
        </Caption>
      </ImageWrap>
      <TextWrap>
        {children}
      </TextWrap>
    </Root>
  );
}

/**
 * PROPTYPES
 */
ImageHero.propTypes = {
  children: PropTypes.node.isRequired,
  caption: PropTypes.string.isRequired,
};

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  @media ${theme.forNotSmall} {
    align-items: center;
    flex-direction: row;
    height: 100vh;
    min-height: 40em;
  }
`;

const ImageWrap = styled.div`
  flex-shrink: 0;
  margin-left: calc(-1 * var(--space-2));
  margin-right: calc(-1 * var(--space-2));
  max-width: 480px;
  height: 36em;
  position: relative;
  width: 100%;
  @media ${theme.forNotSmall} {
    margin-left: unset;
    margin-right: var(--space-6);
    max-width: 400px;
  }
`;

const TextWrap = styled.div`
  align-items: center;
  display: flex;
  min-height: 24em;
  max-width: ${theme.contentWidth};
  padding-bottom: var(--space-6);
  padding-right: var(--space-6);
  @media ${theme.forNotSmall} {
    padding-left: var(--space-6);
  }
`;

const Caption = styled.div`
  align-items: center;
  background-color: rgba(28, 28, 28, 0.33);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  top: 0;
  position: absolute;
  right: 0;
`;
