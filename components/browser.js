// components/browser.js

import css from '../styles/Layout.scss'

const browser = () => {
  const body = document.querySelector('body');
  // No need to watch dom load event. Since this component is
  // dynamically imported, when it loads, the dom must be ready.
  body.classList.add(css.ready); // Import hashed style.
  window.scrollTo(0,0);

  return null; // No UI, so return null
};

export default browser;
