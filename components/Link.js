// components/Link.js
// Custom link component wrapping next/link

// Modules
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Blinds } from '../components/Animation';

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

    Blinds('link');
    router.push(newPath);

    router.events.on('routeChangeStart', url => {
      // body.classList.remove(ready);
      // body.classList.add(animating);
      // body.classList.remove(blinds);
    });
  }

  return (
    <Link href={href}>
      {React.cloneElement(children, { className, onClick })}
    </Link>
  );
}
