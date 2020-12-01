/**
 * MDX Components
 * components/MDXProvider.js
 */

/**
 * MODULES
 */
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import styled from 'styled-components';
/* Components */
import Img from './ui/Img';
import ImgPair from './ui/ImgPair';

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Code = styled.code`
  background-color: var(--sand);
  padding: .5em;
`;

const Caption = styled.p`
  font-size: .8rem !important;
  margin-bottom: var(--space-1);
  margin-top: var(--space-2);
  @media ${theme.forNotSmall} {
    font-size: 1vw;
  }
`;

const ThematicBreak = styled.div`
  margin-top: var(--space-4);
`;

const Iframe = styled.div`
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
  width: 100%;
  > iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

/**
 * CUSTOM COMPONENTS
 */
const CustomLink = (props) => {
  const { children, href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    );
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">{children}</a>
  );
};

/**
 * DEFAULT EXPORT
 */
const MDXComponents = {
  Caption,
  Img,
  ImgPair,
  inlineCode: Code,
  ThematicBreak,
  Iframe,
};

export default MDXComponents;

/**
 * PROPTYPES
 */
CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
