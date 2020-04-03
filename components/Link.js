// components/Link.js
// Custom link component wrapping next/link

// Modules
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ToggleMenu } from '../components/Animation';

export default ({ href, children }) => {
  const router = useRouter();

  // Append class if this is active page.
  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }

  // Pass clicks through page transition.
  const onClick = (e) => {
    e.preventDefault();
    const newPath = e.target.pathname; // Persist synthetic event.
    const animating = 'animating';
    const blinds = 'blinds';
    const menu = 'menu';
    const ready = 'ready';
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const button = document.querySelector('header button');

    body.classList.add(animating);
    body.classList.add(blinds);

    // Listen for end of nav animation.
    nav.addEventListener('transitionend', function navAnimationEnd() {
      body.classList.remove(animating);
      button.disabled = false;
      nav.removeEventListener('transitionend', navAnimationEnd);
      router.push(newPath, { shallow: true });
    })

    router.events.on('routeChangeStart', url => {
      body.classList.remove(ready);
      body.classList.add(animating);
      body.classList.remove(blinds);
    });
  }

  return (
    <Link href={href}>
      {React.cloneElement(children, { className, onClick })}
    </Link>
  );
}
