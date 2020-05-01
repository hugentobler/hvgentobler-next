// components/Header.js

// Modules
import React from 'react';
import { useContext } from 'react';
import UserContext from '../components/UserContext';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';
import Link from '../components/Link';

const Navigation = () => {
  // Is menuOpen? and toggleMenu. Consume static context.
  const menuOpen = useContext(UserContext)['state']['menuOpen'];
  const toggleMenu = useContext(UserContext)['toggleMenu'];
  // Connect menuOpen status to component animation.
  const linkControls = useAnimation();

  return (
    <>
      <Menu>
        <MenuInner>
          <Hamburger name='menu'
            className={(menuOpen ? 'open' : '')}
            onClick={toggleMenu}>
          🍔</Hamburger>
        </MenuInner>
      </Menu>
      <Nav className={(menuOpen ? 'open' : '')}>
        <NavInner>
          <LinkParent>
            <Link href='/'><a>Home ↩</a></Link>
            <Link href='/25th'><a>25th Birthday 🍄</a></Link>
          </LinkParent>
        </NavInner>
      </Nav>
    </>
  )
};

// components

// LinkParent wraps each child in LinkWrap
const LinkParent = ({children}) => {
  console.log({children})
  return (
    <>
      {React.Children.map(children, child => {
        return (
          <LinkWrap>{child}</LinkWrap>
        )
      })}
    </>
  )
};

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
`;

const Nav = styled.nav`
  bottom: 8rem;
  display: none;
  left: 0;
  overflow-y: scroll;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
  &.open {
    display: block;
    a {
      clip-path: inset(0);
    }
  }
`;

const NavInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: var(--max-width);
  width: 100%;
  a {
    border-color: var(--text-color);
    border-style: solid;
    border-bottom-width: 2px;
    clip-path: inset(0 100% 0 0);
    color: var(--background-color);
    font-size: 2.25rem;
    font-weight: 300;
    letter-spacing: ${theme.letterSpacing};
    line-height: 1.25;
    text-decoration: none;
    transition: clip-path .4s cubic-bezier(.45,.05,.55,.95) .2s;
    &.active {
      border-color: var(--background-color);
    }
  }
`;

const LinkWrap = styled(motion.div)`
  align-self: flex-start;
  margin-bottom: var(--spacing-medium);
  margin-left: var(--spacing-medium);
  &:first-child {
    margin-top: 16%;
  }
`;


export default Navigation;
