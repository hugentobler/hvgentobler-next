// components/Browser.js

const Browser = () => {
  const scrolled = 'scrolled';
  const body = document.querySelector('body');
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
    if (Y >= 16) body.classList.add(scrolled);
  }

  const scrollingUp = (Y) => {
    body.classList.remove(scrolled);
  }

  //Component has no UI, so return null
  return null;
};

export default Browser;
