// components/Header.js

// Libraries
import Link from 'next/link';
import Menu from '../components/Menu';

// Styles
import css from '../styles/Header.scss';
import {open as Open} from '../styles/Menu.scss';

const Header = () => {
  const openMenu = () => {
    const body = document.querySelector('body'),
      c = Open;
    body.classList.toggle(c);
  };

  return (
    <div>
      <header className={css.wrap}>
        <div className={css.flex}>
          <button className={['menu-text', css.btn].join(' ')} onClick={openMenu}>
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
