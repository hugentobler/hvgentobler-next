/**
 * NavBar
 * components/NavBar.js
 * Onscreen site navigation.
 */

/**
 * MODULES
 */
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';
/* Components */

/**
 * CUSTOM COMPONENTS
 */
const CustomLink = (props) => {
  const { children, href } = props;
  const router = useRouter();

  /* If page is currently active, append class. */
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  return (
    <NavLink>
      <Link href={href}>
        {React.cloneElement(children, { className })}
      </Link>
    </NavLink>
  );
};

/**
 * PROPTYPES
 */
CustomLink.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

/**
 * DEFAULT EXPORT
 */
export default function NavBar() {
  return (
    <Root>
      <Grid>
        <CustomLink href="/">
          <a>Home</a>
        </CustomLink>
        <CustomLink href="/about">
          <a>About</a>
        </CustomLink>
        <CustomLink href="/blog">
          <a>Writing</a>
        </CustomLink>
        <CustomLink href="/2020/vanilla-webflow-form">
          <a>Reading</a>
        </CustomLink>
      </Grid>
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
  bottom: auto;
  display: flex;
  justify-content: flex-end;
  left: auto;
  top: 0;
  padding: var(--space-1) var(--space-1) 0;
  position: sticky;
  right: 0;
  z-index: 9999;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: var(--space-1);
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: 100%;
`;

const NavLink = styled.div`
  &:nth-last-child(1) {
    grid-column: 13 / 13;
  }
  &:nth-last-child(2) {
    grid-column: 12 / 12;
  }
  &:nth-last-child(3) {
    grid-column: 11 / 11;
  }
  &:nth-last-child(4) {
    grid-column: 10 / 10;
  }
  a {
    border: none;
    font-size: .8rem;
  }
`;
