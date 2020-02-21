// components/Header.js

// Libraries
import Menu from '../components/Menu';

// Styles
import css from '../styles/Header.scss';

const Header = () => (
  <div>
    <header className={css.wrap}>
      <div className={css.flex}>
        <button className={['menu-text', css.btn].join(' ')}>
          <div className={css['btn-text']}><span>O</span><span>ff-menu</span></div>
        </button>
        <div class="ma0 f4 fw5 neue lh-solid">
          <a href="/" class="cph db yellow no-underline relative">
            <span class="absolute o-100">Christoph<span>er</span></span><span class="absolute">Hugentobler</span>
          </a>
          <a href="/" class="cph2 db yellow no-underline">
            <span class="o-0">Christopher</span><span class="visibility: hidden;">Hugentobler</span>
          </a>
        </div>
      </div>
    </header>
    <Menu />
  </div>
);

export default Header;
