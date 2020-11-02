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
  margin-top: var(--space-4);
  @media ${theme.forNotSmall} {
    font-size: 1vw;
  }
`;

const ThematicBreak = styled.div`
  margin-top: var(--space-4);
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
  inlineCode: Code,
  ThematicBreak,
};

export default MDXComponents;

/**
 * PROPTYPES
 */
CustomLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
