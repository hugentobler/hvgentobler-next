// components/browser.js

// Modules
import { useRouter } from 'next/router';

const browser = () => {
  const scrolled = 'scrolled';
  const body = document.querySelector('body');
  // No need to watch dom load event. Since this component is
  // dynamically imported, when it loads, the dom must be ready.
  body.classList.add('ready');
  // window.scrollTo(0,0);

  /*
    Update custom properties if available
  */
  const pageStyles = {
    '/': ['--black', '--white'],
    '/25th': ['--classic-blue', '--yellow']
  };
  const pathname = useRouter().pathname;
  const updateProperties = pageStyles[pathname];
  if (updateProperties) {
    document.documentElement.style.setProperty('--background-color', `var(${pageStyles[pathname][0]})`);
    document.documentElement.style.setProperty('--text-color', `var(${pageStyles[pathname][1]})`);
  }

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

  /*
    Lazy load images if lazyload images exist.
  */
  const images = document.querySelectorAll('img[loading="lazy"]');
  if (images.length != 0) { // Are there images?
    if ('loading' in HTMLImageElement.prototype) {
      // Lazyload supported in browser
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        img.src = img.dataset.src;
      });
    } else {
      if (typeof lazySizes == 'object') {
        // Lazysizes already exists
      } else {
        // Dynamically import the LazySizes library
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js';
        document.body.appendChild(script);
      }
    }
  }

  /*
    Component has no UI, so return null
  */
  return null;
};

export default browser;
