// components/Animation.js

// Modules
import { useRouter } from 'next/router';

export const PageReady = () => {
  console.log('PageReady')
  const body = document.querySelector('body');
  body.classList.add('ready');
  body.classList.remove('open');

  //Component has no UI, so return null
  return null;
};

export const Blinds = (mode) => {
  const body = document.querySelector('body');
  const button = document.querySelector('header button');
  const nav = document.querySelector('nav');
  const animating = 'animating';
  const blinds = 'blinds';
  const ready = 'ready';
  // The page is animating!
  body.classList.add(animating);
  button.disabled = true;

  switch(mode) {
    case 'link':
      body.classList.remove('menu');
      body.classList.remove('ready');
      // For cases from Link, if blinds open then close them, otherwise open and then close them.
      if (body.classList.contains(blinds)) {
        body.classList.remove(blinds);
        nav.addEventListener('transitionend', function AnimationEnd() {
          body.classList.remove(animating);
          button.disabled = false;
          body.classList.add(ready);
          nav.removeEventListener('transitionend', AnimationEnd);
        })
      } else {

      }
      break;
    default:
      body.classList.toggle(blinds);
      nav.addEventListener('transitionend', function AnimationEnd() {
        body.classList.remove(animating);
        button.disabled = false;
        nav.removeEventListener('transitionend', AnimationEnd);
      })
  }

  //Component has no UI, so return null
  return null;
};

export const ToggleMenu = () => {
  Blinds();

  const body = document.querySelector('body');
  body.classList.toggle('menu');

  //Component has no UI, so return null
  return null;
};
