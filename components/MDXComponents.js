/**
 * MDX Components
 * components/MDXProvider.js
 */

/**
 * MODULES
 */
import NextLink from 'next/link';
import styled from 'styled-components';

/**
 * STYLED COMPONENTS
 */
const theme = {
  contentWidth: '600px',
  forNotSmall: 'screen and (min-width: 999px)',
};

const Lede = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
`;

const Code = styled.code`
  background-color: var(--sand);
  padding: .5em;
`;

const Wrap = styled.div`
  @media ${theme.forNotSmall} {
    display: flex;
    margin: var(--space-2) 0;
  }
`;

const Left = styled.div`
  @media ${theme.forNotSmall} {
    flex-shrink: 0;
    width: 80%;
  }
`;

const Right = styled.div`
  @media ${theme.forNotSmall} {
    flex-shrink: 0;
    margin-left: var(--space-4);
    margin-bottom: calc(-1 * var(--space-1));
    margin-top: calc(-1 * var(--space-1));
    width: calc(var(--max-width) - 600px);
  }
`;

/**
 * CUSTOM COMPONENTS
 */
const Columns = (props) => {
  const { children } = props;
  const left = React.Children.toArray(children);
  const right = left.pop();
  return (
    <Wrap>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </Wrap>
  );
};

const CustomLink = (props) => {
  const {children, href} = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));
  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }
  return (
    <a href={href} target="_blank" rel="noreferrer">{children}</a>
  )
};

/**
 * DEFAULT EXPORT
 */
const MDXComponents = {
  h1: (props) => <h1 style={{ color: 'gray' }} {...props} />,
  h4: Lede,
  inlineCode: Code,
  Columns,
  a: CustomLink,
};

export default MDXComponents;
