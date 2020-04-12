// components/Header.js

// Libraries
import Link from '../components/Link';
import { ToggleMenu } from '../components/Animation';

const Header = () => {
  return (
    <>
      <header>
        <div className='inner'>
          <div className='name'>
            {/*<Link href='/'>
              <a>Christopher Hugentobler</a>
            </Link>*/}
          </div>
          <button onClick={ToggleMenu}>
            <span id='menu'>🍔</span>
            <span id='back'>🍔</span>
          </button>
        </div>
      </header>
      <nav>
        <div className='side'></div>
        <div className='background'>
          <section className='text'>
            <Link href="/">
              <a className='link'>Home</a>
            </Link>
            <Link href='/25th'>
              <a className='link'>25<sup>th</sup> Birthday &#127812;</a>
            </Link>
          </section>
          {[...Array(6)].map((e, i) => <div className='line' key={i}></div>)}
        </div>
        <div className='side'></div>
      </nav>
      {/*<style jsx>{`
        $for-not-small: screen and (min-width: 30em);
        $letter-spacing: -0.05rem;
        header {
          align-items: center;
          // background: var(--background-color);
          bottom: 0;
          display: flex;
          flex-direction: column;
          height: 6rem;
          @media ($for-not-small) {
            height: 8rem;
          }
          justify-content: center;
          left: 0;
          right: 0;
          transition: all .3s cubic-bezier(.45,.05,.55,.95) 0s;
          position: fixed;
          z-index: 9999;
        }
        :global(.scrolled) header {
          transform: translateY(100%);
          opacity: 0;
        }
        .inner {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          max-width: var(--max-width);
          width: 100%;
        }
        .name {
          font-size: 1.6rem;
          @media ($for-not-small) {
            font-size: 2rem;
          }
          font-weight: 300;
          letter-spacing: -0.05rem;
          line-height: 1;
          margin-left: var(--spacing-small);
          & a {
            color: var(--text-color);
            text-decoration: none !important;
          }
        }
        button {
          align-items: center;
          background: var(--text-color);
          border-color: var(--text-color);
          border-radius: 50%;
          border-style: solid;
          border-width: 2px;
          color: var(--text-color);
          cursor: pointer;
          display: flex;
          height: 3rem;
          justify-content: center;
          margin-right: var(--spacing-medium);
          outline: 0;
          overflow: hidden;
          position: relative;
          transition: all .3s cubic-bezier(.45,.05,.55,.95) 0s;
          width: 3rem;
          z-index: 9999;
          @media ($for-not-small) {
            height: 4rem;
            width: 4rem;
          }
          &:hover, &:focus, &:active {
            transition: none;
            & > span {
              font-size: 2rem;
              height: 2rem;
              @media ($for-not-small) {
                font-size: 2.4rem;
                height: 2.4rem;
              }
            }
          }
          & > span {
            display: none;
            font-size: 1.6rem;
            font-weight: 300;
            height: 1.6rem;
            letter-spacing: $letter-spacing;
            line-height: 1;
          }
        }
        :global(.animating) button {
          cursor: wait;
        }
        :global(.menu) button {
          border-color: var(--background-color);
          & > span {
            font-size: 2rem;
            height: 2rem;
            @media ($for-not-small) {
              font-size: 2.4rem;
              height: 2.4rem;
            }
          }
        }
        #menu {
          display: unset !important;
        }
        :global(.menu) #menu {
          display: none !important;
        }
        :global(.menu) #back {
          display: unset !important;
        }
        nav {
          bottom: 0;
          display: flex;
          left: 0;
          position: fixed;
          right: 0;
          transition: visibility 0s .6s;
          top: 0;
          visibility: hidden;
          z-index: 999;
        }
        :global(.blinds) {
          overflow: hidden;
        }
        :global(.blinds) nav {
          visibility: visible;
          transition-delay: 0s;
        }
        .side {
          background-color: var(--text-color);
          flex-grow: 1;
          opacity: 0;
        }
        .background {
          font-size: 0;
          height: 100%;
          max-width: var(--max-width);
          position: relative;
          width: 100%;
        }
        :global(.blinds) .side {
          opacity: 1;
        }
        .line {
          display: inline-block;
          height: 100%;
          padding: var(--spacing-none);
          position: relative;
          vertical-align: top;
          width: calc(100% / 12 * 2);
          &::after {
            background-color: var(--text-color);
            border-right: 1px solid var(--background-color);
            bottom: 0;
            content: '';
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            transform: scaleX(0);
            transform-origin: center right;
            transition: transform .3s cubic-bezier(.45,.05,.55,.95) 0s;
          }
          &:last-child::after {
            border-right: none;
          }
        }
        :global(.blinds) .line::after {
          transform: scaleX(1);
          transform-origin: center left;
        }
        .text {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
          left: 0;
          bottom: 4rem;
          justify-content: flex-start;
          margin-left: var(--spacing-small);
          margin-top: 0;
          top: 0;
          overflow: scroll;
          position: absolute;
          width: 100%;
          z-index: 9999;
        }
        .link {
          border: none;
          border-color: var(--background-color);
          clip-path: inset(0 100% 0 0);
          color: var(--background-color);
          font-size: 2.25rem;
          font-weight: 300;
          letter-spacing: $letter-spacing;
          line-height: 1.25;
          margin-bottom: var(--spacing-small);
          text-decoration: none;
          transition: 0s;
          visibility: hidden;
          &:first-child {
            margin-top: var(--spacing-large);
          }
        }
        :global(.active) {
          border-bottom: 2px solid !important;
        }
        :global(.menu) .link {
          clip-path: inset(0);
          transition: all .4s cubic-bezier(.45,.05,.55,.95) .2s;
          visibility: visible;
        }
      `}</style>*/}
    </>
  )
};

export default Header;
