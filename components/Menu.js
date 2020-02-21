// components/Menu.js

// Libraries
import Link from 'next/link';

// Styles
import css from '../styles/Menu.scss';

const Menu = () => (
  /*<button class="menu fixed top-50 left-0 tl dib ma0 outline-0 bn z-9999">
    <div class="menu-w relative dib v-mid">
      <span></span><span></span><span></span><span></span><span></span>
      <span></span><span></span><span></span><span></span>
    </div>
    <div class="menu-l relative v-mid ml3 dn dib-l">
      <span class="f6 f4-w sans-serif">Index</span>
      <span class="f6 f4-w sans-serif close">Close</span>
    </div>
  </button>*/
  <nav className={css.wrap}>
    <div className={css.bg}>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(1÷12) w-l-(2÷12)"></div>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(5÷12) w-l-(2÷12)"></div>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(5÷12) w-l-(2÷12)"></div>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(1÷12) w-l-(2÷12)"></div>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(1÷12) w-l-(2÷12)"></div>
      <div class="nav-bg relative h-100 dib v-top pa0 f5 w-(1÷12) w-l-(2÷12)"></div>
    </div>
    <section class="nav-text relative mt4">
      <Link href="/">
        <a class="f2 fw5 lh-title neue navy no-underline db">Home &#8617;</a>
      </Link>
      <Link href="/25th">
        <a class="f2 fw5 lh-title neue navy no-underline db">25th Birthday &#127812;</a>
      </Link>
    </section>
  </nav>
);

export default Menu;
