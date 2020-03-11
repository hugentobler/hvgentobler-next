// components/Link.js

// Libraries
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Styles

import {active as Active} from '../styles/Menu.scss';

export default ({ href, children }) => {
  const router = useRouter()

  // Append class if this is active page.
  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${Active}`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}
