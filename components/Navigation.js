// components/Header.js

// Modules
import styled from 'styled-components';
import Link from '../components/Link';

const Navigation = props => {
  // Consume menuOpen and toggleMenu from parent.
  const {menuOpen, toggleMenu, menuAnimating, animateMenu} = props;

  return (
    <>
      <Menu>
        <MenuInner>
          <Hamburger name='menu'
            className={
              (menuOpen ? 'open' : '')
            }
            onClick={() => {
              toggleMenu(prevState => !prevState);
              animateMenu(prevState => !prevState);
            }}
            disabled={menuAnimating}
          >
          🍔</Hamburger>
        </MenuInner>
      </Menu>
      <Nav
        menuOpen={menuOpen}
      >
        <NavInner>
          <LinkParent
            menuOpen={menuOpen}
            toggleMenu={toggleMenu}
          >
            <Link href='/'><a>Home ↩</a></Link>
            <Link href='/25th'><a>25th Birthday 🍄</a></Link>
          </LinkParent>
        </NavInner>
      </Nav>
    </>
  )
};

// components
const LinkParent = props => (
  React.Children.map(props.children, child => (
    <LinkWrap
      menuOpen={props.menuOpen}
    >
      {React.cloneElement(child, { toggleMenu: props.toggleMenu })}
    </LinkWrap>
  ))
);

// Animations


// Styled components
const theme = {
  forNotSmall: 'screen and (min-width: 30em)',
  letterSpacing: '-0.05rem'
};

const Menu = styled.div`
  bottom: 0;
  height: 6rem;
  @media ${theme.forNotSmall} {
    height: 8rem;
  }
  left: 0;
  right: 0;
  position: fixed;
  z-index: 9999;
`;

const MenuInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
`;

const Hamburger = styled.button`
  align-self: flex-end;
  background: var(--text-color);
  border-color: var(--text-color);
  border-radius: 50%;
  border-style: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1;
  height: 3rem;
  margin-right: var(--spacing-medium);
  outline: 0;
  overflow: hidden;
  position: relative;
  width: 3rem;
  @media ${theme.forNotSmall} {
    height: 4rem;
    width: 4rem;
  }
  &:hover, &:focus, &:active, &.open {
    transition: none;
    font-size: 2rem;
    @media ${theme.forNotSmall} {
      font-size: 2.4rem;
    }
  }
  &.open {
    background: var(--background-color);
    transform: rotate(30deg);
  }
  &:disabled {
    cursor: progress;
  }
`;

const Nav = styled.nav`
  bottom: 8rem;
  visibility: ${props => props.menuOpen ? 'visible' : 'hidden'};
  left: 0;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${props => props.menuOpen ? '999' : '0'};
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
  a {
    border-color: transparent;
    border-style: solid;
    border-bottom-width: 2px;
    color: var(--background-color);
    font-size: 2.25rem;
    font-weight: 300;
    letter-spacing: ${theme.letterSpacing};
    line-height: 1.25;
    text-decoration: none;
    &.active {
      border-color: var(--background-color);
    }
  }
`;

const LinkWrap = styled.div`
  align-self: flex-start;
  clip-path: ${props => props.menuOpen ? 'inset(0)' : 'inset(0 100% 0 0)'};
  margin-bottom: var(--spacing-medium);
  margin-left: var(--spacing-medium);
  transition: clip-path .4s cubic-bezier(.45,.05,.55,.95) .2s;
  &:first-child {
    margin-top: 16%;
  }
`;


export default Navigation;
