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
import { m as motion } from 'framer-motion';
/* Components */
import { fadeIn } from './Animations';

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
      <Link href={href} scroll={false}>
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <Grid>
          <CustomLink href="/">
            <a>Work</a>
          </CustomLink>
          <CustomLink href="/about">
            <a>About</a>
          </CustomLink>
          <CustomLink href="/blog">
            <a>Writing</a>
          </CustomLink>
          <CustomLink href="/bookshelf">
            <a>Reading</a>
          </CustomLink>
        </Grid>
      </motion.div>
    </Root>
  );
}

/**
* STYLED COMPONENTS
*/

const Root = styled.nav`
  bottom: auto;
  left: auto;
  top: 0;
  padding: var(--space-2);
  position: sticky;
  right: 0;
  z-index: 9999;
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: var(--space-1);
  grid-template-columns: repeat(13, 1fr);
  width: 100%;
`;

const NavLink = styled.div`
  grid-column-end: span 3;
  @media ${(props) => props.theme.forNotSmall} {
    grid-column-end: span 1;
    &:nth-last-child(1) {
      grid-column-start: 13;
    }
    &:nth-last-child(2) {
      grid-column-start: 12;
    }
    &:nth-last-child(3) {
      grid-column-start: 11;
    }
    &:nth-last-child(4) {
      grid-column-start: 10;
    }
  }
  a {
    border: none;
    font-size: 1.2rem;
    font-weight: 300;
    @media ${(props) => props.theme.forNotSmall} {
      font-size: 1vw;
    }
  }
`;
