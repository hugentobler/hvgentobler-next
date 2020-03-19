// components/Header.js

// TODOs
/*
  - unsure if router.prefetch is really working
*/

// Libraries
import { useRouter } from 'next/router';
import Link from '../components/Link';

// Styles
import cssHeader from '../styles/Header.scss';
import cssMenu from '../styles/Menu.scss';

const Header = () => {
  const router = useRouter();
  const body = document.querySelector('body');
  // Reset navigation menu.
  body.classList.remove(cssMenu.open);
  // Handle button click.
  const toggleMenu = (e) => {
    const button = document.querySelector('.' + cssMenu.btn);
    const nav = document.querySelector('nav');
    let pathname;
    let route = false;
    // If click is from nav, prevent default and save pathname.
    // Then prefetch the page while nav is animating.
    if (e.target.matches('a')) {
      e.preventDefault();
      pathname = e.target.pathname;
      route = true;
      router.prefetch(pathname);
    }

    // Toggle nav open and close.
    body.classList.toggle(cssMenu.open);
    // button.firstChild.classList.toggle(cssHeader['btn-text-open']);

    // Disable menu button during animation.
    body.classList.add(cssHeader.animating);
    body.classList.add(cssMenu.animating);
    button.disabled = true;

    // Listen for end of nav animation.
    // let transitionEndCount = 0
    nav.addEventListener('transitionend', function animating() {
      // transitionEndCount++
      //if (transitionEndCount >= 6) { // # of children to be animated.
        body.classList.remove(cssHeader.animating);
        body.classList.remove(cssMenu.animating);
        button.disabled = false;
        nav.removeEventListener('transitionend', animating);
      //}
      // If click is from nav, handle page routing.
        if (route == true) router.push(pathname);
    })
  };

  return (
    <div>
      <header className={cssHeader.bottom}>
        <div className={cssHeader.inner}>
          <div className={cssHeader.name}>
            <a href="/">Christopher Hugentobler</a>
          </div>
          <button className={cssMenu.btn} onClick={toggleMenu}>
            {/*<div className={cssMenu.menu}><span>O</span><span>ff-menu</span></div>*/}
            <div className={cssMenu.menu}>Index</div>
            <div className={cssMenu.back}>Back</div>
          </button>
        </div>
      </header>
      {/*<header className={cssHeader.wrap}>
        <div className={cssHeader.flex}>
          <button className={cssHeader.btn} onClick={toggleMenu}>
            <div className={cssHeader['btn-text']}><span>O</span><span>ff-menu</span></div>
          </button>
          <div className={cssHeader.name}>
            <a href="/" className={[cssHeader['cph'], cssHeader['name-text']].join(' ')}>
              <span>Christoph<span>er</span></span>
              <span>Hugentobler</span>
            </a>
            <a href="/" className={[cssHeader['cph2'], cssHeader['name-text']].join(' ')}>
              <span>Christopher</span>
              <span>Hugentobler</span>
            </a>
          </div>
        </div>
      </header>*/}
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
