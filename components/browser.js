// components/browser.js

import {ready as Ready} from '../styles/Layout.scss';
import {scrolled as Scrolled} from '../styles/Header.scss';

const browser = () => {
  const body = document.querySelector('body');
  // No need to watch dom load event. Since this component is
  // dynamically imported, when it loads, the dom must be ready.
  body.classList.add(Ready); // Import hashed style.
  window.scrollTo(0,0);

  /*
    Handle scroll events
  */
  let lastKnownScrollY = 0,
    ticking = false;

  window.addEventListener('scroll', () => {
    lastKnownScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(update)
    }
    ticking = true;
  })

  const update = () => {
    onScroll(lastKnownScrollY);
    ticking = false;
  }

  const onScroll = (Y) => {
    const c = Scrolled;
    // Let body know that user has scrolled
    Y > 16 ? body.classList.add(c) : body.classList.remove(c);
    // Let marqueeScroll know the scroll position
  }

  /*
    Component has no UI, so return null
  */
  return null;
};

export default browser;
