/**
 * MENU
 * components/Menu.js
 * Onscreen site navigation.
 */

/**
 * MODULES
 */
import styled from 'styled-components';
/* Components */
import Link from './Link';

/**
 * DEFAULT EXPORT
 */
export default function TopMenu() {
  return (
    <Root>
      <Container>
        <Inner>
          <Link href="/">
            <a>Home</a>
          </Link>
          <LinkGroup>
            <Link href="/about">
              <a>About</a>
            </Link>
            <div>
              <a href="#résumé">Résumé</a>
            </div>
          </LinkGroup>
          <Link href="/2020/vanilla-webflow-form">
            <a>Writing</a>
          </Link>
        </Inner>
      </Container>
    </Root>
  );
}

/**
 * STYLED COMPONENTS
 */
const theme = {
  forNotSmall: 'screen and (min-width: 999px)',
  letterSpacing: '-0.05rem',
};

const Root = styled.div`
  top: var(--space-2);
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999;
  @media ${theme.forNotSmall} {
    right: calc(-1 * var(--space-4));
    top: calc(var(--space-6) * 3);
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 0;
  justify-content: flex-start;
  padding: 0 var(--space-2);
  a {
    font-size: 1em;
    font-weight: 400;
    flex-shrink: 0;
    height: 1em;
    line-height: 95%;
    margin-left: var(--space-3);
    &.active, &:hover, &:focus {
      border: none;
    }
  }
  @media ${theme.forNotSmall} {
    align-items: flex-end;
    flex-direction: column;
    a {
      margin-bottom: var(--space-2);
      margin-left: 0;
    }
  }
`;

const LinkGroup = styled.div`
  margin-bottom: var(--space-2);
  position: relative;
  & > a {
    margin-bottom: 0;
  }
  & > div {
    display: none;
    top: 1.5em;
    position: absolute;
    @media ${theme.forNotSmall} {
      top: unset;
      position: relative;
    }
    a {
      border: none;
      font-size: 80%;
      margin-bottom: 0;
    }
  }
  a.active + div {
    display: block;
  }
`;
