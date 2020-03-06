// components/Header.js

// Libraries
import Link from 'next/link';
import Menu from '../components/Menu';

// Styles
import css from '../styles/Header.scss';
import {open as Open} from '../styles/Menu.scss';

const Header = () => {
  const body = document.querySelector('body');
  //const button = document.querySelector('header button');
  const toggleMenu = (e) => {
    // Toggle nav open and close.
    body.classList.toggle(Open);
    e.currentTarget.firstChild.classList.toggle(css['btn-text-open']);

    // Disable menu button during animation.
    body.classList.add('animating');
    button.disabled = true;
  };

  return (
    <div>
      <header className={css.wrap}>
        <div className={css.flex}>
          <button className={css.btn} onClick={toggleMenu}>
            <div className={css['btn-text']}><span>O</span><span>ff-menu</span></div>
          </button>
          <div className={css.name}>
            <Link href="/">
              <a className={[css['cph'], css['name-text']].join(' ')}>
                <span>Christoph<span>er</span></span>
                <span>Hugentobler</span>
              </a>
            </Link>
            <Link href="/">
              <a className={[css['cph2'], css['name-text']].join(' ')}>
                <span>Christopher</span>
                <span>Hugentobler</span>
              </a>
            </Link>
          </div>
        </div>
      </header>
      <Menu />
    </div>
  )
};

export default Header;
