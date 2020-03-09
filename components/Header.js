// components/Header.js

// Libraries
import Link from 'next/link';

// Styles
import cssHeader from '../styles/Header.scss';
import cssMenu from '../styles/Menu.scss';

const Header = () => {
  const body = document.querySelector('body');
  // Reset navigation menu.
  body.classList.remove(cssMenu.open);
  // Handle button click.
  const toggleMenu = (e) => {
    const button = document.querySelector('header button');
    const nav = document.querySelector('nav');
    // Toggle nav open and close.
    body.classList.toggle(cssMenu.open);
    e.currentTarget.firstChild.classList.toggle(cssHeader['btn-text-open']);

    // Disable menu button during animation.
    body.classList.add(cssHeader.animating);
    button.disabled = true;

    // Listen for end of nav animation.
    // let transitionEndCount = 0
    nav.addEventListener('transitionend', function animating() {
      // transitionEndCount++
      //if (transitionEndCount >= 6) { // # of children to be animated.
        body.classList.remove(cssHeader.animating);
        button.disabled = false;
        nav.removeEventListener('transitionend', animating);
      //}
    })
  };

  return (
    <div>
      <header className={cssHeader.wrap}>
        <div className={cssHeader.flex}>
          <button className={cssHeader.btn} onClick={toggleMenu}>
            <div className={cssHeader['btn-text']}><span>O</span><span>ff-menu</span></div>
          </button>
          <div className={cssHeader.name}>
            <Link href="/">
              <a className={[cssHeader['cph'], cssHeader['name-text']].join(' ')}>
                <span>Christoph<span>er</span></span>
                <span>Hugentobler</span>
              </a>
            </Link>
            <Link href="/">
              <a className={[cssHeader['cph2'], cssHeader['name-text']].join(' ')}>
                <span>Christopher</span>
                <span>Hugentobler</span>
              </a>
            </Link>
          </div>
        </div>
      </header>
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
      <nav className={cssMenu.wrap}>
        <div className={cssMenu.bg}>
          <div className={cssMenu.line}></div>
          <div className={[cssMenu.line, cssMenu.wide].join(' ')}></div>
          <div className={[cssMenu.line, cssMenu.wide].join(' ')}></div>
          <div className={cssMenu.line}></div>
          <div className={cssMenu.line}></div>
          <div className={cssMenu.line}></div>
        </div>
        <section className={cssMenu.text}>
          <Link href="/">
            <a onClick={toggleMenu} className={cssMenu.link}>Home &#8617;</a>
          </Link>
          <Link href="/25th">
            <a onClick={toggleMenu} className={cssMenu.link}>25th Birthday &#127812;</a>
          </Link>
        </section>
      </nav>
    </div>
  )
};

export default Header;
