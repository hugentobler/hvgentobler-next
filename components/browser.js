// components/browser.js

import {ready as Ready} from '../styles/Layout.scss';
import {scrolled as Scrolled1} from '../styles/Header.scss';
import {scrolled as Scrolled2} from '../styles/Menu.scss';

const browser = () => {
  const body = document.querySelector('body');
  // No need to watch dom load event. Since this component is
  // dynamically imported, when it loads, the dom must be ready.
  body.classList.add(Ready); // Import hashed style.
  window.scrollTo(0,0);

  /*
    Handle scroll events
  */
  let newScrollY = 0,
    lastScrollY = 0,
    ticking = false;

  window.addEventListener('scroll', () => {
    newScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(update)
    }
    ticking = true;
  })

  const update = () => {
    let difference = newScrollY - lastScrollY;
    difference > 0 ? scrollingDown(difference) : scrollingUp(difference);
    lastScrollY = newScrollY; // save the number to compare in next tick
    ticking = false;
  }

  const scrollingDown = (Y) => {
    // Let body know that user has scrolled
    // Y > 16 ? body.classList.add(Scrolled1, Scrolled2) : body.classList.remove(Scrolled1, Scrolled2);
    if (Y >= 16) body.classList.add(Scrolled1);
  }

  const scrollingUp = (Y) => {
    body.classList.remove(Scrolled1);
  }

  /*
    Component has no UI, so return null
  */
  return null;
};

export default browser;
