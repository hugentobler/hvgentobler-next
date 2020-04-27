// components/Link.js
// Custom link component wrapping next/link

// Modules
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SetProperty from '../components/CustomCssProperties';

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
    const newPath = e.currentTarget.pathname; // Persist synthetic event.
    router.events.on('routeChangeStart', url => {
      // const body = document.querySelector('body');
      // body.classList.remove('ready');
      // body.classList.add('animating');
      // Set css properties on link click.
      SetProperty(newPath);
    });

    router.push(newPath);
  }

  return (
    <Link href={href}>
      {/*React.cloneElement(children, { className })*/}
      {React.cloneElement(children, { className, onClick })}
    </Link>
  );
}
